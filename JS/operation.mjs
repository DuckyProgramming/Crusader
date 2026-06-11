import {graphics,constants,dev,types,options} from './variables.mjs'
import {findName,findAbstract,smoothAnim,inPointBox,boxify,elementArray,distPos,even,last,flatMap} from './../../../JS/functions.mjs'
import {lsin,lcos} from './../../../JS/graphics.mjs'
import {transitionManager} from './../../../JS/transitionManager.mjs'
import {city} from './city.mjs'
import {unit} from './unit.mjs'
export class operation{
    constructor(map){
        this.map=map==undefined?0:map
        this.nextMap=this.map
        this.set=0
        this.cities=[]
        this.units=[]
        this.scene=`main`
        this.view={scale:1,scroll:{x:0,y:0},edge:{x:0,y:0}}
        this.turn={
            main:0,time:0,total:0,prep:false,start:true,old:false,loading:false,order:[],
            bonus:false,partition:[],translate:-1,
        }
        this.anim={main:0,prep:0,start:0,startOld:0,select:0,translate:0,selectTrigger:false}
        this.hist={time:0,tick:0,limit:45}
        this.inspect={units:[]}
        this.select={unit:0}
        this.initialMaps()

        this.initial()
        this.loadMap(this.map,map==undefined)
        this.initialComponents()

        constants.init=true
        if(dev.begin>=0){
            let flat=flatMap(types.map,-1)
            this.map=flat[dev.begin].mapIndex
            this.loadMap(this.map)
            this.initialComponents()
            this.initialUnits(flat[dev.begin].index)
            this.turn.start=false
            this.units.forEach(unit=>{
                unit.fade.trigger=true
                unit.fade.statTrigger=true
            })
            this.cities.forEach(city=>city.fade.revealTrigger=true)
        }else if(dev.view>=0){
            let flat=flatMap(types.map,-1)
            this.map=flat[dev.view].mapIndex
            this.loadMap(this.map)
            this.initialComponents()
            this.scene=`mapAll`
            this.initialUnits(flat[dev.view].index)
        }else if(dev.reserve!=-1){
            this.scene=`orderView`
            if(typeof dev.reserve==`number`){
                let len=this.units.length
                this.units.push(new unit(this,types.reserve[dev.reserve]))
                while(this.units.length>len){
                    this.inspect.units.push(last(this.units))
                    this.units.splice(this.units.length-1,1)
                }
            }else{
                let flat=flatMap(types.map,-1)
                let len=this.units.length
                this.units.push(new unit(this,flat[dev.reserve[0]].unit.unit[dev.reserve[1]]))
                while(this.units.length>len){
                    this.inspect.units.push(last(this.units))
                    this.units.splice(this.units.length-1,1)
                }
            }
        }
    }
    save(){
        let composite={
            map:types.map[this.map].id,
            set:types.map[this.map].unit[this.set].name,
            cities:this.cities.map(city=>city.save()),
            units:this.units.map(unit=>unit.save()),
            view:this.view,
            turn:{
                main:this.turn.main,
                time:this.turn.time,
                total:this.turn.total,
                prep:this.turn.prep,
                start:this.turn.start,
                old:this.turn.old,
                loading:this.turn.loading,
                bonus:this.turn.bonus,
                partition:this.turn.partition,
                storePick:this.turn.storePick,
                translate:this.turn.translate,
            },
            anim:this.anim,
            transitionManager:this.transitionManager.save()
        }
        return composite
    }
    saveCol(){
        saveStrings([JSON.stringify(this.save())],'crusaderSaveFile','json')
    }
    async load(result){
        let composite=JSON.parse(result)

        let map=findAbstract(`id`,composite.map,types.map)
        this.loadMap(map)
        this.initialComponents()
        this.map=map
        this.nextMap=map
        this.set=findName(composite.set,types.map[this.map].unit)
        this.view=composite.view
        this.turn.main=composite.turn.main
        this.turn.time=composite.turn.time
        this.turn.total=composite.turn.total
        this.turn.prep=composite.turn.prep
        this.turn.start=composite.turn.start
        this.turn.old=composite.turn.old
        this.turn.loading=composite.turn.loading
        this.turn.bonus=composite.turn.bonus
        this.turn.partition=composite.turn.partition
        this.turn.storePick=composite.turn.storePick
        this.turn.translate=composite.turn.translate
        this.anim=composite.anim
        if(composite.cities!=undefined){
            composite.cities.forEach((cit,index)=>{this.cities[index].load(cit)})
        }
        if(composite.units!=undefined){
            this.units=composite.units.map(uni=>{
                let sub=new unit(this,{
                    level:0,type:[],team:`British`,
                    desc:``,name:``,designation:``,commander:``,icon:``,
                    pos:[0,0],
                    elements:[],
                })
                sub.load(uni)
                return sub
            })
        }
        this.units.forEach(unit=>unit.loadBar())
        
        this.transitionManager.load(composite.transitionManager)
    }
    loadStp(input){
        let file=input.files[0]
        let reader=new FileReader()
        reader.operation=this
        reader.readAsText(file)
        reader.onload=function(){this.operation.load(reader.result)}
    }
    loadCol(){
        let input=document.createElement('input')
        input.type='file'
        input.operation=this
        input.click()
        input.addEventListener('change',function(){this.operation.loadStp(this)},false)
    }
    reform(){
        return new operation(this.map)
    }
    startTurn(){
        this.units.forEach(unit=>{
            unit.fade.trigger=false
            unit.fade.hide=false
            unit.fade.statTrigger=false
            unit.logs.trigger=false
        })
        this.cities.forEach(city=>city.fade.revealTrigger=false)
        if(this.turn.bonus>0&&this.turn.main>=1){
            this.turn.bonus--
            this.startTick()
        }else if(this.turn.main>=this.turn.partition.length){
            this.startTick()
        }else{
            this.turn.prep=true
        }
    }
    startTick(){
        this.turn.main=-1
        this.turn.time=constants.turnTime
        this.units.forEach(unit=>unit.startTick())
        this.turn.order=this.units.sort((a,b)=>b.contain.stats.speed-a.contain.stats.speed)
    }
    endTick(){
        types.player.forEach((player,index)=>{
            let active=[]
            this.cities.forEach(city=>{
                if(city.type==1&&city.owner==index){
                    city.supply.connect[index]=1
                    active.push(city)
                }else{
                    city.supply.connect[index]=0
                }
            })
            while(active.length>0){
                active[0].connect.main.forEach(conn=>{
                    if(conn.supply.connect[index]==0){
                        conn.supply.connect[index]=1
                        if(
                            conn.owner==-1&&!types.player.some((player2,index2)=>player2.side!=player.side&&conn.near(50,index2))||
                            conn.owner!=-1&&types.player[conn.owner].side==types.player[index].side
                        ){
                            active.push(conn)
                        }
                    }
                })
                active.splice(0,1)
            }
        })
        this.units.forEach(unit=>unit.endTick())
        this.cities.forEach(city=>city.endTick())
        this.updateStrength()
        this.turn.total++
        this.turn.main=0
        this.startTurn()
    }
    updateStrength(){
        this.units.forEach(unit=>unit.updateStrength())
    }
    transitionComplete(scene){}
    loadMap(map,load){
        types.city=types.map[map].city
        types.connect=types.map[map].connect
        types.team=types.map[map].team
        types.player=types.map[map].player
        types.side=types.map[map].side
        if(load||load==undefined){
            this.loadMapComponents(map)
        }
    }
    async loadMapComponents(map){
        let root=``
        let term=types.map[map].term
        if(graphics.load.map[map]==undefined){
            graphics.load.map[map]=await new Promise((resolve,reject)=>{
                loadImage(`${root}Assets/${term}/map/main.png`,
                (img)=>resolve(img),reject)
            })
            /*graphics.load.map[map]=[]
            types.map[map].term.forEach(async (term,index,arr)=>{
                graphics.load.map[map].push(await new Promise((resolve,reject)=>{
                    loadImage(`${root}Assets/${term}/map/main.png`,
                    (img)=>resolve(img),reject)
                }))
            })*/
        }
        graphics.load.water=await new Promise((resolve,reject)=>{
            loadBytes(`${root}Assets/${term}/data/water.bin`,
            (img)=>resolve(img),reject)
        })
        graphics.load.fortifications=await new Promise((resolve,reject)=>{
            loadBytes(`${root}Assets/${term}/data/fortifications.bin`,
            (img)=>resolve(img),reject)
        })
        if(graphics.load.water.hasOwnProperty(`bytes`)){
            graphics.load.water=Array.from(graphics.load.water.bytes).map(byte=>byte.toString(2).padStart(8,`0`))
        }
        if(graphics.load.fortifications.hasOwnProperty(`bytes`)){
            graphics.load.fortifications=Array.from(graphics.load.fortifications.bytes).map(byte=>byte.toString(2).padStart(8,`0`))
        }
    }
    initial(){
        this.transitionManager=new transitionManager(this)
    }
    initialMaps(){
        if(!constants.init){
        }
    }
    initialComponents(){
        this.cities=[]
        types.city.forEach(data=>this.cities.push(new city(this,data)))
        types.connect.forEach(data=>{
            if(data.name.every(name=>name!=``)){
                let cit=data.name.map(name=>this.cities[findName(name,this.cities)])
                cit[0].connect.main.push(cit[1])
                cit[1].connect.main.push(cit[0])
                cit[0].connect.primary.push(cit[1])
            }
        })
    }
    initialUnits(set){
        this.set=set
        this.turn.bonus=types.map[this.map].unit[this.set].bonus
        this.turn.partition=types.map[this.map].unit[this.set].partition
        types.unit=types.map[this.map].unit[this.set].unit
        types.reserve=types.map[this.map].reserve
        this.spawnUnits()
    }
    spawnUnits(){
        types.unit.forEach(data=>this.units.push(new unit(this,data)))
    }
    display(layer){
        let img
        switch(this.scene){
            case `water`: case `fortifications`:
                for(let a=0,la=600;a<la;a++){
                    for(let b=0,lb=320;b<lb;b++){
                        let pix=a*5+b*5*3000
                        layer.fill(graphics.load[this.scene][floor(pix/8)][pix%8]*200)
                        layer.rect(a,b,1)
                    }
                }
                noLoop()
            break
            case `main`:
                img=graphics.load.map[this.map]
                if(img!=undefined){
                    this.view.scale=layer.width/img.width*types.map[this.map].mapScale
                    this.view.edge.x=img.width
                    this.view.edge.y=img.height
                    layer.push()
                    layer.scale(this.view.scale)
                    layer.translate(this.view.scroll.x,this.view.scroll.y)
                    layer.image(img,img.width/2,img.height/2,img.width,img.height)
                    this.cities.forEach(city=>city.display(layer,`road`))
                    this.cities.forEach(city=>city.display(layer,this.scene))
                    
                    this.units.forEach(unit=>unit.display(layer,`underOrder`))
                    this.units.forEach(unit=>unit.display(layer,`under`))
                    this.units.filter(unit=>this.turn.main!=-1&&!this.turn.partition[this.turn.main].includes(unit.player)).forEach(unit=>unit.display(layer,this.scene))
                    this.units.forEach(unit=>unit.displayInfo(layer,`order`))
                    this.units.filter(unit=>this.turn.main==-1||this.turn.partition[this.turn.main].includes(unit.player)).forEach(unit=>unit.display(layer,this.scene))
                    this.units.forEach(unit=>unit.displayInfo(layer,`stat`))
                    this.units.forEach(unit=>unit.displayInfo(layer,this.scene))
                    this.units.forEach(unit=>unit.displayInfo(layer,`logs`))
                    layer.pop()
                }

                layer.noStroke()
                if(this.anim.prep>0){
                    layer.fill(200,this.anim.prep)
                    layer.rect(layer.width/2,layer.height/2,800,120,20)
                    layer.fill(0,this.anim.prep)
                    layer.textSize(80)
                    layer.text(`${this.turn.partition[this.turn.main][0].length==2?`Axis`:types.player[this.turn.partition[this.turn.main][0]].name} Turn Begin`,layer.width/2,layer.height/2+4)
                }
                if(this.anim.translate>0){
                    layer.fill(200,this.anim.translate)
                    layer.rect(layer.width/2,layer.height/2,800,340,20)
                    layer.fill(0,this.anim.translate)
                    layer.textSize(80)
                    layer.text(`Pick Languages`,layer.width/2,layer.height/2-96)
                    layer.fill(150,this.anim.translate)
                    layer.rect(layer.width/2,layer.height/2+10,480,80,20)
                    layer.rect(layer.width/2,layer.height/2+110,480,80,20)
                    layer.fill(0,this.anim.translate)
                    layer.textSize(25)
                    layer.text(`Translated Names`,layer.width/2,layer.height/2)
                    layer.text(`Untranslated Names`,layer.width/2,layer.height/2+100)
                    layer.textSize(20)
                    layer.text(`e.g. 33rd Reconnaissance Battalion`,layer.width/2,layer.height/2+30)
                    layer.text(`e.g. Aufklärungs-Abteilung 33`,layer.width/2,layer.height/2+130)
                }
                for(let a=0,la=2;a<la;a++){
                    let anim=[this.anim.start,this.anim.startOld][a]
                    if(anim>0){
                        let flat=flatMap(types.map,a==1)
                        let columns=4
                        layer.fill(200,anim)
                        layer.rect(layer.width/2,layer.height/2,40+columns*380,140+ceil(flat.length/columns)*100,30)
                        layer.fill(150,anim)
                        for(let a=0,la=flat.length;a<la;a++){
                            let spread=even(floor(a/columns),ceil(la/columns))
                            let left=min(la-floor(a/columns)*columns,columns)
                            layer.rect(layer.width/2-190*(left-1)+a%columns*380,layer.height/2+60+spread*100,360,80,20)
                        }
                        layer.fill(0,anim)
                        layer.textSize(80)
                        layer.text(`Crusader`,layer.width/2,layer.height/2-10-ceil(flat.length/columns)*50)
                        layer.textSize(40)
                        layer.text(`DuckyProgramming`,layer.width/2,layer.height/2+40-ceil(flat.length/columns)*50)
                        for(let a=0,la=flat.length;a<la;a++){
                            let spread=even(floor(a/columns),ceil(la/columns))
                            let left=min(la-floor(a/columns)*columns,columns)
                            layer.textSize(15)
                            layer.text(`1234567890ABCDEFGH`[a],layer.width/2-190*(left-1)+160+a%columns*380,layer.height/2+35+spread*100)
                            if(flat[a].unit.strength.num.length==0){
                                layer.textSize(30)
                                layer.text(flat[a].unit.name,layer.width/2-190*(left-1)+a%columns*380,layer.height/2+60+spread*100)
                            }else{
                                layer.textSize(25)
                                layer.text(flat[a].unit.name,layer.width/2-190*(left-1)+a%columns*380,layer.height/2+50+spread*100)
                                layer.textSize(20)
                                layer.text(flat[a].unit.strength.num.map(set=>set.filter(set=>set>0).join(` + `)).join(` vs `),layer.width/2-190*(left-1)+a%columns*380,layer.height/2+75+spread*100)
                                layer.textSize(15)
                                layer.text(flat[a].unit.strength.name,layer.width/2-190*(left-1)+a%columns*380,layer.height/2+90+spread*100)
                            }
                        }
                    }
                }
                if(this.anim.main>0){
                    layer.fill(200,this.anim.main)
                    layer.rect(layer.width,0,920,360,30)
                    if(this.anim.select<1){
                        layer.fill(150,this.anim.main*(1-this.anim.select))
                        layer.rect(layer.width-340,50,200,60,10)
                        layer.rect(layer.width-120,50,200,60,10)
                        layer.rect(layer.width-340,130,200,60,10)
                        layer.rect(layer.width-120,130,200,60,10)
                        layer.fill(0,this.anim.main*(1-this.anim.select))
                        layer.textSize(30)
                        layer.text(`End Turn`,layer.width-340,50)
                        layer.text(`Save`,layer.width-120,50)
                        layer.text(`Hide Units`,layer.width-340,130)
                        layer.text(`Load`,layer.width-120,130)
                        layer.textSize(20)
                        layer.text(`Turn ${this.turn.total+1}`,layer.width-40,200)
                        layer.textSize(15)
                        layer.text(`Enter`,layer.width-260,30)
                        layer.text(`Shift`,layer.width-260,110)
                    }
                    if(this.anim.select>0){
                        layer.fill(0,this.anim.main*this.anim.select)
                        layer.textSize(15)
                        layer.text(this.select.unit.desc,layer.width-80,50,140)
                        layer.text([0,1,2,3].map(num=>floor(this.select.unit.getKills(num))).map((num,index)=>{return {num:num,text:`${num} ${[`Kills`,`Vehicles`,`Artillery`,`Mortars`][index]}`}}).filter(obj=>obj.num>0).map(({text})=>text).join(`\n`),layer.width-80,130,140)
                        /*if(!this.select.unit.contain.trigger&&this.select.unit.contain.units.length<=0&&(this.select.unit.contain.middle?0:1)){
                            layer.fill(150,this.anim.main*this.anim.select)
                            layer.rect(layer.width-340,50,200,60,10)
                            layer.fill(0,this.anim.main*this.anim.select)
                            layer.textSize(30)
                            layer.text(this.select.unit.contain.units.length==0?`Disband HQ`:`Disband`,layer.width-340,50,200)
                            layer.textSize(10)
                            layer.text(`Enter`,layer.width-260,25)
                        }else if(this.select.unit.contain.middle||this.select.unit.contain.trigger&&){*/
                        let detach=(this.select.unit.level!=constants.minLevel&&this.select.unit.level!=constants.minLevel+1||this.select.unit.contain.adhoc)&&(this.select.unit.contain.trigger||this.select.unit.contain.middle)&&this.select.unit.contain.units.length>0
                        let absorb=this.select.unit.contain.trigger?
                            this.units.filter(unit=>unit.active&&unit.fade.main>0&&unit.id!=this.select.unit.id&&(unit.level==constants.minLevel||unit.level==constants.minLevel+1)&&!unit.contain.adhoc&&distPos(unit,this.select.unit)<150&&types.player[unit.player].side==types.player[this.select.unit.player].side):
                            this.select.unit.contain.middle?
                            this.select.unit.parent.contain.units.filter(unit=>unit.active&&unit.fade.main>0&&unit.id!=this.select.unit.id&&distPos(unit,this.select.unit)<200):
                            this.units.filter(unit=>unit.active&&unit.fade.main>0&&unit.id!=this.select.unit.id&&distPos(unit,this.select.unit)<200&&unit.parent==-1)
                        if(!this.select.unit.contain.trigger&&this.select.unit.contain.units.length>0&&this.select.unit.contain.units.every(unit=>distPos(unit,this.select.unit)<150&&unit.contain.trigger&&unit.contain.units.length==1)){
                            absorb.push(-1)
                        }
                        layer.fill(150,this.anim.main*this.anim.select)
                        if(detach){
                            layer.rect(layer.width-340,50,200,60,10)
                            if(this.select.unit.contain.units.length>1){
                                layer.rect(layer.width-190,50,60,60,10)
                            }
                        }else if(this.select.unit.contain.units.length==0||!this.select.unit.contain.trigger&&!this.select.unit.contain.middle){
                            layer.rect(layer.width-340,50,200,60,10)
                        }
                        if(absorb.length>0){
                            layer.rect(layer.width-340,130,200,60,10)
                        }
                        if(absorb.length>1){
                            layer.rect(layer.width-190,130,60,60,10)
                        }
                        layer.fill(0,this.anim.main*this.anim.select)
                        if(detach){
                            layer.textSize(this.select.unit.contain.units.length<=1?30:15)
                            layer.text(
                                this.select.unit.contain.units.length==1?(this.select.unit.contain.middle?`Disband`:`Detach HQ`):
                                `Detach ${this.select.unit.contain.units[this.select.unit.order.detach%this.select.unit.contain.units.length].desc}`,layer.width-340,50,200
                            )
                            if(this.select.unit.contain.units.length>1){
                                layer.textSize(20)
                                layer.text(`Next`,layer.width-190,50)
                            }
                        }else if(this.select.unit.contain.units.length==0){
                            layer.textSize(30)
                            layer.text(`Disband HQ`,layer.width-340,50)
                        }else if(!this.select.unit.contain.trigger&&!this.select.unit.contain.middle){
                            layer.textSize(30)
                            layer.text(`Inspect`,layer.width-340,50)
                        }
                        if(absorb.length>0){
                            layer.textSize(15)
                            let target=absorb[this.select.unit.order.absorb%absorb.length]
                            layer.text(`Absorb ${target==-1?`Subelements`:target.getDesc()}`,layer.width-340,130,200)
                        }
                        if(absorb.length>1){
                            layer.textSize(20)
                            layer.text(`Next`,layer.width-190,130)
                        }
                        if(detach){
                            layer.textSize(10)
                            layer.text(`Enter`,layer.width-260,25)
                            if(this.select.unit.contain.units.length>1){
                                layer.textSize(15)
                                layer.text(`@`,layer.width-180,30)
                            }
                        }else if(this.select.unit.contain.units.length==0||!this.select.unit.contain.trigger&&!this.select.unit.contain.middle){
                            layer.textSize(10)
                            layer.text(`Enter`,layer.width-260,25)
                        }
                        if(absorb.length>0){
                            layer.textSize(10)
                            layer.text(`Shift`,layer.width-260,105)
                        }
                        if(absorb.length>1){
                            layer.textSize(15)
                            layer.text(`#`,layer.width-180,110)
                        }
                        //}
                    }
                }
            break
            case `mapAll`:
                img=graphics.load.map[this.map]
                if(img!=undefined){
                    this.view.scale=layer.width/img.width
                    layer.push()
                    layer.scale(this.view.scale)
                    layer.image(img,img.width/2,img.height/2,img.width,img.height)
                    this.cities.forEach(city=>city.display(layer,`road`))
                    this.cities.forEach(city=>city.display(layer,this.scene))
                    this.units.forEach(unit=>unit.display(layer,`under`))
                    this.units.forEach(unit=>unit.display(layer,this.scene))
                    this.units.forEach(unit=>unit.displayInfo(layer,this.scene))
                    layer.pop()
                }
            break
            case `hist`:
                img=graphics.load.map[this.map]
                if(img!=undefined){
                    this.view.scale=layer.width/img.width
                    layer.push()
                    layer.scale(this.view.scale)
                    layer.image(img,img.width/2,img.height/2,img.width,img.height)
                    this.cities.forEach(city=>city.display(layer,`road`))
                    this.cities.forEach(city=>city.display(layer,this.scene))
                    this.units.forEach(unit=>unit.display(layer,`under`))
                    this.units.forEach(unit=>unit.display(layer,this.scene))
                    this.units.forEach(unit=>unit.displayInfo(layer,`stat`))
                    this.units.forEach(unit=>unit.displayInfo(layer,this.scene))
                    layer.pop()
                }
            break
            case `orderView`:
                layer.background(200)
                this.inspect.units[0].display(layer,this.scene)
            break
        }
        this.transitionManager.display(layer)
    }
    update(layer,mouse){
        let rel={position:{x:mouse.position.x/this.view.scale,y:mouse.position.y/this.view.scale}}
        if(types.map[this.map].mapScale>1){
            rel.position.x-=this.view.scroll.x
            rel.position.y-=this.view.scroll.y
        }
        switch(this.scene){
            case `mapAll`:
                this.cities.forEach(city=>city.update(layer,this.scene,rel))
                this.units.forEach(unit=>unit.update(layer,this.scene,rel))
            break
            case `main`:
                this.anim.main=smoothAnim(this.anim.main,!this.turn.prep&&this.turn.translate==-1&&!this.turn.start&&this.turn.time==0,0,1,5)
                this.anim.prep=smoothAnim(this.anim.prep,this.turn.prep&&this.turn.translate==-1,0,1,5)
                this.anim.start=smoothAnim(this.anim.start,this.turn.start&&!this.turn.old&&this.turn.translate==-1,0,1,5)
                this.anim.startOld=smoothAnim(this.anim.startOld,this.turn.start&&this.turn.old&&this.turn.translate==-1,0,1,5)
                this.anim.translate=smoothAnim(this.anim.translate,this.turn.translate>=0,0,1,5)

                this.anim.selectTrigger=this.units.some(unit=>unit.order.trigger)
                this.anim.select=smoothAnim(this.anim.select,this.anim.selectTrigger,0,1,5)

                this.cities.forEach(city=>city.update(layer,this.scene,rel))
                this.units.forEach(unit=>unit.update(layer,this.scene,rel))
                if(this.turn.loading&&this.units.length>0){
                    this.units.forEach(unit=>{
                        unit.fade.trigger=(this.turn.partition[this.turn.main].includes(unit.player)||unit.nearTransientSet(160,this.turn.partition[this.turn.main]))&&unit.active
                        unit.order.trigger=false
                        if(this.turn.partition[this.turn.main].includes(unit.player)){
                            unit.fade.statTrigger=true
                            if(unit.logs.main.length>0){
                                unit.logs.trigger=true
                            }
                        }
                    })
                    this.turn.loading=false
                }
                while(this.turn.time>0){
                    this.cities.forEach(city=>city.operate(layer,this.scene,rel))
                    this.turn.order.forEach(unit=>unit.operate(layer,this.scene,rel))
                    this.turn.time--
                    if(this.turn.time<=0){
                        this.endTick()
                    }else if(dev.slow){
                        break
                    }
                }
            break
            case `hist`:
                this.cities.forEach(city=>city.update(layer,this.scene,this.hist))
                this.units.forEach(unit=>unit.update(layer,this.scene,this.hist))
                if(this.hist.tick<this.turn.total*2-1){
                    this.hist.time++
                    if(this.hist.time>=this.hist.limit){
                        this.hist.time=0
                        this.hist.tick++
                        this.hist.limit=60-this.hist.limit
                    }
                }
            break
        }
        this.transitionManager.update()
    }
    control(input){
        let absorb=this.select.unit.contain.trigger?
            this.units.filter(unit=>unit.active&&unit.fade.main>0&&unit.id!=this.select.unit.id&&(unit.level==constants.minLevel||unit.level==constants.minLevel+1)&&!unit.contain.adhoc&&distPos(unit,this.select.unit)<150&&types.player[unit.player].side==types.player[this.select.unit.player].side):
            this.select.unit.contain.middle?(
                this.select.unit.parent==-1?[]:
                this.select.unit.parent.contain.units.filter(unit=>unit.active&&unit.fade.main>0&&unit.id!=this.select.unit.id&&distPos(unit,this.select.unit)<200)
            ):
            this.units.filter(unit=>unit.active&&unit.fade.main>0&&unit.id!=this.select.unit.id&&distPos(unit,this.select.unit)<200&&unit.parent==-1)
        if(!this.select.unit.contain.trigger&&this.select.unit.contain.units.length>0&&this.select.unit.contain.units.every(unit=>distPos(unit,this.select.unit)<150&&unit.contain.trigger&&unit.contain.units.length==1)){
            absorb.push(-1)
        }
        if(this.select.unit.contain.trigger){
            if(this.select.unit.level!=constants.minLevel&&this.select.unit.level!=constants.minLevel+1||this.select.unit.contain.adhoc){
                switch(input){
                    case 0:
                        let element=this.select.unit.contain.units[this.select.unit.order.detach%this.select.unit.contain.units.length]
                        for(let a=0,la=100;a<la;a++){
                            let dir=random(0,360)
                            let pos={position:{
                                x:this.select.unit.position.x+lsin(dir)*(this.select.unit.radius+types.unitLevel[3].size[element.player]+1),
                                y:this.select.unit.position.y+lcos(dir)*(this.select.unit.radius+types.unitLevel[3].size[element.player]+1)
                            }}
                            if(!this.units.some(unit=>unit.active&&distPos(unit,pos)<types.unitLevel[this.select.unit.level==constants.minLevel?4:3].size[element.player]+unit.radius)){
                                let result=new unit(this,{
                                    pos:[pos.position.x,pos.position.y],
                                    level:element.level,type:element.type.map(type=>types.unitType[type].name),team:element.team,
                                    desc:element.desc,name:element.name,designation:element.designation,commander:element.commander,
                                    icon:element.icon,elements:[],
                                })
                                result.contain.units.push(element)
                                result.calculateElements()
                                result.fade=JSON.parse(JSON.stringify(this.select.unit.fade))
                                result.parent=this.select.unit.parent
                                this.units.push(result)
                                let removed=false
                                if(this.select.unit.contain.units.length==1){
                                    this.select.unit.contain.trigger=false
                                    if(this.select.unit.parent!=-1){
                                        this.select.unit.contain.middle=true
                                    }
                                    this.select.unit.contain.units=[result]
                                    result.parent=this.select.unit
                                }else{
                                    this.select.unit.contain.units.splice(this.select.unit.order.detach%this.select.unit.contain.units.length,1)
                                    removed=true
                                }
                                this.select.unit.calculateElements()
                                if(removed&&this.select.unit.parent!=-1){
                                    this.select.unit.parent.contain.units.push(result)
                                }
                                break
                            }
                            if(this.select.unit.contain.units.length==1&&a==la-1){
                                let element=this.select.unit.contain.units[0]
                                let result=new unit(this,{
                                    pos:[this.select.unit.position.x,this.select.unit.position.y],
                                    level:element.level,type:element.type.map(type=>types.unitType[type].name),team:element.team,
                                    desc:element.desc,name:element.name,designation:element.designation,commander:element.commander,
                                    icon:element.icon,elements:[],
                                })
                                result.contain.units.push(element)
                                result.calculateElements()
                                result.fade=JSON.parse(JSON.stringify(this.select.unit.fade))
                                result.parent=this.select.unit.parent
                                result.stats.kills.forEach((set,index,arr)=>arr[index]=this.select.unit.stats.kills[index])
                                this.units.push(result)
                                this.select.unit.active=false
                                if(this.select.unit.parent!=-1){
                                    this.select.unit.parent.contain.units.splice(
                                        this.select.unit.parent.contain.units.indexOf(this.select.unit),
                                        1
                                    )
                                    this.select.unit.parent.contain.units.push(result)
                                }
                                this.select.unit.contain.units=[]
                                this.select.unit.order.trigger=false
                                this.select.unit=result
                                if(this.turn.partition[this.turn.main].includes(this.select.unit.player)){
                                    this.select.unit.order.trigger=true
                                }
                            }
                        }
                    break
                    case 1:
                        this.select.unit.order.detach++
                    break
                }
            }
            if(absorb.length>0){
                switch(input){
                    case 2:
                        if((this.select.unit.level==constants.minLevel||this.select.unit.level==constants.minLevel+1)&&!this.select.unit.contain.adhoc){
                            let target=absorb[this.select.unit.order.absorb%absorb.length]
                            let element=this.select.unit.contain.units[0]
                            let typing=element.type.map(type=>types.unitType[type].name)
                            absorb[this.select.unit.order.absorb%absorb.length].contain.units[0].type.forEach(type=>{
                                if(!typing.includes(types.unitType[type].name)){
                                    typing.push(types.unitType[type].name)
                                }
                            })
                            let result=new unit(this,{
                                pos:[this.select.unit.position.x,this.select.unit.position.y],
                                level:element.level==constants.minLevel+1&&target.level==constants.minLevel+1||element.level==constants.minLevel&&target.level==constants.minLevel+1||element.level==constants.minLevel+1&&target.level==constants.minLevel?4:[2,3,3][element.player],type:typing,team:element.team,
                                desc:`${[
                                    `${element.commander!=``?`${element.commander}col`:`Col`}`,
                                    `${options.translate?`Battle Group`:`Kampfgruppe`}${element.commander!=``?` ${element.commander}`:``}`,
                                    options.translate?`Column${element.commander!=``?` ${element.commander}`:``}`:`Colonna${element.commander!=``?` ${element.commander}`:``}`
                                ][element.player]}`,name:[`${element.commander!=``?(element.commander.includes(`-`)?`${element.commander.replace(`-`,`-\n`)}col`:`${element.commander}col`):`Col`}`,`KG`,`C`][element.player],designation:element.designation==``?element.name:element.designation,commander:element.commander,
                                icon:element.icon,elements:[],
                            })
                            result.contain.adhoc=true
                            result.contain.units.push(element)
                            result.contain.units.push(target.contain.units[0])
                            target.active=false
                            target.contain.units=[]
                            result.calculateElements()
                            result.fade=JSON.parse(JSON.stringify(this.select.unit.fade))
                            result.parent=this.select.unit.parent
                            this.units.push(result)
                            this.select.unit.active=false
                            if(this.select.unit.parent!=-1){
                                this.select.unit.parent.contain.units.splice(
                                    this.select.unit.parent.contain.units.indexOf(this.select.unit),
                                    1
                                )
                                this.select.unit.parent.contain.units.push(result)
                            }
                            this.select.unit.contain.units=[]
                            this.select.unit.order.trigger=false
                            this.select.unit=result
                            if(this.turn.partition[this.turn.main].includes(this.select.unit.player)){
                                this.select.unit.order.trigger=true
                            }
                            if(target.parent!=-1){
                                target.parent.contain.units.splice(
                                    target.parent.contain.units.indexOf(target),
                                    1
                                )
                            }
                        }else{
                            let target=absorb[this.select.unit.order.absorb%absorb.length]
                            let artillery=this.select.unit.order.artillery
                            this.select.unit.contain.units.push(target.contain.units[0])
                            this.select.unit.calculateElements()
                            target.active=false
                            target.contain.units=[]
                            if(target.parent!=-1){
                                target.parent.contain.units.splice(
                                    target.parent.contain.units.indexOf(target),
                                    1
                                )
                            }
                            this.select.unit.calculateElements()
                            this.select.unit.order.artillery=artillery
                        }
                    break
                    case 3:
                        this.select.unit.order.absorb++
                    break
                }
            }
        }else if(this.select.unit.contain.middle){
            if(this.select.unit.contain.units.length>0){
                switch(input){
                    case 0:
                        let element=this.select.unit.contain.units[this.select.unit.order.detach%this.select.unit.contain.units.length]
                        element.parent=this.select.unit.parent
                        this.select.unit.parent.contain.units.push(element)
                        this.select.unit.contain.units.splice(
                            this.select.unit.contain.units.indexOf(element),
                            1
                        )
                    break
                    case 1:
                        this.select.unit.order.detach++
                    break
                }
            }else{
                if(input==0){
                    this.select.unit.active=false
                    this.select.unit.destroy()
                    this.select.unit.order.trigger=false
                }
            }
            if(absorb.length>0){
                switch(input){
                    case 2:
                        let target=absorb[this.select.unit.order.absorb%absorb.length]
                        if(target==-1){
                            let temp=[]
                            this.select.unit.contain.units.forEach(unit=>{
                                unit.active=false
                                unit.destroyStats()
                                temp.push(...unit.contain.units)
                                unit.contain.units=[]
                            })
                            temp.forEach(unit=>unit.parent=this.select.unit)
                            this.select.unit.contain.units=temp
                            this.select.unit.contain.trigger=true
                            this.select.unit.contain.middle=false
                            this.select.unit.calculateElements()
                        }else{
                            target.parent=this.select.unit
                            this.select.unit.contain.units.push(target)
                            this.select.unit.parent.contain.units.splice(
                                this.select.unit.parent.contain.units.indexOf(target),
                                1
                            )
                        }
                    break
                    case 3:
                        this.select.unit.order.absorb++
                    break
                }
            }
        }else if(!this.select.unit.contain.trigger/*&&this.select.unit.contain.units.length<=0*/){
            if(this.select.unit.contain.units.length>0){
                if(input==0){
                    this.transitionManager.begin(`orderView`)
                    let len=this.units.length
                    this.inspect.units=[]
                    this.units.push(new unit(this,this.select.unit.getData()))
                    while(this.units.length>len){
                        this.inspect.units.push(last(this.units))
                        this.units.splice(this.units.length-1,1)
                    }
                }
            }else{
                if(input==0){
                    this.select.unit.active=false
                    this.select.unit.destroy()
                    this.select.unit.order.trigger=false
                }
            }
            if(absorb.length>0){
                switch(input){
                    case 2:
                        let target=absorb[this.select.unit.order.absorb%absorb.length]
                        if(target==-1){
                            let temp=[]
                            this.select.unit.contain.units.forEach(unit=>{
                                unit.active=false
                                unit.destroyStats()
                                temp.push(...unit.contain.units)
                                unit.contain.units=[]
                            })
                            temp.forEach(unit=>unit.parent=this.select.unit)
                            this.select.unit.contain.units=temp
                            this.select.unit.contain.trigger=true
                            this.select.unit.contain.middle=false
                            this.select.unit.calculateElements()
                        }else{
                            target.parent=this.select.unit
                            this.select.unit.contain.units.push(target)
                        }
                    break
                    case 3:
                        this.select.unit.order.absorb++
                    break
                }
            }
            /*if(input==0){
                this.select.unit.active=false
                this.select.unit.destroy()
                this.select.unit.order.trigger=false
            }*/
        }
    }
    onClick(layer,mouse){
        let rel={position:{x:mouse.position.x/this.view.scale,y:mouse.position.y/this.view.scale}}
        if(types.map[this.map].mapScale>1){
            rel.position.x-=this.view.scroll.x
            rel.position.y-=this.view.scroll.y
        }
        switch(this.scene){
            case `main`:
                if(this.turn.time<=0){
                    if(this.turn.start){
                        let flat=flatMap(types.map,this.turn.old)
                        let columns=4
                        for(let a=0,la=flat.length;a<la;a++){
                            //let spread=even(floor(a/2),ceil(la/2))
                            //if(inPointBox(mouse,boxify(layer.width/2-190+a%2*380,layer.height/2+60+spread*100,360,80))){
                            let spread=even(floor(a/columns),ceil(la/columns))
                            let left=min(la-floor(a/columns)*columns,columns)
                            if(inPointBox(mouse,boxify(layer.width/2-190*(left-1)+a%columns*380,layer.height/2+60+spread*100,360,80))){
                                switch(flat[a].unit.name){
                                    case `Reserve Modes`: case `Standard Modes`:
                                        this.turn.old=!this.turn.old
                                    break
                                    case `Legacy Modes`:
                                        window.open(`Legacy/Crusader`)
                                    break
                                    default:
                                        this.map=flat[a].mapIndex
                                        this.loadMap(this.map)
                                        this.initialComponents()
                                        this.turn.start=false
                                        this.turn.prep=true
                                        this.turn.translate=flat[a].index
                                    break
                                }
                            }
                        }
                    }else if(this.turn.translate>=0){
                        if(inPointBox(mouse,boxify(layer.width/2,layer.height/2+10,480,80))){
                            options.translate=true
                            this.initialUnits(this.turn.translate)
                            this.turn.translate=-1
                        }else if(inPointBox(mouse,boxify(layer.width/2,layer.height/2+110,480,80))){
                            this.initialUnits(this.turn.translate)
                            this.turn.translate=-1
                        }
                    }else if(this.turn.prep){
                        this.turn.prep=false
                        this.turn.loading=true
                        this.cities.forEach(city=>city.fade.revealTrigger=this.turn.partition[this.turn.main].includes(city.owner)||city.nearTransientSet(160,this.turn.partition[this.turn.main]))
                    }else{
                        if(inPointBox(mouse,boxify(layer.width-230,90,460,180))){
                            if(this.anim.selectTrigger){
                                if(inPointBox(mouse,boxify(layer.width-340,50,200,60))){
                                    this.control(0)
                                }else if(inPointBox(mouse,boxify(layer.width-120,50,200,60))){
                                    this.control(1)
                                }else if(inPointBox(mouse,boxify(layer.width-340,130,200,60))){
                                    this.control(2)
                                }else if(inPointBox(mouse,boxify(layer.width-120,130,200,60))){
                                    this.control(3)
                                }
                            }else{
                                if(inPointBox(mouse,boxify(layer.width-340,50,200,60))){
                                    this.turn.main++
                                    this.startTurn()
                                }else if(inPointBox(mouse,boxify(layer.width-340,130,200,60))){
                                    this.units.forEach(unit=>unit.fade.hide=!unit.fade.hide)
                                }else if(inPointBox(mouse,boxify(layer.width-120,50,200,60))){
                                    this.saveCol()
                                }else if(inPointBox(mouse,boxify(layer.width-120,130,200,60))){
                                    this.loadCol()
                                }
                            }
                        }else{
                            this.units.forEach(unit=>unit.onClick(layer,this.scene,rel))
                        }
                    }
                }
            break
            case `mapAll`:
                this.units.forEach(unit=>unit.onClick(layer,this.scene,rel))
            break
            case `orderView`:
                if(dev.reserve==-1){
                    this.transitionManager.begin(`main`)
                }
            break
        }
    }
    onDrag(layer,mouse,previous,button){
        let rel={position:{x:mouse.position.x/this.view.scale,y:mouse.position.y/this.view.scale}}
        let move={
            x:(mouse.position.x-previous.position.x)*(button==`right`?3:1)/this.view.scale,
            y:(mouse.position.y-previous.position.y)*(button==`right`?3:1)/this.view.scale
        }
        let img
        switch(this.scene){
            case `main`:
                if(this.view.scale>0&&types.map[this.map].mapScale>1){
                    img=graphics.load.map[this.map]
                    this.view.scroll.x=constrain(this.view.scroll.x+move.x*this.view.scale,-img.width*(types.map[this.map].mapScale-1)/2,0)
                    this.view.scroll.y=constrain(this.view.scroll.y+move.y*this.view.scale,-img.height*(types.map[this.map].mapScale-1)/2,0)
                }
            break
            case `mapAll`:
                this.units.forEach(unit=>unit.onDrag(layer,this.scene,rel,move))
            break
        }
    }
    onKey(layer,mouse,key){
        let rel={position:{x:mouse.position.x/this.view.scale,y:mouse.position.y/this.view.scale}}
        if(types.map[this.map].mapScale>1){
            rel.position.x-=this.view.scroll.x
            rel.position.y-=this.view.scroll.y
        }
        switch(this.scene){
            case `main`:
                if(this.turn.time<=0){
                    if(this.turn.start){
                        let flat=flatMap(types.map,this.turn.old)
                        for(let a=0,la=flat.length;a<la;a++){
                            if(key==`1234567890abcdefgh`[a]||key==`1234567890ABCDEFGH`[a]){
                                switch(flat[a].unit.name){
                                    case `Reserve Modes`: case `Standard Modes`:
                                        this.turn.old=!this.turn.old
                                    break
                                    case `Legacy Modes`:
                                        window.open(`Legacy/Crusader`)
                                    break
                                    default:
                                        this.map=flat[a].mapIndex
                                        this.loadMap(this.map)
                                        this.initialComponents()
                                        this.turn.start=false
                                        this.turn.prep=true
                                        this.turn.translate=flat[a].index
                                    break
                                }
                            }
                        }
                    }else if(this.turn.translate>=0){
                        if(key==`1`){
                            options.translate=true
                            this.initialUnits(this.turn.translate)
                            this.turn.translate=-1
                        }else if(key==`2`){
                            this.initialUnits(this.turn.translate)
                            this.turn.translate=-1
                        }
                    }else if(this.turn.prep){
                        if(key==`Enter`||int(key)>=1&&int(key)<=types.map[this.map].unit.length){
                            this.turn.prep=false
                            this.turn.loading=true
                            this.cities.forEach(city=>city.fade.revealTrigger=this.turn.partition[this.turn.main].includes(city.owner)||city.nearTransientSet(160,this.turn.partition[this.turn.main]))
                        }
                    }else{
                        if(this.anim.selectTrigger){
                            if(key==`Enter`){
                                this.control(0)
                            }else if(key==`@`){
                                this.control(1)
                            }else if(key==`Shift`){
                                this.control(2)
                            }else if(key==`#`){
                                this.control(3)
                            }
                            if(key==`Backspace`){
                                this.units.forEach(unit=>unit.order.trigger=false)
                            }
                        }else{
                            if(key==`Enter`){
                                this.turn.main++
                                this.startTurn()
                            }else if(key==`Shift`){
                                this.units.forEach(unit=>unit.fade.hide=!unit.fade.hide)
                            }else if(key==`Backspace`){
                                this.units.forEach(unit=>unit.order.trigger=false)
                            }
                        }
                        if(!inPointBox(mouse,boxify(layer.width-230,90,460,180))){
                            if(key==` `){
                                this.units.forEach(unit=>unit.onClick(layer,this.scene,rel))
                            }
                        }
                    }
                }
            break
            case `mapAll`:
                if(key==` `){
                    this.units.forEach(unit=>unit.onClick(layer,this.scene,rel))
                }
            break
            case `orderView`:
                if(key==` `&&dev.reserve==-1){
                    this.transitionManager.begin(`main`)
                }
            break
        }
    }
}
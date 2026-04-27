import {graphics,constants,dev} from './variables.mjs'
import {findName,smoothAnim,inPointBox,boxify,elementArray,findTerm0,distPos} from './functions.mjs'
import {lsin,lcos} from './graphics.mjs'
import {transitionManager} from './../JS/transitionManager.mjs'
import {city} from './city.mjs'
import {unit} from './unit.mjs'
export class operation{
    constructor(){
        this.map=0
        this.nextMap=this.map
        this.cities=[]
        this.units=[]
        this.scene=`main`
        this.view={scale:1,hist:0}
        this.turn={main:0,time:0,total:0,prep:true}
        this.anim={main:0,prep:0,select:0,selectTrigger:false}
        this.select={unit:0}
        this.initial()
        this.loadMap(this.map)
        this.initialComponents()
        constants.init=true
    }
    save(){
        let composite={
            map:types.map[this.map].term,
            cities:this.cities.map(city=>city.save()),
            units:this.units.map(unit=>unit.save()),
            view:this.view,
            turn:this.turn,
            anim:this.anim,
            transitionManager:this.transitionManager.save()
        }
        return composite
    }
    saveCol(){
        saveStrings([JSON.stringify(this.save())],'crusaderSaveFile','json')
    }
    load(result){
        let composite=JSON.parse(result)

        let map=findTerm0(composite.map,types.map)
        //this.loadMap(map)
        this.map=map
        this.nextMap=map
        this.view=composite.view
        this.turn=composite.turn
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
    startTurn(){
        this.units.forEach(unit=>{
            unit.fade.trigger=false
            unit.fade.hide=false
            unit.fade.statTrigger=false
            unit.logs.trigger=false
        })
        this.cities.forEach(city=>city.fade.revealTrigger=false)
        if(this.turn.main>=types.player.length){
            this.startTick()
        }else{
            this.turn.prep=true
        }
    }
    startTick(){
        this.turn.time=constants.turnTime
        this.units.forEach(unit=>unit.startTick())
    }
    endTick(){
        this.units.forEach(unit=>unit.endTick())
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
                        if(conn.owner==-1||types.player[conn.owner].side==types.player[index].side){
                            active.push(conn)
                        }
                    }
                })
                active.splice(0,1)
            }
        })
        this.cities.forEach(city=>city.endTick())
        this.turn.total++
        this.turn.main=0
        this.startTurn()
    }
    transitionComplete(scene){}
    loadMap(map){
        types.city=types.map[map].city
        types.connect=types.map[map].connect
        types.team=types.map[map].team
        types.player=types.map[map].player
        types.side=types.map[map].side
        types.unit=types.map[map].unit

        graphics.load.water=Array.from(graphics.load.water.bytes).map(byte=>byte.toString(2).padStart(8,`0`))
        graphics.load.fortifications=Array.from(graphics.load.fortifications.bytes).map(byte=>byte.toString(2).padStart(8,`0`))
    }
    initial(){
        this.transitionManager=new transitionManager(this)
    }
    initialComponents(){
        types.city.forEach(data=>this.cities.push(new city(this,data)))
        types.unit.forEach(data=>this.units.push(new unit(this,data)))
        types.connect.forEach(data=>{
            let cit=data.name.map(name=>this.cities[findName(name,this.cities)])
            cit[0].connect.main.push(cit[1])
            cit[1].connect.main.push(cit[0])
            cit[0].connect.primary.push(cit[1])
        })
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
                img=graphics.load.map[this.map][0]
                this.view.scale=layer.width/img.width
                layer.push()
                layer.scale(this.view.scale)
                layer.image(img,img.width/2,img.height/2,img.width,img.height)
                this.cities.forEach(city=>city.display(layer,`road`))
                this.cities.forEach(city=>city.display(layer,this.scene))
                
                this.units.forEach(unit=>unit.display(layer,`underOrder`))
                this.units.forEach(unit=>unit.display(layer,`under`))
                this.units.filter(unit=>unit.player!=this.turn.main).forEach(unit=>unit.display(layer,this.scene))
                this.units.forEach(unit=>unit.displayInfo(layer,`order`))
                this.units.filter(unit=>unit.player==this.turn.main).forEach(unit=>unit.display(layer,this.scene))
                this.units.forEach(unit=>unit.displayInfo(layer,`stat`))
                this.units.forEach(unit=>unit.displayInfo(layer,this.scene))
                this.units.forEach(unit=>unit.displayInfo(layer,`logs`))
                layer.pop()
                if(this.anim.prep>0){
                    layer.noStroke()
                    layer.fill(200,this.anim.prep)
                    layer.rect(layer.width/2,layer.height/2,800,120,20)
                    layer.fill(0,this.anim.prep)
                    layer.textSize(80)
                    layer.text(`${types.player[this.turn.main].name} Turn Begin`,layer.width/2,layer.height/2+4)
                }
                if(this.anim.main>0){
                    layer.noStroke()
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
                    if(this.anim.select>0&&this.select.unit.contain.trigger){
                        let absorb=this.units.filter(unit=>unit.active&&unit.id!=this.select.unit.id&&unit.level==3&&distPos(unit,this.select.unit)<150&&types.player[unit.player].side==types.player[this.select.unit.player].side)
                        layer.fill(150,this.anim.main*this.anim.select)
                        if(this.select.unit.level!=3){
                            layer.rect(layer.width-340,50,200,60,10)
                            if(this.select.unit.contain.units.length>1){
                                layer.rect(layer.width-120,50,200,60,10)
                            }
                        }
                        if(absorb.length>0){
                            layer.rect(layer.width-340,130,200,60,10)
                        }
                        if(absorb.length>1){
                            layer.rect(layer.width-120,130,200,60,10)
                        }
                        layer.fill(0,this.anim.main*this.anim.select)
                        if(this.select.unit.level!=3){
                            layer.textSize(this.select.unit.contain.units.length==1?30:15)
                            layer.text(this.select.unit.contain.units.length==1?`Disband`:`Detach ${this.select.unit.contain.units[this.select.unit.order.detach%this.select.unit.contain.units.length].desc}`,layer.width-340,50,200)
                            if(this.select.unit.contain.units.length>1){
                                layer.textSize(30)
                                layer.text(`Next`,layer.width-120,50)
                            }
                        }
                        if(absorb.length>0){
                            layer.textSize(15)
                            layer.text(`Absorb ${absorb[this.select.unit.order.absorb%absorb.length].desc}`,layer.width-340,130,200)
                        }
                        if(absorb.length>1){
                            layer.textSize(30)
                            layer.text(`Next`,layer.width-120,130)
                        }
                        if(this.select.unit.level!=3){
                            layer.textSize(10)
                            layer.text(`Enter`,layer.width-260,25)
                            if(this.select.unit.contain.units.length>1){
                                layer.textSize(15)
                                layer.text(`@`,layer.width-40,30)
                            }
                        }
                        if(absorb.length>0){
                            layer.textSize(10)
                            layer.text(`Shift`,layer.width-260,105)
                        }
                        if(absorb.length>1){
                            layer.textSize(15)
                            layer.text(`#`,layer.width-40,110)
                        }
                    }
                }
            break
            case `mapAll`:
                img=graphics.load.map[this.map][0]
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
            break
            case `hist`:
                img=graphics.load.map[this.map][0]
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
            break
        }
        this.transitionManager.display(layer)
    }
    update(layer,mouse){
        let rel
        rel={position:{x:mouse.position.x/this.view.scale,y:mouse.position.y/this.view.scale}}
        switch(this.scene){
            case `mapAll`:
                this.cities.forEach(city=>city.update(layer,this.scene,rel))
                this.units.forEach(unit=>unit.update(layer,this.scene,rel))
            break
            case `main`:
                this.anim.main=smoothAnim(this.anim.main,!this.turn.prep&&this.turn.time==0,0,1,5)
                this.anim.prep=smoothAnim(this.anim.prep,this.turn.prep,0,1,5)

                this.anim.selectTrigger=this.units.some(unit=>unit.order.trigger)
                this.anim.select=smoothAnim(this.anim.select,this.anim.selectTrigger,0,1,5)

                this.cities.forEach(city=>city.update(layer,this.scene,rel))
                this.units.forEach(unit=>unit.update(layer,this.scene,rel))
                while(this.turn.time>0){
                    this.units.forEach(unit=>unit.operate(layer,this.scene,rel))
                    this.units.forEach(unit=>unit.update(layer,this.scene,rel))
                    this.turn.time--
                    if(this.turn.time<=0){
                        this.endTick()
                    }else if(dev.slow){
                        break
                    }
                }
            break
            case `hist`:
                this.cities.forEach(city=>city.update(layer,this.scene,this.view.hist))
                this.units.forEach(unit=>unit.update(layer,this.scene,this.view.hist))
                if(this.view.hist<60*this.turn.total){
                    this.view.hist++
                }
            break
        }
    }
    onClick(layer,mouse){
        let rel
        rel={position:{x:mouse.position.x/this.view.scale,y:mouse.position.y/this.view.scale}}
        switch(this.scene){
            case `main`:
                if(this.turn.time<=0){
                    if(this.turn.prep){
                        this.turn.prep=false
                        this.units.forEach(unit=>{
                            unit.fade.trigger=(unit.player==this.turn.main||unit.near(160,this.turn.main))&&unit.active
                            unit.order.trigger=false
                            if(unit.player==this.turn.main){
                                unit.fade.statTrigger=true
                                if(unit.logs.main.length>0){
                                    unit.logs.trigger=true
                                }
                            }
                        })
                        this.cities.forEach(city=>city.fade.revealTrigger=city.owner==this.turn.main||city.near(160,this.turn.main))
                    }else{
                        if(inPointBox(mouse,boxify(layer.width-230,90,460,180))){
                            if(this.anim.selectTrigger){
                                if(this.select.unit.contain.trigger){
                                    let absorb=this.units.filter(unit=>unit.active&&unit.id!=this.select.unit.id&&unit.level==3&&distPos(unit,this.select.unit)<150&&types.player[unit.player].side==types.player[this.select.unit.player].side)
                                    if(this.select.unit.level!=3){
                                        if(inPointBox(mouse,boxify(layer.width-340,50,200,60))){
                                            if(this.select.unit.contain.units.length==1){
                                                let element=this.select.unit.contain.units[0]
                                                let result=new unit(this,{
                                                    pos:[this.select.unit.position.x,this.select.unit.position.y],
                                                    level:3,type:element.type.map(type=>types.unitType[type].name),team:element.team,
                                                    desc:element.desc,name:element.name,designation:element.designation,commander:element.commander,
                                                    icon:element.icon,elements:[],
                                                })
                                                result.contain.units.push(element)
                                                result.calculateElements()
                                                result.fade=JSON.parse(JSON.stringify(this.select.unit.fade))
                                                this.units.push(result)
                                                this.select.unit.active=false
                                                this.select.unit.contain.units=[]
                                                this.select.unit.order.trigger=false
                                                this.select.unit=result
                                                this.select.unit.order.trigger=true
                                            }else{
                                                let element=this.select.unit.contain.units[this.select.unit.order.detach%this.select.unit.contain.units.length]
                                                for(let a=0,la=100;a<la;a++){
                                                    let dir=random(0,360)
                                                    let pos={position:{
                                                        x:this.select.unit.position.x+lsin(dir)*(this.select.unit.radius+types.unitLevel[3].size[element.player]+1),
                                                        y:this.select.unit.position.y+lcos(dir)*(this.select.unit.radius+types.unitLevel[3].size[element.player]+1)
                                                    }}
                                                    if(!this.units.some(unit=>unit.active&&distPos(unit,pos)<types.unitLevel[3].size[element.player]+unit.radius)){
                                                        let result=new unit(this,{
                                                            pos:[pos.position.x,pos.position.y],
                                                            level:3,type:element.type.map(type=>types.unitType[type].name),team:element.team,
                                                            desc:element.desc,name:element.name,designation:element.designation,commander:element.commander,
                                                            icon:element.icon,elements:[],
                                                        })
                                                        result.contain.units.push(element)
                                                        result.calculateElements()
                                                        result.fade=JSON.parse(JSON.stringify(this.select.unit.fade))
                                                        this.units.push(result)
                                                        this.select.unit.contain.units.splice(this.select.unit.order.detach%this.select.unit.contain.units.length,1)
                                                        break
                                                    }
                                                }
                                            }
                                        }
                                        if(inPointBox(mouse,boxify(layer.width-120,50,200,60))){
                                            this.select.unit.order.detach++
                                        }
                                    }
                                    if(absorb.length>0){
                                        if(inPointBox(mouse,boxify(layer.width-340,130,200,60))){
                                            if(this.select.unit.level==3){
                                                let element=this.select.unit.contain.units[0]
                                                let typing=element.type.map(type=>types.unitType[type].name)
                                                absorb[this.select.unit.order.absorb%absorb.length].contain.units[0].type.forEach(type=>{
                                                    if(!typing.includes(types.unitType[type].name)){
                                                        typing.push(types.unitType[type].name)
                                                    }
                                                })
                                                let result=new unit(this,{
                                                    pos:[this.select.unit.position.x,this.select.unit.position.y],
                                                    level:[1,2,1][element.player],type:typing,team:element.team,
                                                    desc:`${[`Battle Group`,`Kampfgruppe`,`Column`][element.player]}${element.commander!=``?` ${element.commander}`:``}`,name:[`BG`,`KG`,`C`][element.player],designation:element.designation,commander:element.commander,
                                                    icon:element.icon,elements:[],
                                                })
                                                result.contain.units.push(element)
                                                result.contain.units.push(absorb[this.select.unit.order.absorb%absorb.length].contain.units[0])
                                                absorb[this.select.unit.order.absorb%absorb.length].active=false
                                                absorb[this.select.unit.order.absorb%absorb.length].contain.units=[]
                                                result.calculateElements()
                                                result.fade=JSON.parse(JSON.stringify(this.select.unit.fade))
                                                this.units.push(result)
                                                this.select.unit.active=false
                                                this.select.unit.contain.units=[]
                                                this.select.unit.order.trigger=false
                                                this.select.unit=result
                                                this.select.unit.order.trigger=true
                                            }else{
                                                this.select.unit.contain.units.push(absorb[this.select.unit.order.absorb%absorb.length].contain.units[0])
                                                absorb[this.select.unit.order.absorb%absorb.length].active=false
                                                absorb[this.select.unit.order.absorb%absorb.length].contain.units=[]
                                                this.select.unit.calculateElements()
                                            }
                                        }
                                        if(inPointBox(mouse,boxify(layer.width-120,130,200,60))){
                                            this.select.unit.order.absorb++
                                        }
                                    }
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
        }
    }
    onDrag(layer,mouse,previous,button){
    }
    onKey(layer,mouse,key){
        let rel
        rel={position:{x:mouse.position.x/this.view.scale,y:mouse.position.y/this.view.scale}}
        switch(this.scene){
            case `main`:
                if(this.turn.time<=0){
                    if(this.turn.prep){
                        if(key==`Enter`){
                            this.turn.prep=false
                            this.units.forEach(unit=>{
                                unit.fade.trigger=(unit.player==this.turn.main||unit.near(160,this.turn.main))&&unit.active
                                unit.order.trigger=false
                                if(unit.player==this.turn.main){
                                    unit.fade.statTrigger=true
                                    if(unit.logs.main.length>0){
                                        unit.logs.trigger=true
                                    }
                                }
                            })
                            this.cities.forEach(city=>city.fade.revealTrigger=city.owner==this.turn.main||city.near(160,this.turn.main))
                        }
                    }else{
                        if(this.anim.selectTrigger){
                            if(this.select.unit.contain.trigger){
                                let absorb=this.units.filter(unit=>unit.active&&unit.id!=this.select.unit.id&&unit.level==3&&distPos(unit,this.select.unit)<150&&types.player[unit.player].side==types.player[this.select.unit.player].side)
                                if(this.select.unit.level!=3){
                                    if(key===`Enter`){
                                        if(this.select.unit.contain.units.length==1){
                                            let element=this.select.unit.contain.units[0]
                                            let result=new unit(this,{
                                                pos:[this.select.unit.position.x,this.select.unit.position.y],
                                                level:3,type:element.type.map(type=>types.unitType[type].name),team:element.team,
                                                desc:element.desc,name:element.name,designation:element.designation,commander:element.commander,
                                                icon:element.icon,elements:[],
                                            })
                                            result.contain.units.push(element)
                                            result.calculateElements()
                                            result.fade=JSON.parse(JSON.stringify(this.select.unit.fade))
                                            this.units.push(result)
                                            this.select.unit.active=false
                                            this.select.unit.contain.units=[]
                                            this.select.unit.order.trigger=false
                                            this.select.unit=result
                                            this.select.unit.order.trigger=true
                                        }else{
                                            let element=this.select.unit.contain.units[this.select.unit.order.detach%this.select.unit.contain.units.length]
                                            for(let a=0,la=100;a<la;a++){
                                                let dir=random(0,360)
                                                let pos={position:{
                                                    x:this.select.unit.position.x+lsin(dir)*(this.select.unit.radius+types.unitLevel[3].size[element.player]+1),
                                                    y:this.select.unit.position.y+lcos(dir)*(this.select.unit.radius+types.unitLevel[3].size[element.player]+1)
                                                }}
                                                if(!this.units.some(unit=>unit.active&&distPos(unit,pos)<types.unitLevel[3].size[element.player]+unit.radius)){
                                                    let result=new unit(this,{
                                                        pos:[pos.position.x,pos.position.y],
                                                        level:3,type:element.type.map(type=>types.unitType[type].name),team:element.team,
                                                        desc:element.desc,name:element.name,designation:element.designation,commander:element.commander,
                                                        icon:element.icon,elements:[],
                                                    })
                                                    result.contain.units.push(element)
                                                    result.calculateElements()
                                                    result.fade=JSON.parse(JSON.stringify(this.select.unit.fade))
                                                    this.units.push(result)
                                                    this.select.unit.contain.units.splice(this.select.unit.order.detach%this.select.unit.contain.units.length,1)
                                                    break
                                                }
                                            }
                                        }
                                    }
                                    if(key==`@`){
                                        this.select.unit.order.detach++
                                    }
                                }
                                if(absorb.length>0){
                                    if(key==`Shift`){
                                        if(this.select.unit.level==3){
                                            let element=this.select.unit.contain.units[0]
                                            let typing=element.type.map(type=>types.unitType[type].name)
                                            absorb[this.select.unit.order.absorb%absorb.length].contain.units[0].type.forEach(type=>{
                                                if(!typing.includes(types.unitType[type].name)){
                                                    typing.push(types.unitType[type].name)
                                                }
                                            })
                                            let result=new unit(this,{
                                                pos:[this.select.unit.position.x,this.select.unit.position.y],
                                                level:[1,2,1][element.player],type:typing,team:element.team,
                                                desc:`${[`Battle Group`,`Kampfgruppe`,`Column`][element.player]} ${element.commander}`,name:[`BG`,`KG`,`C`][element.player],designation:element.designation,commander:element.commander,
                                                icon:element.icon,elements:[],
                                            })
                                            result.contain.units.push(element)
                                            result.contain.units.push(absorb[this.select.unit.order.absorb%absorb.length].contain.units[0])
                                            absorb[this.select.unit.order.absorb%absorb.length].active=false
                                            absorb[this.select.unit.order.absorb%absorb.length].contain.units=[]
                                            result.calculateElements()
                                            result.fade=JSON.parse(JSON.stringify(this.select.unit.fade))
                                            this.units.push(result)
                                            this.select.unit.active=false
                                            this.select.unit.contain.units=[]
                                            this.select.unit.order.trigger=false
                                            this.select.unit=result
                                            this.select.unit.order.trigger=true
                                        }else{
                                            this.select.unit.contain.units.push(absorb[this.select.unit.order.absorb%absorb.length].contain.units[0])
                                            absorb[this.select.unit.order.absorb%absorb.length].active=false
                                            absorb[this.select.unit.order.absorb%absorb.length].contain.units=[]
                                            this.select.unit.calculateElements()
                                        }
                                    }
                                    if(key==`#`){
                                        this.select.unit.order.absorb++
                                    }
                                }
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
        }
    }
}
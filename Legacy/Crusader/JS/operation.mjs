import {graphics,constants,dev,types,options} from './variables.mjs'
import {findName,findAbstract,smoothAnim,inPointBox,boxify,elementArray,findTerm0,distPos,even,last} from './../../../JS/functions.mjs'
import {lsin,lcos} from './../../../JS/graphics.mjs'
import {transitionManager} from './../../../JS/transitionManager.mjs'
import {city} from './city.mjs'
import {unit} from './unit.mjs'
export class operation{
    constructor(){
        this.map=0
        this.nextMap=this.map
        this.set=0
        this.cities=[]
        this.units=[]
        this.scene=`main`
        this.view={scale:1}
        this.turn={
            main:0,time:0,total:0,prep:false,start:true,loading:false,order:[],
            bonus:false,partition:[],pick:-1,storePick:-1,translate:-1,
        }
        this.anim={main:0,prep:0,start:0,select:0,pick:[],translate:0,selectTrigger:false}
        this.hist={time:0,tick:0,limit:45}
        this.select={unit:0}
        this.initialMaps()

        this.initial()
        this.loadMap(this.map)
        this.loadBack()
        this.initialComponents()

        constants.init=true
        if(dev.begin>=0){
            this.scene=`mapAll`
            this.initialUnits(dev.begin)
            if(this.turn.pick>=0){
                this.spawnUnits()
            }
        }
    }
    save(){
        let composite={
            map:types.map[this.map].term,
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
                loading:this.turn.loading,
                bonus:this.turn.bonus,
                partition:this.turn.partition,
                pick:this.turn.pick,
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

        let map=findTerm0(composite.map,types.map)
        this.loadMap(map)
        this.map=map
        this.nextMap=map
        this.set=findName(composite.set,types.map[this.map].unit)
        //this.initialUnits(findName(composite.set,types.map[this.map].unit))
        //this sets set so don't set sets
        this.view=composite.view
        this.turn.main=composite.turn.main
        this.turn.time=composite.turn.time
        this.turn.total=composite.turn.total
        this.turn.prep=composite.turn.prep
        this.turn.start=composite.turn.start
        this.turn.loading=composite.turn.loading
        this.turn.bonus=composite.turn.bonus
        this.turn.partition=composite.turn.partition
        this.turn.pick=composite.turn.pick
        this.turn.storePick=composite.turn.storePick
        this.turn.translate=composite.turn.translate
        this.anim=composite.anim
        /*let root=``
        types.unit.forEach(unit=>{
            if(unit.icon!=``&&!graphics.load.unit.some(load=>load.name==unit.icon)){
                graphics.load.unit.push({name:unit.icon,img:-1})
            }
            unit.elements.forEach(element=>{
                if(typeof element.type!=`string`&&element.icon!=``&&!graphics.load.unit.some(load=>load.name==element.icon)){
                    graphics.load.unit.push({name:element.icon,img:-1})
                }
            })
        })
        for(const load of graphics.load.unit){
            load.img=await new Promise((resolve,reject)=>{loadImage(`${root}Assets/General/unit/${load.name}.png`,(img)=>resolve(img),reject)})
        }*/
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
        return new operation()
    }
    startTurn(){
        this.units.forEach(unit=>{
            unit.fade.trigger=false
            unit.fade.hide=false
            unit.fade.statTrigger=false
            unit.logs.trigger=false
        })
        this.cities.forEach(city=>city.fade.revealTrigger=false)
        if(this.turn.main>=this.turn.partition.length||this.turn.bonus){
            if(this.turn.bonus){
                this.turn.bonus=false
            }
            this.startTick()
        }else{
            this.turn.prep=true
        }
    }
    startTick(){
        this.turn.main=-1
        this.turn.time=constants.turnTime
        this.units.forEach(unit=>unit.startTick())
        this.turn.order=this.units.sort((a,b)=>a.contain.stats.speed-b.contain.stats.speed)
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
    loadMap(map){
        types.city=types.map[map].city
        types.connect=types.map[map].connect
        types.team=types.map[map].team
        types.player=types.map[map].player
        types.side=types.map[map].side
    }
    loadBack(){
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
            let mapSet=types.map[findTerm0([`main`],types.map)]
            let unitSet=mapSet.unit[findName(`Battleaxe Simplified - 2 Player`,mapSet.unit)]
            unitSet.unit.push(...JSON.parse(JSON.stringify(mapSet.unit[findName(`Battleaxe Simplified - 3 Player`,mapSet.unit)].unit)))
            let target=unitSet.unit[findAbstract(`desc`,`102nd Infantry Division "Trento"`,unitSet.unit)]
            target.elements.splice(findAbstract(`desc`,`4th Group, 46th Artillery Regiment`,target.elements),1)
            target=unitSet.unit[findAbstract(`desc`,`7th Armored Division`,unitSet.unit)]
            target=target.elements[findAbstract(`desc`,`7th Support Group`,target.elements)]
            target.elements.push(unitSet.unit[0])
            unitSet.unit.splice(0,1)

            mapSet=types.map[findTerm0([`main`],types.map)]
            unitSet=mapSet.unit[findName(`Operation Battleaxe - 2 Player`,mapSet.unit)]
            unitSet.unit.push(...JSON.parse(JSON.stringify(mapSet.unit[findName(`Operation Battleaxe - 3 Player`,mapSet.unit)].unit)))
            unitSet.unit.splice(unitSet.unit.length-1,1)
            target=unitSet.unit[findAbstract(`desc`,`7th Armored Division`,unitSet.unit)]
            target=target.elements[findAbstract(`desc`,`7th Support Group`,target.elements)]
            target.elements.push(unitSet.unit[0])
            unitSet.unit.splice(0,1)

            mapSet=types.map[findTerm0([`main`],types.map)]
            unitSet=mapSet.unit[findName(`Crusader Oversimplified - 2 Player`,mapSet.unit)]
            unitSet.unit.push(...JSON.parse(JSON.stringify(mapSet.unit[findName(`Crusader Oversimplified - 3 Player`,mapSet.unit)].unit)))
            target=unitSet.unit[findAbstract(`desc`,`2nd New Zealand Division`,unitSet.unit)]
            target.elements.push(unitSet.unit[0])
            unitSet.unit.splice(0,1)
            target=unitSet.unit[findAbstract(`desc`,`Special Purpose Divisional Command "Afrika"`,unitSet.unit)]
            target.elements.splice(findAbstract(`desc`,`2nd Battalion, 115th Rifle Regiment`,target.elements),1)

            mapSet=types.map[findTerm0([`main`],types.map)]
            unitSet=mapSet.unit[findName(`Crusader Simplified - 2 Player`,mapSet.unit)]
            unitSet.unit.push(...JSON.parse(JSON.stringify(mapSet.unit[findName(`Crusader Simplified - 3 Player`,mapSet.unit)].unit)))
            target=unitSet.unit[findAbstract(`desc`,`7th Armored Division`,unitSet.unit)]
            target.elements.push(unitSet.unit[0])
            unitSet.unit.splice(0,1)
            target=target.elements[findAbstract(`desc`,`7th Armored Brigade`,target.elements)]
            target.elements.push(unitSet.unit[0])
            unitSet.unit.splice(0,1)
            target=unitSet.unit[findAbstract(`desc`,`15th Panzer Division`,unitSet.unit)]
            target.elements[findAbstract(`desc`,`33rd Artillery Regiment`,target.elements)]=unitSet.unit[0]
            unitSet.unit.splice(0,1)

            mapSet=types.map[findTerm0([`main`],types.map)]
            unitSet=mapSet.unit[findName(`Operation Crusader - 2 Player`,mapSet.unit)]
            unitSet.unit.push(...JSON.parse(JSON.stringify(mapSet.unit[findName(`Operation Crusader - 3 Player`,mapSet.unit)].unit)))
            target=unitSet.unit[findAbstract(`desc`,`102nd Infantry Division "Trento"`,unitSet.unit)]
            target.elements.splice(findAbstract(`desc`,`7th Bersaglieri Regiment`,target.elements),1)
        }
    }
    initialComponents(){
        types.city.forEach(data=>this.cities.push(new city(this,data)))
        types.connect.forEach(data=>{
            let cit=data.name.map(name=>this.cities[findName(name,this.cities)])
            cit[0].connect.main.push(cit[1])
            cit[1].connect.main.push(cit[0])
            cit[0].connect.primary.push(cit[1])
        })
    }
    initialUnits(set){
        this.set=set
        this.turn.bonus=types.map[this.map].unit[this.set].bonus
        this.turn.partition=types.map[this.map].unit[this.set].partition
        this.turn.pick=types.map[this.map].unit[this.set].pick
        this.turn.storePick=types.map[this.map].unit[this.set].pick
        types.unit=types.map[this.map].unit[this.set].unit
        types.reserve=types.map[this.map].reserve[types.map[this.map].unit[this.set].pick>=0?types.map[this.map].unit[this.set].pick:0]

        this.anim.pick=elementArray(0,types.reserve.length)
        if(this.turn.pick<0){
            this.spawnUnits()
        }
    }
    /*async loadUnits(){
        let root=``
        types.unit.forEach(unit=>{
            if(unit.icon!=``&&!graphics.load.unit.some(load=>load.name==unit.icon)){
                graphics.load.unit.push({name:unit.icon,img:-1})
            }
            unit.elements.forEach(element=>{
                if(typeof element.type!=`string`&&element.icon!=``&&!graphics.load.unit.some(load=>load.name==element.icon)){
                    graphics.load.unit.push({name:element.icon,img:-1})
                }
            })
        })
        for(const load of graphics.load.unit){
            load.img=await new Promise((resolve,reject)=>{loadImage(`${root}Assets/General/unit/${load.name}.png`,(img)=>resolve(img),reject)})
        }
        this.spawnUnits()
    }*/
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
                img=graphics.load.map[this.map][0]
                this.view.scale=layer.width/img.width
                layer.push()
                layer.scale(this.view.scale)
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

                layer.noStroke()
                if(this.anim.prep>0){
                    layer.fill(200,this.anim.prep)
                    layer.rect(layer.width/2,layer.height/2,800,120,20)
                    layer.fill(0,this.anim.prep)
                    layer.textSize(80)
                    layer.text(`${this.turn.main==1&&this.turn.partition.length==2?`Axis`:types.player[this.turn.main].name} Turn Begin`,layer.width/2,layer.height/2+4)
                }
                let maximal=min(1,this.anim.pick.reduce((acc,pick)=>acc+pick,0)+this.anim.translate)
                if(maximal>0){
                    layer.fill(200,maximal)
                    layer.rect(layer.width/2,layer.height/2,800,340,20)
                }
                if(this.anim.translate>0){
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
                    /*layer.textSize(12.5)
                    layer.text(`e.g. 3rd Mixed Support Battalion, 61st Motorized Infantry Regiment`,layer.width/2,layer.height/2+30)
                    layer.text(`e.g. III battaglione armi d'accompagnamento, 61° Reggimento di fanteria motorizzata "Sicilia"`,layer.width/2,layer.height/2+130)*/
                }
                for(let a=0,la=types.reserve.length;a<la;a++){
                    if(this.anim.pick[a]>0){
                        //layer.fill(200,this.anim.pick[a])
                        //layer.rect(layer.width/2,layer.height/2,800,340,20)
                        /*if(a==3){
                            layer.fill(200,this.anim.pick[a])
                            layer.rect(layer.width/2,layer.height/2,800,440,20)
                            layer.fill(0,this.anim.pick[a])
                            layer.textSize(80)
                            layer.text(`German Deployment`,layer.width/2,layer.height/2-146)
                            layer.fill(150,this.anim.pick[a])
                            layer.rect(layer.width/2,layer.height/2-40,480,80,20)
                            layer.rect(layer.width/2,layer.height/2+60,480,80,20)
                            layer.rect(layer.width/2,layer.height/2+160,480,80,20)
                            layer.fill(0,this.anim.pick[a])
                            layer.textSize(25)
                            layer.text(`3rd/255th and 3rd/347th Infantry Battalions`,layer.width/2,layer.height/2-50)
                            layer.text(`Sonderverband 288`,layer.width/2,layer.height/2+50)
                            layer.text(`606th Flak Detachment`,layer.width/2,layer.height/2+150)
                            layer.textSize(20)
                            layer.text(`2 Infantry Battalions`,layer.width/2,layer.height/2-20)
                            layer.text(`2 Mixed Battalions`,layer.width/2,layer.height/2+80)
                            layer.text(`1 Flak Battalion, 1 Reconaissance Company`,layer.width/2,layer.height/2+180)
                        }else{
                            layer.fill(0,this.anim.pick[a])
                            layer.textSize(80)
                            layer.text(`${types.player[[0,0,0,1,2,2][a]].name} Deployment`,layer.width/2,layer.height/2-96)
                            layer.fill(150,this.anim.pick[a])
                            layer.rect(layer.width/2,layer.height/2+10,480,80,20)
                            layer.rect(layer.width/2,layer.height/2+110,480,80,20)
                            layer.fill(0,this.anim.pick[a])
                            layer.textSize(25)
                            layer.text([
                                `14th Infantry Brigade`,
                                `2nd New Zealand Field Regiment`,
                                `1st South African Infantry Brigade`,
                                ``,
                                `9th Bersaglieri Regiment`,
                                `8th Army Artillery Group`,
                            ][a],layer.width/2,layer.height/2)
                            layer.text([
                                `32nd Army Tank Brigade`,
                                `11th Indian Infantry Brigade`,
                                `29th Indian Infantry Brigade`,
                                ``,
                                `60th Infantry Division 'Sabratha'`,
                                `Support Elements`,
                            ][a],layer.width/2,layer.height/2+100)
                            layer.textSize(20)
                            layer.text([
                                `3 Infantry Battalions`,
                                `3 Artillery Battalions`,
                                `3 Infantry Battalions, 1 Artillery Battalion`,
                                ``,
                                `4 Bersaglieri Battalions`,
                                `5 Artillery Battalions`,
                            ][a],layer.width/2,layer.height/2+30)
                            layer.text([
                                `2 Heavy Tank Battalions, 1 Artillery Battalion`,
                                `3 Infantry Battalions`,
                                `3 Infantry Battalions, 1 Armored Car Battalion`,
                                ``,
                                `4 Infantry Battalions`,
                                `3 Artillery Battalions, 2 Mixed Support Battalions`,
                            ][a],layer.width/2,layer.height/2+130)
                        }*/
                        let set=[]
                        switch(this.turn.storePick){
                            case 0:
                                set=[
                                    [0,0,0,1,1,1,2,2,2],
                                    [
                                        `14th Infantry Brigade`,
                                        `2nd New Zealand Field Regiment`,
                                        `1st South African Infantry Brigade`,
                                        options.translate?`15th Motorcycle Battalion`:`Kradschützen-Bataillon 15`,
                                        options.translate?`3rd/255th and 3rd/347th Infantry Battalions`:`III. / I.R. 255 & III. / I.R. 347`,
                                        options.translate?`2nd Battalion, 115th Rifle Regiment`:`II. / Schützen-Regiment 115`,
                                        options.translate?`9th Bersaglieri Regiment`:`9° Reggimento Bersaglieri`,
                                        options.translate?`8th Army Artillery Group`:`8° Reggimento Artiglieria d'Armata`,
                                        options.translate?`MILMART "Maneuver Army Corps"`:`MILMART "Corpo d'Armata di Manovra"`,
                                    ],[
                                        `32nd Army Tank Brigade`,
                                        `11th Indian Infantry Brigade`,
                                        `29th Indian Infantry Brigade`,
                                        options.translate?`33rd Engineer Battalion`:`Panzer-Pionier-Bataillon 33`,
                                        options.translate?`288th Sonderverband`:`Sonderverband 288`,
                                        options.translate?`580th Reconnaissance Company`:`Aufklärungs-Kompanie 580`,
                                        options.translate?`60th Infantry Division "Sabratha"`:`60ª Divisione di fanteria "Sabratha"`,
                                        `Support Elements`,
                                        options.translate?`503rd Independent Coastal Artillery Group`:`503º Gruppo autonomo di artiglieria costiera`,
                                    ],[
                                        `3 Infantry Battalions`,
                                        `3 Artillery Battalions`,
                                        `3 Infantry Battalions, 1 Artillery Battalion`,
                                        `1 Motorcycle Battalion`,
                                        `2 Infantry Battalions`,
                                        `1 Motorized Infantry Battalion`,
                                        `4 Bersaglieri Battalions`,
                                        `4 Artillery Battalions`,
                                        `1 Motorized Artillery Battalion`,
                                    ],[
                                        `2 Heavy Tank Battalions, 1 Artillery Battalion`,
                                        `3 Infantry Battalions`,
                                        `3 Infantry Battalions, 1 Armored Car Battalion`,
                                        `1 Motorized Engineer Battalion`,
                                        `2 Mixed Battalions`,
                                        `1 Reconaissance Company`,
                                        `4 Infantry Battalions`,
                                        `3 Artillery Battalions, 2 Mixed Support Battalions`,
                                        `1 Artillery Battalion`,
                                    ]
                                ]
                            break
                            case 1:
                                set=[
                                    [0,0,1,1,2,2],
                                    [
                                        `23rd Infantry Brigade`,
                                        `4th Armored Brigade`,
                                        //options.translate?`15th Panzer Division Support Elements`:`Divisionseinheiten der 15. Panzer-Division`,
                                        options.translate?`3rd Battalion, 347th Infantry Regiment`:`III./Infanterie-Regiment 347`,
                                        options.translate?`2nd Battalion, 115th Rifle Regiment`:`II./Schützen-Regiment 115`,
                                        options.translate?`Army Corps Reconnaissance Regrouping`:`Raggruppamento Esplorante del Corpo d'Armata`,
                                        options.translate?`Machine Gun Group`:`Gruppo mitragliatrici`,
                                        //options.translate?`Engineer Group`:`Gruppo misto genio`,
                                    ],[
                                        `5th South African Infantry Brigade`,
                                        `6th New Zealand Infantry Brigade`,
                                        options.translate?`288th Sonderverband`:`Sonderverband 288`,
                                        options.translate?`2nd Battalion, 115th Heavy Artillery Regiment`:`II./Schwere Artillerie-Regiment 115 "Halb und Halb"`,
                                        options.translate?`60th Infantry Division "Sabratha"`:`60ª Divisione di fanteria "Sabratha"`,
                                        options.translate?`Reserve Group`:`Gruppo di riserva`,
                                        //options.translate?`Artillery Group "Sabratha"`:`Raggruppamento artiglieria "Sabratha"`,
                                    ],[
                                        `3 Infantry Battalions, 1 Artillery Battalion in Tobruk`,
                                        `3 Light Tank Battalions, 1 Artillery Battalion`,
                                        `1 Infantry Battaalion`,
                                        `1 Motorized Infantry Battalion`,
                                        //`3 Infantry Battalions, 1 Tank Battalion, 1 Artillery Battalion`,
                                        //`3 Engineer Battalions`,
                                        `3 Infantry Battalions, 1 Tank Battalion, 2 Artillery Battalions`,
                                        `2 Machine Gun Battalions`,
                                    ],[
                                        `3 Infantry Battalions, 1 Artillery Battalion Outside Tobruk`,
                                        `3 Infantry Battalions, 1 Machine Gun Battalion`,
                                        `1 Mixed Battalion`,
                                        `1 Artillery Battalion`,
                                        //`4 Infantry Battalions, 1 Machine Gun Battalion`,
                                        //`2 Artillery Battalions, 1 Mixed Support Battalion`,
                                        `4 Infantry Battalions, 2 Artillery Battalions`,
                                        `1 Mixed Support Battalion, 1 Motorcycle Battalion`,
                                    ]
                                ]
                            break
                        }
                        layer.fill(0,this.anim.pick[a])
                        layer.textSize(80)
                        layer.text(`${types.player[set[0][a]].name} Deployment`,layer.width/2,layer.height/2-96)
                        layer.fill(150,this.anim.pick[a])
                        layer.rect(layer.width/2,layer.height/2+10,480,80,20)
                        layer.rect(layer.width/2,layer.height/2+110,480,80,20)
                        layer.fill(0,this.anim.pick[a])
                        if(this.turn.storePick==1&&a==4&&!options.translate){
                            layer.textSize(25)
                            layer.text(set[2][a],layer.width/2,layer.height/2+100)
                            layer.textSize(22.5)
                            layer.text(set[1][a],layer.width/2,layer.height/2)
                            layer.textSize(20)
                            layer.text(set[4][a],layer.width/2,layer.height/2+130)
                            layer.textSize(18)
                            layer.text(set[3][a],layer.width/2,layer.height/2+30)
                        }else if(this.turn.storePick==1&&a==3&&!options.translate){
                            layer.textSize(20)
                            layer.text(set[2][a],layer.width/2,layer.height/2+100)
                            layer.text(set[3][a],layer.width/2,layer.height/2+30)
                            layer.textSize(25)
                            layer.text(set[1][a],layer.width/2,layer.height/2)
                            layer.textSize(16)
                            layer.text(set[4][a],layer.width/2,layer.height/2+130)
                        }else{
                            layer.textSize(25)
                            layer.text(set[1][a],layer.width/2,layer.height/2)
                            layer.text(set[2][a],layer.width/2,layer.height/2+100)
                            layer.textSize(20)
                            layer.text(set[3][a],layer.width/2,layer.height/2+30)
                            layer.text(set[4][a],layer.width/2,layer.height/2+130)
                        }
                    }
                }
                if(this.anim.start>0){
                    /*layer.fill(200,this.anim.start)
                    layer.rect(layer.width/2,layer.height/2,500,140+types.map[this.map].unit.length*100,30)
                    layer.fill(150,this.anim.start)
                    for(let a=0,la=types.map[this.map].unit.length;a<la;a++){
                        layer.rect(layer.width/2,layer.height/2+60+even(a,la)*100,360,80,20)
                    }
                    layer.fill(0,this.anim.start)
                    layer.textSize(80)
                    layer.text(`Crusader`,layer.width/2,layer.height/2-10-types.map[this.map].unit.length*50)
                    layer.textSize(40)
                    layer.text(`DuckyProgramming`,layer.width/2,layer.height/2+40-types.map[this.map].unit.length*50)
                    for(let a=0,la=types.map[this.map].unit.length;a<la;a++){
                        layer.textSize(25)
                        layer.text(types.map[this.map].unit[a].name,layer.width/2,layer.height/2+50+even(a,la)*100)
                        layer.textSize(20)
                        layer.text(types.map[this.map].unit[a].battalions.map(set=>set.join(` + `)).join(` vs `),layer.width/2,layer.height/2+80+even(a,la)*100)
                    }*/
                    layer.fill(200,this.anim.start)
                    layer.rect(layer.width/2,layer.height/2,800,140+ceil(types.map[this.map].unit.length/2)*100,30)
                    layer.fill(150,this.anim.start)
                    for(let a=0,la=types.map[this.map].unit.length;a<la;a++){
                        let spread=even(floor(a/2),ceil(la/2))
                        layer.rect(layer.width/2-190+a%2*380,layer.height/2+60+spread*100,360,80,20)
                    }
                    layer.fill(0,this.anim.start)
                    layer.textSize(80)
                    layer.text(`Crusader`,layer.width/2,layer.height/2-10-ceil(types.map[this.map].unit.length/2)*50)
                    layer.textSize(40)
                    layer.text(`DuckyProgramming`,layer.width/2,layer.height/2+40-ceil(types.map[this.map].unit.length/2)*50)
                    for(let a=0,la=types.map[this.map].unit.length;a<la;a++){
                        let spread=even(floor(a/2),ceil(la/2))
                        if(types.map[this.map].unit[a].battalions.length==0){
                            layer.textSize(30)
                            layer.text(types.map[this.map].unit[a].name,layer.width/2-190+a%2*380,layer.height/2+60+spread*100)
                        }else{
                            layer.textSize(25)
                            layer.text(types.map[this.map].unit[a].name,layer.width/2-190+a%2*380,layer.height/2+50+spread*100)
                            layer.textSize(20)
                            layer.text(types.map[this.map].unit[a].battalions.map(set=>set.join(` + `)).join(` vs `),layer.width/2-190+a%2*380,layer.height/2+80+spread*100)
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
                        layer.text(`${floor(this.select.unit.getKills(0))} Kills\n${floor(this.select.unit.getKills(1))} Vehicles\n${floor(this.select.unit.getKills(2))} Artillery`,layer.width-80,130,140)
                        if(!this.select.unit.contain.trigger&&this.select.unit.contain.units.length==0){
                            layer.fill(150,this.anim.main*this.anim.select)
                            layer.rect(layer.width-340,50,200,60,10)
                            layer.fill(0,this.anim.main*this.anim.select)
                            layer.textSize(30)
                            layer.text(`Disband`,layer.width-340,50,200)
                            layer.textSize(10)
                            layer.text(`Enter`,layer.width-260,25)
                        }else if((this.select.unit.contain.trigger||this.select.unit.contain.middle)&&this.select.unit.contain.units.length>0){
                            let absorb=this.select.unit.contain.trigger?
                                this.units.filter(unit=>unit.active&&unit.fade.main>0&&unit.id!=this.select.unit.id&&(unit.level==3||unit.level==4)&&!unit.contain.adhoc&&distPos(unit,this.select.unit)<150&&types.player[unit.player].side==types.player[this.select.unit.player].side):
                                this.select.unit.parent.contain.units.filter(unit=>unit.active&&unit.fade.main>0&&unit.id!=this.select.unit.id&&distPos(unit,this.select.unit)<200)
                            layer.fill(150,this.anim.main*this.anim.select)
                            if(this.select.unit.level!=3&&this.select.unit.level!=4||this.select.unit.contain.adhoc){
                                layer.rect(layer.width-340,50,200,60,10)
                                if(this.select.unit.contain.units.length>1){
                                    layer.rect(layer.width-190,50,60,60,10)
                                }
                            }
                            if(absorb.length>0){
                                layer.rect(layer.width-340,130,200,60,10)
                            }
                            if(absorb.length>1){
                                layer.rect(layer.width-190,130,60,60,10)
                            }
                            layer.fill(0,this.anim.main*this.anim.select)
                            if(this.select.unit.level!=3&&this.select.unit.level!=4||this.select.unit.contain.adhoc){
                                layer.textSize(this.select.unit.contain.units.length<=1?30:15)
                                layer.text(this.select.unit.contain.units.length<=1?`Disband`:`Detach ${this.select.unit.contain.units[this.select.unit.order.detach%this.select.unit.contain.units.length].desc}`,layer.width-340,50,200)
                                if(this.select.unit.contain.units.length>1){
                                    layer.textSize(20)
                                    layer.text(`Next`,layer.width-190,50)
                                }
                            }
                            if(absorb.length>0){
                                layer.textSize(15)
                                layer.text(`Absorb ${absorb[this.select.unit.order.absorb%absorb.length].desc}`,layer.width-340,130,200)
                            }
                            if(absorb.length>1){
                                layer.textSize(20)
                                layer.text(`Next`,layer.width-190,130)
                            }
                            if(this.select.unit.level!=3&&this.select.unit.level!=4||this.select.unit.contain.adhoc){
                                layer.textSize(10)
                                layer.text(`Enter`,layer.width-260,25)
                                if(this.select.unit.contain.units.length>1){
                                    layer.textSize(15)
                                    layer.text(`@`,layer.width-180,30)
                                }
                            }
                            if(absorb.length>0){
                                layer.textSize(10)
                                layer.text(`Shift`,layer.width-260,105)
                            }
                            if(absorb.length>1){
                                layer.textSize(15)
                                layer.text(`#`,layer.width-180,110)
                            }
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
                this.anim.main=smoothAnim(this.anim.main,!this.turn.prep&&this.turn.pick<0&&this.turn.translate==-1&&!this.turn.start&&this.turn.time==0,0,1,5)
                this.anim.prep=smoothAnim(this.anim.prep,this.turn.prep&&this.turn.pick<0&&this.turn.translate==-1,0,1,5)
                this.anim.start=smoothAnim(this.anim.start,this.turn.start&&this.turn.pick<0&&this.turn.translate==-1,0,1,5)
                this.anim.pick.forEach((pick,index,arr)=>arr[index]=smoothAnim(pick,this.turn.pick>=0&&this.turn.main==index,0,1,5))
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
    }
    onClick(layer,mouse){
        let rel
        rel={position:{x:mouse.position.x/this.view.scale,y:mouse.position.y/this.view.scale}}
        switch(this.scene){
            case `main`:
                if(this.turn.time<=0){
                    if(this.turn.start){
                        for(let a=0,la=types.map[this.map].unit.length;a<la;a++){
                            /*if(inPointBox(mouse,boxify(layer.width/2,layer.height/2+60+even(a,la)*100,300,80))){
                                this.turn.start=false
                                this.turn.prep=true
                                this.turn.translate=a
                            }*/
                            let spread=even(floor(a/2),ceil(la/2))
                            if(inPointBox(mouse,boxify(layer.width/2-190+a%2*380,layer.height/2+60+spread*100,360,80))){
                                if(types.map[this.map].unit[a].name==`Gazala Map`){
                                    window.open('../Gazala')
                                }else if(types.map[this.map].unit[a].name==`Mersa Matruh Map`){
                                    window.open('../Matruh')
                                }else{
                                    this.turn.start=false
                                    this.turn.prep=true
                                    this.turn.translate=a
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
                    }else if(this.turn.pick>=0){
                        if(inPointBox(mouse,boxify(layer.width/2,layer.height/2+10/*(this.turn.main==3?-40:10)*/,480,80))){
                            this.turn.main++
                            if(this.turn.main>=types.reserve.length){
                                this.spawnUnits()
                                this.turn.main=0
                                this.turn.pick=-1
                            }
                        }else if(inPointBox(mouse,boxify(layer.width/2,layer.height/2+110/*(this.turn.main==3?60:110)*/,480,80))){
                            let target
                            /*switch(this.turn.main){
                                case 0:
                                    target=types.unit[findAbstract(`desc`,`70th Infantry Division`,types.unit)]
                                    target.elements[findAbstract(`desc`,`14th Infantry Brigade`,target.elements)]=types.reserve[this.turn.main]
                                break
                                case 1:
                                    target=types.unit[findAbstract(`desc`,`2nd New Zealand Division`,types.unit)]
                                    target.elements[findAbstract(`desc`,`2nd New Zealand Field Brigade`,target.elements)]=types.reserve[this.turn.main]
                                break
                                case 2:
                                    target=types.unit[findAbstract(`desc`,`1st South African Infantry Division`,types.unit)]
                                    target.elements[findAbstract(`desc`,`1st South African Infantry Brigade`,target.elements)]=types.reserve[this.turn.main]
                                break
                                case 3:
                                    target=types.unit[findAbstract(`desc`,`Special Purpose Divisional Command "Afrika"`,types.unit)]
                                    target.elements[findAbstract(`desc`,`Sperrverband, Sonderverband 288`,target.elements)]=types.reserve[this.turn.main]
                                break
                                case 4:
                                    types.unit[findAbstract(`desc`,`8th Army Artillery Group`,types.unit)]=types.reserve[this.turn.main]
                                break
                                case 5:
                                    target=types.unit[findAbstract(`desc`,`102nd Infantry Division 'Trento'`,types.unit)]
                                    target.elements.splice(target.elements[findAbstract(`desc`,`7th Bersaglieri Regiment`,target.elements)],1)
                                    types.unit.push(types.reserve[this.turn.main])
                                break
                            }*/
                            switch(this.turn.pick){
                                case 0:
                                    switch(this.turn.main){
                                        case 0:
                                            target=types.unit[findAbstract(`desc`,`70th Infantry Division`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`14th Infantry Brigade`,target.elements),1)
                                            target.elements.splice(findAbstract(`desc`,`Polish Independent Carpathian Brigade`,target.elements),0,types.reserve[this.turn.main])
                                        break
                                        case 1:
                                            target=types.unit[findAbstract(`desc`,`2nd New Zealand Division`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`2nd New Zealand Field Brigade`,target.elements),1)
                                            target.elements[findAbstract(`desc`,`4th New Zealand Infantry Brigade`,target.elements)].pos=[2620,1210]
                                            types.unit.push(types.reserve[this.turn.main])
                                        break
                                        case 2:
                                            target=types.unit[findAbstract(`desc`,`1st South African Infantry Division`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`1st South African Infantry Brigade`,target.elements),1)
                                            target.elements[0].pos[0]-=105
                                            target.elements.push(types.reserve[this.turn.main])
                                        break
                                        case 3:
                                            target=types.unit[findAbstract(`desc`,`15th Panzer Division`,types.unit)]
                                            target=target.elements[findAbstract(`desc`,`15th Rifle Brigade`,target.elements)]
                                            target.elements[findAbstract(`desc`,`200th Special Purpose Regimental Staff`,target.elements)]=types.reserve[this.turn.main]
                                        break
                                        case 4:
                                            target=types.unit[findAbstract(`desc`,`Special Purpose Divisional Command "Afrika"`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`3rd Battalion, 255th Infantry Regiment`,target.elements),2,types.reserve[this.turn.main])
                                        break
                                        case 5:
                                            target=types.unit[findAbstract(`desc`,`Special Purpose Divisional Command "Afrika"`,types.unit)]
                                            target.elements[findAbstract(`desc`,`2nd Battalion, 115th Rifle Regiment`,target.elements)]=types.reserve[this.turn.main]
                                        break
                                        case 6:
                                            target=types.unit[findAbstract(`desc`,`101st Motorized Infantry Division "Trieste"`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`9th Bersaglieri Regiment`,target.elements),1)
                                            types.unit.push(types.reserve[this.turn.main])
                                        break
                                        case 7:
                                            types.unit.splice(findAbstract(`desc`,`8th Army Artillery Group`,types.unit),1,types.reserve[this.turn.main][0])
                                            target=types.unit[findAbstract(`desc`,`101st Motorized Infantry Division "Trieste"`,types.unit)]
                                            target.elements.push(types.reserve[this.turn.main][1])
                                            target=types.unit[findAbstract(`desc`,`102nd Infantry Division "Trento"`,types.unit)]
                                            target.elements.push(types.reserve[this.turn.main][2])
                                        break
                                        case 8:
                                            target=types.unit[findAbstract(`desc`,`101st Motorized Infantry Division "Trieste"`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`Coastal Defense Artillery Militia Battalion "Maneuver Army Corps"`,target.elements),1)
                                            target=types.unit[findAbstract(`desc`,`55th Infantry Division "Savona"`,types.unit)]
                                            target.elements.push(types.reserve[this.turn.main])
                                        break
                                    }
                                break
                                case 1:
                                    let target2
                                    let target3
                                    switch(this.turn.main){
                                        case 0:
                                            target=types.unit[findAbstract(`desc`,`70th Infantry Division`,types.unit)]
                                            target.elements[findAbstract(`desc`,`23rd Infantry Brigade`,target.elements)]=types.reserve[this.turn.main][0]
                                            target=target.elements[findAbstract(`desc`,`Polish Independent Carpathian Brigade`,target.elements)]
                                            target.pos[0]-=15
                                            target.pos[1]-=15
                                            target.elements.splice(findAbstract(`desc`,`11th Czechoslovak Infantry Battalion`,target.elements),1)
                                            target=types.unit[findAbstract(`desc`,`1st South African Infantry Division`,types.unit)]
                                            target.pos[0]+=105
                                            target.elements.splice(findAbstract(`desc`,`Machine Gun Battalion "President Steyn"`,target.elements),0,types.reserve[this.turn.main][1])
                                        break
                                        case 1:
                                            target=types.unit[findAbstract(`desc`,`7th Armored Division`,types.unit)]
                                            target2=target.elements[findAbstract(`desc`,`4th Armored Brigade`,target.elements)]
                                            target3=target.elements[findAbstract(`desc`,`7th Armored Brigade`,target.elements)]
                                            target3.elements.splice(
                                                findAbstract(`desc`,`7th Queen's Own Hussars`,target3.elements)+1,
                                                0,
                                                target2.elements[findAbstract(`desc`,`2nd Battalion, Scots Guards`,target2.elements)]
                                            )
                                            target.elements.splice(findAbstract(`desc`,`4th Armored Brigade`,target.elements),1)
                                            target.pos[0]-=100
                                            target.elements[findAbstract(`desc`,`7th Armored Brigade`,target.elements)].pos[0]-=100
                                            target.elements[findAbstract(`desc`,`7th Support Group`,target.elements)].pos[0]-=100
                                            target=types.unit[findAbstract(`desc`,`2nd New Zealand Division`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`2nd New Zealand Field Brigade`,target.elements),0,types.reserve[this.turn.main][0])
                                            target.elements.splice(findAbstract(`desc`,`28th "Māori" New Zealand Infantry Battalion`,target.elements),0,types.reserve[this.turn.main][1])
                                        break
                                        case 2:
                                            target=types.unit[findAbstract(`desc`,`Special Purpose Divisional Command "Afrika"`,types.unit)]
                                            target.elements[findAbstract(`desc`,`3rd Battalion, 347th Infantry Regiment`,target.elements)]=types.reserve[this.turn.main]
                                            /*target=types.unit[findAbstract(`desc`,`15th Panzer Division`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`33rd Engineer Battalion`,target.elements),1)
                                            target.elements.splice(findAbstract(`desc`,`33rd Anti-Tank Battalion`,target.elements),1)
                                            target=types.unit[findAbstract(`desc`,`Special Purpose Divisional Command "Afrika"`,types.unit)]
                                            target.elements.splice(0,0,types.reserve[this.turn.main])*/
                                        break
                                        case 3:
                                            target=types.unit[findAbstract(`desc`,`Special Purpose Divisional Command "Afrika"`,types.unit)]
                                            target.elements[findAbstract(`desc`,`2nd Battalion, 115th Rifle Regiment`,target.elements)]=types.reserve[this.turn.main]
                                            target=types.unit[findAbstract(`desc`,`15th Panzer Division`,types.unit)]
                                            target=target.elements[findAbstract(`desc`,`15th Rifle Brigade`,target.elements)]
                                            target2=target.elements[findAbstract(`desc`,`200th Special Purpose Regimental Staff`,target.elements)]
                                            target3=target.elements[findAbstract(`desc`,`115th Rifle Regiment`,target.elements)]
                                            target3.elements.push(target2.elements.splice(findAbstract(`desc`,`2nd Machine Gun Battalion`,target2.elements),1)[0])
                                        break
                                        case 4:
                                            types.unit[findAbstract(`desc`,`Army Corps Reconnaissance Regrouping`,types.unit)]=types.reserve[this.turn.main][0]
                                            last(types.unit).pos=[932,544]
                                            last(types.unit).elements.splice(findAbstract(`desc`,`161st Mixed Engineer Company`,last(types.unit).elements),0,types.reserve[this.turn.main][1])
                                            /*types.unit.splice(findAbstract(`desc`,`Army Corps Reconnaissance Regrouping`,types.unit),1)
                                            types.unit.splice(findAbstract(`desc`,`Infantry Regiment "Giovani Fascisti"`,types.unit),1)
                                            types.unit.push(types.reserve[this.turn.main][0])
                                            last(types.unit).elements.push(types.unit[findAbstract(`desc`,`60th Mixed Engineer Battalion`,types.unit)])
                                            last(last(types.unit).elements).pos=[932,544]
                                            types.unit.splice(findAbstract(`desc`,`60th Mixed Engineer Battalion`,types.unit),1)
                                            target=types.unit[findAbstract(`desc`,`55th Infantry Division "Savona"`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`155th Machine Gun Battalion`,target.elements),0,types.reserve[this.turn.main][1])*/
                                        break
                                        case 5:
                                            target=types.unit[findAbstract(`desc`,`55th Infantry Division "Savona"`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`155th Machine Gun Battalion`,target.elements),2)
                                            target=types.unit[findAbstract(`desc`,`102nd Infantry Division "Trento"`,types.unit)]
                                            target.elements.push(types.reserve[this.turn.main][0])
                                            if(types.unit.some(unit=>unit.desc[0]==`60th Infantry Division "Sabratha"`)){
                                                target=types.unit[findAbstract(`desc`,`60th Infantry Division "Sabratha"`,types.unit)]
                                                target.elements.push(types.reserve[this.turn.main][1])
                                            }else{
                                                types.unit.push(types.reserve[this.turn.main][1])
                                            }
                                            /*target=types.unit[findAbstract(`desc`,`55th Infantry Division "Savona"`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`55th Mixed Engineer Battalion`,target.elements),1)
                                            target=types.unit[findAbstract(`desc`,`102nd Infantry Division "Trento"`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`51st Mixed Engineer Battalion`,target.elements),1)
                                            target.elements.push(types.reserve[this.turn.main][1])
                                            if(types.unit.some(unit=>unit.desc[0]==`60th Infantry Division "Sabratha"`)){
                                                target=types.unit[findAbstract(`desc`,`60th Infantry Division "Sabratha"`,types.unit)]
                                                target.elements.splice(findAbstract(`desc`,`60th Mixed Engineer Battalion`,target.elements),1)
                                                target.elements.push(types.reserve[this.turn.main][0])
                                            }else{
                                                types.unit.splice(findAbstract(`desc`,`60th Mixed Engineer Battalion`,types.unit),1)
                                                types.unit.push(types.reserve[this.turn.main][0])
                                            }*/
                                        break
                                    }
                                break
                            }
                            this.turn.main++
                            if(this.turn.main>=types.reserve.length){
                                this.spawnUnits()
                                this.turn.main=0
                                this.turn.pick=-1
                            }
                        }/*else if(this.turn.main==3&&inPointBox(mouse,boxify(layer.width/2,layer.height/2+160,480,80))){
                            let target=types.unit[findAbstract(`desc`,`Special Purpose Divisional Command "Afrika"`,types.unit)]
                            target.elements[findAbstract(`desc`,`361st 'Afrika' Infantry Regiment`,target.elements)].pos=types.reserve[this.turn.main][0].pos
                            target.elements.splice(findAbstract(`desc`,`3rd Battalion, 255th Infantry Regiment`,target.elements),2,types.reserve[this.turn.main][2])
                            types.unit.push(types.reserve[this.turn.main][1])
                            this.turn.main++
                            if(this.turn.main>=types.reserve.length){
                                this.spawnUnits()
                                this.turn.main=0
                                this.turn.pick=-1
                            }
                        }*/
                    }else if(this.turn.prep){
                        this.turn.prep=false
                        this.turn.loading=true
                        this.cities.forEach(city=>city.fade.revealTrigger=this.turn.partition[this.turn.main].includes(city.owner)||city.nearTransientSet(160,this.turn.partition[this.turn.main]))
                    }else{
                        if(inPointBox(mouse,boxify(layer.width-230,90,460,180))){
                            if(this.anim.selectTrigger){
                                if(this.select.unit.contain.trigger){
                                    let absorb=this.units.filter(unit=>unit.active&&unit.fade.main>0&&unit.id!=this.select.unit.id&&(unit.level==3||unit.level==4)&&!unit.contain.adhoc&&distPos(unit,this.select.unit)<150&&types.player[unit.player].side==types.player[this.select.unit.player].side)
                                    if(this.select.unit.level!=3&&this.select.unit.level!=4||this.select.unit.contain.adhoc){
                                        if(inPointBox(mouse,boxify(layer.width-340,50,200,60))){
                                            if(this.select.unit.contain.units.length<=1){
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
                                                            level:element.level,type:element.type.map(type=>types.unitType[type].name),team:element.team,
                                                            desc:element.desc,name:element.name,designation:element.designation,commander:element.commander,
                                                            icon:element.icon,elements:[],
                                                        })
                                                        result.contain.units.push(element)
                                                        result.calculateElements()
                                                        result.fade=JSON.parse(JSON.stringify(this.select.unit.fade))
                                                        result.parent=this.select.unit.parent
                                                        this.units.push(result)
                                                        this.select.unit.contain.units.splice(this.select.unit.order.detach%this.select.unit.contain.units.length,1)
                                                        this.select.unit.calculateElements()
                                                        if(this.select.unit.parent!=-1){
                                                            this.select.unit.parent.contain.units.push(result)
                                                        }
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
                                            if((this.select.unit.level==3||this.select.unit.level==4)&&!this.select.unit.contain.adhoc){
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
                                                    level:element.level==3&&target.level==4||element.level==4&&target.level==3?3:[1,2,1][element.player],type:typing,team:element.team,
                                                    desc:`${[
                                                        `${element.commander!=``?`${element.commander}col`:`Col`}`,
                                                        `Kampfgruppe${element.commander!=``?` ${element.commander}`:``}`,
                                                        options.translate?`Column${element.commander!=``?` ${element.commander}`:``}`:`Colonna${element.commander!=``?` ${element.commander}`:``}`
                                                    ][element.player]}`,name:[`BG`,`KG`,`C`][element.player],designation:element.designation,commander:element.commander,
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
                                            }
                                        }
                                        if(inPointBox(mouse,boxify(layer.width-120,130,200,60))){
                                            this.select.unit.order.absorb++
                                        }
                                    }
                                }else if(this.select.unit.contain.middle&&this.select.unit.contain.units.length>0){
                                    let absorb=this.select.unit.parent.contain.units.filter(unit=>unit.active&&unit.fade.main>0&&unit.id!=this.select.unit.id&&distPos(unit,this.select.unit)<200)
                                    if(inPointBox(mouse,boxify(layer.width-340,50,200,60))){
                                        let element=this.select.unit.contain.units[this.select.unit.order.detach%this.select.unit.contain.units.length]
                                        element.parent=this.select.unit.parent
                                        this.select.unit.parent.contain.units.push(element)
                                        this.select.unit.contain.units.splice(
                                            this.select.unit.contain.units.indexOf(element),
                                            1
                                        )
                                    }
                                    if(inPointBox(mouse,boxify(layer.width-120,50,200,60))){
                                        this.select.unit.order.detach++
                                    }
                                    if(absorb.length>0){
                                        if(inPointBox(mouse,boxify(layer.width-340,130,200,60))){
                                            let target=absorb[this.select.unit.order.absorb%absorb.length]
                                            target.parent=this.select.unit
                                            this.select.unit.contain.units.push(target)
                                            this.select.unit.parent.contain.units.splice(
                                                this.select.unit.parent.contain.units.indexOf(target),
                                                1
                                            )
                                        }
                                        if(inPointBox(mouse,boxify(layer.width-120,130,200,60))){
                                            this.select.unit.order.absorb++
                                        }
                                    }
                                }else if(!this.select.unit.contain.trigger&&this.select.unit.contain.units.length==0){
                                    if(inPointBox(mouse,boxify(layer.width-340,50,200,60))){
                                        this.select.unit.active=false
                                        this.select.unit.destroy()
                                        this.select.unit.order.trigger=false
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
                    if(this.turn.start){
                        for(let a=0,la=types.map[this.map].unit.length;a<la;a++){
                            if(int(key)==a+1){
                                if(types.map[this.map].unit[a].name==`Gazala Map`){
                                    window.open('../Gazala')
                                }else if(types.map[this.map].unit[a].name==`Mersa Matruh Map`){
                                    window.open('../Matruh')
                                }else{
                                    this.turn.start=false
                                    this.turn.prep=true
                                    this.turn.translate=a
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
                    }else if(this.turn.pick>=0){
                        if(key==`1`){
                            this.turn.main++
                            if(this.turn.main>=types.reserve.length){
                                this.spawnUnits()
                                this.turn.main=0
                                this.turn.pick=-1
                            }
                        }else if(key==`2`){
                            let target
                            /*switch(this.turn.main){
                                case 0:
                                    target=types.unit[findAbstract(`desc`,`70th Infantry Division`,types.unit)]
                                    target.elements[findAbstract(`desc`,`14th Infantry Brigade`,target.elements)]=types.reserve[this.turn.main]
                                break
                                case 1:
                                    target=types.unit[findAbstract(`desc`,`2nd New Zealand Division`,types.unit)]
                                    target.elements.splice(findAbstract(`desc`,`2nd New Zealand Field Brigade`,target.elements),1)
                                    target.elements[findAbstract(`desc`,`4th New Zealand Infantry Brigade`,target.elements)].pos=[2620,1210]
                                    types.unit.push(types.reserve[this.turn.main])
                                break
                                case 2:
                                    target=types.unit[findAbstract(`desc`,`1st South African Infantry Division`,types.unit)]
                                    target.elements[findAbstract(`desc`,`1st South African Infantry Brigade`,target.elements)]=types.reserve[this.turn.main]
                                break
                                case 3:
                                    target=types.unit[findAbstract(`desc`,`Special Purpose Divisional Command "Afrika"`,types.unit)]
                                    target.elements[findAbstract(`desc`,`Sperrverband, Sonderverband 288`,target.elements)]=types.reserve[this.turn.main]
                                break
                                case 4:
                                    target=types.unit[findAbstract(`desc`,`101st Motorized Infantry Division "Trieste"`,types.unit)]
                                    target.elements.splice(findAbstract(`desc`,`9th Bersaglieri Regiment`,target.elements),1)
                                    types.unit.push(types.reserve[this.turn.main])
                                break
                                case 5:
                                    target=types.unit[findAbstract(`desc`,`101st Motorized Infantry Division "Trieste"`,types.unit)]
                                    target.elements.splice(findAbstract(`desc`,`Naval Artillery Militia Battalion "Maneuver Army Corps"`,target.elements),1)
                                    types.unit.splice(findAbstract(`desc`,`8th Army Artillery Group`,types.unit),1,...types.reserve[this.turn.main])
                                break
                            }*/
                            switch(this.turn.pick){
                                case 0:
                                    switch(this.turn.main){
                                        case 0:
                                            target=types.unit[findAbstract(`desc`,`70th Infantry Division`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`14th Infantry Brigade`,target.elements),1)
                                            target.elements.splice(findAbstract(`desc`,`Polish Independent Carpathian Brigade`,target.elements),0,types.reserve[this.turn.main])
                                        break
                                        case 1:
                                            target=types.unit[findAbstract(`desc`,`2nd New Zealand Division`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`2nd New Zealand Field Brigade`,target.elements),1)
                                            target.elements[findAbstract(`desc`,`4th New Zealand Infantry Brigade`,target.elements)].pos=[2620,1210]
                                            types.unit.push(types.reserve[this.turn.main])
                                        break
                                        case 2:
                                            target=types.unit[findAbstract(`desc`,`1st South African Infantry Division`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`1st South African Infantry Brigade`,target.elements),1)
                                            target.elements[0].pos[0]-=105
                                            target.elements.push(types.reserve[this.turn.main])
                                        break
                                        case 3:
                                            target=types.unit[findAbstract(`desc`,`15th Panzer Division`,types.unit)]
                                            target=target.elements[findAbstract(`desc`,`15th Rifle Brigade`,target.elements)]
                                            target.elements[findAbstract(`desc`,`200th Special Purpose Regimental Staff`,target.elements)]=types.reserve[this.turn.main]
                                        break
                                        case 4:
                                            target=types.unit[findAbstract(`desc`,`Special Purpose Divisional Command "Afrika"`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`3rd Battalion, 255th Infantry Regiment`,target.elements),2,types.reserve[this.turn.main])
                                        break
                                        case 5:
                                            target=types.unit[findAbstract(`desc`,`Special Purpose Divisional Command "Afrika"`,types.unit)]
                                            target.elements[findAbstract(`desc`,`2nd Battalion, 115th Rifle Regiment`,target.elements)]=types.reserve[this.turn.main]
                                        break
                                        case 6:
                                            target=types.unit[findAbstract(`desc`,`101st Motorized Infantry Division "Trieste"`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`9th Bersaglieri Regiment`,target.elements),1)
                                            types.unit.push(types.reserve[this.turn.main])
                                        break
                                        case 7:
                                            types.unit.splice(findAbstract(`desc`,`8th Army Artillery Group`,types.unit),1,types.reserve[this.turn.main][0])
                                            target=types.unit[findAbstract(`desc`,`101st Motorized Infantry Division "Trieste"`,types.unit)]
                                            target.elements.push(types.reserve[this.turn.main][1])
                                            target=types.unit[findAbstract(`desc`,`102nd Infantry Division "Trento"`,types.unit)]
                                            target.elements.push(types.reserve[this.turn.main][2])
                                        break
                                        case 8:
                                            target=types.unit[findAbstract(`desc`,`101st Motorized Infantry Division "Trieste"`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`Coastal Defense Artillery Militia Battalion "Maneuver Army Corps"`,target.elements),1)
                                            target=types.unit[findAbstract(`desc`,`55th Infantry Division "Savona"`,types.unit)]
                                            target.elements.push(types.reserve[this.turn.main])
                                        break
                                    }
                                break
                                case 1:
                                    let target2
                                    let target3
                                    switch(this.turn.main){
                                        case 0:
                                            target=types.unit[findAbstract(`desc`,`70th Infantry Division`,types.unit)]
                                            target.elements[findAbstract(`desc`,`23rd Infantry Brigade`,target.elements)]=types.reserve[this.turn.main][0]
                                            target=target.elements[findAbstract(`desc`,`Polish Independent Carpathian Brigade`,target.elements)]
                                            target.pos[0]-=15
                                            target.pos[1]-=15
                                            target.elements.splice(findAbstract(`desc`,`11th Czechoslovak Infantry Battalion`,target.elements),1)
                                            target=types.unit[findAbstract(`desc`,`1st South African Infantry Division`,types.unit)]
                                            target.pos[0]+=105
                                            target.elements.splice(findAbstract(`desc`,`Machine Gun Battalion "President Steyn"`,target.elements),0,types.reserve[this.turn.main][1])
                                        break
                                        case 1:
                                            target=types.unit[findAbstract(`desc`,`7th Armored Division`,types.unit)]
                                            target2=target.elements[findAbstract(`desc`,`4th Armored Brigade`,target.elements)]
                                            target3=target.elements[findAbstract(`desc`,`7th Armored Brigade`,target.elements)]
                                            target3.elements.splice(
                                                findAbstract(`desc`,`7th Queen's Own Hussars`,target3.elements)+1,
                                                0,
                                                target2.elements[findAbstract(`desc`,`2nd Battalion, Scots Guards`,target2.elements)]
                                            )
                                            target.elements.splice(findAbstract(`desc`,`4th Armored Brigade`,target.elements),1)
                                            target.pos[0]-=100
                                            target.elements[findAbstract(`desc`,`7th Armored Brigade`,target.elements)].pos[0]-=100
                                            target.elements[findAbstract(`desc`,`7th Support Group`,target.elements)].pos[0]-=100
                                            target=types.unit[findAbstract(`desc`,`2nd New Zealand Division`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`2nd New Zealand Field Brigade`,target.elements),0,types.reserve[this.turn.main][0])
                                            target.elements.splice(findAbstract(`desc`,`28th "Māori" New Zealand Infantry Battalion`,target.elements),0,types.reserve[this.turn.main][1])
                                        break
                                        case 2:
                                            target=types.unit[findAbstract(`desc`,`Special Purpose Divisional Command "Afrika"`,types.unit)]
                                            target.elements[findAbstract(`desc`,`3rd Battalion, 347th Infantry Regiment`,target.elements)]=types.reserve[this.turn.main]
                                            /*target=types.unit[findAbstract(`desc`,`15th Panzer Division`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`33rd Engineer Battalion`,target.elements),1)
                                            target.elements.splice(findAbstract(`desc`,`33rd Anti-Tank Battalion`,target.elements),1)
                                            target=types.unit[findAbstract(`desc`,`Special Purpose Divisional Command "Afrika"`,types.unit)]
                                            target.elements.splice(0,0,types.reserve[this.turn.main])*/
                                        break
                                        case 3:
                                            target=types.unit[findAbstract(`desc`,`Special Purpose Divisional Command "Afrika"`,types.unit)]
                                            target.elements[findAbstract(`desc`,`2nd Battalion, 115th Rifle Regiment`,target.elements)]=types.reserve[this.turn.main]
                                            target=types.unit[findAbstract(`desc`,`15th Panzer Division`,types.unit)]
                                            target=target.elements[findAbstract(`desc`,`15th Rifle Brigade`,target.elements)]
                                            target2=target.elements[findAbstract(`desc`,`200th Special Purpose Regimental Staff`,target.elements)]
                                            target3=target.elements[findAbstract(`desc`,`115th Rifle Regiment`,target.elements)]
                                            target3.elements.push(target2.elements.splice(findAbstract(`desc`,`2nd Machine Gun Battalion`,target2.elements),1)[0])
                                        break
                                        case 4:
                                            types.unit[findAbstract(`desc`,`Army Corps Reconnaissance Regrouping`,types.unit)]=types.reserve[this.turn.main][0]
                                            last(types.unit).pos=[932,544]
                                            last(types.unit).elements.splice(findAbstract(`desc`,`161st Mixed Engineer Company`,last(types.unit).elements),0,types.reserve[this.turn.main][1])
                                            /*types.unit.splice(findAbstract(`desc`,`Army Corps Reconnaissance Regrouping`,types.unit),1)
                                            types.unit.splice(findAbstract(`desc`,`Infantry Regiment "Giovani Fascisti"`,types.unit),1)
                                            types.unit.push(types.reserve[this.turn.main][0])
                                            last(types.unit).elements.push(types.unit[findAbstract(`desc`,`60th Mixed Engineer Battalion`,types.unit)])
                                            last(last(types.unit).elements).pos=[932,544]
                                            types.unit.splice(findAbstract(`desc`,`60th Mixed Engineer Battalion`,types.unit),1)
                                            target=types.unit[findAbstract(`desc`,`55th Infantry Division "Savona"`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`155th Machine Gun Battalion`,target.elements),0,types.reserve[this.turn.main][1])*/
                                        break
                                        case 5:
                                            target=types.unit[findAbstract(`desc`,`55th Infantry Division "Savona"`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`155th Machine Gun Battalion`,target.elements),2)
                                            target=types.unit[findAbstract(`desc`,`102nd Infantry Division "Trento"`,types.unit)]
                                            target.elements.push(types.reserve[this.turn.main][0])
                                            if(types.unit.some(unit=>unit.desc[0]==`60th Infantry Division "Sabratha"`)){
                                                target=types.unit[findAbstract(`desc`,`60th Infantry Division "Sabratha"`,types.unit)]
                                                target.elements.push(types.reserve[this.turn.main][1])
                                            }else{
                                                types.unit.push(types.reserve[this.turn.main][1])
                                            }
                                            /*target=types.unit[findAbstract(`desc`,`55th Infantry Division "Savona"`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`55th Mixed Engineer Battalion`,target.elements),1)
                                            target=types.unit[findAbstract(`desc`,`102nd Infantry Division "Trento"`,types.unit)]
                                            target.elements.splice(findAbstract(`desc`,`51st Mixed Engineer Battalion`,target.elements),1)
                                            target.elements.push(types.reserve[this.turn.main][1])
                                            if(types.unit.some(unit=>unit.desc[0]==`60th Infantry Division "Sabratha"`)){
                                                target=types.unit[findAbstract(`desc`,`60th Infantry Division "Sabratha"`,types.unit)]
                                                target.elements.splice(findAbstract(`desc`,`60th Mixed Engineer Battalion`,target.elements),1)
                                                target.elements.push(types.reserve[this.turn.main][0])
                                            }else{
                                                types.unit.splice(findAbstract(`desc`,`60th Mixed Engineer Battalion`,types.unit),1)
                                                types.unit.push(types.reserve[this.turn.main][0])
                                            }*/
                                        break
                                    }
                                break
                            }
                            this.turn.main++
                            if(this.turn.main>=types.reserve.length){
                                this.spawnUnits()
                                this.turn.main=0
                                this.turn.pick=-1
                            }
                        }else if(this.turn.main==3&&key==`3`){
                            let target=types.unit[findAbstract(`desc`,`Special Purpose Divisional Command "Afrika"`,types.unit)]
                            target.elements[findAbstract(`desc`,`361st 'Afrika' Infantry Regiment`,target.elements)].pos=types.reserve[this.turn.main][0].pos
                            target.elements.splice(findAbstract(`desc`,`3rd Battalion, 255th Infantry Regiment`,target.elements),2,types.reserve[this.turn.main][2])
                            types.unit.push(types.reserve[this.turn.main][1])
                            this.turn.main++
                            if(this.turn.main>=types.reserve.length){
                                this.spawnUnits()
                                this.turn.main=0
                                this.turn.pick=-1
                            }
                        }
                    }else if(this.turn.prep){
                        if(key==`Enter`||int(key)>=1&&int(key)<=types.map[this.map].unit.length){
                            this.turn.prep=false
                            this.turn.loading=true
                            this.cities.forEach(city=>city.fade.revealTrigger=this.turn.partition[this.turn.main].includes(city.owner)||city.nearTransientSet(160,this.turn.partition[this.turn.main]))
                        }
                    }else{
                        if(this.anim.selectTrigger){
                            if(this.select.unit.contain.trigger){
                                let absorb=this.units.filter(unit=>unit.active&&unit.fade.main>0&&unit.id!=this.select.unit.id&&distPos(unit,this.select.unit)<150&&types.player[unit.player].side==types.player[this.select.unit.player].side)
                                if(this.select.unit.level!=3&&this.select.unit.level!=4||this.select.unit.contain.adhoc){
                                    if(key===`Enter`){
                                        if(this.select.unit.contain.units.length<=1){
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
                                                        level:element.level,type:element.type.map(type=>types.unitType[type].name),team:element.team,
                                                        desc:element.desc,name:element.name,designation:element.designation,commander:element.commander,
                                                        icon:element.icon,elements:[],
                                                    })
                                                    result.contain.units.push(element)
                                                    result.calculateElements()
                                                    result.fade=JSON.parse(JSON.stringify(this.select.unit.fade))
                                                    result.parent=this.select.unit.parent
                                                    this.units.push(result)
                                                    this.select.unit.contain.units.splice(this.select.unit.order.detach%this.select.unit.contain.units.length,1)
                                                    this.select.unit.calculateElements()
                                                    if(this.select.unit.parent!=-1){
                                                        this.select.unit.parent.contain.units.push(result)
                                                    }
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
                                        if((this.select.unit.level==3||this.select.unit.level==4)&&!this.select.unit.contain.adhoc){
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
                                                level:element.level==3&&target.level==4||element.level==4&&target.level==3?3:[1,2,1][element.player],type:typing,team:element.team,
                                                desc:`${[`Battle Group`,`Kampfgruppe`,`Column`][element.player]}${element.commander!=``?` ${element.commander}`:``}`,name:[`BG`,`KG`,`C`][element.player],designation:element.designation,commander:element.commander,
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
                                        }
                                    }
                                    if(key==`#`){
                                        this.select.unit.order.absorb++
                                    }
                                }
                            }else if(this.select.unit.contain.middle&&this.select.unit.contain.units.length>0){
                                let absorb=this.select.unit.parent.contain.units.filter(unit=>unit.active&&unit.fade.main>0&&unit.id!=this.select.unit.id&&distPos(unit,this.select.unit)<200)
                                if(key===`Enter`){
                                    let element=this.select.unit.contain.units[this.select.unit.order.detach%this.select.unit.contain.units.length]
                                    element.parent=this.select.unit.parent
                                    this.select.unit.parent.contain.units.push(element)
                                    this.select.unit.contain.units.splice(
                                        this.select.unit.contain.units.indexOf(element),
                                        1
                                    )
                                }
                                if(key==`@`){
                                    this.select.unit.order.detach++
                                }
                                if(absorb.length>0){
                                    if(key==`Shift`){
                                        let target=absorb[this.select.unit.order.absorb%absorb.length]
                                        target.parent=this.select.unit
                                        this.select.unit.contain.units.push(target)
                                        this.select.unit.parent.contain.units.splice(
                                            this.select.unit.parent.contain.units.indexOf(target),
                                            1
                                        )
                                    }
                                    if(key==`#`){
                                        this.select.unit.order.absorb++
                                    }
                                }
                            }else if(!this.select.unit.contain.trigger&&this.select.unit.contain.units.length==0){
                                if(key===`Enter`){
                                    this.select.unit.active=false
                                    this.select.unit.destroy()
                                    this.select.unit.order.trigger=false
                                }
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
        }
    }
}
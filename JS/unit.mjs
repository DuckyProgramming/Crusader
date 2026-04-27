import {types,graphics,constants,dev} from './variables.mjs'
import {smoothAnim,findName,last,inPointBox,distPos,randin,findId,elementArray} from './functions.mjs'
import {lsin,lcos} from './graphics.mjs'
export class unit{
    constructor(operation,data){
        this.operation=operation
        this.position={x:data.pos[0],y:data.pos[1]}
        this.level=data.level
        this.type=data.type.map(type=>findName(type,types.unitType))
        this.elementType=data.elementType==undefined?-1:data.elementType
        this.team=typeof data.team==`number`?data.team:findName(data.team,types.team)
        this.desc=data.desc
        this.name=data.name
        this.designation=data.designation
        this.commander=data.commander
        this.icon=data.icon

        this.player=types.team[this.team].player
        this.active=true
        this.parent=-1
        this.id=constants.unitId
        constants.unitId++

        this.symbol=types.unitLevel[this.level].symbol
        this.size=types.unitLevel[this.level].size[this.player]
        this.width=this.size*1.6
        this.height=this.size
        this.radius=this.size

        this.fade={
            main:0,trigger:false,hide:false,
            hover:0,hoverTrigger:false,
            stat:0,statTrigger:false,
            logs:0,order:0,
        }

        this.strength={
            life:100,morale:100,supply:100,
            base:{life:100,morale:100,supply:100},
            num:[0,0,0],
        }
        this.order={
            position:{x:this.position.x,y:this.position.y},
            select:false,artillery:false,defense:false,facing:random(0,360),
            detach:0,absorb:0
        }
        this.battle={damage:0,active:false,injure:false,broken:false,fortified:false,enemies:[]}
        this.contain={units:[],stats:{},trigger:true}
        this.logs={main:[],trigger:false}
        this.base={position:{x:this.position.x,y:this.position.y}}
        this.hist=elementArray({active:false,position:{x:this.base.position.x,y:this.base.position.y},strength:{life:100,morale:100,supply:100}},this.operation.turn.total+1)
        last(this.hist).active=true

        this.initialGraphics()
        if(data.elements.length>0){
            this.initialElements(data.elements)
        }
    }
    initialGraphics(){
        this.img=[graphics.load.team[this.team]]
        if(this.icon!=``){
            this.img.push(graphics.load.unit[findName(this.icon,graphics.load.unit)].img)
        }
    }
    initialElements(elements){
        for(let a=0,la=elements.length;a<la;a++){
            if(typeof elements[a].type==`string`){
                this.contain.units.push(new unit(this.operation,{
                    level:elements[a].level,type:types.elementType[findName(elements[a].type,types.elementType)].unitType,elementType:findName(elements[a].type,types.elementType),team:elements[a].team,
                    desc:elements[a].desc,name:elements[a].name,designation:elements[a].designation,commander:elements[a].commander,icon:this.icon,
                    pos:[0,0],
                    elements:[],
                }))
                last(this.contain.units).parent=this
            }else{
                this.operation.units.push(new unit(this.operation,elements[a]))
                this.contain.units.push(last(this.operation.units))
                last(this.contain.units).parent=this
                this.contain.trigger=false
            }
        }
        if(this.contain.trigger){
            this.calculateElements()
        }else{
            this.contain.stats={
                speed:this.contain.units.reduce((acc,unit)=>max(acc,unit.contain.stats.speed),0),
                artillery:false,
            }
            this.radius=45
            this.order.artillery=false
        }
    }
    save(){
        this.battle.enemies=[]
        let composite={
            position:this.position,
            level:this.level,
            type:this.type,
            elementType:this.elementType,
            team:this.team,
            desc:this.desc,
            name:this.name,
            designation:this.designation,
            commander:this.commander,
            icon:this.icon,

            player:this.player,
            active:this.active,
            parent:this.parent!=-1?this.parent.id:-1,
            id:this.id,

            fade:this.fade,
            strength:this.strength,
            order:this.order,
            battle:this.battle,
            contain:{
                units:this.contain.trigger?this.contain.units.map(unit=>unit.save()):this.contain.units.map(unit=>unit.id),
                stats:this.contain.stats,
                trigger:this.contain.trigger
            },
            logs:this.logs,
            base:this.base,
            hist:this.hist,
        }
        return composite
    }
    load(composite){
        this.position=composite.position
        this.level=composite.level
        this.type=composite.type
        this.elementType=composite.elementType
        this.team=composite.team
        this.desc=composite.desc
        this.name=composite.name
        this.designation=composite.designation
        this.commander=composite.commander
        this.icon=composite.icon

        this.player=composite.player
        this.active=composite.active
        this.id=composite.id

        this.symbol=types.unitLevel[this.level].symbol
        this.size=types.unitLevel[this.level].size[this.player]
        this.width=this.size*1.6
        this.height=this.size
        this.radius=this.contain.trigger?this.size:45

        this.fade=composite.fade
        this.strength=composite.strength
        this.order=composite.order
        this.battle=composite.battle
        this.contain=composite.contain
        this.logs=composite.logs
        this.base=composite.base
        this.hist=composite.hist
        this.initialGraphics()
    }
    loadBar(){
        this.contain.units=this.contain.trigger?this.contain.units.map(uni=>{
            let sub=new unit(this.operation,{
                level:0,type:[],team:`British`,
                desc:``,name:``,designation:``,commander:``,icon:``,
                pos:[0,0],
                elements:[],
            })
            sub.load(uni)
            sub.parent=this
            return sub
        }):this.contain.units.map(uni=>{
            let sub=this.operation.units[findId(uni,this.operation.units)]
            sub.parent=this
            return sub
        })
    }
    startTick(){
        this.fade.trigger=dev.slow
        this.fade.statTrigger=dev.slow
        this.battle.damage=0
        this.battle.active=false
        this.battle.injure=false
        this.battle.broken=false
        this.battle.fortified=false
        this.battle.enemies=[]
        this.logs.main=[]
        this.order.defense=this.order.position.x==this.position.x&&this.order.position.y==this.position.y
    }
    endTick(){
        if(!this.battle.injure&&this.contain.trigger){
            this.contain.units.forEach(unit=>unit.strength.morale=min(unit.strength.morale+5,unit.strength.base.morale))
        }
        this.order.position.x=this.position.x
        this.order.position.y=this.position.y
        this.order.select=false
        this.order.defense=false
        this.order.artillery=this.contain.stats.artillery
        let pix=round(this.position.x)+round(this.position.y)*graphics.load.map[this.operation.map][0].width
        if(
            pix>=0&&floor(pix/8)<graphics.load.water.length&&
            graphics.load.water[floor(pix/8)][pix%8]==0
        ){
            this.contain.units.forEach(unit=>{
                unit.strength.life=max(0,unit.strength.life-20)
                unit.strength.morale=max(0,unit.strength.morale-20)
                unit.strength.supply=max(0,unit.strength.supply-20)
            })
        }
        this.updateStrength()
        this.hist.push({active:this.active,position:{x:this.position.x,y:this.position.y},strength:{life:this.strength.life,morale:this.strength.morale,supply:this.strength.supply}})
    }
    near(dist,player){
        return this.operation.units.some(unit=>unit.active&&unit.player==player&&distPos(this,unit)<dist)
    }
    getParentEffectiveness(){
        return this.parent==-1?1:!this.parent.active?0.75:constrain(1.25-distPos(this,this.parent)/2000,0.75,1)
    }
    calculateElements(){
        let len=max(1,this.contain.units.length)
        this.contain.stats={
            damage:[
                this.contain.units.reduce((acc,unit)=>acc+types.elementType[unit.elementType].damage[0],0)/len,
                this.contain.units.reduce((acc,unit)=>acc+types.elementType[unit.elementType].damage[1],0)/len,
                this.contain.units.filter(unit=>types.elementType[unit.elementType].artillery).reduce((acc,unit)=>acc+types.elementType[unit.elementType].damage[0],0)/len,
                this.contain.units.filter(unit=>types.elementType[unit.elementType].artillery).reduce((acc,unit)=>acc+types.elementType[unit.elementType].damage[1],0)/len
            ],
            armor:this.contain.units.reduce((acc,unit)=>acc+types.elementType[unit.elementType].armor,0)/len,
            health:this.contain.units.reduce((acc,unit)=>acc+types.elementType[unit.elementType].health,0),
            morale:this.contain.units.reduce((acc,unit)=>acc+types.elementType[unit.elementType].morale,0)/len,
            speed:this.contain.units.reduce((acc,unit)=>min(acc,types.elementType[unit.elementType].speed),10),
            artillery:this.contain.units.some(unit=>types.elementType[unit.elementType].artillery),
        }
        this.updateStrength()
        this.order.artillery=this.contain.stats.artillery
    }
    updateStrength(type=-1){
        let len=max(1,this.contain.units.length)
        if(this.contain.trigger){
            this.contain.units=this.contain.units.filter(unit=>unit.strength.life>0)
            switch(type){
                case -1:
                    this.strength.life=this.contain.units.reduce((acc,unit)=>acc+unit.strength.life,0)/len
                    this.strength.morale=this.contain.units.reduce((acc,unit)=>acc+unit.strength.morale,0)/len
                    this.strength.supply=this.contain.units.reduce((acc,unit)=>acc+unit.strength.supply,0)/len
                    this.strength.num=[
                        this.contain.units.reduce((acc,unit)=>acc+(types.elementType[unit.elementType].class==0?ceil(types.elementType[unit.elementType].num*unit.strength.life/unit.strength.base.life):0),0),
                        this.contain.units.reduce((acc,unit)=>acc+(types.elementType[unit.elementType].class==1?ceil(types.elementType[unit.elementType].num*unit.strength.life/unit.strength.base.life):0),0),
                        this.contain.units.reduce((acc,unit)=>acc+(types.elementType[unit.elementType].class==2?ceil(types.elementType[unit.elementType].num*unit.strength.life/unit.strength.base.life):0),0),
                    ]
                break
                case 0:
                    this.strength.life=this.contain.units.reduce((acc,unit)=>acc+unit.strength.life,0)/len
                    this.strength.num=[
                        this.contain.units.reduce((acc,unit)=>acc+(types.elementType[unit.elementType].class==0?ceil(types.elementType[unit.elementType].num*unit.strength.life/unit.strength.base.life):0),0),
                        this.contain.units.reduce((acc,unit)=>acc+(types.elementType[unit.elementType].class==1?ceil(types.elementType[unit.elementType].num*unit.strength.life/unit.strength.base.life):0),0),
                        this.contain.units.reduce((acc,unit)=>acc+(types.elementType[unit.elementType].class==2?ceil(types.elementType[unit.elementType].num*unit.strength.life/unit.strength.base.life):0),0),
                    ]
                break
                case 1:
                    this.strength.morale=this.contain.units.reduce((acc,unit)=>acc+unit.strength.morale,0)/len
                break
                case 2:
                    this.strength.supply=this.contain.units.reduce((acc,unit)=>acc+unit.strength.supply,0)/len
                break
            }
        }
    }
    display(layer,scene){
        switch(scene){
            case `under`:
                if(this.contain.trigger&&this.fade.main>0){
                    layer.fill(...types.player[this.player].color,0.25*this.fade.main)
                    layer.noStroke()
                    layer.ellipse(this.position.x,this.position.y,this.radius*2,this.radius*2)
                }
            break
            case `underOrder`:
                if(this.fade.order>0){
                    layer.noStroke()
                    layer.fill(100,0.25*this.fade.order)
                    layer.ellipse(this.position.x,this.position.y,this.contain.stats.speed*2*constants.turnTime*(0.75+this.strength.supply/this.strength.base.supply*0.25))
                    if(this.contain.stats.artillery){
                        layer.fill(100,0.25*this.fade.order)
                        layer.ellipse(this.position.x,this.position.y,constants.artilleryRange*2)
                    }
                }
            break
            case `main`: case `mapAll`: case `hist`:
                layer.push()
                layer.translate(this.position.x,this.position.y)
                layer.scale(this.size/10)
                this.displaySub(layer,scene,this.fade.main)
                layer.pop()
            break
        }
    }
    displaySub(layer,scene,fade){
        switch(scene){
            case `main`: case `mapAll`: case `hist`:
                if(fade>0){
                    if(fade<1){
                        layer.tint(255,fade)
                    }
                    layer.image(this.img[0],0,0,16,10)

                    layer.noFill()
                    layer.stroke(40,fade)
                    for(let a=0,la=this.type.length;a<la;a++){
                        layer.strokeWeight(25/this.size)
                        switch(this.type[a]){
                            case 0:
                                layer.line(-8,-5,8,5)
                                layer.line(-8,5,8,-5)
                            break
                            case 1:
                                layer.line(-6,-5,-6,5)
                            break
                            case 2:
                                layer.ellipse(-3.5,4,1.5,1.5)
                                layer.ellipse(3.5,4,1.5,1.5)
                            break
                            case 3:
                                layer.line(-8,5,8,-5)
                                layer.ellipse(6,4,1.5,1.5)
                                layer.ellipse(3,4,1.5,1.5)
                            break
                            case 4:
                                layer.arc(-2,0,4,4,90,270)
                                layer.arc(2,0,4,4,-90,90)
                                layer.line(-2,-2,2,-2)
                                layer.line(-2,2,2,2)
                            break
                            case 5:
                                layer.strokeWeight(150/this.size)
                                layer.point(0,0)
                            break
                            case 6:
                                layer.line(-8,5,8,-5)
                            break
                            case 7:
                                layer.line(-6.5,1,-5.25,1)
                                layer.line(-6.5,1,-6.5,-1)
                            break
                            /*case 8:
                                layer.line(-6.5,-1,-5.25,-1)
                                layer.line(-6.5,0,-5.5,0)
                                layer.line(-6.5,1,-6.5,-1)
                            break*/
                            //frontier
                            /*case 8:
                                layer.arc(-5.5,0,2,2.5,90,270)
                            break*/
                            //coast
                        }
                    }
                    if(this.img.length>1){
                        let width=this.img[1].width
                        let height=this.img[1].height
                        if(fade<1){
                            layer.tint(255,fade)
                        }
                        layer.image(this.img[1],5.5,0,width/max(width,height)*4,height/max(width,height)*4)
                    }
                    layer.stroke(this.order.trigger?120:40,this.order.trigger?240:40,this.order.trigger?80:40,fade)
                    layer.strokeWeight(25/this.size)
                    layer.noFill()
                    layer.rect(0,0,16,10)
                    layer.fill(0,fade)
                    layer.stroke(255,fade)
                    layer.strokeWeight(0.2)
                    layer.textSize(2)
                    layer.text(this.symbol,0,-4)
                    layer.stroke(0,fade)
                    layer.fill(255,fade)
                    layer.textSize(this.designation.length>=24?1.25:1.5)
                    layer.strokeWeight(0.15)
                    layer.text(this.designation,this.designation.length>=10?-4.5:-5,this.designation.split(`\n`).length>=3?-2.25:this.designation.includes(`\n`)?-3:-3.5)
                    layer.textSize(this.name.length>=5?4:5)
                    layer.strokeWeight(this.name.length>=5?0.4:0.5)
                    layer.text(this.name,0,0.25)
                    layer.textSize(this.commander.length>=10?2:2.25)
                    layer.strokeWeight(this.commander.length>=10?0.4:0.45)
                    layer.text(this.commander,0,3.5)
                }
            break
        }
    }
    displayInfo(layer,scene){
        switch(scene){
            case `stat`:
                if(this.fade.stat>0){
                    layer.push()
                    layer.translate(this.position.x,this.position.y)
                    layer.noStroke()
                    layer.fill(0,this.fade.main*this.fade.stat)
                    layer.rect(0,this.height/2+4,41,5,3)
                    layer.rect(0,this.height/2+8.5,41,5,3)
                    layer.rect(0,this.height/2+13,41,5,3)
                    layer.fill(100,this.fade.main*this.fade.stat)
                    layer.rect(0,this.height/2+4,40,4,2)
                    layer.rect(0,this.height/2+8.5,40,4,2)
                    layer.rect(0,this.height/2+13,40,4,2)
                    layer.fill(min(225,450-max(0,this.strength.life)/this.strength.base.life*450)-max(0,5-max(0,this.strength.life)/this.strength.base.life*30)*25,min(225,max(0,this.strength.life)/this.strength.base.life*450),0,this.fade.main*this.fade.stat)
                    layer.rect((max(0,this.strength.life)/this.strength.base.life)*20-20,this.height/2+4,(max(0,this.strength.life)/this.strength.base.life)*40,1+min((max(0,this.strength.life)/this.strength.base.life)*60,3),2)
                    layer.fill(0,min(225,450-max(0,this.strength.morale)/this.strength.base.morale*400)-max(0,5-max(0,this.strength.morale)/this.strength.base.morale*30)*25,min(225,max(0,this.strength.morale)/this.strength.base.morale*450),this.fade.main*this.fade.stat)
                    layer.rect((max(0,this.strength.morale)/this.strength.base.morale)*20-20,this.height/2+8.5,(max(0,this.strength.morale)/this.strength.base.morale)*40,1+min((max(0,this.strength.morale)/this.strength.base.morale)*60,3),2)
                    layer.fill(min(225,100+max(0,this.strength.supply)/this.strength.base.supply*225),min(150,max(0,this.strength.supply)/this.strength.base.supply*225),0,this.fade.main*this.fade.stat)
                    layer.rect((max(0,this.strength.supply)/this.strength.base.supply)*20-20,this.height/2+13,(max(0,this.strength.supply)/this.strength.base.supply)*40,1+min((max(0,this.strength.supply)/this.strength.base.supply)*60,3),2)
                    layer.pop()
                }
            break
            case `logs`:
                if(this.fade.logs>0&&this.logs.main.length>0){
                    let totalWidth=this.logs.main.reduce((acc,log)=>max(acc,log.length),0)*9+20
                    let totalHeight=this.logs.main.length*20+10
                    let base={
                        x:constrain(this.position.x,totalWidth/2+10,layer.width/this.operation.view.scale-totalWidth/2-10),
                        y:constrain(this.position.y,totalHeight/2+10,layer.height/this.operation.view.scale-totalHeight/2-10)
                    }
                    layer.noStroke()
                    layer.fill(200,this.fade.logs)
                    layer.rect(base.x,base.y,totalWidth,totalHeight,10)
                    layer.fill(0,this.fade.logs)
                    layer.textSize(20)
                    for(let a=0,la=this.logs.main.length;a<la;a++){
                        layer.text(this.logs.main[a],base.x,base.y-totalHeight/2+15+a*20)
                    }
                }
            break
            case `order`:
                if(this.fade.stat>0&&!(this.order.position.x==this.position.x&&this.order.position.y==this.position.y)&&!this.order.defense){
                    layer.noFill()
                    layer.stroke(0,this.fade.main*this.fade.stat)
                    layer.strokeWeight(5)
                    layer.line(this.position.x,this.position.y,this.order.position.x,this.order.position.y)
                    layer.line(this.order.position.x-10,this.order.position.y-10,this.order.position.x+10,this.order.position.y+10)
                    layer.line(this.order.position.x-10,this.order.position.y+10,this.order.position.x+10,this.order.position.y-10)
                    if(this.order.artillery){
                        layer.noFill()
                        layer.stroke(255,0,0,this.fade.main*this.fade.stat)
                        layer.strokeWeight(2)
                        layer.line(this.position.x,this.position.y,this.order.position.x,this.order.position.y)
                        layer.line(this.order.position.x-10,this.order.position.y-10,this.order.position.x+10,this.order.position.y+10)
                        layer.line(this.order.position.x-10,this.order.position.y+10,this.order.position.x+10,this.order.position.y-10)
                    }
                }
            break
            case `main`: case `mapAll`: case `hist`:
                if(this.fade.hover>0){
                    let totalWidth=(this.contain.units.length-1)*10+this.contain.units.reduce((acc,unit)=>acc+unit.width*1.25,0)
                    let totalHeight=this.contain.units.reduce((acc,unit)=>max(acc,unit.height*1.25),0)
                    let tick=0
                    let base=this.level==3?this.position:{
                        x:constrain(this.position.x,totalWidth+20,layer.width/this.operation.view.scale-totalWidth-20),
                        y:constrain(this.position.y,this.height*1.25+60,layer.height/this.operation.view.scale-totalHeight*2-this.height-60)
                    }
                    if(this.level==3){
                        layer.push()
                        layer.translate(this.position.x,this.position.y)
                        layer.fill(255,this.fade.main*this.fade.hover)
                        layer.stroke(0,this.fade.main*this.fade.hover)
                        layer.strokeWeight(4)
                        layer.textSize(40)
                        layer.text(this.desc,0,-this.height*1.25-30)
                        layer.scale(this.size/4)
                        this.displaySub(layer,scene,this.fade.main*this.fade.hover)
                        layer.pop()
                    }else{
                        layer.push()
                        layer.translate(base.x,base.y)
                        layer.fill(255,this.fade.main*this.fade.hover)
                        layer.stroke(0,this.fade.main*this.fade.hover)
                        layer.strokeWeight(4)
                        layer.textSize(40)
                        layer.text(this.desc,0,-this.height*1.25-30)
                        layer.scale(this.size/4)
                        this.displaySub(layer,scene,this.fade.main*this.fade.hover)
                        layer.pop()
                        this.contain.units.forEach(unit=>{
                            layer.push()
                            layer.translate(base.x+(-totalWidth*0.5+unit.width*0.625+tick)*2,base.y+this.height*1.25+totalHeight+20)
                            layer.scale(unit.size/4)
                            unit.displaySub(layer,scene,this.fade.main*this.fade.hover)
                            layer.pop()
                            tick+=unit.width*1.25+10
                        })
                    }
                    if(this.fade.stat>0&&this.contain.trigger){
                        let pos=this.width/2+45
                        layer.push()
                        layer.translate(base.x,base.y)
                        layer.scale(2.5)
                        layer.noStroke()
                        layer.fill(0,this.fade.stat*this.fade.hover)
                        layer.rect(pos,-9,82,10,6)
                        layer.rect(pos,0,82,10,6)
                        layer.rect(pos,9,82,10,6)
                        layer.fill(100,this.fade.stat*this.fade.hover)
                        layer.rect(pos,-9,80,8,4)
                        layer.rect(pos,0,80,8,4)
                        layer.rect(pos,9,80,8,4)
                        layer.fill(min(225,450-max(0,this.strength.life)/this.strength.base.life*450)-max(0,5-max(0,this.strength.life)/this.strength.base.life*30)*25,min(225,max(0,this.strength.life)/this.strength.base.life*450),0,this.fade.stat*this.fade.hover)
                        layer.rect(pos+(max(0,this.strength.life)/this.strength.base.life)*40-40,-9,(max(0,this.strength.life)/this.strength.base.life)*80,2+min((max(0,this.strength.life)/this.strength.base.life)*60,3)*2,4)
                        layer.fill(0,min(225,450-max(0,this.strength.morale)/this.strength.base.morale*400)-max(0,5-max(0,this.strength.morale)/this.strength.base.morale*30)*25,min(225,max(0,this.strength.morale)/this.strength.base.morale*450),this.fade.stat*this.fade.hover)
                        layer.rect(pos+(max(0,this.strength.morale)/this.strength.base.morale)*40-40,0,(max(0,this.strength.morale)/this.strength.base.morale)*80,2+min((max(0,this.strength.morale)/this.strength.base.morale)*60,3)*2,4)
                        layer.fill(min(225,100+max(0,this.strength.supply)/this.strength.base.supply*225),min(150,max(0,this.strength.supply)/this.strength.base.supply*225),0,this.fade.stat*this.fade.hover)
                        layer.rect(pos+(max(0,this.strength.supply)/this.strength.base.supply)*40-40,9,(max(0,this.strength.supply)/this.strength.base.supply)*80,2+min((max(0,this.strength.supply)/this.strength.base.supply)*60,3)*2,4)
                        layer.fill(0,this.fade.stat*this.fade.hover)
                        layer.textSize(10)
                        layer.text(this.strength.num.filter(num=>num>0).join(`/`),pos,-8.25)
                        layer.text(ceil(this.strength.morale),pos,0.75)
                        layer.text(ceil(this.strength.supply),pos,9.75)
                        layer.pop()
                    }
                }
            break
        }
    }
    update(layer,scene,mouse){
        switch(scene){
            case `main`:
                this.fade.hoverTrigger=inPointBox(mouse,this)&&this.fade.trigger&&!this.fade.hide&&this.active
                if(this.fade.hoverTrigger){
                    this.logs.trigger=false
                }
                this.fade.main=smoothAnim(this.fade.main,this.fade.trigger&&!this.fade.hide&&this.active,0,1,5)
                this.fade.hover=smoothAnim(this.fade.hover,this.fade.hoverTrigger,0,1,5)
                this.fade.stat=smoothAnim(this.fade.stat,this.fade.statTrigger,0,1,5)
                this.fade.logs=smoothAnim(this.fade.logs,this.logs.trigger,0,1,5)
                this.fade.order=smoothAnim(this.fade.order,this.order.trigger,0,1,5)
            break
            case `mapAll`:
                this.fade.main=1

                this.fade.hoverTrigger=inPointBox(mouse,this)
                this.fade.hover=smoothAnim(this.fade.hover,this.fade.hoverTrigger,0,1,5)
                if(this.fade.hoverTrigger){
                    this.logs.trigger=false
                }
            break
            case `hist`:
                this.fade.hover=0
                this.fade.stat=1
                this.fade.logs=0
                this.fade.order=0

                this.fade.main=map((mouse%60)/60,0,1,this.hist[floor(mouse/60)].active?1:0,this.hist[min(this.hist.length-1,floor(mouse/60)+1)].active?1:0)
                this.position.x=map((mouse%60)/60,0,1,this.hist[floor(mouse/60)].position.x,this.hist[min(this.hist.length-1,floor(mouse/60)+1)].position.x)
                this.position.y=map((mouse%60)/60,0,1,this.hist[floor(mouse/60)].position.y,this.hist[min(this.hist.length-1,floor(mouse/60)+1)].position.y)
                this.strength.life=map((mouse%60)/60,0,1,this.hist[floor(mouse/60)].strength.life,this.hist[min(this.hist.length-1,floor(mouse/60)+1)].strength.life)
                this.strength.morale=map((mouse%60)/60,0,1,this.hist[floor(mouse/60)].strength.morale,this.hist[min(this.hist.length-1,floor(mouse/60)+1)].strength.morale)
                this.strength.supply=map((mouse%60)/60,0,1,this.hist[floor(mouse/60)].strength.supply,this.hist[min(this.hist.length-1,floor(mouse/60)+1)].strength.supply)
            break
        }
    }
    operate(layer,scene,mouse){
        switch(scene){
            case `main`:
                if(this.active){
                    if(this.order.artillery&&!this.order.defense){
                        if(
                            this.operation.turn.time%(constants.turnTime/5)==0&&
                            !this.battle.active
                        ){
                            this.order.facing=atan2(this.order.position.x-this.position.x,this.order.position.y-this.position.y)
                            if(!this.logs.main.includes(`Fired artillery`)){
                                this.logs.main.push(`Fired artillery`)
                            }
                            this.operation.units.forEach(target=>{
                                if(target.active&&distPos(target,this.order)<20+target.radius){
                                    let damage=map(
                                            target.contain.stats.armor,0,1,
                                            this.contain.stats.damage[2],this.contain.stats.damage[3]
                                        )
                                        /sqrt(target.contain.stats.health)
                                        *types.team[this.team].quality
                                        /types.team[target.team].quality
                                        *this.strength.life/this.strength.base.life
                                        *(0.5+this.strength.morale/this.strength.base.morale)
                                        *(2-target.strength.morale/target.strength.base.morale)
                                        *(0.5+this.strength.supply/this.strength.base.supply)
                                        *(2-target.strength.supply/target.strength.base.supply)
                                        *random(1,constants.battleVariance)
                                        *this.getParentEffectiveness()
                                        *(target.order.defense?0.8:1)
                                    target.contain.units.forEach(unit=>{
                                        unit.strength.life*=(1-damage/unit.strength.base.life)
                                        unit.strength.morale=max(0,
                                            unit.strength.morale-
                                            sqrt(damage)*2/target.contain.stats.morale
                                        )
                                    })
                                    target.battle.injure=true
                                    this.contain.units.forEach(unit=>{
                                        if(types.elementType[unit.elementType].artillery){
                                            unit.strength.supply=max(0,
                                                unit.strength.supply-
                                                6
                                            )
                                        }
                                    })
                                    target.updateStrength()
                                    this.updateStrength(2)
                                    if(!target.logs.main.includes(`Hit by artillery`)){
                                        target.logs.main.push(`Hit by artillery`)
                                    }
                                }
                            })
                        }
                    }else if(!this.order.defense){
                        if(!this.logs.main.includes(`Moved`)){
                            this.logs.main.push(`Moved`)
                        }
                        this.order.facing=atan2(this.order.position.x-this.position.x,this.order.position.y-this.position.y)
                        let dir=this.order.facing
                        let distance=this.contain.stats.speed*(0.75+this.strength.supply/this.strength.base.supply*0.25)
                        let pix=round(this.position.x)+round(this.position.y)*graphics.load.map[this.operation.map][0].width
                        if(
                            pix>=0&&floor(pix/8)<graphics.load.water.length&&
                            graphics.load.water[floor(pix/8)][pix%8]==0
                        ){
                            distance*=0.5
                        }
                        let moving={x:this.position.x+lsin(dir)*distance,y:this.position.y+lcos(dir)*distance}
                        if(distPos(this,this.order)>distance){
                            let hit=false
                            this.operation.units.forEach(target=>{
                                if(target.active&&types.player[this.player].side!=types.player[target.player].side&&distPos({position:moving},target)<this.radius+target.radius){
                                    if(!target.contain.trigger&&this.contain.trigger){
                                        target.active=false
                                        if(!target.logs.main.includes(`Captured by the ${this.desc}`)){
                                            target.logs.main.push(`Captured by the ${this.desc}`)
                                        }
                                        if(!this.logs.main.includes(`Captured the ${target.desc} Headquarters`)){
                                            this.logs.main.push(`Captured the ${target.desc} Headquarters`)
                                        }
                                    }else if(this.contain.trigger){
                                        hit=true
                                        let fort=false
                                        if(this.order.defense||target.order.defense){
                                            for(let a=0,la=5;a<la;a++){
                                                let pix=round(map((a+0.5)/la,0,1,this.position.x,target.position.x))+round(map((a+0.5)/la,0,1,this.position.y,target.position.y))*graphics.load.map[this.operation.map][0].width
                                                if(
                                                    pix>=0&&floor(pix/8)<graphics.load.fortifications.length&&
                                                    graphics.load.fortifications[floor(pix/8)][pix%8]==0
                                                ){
                                                    fort=true
                                                    if(this.order.defense){
                                                        this.battle.fortified=true
                                                    }else if(target.order.defense){
                                                        target.battle.fortified=true
                                                    }
                                                    break
                                                }
                                            }
                                        }
                                        let damage=[
                                            map(
                                                target.contain.stats.armor,0,1,
                                                this.contain.stats.damage[0],this.contain.stats.damage[1]
                                            )
                                            /target.contain.stats.health
                                            *types.team[this.team].quality
                                            /types.team[target.team].quality
                                            *this.strength.life/this.strength.base.life
                                            *(0.5+this.strength.morale/this.strength.base.morale)
                                            *(2-target.strength.morale/target.strength.base.morale)
                                            *(0.5+this.strength.supply/this.strength.base.supply)
                                            *(2-target.strength.supply/target.strength.base.supply)
                                            *(target.order.defense?(fort?0.4:target.battle.fortified?0.6:0.8):1)
                                            *this.getParentEffectiveness()
                                            *random(1,constants.battleVariance),
                                            map(
                                                this.contain.stats.armor,0,1,
                                                target.contain.stats.damage[0],target.contain.stats.damage[1]
                                            )
                                            /this.contain.stats.health
                                            *types.team[target.team].quality
                                            /types.team[this.team].quality
                                            *target.strength.life/target.strength.base.life
                                            *(0.5+target.strength.morale/target.strength.base.morale)
                                            *(2-this.strength.morale/this.strength.base.morale)
                                            *(0.5+target.strength.supply/target.strength.base.supply)
                                            *(2-this.strength.supply/this.strength.base.supply)
                                            //*(this.order.defense?(fort?0.4:0.8):1)
                                            *target.getParentEffectiveness()
                                            *random(1,constants.battleVariance)
                                        ]
                                        target.contain.units.forEach(unit=>{
                                            unit.strength.life=max(0,
                                                unit.strength.life-
                                                damage[0]*(target.battle.broken?constants.breakMult+max(0,this.contain.stats.speed-target.contain.stats.speed)*0.4:1)
                                            )
                                            unit.strength.morale=max(0,
                                                unit.strength.morale-
                                                sqrt(damage[0])*0.2/target.contain.stats.morale*(target.battle.broken?constants.breakMult+max(0,this.contain.stats.speed-target.contain.stats.speed)*0.4:1)*(unit.order.defense&&fort?0.8:1)
                                            )
                                            unit.strength.supply=max(0,
                                                unit.strength.supply-
                                                30/constants.turnTime
                                            )
                                        })
                                        this.contain.units.forEach(unit=>{
                                            unit.strength.life=max(0,
                                                unit.strength.life-
                                                damage[1]
                                            )
                                            unit.strength.morale=max(0,
                                                unit.strength.morale-
                                                sqrt(damage[1])*0.2/this.contain.stats.morale
                                            )
                                            unit.strength.supply=max(0,
                                                unit.strength.supply-
                                                15/constants.turnTime
                                            )
                                        })
                                        target.updateStrength()
                                        this.updateStrength()
                                        target.battle.injure=true
                                        this.battle.injure=true
                                        target.battle.active=true
                                        this.battle.active=true
                                        if(target.strength.life<=0||target.strength.morale<=0){
                                            target.active=false
                                            if(!target.logs.main.includes(`Destroyed by the ${this.desc}`)){
                                                target.logs.main.push(`Destroyed by the ${this.desc}`)
                                            }
                                            if(!this.logs.main.includes(`Destroyed the ${target.desc}`)){
                                                this.logs.main.push(`Destroyed the ${target.desc}`)
                                            }
                                        }else if(this.strength.life<=0||this.strength.morale<=0){
                                            this.active=false
                                            if(!this.logs.main.includes(`Destroyed by the ${target.desc}`)){
                                                this.logs.main.push(`Destroyed by the ${target.desc}`)
                                            }
                                            if(!target.logs.main.includes(`Destroyed the ${this.desc}`)){
                                                target.logs.main.push(`Destroyed the ${this.desc}`)
                                            }
                                        }else{
                                            let first=false
                                            if(!target.battle.enemies.includes(this)){
                                                target.battle.enemies.push(this)
                                                first=true
                                            }
                                            if(!this.battle.enemies.includes(target)){
                                                this.battle.enemies.push(target)
                                                first=true
                                            }
                                            if(first){
                                                target.battle.damage+=damage[0]
                                                this.battle.damage+=damage[1]
                                                let breakers=[]
                                                if(
                                                    target.battle.damage>
                                                    0.05*random(1,constants.breakVariance)*
                                                    target.strength.life/
                                                    target.strength.base.life*
                                                    target.strength.morale/
                                                    target.strength.base.morale*
                                                    (target.order.defense?1.5:1)
                                                ){
                                                    breakers.push(0)
                                                }
                                                if(
                                                    this.battle.damage>
                                                    0.05*random(1,constants.breakVariance)*
                                                    this.strength.life/
                                                    this.strength.base.life*
                                                    this.strength.morale/
                                                    this.strength.base.morale*
                                                    (this.order.defense?1.5:1)
                                                ){
                                                    breakers.push(1)
                                                }
                                                if(breakers.length>0){
                                                    let breaker=randin(breakers)
                                                    switch(breaker){
                                                        case 0:
                                                            target.battle.broken=true
                                                            if(!target.logs.main.includes(`Defeated by the ${this.desc}`)){
                                                                target.logs.main.push(`Defeated by the ${this.desc}`)
                                                            }
                                                            if(!this.logs.main.includes(`Defeated the ${target.desc}`)){
                                                                this.logs.main.push(`Defeated the ${target.desc}`)
                                                            }
                                                        break
                                                        case 1:
                                                            this.battle.broken=true
                                                            if(!this.logs.main.includes(`Defeated by the ${target.desc}`)){
                                                                this.logs.main.push(`Defeated by the ${target.desc}`)
                                                            }
                                                            if(!target.logs.main.includes(`Defeated the ${this.desc}`)){
                                                                target.logs.main.push(`Defeated the ${this.desc}`)
                                                            }
                                                        break
                                                    }
                                                }else{
                                                    if(!this.logs.main.includes(`Battled the ${target.desc}`)){
                                                        this.logs.main.push(`Battled the ${target.desc}`)
                                                    }
                                                    if(!target.logs.main.includes(`Battled the ${this.desc}`)){
                                                        target.logs.main.push(`Battled the ${this.desc}`)
                                                    }
                                                }
                                            }
                                        }
                                        if(target.battle.broken&&!this.battle.broken){
                                            distance=min(distance,target.contain.stats.speed*(0.75+target.strength.supply/this.strength.base.supply*0.25))
                                            moving={x:this.position.x+lsin(dir)*distance,y:this.position.y+lcos(dir)*distance}
                                            let moving2={x:target.position.x+lsin(dir)*distance,y:target.position.y+lcos(dir)*distance}
                                            if(this.operation.units.some(other=>{
                                                let friendly=types.player[target.player].side==types.player[other.player].side
                                                return other.active&&distPos({position:moving2},other)<(target.radius*(target.contain.trigger||!friendly?1:0.75)+other.radius*(other.contain.trigger||!friendly?1:0.75))*(friendly?0.9:1)&&target.id!=other.id
                                            })){
                                                target.strength.life=max(0,
                                                    target.strength.life-
                                                    damage[0]*(target.battle.broken?constants.breakMult+max(0,this.contain.stats.speed-target.contain.stats.speed)*0.5:1)
                                                )
                                                target.updateStrength(0)
                                            }else{
                                                this.position.x=moving.x
                                                this.position.y=moving.y
                                                target.position.x=moving2.x
                                                target.position.y=moving2.y
                                            }
                                        }
                                    }
                                }
                            })
                            if(!hit){
                                this.operation.units.forEach(target=>{
                                    if(
                                        target.active&&types.player[this.player].side==types.player[target.player].side&&
                                        distPos({position:moving},target)<(this.radius*(this.contain.trigger?1:0.75)+target.radius*(target.contain.trigger?1:0.75))*0.9&&this.id!=target.id&&
                                        distPos({position:moving},target)<distPos(this,target)
                                    ){
                                        hit=true
                                        if(!this.logs.main.includes(`Collided with ${target.desc}`)){
                                            this.logs.main.push(`Collided with ${target.desc}`)
                                        }
                                    }
                                })
                                if(!hit){
                                    this.position.x=moving.x
                                    this.position.y=moving.y
                                    this.strength.supply=max(0,
                                        this.strength.supply-
                                        this.contain.stats.speed*5/constants.turnTime
                                    )
                                    this.updateStrength(1)
                                }
                            }
                        }
                    }
                }
            break
        }
    }
    onClick(layer,scene,mouse){
        switch(scene){
            case `main`:
                if(this.active&&this.player==this.operation.turn.main&&!this.fade.hide){
                    if(this.order.trigger){
                        if(this.contain.stats.artillery){
                            this.order.artillery=!this.order.artillery
                        }
                        if(distPos(mouse,this)<20){
                            this.order.position.x=this.position.x
                            this.order.position.y=this.position.y
                        }else{
                            let dir=atan2(mouse.position.x-this.position.x,mouse.position.y-this.position.y)
                            let distance=min(distPos(mouse,this),this.order.artillery?constants.artilleryRange:this.contain.stats.speed*constants.turnTime*(0.75+this.strength.supply/this.strength.base.supply*0.25))
                            this.order.position.x=this.position.x+lsin(dir)*distance
                            this.order.position.y=this.position.y+lcos(dir)*distance
                        }
                        this.order.trigger=false
                    }else{
                        if(inPointBox(mouse,this)){
                            this.order.trigger=true
                            this.operation.select.unit=this
                        }else{
                            this.order.trigger=false
                        }
                    }
                }
            break
        }
    }
}
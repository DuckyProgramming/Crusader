import {types,graphics,constants} from './variables.mjs'
import {smoothAnim,findName,last,inPointBox,distPos} from './functions.mjs'
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

        this.symbol=types.unitLevel[this.level].symbol
        this.size=types.unitLevel[this.level].size
        this.width=this.size*1.6
        this.height=this.size
        this.radius=this.size

        this.player=types.team[this.team].player
        this.active=true

        this.fade={
            main:0,trigger:false,
            hover:0,hoverTrigger:false,
            stat:0,statTrigger:false,
            logs:0,order:0,
        }

        this.strength={
            life:100,morale:100,supply:100,
            base:{life:100,morale:100,supply:100},
        }
        this.order={position:{x:this.position.x,y:this.position.y},select:false,artillery:false}
        this.contain={units:[],stats:{},trigger:true}
        this.logs={main:[],trigger:false}
        this.hist=[]

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
                    desc:``,name:elements[a].name,designation:elements[a].designation,commander:elements[a].commander,icon:this.icon,
                    pos:[0,0],
                    elements:[],
                }))
            }else{
                this.operation.units.push(new unit(this.operation,elements[a]))
                this.contain.units.push(last(this.operation.units))
                this.contain.trigger=false
            }
        }
        if(this.contain.trigger){
            let len=this.contain.units.len
            this.contain.stats={
                damage:[
                    this.contain.units.reduce((acc,unit)=>acc+types.elementType[unit.elementType].damage[0],0)/len,
                    this.contain.units.reduce((acc,unit)=>acc+types.elementType[unit.elementType].damage[1],0)/len
                ],
                armor:this.contain.units.reduce((acc,unit)=>acc+types.elementType[unit.elementType].armor,0)/len,
                health:this.contain.units.reduce((acc,unit)=>acc+types.elementType[unit.elementType].health,0),
                morale:this.contain.units.reduce((acc,unit)=>acc+types.elementType[unit.elementType].morale,0)/len,
                num:[
                    this.contain.units.reduce((acc,unit)=>acc+(types.elementType[unit.elementType].class==0?types.elementType[unit.elementType].num:0),0),
                    this.contain.units.reduce((acc,unit)=>acc+(types.elementType[unit.elementType].class==1?types.elementType[unit.elementType].num:0),0),
                    this.contain.units.reduce((acc,unit)=>acc+(types.elementType[unit.elementType].class==2?types.elementType[unit.elementType].num:0),0),
                ],
                speed:this.contain.units.reduce((acc,unit)=>min(acc,types.elementType[unit.elementType].speed),10),
                artillery:this.contain.units.some(unit=>types.elementType[unit.elementType].artillery),
            }
        }else{
            this.contain.stats={
                speed:this.contain.units.reduce((acc,unit)=>max(acc,unit.contain.stats.speed),0),
                artillery:false,
            }
            this.radius=50
        }
        this.order.artillery=this.contain.stats.artillery
    }
    /*save(){
        let composite={
            player:this.player,
            position:this.position,
            id:this.id,
            team:this.team,
            type:this.type,
            value:this.value,
            base:this.base,
            last:this.last,
            goal:{
                position:this.goal.position,
                devition:this.goal.deviation,
                city:this.goal.city==-1?this.goal.city:this.goal.city.id,
                nodes:this.goal.nodes.map(node=>node.id),
                unit:this.goal.unit==-1?this.goal.unit:this.goal.unit.id,
                threshold:this.goal.threshold,
                mode:this.goal.mode,
                time:this.goal.time,
                tick:this.goal.tick,
                chase:this.goal.chase,
                hire:this.goal.hire,
                damaged:this.goal.damaged,
                victor:this.goal.victor
            },
            retreat:this.retreat,
            remove:this.remove,
            fade:this.fade,
            speed:this.speed,
            time:this.time,
            fortified:{
                trigger:this.fortified.trigger,
                city:this.fortified.city==0?-1:this.fortified.city.id
            }
        }
        return composite
    }
    load(composite){
        this.player=composite.player
        this.position=composite.position
        this.id=composite.id
        this.team=composite.team
        this.type=composite.type
        this.value=composite.value
        this.cavalry=composite.cavalry
        this.base=composite.base
        this.last=composite.last
        this.goal=composite.goal
        this.retreat=composite.retreat
        this.remove=composite.remove
        this.fade=composite.fade
        this.speed=composite.speed
        this.time=composite.time
        this.fortified=composite.fortified
        this.img=[graphics.load.team[types.team[this.team].loadIndex],graphics.load.unit[this.type]]
        if(this.goal.threshold==undefined){
            this.goal.threshold=random(0.8,1.2)
        }
    }
    loadBar(){
        this.goal.city=this.goal.city==-1?-1:this.operation.cities[findId(this.goal.city,this.operation.cities)]
        this.goal.nodes=this.goal.nodes.map(node=>this.operation.cities[findId(node,this.operation.cities)])
        this.goal.unit=this.goal.unit==-1?-1:this.operation.units[findId(this.goal.unit,this.operation.units)]
        this.fortified.city=this.fortified.city==-1?0:this.operation.cities[findId(this.fortified.city,this.operation.cities)]
    }*/
    near(dist,player){
        return this.operation.units.some(unit=>unit.player==player&&distPos(this,unit)<dist)
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
                    layer.ellipse(this.position.x,this.position.y,this.contain.stats.speed*2*constants.turnTime)
                    if(this.contain.stats.artillery){
                        layer.fill(100,0.25*this.fade.order)
                        layer.ellipse(this.position.x,this.position.y,constants.artilleryRange*2)
                    }
                }
            break
            case `main`: case `mapAll`:
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
            case `main`: case `mapAll`:
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
                    layer.fill(min(225,450-max(0,this.strength.life)/this.strength.base.life*450)-max(0,5-max(0,this.strength.life)/this.strength.base.life*30)*25,min(225,max(0,this.strength.life)/this.strength.base.life*450),0,this.fade.main*this.fade.stat)
                    layer.rect((max(0,this.strength.life)/this.strength.base.life)*20-20,this.height/2+4,(max(0,this.strength.life)/this.strength.base.life)*40,1+min((max(0,this.strength.life)/this.strength.base.life)*60,3),2)
                    layer.fill(0,min(225,450-max(0,this.strength.morale)/this.strength.base.morale*400)-max(0,5-max(0,this.strength.morale)/this.strength.base.morale*30)*25,min(225,max(0,this.strength.morale)/this.strength.base.morale*450),this.fade.main*this.fade.stat)
                    layer.rect((max(0,this.strength.morale)/this.strength.base.morale)*20-20,this.height/2+8.5,(max(0,this.strength.morale)/this.strength.base.morale)*40,1+min((max(0,this.strength.morale)/this.strength.base.morale)*60,3),2)
                    layer.fill(min(225,max(0,this.strength.supply)/this.strength.base.supply*225),min(150,max(0,this.strength.supply)/this.strength.base.supply*225),0,this.fade.main*this.fade.stat)
                    layer.rect((max(0,this.strength.supply)/this.strength.base.supply)*20-20,this.height/2+13,(max(0,this.strength.supply)/this.strength.base.supply)*40,1+min((max(0,this.strength.supply)/this.strength.base.supply)*60,3),2)
                    layer.pop()
                }
            break
            case `logs`:
                if(this.fade.logs>0){
                }
            break
            case `order`:
                if(this.fade.stat>0&&!(this.order.position.x==this.position.x&&this.order.position.y==this.position.y)){
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
            case `main`: case `mapAll`:
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
                        layer.fill(min(225,450-max(0,this.strength.life)/this.strength.base.life*450)-max(0,5-max(0,this.strength.life)/this.strength.base.life*30)*25,min(225,max(0,this.strength.life)/this.strength.base.life*450),0,this.fade.stat*this.fade.hover)
                        layer.rect(pos+(max(0,this.strength.life)/this.strength.base.life)*20-20,-9,(max(0,this.strength.life)/this.strength.base.life)*80,2+min((max(0,this.strength.life)/this.strength.base.life)*60,3)*2,4)
                        layer.fill(0,min(225,450-max(0,this.strength.morale)/this.strength.base.morale*400)-max(0,5-max(0,this.strength.morale)/this.strength.base.morale*30)*25,min(225,max(0,this.strength.morale)/this.strength.base.morale*450),this.fade.stat*this.fade.hover)
                        layer.rect(pos+(max(0,this.strength.morale)/this.strength.base.morale)*20-20,0,(max(0,this.strength.morale)/this.strength.base.morale)*80,2+min((max(0,this.strength.morale)/this.strength.base.morale)*60,3)*2,4)
                        layer.fill(min(225,max(0,this.strength.supply)/this.strength.base.supply*225),min(150,max(0,this.strength.supply)/this.strength.base.supply*225),0,this.fade.stat*this.fade.hover)
                        layer.rect(pos+(max(0,this.strength.supply)/this.strength.base.supply)*20-20,9,(max(0,this.strength.supply)/this.strength.base.supply)*80,2+min((max(0,this.strength.supply)/this.strength.base.supply)*60,3)*2,4)
                        layer.fill(0,this.fade.stat*this.fade.hover)
                        layer.textSize(10)
                        layer.text(this.contain.stats.num.filter(num=>num>0).map(num=>ceil(this.strength.life/this.strength.base.life*num)).join(`/`),pos,-8.4)
                        layer.text(ceil(this.strength.morale),pos,0.6)
                        layer.text(ceil(this.strength.supply),pos,9.6)                  
                        layer.pop()
                    }
                }
            break
        }
    }
    update(layer,scene,mouse){
        switch(scene){
            case `main`:
                this.fade.main=smoothAnim(this.fade.main,this.fade.trigger,0,1,5)

                this.fade.hoverTrigger=inPointBox(mouse,this)&&this.fade.trigger
                this.fade.hover=smoothAnim(this.fade.hover,this.fade.hoverTrigger,0,1,5)

                this.fade.stat=smoothAnim(this.fade.stat,this.fade.statTrigger,0,1,5)

                this.fade.logs=smoothAnim(this.fade.logs,this.logs.trigger,0,1,5)

                this.fade.order=smoothAnim(this.fade.order,this.order.trigger,0,1,5)
            break
            case `mapAll`:
                this.fade.main=1

                this.fade.hoverTrigger=inPointBox(mouse,this)
                this.fade.hover=smoothAnim(this.fade.hover,this.fade.hoverTrigger,0,1,5)
            break
        }
    }
    operate(layer,scene,mouse){
        switch(scene){
            case `main`:
            break
        }
    }
    onClick(layer,scene,mouse){
        switch(scene){
            case `main`:
                if(this.active&&this.player==this.operation.turn.main){
                    if(this.order.trigger){
                        if(this.contain.stats.artillery){
                            this.order.artillery=!this.order.artillery
                        }
                        if(distPos(mouse,this)<20){
                            this.order.position.x=this.position.x
                            this.order.position.y=this.position.y
                        }else{
                            let dir=atan2(mouse.position.x-this.position.x,mouse.position.y-this.position.y)
                            let distance=min(distPos(mouse,this),this.order.artillery?constants.artilleryRange:this.contain.stats.speed*constants.turnTime)
                            this.order.position.x=this.position.x+lsin(dir)*distance
                            this.order.position.y=this.position.y+lcos(dir)*distance
                        }
                        this.order.trigger=false
                    }else{
                        this.order.trigger=inPointBox(mouse,this)
                    }
                }
            break
        }
    }
}
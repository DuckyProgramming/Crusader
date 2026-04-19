import {types,graphics} from './variables.mjs'
import {smoothAnim,findName,last,inPointBox} from './functions.mjs'
export class unit{
    constructor(operation,data){
        this.operation=operation
        this.position={x:data.pos[0],y:data.pos[1]}
        this.level=data.level
        this.types=data.types.map(type=>findName(type,types.unitType))
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

        this.fade={main:1,trigger:true,hover:0,hoverTrigger:false}
        this.contain={units:[],trigger:true}
        this.initialGraphics()
        this.initialElements(data.elements)
    }
    initialGraphics(){
        this.img=[graphics.load.team[this.team]]
        if(this.icon!=``){
            this.img.push(graphics.load.unit[findName(this.icon,graphics.load.unit)].img)
        }
    }
    initialElements(elements){
        for(let a=0,la=elements.length;a<la;a++){
            if(typeof elements[a]==`string`||typeof elements[a].types==`string`){
                if(typeof elements[a]==`string`){
                    this.contain.units.push(new unit(this.operation,{
                        level:3,types:types.elementType[findName(elements[a],types.elementType)].unitType,team:this.team,
                        desc:``,name:``,designation:``,commander:``,icon:this.icon,
                        pos:[0,0],
                        elements:[],
                    }))
                }else{
                    this.contain.units.push(new unit(this.operation,{
                        level:3,types:types.elementType[findName(elements[a].types,types.elementType)].unitType,team:elements[a].team,
                        desc:``,name:``,designation:``,commander:``,icon:this.icon,
                        pos:[0,0],
                        elements:[],
                    }))
                }
            }else{
                this.operation.units.push(new unit(this.operation,elements[a]))
                this.contain.units.push(last(this.operation.units))
                this.contain.trigger=false
            }
        }
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
    display(layer,scene){
        switch(scene){
            case `under`:
                if(this.contain.trigger){
                    layer.fill(...[[0,100,255],[225,0,0],[0,225,0]][this.player],0.25)
                    layer.ellipse(this.position.x,this.position.y,this.radius*2,this.radius*2)
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
                if(fade<1){
                    layer.tint(255,fade)
                }
                layer.image(this.img[0],0,0,16,10)

                layer.noFill()
                layer.stroke(40,fade)
                for(let a=0,la=this.types.length;a<la;a++){
                    layer.strokeWeight(25/this.size)
                    switch(this.types[a]){
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
                layer.stroke(this.select?120:40,this.select?240:40,40,fade)
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
                layer.textSize(1.5)
                layer.strokeWeight(0.15)
                layer.text(this.designation,-5,-3.5)
                layer.textSize(this.name.length>=5?4:5)
                layer.strokeWeight(this.name.length>=5?0.4:0.5)
                layer.text(this.name,0,0.25)
                layer.textSize(2.25)
                layer.text(this.commander,0,3.5)
            break
        }
    }
    displayInfo(layer,scene){
        switch(scene){
            case `main`: case `mapAll`:
                if(this.fade.hover>0){
                    layer.push()
                    layer.translate(this.position.x,this.position.y)
                    layer.fill(255,this.fade.hover)
                    layer.stroke(0,this.fade.hover)
                    layer.strokeWeight(4)
                    layer.textSize(40)
                    layer.text(this.desc,0,-this.height*1.25-30)
                    layer.scale(this.size/4)
                    this.displaySub(layer,scene,this.fade.hover)
                    layer.pop()
                    if(this.level!=3){
                        let totalWidth=(this.contain.units.length-1)*10+this.contain.units.reduce((acc,unit)=>acc+unit.width,0)
                        let totalHeight=this.contain.units.reduce((acc,unit)=>max(acc,unit.height),0)
                        let tick=0
                        this.contain.units.forEach(unit=>{
                            layer.push()
                            layer.translate(this.position.x-totalWidth+unit.width+tick*2,this.position.y+this.height*1.25+totalHeight+20)
                            layer.scale(unit.size/5)
                            unit.displaySub(layer,scene,this.fade.hover)
                            layer.pop()
                            tick+=unit.width+10
                        })
                    }
                }
            break
        }
    }
    update(layer,scene,mouse){
        switch(scene){
            case `main`:
                this.fade.main=smoothAnim(this.fade.main,this.fade.trigger,0,1,15)

                this.fade.hoverTrigger=inPointBox(mouse,this)
                this.fade.hover=smoothAnim(this.fade.hover,this.fade.hoverTrigger,0,1,5)
            break
            case `mapAll`:
                this.fade.main=1

                this.fade.hoverTrigger=inPointBox(mouse,this)
                this.fade.hover=smoothAnim(this.fade.hover,this.fade.hoverTrigger,0,1,5)
            break
        }
    }
}
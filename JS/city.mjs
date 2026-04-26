import {graphics} from './variables.mjs'
import {smoothAnim,distPos} from './functions.mjs'
export class city{
    constructor(operation,data){
        this.operation=operation
        this.position={x:data.pos[0],y:data.pos[1]}
        this.name=data.name
        this.owner=data.owner
        this.type=data.type
        this.fade={main:1,trigger:true,reveal:0,revealTrigger:false}
        this.connect={main:[],primary:[]}
        this.supply={owner:-1}
    }
    /*save(){
        let composite={
            id:this.id,
            name:this.name,
            type:this.type,
            position:this.position,
            rule:this.rule,
            owner:this.owner,
            fortified:{
                trigger:this.fortified.trigger,
                unit:this.fortified.unit==-1?-1:this.fortified.unit.id,
                sieged:this.fortified.sieged,
                siegeActive:this.fortified.siegeActive,
                taken:this.fortified.taken,
            },
            fade:this.fade,
            index:this.index,
            remove:this.remove,
        }
        return composite
    }
    load(composite){
        this.id=composite.id
        this.name=composite.name
        this.type=composite.type
        this.position=composite.position
        this.rule=composite.rule
        this.owner=composite.owner
        this.fortified=composite.fortified
        this.sieged=composite.sieged
        this.fade=composite.fade
        this.index=composite.index
        this.remove=composite.remove
    }
    loadBar(){
        this.fortified.unit=this.fortified.unit==-1?-1:this.operation.units[findId(this.fortified.unit,this.operation.units)]
    }*/
    tickSupply(){
        this.supply.owner=this.owner
        this.owner=-1
        if(this.type==1){
        }
    }
    near(dist,player){
        return this.operation.units.some(unit=>unit.player==player&&distPos(this,unit)<dist)
    }
    display(layer,scene){
        switch(scene){
            case `road`:
                if(this.fade.main>0){
                    layer.stroke(100,0.5)
                    layer.strokeWeight(5*this.fade.main)
                    layer.noFill()
                    this.connect.primary.forEach(connect=>{
                        if(this.name==`Buq Buq`){
                            layer.bezier(
                                this.position.x,this.position.y,
                                this.position.x*0.7+connect.position.x*0.3,this.position.y*0.7+connect.position.y*0.3+50,
                                this.position.x*0.3+connect.position.x*0.7,this.position.y*0.3+connect.position.y*0.7+50,
                                connect.position.x,connect.position.y
                            )
                        }else{
                            layer.line(this.position.x,this.position.y,connect.position.x,connect.position.y)
                        }
                    })
                }
            break
            case `main`: case `mapAll`:
                if(this.fade.main>0){
                    layer.push()
                    layer.translate(this.position.x,this.position.y)
                    let img=graphics.load.city[this.type]
                    layer.noStroke()
                    layer.fill(244,239,196,this.fade)
                    layer.ellipse(0,0,img.width*0.16*this.fade.main)
                    if(this.owner>=0){
                        layer.fill(...types.player[this.owner].color,this.fade.reveal)
                        layer.ellipse(0,0,img.width*0.16*this.fade.main)
                    }
                    layer.image(img,0,0,img.width*0.4*this.fade.main,img.height*0.4*this.fade.main)
                    layer.fill(0)
                    layer.textSize(img.height*0.2*this.fade.main)
                    layer.text(this.name,0,img.height*0.25*this.fade.main)
                    layer.pop()
                }
            break
        }
    }
    update(layer,scene,mouse){
        switch(scene){
            case 'main':
                this.fade.main=smoothAnim(this.fade.main,this.fade.trigger,0,1,15)

                this.fade.reveal=smoothAnim(this.fade.reveal,this.fade.revealTrigger,0,1,15)
            break
            case `mapAll`:
                this.fade.main=1
            break
        }
    }
    onClick(layer,mouse,scene,rel){
    }
}
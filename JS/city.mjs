import {graphics} from './variables.mjs'
import {} from './functions.mjs'
export class city{
    constructor(operation,data){
        this.operation=operation
        this.position={x:data.pos[0],y:data.pos[1]}
        this.name=data.name
        this.owner=data.owner
        this.type=data.type
        this.fade={main:1}
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
    display(layer,scene){
        switch(scene){
            case `main`: case `mapAll`:
                layer.push()
                layer.translate(this.position.x,this.position.y)
                let img=graphics.load.city[0]
                layer.image(img,0,0,img.width*0.4*this.fade.main,img.height*0.4*this.fade.main)
                layer.fill(0)
                layer.textSize(img.height*0.2*this.fade.main)
                layer.text(this.name,0,img.height*0.25*this.fade.main)
                layer.pop()
            break
        }
    }
    update(layer,scene,mouse){
        switch(scene){
            case 'main':
                this.fade.main=smoothAnim(this.fade.main,this.fade.trigger,0,1,15)
            break
            case `mapAll`:
                this.fade.main=1
            break
        }
    }
    onClick(layer,mouse,scene,rel){
    }
}
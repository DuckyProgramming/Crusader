import {graphics,types} from './variables.mjs'
import {smoothAnim,distPos,elementArray} from './functions.mjs'
export class city{
    constructor(operation,data){
        this.operation=operation
        this.position={x:data.pos[0],y:data.pos[1]}
        this.name=data.name
        this.owner=data.owner
        this.type=data.type
        this.fade={main:1,trigger:true,reveal:0,revealTrigger:false}
        this.connect={main:[],primary:[]}
        this.supply={connect:elementArray(0,types.player.length)}
        this.hist=[{owner:this.owner}]
        /*
        0 - fail
        1 - success
        */
    }
    save(){
        let composite={
            fade:this.fade,
            supply:this.supply,
            hist:this.hist,
        }
        return composite
    }
    load(composite){
        this.fade=composite.fade
        this.supply=composite.supply
        this.hist=composite.hist
    }
    endTick(){
        if(this.owner!=-1&&!this.supply.connect.some((conn,index)=>conn==1&&types.player[index].side==types.player[this.owner].side)){
            this.owner=-1
        }
        if(this.owner!=-1){
            this.operation.units.forEach(unit=>{
                if(distPos(unit,this)<[100,150][this.type]){
                    if(types.player[unit.player].side==types.player[this.owner].side&&unit.contain.trigger){
                        unit.contain.units.forEach(cont=>{
                            cont.strength.supply=min(
                                cont.strength.supply+[20,15][types.player[cont.player].side],
                                cont.strength.base.supply
                            )
                        })
                    }
                }
            })
        }
        this.hist.push({owner:this.owner})
    }
    near(dist,player){
        return this.operation.units.some(unit=>unit.active&&unit.player==player&&distPos(this,unit)<dist)
    }
    nearTransient(dist,player){
        return this.operation.units.some(unit=>(unit.active||unit.strength.transient)&&unit.player==player&&distPos(this,unit)<dist)
    }
    nearSide(dist,side){
        return this.operation.units.some(unit=>unit.active&&types.player[unit.player].side==side&&distPos(this,unit)<dist)
    }
    getNearSide(side){
        return this.operation.units.reduce((acc,unit)=>unit.active&&types.player[unit.player].side==side?min(acc,distPos(this,unit)):acc,1000)
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
            case `main`: case `mapAll`: case `hist`:
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
            case `hist`:
                this.fade.main=1
                if(mouse%60==0){
                    this.owner=this.hist[floor(mouse/60)].owner
                }
            break
        }
    }
    operate(layer,scene,mouse){
        switch(scene){
            case `main`:
                let closest=this.owner==-1?100:min(100,this.getNearSide(types.player[this.owner].side))
                types.player.forEach((player,index)=>{
                    if(this.near(closest,index)){
                        if(this.supply.connect.some((conn,index2)=>player.side==types.player[index2].side&&conn==1)||this.type==1){
                            this.owner=index
                        }else{
                            this.owner=-1
                        }
                    }
                })
            break
        }
    }
    onClick(layer,mouse,scene,rel){}
}
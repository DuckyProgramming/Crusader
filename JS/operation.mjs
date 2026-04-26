import {graphics,constants,dev} from './variables.mjs'
import {findName,smoothAnim,inPointBox,boxify} from './functions.mjs'
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
        this.view={scale:1}
        this.turn={main:0,time:0,total:0,prep:true}
        this.anim={main:0,prep:0}
        this.initial()
        this.loadMap(this.map)
        this.initialComponents()
        constants.init=true
    }
    /*save(){
        let composite={
            options:options,
            map:types.map[this.map].term,
            zoom:this.zoom,
            time:this.time,
            resources:this.resources,
            edge:this.edge,
            id:this.id,
            cities:[],
            units:[],
            teams:[],
            ref:this.ref,
            scale:this.scale,
            scene:this.scene,
            ui:this.ui.save(),
            transitionManager:this.transitionManager.save()
        }
        this.cities.forEach(city=>composite.cities.push(city.save()))
        this.units.forEach(unit=>composite.units.push(unit.save()))
        this.teams.forEach(team=>composite.teams.push(team.save()))
        return composite
    }
    saveCol(){
        saveStrings([JSON.stringify(this.save())],'ecorcheurSaveFile','json')
    }
    load(result){
        let composite=JSON.parse(result)

        options=composite.options

        let map=findTerm0(composite.map,types.map)
        this.loadMap(map)
        this.map=map
        this.nextMap=map
        this.zoom=composite.zoom
        this.time=composite.time
        this.resources=composite.resources
        this.edge=composite.edge
        this.id=composite.id
        this.ref=composite.ref
        this.scale=composite.scale
        this.scene=composite.scene
        if(composite.cities!=undefined){
            this.cities=[]
            composite.cities.forEach(cit=>{this.cities.push(new city(this,0,0,{},false));last(this.cities).load(cit)})
        }
        if(composite.units!=undefined){
            this.units=[]
            composite.units.forEach(uni=>{this.units.push(new unit(this,false,0,0,0,0,0,0,false));last(this.units).load(uni)})
        }
        if(composite.teams!=undefined){
            this.teams=[]
            composite.teams.forEach(tea=>{this.teams.push(new team(this,0));last(this.teams).load(tea)})
        }
        this.cities.forEach(city=>city.loadBar())
        this.units.forEach(unit=>unit.loadBar())
        this.teams.forEach(team=>team.loadBar())
        
        this.ui.load(composite.ui)
        this.ui.loadBar()
        this.transitionManager.load(composite.transitionManager)
    }
    loadStp(input,scene){
        let file=input.files[0]
        let reader=new FileReader()
        reader.operation=this
        reader.scene=scene
        reader.readAsText(file)
        reader.onload=function(){this.operation.load(reader.result);this.operation.scene=scene}
    }
    loadCol(scene){
        let input=document.createElement('input')
        input.type='file'
        input.operation=this
        input.scene=scene
        input.click()
        input.addEventListener('change',function(){this.operation.loadStp(this,this.scene)},false)
    }*/
    transitionComplete(scene){
        switch(this.scene){
        }
    }
    loadMap(map){
        types.city=types.map[map].city
        types.connect=types.map[map].connect
        types.team=types.map[map].team
        types.player=types.map[map].player
        types.unit=types.map[map].unit

        //graphics.load.water=Array.from(graphics.load.water[options.size==2?1:0].bytes).map(byte=>byte.toString(2).padStart(8,`0`))
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
                    layer.fill(150,this.anim.prep)
                    layer.rect(layer.width/2,layer.height/2,800,120,20)
                    layer.fill(0,this.anim.prep)
                    layer.textSize(80)
                    layer.text(`${types.player[this.turn.main].name} Turn Begin`,layer.width/2,layer.height/2+4)
                }
                if(this.anim.main>0){
                    layer.noStroke()
                    layer.fill(150,this.anim.main)
                    layer.rect(layer.width-100,100,120,120,20)
                    layer.fill(0,this.anim.main)
                    layer.textSize(40)
                    layer.text(`End`,layer.width-100,80+2)
                    layer.text(`Turn`,layer.width-100,120+2)
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

                this.cities.forEach(city=>city.update(layer,this.scene,rel))
                this.units.forEach(unit=>unit.update(layer,this.scene,rel))
                while(this.turn.time>0){
                    this.units.forEach(unit=>unit.operate(layer,this.scene,rel))
                    this.turn.time--
                    if(this.turn.time<=0){
                        this.units.forEach(unit=>unit.order.position={x:unit.position.x,y:unit.position.y})
                    }else if(dev.slow){
                        break
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
                        if(inPointBox(mouse,boxify(layer.width-100,100,120,120))){
                            this.turn.main++
                            this.units.forEach(unit=>{
                                unit.fade.trigger=false
                                unit.fade.statTrigger=false
                            })
                            this.cities.forEach(city=>city.fade.revealTrigger=false)
                            if(this.turn.main>=types.player.length){
                                this.turn.time=constants.turnTime
                                this.turn.main=0
                                this.units.forEach(unit=>{
                                    unit.fade.trigger=dev.slow
                                    unit.fade.statTrigger=dev.slow
                                })
                            }else{
                                this.turn.prep=true
                            }
                        }
                        this.units.forEach(unit=>unit.onClick(layer,this.scene,rel))
                    }
                }
            break
        }
    }
    onDrag(layer,mouse,previous,button){
    }
    onKey(layer,key){
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
                        if(key==`Enter`){
                            this.turn.main++
                            this.units.forEach(unit=>{
                                unit.fade.trigger=false
                                unit.fade.statTrigger=false
                            })
                            this.cities.forEach(city=>city.fade.revealTrigger=false)
                            if(this.turn.main>=types.player.length){
                                this.turn.time=constants.turnTime
                                this.turn.main=0
                                this.units.forEach(unit=>{
                                    unit.fade.trigger=dev.slow
                                    unit.fade.statTrigger=dev.slow
                                })
                            }else{
                                this.turn.prep=true
                            }
                        }
                    }
                }
            break
        }
    }
}
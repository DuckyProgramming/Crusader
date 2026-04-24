import {graphics,constants} from './variables.mjs'
import {findName} from './functions.mjs'
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
        this.turn={main:0,time:0,total:0}
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
                layer.pop()
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
        switch(this.scene){
            case `mapAll`:
                rel={position:{x:mouse.position.x/this.view.scale,y:mouse.position.y/this.view.scale}}
                this.cities.forEach(city=>city.update(layer,this.scene,rel))
                this.units.forEach(unit=>unit.update(layer,this.scene,rel))
            break
            case `main`:
                rel={position:{x:mouse.position.x/this.view.scale,y:mouse.position.y/this.view.scale}}
                this.cities.forEach(city=>city.update(layer,this.scene,rel))
            break
        }
    }
    onClick(layer,mouse){
    }
    onDrag(layer,mouse,previous,button){
    }
    onKey(layer,key){
    }
}
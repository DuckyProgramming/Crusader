import {dev,graphics,constants,inputs,types,options} from './variables.mjs'
import {see,battalions,companies,strength,normalize,summon,kills,outPos,filterClass,destroy,numLevel} from './functions.mjs'
import {setupGraphics,displayMain} from './graphics.mjs'
import {operation} from './operation.mjs'
var current
export function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    setupGraphics(graphics,constants)
    current=new operation(constants.initialMap)
    window.current=current
}
export function draw(){
    //let startTime=performance.now()
    if(!dev.close){
        current.display(graphics.main)
    }
    /*let endTime=performance.now()
    print(`Display: ${endTime - startTime} milliseconds`)*/
    //startTime=performance.now()
    current.update(graphics.main,{position:{...inputs.mouse.rel}})
    /*endTime=performance.now()
    print(`Update: ${endTime - startTime} milliseconds`)*/
    displayMain(graphics.main,inputs)
}
export function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}
export function mouseClicked(){
    if(constants.init){
        current.onClick(graphics.main,{position:{...inputs.mouse.rel}})
    }
}
export function mouseDragged(){
    if(constants.init){
        current.onDrag(graphics.main,{position:{...inputs.mouse.rel}},{position:{...inputs.mouse.previous.rel}},mouseButton)
    }
}
export function keyPressed(){
    if(constants.init){
        current.onKey(graphics.main,{position:{...inputs.mouse.rel}},key)
    }
}
window.setup=setup
window.draw=draw
window.windowResized=windowResized
window.mouseClicked=mouseClicked
window.mouseDragged=mouseDragged
window.keyPressed=keyPressed

window.inputs=inputs
window.types=types
window.options=options

window.dev=dev
window.see=see
window.battalions=battalions
window.companies=companies
window.strength=strength
window.normalize=normalize
window.summon=summon
window.kills=kills
window.outPos=outPos
window.filterClass=filterClass
window.destroy=destroy
window.numLevel=numLevel
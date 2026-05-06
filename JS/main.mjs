import {dev,graphics,constants,inputs,types,options} from './variables.mjs'
import {see,battalions,strength,normalize,summon,kills} from './functions.mjs'
import {setupGraphics,displayMain} from './graphics.mjs'
import {operation} from './operation.mjs'
var current
export function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    setupGraphics(graphics)
    current=new operation()
    window.current=current
}
export function draw(){
    if(!dev.close){
        current.display(graphics.main)
    }
    current.update(graphics.main,{position:{...inputs.mouse.rel}})
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
window.strength=strength
window.normalize=normalize
window.summon=summon
window.kills=kills
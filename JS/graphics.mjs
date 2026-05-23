import {updateMouse} from './functions.mjs'
var ltrig=[[],[]]
export function setupGraphics(graphics,constants){
    setupBase()
	setupConstants(constants)
    setupTrig()
	graphics.main=createGraphics(1800,960)
	setupLayer(graphics.main)
}
export function setupBase(){
    noStroke()
    angleMode(DEGREES)
	textAlign(CENTER,CENTER)
	rectMode(CENTER)
	colorMode(RGB,255,255,255,1)
	imageMode(CENTER)
    strokeJoin(ROUND)
	textFont('Times New Roman')
}
export function setupLayer(layer){
    layer.noStroke()
    layer.angleMode(DEGREES)
	layer.textAlign(CENTER,CENTER)
	layer.rectMode(CENTER)
	layer.colorMode(RGB,255,255,255,1)
	layer.imageMode(CENTER)
    layer.strokeJoin(ROUND)
	layer.textFont('Times New Roman')
}
export function displayMain(layer,inputs){
    graphics.scale=min(width/layer.width,height/layer.height)
    image(layer,width/2,height/2,layer.width*graphics.scale,layer.height*graphics.scale)
    updateMouse(graphics.main,graphics.scale,inputs)
}
export function setupConstants(constants){
	constants.sqrt2=sqrt(2)
	constants.sqrt3=sqrt(3)
}
export function setupTrig(){
	for(let a=0,la=360;a<la;a++){
		ltrig[0].push(sin(a/2))
		ltrig[1].push(cos(a/2))
		if(abs(ltrig[0][a])<0.001){
			ltrig[0][a]=0
		}
		if(abs(ltrig[1][a])<0.001){
			ltrig[1][a]=0
		}
	}
	for(let a=0,la=360;a<la;a++){
		ltrig[0].push(-ltrig[0][a])
		ltrig[1].push(-ltrig[1][a])
	}
}
export function lsin(direction){
	return ltrig[0][floor((direction%360+360)%360*2)]
}
export function lcos(direction){
	return ltrig[1][floor((direction%360+360)%360*2)]
}
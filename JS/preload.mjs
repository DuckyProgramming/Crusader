import {types,graphics} from './variables.mjs'
export function preload(){
    let root=`../../`
    graphics.load.map=[types.map[0].term.map(term=>loadImage(`${root}Assets/${term}.png`))]
    graphics.load.city.push(loadImage(`${root}Assets/General/city/city.png`))
    graphics.load.city.push(loadImage(`${root}Assets/General/city/source.png`))
}
window.preload=preload
window.graphics=graphics
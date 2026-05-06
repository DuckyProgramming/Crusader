import {types,graphics} from './variables.mjs'
export function preload(){
    let root=`../`
    types.map.forEach(map=>{
        graphics.load.map.push(map.term.map(term=>loadImage(`${root}Gazala/Assets/map/${term}.png`)))
        map.team.forEach(team=>graphics.load.team.push(loadImage(`${root}Assets/team/${team.term}.png`)))
    })
    graphics.load.city.push(loadImage(`${root}../Assets/city/city.png`))
    graphics.load.city.push(loadImage(`${root}Assets/city/source.png`))
    graphics.load.water=loadBytes(`${root}Gazala/Assets/data/water.bin`)
    graphics.load.fortifications=loadBytes(`${root}Gazala/Assets/data/fortifications.bin`)
}
window.preload=preload
window.graphics=graphics
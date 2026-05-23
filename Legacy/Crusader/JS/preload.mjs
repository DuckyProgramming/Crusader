import {types,graphics} from './variables.mjs'
export function preload(){
    let root=`../../`
    types.map.forEach(map=>{
        graphics.load.map.push(map.term.map(term=>loadImage(`${root}Assets/Crusader/map/${term}.png`)))
        map.team.forEach(team=>graphics.load.team.push(loadImage(`${root}Assets/General/team/${team.term}.png`)))
    })
    graphics.load.city.push(loadImage(`${root}Assets/General/city/city.png`))
    graphics.load.city.push(loadImage(`${root}Assets/General/city/source.png`))
    graphics.load.water=loadBytes(`${root}Assets/Crusader/data/water.bin`)
    graphics.load.fortifications=loadBytes(`${root}Assets/Crusader/data/fortifications.bin`)
}
window.preload=preload
window.graphics=graphics
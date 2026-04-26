import {types,graphics} from './variables.mjs'
export function preload(){
    let root=``
    types.map.forEach(map=>{
        graphics.load.map.push(map.term.map(term=>loadImage(`${root}Assets/map/${term}.png`)))
        map.team.forEach(team=>graphics.load.team.push(loadImage(`${root}Assets/team/${team.term}.png`)))
        let icons=[]
        map.unit.forEach(unit=>{
            if(unit.icon!=``&&!icons.includes(unit.icon)){
                icons.push(unit.icon)
            }
            unit.elements.forEach(element=>{
                if(typeof element.type!=`string`&&element.icon!=``&&!icons.includes(element.icon)){
                    icons.push(element.icon)
                }
            })
        })
        icons.forEach(icon=>graphics.load.unit.push({name:icon,img:loadImage(`${root}Assets/unit/${icon}.png`)}))
    })
    graphics.load.city.push(loadImage(`${root}Assets/city/city.png`))
    graphics.load.city.push(loadImage(`${root}Assets/city/source.png`))
    graphics.load.water=loadBytes(`${root}Assets/data/water.bin`)
    graphics.load.fortifications=loadBytes(`${root}Assets/data/fortifications.bin`)
}
window.preload=preload
window.graphics=graphics
import {types,graphics} from './variables.mjs'
export function preload(){
    let root=`./../`
    //graphics.load.map=[types.map[0].term.map(term=>loadImage(`${root}Assets/${term}/map/main.png`))]
    graphics.load.map=[loadImage(`${root}Assets/${types.map[0].term}/map/main.png`)]
    graphics.load.city.push(loadImage(`${root}Assets/General/city/city.png`))
    graphics.load.city.push(loadImage(`${root}Assets/General/city/source.png`))
    types.map[0].team.forEach(team=>graphics.load.team.push(loadImage(`${root}Assets/General/team/${team.term}.png`)))
}
window.preload=preload
window.graphics=graphics
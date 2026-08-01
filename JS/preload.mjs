import {types,graphics,constants} from './variables.mjs'
import {randin,range} from './functions.mjs'
export function preload(){
    constants.initialMap=randin(range(0,types.map.length).filter(num=>types.map[num].term!=undefined))
    let root=`./`
    //graphics.load.map=[types.map[0].term.map(term=>loadImage(`${root}Assets/${term}/map/main.png`))]
    graphics.load.map=[]
    graphics.load.map[constants.initialMap]=loadImage(`${root}Assets/${types.map[constants.initialMap].term}/map/main.png`)
    graphics.load.city.push(loadImage(`${root}Assets/General/city/city.png`))
    graphics.load.city.push(loadImage(`${root}Assets/General/city/source.png`))
    types.map[0].team.forEach(team=>graphics.load.team.push(loadImage(`${root}Assets/General/team/${team.term}.png`)))
}
window.preload=preload
window.graphics=graphics
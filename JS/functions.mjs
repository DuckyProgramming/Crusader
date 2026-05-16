import {lsin,lcos} from './graphics.mjs'
//calculatory
export function floor(value){
    return Math.floor(value)
}
export function ceil(value){
    return Math.ceil(value)
}
export function random(min,max){
    return Math.random()*(max-min)+min
}
export function round(value){
    return Math.round(value)
}
export function max(value1,value2){
    return Math.max(value1,value2)
}
export function min(value1,value2){
    return Math.min(value1,value2)
}
export function constrain(value,lower,upper){
    return Math.min(Math.max(value,lower),upper)
}
export function dist(x1,y1,x2,y2){
    return Math.sqrt((x1-x2)**2+(y1-y2)**2)
}
export function distPos(p1,p2){
	return dist(p1.position.x,p1.position.y,p2.position.x,p2.position.y)
}
export function dirPos(p1,p2){
	return atan2(p2.position.x-p1.position.x,p2.position.y-p1.position.y)
}
export function magVec(vec){
	return sqrt(vec.x**2+vec.y**2)
}
export function near(value1,value2){
	return abs(value1-value2)<1
}
export function pl(value){
	return value!=1?`s`:``
}
export function spinControl(base){
	return base<-180?base+360:base>180?base-360:base
}
export function spinDirection(base,goal,speed){
	if(
		abs(base-goal)<speed||
		abs(base-goal-360)<speed||
		abs(base-goal+360)<speed
	){
		return goal
	}else if(
		base>goal-540&&base<goal-360||
		base>goal-180&&base<goal||
		base>goal+180&&base<goal+360
	){
		return base+speed
	}else if(
		base>goal-360&&base<goal-180||
		base>goal&&base<goal+180||
		base>goal+360&&base<goal+540
	){
		return base-speed
	}
	return base+speed*(floor(random(0,2))*2-1)
}
export function moveToward(base,goal,speed){
    if(abs(base-goal)<speed){
        return goal
    }else if(base<goal){
        return base-speed
    }else{
        return base+speed
    }
}
export function moveTowardVec(base,goal,speed){
    if(distPos(base,goal)<speed){
        return {x:goal.position.x,y:goal.position.y}
    }else{
        let dir=dirPos(base,goal)
        return {x:base.position.x+lsin(dir)*speed,y:base.position.y+lcos(dir)*speed}
    }
}
export function moveTowardVecDynamic(base,goal,baseSpeed,speedMult){
    let dp=distPos(base,goal)
    let speed=baseSpeed+speedMult*dp
    if(dp<speed){
        return {x:goal.position.x,y:goal.position.y}
    }else{
        let dir=dirPos(base,goal)
        return {x:base.position.x+lsin(dir)*speed,y:base.position.y+lcos(dir)*speed}
    }
}
export function smoothAnim(anim,trigger,minPoint,maxPoint,speed){
	if(trigger&&anim<maxPoint){
		return min(round(anim*speed+1)/speed,maxPoint)
	}
	if(!trigger&&anim>minPoint){
		return max(round(anim*speed-1)/speed,minPoint)
	}
	return anim
}
export function mapVec(vec1,vec2,interp){
    return {x:vec1.x*(1-interp)+vec2.x*interp,y:vec1.y*(1-interp)+vec2.y*interp}
}
export function elementArray(base,number){
	let result=[]
	for(let a=0,la=number;a<la;a++){
		result.push(base)
	}
	return result
}
export function range(start,end){
    return [...Array(end-start).keys()].map(a=>a+start)
}
export function even(pos,total){
    return pos-total*0.5+0.5
}
export function evens(num){
    let result=[]
    let left=1
    for(let a=0,la=num;a<la;a++){
        result.push(left*(random(0,1)**(la-a-1)))
        left-=last(result)
    }
    return result
}
export function formatTime(frames){
    return `${floor(frames/3600)%60}:${floor(frames/60)%60<10?`0`:``}${floor(frames/60)%60}`
}
export function shuffleArray(array){
    for(let a=0,la=array.length-1;a<la;a++){
        let selector=floor(random(a,la+1))
        if(a!=la){
            let temp=array[a]
            array[a]=array[selector]
            array[selector]=temp
        }
    }
    return array
}
export function randin(array){
    return array[floor(random(0,array.length))]
}
export function randindex(array){
    return floor(random(0,array.length))
}
export function last(array){
    return array[array.length-1]
}
export function lastKey(array,key){
    return array[array.length-key]
}
export function numLength(num){
    let value=num
    let len=1
    while(value>=10){
        value=floor(value/10)
        len++
    }
    return len
}
export function findList(item,list){
	for(let a=0,la=list.length;a<la;a++){
		if(list[a]==item){
			return a
		}
	}
    throw new Error(`findList Fail: ${item}, ${list}`)
	return -1
}
export function findName(name,list){
	for(let a=0,la=list.length;a<la;a++){
		if(list[a].name==name){
			return a
		}
	}
    throw new Error(`findName Fail: ${name}, ${list.map(item=>item.name)}`)
	return -1
}
export function findId(id,list){
	for(let a=0,la=list.length;a<la;a++){
		if(list[a].id==id){
			return a
		}
	}
    throw new Error(`findId Fail: ${id}, ${list}`)
	return -1
}
export function findName2(name,list){
	for(let a=0,la=list.length;a<la;a++){
		if(
            list[a].name[0]==name[0]&&
            list[a].name[1]==name[1]
        ){
			return a
		}
	}
    throw new Error(`findName2 Fail: ${name}, ${list}`)
	return -1
}
export function findTerm(term,list){
	for(let a=0,la=list.length;a<la;a++){
		if(list[a].term==term){
			return a
		}
	}
    throw new Error(`findTerm Fail: ${term}`)
	return -1
}
export function findTerm0(term,list){
	for(let a=0,la=list.length;a<la;a++){
		if(list[a].term[0]==term[0]){
			return a
		}
	}
    throw new Error(`findTerm0 Fail: ${term}`)
	return -1
}
export function findAbstract(term,search,list){
	for(let a=0,la=list.length;a<la;a++){
		if(
            list[a][term]==search||
            term==`desc`&&typeof list[a][term]==`object`&&list[a][term][0]==search
        ){
			return a
		}
	}
    throw new Error(`findAbstract Fail: ${search} | ${list.map(element=>element[term])}`)
	return -1
}
export function updateMouse(layer,scale,inputs){
    inputs.mouse.previous.base.x=inputs.mouse.base.x
    inputs.mouse.previous.base.y=inputs.mouse.base.y
    inputs.mouse.previous.rel.x=inputs.mouse.rel.x
    inputs.mouse.previous.rel.y=inputs.mouse.rel.y
	inputs.mouse.base.x=mouseX
	inputs.mouse.base.y=mouseY
	inputs.mouse.rel.x=(inputs.mouse.base.x-width/2)/scale+layer.width/2
	inputs.mouse.rel.y=(inputs.mouse.base.y-height/2)/scale+layer.height/2
}
//operational
export function boxify(x,y,width,height){
	return {position:{x:x,y:y},width:width,height:height}
}
export function onSegment(p,q,r){ 
    return q.x<=max(p.x,r.x)&&q.x>=min(p.x, r.x)&&q.y<=max(p.y,r.y)&&q.y>=min(p.y, r.y)
}
export function orientPoint(p,q,r){ 
    s=(q.y-p.y)*(r.x-q.x)-(q.x-p.x)*(r.y-q.y) 
    return s==0?0:s>0?1:2
}
export function intersect(p1,q1,p2,q2){
    o1=orientPoint(p1,q1,p2)
    o2=orientPoint(p1,q1,q2)
    o3=orientPoint(p2,q2,p1)
    o4=orientPoint(p2,q2,q1)
    return o1!=o2&&o3!=o4||
    o1==0&&onSegment(p1,p2,q1)||
    o2==0&&onSegment(p1,q2,q1)||
    o3==0&&onSegment(p2,p1,q2)||
    o4==0&&onSegment(p2,q1,q2)
}
export function intersectKey(p1,q1,p2,q2){
    let ud=((q2.y-p2.y)*(q1.x-p1.x)-(q2.x-p2.x)*(q1.y-p1.y))
    let ua=((q2.x-p2.x)*(p1.y-p2.y)-(q2.y-p2.y)*(p1.x-p2.x))/ud
    return {x:p1.x+ua*(q1.x-p1.x),y:p1.y+ua*(q1.y-p1.y)}
}
export function inPointBox(point,box){
    return point.position.x>box.position.x-box.width/2&&point.position.x<box.position.x+box.width/2&&point.position.y>box.position.y-box.height/2&&point.position.y<box.position.y+box.height/2
}
export function inCircleBox(circle,box){
    return dist(circle.position.x,circle.position.y,constrain(circle.position.x,box.position.x-box.width/2,box.position.x+box.width/2),constrain(circle.position.y,box.position.y-box.height/2,box.position.y+box.height/2))<circle.radius
}
export function inBoxBox(box1,box2){
    return box1.position.x>box2.position.x-box1.width/2-box2.width/2&&box1.position.x<box2.position.x+box1.width/2+box2.width/2&&box1.position.y>box2.position.y-box1.height/2-box2.height/2&&box1.position.y<box2.position.y+box1.height/2+box2.height/2
}
export function basicCollideBoxBox(nonmobile,mobile){
    return abs(nonmobile.position.y-mobile.position.y)/abs(nonmobile.position.x-mobile.position.x)>(nonmobile.height+mobile.height)/(nonmobile.width+mobile.width)?(mobile.position.y>nonmobile.position.y?0:1):(mobile.position.x>nonmobile.position.x?2:3)
}
export function collideBoxBox(nonmobile,mobile){
    for(let a=0,la=nonmobile.boundary.length;a<la;a++){
        for(let b=0,lb=nonmobile.boundary[a].length;b<lb;b++){
            if(a<=3){
                if(intersect(mobile.position,{x:mobile.previous.position.x+nonmobile.velocity.x,y:mobile.previous.position.y+nonmobile.velocity.y},
                    {x:nonmobile.boundary[a][b][0].x+mobile.width/2*(a==2?1:-1),y:nonmobile.boundary[a][b][0].y+mobile.height/2*(a==0?1:-1)},
                    {x:nonmobile.boundary[a][b][1].x+mobile.width/2*(a!=3?1:-1),y:nonmobile.boundary[a][b][1].y+mobile.height/2*(a!=1?1:-1)})
                ){
                    return a
                }
            }else if(a==4){
                if(
                    intersect(mobile.position,{x:mobile.previous.position.x+nonmobile.velocity.x,y:mobile.previous.position.y+nonmobile.velocity.y},
                    {x:nonmobile.boundary[a][b][0].x+mobile.width/2,y:nonmobile.boundary[a][b][0].y-mobile.height/2},
                    {x:nonmobile.boundary[a][b][1].x+mobile.width/2,y:nonmobile.boundary[a][b][1].y-mobile.height/2})||
                    intersect(mobile.position,{x:mobile.previous.position.x+nonmobile.velocity.x,y:mobile.previous.position.y+nonmobile.velocity.y},
                    {x:nonmobile.boundary[a][b][0].x-mobile.width/2,y:nonmobile.boundary[a][b][0].y-mobile.height/2},
                    {x:nonmobile.boundary[a][b][0].x+mobile.width/2,y:nonmobile.boundary[a][b][0].y-mobile.height/2})
                ){
                    return a
                }else if(
                    intersect(mobile.position,{x:mobile.previous.position.x+nonmobile.velocity.x,y:mobile.previous.position.y+nonmobile.velocity.y},
                    {x:nonmobile.boundary[a][b][1].x+mobile.width/2,y:nonmobile.boundary[a][b][1].y-mobile.height/2},
                    {x:nonmobile.boundary[a][b][1].x+mobile.width/2,y:nonmobile.boundary[a][b][1].y+mobile.height/2})
                ){
                    return 8
                }
            }else if(a==5){
                if(
                    intersect(mobile.position,{x:mobile.previous.position.x+nonmobile.velocity.x,y:mobile.previous.position.y+nonmobile.velocity.y},
                    {x:nonmobile.boundary[a][b][0].x-mobile.width/2,y:nonmobile.boundary[a][b][0].y-mobile.height/2},
                    {x:nonmobile.boundary[a][b][1].x-mobile.width/2,y:nonmobile.boundary[a][b][1].y-mobile.height/2})||
                    intersect(mobile.position,{x:mobile.previous.position.x+nonmobile.velocity.x,y:mobile.previous.position.y+nonmobile.velocity.y},
                    {x:nonmobile.boundary[a][b][0].x-mobile.width/2,y:nonmobile.boundary[a][b][0].y-mobile.height/2},
                    {x:nonmobile.boundary[a][b][0].x+mobile.width/2,y:nonmobile.boundary[a][b][0].y-mobile.height/2})
                ){
                    return a
                }else if(
                    intersect(mobile.position,{x:mobile.previous.position.x+nonmobile.velocity.x,y:mobile.previous.position.y+nonmobile.velocity.y},
                    {x:nonmobile.boundary[a][b][1].x-mobile.width/2,y:nonmobile.boundary[a][b][1].y-mobile.height/2},
                    {x:nonmobile.boundary[a][b][1].x-mobile.width/2,y:nonmobile.boundary[a][b][1].y+mobile.height/2})
                ){
                    return 9
                }
            }else if(a==6){
                if(
                    intersect(mobile.position,{x:mobile.previous.position.x+nonmobile.velocity.x,y:mobile.previous.position.y+nonmobile.velocity.y},
                    {x:nonmobile.boundary[a][b][0].x-mobile.width/2,y:nonmobile.boundary[a][b][0].y+mobile.height/2},
                    {x:nonmobile.boundary[a][b][1].x-mobile.width/2,y:nonmobile.boundary[a][b][1].y+mobile.height/2})||
                    intersect(mobile.position,{x:mobile.previous.position.x+nonmobile.velocity.x,y:mobile.previous.position.y+nonmobile.velocity.y},
                    {x:nonmobile.boundary[a][b][0].x+mobile.width/2,y:nonmobile.boundary[a][b][0].y+mobile.height/2},
                    {x:nonmobile.boundary[a][b][0].x-mobile.width/2,y:nonmobile.boundary[a][b][0].y+mobile.height/2})
                ){
                    return a
                }else if(
                    intersect(mobile.position,{x:mobile.previous.position.x+nonmobile.velocity.x,y:mobile.previous.position.y+nonmobile.velocity.y},
                    {x:nonmobile.boundary[a][b][1].x-mobile.width/2,y:nonmobile.boundary[a][b][1].y+mobile.height/2},
                    {x:nonmobile.boundary[a][b][1].x-mobile.width/2,y:nonmobile.boundary[a][b][1].y-mobile.height/2})
                ){
                    return 10
                }
            }else if(a==7){
                if(
                    intersect(mobile.position,{x:mobile.previous.position.x+nonmobile.velocity.x,y:mobile.previous.position.y+nonmobile.velocity.y},
                    {x:nonmobile.boundary[a][b][0].x+mobile.width/2,y:nonmobile.boundary[a][b][0].y+mobile.height/2},
                    {x:nonmobile.boundary[a][b][1].x+mobile.width/2,y:nonmobile.boundary[a][b][1].y+mobile.height/2})||
                    intersect(mobile.position,{x:mobile.previous.position.x+nonmobile.velocity.x,y:mobile.previous.position.y+nonmobile.velocity.y},
                    {x:nonmobile.boundary[a][b][0].x+mobile.width/2,y:nonmobile.boundary[a][b][0].y+mobile.height/2},
                    {x:nonmobile.boundary[a][b][0].x-mobile.width/2,y:nonmobile.boundary[a][b][0].y+mobile.height/2})
                ){
                    return a
                }else if(
                    intersect(mobile.position,{x:mobile.previous.position.x+nonmobile.velocity.x,y:mobile.previous.position.y+nonmobile.velocity.y},
                    {x:nonmobile.boundary[a][b][1].x+mobile.width/2,y:nonmobile.boundary[a][b][1].y+mobile.height/2},
                    {x:nonmobile.boundary[a][b][1].x+mobile.width/2,y:nonmobile.boundary[a][b][1].y-mobile.height/2})
                ){
                    return 11
                }
            }
        }
    }
    return -1
}
//mark graphic
export function diamond(layer,x,y,width,height,direction){
	layer.quad(x-width*lcos(direction),y-width*lsin(direction),x-height*lsin(direction),y-height*lcos(direction),x+width*lcos(direction),y+width*lsin(direction),x+height*lsin(direction),y+height*lcos(direction))
}
export function pentagon(layer,x1,y1,x2,y2,x3,y3,x4,y4,x5,y5){
	layer.beginShape()
	layer.vertex(x1,y1)
	layer.vertex(x2,y2)
	layer.vertex(x3,y3)
	layer.vertex(x4,y4)
	layer.vertex(x5,y5)
	layer.endShape(CLOSE)
}
export function regTriangle(layer,x,y,radiusX,radiusY,direction){
	layer.triangle(x+lsin(direction)*radiusX,y+lcos(direction)*radiusY,x+lsin(direction+120)*radiusX,y+lcos(direction+120)*radiusY,x+lsin(direction+240)*radiusX,y+lcos(direction+240)*radiusY)
}
export function regPoly(layer,x,y,sides,radiusX,radiusY,direction){
	layer.beginShape()
	for(a=0,la=sides;a<la;a++){
		layer.vertex(x+lsin(direction+360*a/la)*radiusX,y+lcos(direction+360*a/la)*radiusY)
	}
	layer.endShape(CLOSE)
}
export function regPolyOpen(layer,x,y,sides,radiusX,radiusY,direction){
	layer.beginShape()
	for(a=0,la=sides;a<la;a++){
		layer.vertex(x+lsin(direction+360*a/la)*radiusX,y+lcos(direction+360*a/la)*radiusY)
	}
	layer.endShape()
}
export function regStar(layer,x,y,sides,radiusX,radiusY,direction){
	layer.beginShape()
	for(a=0,la=sides*2;a<la;a++){
		layer.vertex(x+lsin(direction+360*a/la)*radiusX[a%2],y+lcos(direction+360*a/la)*radiusY[a%2])
	}
	layer.endShape(CLOSE)
}
export function upColor(color,value,key){
	return [color[0]+value*key[0],color[1]+value*key[1],color[2]+value*key[2]]
}
export function mergeColor(color1,color2,value){
	return [color1[0]*(1-value)+color2[0]*value,color1[1]*(1-value)+color2[1]*value,color1[2]*(1-value)+color2[2]*value]
}
//main
export function see(){
    window.current.units.forEach(unit=>{
        unit.fade.trigger=true
        unit.fade.statTrigger=true
    })
    window.current.cities.forEach(city=>city.fade.revealTrigger=true)
}
export function battalions(){
    let totals=[0,0,0]
    window.current.units.forEach(unit=>{
        if(unit.contain.trigger&&unit.active){
            //unit.contain.units.forEach(contain=>{if(contain.level!=4){totals[contain.player]++}})
            if(unit.level==3&&unit.contain.units.length>0&&unit.contain.units.every(element=>element.level==4)){
                totals[unit.player]++
            }else{
                unit.contain.units.forEach(contain=>totals[contain.player]++)
            }
        }
    })
    print(totals.map((total,index)=>`${types.player[index].name}: ${total}/${types.map[current.map].unit[current.set].battalions.flat()[index]}`).join(`\n`))
}
export function strength(){
    let totals=[[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]]]
    window.current.units.forEach(unit=>{
        if(unit.contain.trigger&&unit.active){
            unit.calculateElements()
            unit.strength.num.forEach((num,index)=>totals[unit.player][index][0]+=num)
        }
    })
    let temp=current.reform()
    temp.initialUnits(current.set)
    if(typeof temp.turn.pick==`number`&&temp.turn.pick>=0||typeof temp.turn.pick==`boolean`&&temp.turn.pick){
        temp.spawnUnits()
    }
    temp.units.forEach(unit=>{
        if(unit.contain.trigger&&unit.active){
            unit.calculateElements()
            unit.strength.num.forEach((num,index)=>totals[unit.player][index][1]+=num)
        }
    })
    print(totals.map((total,index)=>`${types.player[index].name}:\n${total.map((set,index)=>`${set[0]}/${set[1]} ${[`Infantry`,`Vehicles`,`Artillery`][index]}`).join(`\n`)}`).join(`\n\n`))
}
export function normalize(){
    let tempUnits=types.unit.slice()
    let allUnits=[]
    while(tempUnits.length>0){
        (typeof tempUnits[0].elements[0].type==`string`?allUnits:tempUnits).push(...tempUnits[0].elements)
        tempUnits.splice(0,1)
    }
    window.current.units.forEach(unit=>{
        if(unit.contain.trigger){
            unit.contain.units.forEach((element,index,arr)=>{
                let strength={
                    life:element.strength.life,
                    morale:element.strength.morale,
                    supply:element.strength.supply,
                }
                try{
                    let target=allUnits[findAbstract(`desc`,element.desc,allUnits)]
                    target.pos=[0,0]
                    target.elementType=findName(target.type,types.elementType)
                    target.type=types.elementType[findName(target.type,types.elementType)].unitType
                    target.icon=element.icon
                    target.elements=[]
                    arr[index]=element.reform(target)
                    arr[index].strength.life=strength.life
                    arr[index].strength.morale=strength.morale
                    arr[index].strength.supply=strength.supply
                }catch(e){
                    print(`Desc failure`)
                }
            })
            unit.calculateElements()
        }
    })
}
export function summon(desc,parent){
    let tempUnits=types.unit.slice()
    let allUnits=[]
    while(tempUnits.length>0){
        //console.log(tempUnits[0].elements.map(element=>element.type).join(`,`))
        (typeof tempUnits[0].elements[0].type==`string`?allUnits:tempUnits).push(...tempUnits[0].elements)
        tempUnits.splice(0,1)
    }
    parent.joinElement(allUnits[findAbstract(`desc`,desc,allUnits)])
}
export function kills(){
    window.options.obscureKills=false
    current.units.forEach(unit=>{
        if(!unit.contain.trigger||unit.contain.units.length>0){
            print(`${unit.desc}: ${round(unit.getKills(0))} Kills, ${round(unit.getKills(1))} Tanks, ${round(unit.getKills(2))} Artillery`)
        }
    })
}
//tool
/*testEvens=(num)=>{
    let totals=[]
    for(let a=0,la=num;a<la;a++){
        totals.push(0)
    }
    for(let a=0,la=1000;a<la;a++){
        let left=1
        for(let b=0,lb=num;b<lb;b++){
            move=left*(random(0,1)**(lb-b-1))
            left-=move
            totals[b]+=move
        }
    }
    print(totals)
}*/
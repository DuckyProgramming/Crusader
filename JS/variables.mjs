export var types={
    city:[],
    connect:[],
    team:[],
    player:[],
    side:[],
    unit:[],
    reserve:[],
    elementType:[
        {name:`Infantry`,unitType:[`Infantry`],class:0,damage:[10,2],armor:0,health:100,morale:1,num:800,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Infantry Company`,unitType:[`Infantry`],class:0,damage:[10,2],armor:0,health:25,morale:1,num:200,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Heavy Infantry Company`,unitType:[`Infantry`,`Heavy Infantry`],class:0,damage:[12,3],armor:0,health:25,morale:1,num:200,speed:0.8,artillery:false,engineer:false,recon:false},
        {name:`Weak Infantry`,unitType:[`Infantry`],class:0,damage:[10,2],armor:0,health:90,morale:0.9,num:700,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Small Infantry`,unitType:[`Infantry`],class:0,damage:[10,2],armor:0,health:90,morale:1,num:700,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Reinforced Infantry`,unitType:[`Infantry`],class:0,damage:[10,2],armor:0,health:150,morale:1,num:1200,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Oasis Infantry`,unitType:[`Oasis Infantry`],class:0,damage:[10,1],armor:0,health:125,morale:1.1,num:1000,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Light Oasis Infantry`,unitType:[`Oasis Infantry`,`Recon`],class:0,damage:[9,1],armor:0,health:70,morale:1.1,num:500,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Oasis Infantry Company`,unitType:[`Oasis Infantry`],class:0,damage:[10,1],armor:0,health:25,morale:1.1,num:200,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Machine Gun`,unitType:[`Infantry`,`Machine Gun`],class:0,damage:[12,2],armor:0,health:100,morale:1,num:800,speed:0.9,artillery:false,engineer:false,recon:false},
        {name:`Machine Gun Company`,unitType:[`Infantry`,`Machine Gun`],class:0,damage:[12,2],armor:0,health:25,morale:1,num:200,speed:0.9,artillery:false,engineer:false,recon:false},
        {name:`Heavy Machine Gun Company`,unitType:[`Infantry`,`Machine Gun`,`Heavy Infantry`],class:0,damage:[15,3],armor:0,health:25,morale:1,num:200,speed:0.72,artillery:false,engineer:false,recon:false},

        {name:`Semi-Motorized Infantry`,unitType:[`Infantry`,`Semi-Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1,num:800,speed:1.5,artillery:false,engineer:false,recon:false},

        {name:`Motorized Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Infantry Company`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:25,morale:1,num:200,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Heavy Infantry Company`,unitType:[`Infantry`,`Motorized`,`Heavy Infantry`],class:0,damage:[12,3],armor:0,health:25,morale:1,num:200,speed:2,artillery:false,engineer:false,recon:false},
        {name:`Weaker Motorized Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:75,morale:0.8,num:600,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Armed Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[11,2],armor:0,health:100,morale:1.05,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:100,morale:1,num:800,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Motorized Machine Gun Company`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:25,morale:1,num:200,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Motorized Reinforced Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,3],armor:0.1,health:100,morale:1.05,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Heavy Machine Gun Company`,unitType:[`Infantry`,`Machine Gun`,`Motorized`,`Heavy Infantry`],class:0,damage:[15,3],armor:0,health:25,morale:1,num:200,speed:1.8,artillery:false,engineer:false,recon:false},
        {name:`Motorized Heavy Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:125,morale:1,num:1000,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Motorized Engineer Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,4],armor:0,health:125,morale:1,num:1000,speed:2.25,artillery:false,engineer:true,recon:false},
        {name:`Motorized Bersaglieri`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:75,morale:1.2,num:600,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Machine Gun Bersaglieri`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:75,morale:1.2,num:600,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Motorized Militia`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:110,morale:1.1,num:800,speed:2.5,artillery:false,engineer:false,recon:false},

        {name:`Motorcycle Infantry`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[10,1],armor:0,health:100,morale:1,num:800,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Infantry Company`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[10,1],armor:0,health:25,morale:1,num:200,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Armed Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[11,1],armor:0,health:100,morale:1.05,num:800,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Bersaglieri`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[10,1],armor:0,health:75,morale:1.2,num:600,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Bersaglieri Company`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[10,1],armor:0,health:25,morale:1.2,num:200,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Police`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[8,1],armor:0.2,health:100,morale:1,num:600,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Infantry Company`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,1],armor:0,health:25,morale:1,num:200,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Heavy Infantry Company`,unitType:[`Infantry`,`Motorized`,`Heavy Infantry`],class:0,damage:[12,2],armor:0,health:25,morale:1,num:200,speed:2.4,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Machine Gun Company`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,1],armor:0,health:25,morale:1,num:200,speed:2.7,artillery:false,engineer:false,recon:false},

        {name:`Mechanized Infantry`,unitType:[`Infantry`,`Tank`],class:0,damage:[10,4],armor:0.5,health:100,morale:1,num:800,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Mechanized Infantry Company`,unitType:[`Infantry`,`Tank`],class:0,damage:[10,4],armor:0.5,health:25,morale:1,num:200,speed:2.25,artillery:false,engineer:false,recon:false},

        {name:`Terrible Tank`,unitType:[`Tank`,`Light`],class:1,damage:[10,4],armor:0.6,health:60,morale:0.4,num:50,speed:1.8,artillery:false,engineer:false,recon:false},
        {name:`Terrible Tank Company`,unitType:[`Tank`,`Light`],class:1,damage:[10,4],armor:0.6,health:20,morale:0.4,num:18,speed:1.8,artillery:false,engineer:false,recon:false},
        {name:`Immobile Terrible Tank Company`,unitType:[`Tank`,`Light`],class:1,damage:[10,4],armor:0.6,health:15,morale:0.4,num:16,speed:0.1,artillery:false,engineer:false,recon:false},
        {name:`Light Tank`,unitType:[`Tank`,`Light`],class:1,damage:[12,6],armor:0.6,health:60,morale:0.5,num:50,speed:2,artillery:false,engineer:false,recon:false},
        {name:`Light Tank Company`,unitType:[`Tank`,`Light`],class:1,damage:[12,6],armor:0.6,health:20,morale:0.5,num:17,speed:2,artillery:false,engineer:false,recon:false},
        {name:`Security Tank`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:40,morale:0.6,num:33,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Security Tank Company`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:10,morale:0.6,num:9,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Medium Tank`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:60,morale:0.6,num:50,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Reduced Medium Tank`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:40,morale:0.6,num:35,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Captured Medium Tank`,unitType:[`Tank`],class:1,damage:[11,11],armor:0.75,health:55,morale:0.6,num:50,speed:1.45,artillery:false,engineer:false,recon:false},
        {name:`Medium Tank Company`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:20,morale:0.6,num:19,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Slighted Medium Tank Company`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:18,morale:0.6,num:17,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Armed Medium Tank Company`,unitType:[`Tank`,`Machine Gun`],class:1,damage:[15,15],armor:0.8,health:20,morale:0.6,num:13,speed:1.2,artillery:false,engineer:false,recon:false},
        {name:`Staff Medium Tank Company`,unitType:[`Tank`,`Headquarters`],class:1,damage:[12,12],armor:0.8,health:10,morale:1.2,num:8,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Poor Medium Tank Company`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:15,morale:0.6,num:13,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Immobile Medium Tank Company`,unitType:[`Tank`],class:1,damage:[10,10],armor:0.8,health:10,morale:0.6,num:13,speed:0.1,artillery:false,engineer:false,recon:false},
        {name:`Heavy Tank`,unitType:[`Tank`,`Heavy`],class:1,damage:[15,12],armor:1,health:75,morale:0.6,num:50,speed:1.125,artillery:false,engineer:false,recon:false},
        {name:`Heavy Tank Company`,unitType:[`Tank`,`Heavy`],class:1,damage:[15,12],armor:1,health:25,morale:0.6,num:17,speed:1.125,artillery:false,engineer:false,recon:false},
        {name:`Slow Tank`,unitType:[`Tank`,`Heavy`],class:1,damage:[12,10],armor:1,health:75,morale:0.6,num:50,speed:1.125,artillery:false,engineer:false,recon:false},
        {name:`Superior Tank`,unitType:[`Tank`,`Superior`],class:1,damage:[15,15],armor:0.8,health:60,morale:0.75,num:50,speed:1.5,artillery:false,engineer:false,recon:false},

        {name:`Armored Car`,unitType:[`Tank`,`Recon`,`Tracked`],class:1,damage:[6,1],armor:0.8,health:50,morale:0.5,num:50,speed:3,artillery:false,engineer:false,recon:true},
        {name:`Armored Car Company`,unitType:[`Tank`,`Recon`,`Tracked`],class:1,damage:[6,1],armor:0.8,health:20,morale:0.5,num:20,speed:3,artillery:false,engineer:false,recon:true},

        {name:`Light Artillery`,unitType:[`Light Artillery`],class:2,damage:[8,10,8,10],armor:0.2,health:20,morale:0.6,num:24,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Coastal Artillery`,unitType:[`Light Artillery`],class:2,damage:[6,8,6,8],armor:0.2,health:12,morale:0.6,num:12,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Small Artillery`,unitType:[`Artillery`],class:2,damage:[6,5,6,5],armor:0.4,health:12,morale:0.8,num:12,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Small Artillery Battery`,unitType:[`Artillery`],class:2,damage:[6,5,2,2],armor:0.4,health:4,morale:0.8,num:4,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Small Fast Artillery`,unitType:[`Artillery`],class:2,damage:[6,10,6,10],armor:0.4,health:12,morale:0.8,num:12,speed:0.85,artillery:true,engineer:false,recon:false},
        {name:`Half Artillery`,unitType:[`Artillery`],class:2,damage:[6,12,6,12],armor:0.4,health:15,morale:0.8,num:8,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Artillery`,unitType:[`Artillery`],class:2,damage:[8,16,8,16],armor:0.4,health:20,morale:0.8,num:24,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Concentrated Artillery`,unitType:[`Artillery`],class:2,damage:[8,16,8,16],armor:0.4,health:20,morale:0.8,num:12,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Heavy Artillery`,unitType:[`Artillery`,`Machine Gun`],class:2,damage:[10,20,10,20],armor:0.5,health:20,morale:0.8,num:12,speed:0.6,artillery:true,engineer:false,recon:false},
        {name:`Semi-Motorized Artillery`,unitType:[`Artillery`,`Semi-Motorized`],class:2,damage:[8,16,8,16],armor:0.4,health:20,morale:0.8,num:12,speed:1.05,artillery:true,engineer:false,recon:false},
        {name:`Motorized Light Artillery`,unitType:[`Light Artillery`,`Motorized`],class:2,damage:[4,10,4,10],armor:0.2,health:20,morale:0.6,num:12,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Small Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[6,5,6,5],armor:0.4,health:12,morale:0.8,num:12,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Small Artillery Battery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[6,5,2,2],armor:0.4,health:4,morale:0.8,num:4,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Group Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[9,15,9,15],armor:0.4,health:24,morale:0.8,num:24,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Half Artillery`,unitType:[`Artillery`],class:2,damage:[6,12,6,12],armor:0.4,health:15,morale:0.8,num:8,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[8,16,8,16],armor:0.4,health:20,morale:0.8,num:24,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Artillery Battery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[8,16,3,5],armor:0.4,health:6,morale:0.8,num:8,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Reduced Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[8,16,8,16],armor:0.4,health:12,morale:0.8,num:16,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Weaker Motorized Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[8,16,,8,16],armor:0.4,health:15,morale:0.6,num:18,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Concentrated Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[8,16,8,16],armor:0.4,health:20,morale:0.8,num:12,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Concentrated Artillery Battery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[8,16,3,5],armor:0.4,health:6,morale:0.8,num:4,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Heavy Artillery`,unitType:[`Artillery`,`Machine Gun`,`Motorized`],class:2,damage:[10,20,10,20],armor:0.5,health:20,morale:0.8,num:12,speed:1.5,artillery:true,engineer:false,recon:false},

        {name:`Mixed Support`,unitType:[`Machine Gun`,`Mortar`,`Anti-Tank`],class:0,damage:[10,8],armor:0.1,health:50,morale:1,num:400,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Motorized Mixed Support`,unitType:[`Machine Gun`,`Motorized`,`Mortar`,`Anti-Tank`],class:0,damage:[10,8],armor:0.1,health:50,morale:1,num:400,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Mixed Support Bersaglieri`,unitType:[`Machine Gun`,`Motorized`,`Mortar`,`Anti-Tank`],class:0,damage:[10,8],armor:0.1,health:50,morale:1.2,num:400,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Engineer Mixed Support`,unitType:[`Machine Gun`,`Mortar`,`Engineer`,`Anti-Tank`],class:0,damage:[10,10],armor:0.1,health:50,morale:1,num:500,speed:1,artillery:false,engineer:true,recon:false},

        {name:`Mixed Combat`,unitType:[`Infantry`,`Engineer`,`Mountain`],class:0,damage:[9,6],armor:0.1,health:80,morale:1.1,num:500,speed:1.05,artillery:false,engineer:true,recon:false},
        {name:`Mixed Infantry`,unitType:[`Infantry`,`Recon`,`Artillery`],class:0,damage:[8,8],armor:0.2,health:80,morale:1,num:500,speed:1.1,artillery:false,engineer:false,recon:false},
        {name:`Motorized Mixed Combat`,unitType:[`Infantry`,`Engineer`,`Mountain`,`Motorized`],class:0,damage:[9,6],armor:0.1,health:80,morale:1.1,num:500,speed:2.625,artillery:false,engineer:true,recon:false},
        {name:`Motorized Mixed Infantry`,unitType:[`Infantry`,`Recon`,`Artillery`,`Motorized`],class:0,damage:[8,8],armor:0.2,health:80,morale:1,num:500,speed:2.75,artillery:false,engineer:false,recon:false},
        {name:`Motorized Mixed Detachment`,unitType:[`Infantry`,`Recon`,`Mountain`,`Motorized`],class:0,damage:[8,4],armor:0.2,health:80,morale:1.2,num:500,speed:2.875,artillery:false,engineer:false,recon:false},

        {name:`Engineer`,unitType:[`Engineer`],class:0,damage:[6,6],armor:0,health:75,morale:1,num:600,speed:1,artillery:false,engineer:true,recon:false},
        {name:`Engineer Company`,unitType:[`Engineer`],class:0,damage:[6,6],armor:0,health:25,morale:1,num:200,speed:1,artillery:false,engineer:true,recon:false},
        {name:`Motorized Engineer`,unitType:[`Engineer`,`Motorized`],class:0,damage:[6,6],armor:0,health:75,morale:1,num:600,speed:2.5,artillery:false,engineer:true,recon:false},
        {name:`Motorized Engineer Company`,unitType:[`Engineer`,`Motorized`],class:0,damage:[6,6],armor:0,health:25,morale:1,num:200,speed:2.5,artillery:false,engineer:true,recon:false},
        {name:`Mixed Engineer`,unitType:[`Engineer`,`Mortar`],class:0,damage:[8,6],armor:0,health:60,morale:1,num:500,speed:0.9,artillery:false,engineer:true,recon:false},
        {name:`Pioneer`,unitType:[`Engineer`],class:0,damage:[4,8],armor:0,health:50,morale:1.1,num:600,speed:1.1,artillery:false,engineer:true,recon:false},
        {name:`Pioneer Company`,unitType:[`Engineer`],class:0,damage:[4,8],armor:0,health:15,morale:1.1,num:200,speed:1.1,artillery:false,engineer:true,recon:false},
        {name:`Mining`,unitType:[`Engineer`],class:0,damage:[4,10],armor:0.2,health:30,morale:0.8,num:600,speed:1,artillery:false,engineer:true,recon:false},
        {name:`Motorized Mining`,unitType:[`Engineer`,`Motorized`],class:0,damage:[4,10],armor:0,health:30,morale:0.8,num:600,speed:2.5,artillery:false,engineer:true,recon:false},
        {name:`Motorized Mining Company`,unitType:[`Engineer`,`Motorized`],class:0,damage:[4,10],armor:0,health:10,morale:0.8,num:200,speed:2.5,artillery:false,engineer:true,recon:false},

        {name:`Anti-Tank`,unitType:[`Anti-Tank`],class:2,damage:[4,24],armor:0.1,health:40,morale:1,num:12,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Anti-Tank Company`,unitType:[`Anti-Tank`],class:2,damage:[4,24],armor:0.1,health:15,morale:1,num:4,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Motorized Anti-Tank`,unitType:[`Anti-Tank`,`Motorized`],class:2,damage:[4,24],armor:0.1,health:40,morale:1,num:12,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Anti-Tank Company`,unitType:[`Anti-Tank`,`Motorized`],class:2,damage:[4,24],armor:0.1,health:15,morale:1,num:4,speed:2.5,artillery:false,engineer:false,recon:false},

        {name:`Flak`,unitType:[`Anti-Air`],class:2,damage:[6,30,6,30],armor:0.1,health:20,morale:1,num:8,speed:0.8,artillery:true,engineer:false,recon:false},
        {name:`Motorized Flak`,unitType:[`Anti-Air`,`Motorized`],class:2,damage:[6,30,6,30],armor:0.1,health:20,morale:1,num:8,speed:2,artillery:true,engineer:false,recon:false},

        {name:`Mortar`,unitType:[`Mortar`],class:2,damage:[12,6],armor:0,health:30,morale:1,num:60,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Mortar Company`,unitType:[`Mortar`],class:2,damage:[12,6],armor:0,health:10,morale:1,num:20,speed:1,artillery:false,engineer:false,recon:false},
        
        {name:`Infantry Gun`,unitType:[`Artillery`,`Infantry`],class:2,damage:[10,6,10,6],armor:0.2,health:30,morale:0.75,num:12,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Infantry Gun Company`,unitType:[`Artillery`,`Infantry`],class:2,damage:[10,6,3,2],armor:0.2,health:10,morale:0.75,num:4,speed:1,artillery:false,engineer:false,recon:false},
    ],unitType:[
        {name:`Infantry`},
        {name:`Machine Gun`},
        {name:`Semi-Motorized`},
        {name:`Motorized`},
        {name:`Motorcycle`},
        {name:`Tank`},
        {name:`Artillery`},
        {name:`Recon`},
        {name:`Light`},
        {name:`Heavy`},
        {name:`Engineer`},
        {name:`Mountain`},
        {name:`Light Artillery`},
        {name:`Mixed`},
        {name:`Anti-Tank`},
        {name:`Anti-Air`},
        {name:`Tracked`},
        {name:`Mortar`},
        {name:`Oasis Infantry`},
        {name:`Superior`},
        {name:`Heavy Infantry`},
        {name:`Headquarters`},
    ],unitLevel:[
        {name:`Division`,symbol:`XX`,size:[55,55,55]},
        {name:`Brigade`,symbol:`X`,size:[45,47.5,47.5]},
        {name:`Regiment`,symbol:`III`,size:[42.5,42.5,42.5]},
        {name:`Battalion`,symbol:`II`,size:[35,35,35]},
        {name:`Company`,symbol:`I`,size:[30,30,30]},
    ],map:[
        {
            name:[`Cyrenaica`,`Reverse`],
            term:`Sonnenblume`,
            unitScale:0.8,
            cityScale:0.8,
            city:[
                {name:`El Agheila`,owner:2,type:1,pos:[130,1412]},
                {name:`Mersa Brega`,owner:2,type:0,pos:[313,1346]},
                {name:`Ghemines`,owner:2,type:0,pos:[479,707]},
                {name:`Carcuna`,owner:2,type:0,pos:[482,806]},
                {name:`Benghazi`,owner:2,type:1,pos:[500,494]},
                {name:`Zuetina`,owner:2,type:0,pos:[514,1086]},
                {name:`Agedabia`,owner:2,type:0,pos:[567,1163]},
                {name:`Soluch`,owner:2,type:0,pos:[573,719]},
                {name:`Beda Fomm`,owner:2,type:0,pos:[578,953]},
                {name:`Regima`,owner:2,type:0,pos:[609,513]},

                {name:`Sceleidima`,owner:2,type:0,pos:[697,768]},
                {name:`Tocra`,owner:2,type:0,pos:[699,275]},
                {name:`El Haseia`,owner:2,type:0,pos:[711,1353]},
                {name:`El Abiar`,owner:2,type:0,pos:[716,451]},
                {name:`Antelat`,owner:2,type:0,pos:[724,962]},
                {name:`Er Rtem`,owner:2,type:0,pos:[738,550]},
                {name:`Barce`,owner:2,type:0,pos:[829,286]},
                {name:`Nahiba`,owner:2,type:0,pos:[848,345]},
                {name:`Maaten el Grara`,owner:2,type:0,pos:[901,1151]},
                {name:`Msus`,owner:2,type:0,pos:[908,778]},

                {name:`Charruba`,owner:2,type:0,pos:[933,469]},
                {name:`d'Annunzio`,owner:2,type:0,pos:[973,240]},
                {name:`Bel Garanis`,owner:2,type:0,pos:[1008,623]},
                {name:`Beda Littoria`,owner:2,type:0,pos:[1103,145]},
                {name:`El Hamama`,owner:2,type:0,pos:[1164,438]},
                {name:`Bir el Gerrari`,owner:2,type:0,pos:[1169,658]},
                {name:`Bir er Rtima`,owner:2,type:0,pos:[1190,824]},
                {name:`Cirene`,owner:2,type:0,pos:[1223,120]},
                {name:`Ben Gania`,owner:2,type:0,pos:[1261,1034]},
                {name:`El Maraghi`,owner:2,type:0,pos:[1297,268]},

                {name:`Mechili`,owner:2,type:0,pos:[1408,448]},
                {name:`Bir Azzagh`,owner:2,type:0,pos:[1466,319]},
                {name:`Tengeder`,owner:2,type:0,pos:[1476,702]},
                {name:`Derna`,owner:2,type:0,pos:[1534,140]},
                {name:`Martuba`,owner:2,type:0,pos:[1600,235]},
                {name:`Bir Halegh`,owner:2,type:0,pos:[1617,449]},
                {name:`Tmimi`,owner:2,type:0,pos:[1703,374]},
                {name:`Bomba`,owner:2,type:0,pos:[1740,294]},
                {name:`Bir Habesc`,owner:2,type:0,pos:[1781,704]},
                {name:`Alem Hamza`,owner:2,type:0,pos:[1842,529]},

                {name:`Hatiat er Rtem`,owner:2,type:0,pos:[1870,1010]},
                {name:`Gazala`,owner:2,type:0,pos:[1873,444]},
                {name:`Bir Hacheim`,owner:2,type:0,pos:[1890,731]},
                {name:`Acroma`,owner:2,type:0,pos:[1956,502]},
                {name:`El Adem`,owner:2,type:0,pos:[2060,602]},
                {name:`Tobruk`,owner:2,type:1,pos:[2068,492]},
                {name:`Bir el Gubi`,owner:2,type:0,pos:[2119,761]},
                {name:`El Duda`,owner:2,type:0,pos:[2136,577]},
                {name:`El Cuasc`,owner:2,type:0,pos:[2188,1025]},
                {name:`Gabr Saleh`,owner:2,type:0,pos:[2267,800]},

                {name:`Gambut`,owner:2,type:0,pos:[2279,572]},
                {name:`Gasr el Arid`,owner:2,type:0,pos:[2324,628]},
                {name:`Mersa Lucch`,owner:2,type:0,pos:[2326,519]},
                {name:`Sidi Omar`,owner:2,type:0,pos:[2451,841]},
                {name:`Sidi Azeiz`,owner:2,type:0,pos:[2468,681]},
                {name:`Fort Capuzzo`,owner:2,type:0,pos:[2489,729]},
                {name:`Fort Maddalena`,owner:2,type:0,pos:[2498,1102]},
                {name:`Bardia`,owner:2,type:0,pos:[2523,639]},
                {name:`Sollum`,owner:0,type:0,pos:[2555,746]},
                {name:`Bir el Khireigat`,owner:0,type:0,pos:[2561,872]},

                {name:`Halfaya Pass`,owner:0,type:0,pos:[2584,792]},
                {name:`Conference Cairn`,owner:0,type:0,pos:[2612,975]},
                {name:`Buq Buq`,owner:0,type:0,pos:[2734,761]},
                {name:`Sofafi`,owner:0,type:0,pos:[2770,912]},
                {name:`Misheifa`,owner:0,type:0,pos:[2889,920]},
                {name:`Sidi Barrani`,owner:0,type:1,pos:[2884,711]},
            ],connect:[
                {name:[`El Agheila`,`Mersa Brega`]},
                {name:[`Mersa Brega`,`Agedabia`]},
                {name:[`Agedabia`,`Zuetina`]},
                {name:[`Agedabia`,`Beda Fomm`]},
                {name:[`Zuetina`,`Beda Fomm`]},
                {name:[`Beda Fomm`,`Carcuna`]},
                {name:[`Carcuna`,`Ghemines`]},
                {name:[`Ghemines`,`Benghazi`]},
                {name:[`Benghazi`,`Tocra`]},
                {name:[`Tocra`,`Barce`]},
                
                {name:[`Barce`,`d'Annunzio`]},
                {name:[`d'Annunzio`,`Beda Littoria`]},
                {name:[`Beda Littoria`,`Cirene`]},
                {name:[`Cirene`,`Derna`]},
                {name:[`Derna`,`Martuba`]},
                {name:[`Martuba`,`Bomba`]},
                {name:[`Bomba`,`Tmimi`]},
                {name:[`Tmimi`,`Gazala`]},
                {name:[`Gazala`,`Acroma`]},
                {name:[`Acroma`,`Tobruk`]},

                {name:[`Tobruk`,`El Duda`]},
                {name:[`El Duda`,`Gambut`]},
                {name:[`Gambut`,`Mersa Lucch`]},
                {name:[`Gambut`,`Bardia`]},
                {name:[`Bardia`,`Fort Capuzzo`]},
                {name:[`Fort Capuzzo`,`Sollum`]},
                {name:[`Sollum`,`Halfaya Pass`]},
                {name:[`Halfaya Pass`,`Buq Buq`]},
                {name:[`Sidi Barrani`,`Buq Buq`]},
                {name:[`Benghazi`,`Regima`]},

                {name:[`Regima`,`El Abiar`]},
                {name:[`El Abiar`,`Nahiba`]},
                {name:[`Nahiba`,`Barce`]},
                {name:[`El Abiar`,`Charruba`]},
                {name:[`Charruba`,`El Hamama`]},
                {name:[`El Hamama`,`Mechili`]},
                {name:[`Mechili`,`El Maraghi`]},
                {name:[`El Maraghi`,`Cirene`]},
                {name:[`Mechili`,`Bir Azzagh`]},
                {name:[`Bir Azzagh`,`Derna`]},

                {name:[`Mechili`,`Bir Halegh`]},
                {name:[`Bir Halegh`,`Tmimi`]},
                {name:[`Ghemines`,`Soluch`]},
                {name:[`Soluch`,`Sceleidima`]},
                {name:[`Sceleidima`,`Msus`]},
                {name:[`Msus`,`Bel Garanis`]},
                {name:[`Bel Garanis`,`Charruba`]},
                {name:[`Msus`,`Bir el Gerrari`]},
                {name:[`Bir el Gerrari`,`Mechili`]},
                {name:[`Bir el Gerrari`,`Bir er Rtima`]},

                {name:[`Bir er Rtima`,`Tengeder`]},
                {name:[`Tengeder`,`Mechili`]},
                {name:[`Tengeder`,`Bir Habesc`]},
                {name:[`Bir Habesc`,`Bir Hacheim`]},
                {name:[`Bir Hacheim`,`El Adem`]},
                {name:[`El Adem`,`Tobruk`]},
                {name:[`Bir Habesc`,`Alem Hamza`]},
                {name:[`Alem Hamza`,`Gazala`]},
                {name:[`Alem Hamza`,`Acroma`]},
                {name:[`El Adem`,`El Duda`]},

                {name:[`Sceleidima`,`Er Rtem`]},
                {name:[`Er Rtem`,`El Abiar`]},
                {name:[`Soluch`,`Beda Fomm`]},
                {name:[`Sceleidima`,`Antelat`]},
                {name:[`Msus`,`Antelat`]},
                {name:[`Antelat`,`Beda Fomm`]},
                {name:[`Antelat`,`Agedabia`]},
                {name:[`Agedabia`,`El Haseia`]},
                {name:[`Mersa Brega`,`El Haseia`]},
                {name:[`El Haseia`,`Maaten el Grara`]},

                {name:[`Maaten el Grara`,`Ben Gania`]},
                {name:[`Ben Gania`,`Tengeder`]},
                {name:[`Ben Gania`,`Bir er Rtima`]},
                {name:[`Bir Hacheim`,`Hatiat er Rtem`]},
                {name:[`El Adem`,`Bir el Gubi`]},
                {name:[`Bir el Gubi`,`Gabr Saleh`]},
                {name:[`Gabr Saleh`,`Sidi Omar`]},
                {name:[`Bir el Gubi`,`El Cuasc`]},
                {name:[`Gabr Saleh`,`El Cuasc`]},
                {name:[`Sidi Omar`,`Fort Maddalena`]},

                {name:[`Gabr Saleh`,`Sidi Azeiz`]},
                {name:[`Sidi Azeiz`,`Bardia`]},
                {name:[`Sidi Azeiz`,`Gasr el Arid`]},
                {name:[`Gasr el Arid`,`El Duda`]},
                {name:[`Sidi Azeiz`,`Fort Capuzzo`]},
                {name:[`Fort Capuzzo`,`Sidi Omar`]},
                {name:[`Sidi Omar`,`Bir el Khireigat`]},
                {name:[`Bir el Khireigat`,`Halfaya Pass`]},
                {name:[`Bir el Khireigat`,`Conference Cairn`]},
                {name:[`Conference Cairn`,`Fort Maddalena`]},

                {name:[`Conference Cairn`,`Sofafi`]},
                {name:[`Sofafi`,`Misheifa`]},
                {name:[`Misheifa`,`Sidi Barrani`]},
                {name:[`Sidi Omar`,`Sollum`]},
                {name:[`Bir el Gubi`,`Bir Hacheim`]},
                {name:[`Fort Maddalena`,`El Cuasc`]},
                {name:[`El Cuasc`,`Hatiat er Rtem`]},
                {name:[`Hatiat er Rtem`,`Ben Gania`]},
                {name:[`Buq Buq`,`Sofafi`]},
                {name:[`Nahiba`,`Charruba`]},
            ],team:[
                {name:`British`,term:`britain`,player:0,quality:1},
                {name:`New Zealand`,term:`new zealand`,player:0,quality:1.05},
                {name:`South African`,term:`south africa`,player:0,quality:0.9},
                {name:`Polish`,term:`poland`,player:0,quality:1},
                {name:`Australian`,term:`australia`,player:0,quality:1.05},
                {name:`Czechoslovak`,term:`czechoslovakia`,player:0,quality:1},
                {name:`Māori`,term:`maori`,player:0,quality:1.05},
                {name:`Indian`,term:`india`,player:0,quality:1},
                {name:`German`,term:`germany`,player:1,quality:1.2},
                {name:`Italian`,term:`italy`,player:2,quality:0.8},
                {name:`Blackshirt`,term:`blackshirt`,player:2,quality:0.6},
            ],player:[
                {name:`British`,color:[0,100,250],side:0},
                {name:`German`,color:[150,50,0],side:1},
                {name:`Italian`,color:[0,200,0],side:1},
            ],side:[
                {name:`Allied`,supply:25},
                {name:`Axis`,supply:20},
            ],unit:[
                {
                    name:`Operation Compass`,
                    battalions:[[0],[0,0]],bonus:false,partition:[[0],[2]],
                    unit:[
                        /*{
                            level:2,type:[`Artillery`],team:`Italian`,
                            desc:[`10th Corps Artillery Regiment`,`10° Reggimento Artiglieria di Corpo d'Armata`],name:`10`,designation:`Corps`,commander:`Infante`,icon:``,
                            pos:[827,474],
                            elements:[
                                {level:3,type:`Small Artillery`,team:`Italian`,desc:[`17th Group, 10th Corps Artillery Regiment`,`XVII Gruppo, 10° Reggimento Artiglieria di Corpo d'Armata`],name:`17`,designation:``,commander:`Locarno`},
                                {level:3,type:`Small Artillery`,team:`Italian`,desc:[`35th Group, 10th Corps Artillery Regiment`,`XXXV Gruppo, 10° Reggimento Artiglieria di Corpo d'Armata`],name:`35`,designation:``,commander:`Pirisi`},
                            ],
                        },{
                            level:2,type:[`Artillery`],team:`Italian`,
                            desc:[`22nd Corps Artillery Regiment`,`22° Reggimento Artiglieria di Corpo d'Armata`],name:`22`,designation:`Corps`,commander:`Sardi`,icon:``,
                            pos:[827,474],
                            elements:[
                                {level:3,type:`Small Artillery`,team:`Italian`,desc:[`42nd Group, 22nd Corps Artillery Regiment`,`XLII Gruppo, 22° Reggimento Artiglieria di Corpo d'Armata`],name:`42`,designation:``,commander:`Battaglini`},
                                {level:3,type:`Small Artillery`,team:`Italian`,desc:[`43rd Group, 22nd Corps Artillery Regiment`,`XLIII Gruppo, 22° Reggimento Artiglieria di Corpo d'Armata`],name:`43`,designation:``,commander:`Bombagli`},
                            ],
                        },{
                            level:2,type:[`Artillery`],team:`Italian`,
                            desc:[`25th Corps Artillery Regiment`,`25° Reggimento Artiglieria di Corpo d'Armata`],name:`25`,designation:`Corps`,commander:`Bellini`,icon:``,
                            pos:[827,474],
                            elements:[
                                {level:3,type:`Small Artillery`,team:`Italian`,desc:[`105th Group, 25th Corps Artillery Regiment`,`CV Gruppo, 25° Reggimento Artiglieria di Corpo d'Armata`],name:`105`,designation:``,commander:`Manca`},
                                {level:3,type:`Small Artillery`,team:`Italian`,desc:[`130th Group, 25th Corps Artillery Regiment`,`CXXX Gruppo, 25° Reggimento Artiglieria di Corpo d'Armata`],name:`130`,designation:``,commander:`Biondi-Morra`},
                                {level:3,type:`Small Artillery`,team:`Italian`,desc:[`148th Group, 25th Corps Artillery Regiment`,`CXLVIII Gruppo, 25° Reggimento Artiglieria di Corpo d'Armata`],name:`148`,designation:``,commander:`Petitti`},
                                {level:3,type:`Small Artillery`,team:`Italian`,desc:[`150th Group, 25th Corps Artillery Regiment`,`CL Gruppo, 25° Reggimento Artiglieria di Corpo d'Armata`],name:`150`,designation:``,commander:`Lazzarini`},
                            ],
                        },*/
                    ],
                },
            ],reserve:[
            ],
        },{
            name:[`Cyrenaica`,`Base`],
            term:`Sonnenblume`,
            unitScale:0.8,
            cityScale:0.8,
            city:[
                {name:`El Agheila`,owner:2,type:1,pos:[130,1412]},
                {name:`Mersa Brega`,owner:0,type:0,pos:[313,1346]},
                {name:`Ghemines`,owner:0,type:0,pos:[479,707]},
                {name:`Carcuna`,owner:0,type:0,pos:[482,806]},
                {name:`Benghazi`,owner:0,type:1,pos:[500,494]},
                {name:`Zuetina`,owner:0,type:0,pos:[514,1086]},
                {name:`Agedabia`,owner:0,type:0,pos:[567,1163]},
                {name:`Soluch`,owner:0,type:0,pos:[573,719]},
                {name:`Beda Fomm`,owner:0,type:0,pos:[578,953]},
                {name:`Regima`,owner:0,type:0,pos:[609,513]},

                {name:`Sceleidima`,owner:0,type:0,pos:[697,768]},
                {name:`Tocra`,owner:0,type:0,pos:[699,275]},
                {name:`El Haseia`,owner:0,type:0,pos:[711,1353]},
                {name:`El Abiar`,owner:0,type:0,pos:[716,451]},
                {name:`Antelat`,owner:0,type:0,pos:[724,962]},
                {name:`Er Rtem`,owner:0,type:0,pos:[738,550]},
                {name:`Barce`,owner:0,type:0,pos:[829,286]},
                {name:`Nahiba`,owner:0,type:0,pos:[848,345]},
                {name:`Maaten el Grara`,owner:0,type:0,pos:[901,1151]},
                {name:`Msus`,owner:0,type:0,pos:[908,778]},

                {name:`Charruba`,owner:0,type:0,pos:[933,469]},
                {name:`d'Annunzio`,owner:0,type:0,pos:[973,240]},
                {name:`Bel Garanis`,owner:0,type:0,pos:[1008,623]},
                {name:`Beda Littoria`,owner:0,type:0,pos:[1103,145]},
                {name:`El Hamama`,owner:0,type:0,pos:[1164,438]},
                {name:`Bir el Gerrari`,owner:0,type:0,pos:[1169,658]},
                {name:`Bir er Rtima`,owner:0,type:0,pos:[1190,824]},
                {name:`Cirene`,owner:0,type:0,pos:[1223,120]},
                {name:`Ben Gania`,owner:0,type:0,pos:[1261,1034]},
                {name:`El Maraghi`,owner:0,type:0,pos:[1297,268]},

                {name:`Mechili`,owner:0,type:0,pos:[1408,448]},
                {name:`Bir Azzagh`,owner:0,type:0,pos:[1466,319]},
                {name:`Tengeder`,owner:0,type:0,pos:[1476,702]},
                {name:`Derna`,owner:0,type:0,pos:[1534,140]},
                {name:`Martuba`,owner:0,type:0,pos:[1600,235]},
                {name:`Bir Halegh`,owner:0,type:0,pos:[1617,449]},
                {name:`Tmimi`,owner:0,type:0,pos:[1703,374]},
                {name:`Bomba`,owner:0,type:0,pos:[1740,294]},
                {name:`Bir Habesc`,owner:0,type:0,pos:[1781,704]},
                {name:`Alem Hamza`,owner:0,type:0,pos:[1842,529]},

                {name:`Hatiat er Rtem`,owner:0,type:0,pos:[1870,1010]},
                {name:`Gazala`,owner:0,type:0,pos:[1873,444]},
                {name:`Bir Hacheim`,owner:0,type:0,pos:[1890,731]},
                {name:`Acroma`,owner:0,type:0,pos:[1956,502]},
                {name:`El Adem`,owner:0,type:0,pos:[2060,602]},
                {name:`Tobruk`,owner:0,type:1,pos:[2068,492]},
                {name:`Bir el Gubi`,owner:0,type:0,pos:[2119,761]},
                {name:`El Duda`,owner:0,type:0,pos:[2136,577]},
                {name:`El Cuasc`,owner:0,type:0,pos:[2188,1025]},
                {name:`Gabr Saleh`,owner:0,type:0,pos:[2267,800]},

                {name:`Gambut`,owner:0,type:0,pos:[2279,572]},
                {name:`Gasr el Arid`,owner:0,type:0,pos:[2324,628]},
                {name:`Mersa Lucch`,owner:0,type:0,pos:[2326,519]},
                {name:`Sidi Omar`,owner:0,type:0,pos:[2451,841]},
                {name:`Sidi Azeiz`,owner:0,type:0,pos:[2468,681]},
                {name:`Fort Capuzzo`,owner:0,type:0,pos:[2489,729]},
                {name:`Fort Maddalena`,owner:0,type:0,pos:[2498,1102]},
                {name:`Bardia`,owner:0,type:0,pos:[2523,639]},
                {name:`Sollum`,owner:0,type:0,pos:[2555,746]},
                {name:`Bir el Khireigat`,owner:0,type:0,pos:[2561,872]},

                {name:`Halfaya Pass`,owner:0,type:0,pos:[2584,792]},
                {name:`Conference Cairn`,owner:0,type:0,pos:[2612,975]},
                {name:`Buq Buq`,owner:0,type:0,pos:[2734,761]},
                {name:`Sofafi`,owner:0,type:0,pos:[2770,912]},
                {name:`Misheifa`,owner:0,type:0,pos:[2889,920]},
                {name:`Sidi Barrani`,owner:0,type:1,pos:[2884,711]},
            ],connect:[
                {name:[`El Agheila`,`Mersa Brega`]},
                {name:[`Mersa Brega`,`Agedabia`]},
                {name:[`Agedabia`,`Zuetina`]},
                {name:[`Agedabia`,`Beda Fomm`]},
                {name:[`Zuetina`,`Beda Fomm`]},
                {name:[`Beda Fomm`,`Carcuna`]},
                {name:[`Carcuna`,`Ghemines`]},
                {name:[`Ghemines`,`Benghazi`]},
                {name:[`Benghazi`,`Tocra`]},
                {name:[`Tocra`,`Barce`]},
                
                {name:[`Barce`,`d'Annunzio`]},
                {name:[`d'Annunzio`,`Beda Littoria`]},
                {name:[`Beda Littoria`,`Cirene`]},
                {name:[`Cirene`,`Derna`]},
                {name:[`Derna`,`Martuba`]},
                {name:[`Martuba`,`Bomba`]},
                {name:[`Bomba`,`Tmimi`]},
                {name:[`Tmimi`,`Gazala`]},
                {name:[`Gazala`,`Acroma`]},
                {name:[`Acroma`,`Tobruk`]},

                {name:[`Tobruk`,`El Duda`]},
                {name:[`El Duda`,`Gambut`]},
                {name:[`Gambut`,`Mersa Lucch`]},
                {name:[`Gambut`,`Bardia`]},
                {name:[`Bardia`,`Fort Capuzzo`]},
                {name:[`Fort Capuzzo`,`Sollum`]},
                {name:[`Sollum`,`Halfaya Pass`]},
                {name:[`Halfaya Pass`,`Buq Buq`]},
                {name:[`Sidi Barrani`,`Buq Buq`]},
                {name:[`Benghazi`,`Regima`]},

                {name:[`Regima`,`El Abiar`]},
                {name:[`El Abiar`,`Nahiba`]},
                {name:[`Nahiba`,`Barce`]},
                {name:[`El Abiar`,`Charruba`]},
                {name:[`Charruba`,`El Hamama`]},
                {name:[`El Hamama`,`Mechili`]},
                {name:[`Mechili`,`El Maraghi`]},
                {name:[`El Maraghi`,`Cirene`]},
                {name:[`Mechili`,`Bir Azzagh`]},
                {name:[`Bir Azzagh`,`Derna`]},

                {name:[`Mechili`,`Bir Halegh`]},
                {name:[`Bir Halegh`,`Tmimi`]},
                {name:[`Ghemines`,`Soluch`]},
                {name:[`Soluch`,`Sceleidima`]},
                {name:[`Sceleidima`,`Msus`]},
                {name:[`Msus`,`Bel Garanis`]},
                {name:[`Bel Garanis`,`Charruba`]},
                {name:[`Msus`,`Bir el Gerrari`]},
                {name:[`Bir el Gerrari`,`Mechili`]},
                {name:[`Bir el Gerrari`,`Bir er Rtima`]},

                {name:[`Bir er Rtima`,`Tengeder`]},
                {name:[`Tengeder`,`Mechili`]},
                {name:[`Tengeder`,`Bir Habesc`]},
                {name:[`Bir Habesc`,`Bir Hacheim`]},
                {name:[`Bir Hacheim`,`El Adem`]},
                {name:[`El Adem`,`Tobruk`]},
                {name:[`Bir Habesc`,`Alem Hamza`]},
                {name:[`Alem Hamza`,`Gazala`]},
                {name:[`Alem Hamza`,`Acroma`]},
                {name:[`El Adem`,`El Duda`]},

                {name:[`Sceleidima`,`Er Rtem`]},
                {name:[`Er Rtem`,`El Abiar`]},
                {name:[`Soluch`,`Beda Fomm`]},
                {name:[`Sceleidima`,`Antelat`]},
                {name:[`Msus`,`Antelat`]},
                {name:[`Antelat`,`Beda Fomm`]},
                {name:[`Antelat`,`Agedabia`]},
                {name:[`Agedabia`,`El Haseia`]},
                {name:[`Mersa Brega`,`El Haseia`]},
                {name:[`El Haseia`,`Maaten el Grara`]},

                {name:[`Maaten el Grara`,`Ben Gania`]},
                {name:[`Ben Gania`,`Tengeder`]},
                {name:[`Ben Gania`,`Bir er Rtima`]},
                {name:[`Bir Hacheim`,`Hatiat er Rtem`]},
                {name:[`El Adem`,`Bir el Gubi`]},
                {name:[`Bir el Gubi`,`Gabr Saleh`]},
                {name:[`Gabr Saleh`,`Sidi Omar`]},
                {name:[`Bir el Gubi`,`El Cuasc`]},
                {name:[`Gabr Saleh`,`El Cuasc`]},
                {name:[`Sidi Omar`,`Fort Maddalena`]},

                {name:[`Gabr Saleh`,`Sidi Azeiz`]},
                {name:[`Sidi Azeiz`,`Bardia`]},
                {name:[`Sidi Azeiz`,`Gasr el Arid`]},
                {name:[`Gasr el Arid`,`El Duda`]},
                {name:[`Sidi Azeiz`,`Fort Capuzzo`]},
                {name:[`Fort Capuzzo`,`Sidi Omar`]},
                {name:[`Sidi Omar`,`Bir el Khireigat`]},
                {name:[`Bir el Khireigat`,`Halfaya Pass`]},
                {name:[`Bir el Khireigat`,`Conference Cairn`]},
                {name:[`Conference Cairn`,`Fort Maddalena`]},

                {name:[`Conference Cairn`,`Sofafi`]},
                {name:[`Sofafi`,`Misheifa`]},
                {name:[`Misheifa`,`Sidi Barrani`]},
                {name:[`Sidi Omar`,`Sollum`]},
                {name:[`Bir el Gubi`,`Bir Hacheim`]},
                {name:[`Fort Maddalena`,`El Cuasc`]},
                {name:[`El Cuasc`,`Hatiat er Rtem`]},
                {name:[`Hatiat er Rtem`,`Ben Gania`]},
                {name:[`Buq Buq`,`Sofafi`]},
                {name:[`Nahiba`,`Charruba`]},
            ],team:[
                {name:`British`,term:`britain`,player:0,quality:1},
                {name:`New Zealand`,term:`new zealand`,player:0,quality:1.05},
                {name:`South African`,term:`south africa`,player:0,quality:0.9},
                {name:`Polish`,term:`poland`,player:0,quality:1},
                {name:`Australian`,term:`australia`,player:0,quality:1.05},
                {name:`Czechoslovak`,term:`czechoslovakia`,player:0,quality:1},
                {name:`Māori`,term:`maori`,player:0,quality:1.05},
                {name:`Indian`,term:`india`,player:0,quality:1},
                {name:`German`,term:`germany`,player:1,quality:1.2},
                {name:`Italian`,term:`italy`,player:2,quality:0.85},
            ],player:[
                {name:`British`,color:[0,100,250],side:0},
                {name:`German`,color:[150,50,0],side:1},
                {name:`Italian`,color:[0,200,0],side:1},
            ],side:[
                {name:`Allied`,supply:25},
                {name:`Axis`,supply:20},
            ],unit:[
                {
                    name:`Operation Sonnenblume`,
                    battalions:[[13],[6,6]],bonus:false,partition:[[0],[1],[2]],
                    unit:[
                        {
                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                            desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:`de Salis`,icon:``,
                            pos:[2884,736],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:`de Salis`},
                            ],
                        },{
                            level:0,type:[`Tank`],team:`British`,
                            desc:[`2nd Armored Division`,`2nd Armoured Division`],name:`2`,designation:``,commander:`Gambier-Parry`,icon:`2a`,
                            pos:[1408,448],
                            elements:[
                                {
                                    level:1,type:[`Tank`,`Light`],team:`British`,
                                    desc:[`3rd Armored Brigade`,`3rd Armoured Brigade`],name:`3`,designation:``,commander:`Rimington`,icon:`3ab`,
                                    pos:[908,778],
                                    elements:[
                                        {level:3,type:`Terrible Tank`,team:`British`,desc:`3rd The King's Own Hussars`,name:`3`,designation:`King's Own\nHussars`,commander:`Petherick`},
                                        {level:3,type:`Terrible Tank`,team:`British`,desc:[`5th Battalion, Royal Tank Regiment`,`5th Royal Tank Regiment`],name:`5`,designation:`Royal Tank\nRegiment`,commander:`Carver`},
                                        {level:3,type:`Terrible Tank`,team:`British`,desc:[`6th Battalion, Royal Tank Regiment`,`6th Royal Tank Regiment`],name:`6`,designation:`Royal Tank\nRegiment`,commander:`Harland`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Artillery`,`Motorized`],team:`British`,
                                    desc:`2nd Support Group`,name:`2`,designation:``,commander:``,icon:`2a`,
                                    pos:[313,1346],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, Tower Hamlets Rifles`,name:`1`,designation:`Tower\nHamlets`,commander:``},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`104th Battalion, Royal Horse Artillery`,`104th Regiment, Royal Horse Artillery`],name:`104`,designation:`Royal\nHorse`,commander:`Matthew`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`3rd Indian Motor Brigade`,name:`3`,designation:``,commander:`Vaughan`,icon:``,
                                    pos:[1600,235],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`2nd Royal Lancers`,name:`2`,designation:`Royal\nLancers`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:[`11th Frontier Force Cavalry Battalion "Prince Albert Victor's Own"`,`11th Prince Albert Victor's Own Cavalry (11th Frontier Force)`],name:`11`,designation:`PAVO`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:[`18th Cavalry Battalion "King Edward VII's Own"`,`18th King Edward VII's Own Cavalry`],name:`18`,designation:`King Edward\nVII's Own`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`British`,
                                    desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`,icon:`2a`,
                                    pos:[1476,702],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`British`,desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`},
                                    ],
                                },
                            ],
                        },{
                            level:1,type:[`Infantry`,`Motorized`],team:`Australian`,
                            desc:`20th Australian Infantry Brigade`,name:`20`,designation:``,commander:`Murray`,icon:`9a`,
                            pos:[530,504],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`Australian`,desc:[`13th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/13th Australian Infantry Battalion`],name:`2/13`,designation:``,commander:`Burrows`},
                                {level:3,type:`Motorized Infantry`,team:`Australian`,desc:[`15th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/15th Australian Infantry Battalion`],name:`2/15`,designation:``,commander:`Ogle`},
                                {level:3,type:`Motorized Infantry`,team:`Australian`,desc:[`17th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/17th Australian Infantry Battalion`],name:`2/17`,designation:``,commander:`Crawford`},
                            ],
                        },{
                            level:0,type:[`Tank`],team:`German`,
                            desc:[`15th Panzer Division`,`15. Panzer-Division`],name:`15`,designation:``,commander:`Neumann-Silkow`,icon:`15pz`,
                            pos:[80,1502],
                            elements:[
                                {
                                    level:2,type:[`Tank`],team:`German`,
                                    desc:[`8th Panzer Regiment`,`Panzer-Regiment 8`],name:`8`,designation:``,commander:`Cramer`,icon:`15pz`,
                                    pos:[160,1502],
                                    elements:[
                                        {level:3,type:`Reduced Medium Tank`,team:`German`,desc:[`1st Battalion, 8th Panzer Regiment`,`I./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:`Crohn`},
                                        {level:3,type:`Reduced Medium Tank`,team:`German`,desc:[`2nd Battalion, 8th Panzer Regiment`,`II./Panzer-Regiment 8`],name:`2`,designation:`8`,commander:`Ramsauer`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`200th Special Purpose Regimental Staff`,`Regimentsstab z.b.V. 200`],name:`200`,designation:`z.b.V.`,commander:`Geißler`,icon:`15pz`,
                                    pos:[235,1502],
                                    elements:[
                                        {level:3,type:`Motorized Machine Gun`,team:`German`,desc:[`2nd Machine Gun Battalion`,`2. Maschinengewehr-Bataillon`],name:`2`,designation:``,commander:`Voigtsberger`},
                                        {level:3,type:`Motorized Anti-Tank`,team:`German`,desc:[`33rd Anti-Tank Battalion`,`Panzerjäger-Abteilung 33`],name:`33`,designation:``,commander:`Beil`}, 
                                        {level:3,type:`Motorized Engineer`,team:`German`,desc:[`33rd Engineer Battalion`,`Panzer-Pionier-Bataillon 33`],name:`33`,designation:``,commander:`Oberembt`}, 
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`German`,
                                    desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`Héraucourt`,icon:`15pz`,
                                    pos:[305,1502],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`German`,desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`Héraucourt`}, 
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`102nd Infantry Division "Trento"`,`102ª Divisione di Fanteria Motorizzata "Trento"`],name:`102`,designation:`Trento`,commander:`Stampioni`,icon:`trento`,
                            pos:[80,1422],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`61st Infantry Regiment`,`61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[160,1422],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 61st Infantry Regiment`,`I Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 61st Infantry Regiment`,`II Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`},
                                        {level:3,type:`Mixed Support`,team:`Italian`,desc:[`3rd Mixed Support Battalion, 61st Motorized Infantry Regiment`,`III Battaglione Armi d'Accompagnamento, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`61`,commander:`Rabezzana`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`62nd Infantry Regiment`,`62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[235,1422],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 62nd Infantry Regiment`,`I Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 62nd Infantry Regiment`,`II Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`},
                                        {level:3,type:`Mixed Support`,team:`Italian`,desc:[`3rd Mixed Support Battalion, 62nd Motorized Infantry Regiment`,`III Battaglione Armi d'Accompagnamento, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`62`,commander:`Gennaro`},
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],reserve:[
            ],
        },{
            name:[`Marmarica`,`Base`],
            term:`Crusader`,
            unitScale:1,
            cityScale:1,
            city:[
                {name:`Gazala`,owner:2,type:1,pos:[323,47]},
                {name:`Tobruk`,owner:0,type:1,pos:[916,175]},
                {name:`Alem Hamza`,owner:2,type:0,pos:[92,172]},
                {name:`Acroma`,owner:2,type:0,pos:[581,198]},
                {name:`Mersa Lucch`,owner:1,type:0,pos:[1716,303]},
                {name:`Gambut`,owner:1,type:0,pos:[1554,434]},
                {name:`Knightsbridge`,owner:2,type:0,pos:[480,441]},
                {name:`El Duda`,owner:1,type:0,pos:[1072,461]},
                {name:`Rotonda Mteifel`,owner:2,type:1,pos:[86,464]},
                {name:`El Adem`,owner:2,type:0,pos:[827,474]},

                {name:`Zaafran`,owner:1,type:0,pos:[1243,482]},
                {name:`Bir el Harmat`,owner:2,type:0,pos:[378,564]},
                {name:`Sidi Rezegh`,owner:1,type:0,pos:[1141,566]},
                {name:`Bir el Chleta`,owner:1,type:0,pos:[1432,570]},
                {name:`Bir el Menastir`,owner:1,type:0,pos:[2098,593]},
                {name:`Bir Bu Creimisa`,owner:2,type:0,pos:[1028,617]},
                {name:`Gasr el Arid`,owner:1,type:0,pos:[1634,628]},
                {name:`Bardia`,owner:2,type:0,pos:[2284,671]},
                {name:`Bir el Haleizim`,owner:1,type:0,pos:[1338,685]},
                {name:`Bir el Hariga`,owner:1,type:0,pos:[1858,722]},

                {name:`Bir el Haiad`,owner:2,type:0,pos:[993,728]},
                {name:`Sidi Azeiz`,owner:1,type:0,pos:[2069,780]},
                {name:`Bir Beuid`,owner:2,type:0,pos:[671,788]},
                {name:`Bir Hacheim`,owner:2,type:0,pos:[191,795]},
                {name:`Fort Capuzzo`,owner:2,type:0,pos:[2245,937]},
                {name:`Taieb el Esem`,owner:2,type:0,pos:[1222,959]},
                {name:`Bir el Gubi`,owner:2,type:0,pos:[946,961]},
                {name:`Sollum`,owner:2,type:0,pos:[2358,967]},
                {name:`Bir Ghirba`,owner:2,type:0,pos:[2104,1017]},
                {name:`Retma`,owner:2,type:0,pos:[660,1038]},

                {name:`Halfaya Pass`,owner:2,type:0,pos:[2405,1069]},
                {name:`Buq Buq`,owner:0,type:1,pos:[2896,1027]},
                {name:`Omar Nuovo`,owner:2,type:0,pos:[2091,1113]},
                {name:`Bir Bu Deheua`,owner:2,type:0,pos:[1865,1124]},
                {name:`Libyan Omar`,owner:2,type:0,pos:[1993,1136]},
                {name:`Gabr Saleh`,owner:2,type:0,pos:[1386,1151]},
                {name:`Sidi Omar`,owner:2,type:0,pos:[2005,1197]},
                {name:`Alam Samalus`,owner:0,type:0,pos:[2867,1213]},
                {name:`Sidi Suleiman`,owner:-1,type:0,pos:[2281,1230]},
                {name:`Bir Gibni`,owner:2,type:0,pos:[1737,1251]},

                {name:`Bir Sheferzen`,owner:0,type:0,pos:[1950,1282]},
                {name:`Halfway House`,owner:0,type:0,pos:[2653,1344]},
                {name:`Bir el Khireigat`,owner:0,type:0,pos:[2276,1365]},
                {name:`Gasr el Abid`,owner:-1,type:0,pos:[1932,1386]},
                {name:`El Cuasc`,owner:2,type:0,pos:[1062,1469]},
                {name:`Sofafi`,owner:0,type:1,pos:[2937,1420]},
                {name:`Bir Habata`,owner:0,type:0,pos:[2774,1542]},
                {name:`Conference Cairn`,owner:0,type:0,pos:[2440,1562]},
            ],connect:[
                {name:[`Gazala`,`Alem Hamza`]},
                {name:[`Gazala`,`Acroma`]},
                {name:[`Tobruk`,`Acroma`]},
                {name:[`El Adem`,`Knightsbridge`]},
                {name:[`Acroma`,`Knightsbridge`]},
                {name:[`Bir el Harmat`,`Knightsbridge`]},
                {name:[`Bir el Harmat`,`Rotonda Mteifel`]},
                {name:[`Bir el Harmat`,`Bir Hacheim`]},
                {name:[`El Adem`,`Tobruk`]},
                {name:[`Tobruk`,`El Duda`]},

                {name:[`El Adem`,`El Duda`]},
                {name:[`Rotonda Mteifel`,`Alem Hamza`]},
                {name:[`Bir Hacheim`,`Rotonda Mteifel`]},
                {name:[`Bir Hacheim`,`Retma`]},
                {name:[`Bir el Gubi`,`Retma`]},
                {name:[`Zaafran`,`El Duda`]},
                {name:[`Sidi Rezegh`,`El Duda`]},
                {name:[`Sidi Rezegh`,`Zaafran`]},
                {name:[`Zaafran`,`Gambut`]},
                {name:[`Zaafran`,`Bir el Chleta`]},
                
                {name:[`Bir el Menastir`,`Gambut`]},
                {name:[`Bir el Menastir`,`Bardia`]},
                {name:[`Sidi Rezegh`,`Bir Bu Creimisa`]},
                {name:[`El Adem`,`Bir Bu Creimisa`]},
                {name:[`Bir el Haiad`,`Bir Bu Creimisa`]},
                {name:[`Bir el Haiad`,`Bir el Gubi`]},
                {name:[`Taieb el Esem`,`Bir el Gubi`]},
                {name:[`Taieb el Esem`,`Gabr Saleh`]},
                {name:[`El Cuasc`,`Bir el Gubi`]},
                {name:[`El Cuasc`,`Gabr Saleh`]},

                {name:[`Bir Gibni`,`Gabr Saleh`]},
                {name:[`Sidi Rezegh`,`Bir el Haleizim`]},
                {name:[`Bir el Chleta`,`Bir el Haleizim`]},
                {name:[`Taieb el Esem`,`Bir el Haleizim`]},
                {name:[`Bir el Chleta`,`Gasr el Arid`]},
                {name:[`Bir el Hariga`,`Gasr el Arid`]},
                {name:[`Bir el Hariga`,`Sidi Azeiz`]},
                {name:[`Bir el Menastir`,`Sidi Azeiz`]},
                {name:[`Fort Capuzzo`,`Sidi Azeiz`]},
                {name:[`Fort Capuzzo`,`Bardia`]},

                {name:[`Fort Capuzzo`,`Sollum`]},
                {name:[`Fort Capuzzo`,`Bir Ghirba`]},
                {name:[`Halfaya Pass`,`Sollum`]},
                {name:[`Buq Buq`,`Halfaya Pass`]},
                {name:[`Sofafi`,`Alam Samalus`]},
                {name:[`Sofafi`,`Bir Habata`]},
                {name:[`Halfway House`,`Bir Habata`]},
                {name:[`Bir el Khireigat`,`Sidi Suleiman`]},
                {name:[`Halfaya Pass`,`Sidi Suleiman`]},
                {name:[`Bir Gibni`,`Bir Sheferzen`]},

                {name:[`Gasr el Abid`,`Bir Sheferzen`]},
                {name:[`Bir Sheferzen`,`Bir el Khireigat`]},
                {name:[`Bir Sheferzen`,`Sidi Omar`]},
                {name:[`Omar Nuovo`,`Sidi Omar`]},
                {name:[`Libyan Omar`,`Sidi Omar`]},
                {name:[`Libyan Omar`,`Omar Nuovo`]},
                {name:[`Sidi Azeiz`,`Bir Ghirba`]},
                {name:[`Libyan Omar`,`Bir Bu Deheua`]},
                {name:[`Bir Gibni`,`Bir Bu Deheua`]},
                {name:[`Gasr el Abid`,`El Cuasc`]},

                {name:[`Sidi Azeiz`,`Bir Bu Deheua`]},
                {name:[`Gambut`,`Gasr el Arid`]},
                {name:[`Bir Ghirba`,`Halfaya Pass`]},
                {name:[`Gasr el Abid`,`Bir el Khireigat`]},
                {name:[`Omar Nuovo`,`Bir Ghirba`]},
                {name:[`Omar Nuovo`,`Sidi Suleiman`]},
                {name:[`Alam Samalus`,`Buq Buq`]},
                {name:[`Alam Samalus`,`Halfway House`]},
                {name:[`Bir el Khireigat`,`Halfway House`]},
                {name:[`Conference Cairn`,`Bir Habata`]},

                {name:[`Bir el Khireigat`,`Conference Cairn`]},
                {name:[`Mersa Lucch`,`Gambut`]},
                {name:[`Bir Beuid`,`Bir el Harmat`]},
                {name:[`Bir Beuid`,`El Adem`]},
                {name:[`Bir Beuid`,`Retma`]},
            ],team:[
                {name:`British`,term:`britain`,player:0,quality:1},
                {name:`New Zealand`,term:`new zealand`,player:0,quality:1.05},
                {name:`South African`,term:`south africa`,player:0,quality:0.9},
                {name:`Polish`,term:`poland`,player:0,quality:1},
                {name:`Australian`,term:`australia`,player:0,quality:1.05},
                {name:`Czechoslovak`,term:`czechoslovakia`,player:0,quality:1},
                {name:`Māori`,term:`maori`,player:0,quality:1.05},
                {name:`Indian`,term:`india`,player:0,quality:1},
                {name:`German`,term:`germany`,player:1,quality:1.1},
                {name:`Italian`,term:`italy`,player:2,quality:0.8},
            ],player:[
                {name:`British`,color:[0,100,250],side:0},
                {name:`German`,color:[150,50,0],side:1},
                {name:`Italian`,color:[0,200,0],side:1},
            ],side:[
                {name:`Allied`,supply:25},
                {name:`Axis`,supply:20},
            ],unit:[
                {
                    name:`Operation Battleaxe`,
                    battalions:[[20],[8,12]],bonus:false,partition:[[0],[1],[2]],
                    unit:[
                        {
                            level:0,type:[`Tank`],team:`British`,
                            desc:[`7th Armored Division`,`7th Armoured Division`],name:`7`,designation:``,commander:`Creagh`,icon:`7a`,
                            pos:[2650,1420],
                            elements:[
                                {
                                    level:1,type:[`Tank`],team:`British`,
                                    desc:[`4th Armored Brigade`,`4th Armoured Brigade`],name:`4`,designation:``,commander:`Gatehouse`,icon:`4ab`,
                                    pos:[2435,1420],
                                    elements:[
                                        {level:3,type:`Heavy Tank`,team:`British`,desc:[`4th Battalion, Royal Tank Regiment`,`4th Royal Tank Regiment`],name:`4`,designation:`Royal Tank\nRegiment`,commander:`O'Carroll`},
                                        {level:3,type:`Heavy Tank`,team:`British`,desc:[`7th Battalion, Royal Tank Regiment`,`7th Royal Tank Regiment`],name:`7`,designation:`Royal Tank\nRegiment`,commander:`Groves`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Artillery`,`Motorized`],team:`British`,
                                    desc:`7th Support Group`,name:`7`,designation:``,commander:`Gott`,icon:`7sg`,
                                    pos:[2540,1420],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:`de Salis`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Renton`},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`2nd Battalion, Royal Horse Artillery`,`2nd Regiment, Royal Horse Artillery`],name:`2`,designation:`Royal\nHorse`,commander:`Aikenhead`},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`3rd Battalion, Royal Horse Artillery`,`3rd Regiment, Royal Horse Artillery`],name:`3`,designation:`Royal\nHorse`,commander:`Wilson`},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:`Royal\nHorse`,commander:`Currie`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`British`,
                                    desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`,icon:`7a`,
                                    pos:[1950,1282],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`British`,desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:`4th Indian Division`,name:`4`,designation:``,commander:`Messervy`,icon:`4id`,
                            pos:[2625,1150],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`11th Indian Infantry Brigade`,name:`11`,designation:``,commander:`Savory`,icon:`4id`,
                                    pos:[2510,1105],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Queen's Own Cameron Highlanders`,name:`2`,designation:`Cameron\nHighlanders`,commander:`Duncan`},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`1st Battalion, 6th Rajputana Rifles`,name:`1/6`,designation:`Rajputana`,commander:`Quayle`},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`2nd Battalion, 5th Mahratta Light Infantry`,name:`2/5`,designation:`Mahratta`,commander:`Doyle`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`22nd Guards Brigade`,name:`22`,designation:`Guards`,commander:`Erskine`,icon:``,
                                    pos:[2485,1240],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, The Buffs (Royal East Kent Regiment)`,name:`1`,designation:`Buffs`,commander:`Knocker`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Scots Guards`,name:`2`,designation:`Scots\nGuards`,commander:`Mayfield`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`3rd Battalion, Coldstream Guards`,name:`3`,designation:`Coldstream\nGuards`,commander:`Moubray`},
                                    ],
                                },
                            ],
                        },{
                            level:1,type:[`Infantry`,`Motorized`],team:`Australian`,
                            desc:`20th Australian Infantry Brigade`,name:`20`,designation:``,commander:`Murray`,icon:`9a`,
                            pos:[944,256],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`Australian`,desc:[`13th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/13th Australian Infantry Battalion`],name:`2/13`,designation:``,commander:`Burrows`},
                                {level:3,type:`Motorized Infantry`,team:`Australian`,desc:[`15th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/15th Australian Infantry Battalion`],name:`2/15`,designation:``,commander:`Ogle`},
                                {level:3,type:`Motorized Infantry`,team:`Australian`,desc:[`17th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/17th Australian Infantry Battalion`],name:`2/17`,designation:``,commander:`Crawford`},
                                {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`104th Battalion, Royal Horse Artillery`,`104th Regiment, Royal Horse Artillery`],name:`104`,designation:`Royal\nHorse`,commander:`Matthew`},
                            ],
                        },{
                            level:3,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:[`18th Cavalry Battalion "King Edward VII's Own"`,`18th King Edward VII's Own Cavalry`],name:`18`,designation:`King Edward\nVII's Own`,commander:``,icon:``,
                            pos:[771,135],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`Indian`,desc:[`18th Cavalry Battalion "King Edward VII's Own"`,`18th King Edward VII's Own Cavalry`],name:`18`,designation:`King Edward\nVII's Own`,commander:``},
                            ],
                        },{
                            level:3,type:[`Tank`,`Light`],team:`British`,
                            desc:`3rd The King's Own Hussars`,name:`3`,designation:`King's Own\nHussars`,commander:``,icon:`3ab`,
                            pos:[816,225],
                            elements:[
                                {level:3,type:`Terrible Tank`,team:`British`,desc:`3rd The King's Own Hussars`,name:`3`,designation:`King's Own\nHussars`,commander:``},
                            ],
                        },{
                            level:0,type:[`Tank`],team:`German`,
                            desc:[`15th Panzer Division`,`15. Panzer-Division`],name:`15`,designation:``,commander:`Neumann-Silkow`,icon:`15pz`,
                            pos:[1554,434],
                            elements:[
                                {
                                    level:2,type:[`Tank`],team:`German`,
                                    desc:[`8th Panzer Regiment`,`Panzer-Regiment 8`],name:`8`,designation:``,commander:`Cramer`,icon:`15pz`,
                                    pos:[1432,570],
                                    elements:[
                                        {level:3,type:`Medium Tank`,team:`German`,desc:[`1st Battalion, 8th Panzer Regiment`,`I./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:`Crohn`},
                                        {level:3,type:`Captured Medium Tank`,team:`German`,desc:[`2nd Battalion, 8th Panzer Regiment`,`II./Panzer-Regiment 8`],name:`2`,designation:`8`,commander:`Ramsauer`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`200th Special Purpose Regimental Staff`,`Regimentsstab z.b.V. 200`],name:`200`,designation:`z.b.V.`,commander:`Geißler`,icon:`15pz`,
                                    pos:[1634,628],
                                    elements:[
                                        {level:3,type:`Motorcycle Infantry`,team:`German`,desc:[`15th Motorcycle Battalion`,`Kradschützen-Bataillon 15`],name:`15`,designation:``,commander:`Ehle`}, 
                                    ],
                                },{
                                    level:3,type:[`Artillery`,`Motorized`],team:`German`,
                                    desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:``,commander:`Mayer`,icon:`15pz`,
                                    pos:[1393,382],
                                    elements:[
                                        {level:3,type:`Motorized Concentrated Artillery`,team:`German`,desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:`Mayer`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`German`,
                                    desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`Héraucourt`,icon:`15pz`,
                                    pos:[1737,1251],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`German`,desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`Héraucourt`}, 
                                    ],
                                },{
                                    level:3,type:[`Anti-Tank`,`Motorized`],team:`German`,
                                    desc:[`33rd Anti-Tank Battalion`,`Panzerjäger-Abteilung 33`],name:`33`,designation:``,commander:`Beil`,icon:`15pz`,
                                    pos:[1545,549],
                                    elements:[
                                        {level:3,type:`Motorized Anti-Tank`,team:`German`,desc:[`33rd Anti-Tank Battalion`,`Panzerjäger-Abteilung 33`],name:`33`,designation:``,commander:`Beil`}, 
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`102nd Infantry Division "Trento"`,`102ª Divisione di Fanteria Motorizzata "Trento"`],name:`102`,designation:`Trento`,commander:`Stampioni`,icon:`trento`,
                            pos:[480,441],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`61st Infantry Regiment`,`61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[581,198],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`1st Battalion, 61st Infantry Regiment`,`I Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`,icon:`trento`,
                                            pos:[671,121],
                                            elements:[
                                                {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 61st Infantry Regiment`,`I Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`2nd Battalion, 61st Infantry Regiment`,`II Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`,icon:`trento`,
                                            pos:[755,306],
                                            elements:[
                                                {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 61st Infantry Regiment`,`II Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`},
                                            ],
                                        },{
                                            level:3,type:[`Machine Gun`,`Mortar`,`Anti-Tank`],team:`Italian`,
                                            desc:[`3rd Mixed Support Battalion, 61st Motorized Infantry Regiment`,`III Battaglione Armi d'Accompagnamento, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`61`,commander:`Rabezzana`,icon:`trento`,
                                            pos:[1010,344],
                                            elements:[
                                                {level:3,type:`Mixed Support`,team:`Italian`,desc:[`3rd Mixed Support Battalion, 61st Motorized Infantry Regiment`,`III Battaglione Armi d'Accompagnamento, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`61`,commander:`Rabezzana`},
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`62nd Infantry Regiment`,`62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[2245,937],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`1st Battalion, 62nd Infantry Regiment`,`I Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`,icon:`trento`,
                                            pos:[2014,1167],
                                            elements:[
                                                {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 62nd Infantry Regiment`,`I Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`2nd Battalion, 62nd Infantry Regiment`,`II Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`,icon:`trento`,
                                            pos:[2254,671],
                                            elements:[
                                                {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 62nd Infantry Regiment`,`II Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`},
                                            ],
                                        },{
                                            level:3,type:[`Machine Gun`,`Mortar`,`Anti-Tank`],team:`Italian`,
                                            desc:[`3rd Mixed Support Battalion, 62nd Motorized Infantry Regiment`,`III Battaglione Armi d'Accompagnamento, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`62`,commander:`Gennaro`,icon:`trento`,
                                            pos:[2222,1165],
                                            elements:[
                                                {level:3,type:`Mixed Support`,team:`Italian`,desc:[`3rd Mixed Support Battalion, 62nd Motorized Infantry Regiment`,`III Battaglione Armi d'Accompagnamento, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`62`,commander:`Gennaro`},
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`7th Bersaglieri Regiment`,`7° Reggimento Bersaglieri`],name:`7`,designation:`Bersaglieri`,commander:`Scirocco`,icon:`trento`,
                                    pos:[378,564],
                                    elements:[
                                        {level:3,type:`Motorcycle Bersaglieri`,team:`Italian`,desc:[`8th Bersaglieri Battalion`,`8° Battaglione Bersaglieri`],name:`8`,designation:`Bersaglieri`,commander:`Trillini`},
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`10th Bersaglieri Battalion`,`10° Battaglione Bersaglieri`],name:`10`,designation:`Bersaglieri`,commander:`Adolfato`},
                                        {level:3,type:`Motorized Machine Gun Bersaglieri`,team:`Italian`,desc:[`11th Bersaglieri Battalion`,`11° Battaglione Bersaglieri`],name:`11`,designation:`Bersaglieri`,commander:`Straziota`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`46th Artillery Regiment`,`46° Reggimento Artiglieria "Trento"`],name:`46`,designation:`Trento`,commander:`Grati`,icon:`trento`,
                                    pos:[827,474],
                                    elements:[
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`1st Group, 46th Artillery Regiment`,`I Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`1`,designation:`46`,commander:`Giannimi`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`3rd Group, 46th Artillery Regiment`,`III Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`3`,designation:`46`,commander:`Salvo`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`4th Group, 46th Artillery Regiment`,`IV Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`4`,designation:`46`,commander:`Gavazzi`},
                                    ],
                                },
                            ],
                        },
                    ],
                },{
                    name:`Operation Crusader`,
                    battalions:[[38],[14,28]],bonus:true,partition:[[0],[1],[2]],
                    unit:[
                        {
                            level:0,type:[`Tank`],team:`British`,
                            desc:[`7th Armored Division`,`7th Armoured Division`],name:`7`,designation:``,commander:`Gott`,icon:`7a`,
                            pos:[2550,1420],
                            elements:[
                                {
                                    level:1,type:[`Tank`],team:`British`,
                                    desc:[`4th Armored Brigade`,`4th Armoured Brigade`],name:`4`,designation:``,commander:`Gatehouse`,icon:`4ab`,
                                    pos:[2335,1420],
                                    elements:[
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`3rd Battalion, Royal Tank Regiment`,`3rd Royal Tank Regiment`],name:`3`,designation:`Royal Tank\nRegiment`,commander:`Keller`},
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`5th Battalion, Royal Tank Regiment`,`5th Royal Tank Regiment`],name:`5`,designation:`Royal Tank\nRegiment`,commander:`Carver`},
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`8th Battalion, Irish Hussars`,`8th Irish Hussars`],name:`8`,designation:`Irish\nHussars`,commander:`Drew`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Scots Guards`,name:`2`,designation:`Scots\nGuards`,commander:`Mayfield`},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`2nd Battalion, Royal Horse Artillery`,`2nd Regiment, Royal Horse Artillery`],name:`2`,designation:`Royal\nHorse`,commander:`Aikenhead`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Artillery`,`Motorized`],team:`British`,
                                    desc:`7th Support Group`,name:`7`,designation:``,commander:`Campbell`,icon:`7sg`,
                                    pos:[2440,1420],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:`de Salis`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Renton`},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`3rd Battalion, Royal Horse Artillery`,`3rd Regiment, Royal Horse Artillery`],name:`3`,designation:`Royal\nHorse`,commander:`Wilson`},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`60th (North Midland) Battalion, Royal Artillery`,`60th (North Midland) Field Regiment, Royal Artillery`],name:`60`,designation:`North\nMidland`,commander:`Hallifax`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`British`,
                                    desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`,icon:`7a`,
                                    pos:[1950,1282],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`British`,desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`South African`,
                            desc:`1st South African Infantry Division`,name:`1`,designation:``,commander:`Brink`,icon:`1sa`,
                            pos:[2600,1520],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                                    desc:`1st South African Infantry Brigade`,name:`1`,designation:``,commander:`Pienaar`,icon:`1sa`,
                                    pos:[2385,1520],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Duke of Edinburgh's Own Rifles`,name:`1`,designation:`Duke of\nEdinburgh`,commander:`Seneschall`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Royal Natal Carabineers`,name:`1`,designation:`Royal\nNatal`,commander:`Hay`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Transvaal Scottish Regiment`,name:`1`,designation:`Transvaal\nScottish`,commander:`Smitheman`},
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:[`3rd Battalion, South African Artillery Corps`,`3rd South African Field Regiment`],name:`3`,designation:``,commander:`Whyte`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                                    desc:`5th South African Infantry Brigade`,name:`5`,designation:``,commander:`Armstrong`,icon:`1sa`,
                                    pos:[2490,1520],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, South African Irish Regiment`,name:`1`,designation:`Irish`,commander:`Cochran`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`2nd Battalion, General Botha Regiment`,name:`2`,designation:`Botha`,commander:`Mason`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`3rd Battalion, Transvaal Scottish Regiment`,name:`3`,designation:`Transvaal\nScottish`,commander:`Rosser`},
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:[`4th Battalion, South African Artillery Corps`,`4th South African Field Regiment`],name:`4`,designation:``,commander:`Harpur`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`,`Machine Gun`],team:`South African`,
                                    desc:`Machine Gun Battalion "President Steyn"`,name:`PS`,designation:``,commander:`Minnaar`,icon:`1sa`,
                                    pos:[2290,1520],
                                    elements:[
                                        {level:3,type:`Motorized Machine Gun`,team:`South African`,desc:`Machine Gun Battalion "President Steyn"`,name:`PS`,designation:``,commander:`Minnaar`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                            desc:[`2nd New Zealand Division`,`The New Zealand Division`],name:`2`,designation:``,commander:`Freyberg`,icon:`2nz`,
                            pos:[2725,1150],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                                    desc:`4th New Zealand Infantry Brigade`,name:`4`,designation:``,commander:`Inglis`,icon:`2nz`,
                                    pos:[2510,1105],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`18th New Zealand Infantry Battalion`,name:`18`,designation:``,commander:`Peart`},
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`19th New Zealand Infantry Battalion`,name:`19`,designation:``,commander:`Hartnell`},
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`20th New Zealand Infantry Battalion`,name:`20`,designation:``,commander:`Kippenberger`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                                    desc:`5th New Zealand Infantry Brigade`,name:`5`,designation:``,commander:`Hargest`,icon:`2nz`,
                                    pos:[2510,1210],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`21st New Zealand Infantry Battalion`,name:`21`,designation:``,commander:`Fitzpatrick`},
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`22nd New Zealand Infantry Battalion`,name:`22`,designation:``,commander:`Andrew`},
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`23rd New Zealand Infantry Battalion`,name:`23`,designation:``,commander:`Leckie`},
                                    ],
                                },{
                                    level:1,type:[`Artillery`,`Motorized`],team:`New Zealand`,
                                    desc:`2nd New Zealand Field Brigade`,name:`2`,designation:``,commander:`Miles`,icon:`2nz`,
                                    pos:[2620,1210],
                                    elements:[
                                        {level:3,type:`Motorized Artillery`,team:`New Zealand`,desc:[`4th New Zealand Artillery Battalion`,`4th New Zealand Field Regiment`],name:`4`,designation:``,commander:`Duff`},
                                        {level:3,type:`Motorized Artillery`,team:`New Zealand`,desc:[`5th New Zealand Artillery Battalion`,`5th New Zealand Field Regiment`],name:`5`,designation:``,commander:`Fraser`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`],team:`Māori`,
                                    desc:`28th "Māori" New Zealand Infantry Battalion`,name:`28`,designation:``,commander:`Dittmer`,icon:`2nz`,
                                    pos:[2610,1115],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`Māori`,desc:`28th "Māori" New Zealand Infantry Battalion`,name:`28`,designation:``,commander:`Dittmer`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`British`,
                            desc:`70th Infantry Division`,name:`70`,designation:``,commander:`Scobie`,icon:`70`,
                            pos:[916,175],
                            elements:[
                                {
                                    level:1,type:[`Infantry`],team:`Polish`,
                                    desc:[`Polish Independent Carpathian Brigade`,`Samodzielna Brygada Strzelców Karpackich`],name:`C`,designation:``,commander:`Kopański`,icon:`70`,
                                    pos:[785,170],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Polish`,desc:[`1st Carpathian Rifle Battalion`,`1 batalion Strzelców Karpackich`],name:`1`,designation:``,commander:`Kopeć`},
                                        {level:3,type:`Infantry`,team:`Polish`,desc:[`2nd Carpathian Rifle Battalion`,`2 batalion Strzelców Karpackich`],name:`2`,designation:``,commander:`Brzósko`},
                                        {level:3,type:`Infantry`,team:`Polish`,desc:[`3rd Carpathian Rifle Battalion`,`3 batalion Strzelców Karpackich`],name:`3`,designation:``,commander:`Sokol`},
                                        {level:3,type:`Infantry`,team:`Czechoslovak`,desc:[`11th Czechoslovak Infantry Battalion`,`11. československý pěší prapor — Východní`],name:`11`,designation:``,commander:`Klapálek`},
                                        {level:3,type:`Machine Gun`,team:`Polish`,desc:[`Carpathian "Uhlans" Machine Gun Battalion`,`Pułk Ułanów Karpackich`],name:`U`,designation:``,commander:`Bobiński`},
                                        {level:3,type:`Artillery`,team:`Polish`,desc:[`Carpathian Artillery Regiment`,`Karpacki pułk artylerii`],name:`C`,designation:``,commander:`Gliwicz`},
                                    ],
                                },{
                                    level:1,type:[`Tank`,`Heavy`],team:`British`,
                                    desc:`32nd Army Tank Brigade`,name:`32`,designation:``,commander:`Willison`,icon:`32a`,
                                    pos:[867,265],
                                    elements:[
                                        {level:3,type:`Heavy Tank`,team:`British`,desc:[`4th Battalion, Royal Tank Regiment`,`4th Royal Tank Regiment`],name:`4`,designation:`Royal Tank\nRegiment`,commander:`O'Carroll`},
                                        {level:3,type:`Heavy Tank`,team:`British`,desc:[`7th Battalion, Royal Tank Regiment`,`7th Royal Tank Regiment`],name:`7`,designation:`Royal Tank\nRegiment`,commander:`Groves`},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`104th Battalion, Royal Horse Artillery`,`104th Regiment, Royal Horse Artillery`],name:`104`,designation:`Royal\nHorse`,commander:`Matthew`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`],team:`Australian`,
                                    desc:[`13th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/13th Australian Infantry Battalion`],name:`2/13`,designation:``,commander:`Burrows`,icon:`9a`,
                                    pos:[965,250],
                                    elements:[
                                        {level:3,type:`Reinforced Infantry`,team:`Australian`,desc:[`13th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/13th Australian Infantry Battalion`],name:`2/13`,designation:``,commander:`Burrows`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Tank`],team:`German`,
                            desc:[`15th Panzer Division`,`15. Panzer-Division`],name:`15`,designation:``,commander:`Neumann-Silkow`,icon:`15pz`,
                            pos:[1554,434],
                            elements:[
                                {
                                    level:2,type:[`Tank`],team:`German`,
                                    desc:[`8th Panzer Regiment`,`Panzer-Regiment 8`],name:`8`,designation:``,commander:`Cramer`,icon:`15pz`,
                                    pos:[1432,570],
                                    elements:[
                                        {level:3,type:`Medium Tank`,team:`German`,desc:[`1st Battalion, 8th Panzer Regiment`,`I./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:`Fenski`},
                                        {level:3,type:`Captured Medium Tank`,team:`German`,desc:[`2nd Battalion, 8th Panzer Regiment`,`II./Panzer-Regiment 8`],name:`2`,designation:`8`,commander:`Wahl`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`15th Rifle Brigade`,`Schützen-Brigade 15`],name:`15`,designation:``,commander:`Menny`,icon:`15pz`,
                                    pos:[1579,520],
                                    elements:[
                                        {
                                            level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                            desc:[`115th Rifle Regiment`,`Schützen-Regiment 115`],name:`115`,designation:``,commander:`Zincke`,icon:`15pz`,
                                            pos:[1634,628],
                                            elements:[
                                                {level:3,type:`Motorized Infantry`,team:`German`,desc:[`1st Battalion, 115th Rifle Regiment`,`I./Schützen-Regiment 115`],name:`1`,designation:`115`,commander:`von Grolmann`},
                                            ],
                                        },{
                                            level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                            desc:[`200th Special Purpose Regimental Staff`,`Regimentsstab z.b.V. 200`],name:`200`,designation:`z.b.V.`,commander:`Geißler`,icon:`15pz`,
                                            pos:[1533,599],
                                            elements:[
                                                {level:3,type:`Motorized Machine Gun`,team:`German`,desc:[`2nd Machine Gun Battalion`,`2. Maschinengewehr-Bataillon`],name:`2`,designation:``,commander:`Warrelmann`},
                                                {level:3,type:`Motorcycle Infantry`,team:`German`,desc:[`15th Motorcycle Battalion`,`Kradschützen-Bataillon 15`],name:`15`,designation:``,commander:`von Debschütz`}, 
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Artillery`,`Motorized`],team:`German`,
                                    desc:[`33rd Artillery Regiment`,`Artillerie-Regiment (mot.) 33`],name:`33`,designation:``,commander:`Crasemann`,icon:`15pz`,
                                    pos:[1393,382],
                                    elements:[
                                        {level:3,type:`Motorized Concentrated Artillery`,team:`German`,desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:`Mayer`},
                                        {level:3,type:`Motorized Half Artillery`,team:`German`,desc:[`2nd "Half and Half" Battalion, 33rd Artillery Regiment`,`II./Artillerie-Regiment (mot.) 33 "Halb und Halb"`],name:`2`,designation:`33`,commander:`Mesmer`},
                                        {level:3,type:`Motorized Heavy Artillery`,team:`German`,desc:[`3rd Battalion, 33rd Artillery Regiment`,`III./Artillerie-Regiment (mot.) 33`],name:`3`,designation:`33`,commander:`Bickel`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`German`,
                                    desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`Héraucourt`,icon:`15pz`,
                                    pos:[1737,1251],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`German`,desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`Héraucourt`}, 
                                    ],
                                },{
                                    level:3,type:[`Engineer`,`Motorized`],team:`German`,
                                    desc:[`33rd Engineer Battalion`,`Panzer-Pionier-Bataillon 33`],name:`33`,designation:``,commander:`Oberembt`,icon:`15pz`,
                                    pos:[1478,491],
                                    elements:[
                                        {level:3,type:`Motorized Engineer`,team:`German`,desc:[`33rd Engineer Battalion`,`Panzer-Pionier-Bataillon 33`],name:`33`,designation:``,commander:`Oberembt`}, 
                                    ],
                                },{
                                    level:3,type:[`Anti-Tank`,`Motorized`],team:`German`,
                                    desc:[`33rd Anti-Tank Battalion`,`Panzerjäger-Abteilung 33`],name:`33`,designation:``,commander:`Beil`,icon:`15pz`,
                                    pos:[1680,549],
                                    elements:[
                                        {level:3,type:`Motorized Anti-Tank`,team:`German`,desc:[`33rd Anti-Tank Battalion`,`Panzerjäger-Abteilung 33`],name:`33`,designation:``,commander:`Beil`}, 
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`German`,
                            desc:[`Special Purpose Divisional Command "Afrika"`,`Divisionskommando z.b.V. Afrika`],name:`A`,designation:`z.b.V.`,commander:`Sümmermann`,icon:`90l`,
                            pos:[1072,461],
                            elements:[
                                {
                                    level:3,type:[`Infantry`],team:`German`,
                                    desc:[`3rd Battalion, 347th Infantry Regiment`,`III./Infanterie-Regiment 347`],name:`3`,designation:`347`,commander:`Panzenhagen`,icon:`90l`,
                                    pos:[895,390],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`German`,desc:[`3rd Battalion, 347th Infantry Regiment`,`III./Infanterie-Regiment 347`],name:`3`,designation:`347`,commander:`Panzenhagen`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`2nd Battalion, 115th Rifle Regiment`,`II./Schützen-Regiment 115`],name:`2`,designation:`115`,commander:`Göttman`,icon:`15pz`,
                                    pos:[1141,566],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`German`,desc:[`2nd Battalion, 115th Rifle Regiment`,`II./Schützen-Regiment 115`],name:`2`,designation:`115`,commander:`Göttman`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`16th Infantry Regiment`,`16° Reggimento di Fanteria "Savona"`],name:`16`,designation:`Savona`,commander:`Garrone`,icon:`savona`,
                                    pos:[1040,320],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 16th Infantry Regiment`,`I Battaglione Fucilieri, 16° Reggimento di Fanteria "Savona"`],name:`1`,designation:`16`,commander:`Pelosi`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`3rd Battalion, 16th Infantry Regiment`,`III Battaglione Fucilieri, 16° Reggimento di Fanteria "Savona"`],name:`3`,designation:`16`,commander:`Rossi`},
                                    ],
                                },
                            ],
                        },{
                            level:1,type:[`Infantry`,`Tank`],team:`Italian`,
                            desc:[`Army Corps Reconnaissance Regrouping`,`Raggruppamento Esplorante del XXII Corpo d'Armata`],name:`RECA`,designation:`XXII`,commander:`de Meo`,icon:``,
                            pos:[993,728],
                            elements:[
                                {
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`Infantry Regiment "Giovani Fascisti"`,`Reggimento di Fanteria "Giovani Fascisti"`],name:`GF`,designation:``,commander:`Nannini`,icon:``,
                                    pos:[946,961],
                                    elements:[
                                        {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`1st Battalion, Infantry Regiment "Giovani Fascisti"`,`I Battaglione Fucilieri, Reggimento di Fanteria "Giovani Fascisti"`],name:`1`,designation:`Mi Scaglio\na Ruina`,commander:`Balisti`},
                                        {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`2nd Battalion, Infantry Regiment "Giovani Fascisti"`,`II Battaglione Fucilieri, Reggimento di Fanteria "Giovani Fascisti"`],name:`2`,designation:`Abbi\nFede`,commander:`Benedetti`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`,`Motorized`],team:`Italian`,
                                    desc:[`Flying Batteries Regrouping`,`Raggruppamento Batterie Volanti`],name:`RBV`,designation:``,commander:`Nicolardi`,icon:``,
                                    pos:[660,1038],
                                    elements:[
                                        {level:3,type:`Motorized Small Artillery`,team:`Italian`,desc:[`1st Group, Flying Batteries Regrouping`,`I Gruppo, Raggruppamento Batterie Volanti`],name:`1`,designation:`RBV`,commander:`da Bino`},
                                        {level:3,type:`Motorized Small Artillery`,team:`Italian`,desc:[`3rd Group, Flying Batteries Regrouping`,`III Gruppo, Raggruppamento Batterie Volanti`],name:`3`,designation:`RBV`,commander:`Abeille`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorcycle`],team:`Italian`,
                                    desc:[`6th Battalion "Romolo Gessi", Italian Africa Police`,`6° Battaglione "Romolo Gessi", Polizia dell’Africa Italiana`],name:`6`,designation:`Romolo\nGessi`,commander:`Diamante`,icon:``,
                                    pos:[1062,1469],
                                    elements:[
                                        {level:4,type:`Motorcycle Infantry Company`,team:`Italian`,desc:[`1st Motorcycle Company, Italian Africa Police`,`1° Compagnia Motociclisti, Polizia dell’Africa Italiana`],name:`1`,designation:``,commander:`Marini`},
                                        {level:4,type:`Motorcycle Infantry Company`,team:`Italian`,desc:[`2nd Motorcycle Company, Italian Africa Police`,`2° Compagnia Motociclisti, Polizia dell’Africa Italiana`],name:`2`,designation:``,commander:`Ciani`},
                                        {level:4,type:`Armored Car Company`,team:`Italian`,desc:[`3rd Armored Car Company, Italian Africa Police`,`3° Compagnia Carri, Polizia dell’Africa Italiana`],name:`3`,designation:``,commander:`Orlando`},
                                        {level:4,type:`Security Tank Company`,team:`Italian`,desc:[`1st Company, 52nd Tank Battalion`,`1° Compagnia, LII Battaglione Carri M`],name:`1`,designation:`52`,commander:`Mayneri`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`55th Infantry Division "Savona"`,`55ª Divisione di Fanteria Autotransportabile "Savona"`],name:`55`,designation:`Savona`,commander:`de Giorgis`,icon:`savona`,
                            pos:[2202,1078],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`15th Infantry Regiment`,`15° Reggimento di Fanteria "Savona"`],name:`15`,designation:`Savona`,commander:`Pedrazzoli`,icon:`savona`,
                                    pos:[2014,1167],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 15th Infantry Regiment`,`I Battaglione Fucilieri, 15° Reggimento di Fanteria "Savona"`],name:`1`,designation:`15`,commander:`Grimaldi`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`3rd Battalion, 15th Infantry Regiment`,`III Battaglione Fucilieri, 15° Reggimento di Fanteria "Savona"`],name:`3`,designation:`15`,commander:`Ugolini`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`Task Force di Bardi`,`Raggruppamento di Bardi`],name:`TF`,designation:``,commander:`di Bardi`,icon:`savona`,
                                    pos:[2254,671],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 15th Infantry Regiment`,`II Battaglione Fucilieri, 15° Reggimento di Fanteria "Savona"`],name:`2`,designation:`15`,commander:`Russo`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 16th Infantry Regiment`,`II Battaglione Fucilieri, 16° Reggimento di Fanteria "Savona"`],name:`2`,designation:`16`,commander:`Aveta`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`12th Artillery Regiment`,`12° Reggimento Artiglieria "Sila"`],name:`12`,designation:`Sila`,commander:`Sabini`,icon:`savona`,
                                    pos:[2245,937],
                                    elements:[
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`2nd Group, 12th Artillery Regiment`,`II Gruppo, 12° Reggimento Artiglieria "Sila"`],name:`2`,designation:`12`,commander:`Coronati`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`3rd Group, 12th Artillery Regiment`,`III Gruppo, 12° Reggimento Artiglieria "Sila"`],name:`3`,designation:`12`,commander:`Aliberti`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Machine Gun`],team:`Italian`,
                                    desc:[`155th Machine Gun Battalion`,`155º Battaglione Mitraglieri`],name:`155`,designation:``,commander:`Grande`,icon:`savona`,
                                    pos:[2235,1165],
                                    elements:[
                                        {level:3,type:`Machine Gun`,team:`Italian`,desc:[`155th Machine Gun Battalion`,`155º Battaglione Mitraglieri`],name:`155`,designation:``,commander:`Grande`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Machine Gun`],team:`Italian`,
                                    desc:[`4th Machine Gun Squadrons Group "Genova Cavalleria"`,`IV Gruppo Squadroni Mitraglieri "Genova Cavalleria"`],name:`4`,designation:`Genova`,commander:`Pierucci`,icon:`savona`,
                                    pos:[2358,967],
                                    elements:[
                                        {level:3,type:`Machine Gun`,team:`Italian`,desc:[`4th Machine Gun Squadrons Group "Genova Cavalleria"`,`IV Gruppo Squadroni Mitraglieri "Genova Cavalleria"`],name:`4`,designation:`Genova`,commander:`Pierucci`},
                                    ],
                                },{
                                    level:3,type:[`Oasis Infantry`],team:`German`,
                                    desc:[`300th Special Purpose Battalion Staff "Oasis"`,`Bataillonstab z.b.V. 300 "Oasen"`],name:`300`,designation:`z.b.V.\nOasis`,commander:`Teetz`,icon:`90l`,
                                    pos:[2405,1069],
                                    elements:[
                                        {level:4,type:`Oasis Infantry Company`,team:`German`,desc:[`6th Oasis Company`,`Oasen Kompanie 6`],name:`6`,designation:`Oasis`,commander:`Ennecerus`},
                                        {level:4,type:`Oasis Infantry Company`,team:`German`,desc:[`12th Oasis Company`,`Oasen Kompanie 12`],name:`12`,designation:`Oasis`,commander:`Schön`},
                                        {level:4,type:`Engineer Company`,team:`German`,desc:[`2nd Company, 39th Engineer Battalion`,`2. Panzer-Pionier-Bataillon 39`],name:`2`,designation:`39`,commander:`Cirener`},
                                        {level:4,type:`Armored Car Company`,team:`German`,desc:[`580th Reconnaissance Company`,`Aufklärungs-Kompanie 580`],name:`580`,designation:``,commander:`Hohmeyer`}, 
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`102nd Infantry Division "Trento"`,`102ª Divisione di Fanteria Motorizzata "Trento"`],name:`102`,designation:`Trento`,commander:`Stampioni`,icon:`trento`,
                            pos:[530,320],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`61st Infantry Regiment`,`61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[655,125],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 61st Infantry Regiment`,`I Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 61st Infantry Regiment`,`II Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`},
                                        {level:3,type:`Mixed Support`,team:`Italian`,desc:[`3rd Mixed Support Battalion, 61st Motorized Infantry Regiment`,`III Battaglione Armi d'Accompagnamento, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`61`,commander:`Rabezzana`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`62nd Infantry Regiment`,`62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[730,300],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 62nd Infantry Regiment`,`I Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 62nd Infantry Regiment`,`II Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`},
                                        {level:3,type:`Mixed Support`,team:`Italian`,desc:[`3rd Mixed Support Battalion, 62nd Motorized Infantry Regiment`,`III Battaglione Armi d'Accompagnamento, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`62`,commander:`Gennaro`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`7th Bersaglieri Regiment`,`7° Reggimento Bersaglieri`],name:`7`,designation:`Bersaglieri`,commander:`Scirocco`,icon:`trento`,
                                    pos:[480,441],
                                    elements:[
                                        {level:3,type:`Motorized Mixed Support Bersaglieri`,team:`Italian`,desc:[`8th Bersaglieri Battalion`,`8° Battaglione Bersaglieri`],name:`8`,designation:`Bersaglieri`,commander:`Trillini`},
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`10th Bersaglieri Battalion`,`10° Battaglione Bersaglieri`],name:`10`,designation:`Bersaglieri`,commander:`Adolfato`},
                                        {level:3,type:`Motorized Machine Gun Bersaglieri`,team:`Italian`,desc:[`11th Bersaglieri Battalion`,`11° Battaglione Bersaglieri`],name:`11`,designation:`Bersaglieri`,commander:`Straziota`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`46th Artillery Regiment`,`46° Reggimento Artiglieria "Trento"`],name:`46`,designation:`Trento`,commander:`Grati`,icon:`trento`,
                                    pos:[581,198],
                                    elements:[
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`1st Group, 46th Artillery Regiment`,`I Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`1`,designation:`46`,commander:`Giannimi`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`3rd Group, 46th Artillery Regiment`,`III Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`3`,designation:`46`,commander:`Salvo`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`4th Group, 46th Artillery Regiment`,`IV Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`4`,designation:`46`,commander:`Gavazzi`},
                                    ],
                                },{
                                    level:3,type:[`Machine Gun`,`Mortar`,`Anti-Tank`],team:`Italian`,
                                    desc:[`551st Mixed Support Battalion`,`DLI Battaglione Armi d'Accompagnamento`],name:`551`,designation:``,commander:`Bobbio`,icon:`trento`,
                                    pos:[378,564],
                                    elements:[
                                        {level:3,type:`Mixed Support`,team:`Italian`,desc:[`551st Mixed Support Battalion`,`DLI Battaglione Armi d'Accompagnamento`],name:`551`,designation:``,commander:`Bobbio`},
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],reserve:[
            ],
        },{
            name:[`Gazala`,`Base`],
            term:`Gazala`,
            unitScale:0.8,
            cityScale:0.8,
            city:[
                {name:`Tmimi`,owner:2,type:0,pos:[479,15]},
                {name:`Rotonda Segnale`,owner:2,type:1,pos:[235,567]},
                {name:`Bir Habesc`,owner:-1,type:0,pos:[373,952]},
                {name:`Bir Temrad`,owner:2,type:1,pos:[383,176]},
                {name:`Sidi Breghisc`,owner:2,type:0,pos:[390,283]},
                {name:`B12`,owner:2,type:0,pos:[479,450]},
                {name:`Alem Hamza`,owner:0,type:0,pos:[590,292]},
                {name:`Rotonda Mteifel`,owner:2,type:0,pos:[634,564]},
                {name:`Bir Belamed`,owner:-1,type:0,pos:[733,711]},
                {name:`Gazala`,owner:0,type:0,pos:[771,67]},

                {name:`Bir Hacheim`,owner:0,type:0,pos:[789,895]},
                {name:`El Ghebit`,owner:0,type:0,pos:[802,462]},
                {name:`Rotonda Ualeb`,owner:0,type:0,pos:[859,667]},
                {name:`Sidi Muftah`,owner:0,type:0,pos:[904,537]},
                {name:`Bir Heleisi`,owner:0,type:0,pos:[923,365]},
                {name:`El Hamrah`,owner:0,type:0,pos:[983,802]},
                {name:`Commonwealth Keep`,owner:0,type:0,pos:[1045,268]},
                {name:`Knightsbridge`,owner:0,type:0,pos:[1078,541]},
                {name:`Bir el Harmat`,owner:0,type:0,pos:[1086,664]},
                {name:`Acroma`,owner:0,type:0,pos:[1179,298]},
                
                {name:`El Mrassas`,owner:0,type:0,pos:[1196,159]},
                {name:`Hagiag el Raml`,owner:0,type:0,pos:[1222,497]},
                {name:`Retma`,owner:0,type:0,pos:[1258,1138]},
                {name:`Bir Beuid`,owner:0,type:0,pos:[1329,895]},
                {name:`El Adem`,owner:0,type:0,pos:[1425,574]},
                {name:`Tobruk`,owner:0,type:1,pos:[1514,275]},
                {name:`Bir el Gubi`,owner:0,type:0,pos:[1544,1061]},
                {name:`Bir el Haiad`,owner:0,type:0,pos:[1591,828]},
                {name:`Bir Bu Creimisa`,owner:0,type:0,pos:[1626,717]},
                {name:`El Duda`,owner:0,type:0,pos:[1670,561]},
                
                {name:`Sidi Rezegh`,owner:0,type:0,pos:[1739,666]},
                {name:`Taieb el Esem`,owner:0,type:0,pos:[1820,1059]},
                {name:`Zaafran`,owner:0,type:0,pos:[1841,582]},
                {name:`Bir el Haleizim`,owner:0,type:0,pos:[1936,785]},
                {name:`Gabr Saleh`,owner:0,type:0,pos:[1984,1225]},
                {name:`Bir el Chleta`,owner:0,type:0,pos:[2030,670]},
                {name:`Gambut`,owner:0,type:1,pos:[2152,534]},
                {name:`Gasr el Arid`,owner:0,type:0,pos:[2232,728]},
                {name:`Mersa Lucch`,owner:0,type:0,pos:[2311,408]},
                {name:`Sidi Azeiz`,owner:0,type:1,pos:[2315,1011]},
            ],connect:[
                {name:[`Gazala`,`Commonwealth Keep`]},
                {name:[`Acroma`,`El Mrassas`]},
                {name:[`Tobruk`,`Acroma`]},
                {name:[`El Adem`,`Hagiag el Raml`]},
                {name:[`Acroma`,`Hagiag el Raml`]},
                {name:[`Bir el Harmat`,`Knightsbridge`]},
                {name:[`Rotonda Ualeb`,`Bir Belamed`]},
                {name:[`El Hamrah`,`Bir Hacheim`]},
                {name:[`El Adem`,`Tobruk`]},
                {name:[`Tobruk`,`El Duda`]},

                {name:[`El Adem`,`El Duda`]},
                {name:[`Rotonda Mteifel`,`El Ghebit`]},
                {name:[`Bir Hacheim`,`Bir Belamed`]},
                {name:[`Bir Hacheim`,`Retma`]},
                {name:[`Bir el Gubi`,`Retma`]},
                {name:[`Zaafran`,`El Duda`]},
                {name:[`Sidi Rezegh`,`El Duda`]},
                {name:[`Sidi Rezegh`,`Zaafran`]},
                {name:[`Zaafran`,`Gambut`]},
                {name:[`Zaafran`,`Bir el Chleta`]},
                
                {name:[`Sidi Rezegh`,`Bir Bu Creimisa`]},
                {name:[`El Adem`,`Bir Bu Creimisa`]},
                {name:[`Bir el Haiad`,`Bir Bu Creimisa`]},
                {name:[`Bir el Haiad`,`Bir el Gubi`]},
                {name:[`Taieb el Esem`,`Bir el Gubi`]},
                {name:[`Taieb el Esem`,`Gabr Saleh`]},
                {name:[`Sidi Rezegh`,`Bir el Haleizim`]},
                {name:[`Bir el Chleta`,`Bir el Haleizim`]},
                {name:[`Taieb el Esem`,`Bir el Haleizim`]},
                {name:[`Gabr Saleh`,`Sidi Azeiz`]},

                {name:[`Gasr el Arid`,`Sidi Azeiz`]},
                {name:[`Gasr el Arid`,`Gambut`]},
                {name:[`Bir el Chleta`,`Gasr el Arid`]},
                {name:[`Commonwealth Keep`,`El Mrassas`]},
                {name:[`Acroma`,`Commonwealth Keep`]},
                {name:[`Tobruk`,`El Mrassas`]},
                {name:[`Gazala`,`Alem Hamza`]},
                {name:[`Hagiag el Raml`,`Knightsbridge`]},
                {name:[`Rotonda Ualeb`,`Bir el Harmat`]},
                {name:[`Rotonda Ualeb`,`El Hamrah`]},
                
                {name:[`El Hamrah`,`Bir el Harmat`]},
                {name:[`Retma`,`Bir Beuid`]},
                {name:[`Bir el Harmat`,`Bir Beuid`]},
                {name:[`El Adem`,`Bir Beuid`]},
                {name:[`Bir el Haiad`,`Bir Beuid`]},
                {name:[`Rotonda Ualeb`,`Sidi Muftah`]},
                {name:[`El Ghebit`,`Sidi Muftah`]},
                {name:[`El Ghebit`,`Alem Hamza`]},
                {name:[`El Ghebit`,`Bir Heleisi`]},
                {name:[`Commonwealth Keep`,`Bir Heleisi`]},

                {name:[`Knightsbridge`,`Bir Heleisi`]},
                {name:[`Knightsbridge`,`Sidi Muftah`]},
                {name:[`B12`,`Alem Hamza`]},
                {name:[`B12`,`Sidi Breghisc`]},
                {name:[`Bir Temrad`,`Alem Hamza`]},
                {name:[`Bir Temrad`,`Sidi Breghisc`]},
                {name:[`B12`,`Rotonda Mteifel`]},
                {name:[`B12`,`Rotonda Segnale`]},
                {name:[`Sidi Breghisc`,`Rotonda Segnale`]},
                {name:[`Bir Habesc`,`Rotonda Segnale`]},

                {name:[`Bir Hacheim`,`Bir Habesc`]},
                {name:[`Tmimi`,`Gazala`]},
                {name:[`Bir Temrad`,`Tmimi`]},
                {name:[`Mersa Lucch`,`Gambut`]},
                {name:[`Rotonda Mteifel`,`Bir Belamed`]},
                {name:[`El Mrassas`,`Gazala`]},
            ],team:[
                {name:`British`,term:`britain`,player:0,quality:1},
                {name:`New Zealand`,term:`new zealand`,player:0,quality:1.05},
                {name:`South African`,term:`south africa`,player:0,quality:0.95},
                {name:`Polish`,term:`poland`,player:0,quality:1},
                {name:`Australian`,term:`australia`,player:0,quality:1.05},
                {name:`Czechoslovak`,term:`czechoslovakia`,player:0,quality:1},
                {name:`Māori`,term:`maori`,player:0,quality:1.05},
                {name:`Indian`,term:`india`,player:0,quality:0.9},
                {name:`German`,term:`germany`,player:1,quality:1.2},
                {name:`Italian`,term:`italy`,player:2,quality:0.85},
            ],player:[
                {name:`British`,color:[0,100,250],side:0},
                {name:`German`,color:[150,50,0],side:1},
                {name:`Italian`,color:[0,200,0],side:1},
            ],side:[
                {name:`Allied`,supply:25},
                {name:`Axis`,supply:20},
            ],unit:[
                {
                    name:`Battle of Gazala`,
                    battalions:[[40],[16,19]],bonus:true,partition:[[0],[1],[2]],
                    unit:[
                        {
                            level:0,type:[`Tank`],team:`British`,
                            desc:[`7th Armored Division`,`7th Armoured Division`],name:`7`,designation:``,commander:`Messervy`,icon:`7a`,
                            pos:[1329,895],
                            elements:[
                                {
                                    level:1,type:[`Tank`],team:`British`,
                                    desc:[`4th Armored Brigade`,`4th Armoured Brigade`],name:`4`,designation:``,commander:`Richards`,icon:`4ab`,
                                    pos:[1086,664],
                                    elements:[
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`3rd Battalion, Royal Tank Regiment`,`3rd Royal Tank Regiment`],name:`3`,designation:`Royal Tank\nRegiment`,commander:`Roberts`},
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`5th Battalion, Royal Tank Regiment`,`5th Royal Tank Regiment`],name:`5`,designation:`Royal Tank\nRegiment`,commander:`Uniacke`},
                                        {level:3,type:`Superior Tank`,team:`British`,desc:[`8th Battalion, Irish Hussars`,`8th Irish Hussars`],name:`8`,designation:`Irish\nHussars`,commander:`Kilkelly`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:``},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:``,commander:``},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`7th Motor Brigade`,name:`7`,designation:``,commander:`Renton`,icon:`7sg`,
                                    pos:[1258,1138],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, King's Royal Rifle Corps`,name:`2`,designation:`King's Royal\nRifle Corps`,commander:`Erskine`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Edwardes`},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`60th (North Midland) Battalion, Royal Artillery`,`60th (North Midland) Field Regiment, Royal Artillery`],name:`60`,designation:`North\nMidland`,commander:`Hallifax`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`201st Guards Brigade`,name:`201`,designation:`Guards`,commander:`Marriott`,icon:`7a`,
                                    pos:[1078,541],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Scots Guards`,name:`2`,designation:`Scots\nGuards`,commander:`Mayfield`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`3rd Battalion, Coldstream Guards`,name:`3`,designation:`Coldstream\nGuards`,commander:`Sainthill`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`9th Battalion, Rifle Brigade (Tower Hamlets Rifles)`,name:`9`,designation:`Rifle\nBrigade`,commander:`Purdon`},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`3rd Battalion, Royal Horse Artillery`,`3rd Regiment, Royal Horse Artillery`],name:`3`,designation:``,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`1st Battalion, Sherwood Foresters`,name:`1`,designation:`Sherwood\nForesters`,commander:``,icon:`7a`,
                                    pos:[1514,275],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, Sherwood Foresters`,name:`1`,designation:`Sherwood\nForesters`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`1st Battalion, London Rifle Brigade`,name:`1`,designation:`London Rifle\nBrigade`,commander:``,icon:`7a`,
                                    pos:[1984,1225],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, London Rifle Brigade`,name:`1`,designation:`London Rifle\nBrigade`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`British`,
                                    desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`,icon:`7a`,
                                    pos:[789,895],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`British`,desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`},
                                    ],
                                },
                            ],
                        },{
                            level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:`3rd Indian Motor Brigade`,name:`3`,designation:``,commander:`Filose`,icon:``,
                            pos:[859,667],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`2nd Royal Lancers`,name:`2`,designation:`Royal\nLancers`,commander:``},
                                {level:3,type:`Motorized Infantry`,team:`Indian`,desc:[`11th Frontier Force Cavalry Battalion "Prince Albert Victor's Own"`,`11th Prince Albert Victor's Own Cavalry (11th Frontier Force)`],name:`11`,designation:`PAVO`,commander:``},
                                {level:3,type:`Motorized Infantry`,team:`Indian`,desc:[`18th Cavalry Battalion "King Edward VII's Own"`,`18th King Edward VII's Own Cavalry`],name:`18`,designation:`King Edward\nVII's Own`,commander:``},
                                {level:3,type:`Motorized Artillery`,team:`Indian`,desc:[`2nd Battalion, Royal Indian Artillery`,`2nd Field Regiment, Royal Indian Artillery`],name:`2`,designation:``,commander:``},
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`South African`,
                            desc:`1st South African Infantry Division`,name:`1`,designation:``,commander:`Pienaar`,icon:`1sa`,
                            pos:[800,200],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                                    desc:`1st South African Infantry Brigade`,name:`1`,designation:``,commander:`Kriegler`,icon:`1sa`,
                                    pos:[610,282],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Duke of Edinburgh's Own Rifles`,name:`1`,designation:`Duke of\nEdinburgh`,commander:`Seneschall`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Royal Natal Carabineers`,name:`1`,designation:`Royal\nNatal`,commander:`Hay`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Transvaal Scottish Regiment`,name:`1`,designation:`Transvaal\nScottish`,commander:`Smitheman`},
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:[`3rd Battalion, South African Artillery Corps`,`3rd South African Field Regiment`],name:`3`,designation:``,commander:`Whyte`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                                    desc:`2nd South African Infantry Brigade`,name:`2`,designation:``,commander:`du Toit`,icon:`1sa`,
                                    pos:[676,67],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Natal Mounted Rifles`,name:`1`,designation:`Natal\nMounted`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Cape Town Highlanders`,name:`1`,designation:`Cape Town\nHighland`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`2nd Battalion, Field Force Battalion`,name:`2`,designation:`Field\nForce`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:[`4th Battalion, South African Artillery Corps`,`4th South African Field Regiment`],name:`4`,designation:``,commander:`Harpur`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`],team:`South African`,
                                    desc:`2nd Battalion, General Botha Regiment`,name:`2`,designation:`Botha`,commander:`Mason`,icon:`1sa`,
                                    pos:[1045,268],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`2nd Battalion, General Botha Regiment`,name:`2`,designation:`Botha`,commander:`Mason`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`,`Machine Gun`],team:`South African`,
                                    desc:`Machine Gun Battalion "President Steyn"`,name:`PS`,designation:``,commander:`Minnaar`,icon:`1sa`,
                                    pos:[624,171],
                                    elements:[
                                        {level:3,type:`Motorized Machine Gun`,team:`South African`,desc:`Machine Gun Battalion "President Steyn"`,name:`PS`,designation:``,commander:`Minnaar`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`South African`,
                                    desc:[`6th South African Armored Car Battalion`,`6th South African Armoured Car Regiment`],name:`6`,designation:``,commander:`Short`,icon:`1sa`,
                                    pos:[813,402],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`South African`,desc:[`6th South African Armored Car Battalion`,`6th South African Armoured Car Regiment`],name:`6`,designation:``,commander:`Short`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:`4th Indian Division`,name:`4`,designation:``,commander:`Briggs`,icon:`4id`,
                            pos:[1739,666],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`11th Indian Infantry Brigade`,name:`11`,designation:``,commander:`Anderson`,icon:`4id`,
                                    pos:[2152,534],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Queen's Own Cameron Highlanders`,name:`2`,designation:`Cameron\nHighlanders`,commander:`Duncan`},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`1st Battalion, 6th Rajputana Rifles`,name:`1/6`,designation:`Rajputana`,commander:`Quayle`},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`2nd Battalion, 5th Mahratta Light Infantry`,name:`2/5`,designation:`Mahratta`,commander:`Doyle`},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`25th Battalion, Royal Artillery`,`25th Field Regiment, Royal Artillery`],name:`25`,designation:``,commander:`Pope`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`29th Indian Infantry Brigade`,name:`29`,designation:``,commander:`Reid`,icon:`4id`,
                                    pos:[1425,574],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, Worcestershire Regiment`,name:`1`,designation:`Worcester`,commander:`Knight`},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`1st Battalion, 5th Mahratta Light Infantry`,name:`1/5`,designation:`Mahratta`,commander:`Mahant`},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`3rd Battalion, 2nd Punjab Regiment`,name:`3/2`,designation:`Punjab`,commander:`Dean`},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`3rd Battalion, Royal Artillery`,`3rd Field Regiment, Royal Artillery`],name:`3`,designation:``,commander:`Teesdale`},
                                    ],
                                },
                            ],
                        },{
                            level:1,type:[`Tank`,`Heavy`],team:`British`,
                            desc:`32nd Army Tank Brigade`,name:`32`,designation:``,commander:`Willison`,icon:`32a`,
                            pos:[923,365],
                            elements:[
                                {level:3,type:`Slow Tank`,team:`British`,desc:[`4th Battalion, Royal Tank Regiment`,`4th Royal Tank Regiment`],name:`4`,designation:`Royal Tank\nRegiment`,commander:`Reeve`},
                                {level:3,type:`Slow Tank`,team:`British`,desc:[`7th Battalion, Royal Tank Regiment`,`7th Royal Tank Regiment`],name:`7`,designation:`Royal Tank\nRegiment`,commander:`Foote`},
                            ],
                        },{
                            level:1,type:[`Infantry`,`Tank`],team:`Italian`,
                            desc:[`Army Corps Reconnaissance Regrouping`,`Raggruppamento Esplorante del XXII Corpo d'Armata`],name:`RECA`,designation:`XXII`,commander:`de Meo`,icon:``,
                            pos:[266,1241],
                            elements:[
                                {
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`Infantry Regiment "Giovani Fascisti"`,`Reggimento di Fanteria "Giovani Fascisti"`],name:`GF`,designation:``,commander:`Nannini`,icon:``,
                                    pos:[456,1241],
                                    elements:[
                                        {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`1st Battalion, Infantry Regiment "Giovani Fascisti"`,`I Battaglione Fucilieri, Reggimento di Fanteria "Giovani Fascisti"`],name:`1`,designation:`Mi Scaglio\na Ruina`,commander:`Balisti`},
                                        {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`2nd Battalion, Infantry Regiment "Giovani Fascisti"`,`II Battaglione Fucilieri, Reggimento di Fanteria "Giovani Fascisti"`],name:`2`,designation:`Abbi\nFede`,commander:`Benedetti`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`,`Motorized`],team:`Italian`,
                                    desc:[`Flying Batteries Regrouping`,`Raggruppamento Batterie Volanti`],name:`RBV`,designation:``,commander:`Nicolardi`,icon:``,
                                    pos:[366,1241],
                                    elements:[
                                        {level:3,type:`Motorized Small Artillery`,team:`Italian`,desc:[`14th Group, Flying Batteries Regrouping`,`XIV Gruppo, Raggruppamento Batterie Volanti`],name:`14`,designation:`RBV`,commander:`da Bino`},
                                        {level:3,type:`Motorized Small Artillery`,team:`Italian`,desc:[`15th Group, Flying Batteries Regrouping`,`XV Gruppo, Raggruppamento Batterie Volanti`],name:`15`,designation:`RBV`,commander:`Abeille`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`60th Infantry Division "Sabratha"`,`60ª Divisione di Fanteria Autotransportabile "Sabratha"`],name:`60`,designation:`Sabratha`,commander:`Soldarelli`,icon:`sabratha`,
                            pos:[340,383],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`85th Infantry Regiment`,`85° Reggimento di Fanteria "Sabratha"`],name:`85`,designation:`Sabratha`,commander:`Grimaldi`,icon:`sabratha`,
                                    pos:[470,250],
                                    elements:[
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`1st Battalion, 85th Infantry Regiment`,`I Battaglione Fucilieri, 85° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`1`,designation:`85`,commander:`Angelozzi`},
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`2nd Battalion, 85th Infantry Regiment`,`II Battaglione Fucilieri, 85° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`2`,designation:`85`,commander:`Morosini`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`86th Infantry Regiment`,`86° Reggimento di Fanteria "Sabratha"`],name:`86`,designation:`Sabratha`,commander:`Castrignanò`,icon:`sabratha`,
                                    pos:[479,450],
                                    elements:[
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`1st Battalion, 86th Infantry Regiment`,`I Battaglione Fucilieri, 86° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`1`,designation:`86`,commander:`Velosa`},
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`2nd Battalion, 86th Infantry Regiment`,`II Battaglione Fucilieri, 86° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`2`,designation:`86`,commander:`Piana`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`Artillery Regrouping "Sabratha"`,`Raggruppamento Artiglieria "Sabratha"`],name:`RA`,designation:`Sabratha`,commander:`Ferrario`,icon:`sabratha`,
                                    pos:[390,283],
                                    elements:[
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`283rd Group, 14th Frontier Guards Artillery Regiment`,`CCLXXXIII Gruppo, 14° Reggimento Artiglieria Guardia alla Frontiera`],name:`283`,designation:`Frontier\nGuard`,commander:`Parrella`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`284th Group, 14th Frontier Guards Artillery Regiment`,`CCLXXXIV Gruppo, 14° Reggimento Artiglieria Guardia alla Frontiera`],name:`284`,designation:`Frontier\nGuard`,commander:`Rocchi`},
                                    ],
                                },{
                                    level:3,type:[`Machine Gun`,`Mortar`,`Anti-Tank`],team:`Italian`,
                                    desc:[`551st Mixed Support Battalion`,`DLI Battaglione Armi d'Accompagnamento`],name:`551`,designation:``,commander:`Bobbio`,icon:`trento`,
                                    pos:[490,728],
                                    elements:[
                                        {level:3,type:`Mixed Support`,team:`Italian`,desc:[`551st Mixed Support Battalion`,`DLI Battaglione Armi d'Accompagnamento`],name:`551`,designation:``,commander:`Bobbio`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`102nd Infantry Division "Trento"`,`102ª Divisione di Fanteria Motorizzata "Trento"`],name:`102`,designation:`Trento`,commander:`Scotti`,icon:`trento`,
                            pos:[448,648],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`61st Infantry Regiment`,`61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[634,564],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 61st Infantry Regiment`,`I Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 61st Infantry Regiment`,`II Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`62nd Infantry Regiment`,`62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[641,725],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 62nd Infantry Regiment`,`I Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 62nd Infantry Regiment`,`II Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`7th Bersaglieri Regiment`,`7° Reggimento Bersaglieri`],name:`7`,designation:`Bersaglieri`,commander:`Scirocco`,icon:`trento`,
                                    pos:[235,567],
                                    elements:[
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`10th Bersaglieri Battalion`,`10° Battaglione Bersaglieri`],name:`10`,designation:`Bersaglieri`,commander:`Adolfato`},
                                        {level:3,type:`Motorized Machine Gun Bersaglieri`,team:`Italian`,desc:[`11th Bersaglieri Battalion`,`11° Battaglione Bersaglieri`],name:`11`,designation:`Bersaglieri`,commander:`Straziota`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`46th Artillery Regiment`,`46° Reggimento Artiglieria "Trento"`],name:`46`,designation:`Trento`,commander:`Grati`,icon:`trento`,
                                    pos:[548,628],
                                    elements:[
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`1st Group, 46th Artillery Regiment`,`I Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`1`,designation:`46`,commander:`Giannimi`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`3rd Group, 46th Artillery Regiment`,`III Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`3`,designation:`46`,commander:`Salvo`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Tank`],team:`German`,
                            desc:[`15th Panzer Division`,`15. Panzer-Division`],name:`15`,designation:``,commander:`von Värst`,icon:`15pz`,
                            pos:[300,920],
                            elements:[
                                {
                                    level:2,type:[`Tank`],team:`German`,
                                    desc:[`8th Panzer Regiment`,`Panzer-Regiment 8`],name:`8`,designation:``,commander:`Teege`,icon:`15pz`,
                                    pos:[385,920],
                                    elements:[
                                        {level:3,type:`Medium Tank`,team:`German`,desc:[`1st Battalion, 8th Panzer Regiment`,`I./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:`Kümmel`},
                                        {level:3,type:`Medium Tank`,team:`German`,desc:[`2nd Battalion, 8th Panzer Regiment`,`II./Panzer-Regiment 8`],name:`2`,designation:`8`,commander:`Wahl`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`115th Rifle Regiment`,`Schützen-Regiment 115`],name:`115`,designation:``,commander:`Baade`,icon:`15pz`,
                                    pos:[460,920],
                                    elements:[
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`1st Battalion, 115th Rifle Regiment`,`I./Schützen-Regiment 115`],name:`1`,designation:`115`,commander:`von Grolmann`},
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`2nd Battalion, 115th Rifle Regiment`,`II./Schützen-Regiment 115`],name:`2`,designation:`115`,commander:`Roske`},
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`3rd Battalion, 115th Rifle Regiment`,`III./Schützen-Regiment 115`],name:`3`,designation:`115`,commander:`Warrelmann`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`,`Motorized`],team:`German`,
                                    desc:[`33rd Artillery Regiment`,`Artillerie-Regiment (mot.) 33`],name:`33`,designation:``,commander:`Crasemann`,icon:`15pz`,
                                    pos:[215,920],
                                    elements:[
                                        {level:3,type:`Motorized Concentrated Artillery`,team:`German`,desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:`Mayer`},
                                        {level:3,type:`Motorized Half Artillery`,team:`German`,desc:[`2nd "Half and Half" Battalion, 33rd Artillery Regiment`,`II./Artillerie-Regiment (mot.) 33 "Halb und Halb"`],name:`2`,designation:`33`,commander:`Mesmer`},
                                        {level:3,type:`Motorized Heavy Artillery`,team:`German`,desc:[`3rd Battalion, 33rd Artillery Regiment`,`III./Artillerie-Regiment (mot.) 33`],name:`3`,designation:`33`,commander:`Bickel`},
                                    ],
                                },{
                                    level:3,type:[`Anti-Tank`,`Motorized`],team:`German`,
                                    desc:[`33rd Anti-Tank Battalion`,`Panzerjäger-Abteilung 33`],name:`33`,designation:``,commander:`Beil`,icon:`15pz`,
                                    pos:[300,980],
                                    elements:[
                                        {level:3,type:`Motorized Anti-Tank`,team:`German`,desc:[`33rd Anti-Tank Battalion`,`Panzerjäger-Abteilung 33`],name:`33`,designation:``,commander:`Beil`}, 
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`German`,
                                    desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`von Hößlin`,icon:`15pz`,
                                    pos:[530,920],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`German`,desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`von Hößlin`}, 
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`German`,
                            desc:[`90th Light "Afrika" Division`,`90. Leichte-Division`],name:`A`,designation:`Light`,commander:`Kleemann`,icon:`90l`,
                            pos:[300,1120],
                            elements:[
                                {
                                    level:2,type:[`Infantry`,`Mixed`],team:`German`,
                                    desc:`Sonderverband 288`,name:`288`,designation:``,commander:`Menton`,icon:`90l`,
                                    pos:[385,1120],
                                    elements:[
                                        {level:3,type:`Mixed Combat`,team:`German`,desc:`1st Sperrverband, Sonderverband 288`,name:`1`,designation:``,commander:`Daumiller`},
                                        {level:3,type:`Mixed Infantry`,team:`German`,desc:`2nd Sperrverband, Sonderverband 288`,name:`2`,designation:``,commander:`Borhardt`},
                                    ],
                                },{
                                    level:4,type:[`Tank`,`Recon`,`Tracked`],team:`German`,
                                    desc:[`580th Reconnaissance Company`,`Aufklärungs-Kompanie 580`],name:`580`,designation:``,commander:`Hohmeyer`,icon:`90l`,
                                    pos:[453,1120],
                                    elements:[
                                        {level:4,type:`Armored Car Company`,team:`German`,desc:[`580th Reconnaissance Company`,`Aufklärungs-Kompanie 580`],name:`580`,designation:``,commander:`Hohmeyer`}, 
                                    ],
                                },
                            ],
                        },{
                            level:1,type:[`Infantry`,`Semi-Motorized`],team:`German`,
                            desc:[`15th Rifle Brigade`,`Schützen-Brigade 15`],name:`15`,designation:``,commander:`Menny`,icon:`90l`,
                            pos:[410,70],
                            elements:[
                                {
                                    level:2,type:[`Infantry`,`Semi-Motorized`],team:`German`,
                                    desc:[`200th Light Infantry Regiment`,`Leichtes Infanterie-Regiment 200`],name:`200`,designation:``,commander:`Geißler`,icon:`90l`,
                                    pos:[490,95],
                                    elements:[
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`1st Battalion, 200th Light Infantry Regiment`,`I./Leichtes Infanterie-Regiment 200`],name:`1`,designation:`200`,commander:`von Debschütz`}, 
                                        {level:3,type:`Semi-Motorized Infantry`,team:`German`,desc:[`2nd Battalion, 200th Light Infantry Regiment`,`II./Leichtes Infanterie-Regiment 200`],name:`2`,designation:`200`,commander:`Panzenhagen`},
                                    ],
                                },{
                                    level:3,type:[`Engineer`,`Motorized`],team:`German`,
                                    desc:[`33rd Engineer Battalion`,`Panzer-Pionier-Bataillon 33`],name:`33`,designation:``,commander:`Oberembt`,icon:`15pz`,
                                    pos:[320,55],
                                    elements:[
                                        {level:3,type:`Motorized Engineer`,team:`German`,desc:[`33rd Engineer Battalion`,`Panzer-Pionier-Bataillon 33`],name:`33`,designation:``,commander:`Oberembt`}, 
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],reserve:[
            ],
        },{
            name:[`Matruh`,`Base`],
            term:`Matruh`,
            unitScale:0.8,
            cityScale:0.8,
            city:[
                {name:`Abar el Kanayis`,owner:0,type:0,pos:[96,932]},
                {name:`Ragabet Mastura`,owner:1,type:1,pos:[139,612]},
                {name:`Bir el Hukuma`,owner:0,type:0,pos:[373,700]},
                {name:`Qaryet Riguh`,owner:2,type:0,pos:[407,381]},
                {name:`Zawyet Umm el Rakham`,owner:2,type:1,pos:[522,17]},
                {name:`Qaryet el Qibashi`,owner:0,type:0,pos:[715,83]},
                {name:`Minqar Sidi Hamza`,owner:0,type:0,pos:[722,728]},
                {name:`Charing Cross`,owner:0,type:0,pos:[747,342]},
                {name:`Bir Sidi Hamza`,owner:0,type:0,pos:[769,837]},
                {name:`Qaryet el Lahamiya`,owner:0,type:0,pos:[802,484]},

                {name:`Bir Karima`,owner:0,type:0,pos:[847,1046]},
                {name:`Minqar Abu Gabr`,owner:0,type:0,pos:[983,570]},
                {name:`Mersa Matruh`,owner:0,type:1,pos:[987,114]},
                {name:`Minqar Qaim`,owner:0,type:0,pos:[993,930]},
                {name:`Bir Khalda`,owner:0,type:0,pos:[1018,1241]},
                {name:`Ras Alam el Rum`,owner:0,type:0,pos:[1179,102]},
                {name:`Bir Sarahna`,owner:0,type:0,pos:[1217,723]},
                {name:`Bir Abu Batta`,owner:0,type:0,pos:[1212,961]},
                {name:`Bir Shineina`,owner:0,type:0,pos:[1267,833]},
                {name:`Gerawla`,owner:0,type:0,pos:[1281,388]},
                
                {name:`Ras Hawala`,owner:0,type:0,pos:[1605,468]},
                {name:`Bir el Wisheika`,owner:0,type:0,pos:[1742,1067]},
                {name:`Maaten Baggush`,owner:0,type:0,pos:[1844,545]},
                {name:`Qaryet Abu Khashim Ummu`,owner:0,type:0,pos:[2109,1064]},
                {name:`Ras el Kanayis`,owner:0,type:0,pos:[2240,449]},
                {name:`Fuka`,owner:0,type:1,pos:[2299,719]},
            ],connect:[
                {name:[`Fuka`,`Ras el Kanayis`]},
                {name:[`Ras el Kanayis`,`Maaten Baggush`]},
                {name:[`Maaten Baggush`,`Ras Hawala`]},
                {name:[`Gerawla`,`Ras Hawala`]},
                {name:[`Gerawla`,`Ras Alam el Rum`]},
                {name:[`Mersa Matruh`,`Ras Alam el Rum`]},
                {name:[`Mersa Matruh`,`Qaryet el Qibashi`]},
                {name:[`Zawyet Umm el Rakham`,`Qaryet el Qibashi`]},
                {name:[`Mersa Matruh`,`Charing Cross`]},
                {name:[`Qaryet el Qibashi`,`Charing Cross`]},

                {name:[`Qaryet el Lahamiya`,`Charing Cross`]},
                {name:[`Qaryet el Lahamiya`,`Minqar Abu Gabr`]},
                {name:[`Minqar Abu Gabr`,`Gerawla`]},
                {name:[`Gerawla`,`Mersa Matruh`]},
                {name:[`Bir Sarahna`,`Minqar Abu Gabr`]},
                {name:[`Bir Sarahna`,`Ras Hawala`]},
                {name:[`Bir Sarahna`,`Bir Shineina`]},
                {name:[`Bir Abu Batta`,`Bir Shineina`]},
                {name:[`Bir Abu Batta`,`Minqar Qaim`]},
                {name:[`Bir Abu Batta`,`Bir Khalda`]},

                {name:[`Bir Karima`,`Minqar Qaim`]},
                {name:[`Bir Karima`,`Bir Khalda`]},
                {name:[`Bir Shineina`,`Bir el Wisheika`]},
                {name:[`Maaten Baggush`,`Bir el Wisheika`]},
                {name:[`Qaryet Abu Khashim Ummu`,`Bir el Wisheika`]},
                {name:[`Qaryet Abu Khashim Ummu`,`Fuka`]},
                {name:[`Bir Sidi Hamza`,`Minqar Qaim`]},
                {name:[`Bir Sidi Hamza`,`Minqar Sidi Hamza`]},
                {name:[`Qaryet el Lahamiya`,`Minqar Sidi Hamza`]},
                {name:[`Bir el Hukuma`,`Minqar Sidi Hamza`]},

                {name:[`Bir Sidi Hamza`,`Bir Karima`]},
                {name:[`Minqar Abu Gabr`,`Minqar Qaim`]},
                {name:[`Bir el Hukuma`,`Ragabet Mastura`]},
                {name:[`Ragabet Mastura`,`Abar el Kanayis`]},
                {name:[`Bir el Hukuma`,`Abar el Kanayis`]},
                {name:[`Bir Karima`,`Abar el Kanayis`]},
                {name:[`Qaryet Riguh`,`Ragabet Mastura`]},
                {name:[`Qaryet Riguh`,`Zawyet Umm el Rakham`]},
                {name:[`Qaryet Riguh`,`Charing Cross`]},
                {name:[`Qaryet Riguh`,`Bir el Hukuma`]},

                {name:[`Minqar Abu Gabr`,`Minqar Sidi Hamza`]},
                {name:[`Fuka`,`Maaten Baggush`]},
            ],team:[
                {name:`British`,term:`britain`,player:0,quality:1},
                {name:`New Zealand`,term:`new zealand`,player:0,quality:1.05},
                {name:`South African`,term:`south africa`,player:0,quality:0.9},
                {name:`Polish`,term:`poland`,player:0,quality:1},
                {name:`Australian`,term:`australia`,player:0,quality:1.05},
                {name:`Czechoslovak`,term:`czechoslovakia`,player:0,quality:1},
                {name:`Māori`,term:`maori`,player:0,quality:1.05},
                {name:`Indian`,term:`india`,player:0,quality:1},
                {name:`German`,term:`germany`,player:1,quality:1.25},
                {name:`Italian`,term:`italy`,player:2,quality:0.9},
            ],player:[
                {name:`British`,color:[0,100,250],side:0},
                {name:`German`,color:[150,50,0],side:1},
                {name:`Italian`,color:[0,200,0],side:1},
            ],side:[
                {name:`Allied`,supply:25},
                {name:`Axis`,supply:20},
            ],unit:[
                {
                    name:`Battle of Mersa Matruh`,
                    battalions:[[28],[14,18]],bonus:false,partition:[[0],[1],[2]],
                    unit:[
                        {
                            level:0,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:`4th Indian Division`,name:`4`,designation:``,commander:`Briggs`,icon:`4id`,
                            pos:[987,124],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`25th Indian Infantry Brigade`,name:`25`,designation:``,commander:`Mountain`,icon:`4id`,
                                    pos:[735,108],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`1st Battalion, 5th Mahratta Light Infantry`,name:`1/5`,designation:`Mahratta`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`2nd Battalion, 11th Sikh Regiment`,name:`2/11`,designation:`Sikh`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`3rd Battalion, 9th Jat Regiment`,name:`3/9`,designation:`Jat`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`157th Battalion, Royal Artillery`,`157th Field Regiment, Royal Artillery`],name:`157`,designation:``,commander:``},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`29th Indian Infantry Brigade`,name:`29`,designation:``,commander:`Reid`,icon:`4id`,
                                    pos:[769,837],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`,`Motorized`],team:`Indian`,
                                            desc:`Leathercol`,name:`Leathercol`,designation:``,commander:`Leatherdale`,icon:`4id`,
                                            pos:[538,503],
                                            elements:[
                                                {level:3,type:`Weaker Motorized Infantry`,team:`Indian`,desc:`Leathercol`,name:`Leathercol`,designation:``,commander:`Leatherdale`},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`Indian`,
                                            desc:`Gleecol`,name:`Gleecol`,designation:``,commander:`Gleeson`,icon:`4id`,
                                            pos:[676,565],
                                            elements:[
                                                {level:3,type:`Weaker Motorized Infantry`,team:`Indian`,desc:`Gleecol`,name:`Gleecol`,designation:``,commander:`Gleeson`},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`Indian`,
                                            desc:`Scotcol`,name:`Scotcol`,designation:``,commander:`Scott`,icon:`4id`,
                                            pos:[373,700],
                                            elements:[
                                                {level:3,type:`Weaker Motorized Infantry`,team:`Indian`,desc:`Scotcol`,name:`Scotcol`,designation:``,commander:`Scott`},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`,`Motorized`],team:`British`,
                                            desc:[`3rd Battalion, Royal Artillery`,`3rd Field Regiment, Royal Artillery`],name:`3`,designation:``,commander:`Teesdale`,icon:`4id`,
                                            pos:[722,728],
                                            elements:[
                                                {level:3,type:`Weaker Motorized Artillery`,team:`British`,desc:[`3rd Battalion, Royal Artillery`,`3rd Field Regiment, Royal Artillery`],name:`3`,designation:``,commander:`Teesdale`},
                                            ],
                                        },
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Superior`],team:`British`,
                                    desc:[`8th Battalion, Irish Hussars`,`8th Irish Hussars`],name:`8`,designation:`Irish\nHussars`,commander:`Kilkelly`,icon:`4id`,
                                    pos:[670,220],
                                    elements:[
                                        {level:3,type:`Superior Tank`,team:`British`,desc:[`8th Battalion, Irish Hussars`,`8th Irish Hussars`],name:`8`,designation:`Irish\nHussars`,commander:`Kilkelly`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`South African`,
                                    desc:[`6th South African Armored Car Battalion`,`6th South African Armoured Car Regiment`],name:`6`,designation:``,commander:`Short`,icon:`4id`,
                                    pos:[717,342],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`South African`,desc:[`6th South African Armored Car Battalion`,`6th South African Armoured Car Regiment`],name:`6`,designation:``,commander:`Short`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Tank`],team:`British`,
                            desc:[`7th Armored Division`,`7th Armoured Division`],name:`7`,designation:``,commander:`Renton`,icon:`7a`,
                            pos:[847,1046],
                            elements:[
                                {
                                    level:1,type:[`Tank`],team:`British`,
                                    desc:[`4th Armored Brigade`,`4th Armoured Brigade`],name:`4`,designation:``,commander:`Fisher`,icon:`4ab`,
                                    pos:[250,1060],
                                    elements:[
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`3rd Battalion, Royal Tank Regiment`,`3rd Royal Tank Regiment`],name:`3`,designation:`Royal Tank\nRegiment`,commander:``},
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`5th Battalion, Royal Tank Regiment`,`5th Royal Tank Regiment`],name:`5`,designation:`Royal Tank\nRegiment`,commander:`Uniacke`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:``},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:``,commander:``},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`7th Motor Brigade`,name:`7`,designation:``,commander:`Garmoyle`,icon:`7sg`,
                                    pos:[400,920],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, King's Royal Rifle Corps`,name:`2`,designation:`King's Royal\nRifle Corps`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Turner`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:[`London Rifle Brigade Battalion`,`London Rifle Brigade`],name:`L`,designation:`Rifle\nBrigade`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`60th (North Midland) Battalion, Royal Artillery`,`60th (North Midland) Field Regiment, Royal Artillery`],name:`60`,designation:`North\nMidland`,commander:`Hallifax`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`British`,
                                    desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`,icon:`7a`,
                                    pos:[96,932],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`British`,desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                            desc:`2nd New Zealand Division`,name:`2`,designation:``,commander:`Freyberg`,icon:`2nz`,
                            pos:[993,930],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                                    desc:`4th New Zealand Infantry Brigade`,name:`4`,designation:``,commander:`Inglis`,icon:`2nz`,
                                    pos:[913,910],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`18th New Zealand Infantry Battalion`,name:`18`,designation:``,commander:`Peart`},
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`19th New Zealand Infantry Battalion`,name:`19`,designation:``,commander:`Hartnell`},
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`20th New Zealand Infantry Battalion`,name:`20`,designation:``,commander:`Burrows`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                                    desc:`5th New Zealand Infantry Brigade`,name:`5`,designation:``,commander:`Kippenberger`,icon:`2nz`,
                                    pos:[1073,950],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`21st New Zealand Infantry Battalion`,name:`21`,designation:``,commander:`Fitzpatrick`},
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`22nd New Zealand Infantry Battalion`,name:`22`,designation:``,commander:`Andrew`},
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`23rd New Zealand Infantry Battalion`,name:`23`,designation:``,commander:`Leckie`},
                                    ],
                                },{
                                    level:1,type:[`Artillery`,`Motorized`],team:`New Zealand`,
                                    desc:`2nd New Zealand Field Brigade`,name:`2`,designation:``,commander:`Miles`,icon:`2nz`,
                                    pos:[976,998],
                                    elements:[
                                        {level:3,type:`Motorized Artillery`,team:`New Zealand`,desc:[`4th New Zealand Artillery Battalion`,`4th New Zealand Field Regiment`],name:`4`,designation:``,commander:`Duff`},
                                        {level:3,type:`Motorized Artillery`,team:`New Zealand`,desc:[`5th New Zealand Artillery Battalion`,`5th New Zealand Field Regiment`],name:`5`,designation:``,commander:`Fraser`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`],team:`Māori`,
                                    desc:`28th "Māori" New Zealand Infantry Battalion`,name:`28`,designation:``,commander:`Dittmer`,icon:`2nz`,
                                    pos:[1008,870],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`Māori`,desc:`28th "Māori" New Zealand Infantry Battalion`,name:`28`,designation:``,commander:`Dittmer`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`60th Infantry Division "Sabratha"`,`60ª Divisione di Fanteria Autotransportabile "Sabratha"`],name:`60`,designation:`Sabratha`,commander:`Soldarelli`,icon:`sabratha`,
                            pos:[392,45],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`85th Infantry Regiment`,`85° Reggimento di Fanteria "Sabratha"`],name:`85`,designation:`Sabratha`,commander:`Grimaldi`,icon:`sabratha`,
                                    pos:[522,50],
                                    elements:[
                                        {level:3,type:`Small Infantry`,team:`Italian`,desc:[`1st Battalion, 85th Infantry Regiment`,`I Battaglione Fucilieri, 85° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`1`,designation:`85`,commander:`Angelozzi`},
                                        {level:3,type:`Small Infantry`,team:`Italian`,desc:[`2nd Battalion, 85th Infantry Regiment`,`II Battaglione Fucilieri, 85° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`2`,designation:`85`,commander:`Morosini`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`86th Infantry Regiment`,`86° Reggimento di Fanteria "Sabratha"`],name:`86`,designation:`Sabratha`,commander:`Castrignanò`,icon:`sabratha`,
                                    pos:[472,160],
                                    elements:[
                                        {level:3,type:`Small Infantry`,team:`Italian`,desc:[`1st Battalion, 86th Infantry Regiment`,`I Battaglione Fucilieri, 86° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`1`,designation:`86`,commander:`Velosa`},
                                        {level:3,type:`Small Infantry`,team:`Italian`,desc:[`2nd Battalion, 86th Infantry Regiment`,`II Battaglione Fucilieri, 86° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`2`,designation:`86`,commander:`Piana`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`Artillery Regrouping "Sabratha"`,`Raggruppamento Artiglieria "Sabratha"`],name:`RA`,designation:`Sabratha`,commander:`Ferrario`,icon:`sabratha`,
                                    pos:[340,123],
                                    elements:[
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`283rd Group, 14th Frontier Guards Artillery Regiment`,`CCLXXXIII Gruppo, 14° Reggimento Artiglieria Guardia alla Frontiera`],name:`283`,designation:`Frontier\nGuard`,commander:`Parrella`},
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`284th Group, 14th Frontier Guards Artillery Regiment`,`CCLXXXIV Gruppo, 14° Reggimento Artiglieria Guardia alla Frontiera`],name:`284`,designation:`Frontier\nGuard`,commander:`Rocchi`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`102nd Infantry Division "Trento"`,`102ª Divisione di Fanteria Motorizzata "Trento"`],name:`102`,designation:`Trento`,commander:`Scotti`,icon:`trento`,
                            pos:[228,298],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`61st Infantry Regiment`,`61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[427,271],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 61st Infantry Regiment`,`I Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 61st Infantry Regiment`,`II Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`62nd Infantry Regiment`,`62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[407,381],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 62nd Infantry Regiment`,`I Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 62nd Infantry Regiment`,`II Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`46th Artillery Regiment`,`46° Reggimento Artiglieria "Trento"`],name:`46`,designation:`Trento`,commander:`Grati`,icon:`trento`,
                                    pos:[328,338],
                                    elements:[
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`1st Group, 46th Artillery Regiment`,`I Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`1`,designation:`46`,commander:`Giannimi`},
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`3rd Group, 46th Artillery Regiment`,`III Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`3`,designation:`46`,commander:`Salvo`},
                                    ],
                                },
                            ],
                        },{
                            level:1,type:[`Infantry`,`Tank`],team:`Italian`,
                            desc:[`Army Corps Reconnaissance Regrouping`,`Raggruppamento Esplorante del XXII Corpo d'Armata`],name:`RECA`,designation:`XXII`,commander:`de Meo`,icon:``,
                            pos:[93,688],
                            elements:[
                                {
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`Infantry Regiment "Giovani Fascisti"`,`Reggimento di Fanteria "Giovani Fascisti"`],name:`GF`,designation:``,commander:`Nannini`,icon:``,
                                    pos:[128,767],
                                    elements:[
                                        {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`1st Battalion, Infantry Regiment "Giovani Fascisti"`,`I Battaglione Fucilieri, Reggimento di Fanteria "Giovani Fascisti"`],name:`1`,designation:`Mi Scaglio\na Ruina`,commander:`Balisti`},
                                        {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`2nd Battalion, Infantry Regiment "Giovani Fascisti"`,`II Battaglione Fucilieri, Reggimento di Fanteria "Giovani Fascisti"`],name:`2`,designation:`Abbi\nFede`,commander:`Benedetti`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`,`Motorized`],team:`Italian`,
                                    desc:[`Flying Batteries Regrouping`,`Raggruppamento Batterie Volanti`],name:`RBV`,designation:``,commander:`Nicolardi`,icon:``,
                                    pos:[174,708],
                                    elements:[
                                        {level:3,type:`Motorized Small Artillery`,team:`Italian`,desc:[`14th Group, Flying Batteries Regrouping`,`XIV Gruppo, Raggruppamento Batterie Volanti`],name:`14`,designation:`RBV`,commander:`da Bino`},
                                        {level:3,type:`Motorized Small Artillery`,team:`Italian`,desc:[`15th Group, Flying Batteries Regrouping`,`XV Gruppo, Raggruppamento Batterie Volanti`],name:`15`,designation:`RBV`,commander:`Abeille`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`7th Bersaglieri Regiment`,`7° Reggimento Bersaglieri`],name:`7`,designation:`Bersaglieri`,commander:`Scirocco`,icon:`trento`,
                                    pos:[208,777],
                                    elements:[
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`10th Bersaglieri Battalion`,`10° Battaglione Bersaglieri`],name:`10`,designation:`Bersaglieri`,commander:`Adolfato`},
                                        {level:3,type:`Motorized Machine Gun Bersaglieri`,team:`Italian`,desc:[`11th Bersaglieri Battalion`,`11° Battaglione Bersaglieri`],name:`11`,designation:`Bersaglieri`,commander:`Straziota`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Tank`],team:`German`,
                            desc:[`15th Panzer Division`,`15. Panzer-Division`],name:`15`,designation:``,commander:`von Värst`,icon:`15pz`,
                            pos:[80,600],
                            elements:[
                                {
                                    level:2,type:[`Tank`],team:`German`,
                                    desc:[`8th Panzer Regiment`,`Panzer-Regiment 8`],name:`8`,designation:``,commander:`Teege`,icon:`15pz`,
                                    pos:[240,600],
                                    elements:[
                                        {level:3,type:`Medium Tank`,team:`German`,desc:[`1st Battalion, 8th Panzer Regiment`,`I./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:`Kümmel`},
                                        {level:3,type:`Motorized Engineer`,team:`German`,desc:[`33rd Engineer Battalion`,`Panzer-Pionier-Bataillon 33`],name:`33`,designation:``,commander:`Beheim-Schwarzbach`}, 
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`115th Rifle Regiment`,`Schützen-Regiment 115`],name:`115`,designation:``,commander:`Baade`,icon:`15pz`,
                                    pos:[315,600],
                                    elements:[
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`1st Battalion, 115th Rifle Regiment`,`I./Schützen-Regiment 115`],name:`1`,designation:`115`,commander:`von Grolmann`},
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`3rd Battalion, 115th Rifle Regiment`,`III./Schützen-Regiment 115`],name:`3`,designation:`115`,commander:`Warrelmann`},
                                        {level:3,type:`Motorized Anti-Tank`,team:`German`,desc:[`33rd Anti-Tank Battalion`,`Panzerjäger-Abteilung 33`],name:`33`,designation:``,commander:`Beil`}, 
                                    ],
                                },{
                                    level:2,type:[`Artillery`,`Motorized`],team:`German`,
                                    desc:[`33rd Artillery Regiment`,`Artillerie-Regiment (mot.) 33`],name:`33`,designation:``,commander:`Crasemann`,icon:`15pz`,
                                    pos:[165,600],
                                    elements:[
                                        {level:3,type:`Motorized Concentrated Artillery`,team:`German`,desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:`Mayer`},
                                        {level:3,type:`Motorized Half Artillery`,team:`German`,desc:[`2nd "Half and Half" Battalion, 33rd Artillery Regiment`,`II./Artillerie-Regiment (mot.) 33 "Halb und Halb"`],name:`2`,designation:`33`,commander:`Mesmer`},
                                        {level:3,type:`Motorized Heavy Artillery`,team:`German`,desc:[`3rd Battalion, 33rd Artillery Regiment`,`III./Artillerie-Regiment (mot.) 33`],name:`3`,designation:`33`,commander:`Bickel`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`German`,
                                    desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`von Hößlin`,icon:`15pz`,
                                    pos:[385,600],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`German`,desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`von Hößlin`}, 
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`German`,
                            desc:[`90th Light "Afrika" Division`,`90. Leichte-Division`],name:`A`,designation:`Light`,commander:`Kleemann`,icon:`90l`,
                            pos:[80,520],
                            elements:[
                                {
                                    level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`200th Light Infantry Regiment`,`Leichtes Infanterie-Regiment 200`],name:`200`,designation:``,commander:`Geißler`,icon:`90l`,
                                    pos:[240,520],
                                    elements:[
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`1st Battalion, 200th Light Infantry Regiment`,`I./Leichtes Infanterie-Regiment 200`],name:`1`,designation:`200`,commander:`von Debschütz`},
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`2nd Battalion, 200th Light Infantry Regiment`,`II./Leichtes Infanterie-Regiment 200`],name:`2`,designation:`200`,commander:`Panzenhagen`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`288th "Afrika" Grenadier Regiment`,`Afrika-Grenadier-Regiment 288`],name:`288`,designation:``,commander:`Menton`,icon:`288svb`,
                                    pos:[165,520],
                                    elements:[
                                        {level:3,type:`Motorized Reinforced Infantry`,team:`German`,desc:[`1st Battalion, 288th "Afrika" Grenadier Regiment`,`I./Afrika-Grenadier-Regiment 288`],name:`1`,designation:`288`,commander:`Daumiller`},
                                        {level:3,type:`Motorcycle Armed Infantry`,team:`German`,desc:[`2nd Battalion, 288th "Afrika" Grenadier Regiment`,`II./Afrika-Grenadier-Regiment 288`],name:`2`,designation:`288`,commander:`Borhardt`},
                                    ],
                                },{
                                    level:4,type:[`Tank`,`Recon`,`Tracked`],team:`German`,
                                    desc:[`580th Reconnaissance Company`,`Aufklärungs-Kompanie 580`],name:`580`,designation:``,commander:`Hohmeyer`,icon:`90l`,
                                    pos:[78,460],
                                    elements:[
                                        {level:4,type:`Armored Car Company`,team:`German`,desc:[`580th Reconnaissance Company`,`Aufklärungs-Kompanie 580`],name:`580`,designation:``,commander:`Hohmeyer`}, 
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],reserve:[
            ],
        },{
            name:[`Tobruk`,`Reverse`],
            term:`Tobruk`,
            unitScale:1,
            cityScale:0.8,
            city:[
                {name:`Elwat et Tamar`,owner:0,type:0,pos:[52,870]},
                {name:`Maabus el Rigel`,owner:0,type:0,pos:[150,1237]},
                {name:`El Mrassas`,owner:0,type:0,pos:[212,488]},
                {name:`Acroma`,owner:0,type:1,pos:[461,908]},
                {name:`Carmus el Mussa`,owner:0,type:0,pos:[486,744]},
                {name:`Bir el Maclub`,owner:2,type:0,pos:[574,404]},
                {name:`Wadi es Sahel`,owner:2,type:0,pos:[581,533]},
                {name:`Water Tower`,owner:2,type:0,pos:[636,726]},
                {name:`Fig Tree`,owner:2,type:0,pos:[660,545]},
                {name:`Ras el Madauar`,owner:2,type:0,pos:[696,777]},

                {name:`Bir el Madauar`,owner:0,type:0,pos:[758,870]},
                {name:`Ras Belgamel`,owner:2,type:0,pos:[777,381]},
                {name:`Bianca`,owner:2,type:0,pos:[818,682]},
                {name:`Gasr el Cleicha`,owner:0,type:0,pos:[820,1017]},
                {name:`Bir Baccara`,owner:2,type:0,pos:[840,510]},
                {name:`Bir el Giaser`,owner:2,type:0,pos:[858,763]},
                {name:`Hagiag er Raml`,owner:0,type:0,pos:[975,1250]},
                {name:`Bir el Carmusa`,owner:0,type:0,pos:[996,905]},
                {name:`Fort Pilastrino`,owner:2,type:0,pos:[999,555]},
                {name:`Bir el Fras`,owner:2,type:0,pos:[1031,760]},

                {name:`Fort Perrone`,owner:2,type:0,pos:[1034,234]},
                {name:`Fort Airente`,owner:2,type:0,pos:[1054,364]},
                {name:`Sidi Cheiralla`,owner:2,type:0,pos:[1091,842]},
                {name:`Fort Solaro`,owner:2,type:0,pos:[1106,442]},
                {name:`Beach Hospital`,owner:2,type:0,pos:[1124,154]},
                {name:`Tobruk`,owner:2,type:1,pos:[1196,244]},
                {name:`NAAFI`,owner:2,type:0,pos:[1229,315]},
                {name:`Bir es Sciafsciaf`,owner:2,type:0,pos:[1240,684]},
                {name:`Bir el Haleiga`,owner:2,type:0,pos:[1261,804]},
                {name:`King's Cross`,owner:2,type:0,pos:[1317,554]},

                {name:`Fort Marcucci`,owner:2,type:0,pos:[1343,370]},
                {name:`Bir Lasin`,owner:2,type:0,pos:[1359,701]},
                {name:`Bir Junes`,owner:2,type:0,pos:[1455,726]},
                {name:`Bir el Mentechsa`,owner:2,type:0,pos:[1506,584]},
                {name:`El Adem`,owner:0,type:1,pos:[1511,1234]},
                {name:`Bir el Azazi`,owner:0,type:0,pos:[1531,889]},
                {name:`Fort Cheteita`,owner:2,type:0,pos:[1565,340]},
                {name:`Sidi Daud`,owner:2,type:0,pos:[1766,499]},
                {name:`Magen Suesi`,owner:0,type:0,pos:[1828,639]},
                {name:`Sidi Belgasem`,owner:0,type:0,pos:[1915,486]},

                {name:`Bir Salem`,owner:0,type:0,pos:[1906,1155]},
                {name:`El Duda`,owner:0,type:1,pos:[2073,946]},
                {name:`Magen Belhamed`,owner:0,type:0,pos:[2086,768]},
                {name:`Abiar el Amar`,owner:0,type:0,pos:[2182,1194]},
                {name:`Belhamed`,owner:0,type:0,pos:[2325,901]},
            ],connect:[
                {name:[`Fort Pilastrino`,`Fort Solaro`]},
                {name:[`Fort Airente`,`Fort Solaro`]},
                {name:[`Fort Airente`,`Fort Perrone`]},
                {name:[`Fort Airente`,`Tobruk`]},
                {name:[`Fort Perrone`,`Beach Hospital`]},
                {name:[`NAAFI`,`Tobruk`]},
                {name:[`Fort Pilastrino`,`King's Cross`]},
                {name:[`King's Cross`,`NAAFI`]},
                {name:[`Fort Solaro`,`NAAFI`]},
                {name:[`King's Cross`,`Bir el Mentechsa`]},

                {name:[`NAAFI`,`Fort Marcucci`]},
                {name:[`Fort Marcucci`,`Fort Cheteita`]},
                {name:[`Sidi Daud`,`Fort Cheteita`]},
                {name:[`Sidi Daud`,`Sidi Belgasem`]},
                {name:[`Sidi Daud`,`Magen Suesi`]},
                {name:[`Sidi Belgasem`,`Magen Suesi`]},
                {name:[`King's Cross`,`Bir Lasin`]},
                {name:[`Bir Lasin`,`Bir Junes`]},
                {name:[`Bir Junes`,`Bir el Azazi`]},
                {name:[`Bir Lasin`,`Bir el Haleiga`]},

                {name:[`Bir el Haleiga`,`Bir el Azazi`]},
                {name:[`Fort Pilastrino`,`Bir es Sciafsciaf`]},
                {name:[`Bir es Sciafsciaf`,`Bir Lasin`]},
                {name:[`Fort Pilastrino`,`Bir el Fras`]},
                {name:[`Bir el Fras`,`Sidi Cheiralla`]},
                {name:[`Bir el Carmusa`,`Bir el Fras`]},
                {name:[`Bir el Carmusa`,`Sidi Cheiralla`]},
                {name:[`Sidi Cheiralla`,`Bir el Haleiga`]},
                {name:[`Fort Pilastrino`,`Bianca`]},
                {name:[`Fort Pilastrino`,`Bir Baccara`]},

                {name:[`Bianca`,`Water Tower`]},
                {name:[`Bianca`,`Ras el Madauar`]},
                {name:[`Bianca`,`Bir el Giaser`]},
                {name:[`Water Tower`,`Ras el Madauar`]},
                {name:[`Ras el Madauar`,`Bir el Madauar`]},
                {name:[`Ras el Madauar`,`Bir el Giaser`]},
                {name:[`Bir el Giaser`,`Bir el Fras`]},
                {name:[`Water Tower`,`Carmus el Mussa`]},
                {name:[`Water Tower`,`Fig Tree`]},
                {name:[`Fig Tree`,`Bir Baccara`]},

                {name:[`Fig Tree`,`Wadi es Sahel`]},
                {name:[`Bir el Maclub`,`Ras Belgamel`]},
                {name:[`Ras Belgamel`,`Fort Airente`]},
                {name:[`Bir el Maclub`,`Wadi es Sahel`]},
                {name:[`Ras Belgamel`,`Bir Baccara`]},
                {name:[`Carmus el Mussa`,`Acroma`]},
                {name:[`Acroma`,`Gasr el Cleicha`]},
                {name:[`Bir el Madauar`,`Gasr el Cleicha`]},
                {name:[`Bir el Carmusa`,`Gasr el Cleicha`]},
                {name:[`Hagiag er Raml`,`Gasr el Cleicha`]},

                {name:[`Hagiag er Raml`,`El Adem`]},
                {name:[`El Adem`,`Bir el Azazi`]},
                {name:[`Bir Salem`,`El Adem`]},
                {name:[`Bir Salem`,`Bir el Azazi`]},
                {name:[`Bir Salem`,`El Duda`]},
                {name:[`Bir Salem`,`Abiar el Amar`]},
                {name:[`Wadi es Sahel`,`El Mrassas`]},
                {name:[`El Duda`,`Belhamed`]},
                {name:[`El Duda`,`Magen Belhamed`]},
                {name:[`Magen Suesi`,`Magen Belhamed`]},
                
                {name:[`Sidi Belgasem`,`Magen Belhamed`]},
                {name:[`Magen Suesi`,`Bir el Azazi`]},
                {name:[`Belhamed`,`Magen Belhamed`]},
                {name:[`Acroma`,`Elwat et Tamar`]},
                {name:[`El Mrassas`,`Elwat et Tamar`]},
                {name:[`Maabus el Rigel`,`Elwat et Tamar`]},
                {name:[`Maabus el Rigel`,`Acroma`]},
                {name:[`Carmus el Mussa`,`El Mrassas`]},
                {name:[`Maabus el Rigel`,`Hagiag er Raml`]},
                {name:[`Abiar el Amar`,`Belhamed`]},

                {name:[`Sidi Daud`,`Bir el Mentechsa`]},
                {name:[`Tobruk`,`Beach Hospital`]},
            ],team:[
                {name:`British`,term:`britain`,player:0,quality:1},
                {name:`New Zealand`,term:`new zealand`,player:0,quality:1.05},
                {name:`South African`,term:`south africa`,player:0,quality:0.9},
                {name:`Polish`,term:`poland`,player:0,quality:1},
                {name:`Australian`,term:`australia`,player:0,quality:1.05},
                {name:`Czechoslovak`,term:`czechoslovakia`,player:0,quality:1},
                {name:`Māori`,term:`maori`,player:0,quality:1.05},
                {name:`Indian`,term:`india`,player:0,quality:1},
                {name:`German`,term:`germany`,player:1,quality:1.1},
                {name:`Italian`,term:`italy`,player:2,quality:0.8},
                {name:`Blackshirt`,term:`blackshirt`,player:2,quality:0.6},
            ],player:[
                {name:`British`,color:[0,100,250],side:0},
                {name:`German`,color:[150,50,0],side:1},
                {name:`Italian`,color:[0,200,0],side:1},
            ],side:[
                {name:`Allied`,supply:25},
                {name:`Axis`,supply:20},
            ],unit:[
                {
                    name:`British Capture of Tobruk`,
                    battalions:[[12],[0,24]],bonus:false,partition:[[0],[2]],
                    unit:[
                        {
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`60th Infantry Division "Sabratha"`,`60ª Divisione di Fanteria Autotransportabile "Sabratha"`],name:`61`,designation:`Sirte`,commander:`Della Mura`,icon:`sirte`,
                            pos:[1106,442],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`69th Infantry Regiment`,`69° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`69`,designation:`Ancona`,commander:`Barberis`,icon:`sirte`,
                                    pos:[999,555],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`1st Battalion, 69th Infantry Regiment`,`I Battaglione Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`1`,designation:`69`,commander:`Rugiu`,icon:`sirte`,
                                            pos:[1359,701],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`],team:`Italian`,
                                                    desc:[`1st Company, 69th Infantry Regiment`,`1° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`1`,designation:`69`,commander:``,icon:`sirte`,
                                                    pos:[1201,844],
                                                    elements:[
                                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`1st Company, 69th Infantry Regiment`,`1° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`1`,designation:`69`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Italian`,
                                                    desc:[`2nd Company, 69th Infantry Regiment`,`2° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`2`,designation:`69`,commander:``,icon:`sirte`,
                                                    pos:[1326,824],
                                                    elements:[
                                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`2nd Company, 69th Infantry Regiment`,`2° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`2`,designation:`69`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Italian`,
                                                    desc:[`3rd Company, 69th Infantry Regiment`,`3° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`3`,designation:`69`,commander:``,icon:`sirte`,
                                                    pos:[1424,798],
                                                    elements:[
                                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`3rd Company, 69th Infantry Regiment`,`3° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`3`,designation:`69`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Heavy Infantry`],team:`Italian`,
                                                    desc:[`4th Company, 69th Infantry Regiment`,`4° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`4`,designation:`69`,commander:``,icon:`sirte`,
                                                    pos:[1514,768],
                                                    elements:[
                                                        {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`4th Company, 69th Infantry Regiment`,`4° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`4`,designation:`69`,commander:``},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`2nd Battalion, 69th Infantry Regiment`,`II Battaglione Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`2`,designation:`69`,commander:`Guassardo`,icon:`sirte`,
                                            pos:[818,682],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`],team:`Italian`,
                                                    desc:[`5th Company, 69th Infantry Regiment`,`5° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`5`,designation:`69`,commander:``,icon:`sirte`,
                                                    pos:[671,763],
                                                    elements:[
                                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`5th Company, 69th Infantry Regiment`,`5° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`5`,designation:`69`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Italian`,
                                                    desc:[`6th Company, 69th Infantry Regiment`,`6° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`6`,designation:`69`,commander:``,icon:`sirte`,
                                                    pos:[818,766],
                                                    elements:[
                                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`6th Company, 69th Infantry Regiment`,`6° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`6`,designation:`69`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Italian`,
                                                    desc:[`7th Company, 69th Infantry Regiment`,`7° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`7`,designation:`69`,commander:``,icon:`sirte`,
                                                    pos:[978,745],
                                                    elements:[
                                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`7th Company, 69th Infantry Regiment`,`7° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`7`,designation:`69`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Heavy Infantry`],team:`Italian`,
                                                    desc:[`8th Company, 69th Infantry Regiment`,`8° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`8`,designation:`69`,commander:``,icon:`sirte`,
                                                    pos:[1093,781],
                                                    elements:[
                                                        {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`8th Company, 69th Infantry Regiment`,`8° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`8`,designation:`69`,commander:``},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`3rd Battalion, 61st Motorized Infantry Regiment`,`III Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`61`,commander:`Silvagni`,icon:`sirte`,
                                            pos:[1576,485],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`],team:`Italian`,
                                                    desc:[`9th Company, 69th Infantry Regiment`,`9° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`9`,designation:`69`,commander:``,icon:`sirte`,
                                                    pos:[1607,717],
                                                    elements:[
                                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`9th Company, 69th Infantry Regiment`,`9° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`9`,designation:`69`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Italian`,
                                                    desc:[`10th Company, 69th Infantry Regiment`,`10° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`10`,designation:`69`,commander:``,icon:`sirte`,
                                                    pos:[1676,636],
                                                    elements:[
                                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`10th Company, 69th Infantry Regiment`,`10° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`10`,designation:`69`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Italian`,
                                                    desc:[`11th Company, 69th Infantry Regiment`,`11° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`11`,designation:`69`,commander:``,icon:`sirte`,
                                                    pos:[1728,530],
                                                    elements:[
                                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`11th Company, 69th Infantry Regiment`,`11° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`11`,designation:`69`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Heavy Infantry`],team:`Italian`,
                                                    desc:[`12th Company, 69th Infantry Regiment`,`12° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`12`,designation:`69`,commander:``,icon:`sirte`,
                                                    pos:[1724,407],
                                                    elements:[
                                                        {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`12th Company, 69th Infantry Regiment`,`12° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`12`,designation:`69`,commander:``},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:4,type:[`Mortar`],team:`Italian`,
                                            desc:[`69th Mortar Company`,`69° Compagnia Mortaio`],name:`69`,designation:``,commander:``,icon:`sirte`,
                                            pos:[1593,623],
                                            elements:[
                                                {level:4,type:`Mortar Company`,team:`Italian`,desc:[`69th Mortar Company`,`69° Compagnia Mortaio`],name:`69`,designation:``,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Artillery`,`Infantry`],team:`Italian`,
                                            desc:[`69th Infantry Gun Company`,`69° Compagnia Cannone`],name:`69`,designation:``,commander:``,icon:`sirte`,
                                            pos:[889,629],
                                            elements:[
                                                {level:4,type:`Infantry Gun Company`,team:`Italian`,desc:[`69th Infantry Gun Company`,`69° Compagnia Cannone`],name:`69`,designation:``,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`43rd Artillery Regiment`,`43° Reggimento Artiglieria "Sirte"`],name:`43`,designation:`Sirte`,commander:`Martorelli`,icon:`sirte`,
                                    pos:[1240,684],
                                    elements:[
                                        {
                                            level:3,type:[`Artillery`],team:`Italian`,
                                            desc:[`1st Group, 43rd Artillery Regiment`,`I Gruppo, 43° Reggimento Artiglieria "Sirte"`],name:`1`,designation:`43`,commander:`Binacchi`,icon:`sirte`,
                                            pos:[1062,692],
                                            elements:[
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`1st Battery, 43rd Artillery Regiment`,`1° Batteria, 43° Reggimento Artiglieria "Sirte"`],name:`1`,designation:`43`,commander:``},
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 43rd Artillery Regiment`,`2° Batteria, 43° Reggimento Artiglieria "Sirte"`],name:`2`,designation:`43`,commander:``},
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 43rd Artillery Regiment`,`3° Batteria, 43° Reggimento Artiglieria "Sirte"`],name:`3`,designation:`43`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`],team:`Italian`,
                                            desc:[`2nd Group, 43rd Artillery Regiment`,`II Gruppo, 43° Reggimento Artiglieria "Sirte"`],name:`2`,designation:`43`,commander:`Tucci`,icon:`sirte`,
                                            pos:[1168,760],
                                            elements:[
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`4th Battery, 43rd Artillery Regiment`,`4° Batteria, 43° Reggimento Artiglieria "Sirte"`],name:`4`,designation:`43`,commander:``},
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`5th Battery, 43rd Artillery Regiment`,`5 Batteria, 43° Reggimento Artiglieria "Sirte"`],name:`5`,designation:`43`,commander:``},
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`6th Battery, 43rd Artillery Regiment`,`6° Batteria, 43° Reggimento Artiglieria "Sirte"`],name:`6`,designation:`43`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`],team:`Italian`,
                                            desc:[`3rd Group, 43rd Artillery Regiment`,`III Gruppo, 43° Reggimento Artiglieria "Sirte"`],name:`3`,designation:`43`,commander:`Biglino`,icon:`sirte`,
                                            pos:[1291,743],
                                            elements:[
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`7th Battery, 43rd Artillery Regiment`,`7° Batteria, 43° Reggimento Artiglieria "Sirte"`],name:`7`,designation:`43`,commander:``},
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`8th Battery, 43rd Artillery Regiment`,`8° Batteria, 43° Reggimento Artiglieria "Sirte"`],name:`8`,designation:`43`,commander:``},
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`9th Battery, 43rd Artillery Regiment`,`9° Batteria, 43° Reggimento Artiglieria "Sirte"`],name:`9`,designation:`43`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Machine Gun`],team:`Italian`,
                                    desc:[`61st Machine Gun Battalion`,`61º Battaglione Mitraglieri`],name:`61`,designation:``,commander:`Pcres`,icon:`sirte`,
                                    pos:[1217,344],
                                    elements:[
                                        {level:4,type:`Machine Gun Company`,team:`Italian`,desc:[`1st Company, 61st Machine Gun Battalion`,`1° Compagnia, 61º Battaglione Mitraglieri`],name:`1`,designation:`61`,commander:``},
                                        {level:4,type:`Machine Gun Company`,team:`Italian`,desc:[`2nd Company, 61st Machine Gun Battalion`,`2° Compagnia, 61º Battaglione Mitraglieri`],name:`2`,designation:`61`,commander:``},
                                        {level:4,type:`Machine Gun Company`,team:`Italian`,desc:[`3rd Company, 61st Machine Gun Battalion`,`3° Compagnia, 61º Battaglione Mitraglieri`],name:`3`,designation:`61`,commander:``},
                                        {level:4,type:`Heavy Machine Gun Company`,team:`Italian`,desc:[`4th Company, 61st Machine Gun Battalion`,`4° Compagnia, 61º Battaglione Mitraglieri`],name:`4`,designation:`61`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Infantry`,`Motorcycle`],team:`Italian`,
                                    desc:[`61st Bersaglieri Company`,`61° Compagnia Bersaglieri`],name:`61`,designation:`Bersaglieri`,commander:``,icon:`sirte`,
                                    pos:[1427,570],
                                    elements:[
                                        {level:4,type:`Motorcycle Bersaglieri Company`,team:`Italian`,desc:[`61st Bersaglieri Company`,`61° Compagnia Bersaglieri`],name:`61`,designation:`Bersaglieri`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Anti-Tank`],team:`Italian`,
                                    desc:`61st Anti-Tank Company`,name:`61`,designation:``,commander:``,icon:``,
                                    pos:[1259,621],
                                    elements:[
                                        {level:4,type:`Anti-Tank Company`,team:`Italian`,desc:`61st Anti-Tank Company`,name:`61`,designation:``,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Infantry`],team:`Blackshirt`,
                            desc:[`140th Blackshirt Battalion "28 Ottobre"`,`CXL Coorte CC.NN. "28 Ottobre"`],name:`140`,designation:`28\nOttobre`,commander:`Martorana`,icon:``,
                            pos:[1054,364],
                            elements:[
                                {level:4,type:`Infantry Company`,team:`Blackshirt`,desc:[`1st Company, 140th Blackshirt Battalion "28 Ottobre"`,`1° Centuria d'Assalto, CXL Coorte CC.NN. "28 Ottobre"`],name:`1`,designation:`28 Ottobre`,commander:``},
                                {level:4,type:`Mortar Company`,team:`Italian`,desc:[`15th Mortar Company`,`15° Compagnia Mortaio`],name:`15`,designation:``,commander:``,icon:`savona`},
                            ],
                        },{
                            level:3,type:[`Infantry`],team:`Blackshirt`,
                            desc:[`Blackshirt Battalion "Volontari della Libia"`,`Coorte CC.NN. "Volontari della Libia"`],name:`Volontari\ndella Libia`,designation:``,commander:`Angeleri`,icon:``,
                            pos:[777,381],
                            elements:[
                                {
                                    level:4,type:[`Infantry`],team:`Blackshirt`,
                                    desc:[`1st Company, Blackshirt Battalion "Volontari della Libia"`,`1° Centuria d'Assalto, Coorte CC.NN. "Volontari della Libia"`],name:`1`,designation:`Volontari\ndella Libia`,commander:``,icon:``,
                                    pos:[584,283],
                                    elements:[
                                        {level:4,type:`Infantry Company`,team:`Blackshirt`,desc:[`1st Company, Blackshirt Battalion "Volontari della Libia"`,`1° Centuria d'Assalto, Coorte CC.NN. "Volontari della Libia"`],name:`1`,designation:`Volontari\ndella Libia`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Infantry`],team:`Blackshirt`,
                                    desc:[`2nd Company, Blackshirt Battalion "Volontari della Libia"`,`2° Centuria d'Assalto, Coorte CC.NN. "Volontari della Libia"`],name:`2`,designation:`Volontari\ndella Libia`,commander:``,icon:``,
                                    pos:[600,394],
                                    elements:[
                                        {level:4,type:`Infantry Company`,team:`Blackshirt`,desc:[`2nd Company, Blackshirt Battalion "Volontari della Libia"`,`2° Centuria d'Assalto, Coorte CC.NN. "Volontari della Libia"`],name:`2`,designation:`Volontari\ndella Libia`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Infantry`],team:`Blackshirt`,
                                    desc:[`3rd Company, Blackshirt Battalion "Volontari della Libia"`,`3° Centuria d'Assalto, Coorte CC.NN. "Volontari della Libia"`],name:`3`,designation:`Volontari\ndella Libia`,commander:``,icon:``,
                                    pos:[610,503],
                                    elements:[
                                        {level:4,type:`Infantry Company`,team:`Blackshirt`,desc:[`3rd Company, Blackshirt Battalion "Volontari della Libia"`,`3° Centuria d'Assalto, Coorte CC.NN. "Volontari della Libia"`],name:`3`,designation:`Volontari\ndella Libia`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Infantry`,`Machine Gun`],team:`Blackshirt`,
                                    desc:[`4th Company, Blackshirt Battalion "Volontari della Libia"`,`4° Centuria Mitraglieri, Coorte CC.NN. "Volontari della Libia"`],name:`4`,designation:`Volontari\ndella Libia`,commander:``,icon:``,
                                    pos:[613,655],
                                    elements:[
                                        {level:4,type:`Machine Gun Company`,team:`Blackshirt`,desc:[`4th Company, Blackshirt Battalion "Volontari della Libia"`,`4° Centuria Mitraglieri, Coorte CC.NN. "Volontari della Libia"`],name:`4`,designation:`Volontari\ndella Libia`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Mortar`],team:`Italian`,
                                    desc:[`16th Mortar Company`,`16° Compagnia Mortaio`],name:`16`,designation:``,commander:``,icon:`savona`,
                                    pos:[660,545],
                                    elements:[
                                        {level:4,type:`Mortar Company`,team:`Italian`,desc:[`16th Mortar Company`,`16° Compagnia Mortaio`],name:`16`,designation:``,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:2,type:[`Tank`],team:`Italian`,
                            desc:[`4th Tank Infantry Regiment`,`4° Reggimento Carri`],name:`4`,designation:``,commander:`Aresca`,icon:``,
                            pos:[1330,462],
                            elements:[
                                {
                                    level:3,type:[`Tank`],team:`Italian`,
                                    desc:[`1st Tank Battalion`,`I Battaglione Carri M`],name:`1`,designation:``,commander:`Cascino`,icon:``,
                                    pos:[1317,554],
                                    elements:[
                                        {level:4,type:`Immobile Medium Tank Company`,team:`Italian`,desc:[`1st Company, 1st Tank Battalion`,`1° Compagnia, I Battaglione Carri M`],name:`1`,designation:`1`,commander:``},
                                        {level:4,type:`Immobile Medium Tank Company`,team:`Italian`,desc:[`2nd Company, 1st Tank Battalion`,`2° Compagnia, I Battaglione Carri M`],name:`2`,designation:`1`,commander:``},
                                        {level:4,type:`Immobile Medium Tank Company`,team:`Italian`,desc:[`3rd Company, 1st Tank Battalion`,`3° Compagnia, I Battaglione Carri M`],name:`3`,designation:`1`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Light`],team:`Italian`,
                                    desc:[`60th Tank Battalion`,`LX Battaglione Carri L`],name:`60`,designation:``,commander:`Trivioli`,icon:``,
                                    pos:[1343,370],
                                    elements:[
                                        {level:4,type:`Immobile Terrible Tank Company`,team:`Italian`,desc:[`1st Company, 60nd Tank Battalion`,`1° Compagnia, LX Battaglione Carri L`],name:`1`,designation:`60`,commander:``},
                                        {level:4,type:`Immobile Terrible Tank Company`,team:`Italian`,desc:[`2nd Company, 60nd Tank Battalion`,`2° Compagnia, LX Battaglione Carri L`],name:`2`,designation:`60`,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:4,type:[`Infantry`,`Motorcycle`],team:`Italian`,
                            desc:[`22nd Bersaglieri Company`,`22° Compagnia Bersaglieri`],name:`22`,designation:`Bersaglieri`,commander:``,icon:`sirte`,
                            pos:[1142,646],
                            elements:[
                                {level:4,type:`Motorcycle Bersaglieri Company`,team:`Italian`,desc:[`22nd Bersaglieri Company`,`22° Compagnia Bersaglieri`],name:`22`,designation:`Bersaglieri`,commander:``},
                            ],
                        },{
                            level:2,type:[`Artillery`],team:`Italian`,
                            desc:[`10th Corps Artillery Regiment`,`10° Reggimento Artiglieria di Corpo d'Armata`],name:`10`,designation:`Corps`,commander:`Infante`,icon:``,
                            pos:[1558,365],
                            elements:[
                                {
                                    level:3,type:[`Artillery`],team:`Italian`,
                                    desc:[`17th Group, 10th Corps Artillery Regiment`,`XVII Gruppo, 10° Reggimento Artiglieria di Corpo d'Armata`],name:`17`,designation:``,commander:`Locarno`,icon:``,
                                    pos:[1639,436],
                                    elements:[
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`1st Battery, 17th Artillery Group`,`1° Batteria, XVII Gruppo Artiglieria`],name:`1`,designation:`17`,commander:``},
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 17th Artillery Group`,`2° Batteria, XVII Gruppo Artiglieria`],name:`2`,designation:`17`,commander:``},
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 17th Artillery Group`,`3° Batteria, XVII Gruppo Artiglieria`],name:`3`,designation:`17`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Artillery`],team:`Italian`,
                                    desc:[`35th Group, 10th Corps Artillery Regiment`,`XXXV Gruppo, 10° Reggimento Artiglieria di Corpo d'Armata`],name:`35`,designation:``,commander:`Pirisi`,icon:``,
                                    pos:[1650,540],
                                    elements:[
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`1st Battery, 35th Artillery Group`,`1° Batteria, XXXV Gruppo Artiglieria`],name:`1`,designation:`35`,commander:``},
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 35th Artillery Group`,`2° Batteria, XXXV Gruppo Artiglieria`],name:`2`,designation:`35`,commander:``},
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 35th Artillery Group`,`3° Batteria, XXXV Gruppo Artiglieria`],name:`3`,designation:`35`,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:2,type:[`Artillery`],team:`Italian`,
                            desc:[`22nd Corps Artillery Regiment`,`22° Reggimento Artiglieria di Corpo d'Armata`],name:`22`,designation:`Corps`,commander:`Sardi`,icon:``,
                            pos:[840,510],
                            elements:[
                                {
                                    level:3,type:[`Artillery`],team:`Italian`,
                                    desc:[`42nd Group, 22nd Corps Artillery Regiment`,`XLII Gruppo, 22° Reggimento Artiglieria di Corpo d'Armata`],name:`42`,designation:``,commander:`Battaglini`,icon:``,
                                    pos:[685,427],
                                    elements:[
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`1st Battery, 42nd Artillery Group`,`1° Batteria, XLII Gruppo Artiglieria`],name:`1`,designation:`42`,commander:``},
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 42nd Artillery Group`,`2° Batteria, XLII Gruppo Artiglieria`],name:`2`,designation:`42`,commander:``},
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 42nd Artillery Group`,`3° Batteria, XLII Gruppo Artiglieria`],name:`3`,designation:`42`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Artillery`],team:`Italian`,
                                    desc:[`43rd Group, 22nd Corps Artillery Regiment`,`XLIII Gruppo, 22° Reggimento Artiglieria di Corpo d'Armata`],name:`43`,designation:``,commander:`Bombagli`,icon:``,
                                    pos:[720,652],
                                    elements:[
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`1st Battery, 43rd Artillery Group`,`1° Batteria, XLIII Gruppo Artiglieria`],name:`1`,designation:`43`,commander:``},
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 43rd Artillery Group`,`2° Batteria, XLIII Gruppo Artiglieria`],name:`2`,designation:`43`,commander:``},
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 43rd Artillery Group`,`3° Batteria, XLIII Gruppo Artiglieria`],name:`3`,designation:`43`,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:2,type:[`Artillery`],team:`Italian`,
                            desc:[`25th Corps Artillery Regiment`,`25° Reggimento Artiglieria di Corpo d'Armata`],name:`25`,designation:`Corps`,commander:`Bellini`,icon:``,
                            pos:[1506,584],
                            elements:[
                                {
                                    level:3,type:[`Artillery`],team:`Italian`,
                                    desc:[`105th Group, 25th Corps Artillery Regiment`,`CV Gruppo, 25° Reggimento Artiglieria di Corpo d'Armata`],name:`105`,designation:``,commander:`Manca`,icon:``,
                                    pos:[1513,646],
                                    elements:[
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`1st Battery, 105th Artillery Group`,`1° Batteria, CV Gruppo Artiglieria`],name:`1`,designation:`105`,commander:``},
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 105th Artillery Group`,`2° Batteria, CV Gruppo Artiglieria`],name:`2`,designation:`105`,commander:``},
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 105th Artillery Group`,`3° Batteria, CV Gruppo Artiglieria`],name:`3`,designation:`105`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Artillery`],team:`Italian`,
                                    desc:[`130th Group, 25th Corps Artillery Regiment`,`CXXX Gruppo, 25° Reggimento Artiglieria di Corpo d'Armata`],name:`130`,designation:``,commander:`Biondi-Morra`,icon:``,
                                    pos:[1422,649],
                                    elements:[
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`1st Battery, 130th Artillery Group`,`1° Batteria, CXXX Gruppo Artiglieria`],name:`1`,designation:`130`,commander:``},
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 130th Artillery Group`,`2° Batteria, CXXX Gruppo Artiglieria`],name:`2`,designation:`130`,commander:``},
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 130th Artillery Group`,`3° Batteria, CXXX Gruppo Artiglieria`],name:`3`,designation:`130`,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Artillery`],team:`Italian`,
                            desc:[`3rd Group, 12th Artillery Regiment`,`III Gruppo, 12° Reggimento Artiglieria "Sila"`],name:`3`,designation:`12`,commander:`Aliberti`,icon:`savona`,
                            pos:[1455,726],
                            elements:[
                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`7th Battery, 12th Artillery Regiment`,`7° Batteria, 12° Reggimento Artiglieria "Sila"`],name:`7`,designation:`12`,commander:``},
                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`8th Battery, 12th Artillery Regiment`,`8° Batteria, 12° Reggimento Artiglieria "Sila"`],name:`8`,designation:`12`,commander:``},
                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`9th Battery, 12th Artillery Regiment`,`9° Batteria, 12° Reggimento Artiglieria "Sila"`],name:`9`,designation:`12`,commander:``},
                            ],
                        },{
                            level:4,type:[`Anti-Tank`],team:`Italian`,
                            desc:`55th Anti-Tank Company`,name:`55`,designation:``,commander:``,icon:`savona`,
                            pos:[901,717],
                            elements:[
                                {level:4,type:`Anti-Tank Company`,team:`Italian`,desc:`55th Anti-Tank Company`,name:`55`,designation:``,commander:`savona`},
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:`4th Indian Division`,name:`4`,designation:``,commander:`Beresford-Peirse`,icon:`4id`,
                            pos:[2325,901],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`Australian`,
                                    desc:`20th Australian Infantry Brigade`,name:`20`,designation:``,commander:`Murray`,icon:`9a`,
                                    pos:[2073,946],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`,`Motorized`],team:`Australian`,
                                            desc:[`13th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/13th Australian Infantry Battalion`],name:`2/13`,designation:``,commander:`Burrows`,icon:`9a`,
                                            pos:[2073,846],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`A Company, 13th Infantry Battalion, 2nd Australian Expeditionary Force`,`A Company, 2/13th Australian Infantry Battalion`],name:`A`,designation:`2/13`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`B Company, 13th Infantry Battalion, 2nd Australian Expeditionary Force`,`B Company, 2/13th Australian Infantry Battalion`],name:`B`,designation:`2/13`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`C Company, 13th Infantry Battalion, 2nd Australian Expeditionary Force`,`C Company, 2/13th Australian Infantry Battalion`],name:`C`,designation:`2/13`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`D Company, 13th Infantry Battalion, 2nd Australian Expeditionary Force`,`D Company, 2/13th Australian Infantry Battalion`],name:`D`,designation:`2/13`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`Australian`,
                                            desc:[`15th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/15th Australian Infantry Battalion`],name:`2/15`,designation:``,commander:`Ogle`,icon:`9a`,
                                            pos:[1986,896],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`A Company, 15th Infantry Battalion, 2nd Australian Expeditionary Force`,`A Company, 2/15th Australian Infantry Battalion`],name:`A`,designation:`2/15`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`B Company, 15th Infantry Battalion, 2nd Australian Expeditionary Force`,`B Company, 2/15th Australian Infantry Battalion`],name:`B`,designation:`2/15`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`C Company, 15th Infantry Battalion, 2nd Australian Expeditionary Force`,`C Company, 2/15th Australian Infantry Battalion`],name:`C`,designation:`2/15`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`D Company, 15th Infantry Battalion, 2nd Australian Expeditionary Force`,`D Company, 2/15th Australian Infantry Battalion`],name:`D`,designation:`2/15`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`Australian`,
                                            desc:[`17th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/17th Australian Infantry Battalion`],name:`2/17`,designation:``,commander:`Crawford`,icon:`9a`,
                                            pos:[1986,996],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`A Company, 17th Infantry Battalion, 2nd Australian Expeditionary Force`,`A Company, 2/17th Australian Infantry Battalion`],name:`A`,designation:`2/17`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`B Company, 17th Infantry Battalion, 2nd Australian Expeditionary Force`,`B Company, 2/17th Australian Infantry Battalion`],name:`B`,designation:`2/17`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`C Company, 17th Infantry Battalion, 2nd Australian Expeditionary Force`,`C Company, 2/17th Australian Infantry Battalion`],name:`C`,designation:`2/17`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`D Company, 17th Infantry Battalion, 2nd Australian Expeditionary Force`,`D Company, 2/17th Australian Infantry Battalion`],name:`D`,designation:`2/17`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Anti-Tank`,`Motorized`],team:`Australian`,
                                            desc:`20th Australian Anti-Tank Company`,name:`20`,designation:``,commander:``,icon:`9a`,
                                            pos:[2160,996],
                                            elements:[
                                                {level:4,type:`Motorized Anti-Tank Company`,team:`Australian`,desc:`20th Australian Anti-Tank Company`,name:`20`,designation:``,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Engineer`,`Motorized`],team:`Australian`,
                                            desc:[`7th Field Company, Royal Australian Engineers, 2nd Australian Expeditionary Force`,`2/7th Field Company, Royal Australian Engineers`],name:`2/7`,designation:``,commander:``,icon:`9a`,
                                            pos:[2160,896],
                                            elements:[
                                                {level:4,type:`Motorized Engineer Company`,team:`Australian`,desc:[`7th Field Company, Royal Australian Engineers, 2nd Australian Expeditionary Force`,`2/7th Field Company, Royal Australian Engineers`],name:`2/7`,designation:``,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Engineer`,`Motorized`],team:`Australian`,
                                            desc:[`16th Field Company, Royal Australian Engineers, 2nd Australian Expeditionary Force`,`2/16th Field Company, Royal Australian Engineers`],name:`2/16`,designation:``,commander:``,icon:`9a`,
                                            pos:[2073,1046],
                                            elements:[
                                                {level:4,type:`Motorized Engineer Company`,team:`Australian`,desc:[`16th Field Company, Royal Australian Engineers, 2nd Australian Expeditionary Force`,`2/16th Field Company, Royal Australian Engineers`],name:`2/16`,designation:``,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:3,type:[`Tank`],team:`Australian`,
                                    desc:[`6th Australian Division Tank Battalion`,`6th Australian Divisional Cavalry`],name:`6`,designation:`Divisional\nCavalry`,commander:`Morrison`,icon:``,
                                    pos:[1906,1155],
                                    elements:[
                                        {level:4,type:`Light Tank Company`,team:`Australian`,desc:[`A Company, 6th Australian Division Tank Battalion`,`A Company, 6th Australian Divisional Cavalry`],name:`A`,designation:`6 DC`,commander:``},
                                        {level:4,type:`Light Tank Company`,team:`Australian`,desc:[`B Company, 6th Australian Division Tank Battalion`,`B Company, 6th Australian Divisional Cavalry`],name:`B`,designation:`6 DC`,commander:``},
                                        {level:4,type:`Light Tank Company`,team:`Australian`,desc:[`C Company, 6th Australian Division Tank Battalion`,`C Company, 6th Australian Divisional Cavalry`],name:`C`,designation:`6 DC`,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Tank`],team:`British`,
                            desc:[`7th Armored Division`,`7th Armoured Division`],name:`7`,designation:``,commander:`Creagh`,icon:`7a`,
                            pos:[150,1237],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Artillery`,`Motorized`],team:`British`,
                                    desc:`7th Support Group`,name:`7`,designation:``,commander:`Gott`,icon:`7sg`,
                                    pos:[975,1250],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:`de Salis`,icon:`7sg`,
                                            pos:[461,908],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`A Company, 1st Battalion, King's Royal Rifle Corps`,name:`A`,designation:`1 KRRC`,commander:``,icon:`7sg`,
                                                    pos:[425,318],
                                                    elements:[
                                                        {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`A Company, 1st Battalion, King's Royal Rifle Corps`,name:`A`,designation:`1 KRRC`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`B Company, 1st Battalion, King's Royal Rifle Corps`,name:`B`,designation:`1 KRRC`,commander:``,icon:`7sg`,
                                                    pos:[439,516],
                                                    elements:[
                                                        {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`B Company, 1st Battalion, King's Royal Rifle Corps`,name:`B`,designation:`1 KRRC`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`C Company, 1st Battalion, King's Royal Rifle Corps`,name:`C`,designation:`1 KRRC`,commander:``,icon:`7sg`,
                                                    pos:[486,744],
                                                    elements:[
                                                        {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`C Company, 1st Battalion, King's Royal Rifle Corps`,name:`C`,designation:`1 KRRC`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`D Company, 1st Battalion, King's Royal Rifle Corps`,name:`D`,designation:`1 KRRC`,commander:``,icon:`7sg`,
                                                    pos:[758,870],
                                                    elements:[
                                                        {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`D Company, 1st Battalion, King's Royal Rifle Corps`,name:`D`,designation:`1 KRRC`,commander:``},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Renton`,icon:`7sg`,
                                            pos:[2086,768],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`A Company, 2nd Battalion, Rifle Brigade`,name:`A`,designation:`2 RB`,commander:``,icon:`7sg`,
                                                    pos:[1146,955],
                                                    elements:[
                                                        {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`A Company, 2nd Battalion, Rifle Brigade`,name:`A`,designation:`2 RB`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`B Company, 2nd Battalion, Rifle Brigade`,name:`B`,designation:`2 RB`,commander:``,icon:`7sg`,
                                                    pos:[1531,889],
                                                    elements:[
                                                        {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`B Company, 2nd Battalion, Rifle Brigade`,name:`B`,designation:`2 RB`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`C Company, 2nd Battalion, Rifle Brigade`,name:`C`,designation:`2 RB`,commander:``,icon:`7sg`,
                                                    pos:[1771,729],
                                                    elements:[
                                                        {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`C Company, 2nd Battalion, Rifle Brigade`,name:`C`,designation:`2 RB`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`D Company, 2nd Battalion, Rifle Brigade`,name:`D`,designation:`2 RB`,commander:``,icon:`7sg`,
                                                    pos:[1915,486],
                                                    elements:[
                                                        {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`D Company, 2nd Battalion, Rifle Brigade`,name:`D`,designation:`2 RB`,commander:``},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Artillery`,`Motorized`],team:`British`,
                                            desc:[`3rd Battalion, Royal Horse Artillery`,`3rd Regiment, Royal Horse Artillery`],name:`3`,designation:`Royal\nHorse`,commander:`Wilson`,icon:``,
                                            pos:[212,488],
                                            elements:[
                                                {
                                                    level:4,type:[`Artillery`,`Motorized`],team:`British`,
                                                    desc:[`A Battery, 3rd Battalion, Royal Horse Artillery`,`A Battery, 3rd Regiment, Royal Horse Artillery`],name:`A`,designation:`3`,commander:``,icon:``,
                                                    pos:[315,426],
                                                    elements:[
                                                        {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`A Battery, 3rd Battalion, Royal Horse Artillery`,`A Battery, 3rd Regiment, Royal Horse Artillery`],name:`A`,designation:`3`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Artillery`,`Motorized`],team:`British`,
                                                    desc:[`B Battery, 3rd Battalion, Royal Horse Artillery`,`B Battery, 3rd Regiment, Royal Horse Artillery`],name:`B`,designation:`3`,commander:``,icon:``,
                                                    pos:[620,957],
                                                    elements:[
                                                        {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`B Battery, 3rd Battalion, Royal Horse Artillery`,`B Battery, 3rd Regiment, Royal Horse Artillery`],name:`B`,designation:`3`,commander:``},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Artillery`,`Motorized`],team:`British`,
                                            desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:`Royal\nHorse`,commander:`Currie`,icon:``,
                                            pos:[1511,1234],
                                            elements:[
                                                {
                                                    level:4,type:[`Artillery`,`Motorized`],team:`British`,
                                                    desc:[`A Battery, 4th Battalion, Royal Horse Artillery`,`A Battery, 4th Regiment, Royal Horse Artillery`],name:`A`,designation:`4`,commander:``,icon:``,
                                                    pos:[1355,1011],
                                                    elements:[
                                                        {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`A Battery, 4th Battalion, Royal Horse Artillery`,`A Battery, 4th Regiment, Royal Horse Artillery`],name:`A`,designation:`4`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Artillery`,`Motorized`],team:`British`,
                                                    desc:[`B Battery, 4th Battalion, Royal Horse Artillery`,`B Battery, 4th Regiment, Royal Horse Artillery`],name:`B`,designation:`4`,commander:``,icon:``,
                                                    pos:[2000,676],
                                                    elements:[
                                                        {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`B Battery, 4th Battalion, Royal Horse Artillery`,`B Battery, 4th Regiment, Royal Horse Artillery`],name:`B`,designation:`4`,commander:``},
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Heavy`],team:`British`,
                                    desc:[`7th Battalion, Royal Tank Regiment`,`7th Royal Tank Regiment`],name:`7`,designation:`Royal Tank\nRegiment`,commander:`Groves`,icon:``,
                                    pos:[820,1017],
                                    elements:[
                                        {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`A Company, 7th Battalion, Royal Tank Regiment`,`A Company, 7th Royal Tank Regiment`],name:`A`,designation:`7 RTR`,commander:``},
                                        {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`B Company, 7th Battalion, Royal Tank Regiment`,`B Company, 7th Royal Tank Regiment`],name:`B`,designation:`7 RTR`,commander:``},
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],reserve:[
            ],
        },{
            name:[`Tobruk`,`Base`],
            term:`Tobruk`,
            unitScale:1,
            cityScale:0.8,
            city:[
                {name:`Elwat et Tamar`,owner:2,type:0,pos:[52,870]},
                {name:`Maabus el Rigel`,owner:2,type:0,pos:[150,1237]},
                {name:`El Mrassas`,owner:2,type:0,pos:[212,488]},
                {name:`Acroma`,owner:2,type:1,pos:[461,908]},
                {name:`Carmus el Mussa`,owner:2,type:0,pos:[486,744]},
                {name:`Bir el Maclub`,owner:0,type:0,pos:[574,404]},
                {name:`Wadi es Sahel`,owner:0,type:0,pos:[581,533]},
                {name:`Water Tower`,owner:0,type:0,pos:[636,726]},
                {name:`Fig Tree`,owner:0,type:0,pos:[660,545]},
                {name:`Ras el Madauar`,owner:0,type:0,pos:[696,777]},

                {name:`Bir el Madauar`,owner:2,type:0,pos:[758,870]},
                {name:`Ras Belgamel`,owner:0,type:0,pos:[777,381]},
                {name:`Bianca`,owner:0,type:0,pos:[818,682]},
                {name:`Gasr el Cleicha`,owner:2,type:0,pos:[820,1017]},
                {name:`Bir Baccara`,owner:0,type:0,pos:[840,510]},
                {name:`Bir el Giaser`,owner:0,type:0,pos:[858,763]},
                {name:`Hagiag er Raml`,owner:2,type:0,pos:[975,1250]},
                {name:`Bir el Carmusa`,owner:2,type:0,pos:[996,905]},
                {name:`Fort Pilastrino`,owner:0,type:0,pos:[999,555]},
                {name:`Bir el Fras`,owner:0,type:0,pos:[1031,760]},

                {name:`Fort Perrone`,owner:0,type:0,pos:[1034,234]},
                {name:`Fort Airente`,owner:0,type:0,pos:[1054,364]},
                {name:`Sidi Cheiralla`,owner:0,type:0,pos:[1091,842]},
                {name:`Fort Solaro`,owner:0,type:0,pos:[1106,442]},
                {name:`Beach Hospital`,owner:0,type:0,pos:[1124,154]},
                {name:`Tobruk`,owner:0,type:1,pos:[1196,244]},
                {name:`NAAFI`,owner:0,type:0,pos:[1229,315]},
                {name:`Bir es Sciafsciaf`,owner:0,type:0,pos:[1240,684]},
                {name:`Bir el Haleiga`,owner:0,type:0,pos:[1261,804]},
                {name:`King's Cross`,owner:0,type:0,pos:[1317,554]},

                {name:`Fort Marcucci`,owner:0,type:0,pos:[1343,370]},
                {name:`Bir Lasin`,owner:0,type:0,pos:[1359,701]},
                {name:`Bir Junes`,owner:0,type:0,pos:[1455,726]},
                {name:`Bir el Mentechsa`,owner:0,type:0,pos:[1506,584]},
                {name:`El Adem`,owner:2,type:1,pos:[1511,1234]},
                {name:`Bir el Azazi`,owner:2,type:0,pos:[1531,889]},
                {name:`Fort Cheteita`,owner:0,type:0,pos:[1565,340]},
                {name:`Sidi Daud`,owner:0,type:0,pos:[1766,499]},
                {name:`Magen Suesi`,owner:1,type:0,pos:[1828,639]},
                {name:`Sidi Belgasem`,owner:1,type:0,pos:[1915,486]},

                {name:`Bir Salem`,owner:1,type:0,pos:[1906,1155]},
                {name:`El Duda`,owner:1,type:1,pos:[2073,946]},
                {name:`Magen Belhamed`,owner:1,type:0,pos:[2086,768]},
                {name:`Abiar el Amar`,owner:1,type:0,pos:[2182,1194]},
                {name:`Belhamed`,owner:1,type:0,pos:[2325,901]},
            ],connect:[
                {name:[`Fort Pilastrino`,`Fort Solaro`]},
                {name:[`Fort Airente`,`Fort Solaro`]},
                {name:[`Fort Airente`,`Fort Perrone`]},
                {name:[`Fort Airente`,`Tobruk`]},
                {name:[`Fort Perrone`,`Beach Hospital`]},
                {name:[`NAAFI`,`Tobruk`]},
                {name:[`Fort Pilastrino`,`King's Cross`]},
                {name:[`King's Cross`,`NAAFI`]},
                {name:[`Fort Solaro`,`NAAFI`]},
                {name:[`King's Cross`,`Bir el Mentechsa`]},

                {name:[`NAAFI`,`Fort Marcucci`]},
                {name:[`Fort Marcucci`,`Fort Cheteita`]},
                {name:[`Sidi Daud`,`Fort Cheteita`]},
                {name:[`Sidi Daud`,`Sidi Belgasem`]},
                {name:[`Sidi Daud`,`Magen Suesi`]},
                {name:[`Sidi Belgasem`,`Magen Suesi`]},
                {name:[`King's Cross`,`Bir Lasin`]},
                {name:[`Bir Lasin`,`Bir Junes`]},
                {name:[`Bir Junes`,`Bir el Azazi`]},
                {name:[`Bir Lasin`,`Bir el Haleiga`]},

                {name:[`Bir el Haleiga`,`Bir el Azazi`]},
                {name:[`Fort Pilastrino`,`Bir es Sciafsciaf`]},
                {name:[`Bir es Sciafsciaf`,`Bir Lasin`]},
                {name:[`Fort Pilastrino`,`Bir el Fras`]},
                {name:[`Bir el Fras`,`Sidi Cheiralla`]},
                {name:[`Bir el Carmusa`,`Bir el Fras`]},
                {name:[`Bir el Carmusa`,`Sidi Cheiralla`]},
                {name:[`Sidi Cheiralla`,`Bir el Haleiga`]},
                {name:[`Fort Pilastrino`,`Bianca`]},
                {name:[`Fort Pilastrino`,`Bir Baccara`]},

                {name:[`Bianca`,`Water Tower`]},
                {name:[`Bianca`,`Ras el Madauar`]},
                {name:[`Bianca`,`Bir el Giaser`]},
                {name:[`Water Tower`,`Ras el Madauar`]},
                {name:[`Ras el Madauar`,`Bir el Madauar`]},
                {name:[`Ras el Madauar`,`Bir el Giaser`]},
                {name:[`Bir el Giaser`,`Bir el Fras`]},
                {name:[`Water Tower`,`Carmus el Mussa`]},
                {name:[`Water Tower`,`Fig Tree`]},
                {name:[`Fig Tree`,`Bir Baccara`]},

                {name:[`Fig Tree`,`Wadi es Sahel`]},
                {name:[`Bir el Maclub`,`Ras Belgamel`]},
                {name:[`Ras Belgamel`,`Fort Airente`]},
                {name:[`Bir el Maclub`,`Wadi es Sahel`]},
                {name:[`Ras Belgamel`,`Bir Baccara`]},
                {name:[`Carmus el Mussa`,`Acroma`]},
                {name:[`Acroma`,`Gasr el Cleicha`]},
                {name:[`Bir el Madauar`,`Gasr el Cleicha`]},
                {name:[`Bir el Carmusa`,`Gasr el Cleicha`]},
                {name:[`Hagiag er Raml`,`Gasr el Cleicha`]},

                {name:[`Hagiag er Raml`,`El Adem`]},
                {name:[`El Adem`,`Bir el Azazi`]},
                {name:[`Bir Salem`,`El Adem`]},
                {name:[`Bir Salem`,`Bir el Azazi`]},
                {name:[`Bir Salem`,`El Duda`]},
                {name:[`Bir Salem`,`Abiar el Amar`]},
                {name:[`Wadi es Sahel`,`El Mrassas`]},
                {name:[`El Duda`,`Belhamed`]},
                {name:[`El Duda`,`Magen Belhamed`]},
                {name:[`Magen Suesi`,`Magen Belhamed`]},
                
                {name:[`Sidi Belgasem`,`Magen Belhamed`]},
                {name:[`Magen Suesi`,`Bir el Azazi`]},
                {name:[`Belhamed`,`Magen Belhamed`]},
                {name:[`Acroma`,`Elwat et Tamar`]},
                {name:[`El Mrassas`,`Elwat et Tamar`]},
                {name:[`Maabus el Rigel`,`Elwat et Tamar`]},
                {name:[`Maabus el Rigel`,`Acroma`]},
                {name:[`Carmus el Mussa`,`El Mrassas`]},
                {name:[`Maabus el Rigel`,`Hagiag er Raml`]},
                {name:[`Abiar el Amar`,`Belhamed`]},

                {name:[`Sidi Daud`,`Bir el Mentechsa`]},
                {name:[`Tobruk`,`Beach Hospital`]},
            ],team:[
                {name:`British`,term:`britain`,player:0,quality:1},
                {name:`New Zealand`,term:`new zealand`,player:0,quality:1.05},
                {name:`South African`,term:`south africa`,player:0,quality:0.9},
                {name:`Polish`,term:`poland`,player:0,quality:1},
                {name:`Australian`,term:`australia`,player:0,quality:1.05},
                {name:`Czechoslovak`,term:`czechoslovakia`,player:0,quality:1},
                {name:`Māori`,term:`maori`,player:0,quality:1.05},
                {name:`Indian`,term:`india`,player:0,quality:1},
                {name:`German`,term:`germany`,player:1,quality:1.1},
                {name:`Italian`,term:`italy`,player:2,quality:0.8},
            ],player:[
                {name:`British`,color:[0,100,250],side:0},
                {name:`German`,color:[150,50,0],side:1},
                {name:`Italian`,color:[0,200,0],side:1},
            ],side:[
                {name:`Allied`,supply:25},
                {name:`Axis`,supply:20},
            ],unit:[
                {
                    name:`Siege of Tobruk`,
                    battalions:[[8],[6,6]],bonus:false,partition:[[0],[1],[2]],
                    unit:[
                        {
                            level:1,type:[`Infantry`,`Motorized`],team:`Australian`,
                            desc:`20th Australian Infantry Brigade`,name:`20`,designation:``,commander:`Murray`,icon:`9a`,
                            pos:[1106,442],
                            elements:[
                                {
                                    level:3,type:[`Infantry`,`Motorized`],team:`Australian`,
                                    desc:[`13th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/13th Australian Infantry Battalion`],name:`2/13`,designation:``,commander:`Burrows`,icon:`9a`,
                                    pos:[1240,684],
                                    elements:[
                                        {
                                            level:4,type:[`Infantry`,`Motorized`],team:`Australian`,
                                            desc:[`A Company, 13th Infantry Battalion, 2nd Australian Expeditionary Force`,`A Company, 2/13th Australian Infantry Battalion`],name:`A`,designation:`2/13`,commander:``,icon:`9a`,
                                            pos:[1061,755],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`A Company, 13th Infantry Battalion, 2nd Australian Expeditionary Force`,`A Company, 2/13th Australian Infantry Battalion`],name:`A`,designation:`2/13`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Infantry`,`Motorized`],team:`Australian`,
                                            desc:[`B Company, 13th Infantry Battalion, 2nd Australian Expeditionary Force`,`B Company, 2/13th Australian Infantry Battalion`],name:`B`,designation:`2/13`,commander:``,icon:`9a`,
                                            pos:[1131,842],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`B Company, 13th Infantry Battalion, 2nd Australian Expeditionary Force`,`B Company, 2/13th Australian Infantry Battalion`],name:`B`,designation:`2/13`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Infantry`,`Motorized`],team:`Australian`,
                                            desc:[`C Company, 13th Infantry Battalion, 2nd Australian Expeditionary Force`,`C Company, 2/13th Australian Infantry Battalion`],name:`C`,designation:`2/13`,commander:``,icon:`9a`,
                                            pos:[1291,824],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`C Company, 13th Infantry Battalion, 2nd Australian Expeditionary Force`,`C Company, 2/13th Australian Infantry Battalion`],name:`C`,designation:`2/13`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Infantry`,`Motorized`],team:`Australian`,
                                            desc:[`D Company, 13th Infantry Battalion, 2nd Australian Expeditionary Force`,`D Company, 2/13th Australian Infantry Battalion`],name:`D`,designation:`2/13`,commander:``,icon:`9a`,
                                            pos:[1465,786],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`D Company, 13th Infantry Battalion, 2nd Australian Expeditionary Force`,`D Company, 2/13th Australian Infantry Battalion`],name:`D`,designation:`2/13`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`],team:`Australian`,
                                    desc:[`15th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/15th Australian Infantry Battalion`],name:`2/15`,designation:``,commander:`Ogle`,icon:`9a`,
                                    pos:[1555,526],
                                    elements:[
                                        {
                                            level:4,type:[`Infantry`,`Motorized`],team:`Australian`,
                                            desc:[`A Company, 15th Infantry Battalion, 2nd Australian Expeditionary Force`,`A Company, 2/15th Australian Infantry Battalion`],name:`A`,designation:`2/15`,commander:``,icon:`9a`,
                                            pos:[1516,625],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`A Company, 15th Infantry Battalion, 2nd Australian Expeditionary Force`,`A Company, 2/15th Australian Infantry Battalion`],name:`A`,designation:`2/15`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Infantry`,`Motorized`],team:`Australian`,
                                            desc:[`B Company, 15th Infantry Battalion, 2nd Australian Expeditionary Force`,`B Company, 2/15th Australian Infantry Battalion`],name:`B`,designation:`2/15`,commander:``,icon:`9a`,
                                            pos:[1635,696],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`B Company, 15th Infantry Battalion, 2nd Australian Expeditionary Force`,`B Company, 2/15th Australian Infantry Battalion`],name:`B`,designation:`2/15`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Infantry`,`Motorized`],team:`Australian`,
                                            desc:[`C Company, 15th Infantry Battalion, 2nd Australian Expeditionary Force`,`C Company, 2/15th Australian Infantry Battalion`],name:`C`,designation:`2/15`,commander:``,icon:`9a`,
                                            pos:[1726,539],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`C Company, 15th Infantry Battalion, 2nd Australian Expeditionary Force`,`C Company, 2/15th Australian Infantry Battalion`],name:`C`,designation:`2/15`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Infantry`,`Motorized`],team:`Australian`,
                                            desc:[`D Company, 15th Infantry Battalion, 2nd Australian Expeditionary Force`,`D Company, 2/15th Australian Infantry Battalion`],name:`D`,designation:`2/15`,commander:``,icon:`9a`,
                                            pos:[1720,390],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`D Company, 15th Infantry Battalion, 2nd Australian Expeditionary Force`,`D Company, 2/15th Australian Infantry Battalion`],name:`D`,designation:`2/15`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`],team:`Australian`,
                                    desc:[`17th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/17th Australian Infantry Battalion`],name:`2/17`,designation:``,commander:`Crawford`,icon:`9a`,
                                    pos:[840,510],
                                    elements:[
                                        {
                                            level:4,type:[`Infantry`,`Motorized`],team:`Australian`,
                                            desc:[`A Company, 17th Infantry Battalion, 2nd Australian Expeditionary Force`,`A Company, 2/17th Australian Infantry Battalion`],name:`A`,designation:`2/17`,commander:``,icon:`9a`,
                                            pos:[610,545],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`A Company, 17th Infantry Battalion, 2nd Australian Expeditionary Force`,`A Company, 2/17th Australian Infantry Battalion`],name:`A`,designation:`2/17`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Infantry`,`Motorized`],team:`Australian`,
                                            desc:[`B Company, 17th Infantry Battalion, 2nd Australian Expeditionary Force`,`B Company, 2/17th Australian Infantry Battalion`],name:`B`,designation:`2/17`,commander:``,icon:`9a`,
                                            pos:[616,686],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`B Company, 17th Infantry Battalion, 2nd Australian Expeditionary Force`,`B Company, 2/17th Australian Infantry Battalion`],name:`B`,designation:`2/17`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Infantry`,`Motorized`],team:`Australian`,
                                            desc:[`C Company, 17th Infantry Battalion, 2nd Australian Expeditionary Force`,`C Company, 2/17th Australian Infantry Battalion`],name:`C`,designation:`2/17`,commander:``,icon:`9a`,
                                            pos:[696,777],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`C Company, 17th Infantry Battalion, 2nd Australian Expeditionary Force`,`C Company, 2/17th Australian Infantry Battalion`],name:`C`,designation:`2/17`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Infantry`,`Motorized`],team:`Australian`,
                                            desc:[`D Company, 17th Infantry Battalion, 2nd Australian Expeditionary Force`,`D Company, 2/17th Australian Infantry Battalion`],name:`D`,designation:`2/17`,commander:``,icon:`9a`,
                                            pos:[858,763],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`D Company, 17th Infantry Battalion, 2nd Australian Expeditionary Force`,`D Company, 2/17th Australian Infantry Battalion`],name:`D`,designation:`2/17`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:4,type:[`Anti-Tank`,`Motorized`],team:`Australian`,
                                    desc:`20th Australian Anti-Tank Company`,name:`20`,designation:``,commander:``,icon:`9a`,
                                    pos:[1359,701],
                                    elements:[
                                        {level:4,type:`Motorized Anti-Tank Company`,team:`Australian`,desc:`20th Australian Anti-Tank Company`,name:`20`,designation:``,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Engineer`,`Motorized`],team:`Australian`,
                                    desc:[`7th Field Company, Royal Australian Engineers, 2nd Australian Expeditionary Force`,`2/7th Field Company, Royal Australian Engineers`],name:`2/7`,designation:``,commander:``,icon:`9a`,
                                    pos:[1196,244],
                                    elements:[
                                        {level:4,type:`Motorized Engineer Company`,team:`Australian`,desc:[`7th Field Company, Royal Australian Engineers, 2nd Australian Expeditionary Force`,`2/7th Field Company, Royal Australian Engineers`],name:`2/7`,designation:``,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Artillery`,`Motorized`],team:`British`,
                            desc:[`104th Battalion, Royal Horse Artillery`,`104th Regiment, Royal Horse Artillery`],name:`104`,designation:`Royal\nHorse`,commander:`Matthew`,icon:``,
                            pos:[1026,442],
                            elements:[
                                {
                                    level:4,type:[`Artillery`,`Motorized`],team:`British`,
                                    desc:[`A Battery, 104th Battalion, Royal Horse Artillery`,`A Battery, 104th Regiment, Royal Horse Artillery`],name:`A`,designation:`104`,commander:``,icon:``,
                                    pos:[999,555],
                                    elements:[
                                        {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`A Battery, 104th Battalion, Royal Horse Artillery`,`A Battery, 104th Regiment, Royal Horse Artillery`],name:`A`,designation:`104`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Artillery`,`Motorized`],team:`British`,
                                    desc:[`B Battery, 104th Battalion, Royal Horse Artillery`,`B Battery, 104th Regiment, Royal Horse Artillery`],name:`B`,designation:`104`,commander:``,icon:``,
                                    pos:[1343,370],
                                    elements:[
                                        {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`B Battery, 104th Battalion, Royal Horse Artillery`,`B Battery, 104th Regiment, Royal Horse Artillery`],name:`B`,designation:`104`,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:[`18th Cavalry Battalion "King Edward VII's Own"`,`18th King Edward VII's Own Cavalry`],name:`18`,designation:`King Edward\nVII's Own`,commander:``,icon:``,
                            pos:[777,381],
                            elements:[
                                {
                                    level:4,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:[`A Squadron, 18th Cavalry Battalion "King Edward VII's Own"`,`A Squadron, 18th King Edward VII's Own Cavalry`],name:`A`,designation:`18 KEO`,commander:``,icon:``,
                                    pos:[848,266],
                                    elements:[
                                        {level:4,type:`Motorized Infantry Company`,team:`Indian`,desc:[`A Squadron, 18th Cavalry Battalion "King Edward VII's Own"`,`A Squadron, 18th King Edward VII's Own Cavalry`],name:`A`,designation:`18 KEO`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:[`B Squadron, 18th Cavalry Battalion "King Edward VII's Own"`,`B Squadron, 18th King Edward VII's Own Cavalry`],name:`B`,designation:`18 KEO`,commander:``,icon:``,
                                    pos:[588,290],
                                    elements:[
                                        {level:4,type:`Motorized Infantry Company`,team:`Indian`,desc:[`B Squadron, 18th Cavalry Battalion "King Edward VII's Own"`,`B Squadron, 18th King Edward VII's Own Cavalry`],name:`B`,designation:`18 KEO`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:[`C Squadron, 18th Cavalry Battalion "King Edward VII's Own"`,`C Squadron, 18th King Edward VII's Own Cavalry`],name:`C`,designation:`18 KEO`,commander:``,icon:``,
                                    pos:[604,404],
                                    elements:[
                                        {level:4,type:`Motorized Infantry Company`,team:`Indian`,desc:[`C Squadron, 18th Cavalry Battalion "King Edward VII's Own"`,`C Squadron, 18th King Edward VII's Own Cavalry`],name:`C`,designation:`18 KEO`,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Tank`,`Light`],team:`British`,
                            desc:[`Composite Regiment, 3rd Armored Brigade`,`Composite Regiment, 3rd Armoured Brigade`],name:`C`,designation:`3 AB`,commander:`Carver`,icon:`3ab`,
                            pos:[1186,442],
                            elements:[
                                {
                                    level:4,type:[`Tank`,`Light`],team:`British`,
                                    desc:`Composite Company, 3rd The King's Own Hussars`,name:`C`,designation:`3 KOH`,commander:``,icon:`3ab`,
                                    pos:[818,682],
                                    elements:[
                                        {level:4,type:`Terrible Tank Company`,team:`British`,desc:`Composite Company, 3rd The King's Own Hussars`,name:`C`,designation:`3 KOH`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Tank`,`Light`],team:`British`,
                                    desc:[`Composite Company, 5th Battalion, Royal Tank Regiment`,`Composite Company, 5th Royal Tank Regiment`],name:`C`,designation:`5 RTR`,commander:``,icon:`3ab`,
                                    pos:[1317,554],
                                    elements:[
                                        {level:4,type:`Terrible Tank Company`,team:`British`,desc:[`Composite Company, 5th Battalion, Royal Tank Regiment`,`Composite Company, 5th Royal Tank Regiment`],name:`C`,designation:`5 RTR`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Tank`,`Light`],team:`British`,
                                    desc:[`Composite Company, 6th Battalion, Royal Tank Regiment`,`Composite Company, 6th Royal Tank Regiment`],name:`C`,designation:`6 RTR`,commander:``,icon:`3ab`,
                                    pos:[1565,375],
                                    elements:[
                                        {level:4,type:`Terrible Tank Company`,team:`British`,desc:[`Composite Company, 6th Battalion, Royal Tank Regiment`,`Composite Company, 6th Royal Tank Regiment`],name:`C`,designation:`6 RTR`,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:1,type:[`Tank`],team:`German`,
                            desc:`Kampfgruppe Kirchheim`,name:`KG`,designation:`200`,commander:`Kirchheim`,icon:`15pz`,
                            pos:[2073,946],
                            elements:[
                                {
                                    level:3,type:[`Tank`],team:`German`,
                                    desc:[`1st Battalion, 8th Panzer Regiment`,`I./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:`Crohn`,icon:`15pz`,
                                    pos:[2073,846],
                                    elements:[
                                        {level:4,type:`Medium Tank Company`,team:`German`,desc:[`1st Company, 8th Panzer Regiment`,`1./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:``},
                                        {level:4,type:`Medium Tank Company`,team:`German`,desc:[`2nd Company, 8th Panzer Regiment`,`1./Panzer-Regiment 8`],name:`2`,designation:`8`,commander:``},
                                        {level:4,type:`Armed Medium Tank Company`,team:`German`,desc:[`3rd Company, 8th Panzer Regiment`,`1./Panzer-Regiment 8`],name:`3`,designation:`8`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`1st Battalion, 115th Rifle Regiment`,`I./Schützen-Regiment 115`],name:`1`,designation:`115`,commander:`Zincke`,icon:`15pz`,
                                    pos:[2160,896],
                                    elements:[
                                        {level:4,type:`Motorized Infantry Company`,team:`German`,desc:[`1st Company, 115th Rifle Regiment`,`1./Schützen-Regiment 115`],name:`1`,designation:`115`,commander:``},
                                        {level:4,type:`Mechanized Infantry Company`,team:`German`,desc:[`2nd Company, 115th Rifle Regiment`,`2./Schützen-Regiment 115`],name:`2`,designation:`115`,commander:``},
                                        {level:4,type:`Motorized Infantry Company`,team:`German`,desc:[`3rd Company, 115th Rifle Regiment`,`3./Schützen-Regiment 115`],name:`3`,designation:`115`,commander:``},
                                        {level:4,type:`Motorized Machine Gun Company`,team:`German`,desc:[`4th Company, 115th Rifle Regiment`,`4./Schützen-Regiment 115`],name:`4`,designation:`115`,commander:``},
                                        {level:4,type:`Motorized Heavy Infantry Company`,team:`German`,desc:[`5th Company, 115th Rifle Regiment`,`5./Schützen-Regiment 115`],name:`5`,designation:`115`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`,`Machine Gun`],team:`German`,
                                    desc:[`2nd Machine Gun Battalion`,`2. Maschinengewehr-Bataillon`],name:`2`,designation:``,commander:`Warrelmann`,icon:`15pz`,
                                    pos:[2160,996],
                                    elements:[
                                        {level:4,type:`Motorized Machine Gun Company`,team:`German`,desc:[`1st Company, 2nd Machine Gun Battalion`,`1. Maschinengewehr-Bataillon 2`],name:`1`,designation:`2`,commander:``},
                                        {level:4,type:`Motorized Machine Gun Company`,team:`German`,desc:[`2nd Company, 2nd Machine Gun Battalion`,`2. Maschinengewehr-Bataillon 2`],name:`2`,designation:`2`,commander:``},
                                        {level:4,type:`Motorized Machine Gun Company`,team:`German`,desc:[`3rd Company, 2nd Machine Gun Battalion`,`3. Maschinengewehr-Bataillon 2`],name:`3`,designation:`2`,commander:``},
                                        {level:4,type:`Motorized Heavy Machine Gun Company`,team:`German`,desc:[`4th (Heavy) Company, 2nd Machine Gun Battalion`,`4. Maschinengewehr-Bataillon 2`],name:`4`,designation:`2`,commander:``},
                                        {level:4,type:`Engineer Company`,team:`German`,desc:[`2nd Company, 33rd Engineer Battalion`,`2. Panzer-Pionier-Bataillon 33`],name:`2`,designation:`33`,commander:``},
                                        {level:4,type:`Engineer Company`,team:`German`,desc:[`2nd Company, 39th Engineer Battalion`,`2. Panzer-Pionier-Bataillon 39`],name:`2`,designation:`39`,commander:`Cirener`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorcycle`],team:`German`,
                                    desc:[`15th Motorcycle Battalion`,`Kradschützen-Bataillon 15`],name:`15`,designation:``,commander:`Ehle`,icon:`15pz`,
                                    pos:[2073,1046],
                                    elements:[
                                        {level:4,type:`Motorcycle Infantry Company`,team:`German`,desc:[`1st Company, 15th Motorcycle Battalion`,`1./Kradschützen-Bataillon 15`],name:`1`,designation:`15`,commander:``},
                                        {level:4,type:`Motorcycle Infantry Company`,team:`German`,desc:[`2nd Company, 15th Motorcycle Battalion`,`2./Kradschützen-Bataillon 15`],name:`2`,designation:`15`,commander:``},
                                        {level:4,type:`Motorcycle Infantry Company`,team:`German`,desc:[`3rd Company, 15th Motorcycle Battalion`,`3./Kradschützen-Bataillon 15`],name:`3`,designation:`15`,commander:``},
                                        {level:4,type:`Motorcycle Machine Gun Company`,team:`German`,desc:[`4th Company, 15th Motorcycle Battalion`,`4./Kradschützen-Bataillon 15`],name:`4`,designation:`15`,commander:`Paulewicz`},
                                        {level:4,type:`Motorcycle Heavy Infantry Company`,team:`German`,desc:[`5th Company, 15th Motorcycle Battalion`,`5./Kradschützen-Bataillon 15`],name:`5`,designation:`15`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Artillery`,`Motorized`],team:`German`,
                                    desc:[`2nd "Half and Half" Battalion, 33rd Artillery Regiment`,`II./Artillerie-Regiment (mot.) 33 "Halb und Halb"`],name:`2`,designation:`33`,commander:`Mesmer`,icon:`15pz`,
                                    pos:[1986,996],
                                    elements:[
                                        {level:4,type:`Motorized Small Artillery Battery`,team:`German`,desc:[`4th Battery, 33rd Artillery Regiment`,`4./Artillerie-Regiment (mot.) 33 "Halb und Halb"`],name:`4`,designation:`33`,commander:``},
                                        {level:4,type:`Motorized Concentrated Artillery Battery`,team:`German`,desc:[`5th Battery, 33rd Artillery Regiment`,`5./Artillerie-Regiment (mot.) 33 "Halb und Halb"`],name:`5`,designation:`33`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Anti-Tank`,`Motorized`],team:`German`,
                                    desc:[`33rd Anti-Tank Battalion`,`Panzerjäger-Abteilung 33`],name:`33`,designation:``,commander:`Beil`,icon:`15pz`,
                                    pos:[1986,896],
                                    elements:[
                                        {level:4,type:`Motorized Anti-Tank Company`,team:`German`,desc:[`1st Company, 33rd Anti-Tank Battalion`,`1./Panzerjäger-Abteilung 33`],name:`1`,designation:`33`,commander:``}, 
                                        {level:4,type:`Motorized Anti-Tank Company`,team:`German`,desc:[`2nd Company, 33rd Anti-Tank Battalion`,`2./Panzerjäger-Abteilung 33`],name:`2`,designation:`33`,commander:``}, 
                                        {level:4,type:`Motorized Anti-Tank Company`,team:`German`,desc:[`3rd Company, 33rd Anti-Tank Battalion`,`3./Panzerjäger-Abteilung 33`],name:`3`,designation:`33`,commander:``}, 
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`102nd Infantry Division "Trento"`,`102ª Divisione di Fanteria Motorizzata "Trento"`],name:`102`,designation:`Trento`,commander:`Stampioni`,icon:`trento`,
                            pos:[1511,1234],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`61st Infantry Regiment`,`61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[1411,1234],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`1st Battalion, 61st Infantry Regiment`,`I Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`,icon:`trento`,
                                            pos:[461,908],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`],team:`Italian`,
                                                    desc:[`1st Company, 61st Infantry Regiment`,`1° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:``,icon:`trento`,
                                                    pos:[466,344],
                                                    elements:[
                                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`1st Company, 61st Infantry Regiment`,`1° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Italian`,
                                                    desc:[`2nd Company, 61st Infantry Regiment`,`2° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:``,icon:`trento`,
                                                    pos:[486,744],
                                                    elements:[
                                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`2nd Company, 61st Infantry Regiment`,`2° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Italian`,
                                                    desc:[`3rd Company, 61st Infantry Regiment`,`3° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`61`,commander:``,icon:`trento`,
                                                    pos:[758,870],
                                                    elements:[
                                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`3rd Company, 61st Infantry Regiment`,`3° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`61`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Heavy Infantry`],team:`Italian`,
                                                    desc:[`4th Company, 61st Infantry Regiment`,`4° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`4`,designation:`61`,commander:``,icon:`trento`,
                                                    pos:[996,905],
                                                    elements:[
                                                        {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`4th Company, 61st Infantry Regiment`,`4° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`4`,designation:`61`,commander:``},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`2nd Battalion, 61st Infantry Regiment`,`II Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`,icon:`trento`,
                                            pos:[1986,668],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`],team:`Italian`,
                                                    desc:[`5th Company, 61st Infantry Regiment`,`5° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`5`,designation:`61`,commander:``,icon:`trento`,
                                                    pos:[1261,949],
                                                    elements:[
                                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`5th Company, 61st Infantry Regiment`,`5° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`5`,designation:`61`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Italian`,
                                                    desc:[`6th Company, 61st Infantry Regiment`,`6° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`6`,designation:`61`,commander:``,icon:`trento`,
                                                    pos:[1531,889],
                                                    elements:[
                                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`6th Company, 61st Infantry Regiment`,`6° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`6`,designation:`61`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Italian`,
                                                    desc:[`7th Company, 61st Infantry Regiment`,`7° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`7`,designation:`61`,commander:``,icon:`trento`,
                                                    pos:[1828,639],
                                                    elements:[
                                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`7th Company, 61st Infantry Regiment`,`7° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`7`,designation:`61`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Heavy Infantry`],team:`Italian`,
                                                    desc:[`8th Company, 61st Infantry Regiment`,`8° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`8`,designation:`61`,commander:``,icon:`trento`,
                                                    pos:[1857,404],
                                                    elements:[
                                                        {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`8th Company, 61st Infantry Regiment`,`8° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`8`,designation:`61`,commander:``},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Machine Gun`,`Mortar`,`Anti-Tank`],team:`Italian`,
                                            desc:[`3rd Mixed Support Battalion, 61st Motorized Infantry Regiment`,`III Battaglione Armi d'Accompagnamento, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`61`,commander:`Rabezzana`,icon:`trento`,
                                            pos:[820,1017],
                                            elements:[
                                                {
                                                    level:4,type:[`Anti-Tank`],team:`Italian`,
                                                    desc:[`9th Company, 61st Infantry Regiment`,`9° Compagnia Contra Carri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`9`,designation:`61`,commander:``,icon:`trento`,
                                                    pos:[1039,999],
                                                    elements:[
                                                        {level:4,type:`Anti-Tank Company`,team:`Italian`,desc:[`9th Company, 61st Infantry Regiment`,`9° Compagnia Contra Carri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`9`,designation:`61`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Mortar`],team:`Italian`,
                                                    desc:[`10th Company, 61st Infantry Regiment`,`10° Compagnia Mortaio, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`10`,designation:`61`,commander:``,icon:`trento`,
                                                    pos:[386,541],
                                                    elements:[
                                                        {level:4,type:`Mortar Company`,team:`Italian`,desc:[`10th Company, 61st Infantry Regiment`,`10° Compagnia Mortaio, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`10`,designation:`61`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Machine Gun`],team:`Italian`,
                                                    desc:[`11th Company, 61st Infantry Regiment`,`11° Compagnia Mitraglieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`11`,designation:`61`,commander:``,icon:`trento`,
                                                    pos:[1757,837],
                                                    elements:[
                                                        {level:4,type:`Machine Gun Company`,team:`Italian`,desc:[`11th Company, 61st Infantry Regiment`,`11° Compagnia Mitraglieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`11`,designation:`61`,commander:``},
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`46th Artillery Regiment`,`46° Reggimento Artiglieria "Trento"`],name:`46`,designation:`Trento`,commander:`Grati`,icon:`trento`,
                                    pos:[1611,1234],
                                    elements:[
                                        {
                                            level:3,type:[`Artillery`],team:`Italian`,
                                            desc:[`1st Group, 46th Artillery Regiment`,`I Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`1`,designation:`46`,commander:`Giannimi`,icon:`trento`,
                                            pos:[212,488],
                                            elements:[
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`1st Battery, 46th Artillery Regiment`,`1° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`1`,designation:`46`,commander:``},
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 46th Artillery Regiment`,`2° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`2`,designation:`46`,commander:``},
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 46th Artillery Regiment`,`3° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`3`,designation:`46`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`],team:`Italian`,
                                            desc:[`3rd Group, 46th Artillery Regiment`,`III Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`3`,designation:`46`,commander:`Salvo`,icon:`trento`,
                                            pos:[1531,989],
                                            elements:[
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`7th Battery, 46th Artillery Regiment`,`7° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`7`,designation:`46`,commander:``},
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`8th Battery, 46th Artillery Regiment`,`8° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`8`,designation:`46`,commander:``},
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`9th Battery, 46th Artillery Regiment`,`9° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`9`,designation:`46`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`],team:`Italian`,
                                            desc:[`4th Group, 46th Artillery Regiment`,`IV Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`4`,designation:`46`,commander:`Gavazzi`,icon:`trento`,
                                            pos:[1915,486],
                                            elements:[
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`7th Battery, 46th Artillery Regiment`,`10° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`10`,designation:`46`,commander:``},
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`8th Battery, 46th Artillery Regiment`,`11° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`11`,designation:`46`,commander:``},
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`8th Battery, 46th Artillery Regiment`,`12° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`12`,designation:`46`,commander:``},
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },/*{
                    name:`Axis Capture of Tobruk`,
                    battalions:[[0],[0,0]],bonus:false,partition:[[0],[1],[2]],
                    unit:[
                    ],
                },*/
            ],reserve:[
            ],
        },{
            name:[`Legacy Modes`,`Base`],unit:[
                {
                    name:`Legacy Modes`,
                    battalions:[],bonus:false,partition:[],
                    unit:[],reserve:[],
                },
            ],
        },
    ],
}
export var dev={slow:false,begin:1}
export var options={obscureKills:true,translate:false,headquarters:false}
export var graphics={main:0,scale:0,load:{map:[],city:[],team:[],unit:[],water:0,fortifications:0}}
export var inputs={mouse:{base:{x:0,y:0},rel:{x:0,y:0},previous:{base:{x:0,y:0},rel:{x:0,y:0}}}}
export var constants={
    init:false,unitId:0,
    turnTime:150,artilleryRange:250,
    battleVariance:1.5,breakVariance:2.5,breakMult:1.2,battalionVariance:1.2,
}
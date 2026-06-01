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
        {name:`Heavy Infantry Company`,unitType:[`Infantry`,`Heavy`],class:0,damage:[12,3],armor:0,health:25,morale:1,num:200,speed:0.8,artillery:false,engineer:false,recon:false},
        {name:`Elite Infantry Company`,unitType:[`Infantry`,`Mixed`],class:0,damage:[15,3],armor:0,health:40,morale:1.5,num:200,speed:1.25,artillery:false,engineer:false,recon:false},
        {name:`Weak Infantry`,unitType:[`Infantry`],class:0,damage:[10,2],armor:0,health:90,morale:0.9,num:700,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Small Infantry`,unitType:[`Infantry`],class:0,damage:[10,2],armor:0,health:90,morale:1,num:700,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Small Infantry Company`,unitType:[`Infantry`],class:0,damage:[10,2],armor:0,health:22,morale:1,num:175,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Small Heavy Infantry Company`,unitType:[`Infantry`,`Heavy`],class:0,damage:[12,3],armor:0,health:22,morale:1,num:175,speed:0.8,artillery:false,engineer:false,recon:false},
        {name:`Reinforced Infantry`,unitType:[`Infantry`],class:0,damage:[10,2],armor:0,health:150,morale:1,num:1200,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Oasis Infantry`,unitType:[`Oasis Infantry`],class:0,damage:[10,1],armor:0,health:125,morale:1.1,num:1000,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Light Oasis Infantry`,unitType:[`Oasis Infantry`,`Recon`],class:0,damage:[9,1],armor:0,health:70,morale:1.1,num:500,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Oasis Infantry Company`,unitType:[`Oasis Infantry`],class:0,damage:[10,1],armor:0,health:25,morale:1.1,num:200,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Machine Gun`,unitType:[`Infantry`,`Machine Gun`],class:0,damage:[12,2],armor:0,health:100,morale:1,num:800,speed:0.9,artillery:false,engineer:false,recon:false},
        {name:`Machine Gun Company`,unitType:[`Infantry`,`Machine Gun`],class:0,damage:[12,2],armor:0,health:25,morale:1,num:200,speed:0.9,artillery:false,engineer:false,recon:false},
        {name:`Heavy Machine Gun Company`,unitType:[`Infantry`,`Machine Gun`,`Heavy`],class:0,damage:[15,3],armor:0,health:25,morale:1,num:200,speed:0.72,artillery:false,engineer:false,recon:false},

        {name:`Semi-Motorized Infantry`,unitType:[`Infantry`,`Semi-Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1,num:800,speed:1.75,artillery:false,engineer:false,recon:false},
        {name:`Semi-Motorized Armed Infantry`,unitType:[`Infantry`,`Semi-Motorized`],class:0,damage:[12,3],armor:0,health:100,morale:1.05,num:800,speed:1.75,artillery:false,engineer:false,recon:false},
        {name:`Semi-Motorized Infantry Company`,unitType:[`Infantry`,`Semi-Motorized`],class:0,damage:[10,2],armor:0,health:25,morale:1,num:200,speed:1.75,artillery:false,engineer:false,recon:false},
        {name:`Semi-Motorized Heavy Infantry Company`,unitType:[`Infantry`,`Heavy`,`Semi-Motorized`],class:0,damage:[12,3],armor:0,health:25,morale:1,num:200,speed:1.4,artillery:false,engineer:false,recon:false},
        
        {name:`Motorized Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Infantry Company`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:25,morale:1,num:200,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Heavy Infantry Company`,unitType:[`Infantry`,`Motorized`,`Heavy`],class:0,damage:[12,3],armor:0,health:25,morale:1,num:200,speed:2,artillery:false,engineer:false,recon:false},

        {name:`Weaker Motorized Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:75,morale:0.8,num:600,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Weaker Motorized Infantry Company`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:20,morale:0.8,num:150,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Armed Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[12,3],armor:0,health:100,morale:1.05,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Armed Infantry Company`,unitType:[`Infantry`,`Motorized`],class:0,damage:[12,3],armor:0,health:25,morale:1.05,num:200,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:100,morale:1,num:800,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Motorized Machine Gun Company`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:25,morale:1,num:200,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Motorized Reinforced Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,3],armor:0.1,health:100,morale:1.05,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Heavy Machine Gun Company`,unitType:[`Infantry`,`Machine Gun`,`Motorized`,`Heavy`],class:0,damage:[15,3],armor:0,health:25,morale:1,num:200,speed:1.8,artillery:false,engineer:false,recon:false},
        {name:`Motorized Heavy Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:125,morale:1,num:1000,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Motorized Engineer Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,4],armor:0,health:125,morale:1,num:1000,speed:2.25,artillery:false,engineer:true,recon:false},
        {name:`Motorized Bersaglieri`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:50,morale:1.5,num:400,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Machine Gun Bersaglieri`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:50,morale:1.5,num:400,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Motorized Machine Gun Bersaglieri Company`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:25,morale:1.5,num:200,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Motorized Militia`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:110,morale:1.1,num:800,speed:2.5,artillery:false,engineer:false,recon:false},

        {name:`Motorcycle Infantry`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[10,1],armor:0,health:100,morale:1,num:800,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Infantry Company`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[10,1],armor:0,health:25,morale:1,num:200,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Armed Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[12,2],armor:0,health:100,morale:1.05,num:800,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Bersaglieri`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[10,1],armor:0,health:75,morale:1.5,num:600,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Bersaglieri Company`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[10,1],armor:0,health:25,morale:1.5,num:200,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Police`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[8,1],armor:0.2,health:100,morale:1,num:600,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Infantry Company`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,1],armor:0,health:25,morale:1,num:200,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Heavy Infantry Company`,unitType:[`Infantry`,`Motorized`,`Heavy`],class:0,damage:[12,2],armor:0,health:25,morale:1,num:200,speed:2.4,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Machine Gun Company`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,1],armor:0,health:25,morale:1,num:200,speed:2.7,artillery:false,engineer:false,recon:false},

        {name:`Mechanized Infantry`,unitType:[`Infantry`,`Tank`],class:0,damage:[10,4],armor:0.5,health:100,morale:1,num:800,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Mechanized Infantry Company`,unitType:[`Infantry`,`Tank`],class:0,damage:[10,4],armor:0.5,health:25,morale:1,num:200,speed:2.25,artillery:false,engineer:false,recon:false},

        {name:`Terrible Tank`,unitType:[`Tank`,`Light`],class:1,damage:[10,4],armor:0.6,health:60,morale:0.4,num:50,speed:1.8,artillery:false,engineer:false,recon:false},
        {name:`Terrible Tank Company`,unitType:[`Tank`,`Light`],class:1,damage:[10,4],armor:0.6,health:20,morale:0.4,num:18,speed:1.8,artillery:false,engineer:false,recon:false},
        {name:`Immobile Terrible Tank Company`,unitType:[`Tank`,`Light`],class:1,damage:[10,4],armor:0.6,health:15,morale:0.4,num:16,speed:0.2,artillery:false,engineer:false,recon:false},
        {name:`Light Tank`,unitType:[`Tank`,`Light`],class:1,damage:[12,6],armor:0.6,health:60,morale:0.5,num:50,speed:2,artillery:false,engineer:false,recon:false},
        {name:`Light Tank Company`,unitType:[`Tank`,`Light`],class:1,damage:[12,6],armor:0.6,health:20,morale:0.5,num:17,speed:2,artillery:false,engineer:false,recon:false},
        {name:`Security Tank`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:40,morale:0.6,num:33,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Security Tank Company`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:10,morale:0.6,num:9,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Medium Tank`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:60,morale:0.6,num:50,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Reduced Medium Tank`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:40,morale:0.6,num:35,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Captured Medium Tank`,unitType:[`Tank`],class:1,damage:[11,11],armor:0.75,health:55,morale:0.6,num:50,speed:1.45,artillery:false,engineer:false,recon:false},
        {name:`Medium Tank Company`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:20,morale:0.6,num:19,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Slighted Medium Tank Company`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:18,morale:0.6,num:17,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Captured Medium Tank Company`,unitType:[`Tank`],class:1,damage:[11,11],armor:0.7,health:16,morale:0.6,num:14,speed:1.4,artillery:false,engineer:false,recon:false},
        {name:`Armed Medium Tank Company`,unitType:[`Tank`,`Machine Gun`],class:1,damage:[15,15],armor:0.8,health:20,morale:0.6,num:13,speed:1.2,artillery:false,engineer:false,recon:false},
        {name:`Staff Medium Tank Company`,unitType:[`Tank`,`Headquarters`],class:1,damage:[12,12],armor:0.8,health:10,morale:1.2,num:8,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Poor Medium Tank Company`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:15,morale:0.6,num:13,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Immobile Medium Tank Company`,unitType:[`Tank`],class:1,damage:[10,10],armor:0.8,health:10,morale:0.6,num:13,speed:0.2,artillery:false,engineer:false,recon:false},
        {name:`Heavy Tank`,unitType:[`Tank`,`Heavy`],class:1,damage:[15,12],armor:1,health:75,morale:0.6,num:50,speed:1.125,artillery:false,engineer:false,recon:false},
        {name:`Heavy Tank Company`,unitType:[`Tank`,`Heavy`],class:1,damage:[15,12],armor:1,health:25,morale:0.6,num:17,speed:1.125,artillery:false,engineer:false,recon:false},
        {name:`Slow Tank`,unitType:[`Tank`,`Heavy`],class:1,damage:[12,10],armor:1,health:75,morale:0.6,num:50,speed:1.125,artillery:false,engineer:false,recon:false},
        {name:`Superior Tank`,unitType:[`Tank`,`Superior`],class:1,damage:[15,15],armor:0.8,health:60,morale:0.75,num:50,speed:1.5,artillery:false,engineer:false,recon:false},

        {name:`Armored Car`,unitType:[`Tank`,`Recon`,`Tracked`],class:1,damage:[6,1],armor:0.8,health:50,morale:0.5,num:60,speed:3,artillery:false,engineer:false,recon:true},
        {name:`Armored Car Company`,unitType:[`Tank`,`Recon`,`Tracked`],class:1,damage:[6,1],armor:0.8,health:12,morale:0.5,num:15,speed:3,artillery:false,engineer:false,recon:true},

        {name:`Light Artillery`,unitType:[`Light Artillery`],class:2,damage:[16,10,8,10],armor:0.2,health:20,morale:0.6,num:24,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Coastal Artillery`,unitType:[`Light Artillery`],class:2,damage:[12,8,6,8],armor:0.2,health:12,morale:0.6,num:12,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Small Artillery`,unitType:[`Artillery`],class:2,damage:[16,5,8,5],armor:0.4,health:12,morale:0.8,num:12,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Small Artillery Battery`,unitType:[`Artillery`],class:2,damage:[16,5,3,2],armor:0.4,health:4,morale:0.8,num:4,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Small Fast Artillery`,unitType:[`Artillery`],class:2,damage:[16,5,8,5],armor:0.4,health:12,morale:0.8,num:12,speed:0.85,artillery:true,engineer:false,recon:false},
        {name:`Small Fast Artillery Battery`,unitType:[`Artillery`],class:2,damage:[16,5,8,5],armor:0.4,health:4,morale:0.8,num:4,speed:0.85,artillery:true,engineer:false,recon:false},
        {name:`Small Faster Artillery`,unitType:[`Artillery`],class:2,damage:[16,5,8,5],armor:0.4,health:12,morale:0.8,num:12,speed:0.95,artillery:true,engineer:false,recon:false},
        {name:`Small Coastal Artillery`,unitType:[`Artillery`],class:2,damage:[14,8,14,8],armor:0.3,health:24,morale:0.8,num:22,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Tiny Coastal Artillery Battery`,unitType:[`Artillery`],class:2,damage:[14,8,1,1],armor:0.3,health:2,morale:0.8,num:2,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Smaller Coastal Artillery Battery`,unitType:[`Artillery`],class:2,damage:[14,8,4,2],armor:0.3,health:6,morale:0.8,num:6,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Small Coastal Artillery Battery`,unitType:[`Artillery`],class:2,damage:[14,8,5,3],armor:0.3,health:8,morale:0.8,num:8,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Ruined Artillery Battery`,unitType:[`Artillery`],class:2,damage:[16,5,3,2],armor:0.4,health:4,morale:0.6,num:4,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Half Artillery`,unitType:[`Artillery`],class:2,damage:[10,10,5,10],armor:0.4,health:15,morale:0.8,num:8,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Artillery`,unitType:[`Artillery`],class:2,damage:[16,16,8,16],armor:0.4,health:20,morale:0.8,num:24,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Artillery Battery`,unitType:[`Artillery`],class:2,damage:[16,16,3,5],armor:0.4,health:6,morale:0.8,num:8,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Concentrated Artillery`,unitType:[`Artillery`],class:2,damage:[16,16,8,16],armor:0.4,health:20,morale:0.8,num:12,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Heavy Artillery`,unitType:[`Artillery`,`Heavy`],class:2,damage:[20,20,10,20],armor:0.5,health:20,morale:0.8,num:12,speed:0.6,artillery:true,engineer:false,recon:false},

        {name:`Semi-Motorized Artillery`,unitType:[`Artillery`,`Semi-Motorized`],class:2,damage:[16,16,8,16],armor:0.4,health:20,morale:0.8,num:12,speed:1.05,artillery:true,engineer:false,recon:false},

        {name:`Motorized Light Artillery`,unitType:[`Light Artillery`,`Motorized`],class:2,damage:[16,10,8,10],armor:0.2,health:20,morale:0.6,num:12,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Small Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[16,5,6,5],armor:0.4,health:12,morale:0.8,num:12,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Small Artillery Battery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[16,5,2,2],armor:0.4,health:4,morale:0.8,num:4,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Group Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[18,15,9,15],armor:0.4,health:24,morale:0.8,num:24,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Half Artillery`,unitType:[`Artillery`],class:2,damage:[10,10,5,10],armor:0.4,health:15,morale:0.8,num:8,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[16,16,8,16],armor:0.4,health:20,morale:0.8,num:24,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Artillery Battery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[16,16,3,5],armor:0.4,health:6,morale:0.8,num:8,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Reduced Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[16,16,8,16],armor:0.4,health:12,morale:0.8,num:16,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Weaker Motorized Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[16,16,,8,16],armor:0.4,health:15,morale:0.6,num:18,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Concentrated Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[16,16,8,16],armor:0.4,health:20,morale:0.8,num:12,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Concentrated Artillery Battery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[16,16,3,5],armor:0.4,health:8,morale:0.8,num:4,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Heavy Artillery`,unitType:[`Artillery`,`Heavy`,`Motorized`],class:2,damage:[20,20,10,20],armor:0.5,health:20,morale:0.8,num:12,speed:1.5,artillery:true,engineer:false,recon:false},
        {name:`Motorized Heavy Artillery Battery`,unitType:[`Artillery`,`Heavy`,`Motorized`],class:2,damage:[20,20,10,20],armor:0.5,health:8,morale:0.8,num:4,speed:1.5,artillery:true,engineer:false,recon:false},

        {name:`Mixed Support`,unitType:[`Machine Gun`,`Mortar`,`Anti-Tank`],class:0,damage:[10,8],armor:0.1,health:50,morale:1,num:400,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Motorized Mixed Support`,unitType:[`Machine Gun`,`Motorized`,`Mortar`,`Anti-Tank`],class:0,damage:[10,8],armor:0.1,health:50,morale:1,num:400,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Mixed Support Bersaglieri`,unitType:[`Machine Gun`,`Motorized`,`Mortar`,`Anti-Tank`],class:0,damage:[10,8],armor:0.1,health:50,morale:1.2,num:400,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Engineer Mixed Support`,unitType:[`Machine Gun`,`Mortar`,`Engineer`,`Anti-Tank`],class:0,damage:[10,10],armor:0.1,health:50,morale:1,num:500,speed:1,artillery:false,engineer:true,recon:false},

        {name:`Motorized Heavy Reconnaissance Company`,unitType:[`Recon`,`Heavy`,`Motorized`],class:2,damage:[6,7],armor:0.4,health:15,morale:1,num:10,speed:3,artillery:false,engineer:false,recon:false},

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

        {name:`Mortar`,unitType:[`Mortar`],class:2,damage:[15,5],armor:0,health:30,morale:1,num:60,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Mortar Company`,unitType:[`Mortar`],class:2,damage:[15,5],armor:0,health:10,morale:1,num:20,speed:1,artillery:false,engineer:false,recon:false},
        
        {name:`Infantry Gun`,unitType:[`Artillery`,`Infantry`],class:2,damage:[10,6],armor:0.2,health:30,morale:0.75,num:12,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Infantry Gun Company`,unitType:[`Artillery`,`Infantry`],class:2,damage:[10,6],armor:0.2,health:10,morale:0.75,num:4,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Motorized Infantry Gun`,unitType:[`Artillery`,`Infantry`],class:2,damage:[10,6],armor:0.2,health:30,morale:0.75,num:12,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Infantry Gun Company`,unitType:[`Artillery`,`Infantry`],class:2,damage:[10,6],armor:0.2,health:10,morale:0.75,num:4,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Heavy Infantry Gun`,unitType:[`Visual Artillery`,`Infantry`,`Tank`,`Heavy`],class:2,damage:[14,8],armor:0.4,health:30,morale:0.75,num:12,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Motorized Heavy Infantry Gun Company`,unitType:[`Visual Artillery`,`Infantry`,`Tank`,`Heavy`],class:2,damage:[14,8],armor:0.4,health:10,morale:0.75,num:4,speed:2.25,artillery:false,engineer:false,recon:false},
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
        {name:`Heavy Text`},
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
        {name:`Heavy`},
        {name:`Headquarters`},
        {name:`Fortress`},
        {name:`Visual Artillery`},
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
                {name:`Bardia`,owner:2,type:1,pos:[2523,639]},
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
                    strength:{name:`Batteralions`,num:[[18],[0,36]]},partition:[[2],[0]],bonus:0,
                    unit:[
                        {
                            level:0,type:[`Tank`],team:`British`,
                            desc:[`7th Armored Division`,`7th Armoured Division`],name:`7`,designation:``,commander:`Creagh`,icon:`7a`,
                            pos:[2955,856],
                            elements:[
                                {
                                    level:1,type:[`Tank`],team:`British`,
                                    desc:[`4th Armored Brigade`,`4th Armoured Brigade`],name:`4`,designation:``,commander:`Caunter`,icon:`4ab`,
                                    pos:[2800,856],
                                    elements:[
                                        {level:3,type:`Medium Tank`,team:`British`,desc:`3rd The King's Own Hussars`,name:`3`,designation:`King's Own\nHussars`,commander:`Petherick`},
                                        {level:3,type:`Medium Tank`,team:`British`,desc:[`4th Battalion, Royal Tank Regiment`,`4th Royal Tank Regiment`],name:`4`,designation:`Royal Tank\nRegiment`,commander:`O'Carroll`},
                                        {level:3,type:`Medium Tank`,team:`British`,desc:[`6th Battalion, Royal Tank Regiment`,`6th Royal Tank Regiment`],name:`6`,designation:`Royal Tank\nRegiment`,commander:`Harland`},
                                        {level:3,type:`Heavy Tank`,team:`British`,desc:[`7th Battalion, Royal Tank Regiment`,`7th Royal Tank Regiment`],name:`7`,designation:`Royal Tank\nRegiment`,commander:`Groves`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Artillery`,`Motorized`],team:`British`,
                                    desc:`7th Support Group`,name:`7`,designation:``,commander:`Gott`,icon:`7sg`,
                                    pos:[2880,856],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:`de Salis`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Renton`},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`2nd Battalion, Royal Horse Artillery`,`2nd Regiment, Royal Horse Artillery`],name:`2`,designation:`Royal\nHorse`,commander:`Aikenhead`},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:`Royal\nHorse`,commander:`Currie`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`3rd Battalion, Coldstream Guards`,name:`3`,designation:`Coldstream\nGuards`,commander:`Moubray`,icon:``,
                                    pos:[2555,746],
                                    elements:[
                                        {type:`Motorized Infantry`},
                                    ]
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`British`,
                                    desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`,icon:`7a`,
                                    pos:[2612,975],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`British`,desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:`4th Indian Division`,name:`4`,designation:``,commander:`Beresford-Peirse`,icon:`4id`,
                            pos:[2955,756],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`11th Indian Infantry Brigade`,name:`11`,designation:``,commander:`Savory`,icon:`4id`,
                                    pos:[2800,756],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Queen's Own Cameron Highlanders`,name:`2`,designation:`Cameron\nHighlanders`,commander:`Duncan`},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`1st Battalion, 6th Rajputana Rifles`,name:`1/6`,designation:`Rajputana`,commander:`Quayle`},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`2nd Battalion, 5th Mahratta Light Infantry`,name:`2/5`,designation:`Mahratta`,commander:`Doyle`},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`25th Battalion, Royal Artillery`,`25th Field Regiment, Royal Artillery`],name:`25`,designation:``,commander:`Pope`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`Australian`,
                                    desc:`20th Australian Infantry Brigade`,name:`20`,designation:``,commander:`Murray`,icon:`9a`,
                                    pos:[2880,756],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`Australian`,desc:[`13th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/13th Australian Infantry Battalion`],name:`2/13`,designation:``,commander:`Burrows`},
                                        {level:3,type:`Motorized Infantry`,team:`Australian`,desc:[`15th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/15th Australian Infantry Battalion`],name:`2/15`,designation:``,commander:`Ogle`},
                                        {level:3,type:`Motorized Infantry`,team:`Australian`,desc:[`17th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/17th Australian Infantry Battalion`],name:`2/17`,designation:``,commander:`Crawford`},
                                        {level:3,type:`Light Tank`,team:`Australian`,desc:[`6th Australian Division Tank Battalion`,`6th Australian Divisional Cavalry`],name:`6`,designation:`Divisional\nCavalry`,commander:`Morrison`,icon:``},
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Infantry`,`Motorcycle`],team:`Italian`,
                            desc:[`Mixed Bersaglieri Motorcycle Battalion`,`Battaglione Misto Bersaglieri`],name:`M`,designation:`Bersaglieri`,commander:`Forneris`,icon:``,
                            pos:[2060,602],
                            elements:[
                                {level:4,type:`Motorcycle Bersaglieri Company`,team:`Italian`,desc:[`22nd Bersaglieri Company`,`22° Compagnia Bersaglieri`],name:`22`,designation:`Bersaglieri`,commander:`Alessi`},
                                {level:4,type:`Motorcycle Bersaglieri Company`,team:`Italian`,desc:[`60th Bersaglieri Company`,`60° Compagnia Bersaglieri`],name:`60`,designation:`Bersaglieri`,commander:`Maltese`,icon:`sabratha`},
                                {level:4,type:`Motorcycle Bersaglieri Company`,team:`Italian`,desc:[`61st Bersaglieri Company`,`61° Compagnia Bersaglieri`],name:`61`,designation:`Bersaglieri`,commander:`Bonfanti`,icon:`sirte`},
                            ],
                        },{
                            level:3,type:[`Infantry`],team:`Blackshirt`,
                            desc:[`140th Blackshirt Battalion "Aquilia"`,`CXL Coorte CC.NN. "Aquilia"`],name:`140`,designation:`Aquilia`,commander:`Martorana`,icon:`2ccnn`,
                            pos:[2498,1102],
                            elements:[
                                {type:`Infantry`},
                            ],
                        },{
                            level:3,type:[`Infantry`],team:`Blackshirt`,
                            desc:[`Blackshirt Battalion "Volontari della Libia"`,`Coorte CC.NN. "Volontari della Libia"`],name:`Volontari\ndella Libia`,designation:``,commander:`Angeleri`,icon:``,
                            pos:[2119,761],
                            elements:[
                                {type:`Infantry`},
                            ],
                        },{
                            level:3,type:[`Infantry`,`Machine Gun`],team:`Italian`,
                            desc:[`155th Machine Gun Battalion`,`155º Battaglione Mitraglieri`],name:`155`,designation:``,commander:`Grande`,icon:`savona`,
                            pos:[567,1163],
                            elements:[
                                {type:`Machine Gun`},
                            ],
                        },{
                            level:2,type:[`Artillery`],team:`Italian`,
                            desc:[`10th Corps Artillery Regiment`,`10° Reggimento Artiglieria di Corpo d'Armata`],name:`10`,designation:`Corps`,commander:`Infante`,icon:``,
                            pos:[1703,374],
                            elements:[
                                {level:3,type:`Small Artillery`,team:`Italian`,desc:[`17th Group, 10th Corps Artillery Regiment`,`XVII Gruppo, 10° Reggimento Artiglieria di Corpo d'Armata`],name:`17`,designation:``,commander:`Locarno`},
                                {level:3,type:`Small Artillery`,team:`Italian`,desc:[`25th Group, 10th Corps Artillery Regiment`,`XXV Gruppo, 10° Reggimento Artiglieria di Corpo d'Armata`],name:`25`,designation:``,commander:`Pirisi`},
                            ],
                        },{
                            level:2,type:[`Artillery`],team:`Italian`,
                            desc:[`22nd Corps Artillery Regiment`,`22° Reggimento Artiglieria di Corpo d'Armata`],name:`22`,designation:`Corps`,commander:`Sardi`,icon:``,
                            pos:[2068,492],
                            elements:[
                                {level:3,type:`Small Artillery`,team:`Italian`,desc:[`42nd Group, 22nd Corps Artillery Regiment`,`XLII Gruppo, 22° Reggimento Artiglieria di Corpo d'Armata`],name:`42`,designation:``,commander:`Battaglini`},
                                {level:3,type:`Small Artillery`,team:`Italian`,desc:[`43rd Group, 22nd Corps Artillery Regiment`,`XLIII Gruppo, 22° Reggimento Artiglieria di Corpo d'Armata`],name:`43`,designation:``,commander:`Bombagli`},
                                {level:3,type:`Small Artillery`,team:`Italian`,desc:[`3rd Group, 12th Artillery Regiment`,`III Gruppo, 12° Reggimento Artiglieria "Sila"`],name:`3`,designation:`12`,commander:`Aliberti`,icon:`savona`},
                            ],
                        },{
                            level:2,type:[`Artillery`],team:`Italian`,
                            desc:[`25th Corps Artillery Regiment`,`25° Reggimento Artiglieria di Corpo d'Armata`],name:`25`,designation:`Corps`,commander:`Bellini`,icon:``,
                            pos:[1842,529],
                            elements:[
                                {level:3,type:`Small Artillery`,team:`Italian`,desc:[`105th Group, 25th Corps Artillery Regiment`,`CV Gruppo, 25° Reggimento Artiglieria di Corpo d'Armata`],name:`105`,designation:``,commander:`Manca`},
                                {level:3,type:`Small Artillery`,team:`Italian`,desc:[`130th Group, 25th Corps Artillery Regiment`,`CXXX Gruppo, 25° Reggimento Artiglieria di Corpo d'Armata`],name:`130`,designation:``,commander:`Biondi-Morra`},
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`60th Infantry Division "Sabratha"`,`60ª Divisione di Fanteria Autotransportabile "Sabratha"`],name:`60`,designation:`Sabratha`,commander:`Della Bona`,icon:`sabratha`,
                            pos:[1103,145],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`85th Infantry Regiment`,`85° Reggimento di Fanteria "Sabratha"`],name:`85`,designation:`Sabratha`,commander:`Grimaldi`,icon:`sabratha`,
                                    pos:[1534,140],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 85th Infantry Regiment`,`I Battaglione Fucilieri, 85° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`1`,designation:`85`,commander:`Angelozzi`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 85th Infantry Regiment`,`II Battaglione Fucilieri, 85° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`2`,designation:`85`,commander:`Morosini`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`3rd Battalion, 85th Infantry Regiment`,`III Battaglione Fucilieri, 85° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`2`,designation:`85`,commander:`Fradella`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`86th Infantry Regiment`,`86° Reggimento di Fanteria "Sabratha"`],name:`86`,designation:`Sabratha`,commander:`Castrignanò`,icon:`sabratha`,
                                    pos:[500,494],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 86th Infantry Regiment`,`I Battaglione Fucilieri, 86° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`1`,designation:`86`,commander:`Velosa`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 86th Infantry Regiment`,`II Battaglione Fucilieri, 86° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`2`,designation:`86`,commander:`Piana`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`3rd Battalion, 86th Infantry Regiment`,`III Battaglione Fucilieri, 86° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`2`,designation:`86`,commander:`Gilardi`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`42nd Artillery Regiment`,`42° Reggimento Artiglieria "Sabratha"`],name:`42`,designation:`Sabratha`,commander:`Cordone`,icon:`sabratha`,
                                    pos:[973,240],
                                    elements:[
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`1st Group, 42nd Artillery Regiment`,`I Gruppo, 42° Reggimento Artiglieria "Sabratha"`],name:`1`,designation:`42`,commander:`Cinalli`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`2nd Group, 42nd Artillery Regiment`,`II Gruppo, 42° Reggimento Artiglieria "Sabratha"`],name:`2`,designation:`42`,commander:`Milani`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`3rd Group, 42nd Artillery Regiment`,`III Gruppo, 42° Reggimento Artiglieria "Sabratha"`],name:`3`,designation:`42`,commander:`Zambrano`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Machine Gun`],team:`Italian`,
                                    desc:[`60th Machine Gun Battalion`,`60º Battaglione Mitraglieri`],name:`60`,designation:``,commander:`Pepe`,icon:`sabratha`,
                                    pos:[1408,448],
                                    elements:[
                                        {type:`Machine Gun`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`61st Infantry Division "Sirte"`,`61ª Divisione di Fanteria Autotransportabile "Sirte"`],name:`61`,designation:`Sirte`,commander:`Della Mura`,icon:`sirte`,
                            pos:[2468,681],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`69th Infantry Regiment`,`69° Reggimento di Fanteria "Sirte"`],name:`69`,designation:`Sirte`,commander:`Barberis`,icon:`sirte`,
                                    pos:[2523,639],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 69th Infantry Regiment`,`I Battaglione Fucilieri, 69° Reggimento di Fanteria Motorizzata "Sirte"`],name:`1`,designation:`69`,commander:`Rugiu`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 69th Infantry Regiment`,`II Battaglione Fucilieri, 69° Reggimento di Fanteria Motorizzata "Sirte"`],name:`2`,designation:`69`,commander:`Guassardo`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`3rd Battalion, 69th Infantry Regiment`,`III Battaglione Fucilieri, 69° Reggimento di Fanteria Motorizzata "Sirte"`],name:`2`,designation:`69`,commander:`Silvagni`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`70th Infantry Regiment`,`70° Reggimento di Fanteria "Sirte"`],name:`70`,designation:`Sirte`,commander:`Tenti`,icon:`sirte`,
                                    pos:[2489,729],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 70th Infantry Regiment`,`I Battaglione Fucilieri, 70° Reggimento di Fanteria Motorizzata "Sirte"`],name:`1`,designation:`70`,commander:`Gonzaga`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 70th Infantry Regiment`,`II Battaglione Fucilieri, 70° Reggimento di Fanteria Motorizzata "Sirte"`],name:`2`,designation:`70`,commander:`Macri`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`3rd Battalion, 70th Infantry Regiment`,`III Battaglione Fucilieri, 70° Reggimento di Fanteria Motorizzata "Sirte"`],name:`2`,designation:`70`,commander:`Zanussi`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`43rd Artillery Regiment`,`43° Reggimento Artiglieria "Sirte"`],name:`43`,designation:`Sirte`,commander:`Martorelli`,icon:`sirte`,
                                    pos:[2324,628],
                                    elements:[
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`1st Group, 43rd Artillery Regiment`,`I Gruppo, 43° Reggimento Artiglieria "Sirte"`],name:`1`,designation:`43`,commander:`Binacchi`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`2nd Group, 43rd Artillery Regiment`,`II Gruppo, 43° Reggimento Artiglieria "Sirte"`],name:`2`,designation:`43`,commander:`Tucci`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`3rd Group, 43rd Artillery Regiment`,`III Gruppo, 43° Reggimento Artiglieria "Sirte"`],name:`3`,designation:`43`,commander:`Biglino`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Machine Gun`],team:`Italian`,
                                    desc:[`61st Machine Gun Battalion`,`61º Battaglione Mitraglieri`],name:`61`,designation:``,commander:`Pcres`,icon:`sirte`,
                                    pos:[2326,519],
                                    elements:[
                                        {type:`Machine Gun`},
                                    ],
                                },
                            ],
                        },{
                            level:2,type:[`Tank`],team:`Italian`,
                            desc:[`4th Tank Infantry Regiment`,`4° Reggimento Carri`],name:`4`,designation:``,commander:`Aresca`,icon:``,
                            pos:[2451,841],
                            elements:[
                                {level:3,type:`Medium Tank`,team:`Italian`,desc:[`1st Tank Battalion`,`I Battaglione Carri M`],name:`1`,designation:``,commander:`Cascino`},
                                {level:3,type:`Terrible Tank`,team:`Italian`,desc:[`60th Tank Battalion`,`LX Battaglione Carri L`],name:`60`,designation:``,commander:`Trivioli`},
                                {level:3,type:`Terrible Tank`,team:`Italian`,desc:[`61st Tank Battalion`,`LXI Battaglione Carri L`],name:`61`,designation:``,commander:`Annibaldi`},
                                {level:3,type:`Small Artillery`,team:`Italian`,desc:[`148th Group, 25th Corps Artillery Regiment`,`CXLVIII Gruppo, 25° Reggimento Artiglieria di Corpo d'Armata`],name:`148`,designation:``,commander:`Petitti`},
                                {level:3,type:`Small Artillery`,team:`Italian`,desc:[`150th Group, 25th Corps Artillery Regiment`,`CL Gruppo, 25° Reggimento Artiglieria di Corpo d'Armata`],name:`150`,designation:``,commander:`Lazzarini`},
                            ],
                        },
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
                {name:`Bardia`,owner:0,type:1,pos:[2523,639]},
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
                    strength:{name:`Battalions`,num:[[13],[6,6]]},partition:[[1],[2],[0]],bonus:1,
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
                                    desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`Gaudecker`,icon:`15pz`,
                                    pos:[305,1502],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`German`,desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`Gaudecker`},
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
                },{
                    name:`Rommel's Second Offensive`,
                    strength:{name:`Battalions`,num:[[15],[8,12]]},partition:[[1],[2],[0]],bonus:1,
                    unit:[
                        {
                            level:0,type:[`Tank`],team:`German`,
                            desc:[`15th Panzer Division`,`15. Panzer-Division`],name:`15`,designation:``,commander:`von Värst`,icon:`15pz`,
                            pos:[380,1562],
                            elements:[
                                {
                                    level:2,type:[`Tank`],team:`German`,
                                    desc:[`8th Panzer Regiment`,`Panzer-Regiment 8`],name:`8`,designation:``,commander:`Cramer`,icon:`15pz`,
                                    pos:[460,1562],
                                    elements:[
                                        {level:3,type:`Reduced Medium Tank`,team:`German`,desc:[`1st Battalion, 8th Panzer Regiment`,`I./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:`Crohn`},
                                        {level:3,type:`Motorized Anti-Tank`,team:`German`,desc:[`33rd Anti-Tank Battalion`,`Panzerjäger-Abteilung 33`],name:`33`,designation:``,commander:`Beil`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`,`Motorized`],team:`German`,
                                    desc:[`33rd Artillery Regiment`,`Artillerie-Regiment (mot.) 33`],name:`33`,designation:``,commander:`Crasemann`,icon:`15pz`,
                                    pos:[530,1562],
                                    elements:[
                                        {level:3,type:`Motorized Concentrated Artillery`,team:`German`,desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:`Mayer`},
                                        {level:3,type:`Motorized Half Artillery`,team:`German`,desc:[`2nd "Half and Half" Battalion, 33rd Artillery Regiment`,`II./Artillerie-Regiment (mot.) 33 "Halb und Halb"`],name:`2`,designation:`33`,commander:`Mesmer`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`German`,
                                    desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`Héraucourt`,icon:`15pz`,
                                    pos:[600,1562],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`German`,desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`Héraucourt`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`German`,
                            desc:[`Special Purpose Divisional Command "Afrika"`,`Divisionskommando z.b.V. Afrika`],name:`A`,designation:`z.b.V.`,commander:`Veith`,icon:`90l`,
                            pos:[50,1422],
                            elements:[
                                {
                                    level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`115th Rifle Regiment`,`Schützen-Regiment 115`],name:`115`,designation:``,commander:`Menny`,icon:`90l`,
                                    pos:[130,1422],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`German`,desc:[`1st Battalion, 115th Rifle Regiment`,`I./Schützen-Regiment 115`],name:`1`,designation:`115`,commander:`von Grolmann`},
                                        {level:3,type:`Motorized Infantry`,team:`German`,desc:[`2nd Battalion, 115th Rifle Regiment`,`II./Schützen-Regiment 115`],name:`2`,designation:`115`,commander:`Göttman`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`],team:`German`,
                                    desc:[`3rd Battalion, 347th Infantry Regiment`,`III./Infanterie-Regiment 347`],name:`3`,designation:`347`,commander:`Panzenhagen`,icon:`90l`,
                                    pos:[200,1422],
                                    elements:[
                                        {level:3,type:`Semi-Motorized Infantry`,team:`German`,desc:[`3rd Battalion, 347th Infantry Regiment`,`III./Infanterie-Regiment 347`],name:`3`,designation:`347`,commander:`Panzenhagen`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`60th Infantry Division "Sabratha"`,`60ª Divisione di Fanteria Autotransportabile "Sabratha"`],name:`60`,designation:`Sabratha`,commander:`Soldarelli`,icon:`sabratha`,
                            pos:[50,1492],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`85th Infantry Regiment`,`85° Reggimento di Fanteria "Sabratha"`],name:`85`,designation:`Sabratha`,commander:`Grimaldi`,icon:`sabratha`,
                                    pos:[205,1492],
                                    elements:[
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`1st Battalion, 85th Infantry Regiment`,`I Battaglione Fucilieri, 85° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`1`,designation:`85`,commander:`Angelozzi`},
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`2nd Battalion, 85th Infantry Regiment`,`II Battaglione Fucilieri, 85° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`2`,designation:`85`,commander:`Morosini`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`86th Infantry Regiment`,`86° Reggimento di Fanteria "Sabratha"`],name:`86`,designation:`Sabratha`,commander:`Castrignanò`,icon:`sabratha`,
                                    pos:[280,1492],
                                    elements:[
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`1st Battalion, 86th Infantry Regiment`,`I Battaglione Fucilieri, 86° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`1`,designation:`86`,commander:`Velosa`},
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`2nd Battalion, 86th Infantry Regiment`,`II Battaglione Fucilieri, 86° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`2`,designation:`86`,commander:`Piana`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`Artillery Regrouping "Sabratha"`,`Raggruppamento Artiglieria "Sabratha"`],name:`RA`,designation:`Sabratha`,commander:`Ferrario`,icon:`sabratha`,
                                    pos:[130,1492],
                                    elements:[
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`283rd Group, 14th Frontier Guards Artillery Regiment`,`CCLXXXIII Gruppo, 14° Reggimento Artiglieria Guardia alla Frontiera`],name:`283`,designation:`Frontier\nGuard`,commander:`Parrella`},
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`284th Group, 14th Frontier Guards Artillery Regiment`,`CCLXXXIV Gruppo, 14° Reggimento Artiglieria Guardia alla Frontiera`],name:`284`,designation:`Frontier\nGuard`,commander:`Rocchi`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`102nd Infantry Division "Trento"`,`102ª Divisione di Fanteria Motorizzata "Trento"`],name:`102`,designation:`Trento`,commander:`Scotti`,icon:`trento`,
                            pos:[50,1562],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`61st Infantry Regiment`,`61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[205,1562],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 61st Infantry Regiment`,`I Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 61st Infantry Regiment`,`II Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`62nd Infantry Regiment`,`62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[280,1562],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 62nd Infantry Regiment`,`I Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 62nd Infantry Regiment`,`II Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`46th Artillery Regiment`,`46° Reggimento Artiglieria "Trento"`],name:`46`,designation:`Trento`,commander:`Grati`,icon:`trento`,
                                    pos:[130,1562],
                                    elements:[
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`1st Group, 46th Artillery Regiment`,`I Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`1`,designation:`46`,commander:`Giannimi`},
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`3rd Group, 46th Artillery Regiment`,`III Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`3`,designation:`46`,commander:`Salvo`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Tank`],team:`British`,
                            desc:[`7th Armored Division`,`7th Armoured Division`],name:`7`,designation:``,commander:`Messervy`,icon:`7a`,
                            pos:[1408,448],
                            elements:[
                                {
                                    level:1,type:[`Tank`],team:`British`,
                                    desc:[`4th Armored Brigade`,`4th Armoured Brigade`],name:`4`,designation:``,commander:`Gatehouse`,icon:`4ab`,
                                    pos:[908,778],
                                    elements:[
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`3rd Battalion, Royal Tank Regiment`,`3rd Royal Tank Regiment`],name:`3`,designation:`Royal Tank\nRegiment`,commander:`Keller`},
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`5th Battalion, Royal Tank Regiment`,`5th Royal Tank Regiment`],name:`5`,designation:`Royal Tank\nRegiment`,commander:`Carver`},
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`8th Battalion, Irish Hussars`,`8th Irish Hussars`],name:`8`,designation:`Irish\nHussars`,commander:`Drew`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Scots Guards`,name:`2`,designation:`Scots\nGuards`,commander:`Mayfield`},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`2nd Battalion, Royal Horse Artillery`,`2nd Regiment, Royal Horse Artillery`],name:`2`,designation:`Royal\nHorse`,commander:`Aikenhead`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Artillery`,`Motorized`],team:`British`,
                                    desc:`7th Support Group`,name:`7`,designation:``,commander:`Renton`,icon:`7sg`,
                                    pos:[711,1353],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:`de Salis`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Edwardes`},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`3rd Battalion, Royal Horse Artillery`,`3rd Regiment, Royal Horse Artillery`],name:`3`,designation:`Royal\nHorse`,commander:`Wilson`},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`60th (North Midland) Battalion, Royal Artillery`,`60th (North Midland) Field Regiment, Royal Artillery`],name:`60`,designation:`North\nMidland`,commander:`Hallifax`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`British`,
                                    desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`,icon:`7a`,
                                    pos:[2060,602],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`British`,desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:`4th Indian Division`,name:`4`,designation:``,commander:`Tuker`,icon:`4id`,
                            pos:[520,494],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`11th Indian Infantry Brigade`,name:`11`,designation:``,commander:`Anderson`,icon:`4id`,
                                    pos:[609,513],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Queen's Own Cameron Highlanders`,name:`2`,designation:`Cameron\nHighlanders`,commander:`Duncan`},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`1st Battalion, 6th Rajputana Rifles`,name:`1/6`,designation:`Rajputana`,commander:`Quayle`},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`2nd Battalion, 5th Mahratta Light Infantry`,name:`2/5`,designation:`Mahratta`,commander:`Doyle`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`200th Guards Brigade`,name:`200`,designation:`Guards`,commander:`Marriott`,icon:``,
                                    pos:[313,1346],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`3rd Battalion, Coldstream Guards`,name:`3`,designation:`Coldstream\nGuards`,commander:`Moubray`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`9th Battalion, Rifle Brigade (Tower Hamlets Rifles)`,name:`9`,designation:`Rifle\nBrigade`,commander:`Purdon`},
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],reserve:[
            ],
        },{
            name:[`Cyrenaica`,`Half`],
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
                {name:`Bardia`,owner:0,type:1,pos:[2523,639]},
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
                    name:`Stand at Gazala`,
                    strength:{name:`Battalions`,num:[[20],[8,10]]},partition:[[0],[1],[2]],bonus:0,
                    unit:[
                        {
                            level:0,type:[`Tank`],team:`German`,
                            desc:[`15th Panzer Division`,`15. Panzer-Division`],name:`15`,designation:``,commander:`von Värst`,icon:`15pz`,
                            pos:[1743,753],
                            elements:[
                                {
                                    level:2,type:[`Tank`],team:`German`,
                                    desc:[`8th Panzer Regiment`,`Panzer-Regiment 8`],name:`8`,designation:``,commander:`Cramer`,icon:`15pz`,
                                    pos:[1811,814],
                                    elements:[
                                        {level:3,type:`Reduced Medium Tank`,team:`German`,desc:[`1st Battalion, 8th Panzer Regiment`,`I./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:`Crohn`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`15th Rifle Brigade`,`Schützen-Brigade 15`],name:`15`,designation:``,commander:`Menny`,icon:`15pz`,
                                    pos:[1785,518],
                                    elements:[
                                        {
                                            level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                            desc:[`115th Rifle Regiment`,`Schützen-Regiment 115`],name:`115`,designation:``,commander:` ̶Z̶i̶n̶c̶k̶e̶`,icon:`15pz`,
                                            pos:[1866,541],
                                            elements:[
                                                {level:3,type:`Motorized Infantry`,team:`German`,desc:[`2nd Battalion, 115th Rifle Regiment`,`II./Schützen-Regiment 115`],name:`2`,designation:`115`,commander:`Göttman`},
                                            ],
                                        },{
                                            level:2,type:[`Artillery`,`Motorized`],team:`German`,
                                            desc:[`33rd Artillery Regiment`,`Artillerie-Regiment (mot.) 33`],name:`33`,designation:``,commander:`Crasemann`,icon:`15pz`,
                                            pos:[1708,497],
                                            elements:[
                                                {level:3,type:`Motorized Concentrated Artillery`,team:`German`,desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:`Mayer`},
                                                {level:3,type:`Motorized Heavy Artillery`,team:`German`,desc:[`3rd Battalion, 33rd Artillery Regiment`,`III./Artillerie-Regiment (mot.) 33`],name:`3`,designation:`33`,commander:`Bickel`},
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`200th Special Purpose Regimental Staff`,`Regimentsstab z.b.V. 200`],name:`200`,designation:`z.b.V.`,commander:`Geißler`,icon:`15pz`,
                                    pos:[1845,742],
                                    elements:[
                                        {level:3,type:`Motorized Machine Gun`,team:`German`,desc:[`2nd Machine Gun Battalion`,`2. Maschinengewehr-Bataillon`],name:`2`,designation:``,commander:`Warrelmann`},
                                        {level:3,type:`Motorcycle Infantry`,team:`German`,desc:[`15th Motorcycle Battalion`,`Kradschützen-Bataillon 15`],name:`15`,designation:``,commander:`von Debschütz`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`German`,
                                    desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`Héraucourt`,icon:`15pz`,
                                    pos:[1808,940],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`German`,desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`Héraucourt`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`German`,
                            desc:[`Special Purpose Divisional Command "Afrika"`,`Divisionskommando z.b.V. Afrika`],name:`A`,designation:`z.b.V.`,commander:` ̶S̶ü̶m̶m̶e̶r̶m̶a̶n̶n̶`,icon:`90l`,
                            pos:[1812,462],
                            elements:[
                                {
                                    level:3,type:[`Infantry`],team:`German`,
                                    desc:[`3rd Battalion, 347th Infantry Regiment`,`III./Infanterie-Regiment 347`],name:`3`,designation:`347`,commander:`Panzenhagen`,icon:`90l`,
                                    pos:[1887,477],
                                    elements:[
                                        {level:3,type:`Semi-Motorized Infantry`,team:`German`,desc:[`3rd Battalion, 347th Infantry Regiment`,`III./Infanterie-Regiment 347`],name:`3`,designation:`347`,commander:`Panzenhagen`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`102nd Infantry Division "Trento"`,`102ª Divisione di Fanteria Motorizzata "Trento"`],name:`102`,designation:`Trento`,commander:`Stampioni`,icon:`trento`,
                            pos:[1725,628],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`61st Infantry Regiment`,`61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[1817,602],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 61st Infantry Regiment`,`I Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 61st Infantry Regiment`,`II Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`62nd Infantry Regiment`,`62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[1800,678],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 62nd Infantry Regiment`,`I Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 62nd Infantry Regiment`,`II Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`7th Bersaglieri Regiment`,`7° Reggimento Bersaglieri`],name:`7`,designation:`Bersaglieri`,commander:`Scirocco`,icon:`trento`,
                                    pos:[1724,838],
                                    elements:[
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`10th Bersaglieri Battalion`,`10° Battaglione Bersaglieri`],name:`10`,designation:`Bersaglieri`,commander:`Adolfato`},
                                        {level:3,type:`Motorized Machine Gun Bersaglieri`,team:`Italian`,desc:[`11th Bersaglieri Battalion`,`11° Battaglione Bersaglieri`],name:`11`,designation:`Bersaglieri`,commander:`Straziota`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`46th Artillery Regiment`,`46° Reggimento Artiglieria "Trento"`],name:`46`,designation:`Trento`,commander:`Grati`,icon:`trento`,
                                    pos:[1641,610],
                                    elements:[
                                        {level:3,type:`Small Faster Artillery`,team:`Italian`,desc:[`1st Group, 46th Artillery Regiment`,`I Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`1`,designation:`46`,commander:`Giannimi`},
                                        {level:3,type:`Small Faster Artillery`,team:`Italian`,desc:[`3rd Group, 46th Artillery Regiment`,`III Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`3`,designation:`46`,commander:`Salvo`},
                                    ],
                                },
                            ],
                        },{
                            level:2,type:[`Artillery`,`Motorized`],team:`Italian`,
                            desc:[`Flying Batteries Regrouping`,`Raggruppamento Batterie Volanti`],name:`RBV`,designation:``,commander:`Nicolardi`,icon:``,
                            pos:[1654,722],
                            elements:[
                                {level:3,type:`Motorized Small Artillery`,team:`Italian`,desc:[`1st Group, Flying Batteries Regrouping`,`I Gruppo, Raggruppamento Batterie Volanti`],name:`1`,designation:`RBV`,commander:`da Bino`},
                                {level:3,type:`Motorized Small Artillery`,team:`Italian`,desc:[`3rd Group, Flying Batteries Regrouping`,`III Gruppo, Raggruppamento Batterie Volanti`],name:`3`,designation:`RBV`,commander:`Abeille`},
                            ],
                        },{
                            level:0,type:[`Tank`],team:`British`,
                            desc:[`7th Armored Division`,`7th Armoured Division`],name:`7`,designation:``,commander:`Gott`,icon:`7a`,
                            pos:[2119,761],
                            elements:[
                                {
                                    level:1,type:[`Tank`],team:`British`,
                                    desc:[`4th Armored Brigade`,`4th Armoured Brigade`],name:`4`,designation:``,commander:`Gatehouse`,icon:`4ab`,
                                    pos:[2017,846],
                                    elements:[
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`5th Battalion, Royal Tank Regiment`,`5th Royal Tank Regiment`],name:`5`,designation:`Royal Tank\nRegiment`,commander:`Carver`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Scots Guards`,name:`2`,designation:`Scots\nGuards`,commander:`Mayfield`},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`2nd Battalion, Royal Horse Artillery`,`2nd Regiment, Royal Horse Artillery`],name:`2`,designation:`Royal\nHorse`,commander:`Aikenhead`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Artillery`,`Motorized`],team:`British`,
                                    desc:`7th Support Group`,name:`7`,designation:``,commander:`Campbelsl`,icon:`7sg`,
                                    pos:[1979,745],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:`de Salis`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Renton`},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`3rd Battalion, Royal Horse Artillery`,`3rd Regiment, Royal Horse Artillery`],name:`3`,designation:`Royal\nHorse`,commander:`Wilson`},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`60th (North Midland) Battalion, Royal Artillery`,`60th (North Midland) Field Regiment, Royal Artillery`],name:`60`,designation:`North\nMidland`,commander:`Hallifax`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`British`,
                                    desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`,icon:`7a`,
                                    pos:[2016,1054],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`British`,desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:`4th Indian Division`,name:`4`,designation:``,commander:`Messervy`,icon:`4id`,
                            pos:[2060,602],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`11th Indian Infantry Brigade`,name:`11`,designation:``,commander:`Anderson`,icon:`4id`,
                                    pos:[1945,584],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Queen's Own Cameron Highlanders`,name:`2`,designation:`Cameron\nHighlanders`,commander:`Duncan`},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`1st Battalion, 6th Rajputana Rifles`,name:`1/6`,designation:`Rajputana`,commander:`Quayle`},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`2nd Battalion, 5th Mahratta Light Infantry`,name:`2/5`,designation:`Mahratta`,commander:`Doyle`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`22nd Guards Brigade`,name:`22`,designation:`Guards`,commander:`Marriott`,icon:``,
                                    pos:[1920,664],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`3rd Battalion, Coldstream Guards`,name:`3`,designation:`Coldstream\nGuards`,commander:`Moubray`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`9th Battalion, Rifle Brigade (Tower Hamlets Rifles)`,name:`9`,designation:`Rifle\nBrigade`,commander:`Purdon`},
                                    ],
                                },
                            ],
                        },{
                            level:1,type:[`Infantry`],team:`Polish`,
                            desc:[`Polish Independent Carpathian Brigade`,`Samodzielna Brygada Strzelców Karpackich`],name:`C`,designation:``,commander:`Kopański`,icon:`70`,
                            pos:[1985,492],
                            elements:[
                                {level:3,type:`Infantry`,team:`Polish`,desc:[`1st Carpathian Rifle Battalion`,`1 Batalion Strzelców Karpackich`],name:`1`,designation:``,commander:`Kopeć`},
                                {level:3,type:`Infantry`,team:`Polish`,desc:[`2nd Carpathian Rifle Battalion`,`2 Batalion Strzelców Karpackich`],name:`2`,designation:``,commander:`Brzósko`},
                                {level:3,type:`Infantry`,team:`Polish`,desc:[`3rd Carpathian Rifle Battalion`,`3 Batalion Strzelców Karpackich`],name:`3`,designation:``,commander:`Sokol`},
                                {level:3,type:`Infantry`,team:`Czechoslovak`,desc:[`11th Czechoslovak Infantry Battalion`,`11. Československý Pěší Prapor — Východní`],name:`11`,designation:``,commander:`Klapálek`},
                                {level:3,type:`Machine Gun`,team:`Polish`,desc:[`Carpathian "Uhlans" Machine Gun Battalion`,`Pułk Ułanów Karpackich`],name:`U`,designation:``,commander:`Bobiński`},
                                {level:3,type:`Artillery`,team:`Polish`,desc:[`Carpathian Artillery Regiment`,`Karpacki Pułk Artylerii`],name:`C`,designation:``,commander:`Gliwicz`},
                                {level:3,type:`Reinforced Infantry`,team:`Australian`,desc:[`13th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/13th Australian Infantry Battalion`],name:`2/13`,designation:``,commander:`Burrows`},
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
                    strength:{name:`Companies`,num:[[32],[0,64]]},partition:[[0],[2]],bonus:2,
                    unit:[
                        {
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`61st Infantry Division "Sirte"`,`61ª Divisione di Fanteria Autotransportabile "Sirte"`],name:`61`,designation:`Sirte`,commander:`Della Mura`,icon:`sirte`,
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
                                                    level:4,type:[`Infantry`,`Heavy`],team:`Italian`,
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
                                                    level:4,type:[`Infantry`,`Heavy`],team:`Italian`,
                                                    desc:[`8th Company, 69th Infantry Regiment`,`8° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`8`,designation:`69`,commander:``,icon:`sirte`,
                                                    pos:[1093,781],
                                                    elements:[
                                                        {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`8th Company, 69th Infantry Regiment`,`8° Compagnia Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`8`,designation:`69`,commander:``},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`3rd Battalion, 69th Infantry Regiment`,`III Battaglione Fucilieri, 69° Reggimento di Fanteria Motorizzata "Ancona"`],name:`3`,designation:`69`,commander:`Silvagni`,icon:`sirte`,
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
                                                    level:4,type:[`Infantry`,`Heavy`],team:`Italian`,
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
                                                {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`1st Battery, 43rd Artillery Regiment`,`1° Batteria, 43° Reggimento Artiglieria "Sirte"`],name:`1`,designation:`43`,commander:``},
                                                {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 43rd Artillery Regiment`,`2° Batteria, 43° Reggimento Artiglieria "Sirte"`],name:`2`,designation:`43`,commander:``},
                                                {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 43rd Artillery Regiment`,`3° Batteria, 43° Reggimento Artiglieria "Sirte"`],name:`3`,designation:`43`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`],team:`Italian`,
                                            desc:[`2nd Group, 43rd Artillery Regiment`,`II Gruppo, 43° Reggimento Artiglieria "Sirte"`],name:`2`,designation:`43`,commander:`Tucci`,icon:`sirte`,
                                            pos:[1168,760],
                                            elements:[
                                                {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`4th Battery, 43rd Artillery Regiment`,`4° Batteria, 43° Reggimento Artiglieria "Sirte"`],name:`4`,designation:`43`,commander:``},
                                                {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`5th Battery, 43rd Artillery Regiment`,`5 Batteria, 43° Reggimento Artiglieria "Sirte"`],name:`5`,designation:`43`,commander:``},
                                                {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`6th Battery, 43rd Artillery Regiment`,`6° Batteria, 43° Reggimento Artiglieria "Sirte"`],name:`6`,designation:`43`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`],team:`Italian`,
                                            desc:[`3rd Group, 43rd Artillery Regiment`,`III Gruppo, 43° Reggimento Artiglieria "Sirte"`],name:`3`,designation:`43`,commander:`Biglino`,icon:`sirte`,
                                            pos:[1291,743],
                                            elements:[
                                                {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`7th Battery, 43rd Artillery Regiment`,`7° Batteria, 43° Reggimento Artiglieria "Sirte"`],name:`7`,designation:`43`,commander:``},
                                                {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`8th Battery, 43rd Artillery Regiment`,`8° Batteria, 43° Reggimento Artiglieria "Sirte"`],name:`8`,designation:`43`,commander:``},
                                                {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`9th Battery, 43rd Artillery Regiment`,`9° Batteria, 43° Reggimento Artiglieria "Sirte"`],name:`9`,designation:`43`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Machine Gun`],team:`Italian`,
                                    desc:[`61st Machine Gun Battalion`,`61º Battaglione Mitraglieri`],name:`61`,designation:``,commander:`Pcres`,icon:`sirte`,
                                    pos:[1217,344],
                                    elements:[
                                        {level:4,type:`Machine Gun Company`,team:`Italian`,desc:[`3rd Company, 61st Machine Gun Battalion`,`3° Compagnia, 61º Battaglione Mitraglieri`],name:`3`,designation:`61`,commander:``},
                                        {level:4,type:`Heavy Machine Gun Company`,team:`Italian`,desc:[`4th Company, 61st Machine Gun Battalion`,`4° Compagnia, 61º Battaglione Mitraglieri`],name:`4`,designation:`61`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Infantry`,`Motorcycle`],team:`Italian`,
                                    desc:[`61st Bersaglieri Company`,`61° Compagnia Bersaglieri`],name:`61`,designation:`Bersaglieri`,commander:`Bonfanti`,icon:`sirte`,
                                    pos:[1427,570],
                                    elements:[
                                        {level:4,type:`Motorcycle Bersaglieri Company`,team:`Italian`,desc:[`61st Bersaglieri Company`,`61° Compagnia Bersaglieri`],name:`61`,designation:`Bersaglieri`,commander:`Bonfanti`},
                                    ],
                                },{
                                    level:4,type:[`Anti-Tank`],team:`Italian`,
                                    desc:[`61st Anti-Tank Company`,`61° Compagnia Anticarro`],name:`61`,designation:``,commander:``,icon:`sirte`,
                                    pos:[1259,621],
                                    elements:[
                                        {level:4,type:`Anti-Tank Company`,team:`Italian`,desc:[`61st Anti-Tank Company`,`61° Compagnia Anticarro`],name:`61`,designation:``,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Infantry`],team:`Blackshirt`,
                            desc:[`140th Blackshirt Battalion "Aquilia"`,`CXL Coorte CC.NN. "Aquilia"`],name:`140`,designation:`Aquilia`,commander:`Martorana`,icon:`2ccnn`,
                            pos:[1054,364],
                            elements:[
                                {level:4,type:`Infantry Company`,team:`Blackshirt`,desc:[`1st Company, 140th Blackshirt Battalion "Aquilia"`,`1° Centuria d'Assalto, CXL Coorte CC.NN. "Aquilia"`],name:`1`,designation:`Aquilia`,commander:``},
                                {level:4,type:`Infantry Company`,team:`Blackshirt`,desc:[`2nd Company, 140th Blackshirt Battalion "Aquilia"`,`2° Centuria d'Assalto, CXL Coorte CC.NN. "Aquilia"`],name:`2`,designation:`Aquilia`,commander:``},
                                {level:4,type:`Infantry Company`,team:`Blackshirt`,desc:[`3rd Company, 140th Blackshirt Battalion "Aquilia"`,`3° Centuria d'Assalto, CXL Coorte CC.NN. "Aquilia"`],name:`3`,designation:`Aquilia`,commander:``},
                                {level:4,type:`Mortar Company`,team:`Italian`,desc:[`85th Mortar Company`,`85° Compagnia Mortaio`],name:`85`,designation:``,commander:``,icon:`sabratha`},
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
                                    desc:[`86th Mortar Company`,`86° Compagnia Mortaio`],name:`86`,designation:``,commander:``,icon:`sabratha`,
                                    pos:[660,545],
                                    elements:[
                                        {level:4,type:`Mortar Company`,team:`Italian`,desc:[`86th Mortar Company`,`86° Compagnia Mortaio`],name:`86`,designation:``,commander:``},
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
                            desc:[`22nd Bersaglieri Company`,`22° Compagnia Bersaglieri`],name:`22`,designation:`Bersaglieri`,commander:`Alessi`,icon:``,
                            pos:[1142,646],
                            elements:[
                                {level:4,type:`Motorcycle Bersaglieri Company`,team:`Italian`,desc:[`22nd Bersaglieri Company`,`22° Compagnia Bersaglieri`],name:`22`,designation:`Bersaglieri`,commander:`Alessi`},
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
                                        {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`1st Battery, 17th Artillery Group`,`1° Batteria, XVII Gruppo Artiglieria`],name:`1`,designation:`17`,commander:``},
                                        {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 17th Artillery Group`,`2° Batteria, XVII Gruppo Artiglieria`],name:`2`,designation:`17`,commander:``},
                                        {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 17th Artillery Group`,`3° Batteria, XVII Gruppo Artiglieria`],name:`3`,designation:`17`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Artillery`],team:`Italian`,
                                    desc:[`35th Group, 10th Corps Artillery Regiment`,`XXV Gruppo, 10° Reggimento Artiglieria di Corpo d'Armata`],name:`25`,designation:``,commander:`Pirisi`,icon:``,
                                    pos:[1650,540],
                                    elements:[
                                        {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`1st Battery, 25th Artillery Group`,`1° Batteria, XXV Gruppo Artiglieria`],name:`1`,designation:`25`,commander:``},
                                        {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 25th Artillery Group`,`2° Batteria, XXV Gruppo Artiglieria`],name:`2`,designation:`25`,commander:``},
                                        {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 25th Artillery Group`,`3° Batteria, XXV Gruppo Artiglieria`],name:`3`,designation:`25`,commander:``},
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
                                        {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`1st Battery, 42nd Artillery Group`,`1° Batteria, XLII Gruppo Artiglieria`],name:`1`,designation:`42`,commander:``},
                                        {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 42nd Artillery Group`,`2° Batteria, XLII Gruppo Artiglieria`],name:`2`,designation:`42`,commander:``},
                                        {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 42nd Artillery Group`,`3° Batteria, XLII Gruppo Artiglieria`],name:`3`,designation:`42`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Artillery`],team:`Italian`,
                                    desc:[`43rd Group, 22nd Corps Artillery Regiment`,`XLIII Gruppo, 22° Reggimento Artiglieria di Corpo d'Armata`],name:`43`,designation:``,commander:`Bombagli`,icon:``,
                                    pos:[720,652],
                                    elements:[
                                        {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`1st Battery, 43rd Artillery Group`,`1° Batteria, XLIII Gruppo Artiglieria`],name:`1`,designation:`43`,commander:``},
                                        {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 43rd Artillery Group`,`2° Batteria, XLIII Gruppo Artiglieria`],name:`2`,designation:`43`,commander:``},
                                        {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 43rd Artillery Group`,`3° Batteria, XLIII Gruppo Artiglieria`],name:`3`,designation:`43`,commander:``},
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
                                        {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`1st Battery, 105th Artillery Group`,`1° Batteria, CV Gruppo Artiglieria`],name:`1`,designation:`105`,commander:``},
                                        {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 105th Artillery Group`,`2° Batteria, CV Gruppo Artiglieria`],name:`2`,designation:`105`,commander:``},
                                        {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 105th Artillery Group`,`3° Batteria, CV Gruppo Artiglieria`],name:`3`,designation:`105`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Artillery`],team:`Italian`,
                                    desc:[`130th Group, 25th Corps Artillery Regiment`,`CXXX Gruppo, 25° Reggimento Artiglieria di Corpo d'Armata`],name:`130`,designation:``,commander:`Biondi-Morra`,icon:``,
                                    pos:[1422,649],
                                    elements:[
                                        {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`1st Battery, 130th Artillery Group`,`1° Batteria, CXXX Gruppo Artiglieria`],name:`1`,designation:`130`,commander:``},
                                        {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 130th Artillery Group`,`2° Batteria, CXXX Gruppo Artiglieria`],name:`2`,designation:`130`,commander:``},
                                        {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 130th Artillery Group`,`3° Batteria, CXXX Gruppo Artiglieria`],name:`3`,designation:`130`,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Artillery`],team:`Italian`,
                            desc:[`3rd Group, 12th Artillery Regiment`,`III Gruppo, 12° Reggimento Artiglieria "Sila"`],name:`3`,designation:`12`,commander:`Aliberti`,icon:`savona`,
                            pos:[1455,726],
                            elements:[
                                {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`7th Battery, 12th Artillery Regiment`,`7° Batteria, 12° Reggimento Artiglieria "Sila"`],name:`7`,designation:`12`,commander:``},
                                {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`8th Battery, 12th Artillery Regiment`,`8° Batteria, 12° Reggimento Artiglieria "Sila"`],name:`8`,designation:`12`,commander:``},
                                {level:4,type:`Ruined Artillery Battery`,team:`Italian`,desc:[`9th Battery, 12th Artillery Regiment`,`9° Batteria, 12° Reggimento Artiglieria "Sila"`],name:`9`,designation:`12`,commander:``},
                            ],
                        },{
                            level:4,type:[`Anti-Tank`],team:`Italian`,
                            desc:[`60th Anti-Tank Company`,`60° Compagnia Anticarro`],name:`60`,designation:``,commander:``,icon:`sabratha`,
                            pos:[901,717],
                            elements:[
                                {level:4,type:`Anti-Tank Company`,team:`Italian`,desc:[`60th Anti-Tank Company`,`60° Compagnia Anticarro`],name:`60`,designation:``},
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
                                            pos:[2073,1046],
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
                                                    desc:`S Company, 2nd Battalion, Rifle Brigade`,name:`S`,designation:`2 RB`,commander:``,icon:`7sg`,
                                                    pos:[1915,486],
                                                    elements:[
                                                        {level:4,type:`Motorized Heavy Infantry Company`,team:`British`,desc:`S Company, 2nd Battalion, Rifle Brigade`,name:`S`,designation:`2 RB`,commander:``},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Artillery`,`Motorized`],team:`British`,
                                            desc:[`3rd Battalion, Royal Horse Artillery`,`3rd Regiment, Royal Horse Artillery`],name:`3`,designation:`Royal\nHorse`,commander:`Wilson`,icon:`7sg`,
                                            pos:[212,488],
                                            elements:[
                                                {
                                                    level:4,type:[`Artillery`,`Motorized`],team:`British`,
                                                    desc:[`A Battery, 3rd Battalion, Royal Horse Artillery`,`A Battery, 3rd Regiment, Royal Horse Artillery`],name:`A`,designation:`3 RHA`,commander:``,icon:`7sg`,
                                                    pos:[315,426],
                                                    elements:[
                                                        {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`A Battery, 3rd Battalion, Royal Horse Artillery`,`A Battery, 3rd Regiment, Royal Horse Artillery`],name:`A`,designation:`3 RHA`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Artillery`,`Motorized`],team:`British`,
                                                    desc:[`B Battery, 3rd Battalion, Royal Horse Artillery`,`B Battery, 3rd Regiment, Royal Horse Artillery`],name:`B`,designation:`3 RHA`,commander:``,icon:`7sg`,
                                                    pos:[620,957],
                                                    elements:[
                                                        {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`B Battery, 3rd Battalion, Royal Horse Artillery`,`B Battery, 3rd Regiment, Royal Horse Artillery`],name:`B`,designation:`3 RHA`,commander:``},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Artillery`,`Motorized`],team:`British`,
                                            desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:`Royal\nHorse`,commander:`Currie`,icon:`7sg`,
                                            pos:[1511,1234],
                                            elements:[
                                                {
                                                    level:4,type:[`Artillery`,`Motorized`],team:`British`,
                                                    desc:[`A Battery, 4th Battalion, Royal Horse Artillery`,`A Battery, 4th Regiment, Royal Horse Artillery`],name:`A`,designation:`4 RHA`,commander:``,icon:`7sg`,
                                                    pos:[1355,1011],
                                                    elements:[
                                                        {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`A Battery, 4th Battalion, Royal Horse Artillery`,`A Battery, 4th Regiment, Royal Horse Artillery`],name:`A`,designation:`4 RHA`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Artillery`,`Motorized`],team:`British`,
                                                    desc:[`B Battery, 4th Battalion, Royal Horse Artillery`,`B Battery, 4th Regiment, Royal Horse Artillery`],name:`B`,designation:`4 RHA`,commander:``,icon:`7sg`,
                                                    pos:[2000,676],
                                                    elements:[
                                                        {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`B Battery, 4th Battalion, Royal Horse Artillery`,`B Battery, 4th Regiment, Royal Horse Artillery`],name:`B`,designation:`4 RHA`,commander:``},
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Heavy`],team:`British`,
                                    desc:[`7th Battalion, Royal Tank Regiment`,`7th Royal Tank Regiment`],name:`7`,designation:`Royal Tank\nRegiment`,commander:`Groves`,icon:`7a`,
                                    pos:[820,1017],
                                    elements:[
                                        {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`A Squadron, 7th Battalion, Royal Tank Regiment`,`A Squadron, 7th Royal Tank Regiment`],name:`A`,designation:`7 RTR`,commander:``},
                                        {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`B Squadron, 7th Battalion, Royal Tank Regiment`,`B Squadron, 7th Royal Tank Regiment`],name:`B`,designation:`7 RTR`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Engineer`,`Motorized`],team:`British`,
                                    desc:[`2nd (Cheshire) Field Company, Royal Engineers`,`2nd (Cheshire) Field Squadron, Royal Engineers`],name:`2`,designation:`Cheshire`,commander:``,icon:`7a`,
                                    pos:[960,996],
                                    elements:[
                                        {type:`Motorized Engineer Company`},
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
                    strength:{name:`Companies`,num:[[24],[16,20]]},partition:[[1],[2],[0]],bonus:0,
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
                                    desc:[`A Battery, 104th Battalion, Royal Horse Artillery`,`A Battery, 104th Regiment, Royal Horse Artillery`],name:`A`,designation:`104 RHA`,commander:``,icon:``,
                                    pos:[999,555],
                                    elements:[
                                        {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`A Battery, 104th Battalion, Royal Horse Artillery`,`A Battery, 104th Regiment, Royal Horse Artillery`],name:`A`,designation:`104 RHA`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Artillery`,`Motorized`],team:`British`,
                                    desc:[`B Battery, 104th Battalion, Royal Horse Artillery`,`B Battery, 104th Regiment, Royal Horse Artillery`],name:`B`,designation:`104 RHA`,commander:``,icon:``,
                                    pos:[1343,370],
                                    elements:[
                                        {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`B Battery, 104th Battalion, Royal Horse Artillery`,`B Battery, 104th Regiment, Royal Horse Artillery`],name:`B`,designation:`104 RHA`,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:4,type:[`Artillery`],team:`Australian`,
                            desc:`"Bush" Artillery" "Mr. Clarke’s Guns"`,name:`Bush`,designation:``,commander:`Clarke`,icon:``,
                            pos:[716,475],
                            elements:[
                                {type:`Small Artillery Battery`},
                            ],
                        },{
                            level:3,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:[`18th Cavalry Battalion "King Edward VII's Own"`,`18th King Edward VII's Own Cavalry`],name:`18`,designation:`King Edward\nVII's Own`,commander:``,icon:``,
                            pos:[777,381],
                            elements:[
                                {
                                    level:4,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:[`A Squadron, 18th Cavalry Battalion "King Edward VII's Own"`,`A Squadron, 18th King Edward VII's Own Cavalry`],name:`A`,designation:`18 KEO`,commander:``,icon:``,
                                    pos:[1054,364],
                                    elements:[
                                        {level:4,type:`Weaker Motorized Infantry Company`,team:`Indian`,desc:[`A Squadron, 18th Cavalry Battalion "King Edward VII's Own"`,`A Squadron, 18th King Edward VII's Own Cavalry`],name:`A`,designation:`18 KEO`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:[`B Squadron, 18th Cavalry Battalion "King Edward VII's Own"`,`B Squadron, 18th King Edward VII's Own Cavalry`],name:`B`,designation:`18 KEO`,commander:``,icon:``,
                                    pos:[828,266],
                                    elements:[
                                        {level:4,type:`Weaker Motorized Infantry Company`,team:`Indian`,desc:[`B Squadron, 18th Cavalry Battalion "King Edward VII's Own"`,`B Squadron, 18th King Edward VII's Own Cavalry`],name:`B`,designation:`18 KEO`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:[`C Squadron, 18th Cavalry Battalion "King Edward VII's Own"`,`C Squadron, 18th King Edward VII's Own Cavalry`],name:`C`,designation:`18 KEO`,commander:``,icon:``,
                                    pos:[588,290],
                                    elements:[
                                        {level:4,type:`Weaker Motorized Infantry Company`,team:`Indian`,desc:[`C Squadron, 18th Cavalry Battalion "King Edward VII's Own"`,`C Squadron, 18th King Edward VII's Own Cavalry`],name:`C`,designation:`18 KEO`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:[`D Squadron, 18th Cavalry Battalion "King Edward VII's Own"`,`C Squadron, 18th King Edward VII's Own Cavalry`],name:`C`,designation:`18 KEO`,commander:``,icon:``,
                                    pos:[604,404],
                                    elements:[
                                        {level:4,type:`Weaker Motorized Infantry Company`,team:`Indian`,desc:[`D Squadron, 18th Cavalry Battalion "King Edward VII's Own"`,`D Squadron, 18th King Edward VII's Own Cavalry`],name:`D`,designation:`18 KEO`,commander:``},
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
                            pos:[2159,996],
                            elements:[
                                {
                                    level:3,type:[`Tank`],team:`German`,
                                    desc:[`1st Battalion, 8th Panzer Regiment`,`I./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:`Crohn`,icon:`15pz`,
                                    pos:[1986,896],
                                    elements:[
                                        {level:4,type:`Medium Tank Company`,team:`German`,desc:[`1st Company, 8th Panzer Regiment`,`1./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:``},
                                        {level:4,type:`Medium Tank Company`,team:`German`,desc:[`2nd Company, 8th Panzer Regiment`,`2./Panzer-Regiment 8`],name:`2`,designation:`8`,commander:``},
                                        {level:4,type:`Armed Medium Tank Company`,team:`German`,desc:[`3rd Company, 8th Panzer Regiment`,`3./Panzer-Regiment 8`],name:`3`,designation:`8`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`,`Machine Gun`],team:`German`,
                                    desc:[`2nd Machine Gun Battalion`,`2. Maschinengewehr-Bataillon`],name:`2`,designation:``,commander:`Warrelmann`,icon:`15pz`,
                                    pos:[2073,846],
                                    elements:[
                                        {level:4,type:`Motorized Machine Gun Company`,team:`German`,desc:[`1st Company, 2nd Machine Gun Battalion`,`1./Maschinengewehr-Bataillon 2`],name:`1`,designation:`2`,commander:``},
                                        {level:4,type:`Motorized Machine Gun Company`,team:`German`,desc:[`2nd Company, 2nd Machine Gun Battalion`,`2./Maschinengewehr-Bataillon 2`],name:`2`,designation:`2`,commander:``},
                                        {level:4,type:`Motorized Machine Gun Company`,team:`German`,desc:[`3rd Company, 2nd Machine Gun Battalion`,`3./Maschinengewehr-Bataillon 2`],name:`3`,designation:`2`,commander:``},
                                        {level:4,type:`Motorized Heavy Machine Gun Company`,team:`German`,desc:[`4th (Heavy) Company, 2nd Machine Gun Battalion`,`4./Maschinengewehr-Bataillon 2`],name:`4`,designation:`2`,commander:``},
                                        {level:4,type:`Motorized Engineer Company`,team:`German`,desc:[`2nd Company, 33rd Engineer Battalion`,`2./Panzer-Pionier-Bataillon 33`],name:`2`,designation:`33`,commander:``},
                                        {level:4,type:`Motorized Engineer Company`,team:`German`,desc:[`2nd Company, 39th Engineer Battalion`,`2./Panzer-Pionier-Bataillon 39`],name:`2`,designation:`39`,commander:`Streitz`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorcycle`],team:`German`,
                                    desc:[`15th Motorcycle Battalion`,`Kradschützen-Bataillon 15`],name:`15`,designation:``,commander:`Ehle`,icon:`15pz`,
                                    pos:[1986,996],
                                    elements:[
                                        {level:4,type:`Motorcycle Infantry Company`,team:`German`,desc:[`1st Company, 15th Motorcycle Battalion`,`1./Kradschützen-Bataillon 15`],name:`1`,designation:`15`,commander:``},
                                        {level:4,type:`Motorcycle Infantry Company`,team:`German`,desc:[`2nd Company, 15th Motorcycle Battalion`,`2./Kradschützen-Bataillon 15`],name:`2`,designation:`15`,commander:``},
                                        {level:4,type:`Motorcycle Infantry Company`,team:`German`,desc:[`3rd Company, 15th Motorcycle Battalion`,`3./Kradschützen-Bataillon 15`],name:`3`,designation:`15`,commander:``},
                                        {level:4,type:`Motorcycle Machine Gun Company`,team:`German`,desc:[`4th Company, 15th Motorcycle Battalion`,`4./Kradschützen-Bataillon 15`],name:`4`,designation:`15`,commander:`Paulewicz`},
                                        {level:4,type:`Motorcycle Heavy Infantry Company`,team:`German`,desc:[`5th Company, 15th Motorcycle Battalion`,`5./Kradschützen-Bataillon 15`],name:`5`,designation:`15`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Artillery`,`Motorized`],team:`German`,
                                    desc:[`2nd Battalion, 33rd Artillery Regiment`,`II./Artillerie-Regiment (mot.)`],name:`2`,designation:`33`,commander:`Mesmer`,icon:`15pz`,
                                    pos:[2245,1046],
                                    elements:[
                                        {level:4,type:`Motorized Concentrated Artillery Battery`,team:`German`,desc:[`5th Battery, 33rd Artillery Regiment`,`5./Artillerie-Regiment (mot.) 33`],name:`5`,designation:`33`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Anti-Tank`,`Motorized`],team:`German`,
                                    desc:[`2nd Company, 33rd Anti-Tank Battalion`,`2./Panzerjäger-Abteilung 33`],name:`2`,designation:`33`,commander:``,icon:`15pz`,
                                    pos:[2073,946],
                                    elements:[
                                        {type:`Motorized Anti-Tank Company`},
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
                                                    level:4,type:[`Infantry`,`Heavy`],team:`Italian`,
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
                                                    level:4,type:[`Infantry`,`Heavy`],team:`Italian`,
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
                                                    desc:[`9th Company, 61st Infantry Regiment`,`9° Compagnia Anticarro, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`9`,designation:`61`,commander:``,icon:`trento`,
                                                    pos:[1039,999],
                                                    elements:[
                                                        {level:4,type:`Anti-Tank Company`,team:`Italian`,desc:[`9th Company, 61st Infantry Regiment`,`9° Compagnia Anticarro, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`9`,designation:`61`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Mortar`],team:`Italian`,
                                                    desc:[`10th Company, 61st Infantry Regiment`,`10° Compagnia Mortaio, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`10`,designation:`61`,commander:``,icon:`trento`,
                                                    pos:[386,541],
                                                    elements:[
                                                        {level:4,type:`Mortar Company`,team:`Italian`,desc:[`10th Company, 61st Infantry Regiment`,`10° Compagnia Mortaio, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`10`,designation:`61`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Machine Gun`],team:`Italian`,
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
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`10th 46th Artillery Regiment`,`10° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`10`,designation:`46`,commander:``},
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`11th Battery, 46th Artillery Regiment`,`11° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`11`,designation:`46`,commander:``},
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`12th Battery, 46th Artillery Regiment`,`12° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`12`,designation:`46`,commander:``},
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },{
                    name:`Breakout From Tobruk`,
                    strength:{name:`Companies`,num:[[40],[4,40]]},partition:[[0],[1],[2]],bonus:0,
                    unit:[
                        {
                            level:0,type:[`Infantry`],team:`British`,
                            desc:`70th Infantry Division`,name:`70`,designation:``,commander:`Scobie`,icon:`70`,
                            pos:[1106,442],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`Polish`,
                                    desc:[`Polish Independent Carpathian Brigade`,`Samodzielna Brygada Strzelców Karpackich`],name:`C`,designation:``,commander:`Kopański`,icon:`70`,
                                    pos:[999,555],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`],team:`Polish`,
                                            desc:[`1st Carpathian Rifle Battalion`,`1 Batalion Strzelców Karpackich`],name:`1`,designation:``,commander:`Kopeć`,icon:`70`,
                                            pos:[777,381],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`],team:`Polish`,
                                                    desc:[`A Company, 1st Carpathian Rifle Battalion`,`A Kompania, 1 Batalion Strzelców Karpackich`],name:`A`,designation:`1`,commander:``,icon:`70`,
                                                    pos:[1101,206],
                                                    elements:[
                                                        {type:`Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Polish`,
                                                    desc:[`B Company, 1st Carpathian Rifle Battalion`,`B Kompania, 1 Batalion Strzelców Karpackich`],name:`B`,designation:`1`,commander:``,icon:`70`,
                                                    pos:[867,264],
                                                    elements:[
                                                        {type:`Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Polish`,
                                                    desc:[`C Company, 1st Carpathian Rifle Battalion`,`C Kompania, 1 Batalion Strzelców Karpackich`],name:`C`,designation:`1`,commander:``,icon:`70`,
                                                    pos:[640,280],
                                                    elements:[
                                                        {type:`Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Polish`,
                                                    desc:[`D Company, 1st Carpathian Rifle Battalion`,`D Kompania, 1 Batalion Strzelców Karpackich`],name:`D`,designation:`1`,commander:``,icon:`70`,
                                                    pos:[594,342],
                                                    elements:[
                                                        {type:`Infantry Company`},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Infantry`],team:`Polish`,
                                            desc:[`2nd Carpathian Rifle Battalion`,`2 Batalion Strzelców Karpackich`],name:`2`,designation:``,commander:`Brzósko`,icon:`70`,
                                            pos:[710,545],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`],team:`Polish`,
                                                    desc:[`A Company, 2nd Carpathian Rifle Battalion`,`A Kompania, 2 Batalion Strzelców Karpackich`],name:`A`,designation:`2`,commander:``,icon:`70`,
                                                    pos:[603,427],
                                                    elements:[
                                                        {type:`Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Polish`,
                                                    desc:[`B Company, 2nd Carpathian Rifle Battalion`,`B Kompania, 2 Batalion Strzelców Karpackich`],name:`B`,designation:`2`,commander:``,icon:`70`,
                                                    pos:[607,517],
                                                    elements:[
                                                        {type:`Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Polish`,
                                                    desc:[`C Company, 2nd Carpathian Rifle Battalion`,`C Kompania, 2 Batalion Strzelców Karpackich`],name:`C`,designation:`2`,commander:``,icon:`70`,
                                                    pos:[611,599],
                                                    elements:[
                                                        {type:`Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Polish`,
                                                    desc:[`D Company, 2nd Carpathian Rifle Battalion`,`D Kompania, 2 Batalion Strzelców Karpackich`],name:`D`,designation:`2`,commander:``,icon:`70`,
                                                    pos:[674,661],
                                                    elements:[
                                                        {type:`Infantry Company`},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Infantry`],team:`Polish`,
                                            desc:[`3rd Carpathian Rifle Battalion`,`3 Batalion Strzelców Karpackich`],name:`3`,designation:``,commander:`Sokol`,icon:`70`,
                                            pos:[818,682],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`],team:`Polish`,
                                                    desc:[`A Company, 3rd Carpathian Rifle Battalion`,`A Kompania, 3 Batalion Strzelców Karpackich`],name:`A`,designation:`3`,commander:``,icon:`70`,
                                                    pos:[742,722],
                                                    elements:[
                                                        {type:`Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Polish`,
                                                    desc:[`B Company, 3rd Carpathian Rifle Battalion`,`B Kompania, 3 Batalion Strzelców Karpackich`],name:`B`,designation:`3`,commander:``,icon:`70`,
                                                    pos:[824,765],
                                                    elements:[
                                                        {type:`Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Polish`,
                                                    desc:[`C Company, 3rd Carpathian Rifle Battalion`,`C Kompania, 3 Batalion Strzelców Karpackich`],name:`C`,designation:`3`,commander:``,icon:`70`,
                                                    pos:[934,750],
                                                    elements:[
                                                        {type:`Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Polish`,
                                                    desc:[`D Company, 3rd Carpathian Rifle Battalion`,`D Kompania, 3 Batalion Strzelców Karpackich`],name:`D`,designation:`3`,commander:``,icon:`70`,
                                                    pos:[1049,748],
                                                    elements:[
                                                        {type:`Infantry Company`},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`Australian`,
                                            desc:[`13th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/13th Australian Infantry Battalion`],name:`2/13`,designation:``,commander:`Burrows`,icon:`9a`,
                                            pos:[1359,701],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`,`Motorized`],team:`Australian`,
                                                    desc:[`A Company, 13th Infantry Battalion, 2nd Australian Expeditionary Force`,`A Company, 2/13th Australian Infantry Battalion`],name:`A`,designation:`2/13`,commander:``,icon:`9a`,
                                                    pos:[1147,841],
                                                    elements:[
                                                        {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`A Company, 13th Infantry Battalion, 2nd Australian Expeditionary Force`,`A Company, 2/13th Australian Infantry Battalion`],name:`A`,designation:`2/13`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`Australian`,
                                                    desc:[`B Company, 13th Infantry Battalion, 2nd Australian Expeditionary Force`,`B Company, 2/13th Australian Infantry Battalion`],name:`B`,designation:`2/13`,commander:``,icon:`9a`,
                                                    pos:[1264,833],
                                                    elements:[
                                                        {level:4,type:`Motorized Infantry Company`,team:`Australian`,desc:[`B Company, 13th Infantry Battalion, 2nd Australian Expeditionary Force`,`B Company, 2/13th Australian Infantry Battalion`],name:`B`,designation:`2/13`,commander:``},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`Australian`,
                                                    desc:[`C Company, 13th Infantry Battalion, 2nd Australian Expeditionary Force`,`C Company, 2/13th Australian Infantry Battalion`],name:`C`,designation:`2/13`,commander:``,icon:`9a`,
                                                    pos:[1362,813],
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
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`Australian`,
                                                    desc:[`A Company, 15th Infantry Battalion, 2nd Australian Expeditionary Force`,`A Company, 2/15th Australian Infantry Battalion`],name:`A`,designation:`2/15`,commander:``,icon:`9a`,
                                                    pos:[1552,751],
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
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Infantry`],team:`Czechoslovak`,
                                            desc:[`11th Czechoslovak Infantry Battalion`,`11. Československý Pěší Prapor — Východní`],name:`11`,designation:``,commander:`Klapálek`,icon:`70`,
                                            pos:[1506,584],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`],team:`Czechoslovak`,
                                                    desc:[`A Company, 11th Czechoslovak Infantry Battalion`,`A Společnost, 11. Československý Pěší Prapor — Východní`],name:`A`,designation:`11`,commander:``,icon:`70`,
                                                    pos:[1622,381],
                                                    elements:[
                                                        {type:`Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Czechoslovak`,
                                                    desc:[`B Company, 11th Czechoslovak Infantry Battalion`,`B Společnost, 11. Československý Pěší Prapor — Východní`],name:`B`,designation:`11`,commander:``,icon:`70`,
                                                    pos:[1729,428],
                                                    elements:[
                                                        {type:`Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Czechoslovak`,
                                                    desc:[`C Company, 11th Czechoslovak Infantry Battalion`,`C Společnost, 11. Československý Pěší Prapor — Východní`],name:`C`,designation:`11`,commander:``,icon:`70`,
                                                    pos:[1731,521],
                                                    elements:[
                                                        {type:`Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Czechoslovak`,
                                                    desc:[`D Company, 11th Czechoslovak Infantry Battalion`,`D Společnost, 11. Československý Pěší Prapor — Východní`],name:`D`,designation:`11`,commander:``,icon:`70`,
                                                    pos:[1690,614],
                                                    elements:[
                                                        {type:`Infantry Company`},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Machine Gun`],team:`Polish`,
                                            desc:[`Carpathian "Uhlans" Machine Gun Battalion`,`Pułk Ułanów Karpackich`],name:`U`,designation:``,commander:`Bobiński`,icon:`70`,
                                            pos:[1054,364],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`,`Machine Gun`],team:`Polish`,
                                                    desc:[`A Squadron, Carpathian "Uhlans" Machine Gun Battalion`,`A Dywizjon, Pułk Ułanów Karpackich`],name:`A`,designation:`Uhlans`,commander:``,icon:`70`,
                                                    pos:[730,440],
                                                    elements:[
                                                        {type:`Machine Gun Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Machine Gun`],team:`Polish`,
                                                    desc:[`B Squadron, Carpathian "Uhlans" Machine Gun Battalion`,`B Dywizjon, Pułk Ułanów Karpackich`],name:`B`,designation:`Uhlans`,commander:``,icon:`70`,
                                                    pos:[755,647],
                                                    elements:[
                                                        {type:`Machine Gun Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Machine Gun`],team:`Polish`,
                                                    desc:[`C Squadron, Carpathian "Uhlans" Machine Gun Battalion`,`C Dywizjon, Pułk Ułanów Karpackich`],name:`C`,designation:`Uhlans`,commander:``,icon:`70`,
                                                    pos:[984,659],
                                                    elements:[
                                                        {type:`Machine Gun Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Machine Gun`],team:`Polish`,
                                                    desc:[`D Squadron, Carpathian "Uhlans" Machine Gun Battalion`,`D Dywizjon, Pułk Ułanów Karpackich`],name:`D`,designation:`Uhlans`,commander:``,icon:`70`,
                                                    pos:[1579,510],
                                                    elements:[
                                                        {type:`Machine Gun Company`},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Artillery`],team:`Polish`,
                                            desc:[`Carpathian Artillery Regiment`,`Karpacki Pułk Artylerii`],name:`C`,designation:``,commander:`Gliwicz`,icon:`70`,
                                            pos:[840,510],
                                            elements:[
                                                {level:4,type:`Artillery Battery`,desc:[`A Battery, Carpathian Artillery Regiment`,`Bateria A, Karpacki Pułk Artylerii`],name:`A`,designation:`KPA`,commander:``},
                                                {level:4,type:`Artillery Battery`,desc:[`B Battery, Carpathian Artillery Regiment`,`Bateria B, Karpacki Pułk Artylerii`],name:`B`,designation:`KPA`,commander:``},
                                                {level:4,type:`Artillery Battery`,desc:[`C Battery, Carpathian Artillery Regiment`,`Bateria C, Karpacki Pułk Artylerii`],name:`C`,designation:`KPA`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Engineer`,`Motorized`],team:`Polish`,
                                            desc:[`Carpathian Engineer Field Company`,`Karpacka Kompania Inżynieryjna Polowa`],name:`C`,designation:``,commander:``,icon:`70`,
                                            pos:[1160,740],
                                            elements:[
                                                {type:`Motorized Engineer Company`},
                                            ],
                                        },
                                    ],
                                },{
                                    level:1,type:[`Tank`,`Heavy`],team:`British`,
                                    desc:`32nd Army Tank Brigade`,name:`32`,designation:``,commander:`Willison`,icon:`32a`,
                                    pos:[1317,554],
                                    elements:[
                                        {
                                            level:3,type:[`Tank`,`Heavy`],team:`British`,
                                            desc:[`4th Battalion, Royal Tank Regiment`,`4th Royal Tank Regiment`],name:`4`,designation:`Royal Tank\nRegiment`,commander:`O'Carroll`,icon:`32a`,
                                            pos:[1298,759],
                                            elements:[
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`A Squadron, 4th Battalion, Royal Tank Regiment`,`A Squadron, 4th Royal Tank Regiment`],name:`A`,designation:`4 RTR`,commander:``},
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`B Squadron, 4th Battalion, Royal Tank Regiment`,`B Squadron, 4th Royal Tank Regiment`],name:`B`,designation:`4 RTR`,commander:``},
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`C Squadron, 4th Battalion, Royal Tank Regiment`,`C Squadron, 4th Royal Tank Regiment`],name:`C`,designation:`4 RTR`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Tank`,`Heavy`],team:`British`,
                                            desc:[`7th Battalion, Royal Tank Regiment`,`7th Royal Tank Regiment`],name:`7`,designation:`Royal Tank\nRegiment`,commander:`Groves`,icon:`32a`,
                                            pos:[1493,689],
                                            elements:[
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`A Squadron, 7th Battalion, Royal Tank Regiment`,`A Squadron, 7th Royal Tank Regiment`],name:`A`,designation:`7 RTR`,commander:``},
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`B Squadron, 7th Battalion, Royal Tank Regiment`,`B Squadron, 7th Royal Tank Regiment`],name:`B`,designation:`7 RTR`,commander:``},
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`C Squadron, 7th Battalion, Royal Tank Regiment`,`C Squadron, 7th Royal Tank Regiment`],name:`C`,designation:`7 RTR`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`,`Motorized`],team:`British`,
                                            desc:[`104th Battalion, Royal Horse Artillery`,`104th Regiment, Royal Horse Artillery`],name:`104`,designation:`Royal\nHorse`,commander:`Matthew`,icon:`32a`,
                                            pos:[1240,684],
                                            elements:[
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`A Battery, 104th Battalion, Royal Horse Artillery`,`A Battery, 104th Regiment, Royal Horse Artillery`],name:`A`,designation:`104 RHA`,commander:``},
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`B Battery, 104th Battalion, Royal Horse Artillery`,`B Battery, 104th Regiment, Royal Horse Artillery`],name:`B`,designation:`104 RHA`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Engineer`,`Motorized`],team:`British`,
                                            desc:[`2nd (Cheshire) Field Company, Royal Engineers`,`2nd (Cheshire) Field Squadron, Royal Engineers`],name:`2`,designation:`Cheshire`,commander:``,icon:`32a`,
                                            pos:[1402,756],
                                            elements:[
                                                {type:`Motorized Engineer Company`},
                                            ],
                                        },
                                    ],
                                },{
                                    level:4,type:[`Artillery`],team:`British`,
                                    desc:`"Bush" Artillery`,name:`Bush`,designation:``,commander:``,icon:``,
                                    pos:[1664,469],
                                    elements:[
                                        {type:`Small Artillery Battery`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`German`,
                            desc:[`Special Purpose Divisional Command "Afrika"`,`Divisionskommando z.b.V. Afrika`],name:`A`,designation:`z.b.V.`,commander:`Sümmermann`,icon:`90l`,
                            pos:[2073,946],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`German`,
                                    desc:[`Battle Group Panzenhagen`,`Kampfgruppe Panzenhagen`],name:`KG`,designation:`347`,commander:`Panzenhagen`,icon:`90l`,
                                    pos:[1906,1155],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`],team:`German`,
                                            desc:[`3rd Battalion, 347th Infantry Regiment`,`III./Infanterie-Regiment 347`],name:`3`,designation:`347`,commander:`Panzenhagen`,icon:`90l`,
                                            pos:[1591,862],
                                            elements:[
                                                {level:4,type:`Infantry Company`,team:`German`,desc:[`9th Company, 347th Infantry Regiment`,`9./Infanterie-Regiment 347`],name:`9`,designation:`347`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`German`,desc:[`10th Company, 347th Infantry Regiment`,`10./Infanterie-Regiment 347`],name:`10`,designation:`347`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`German`,desc:[`11th Company, 347th Infantry Regiment`,`11./Infanterie-Regiment 347`],name:`11`,designation:`347`,commander:``},
                                                {level:4,type:`Heavy Infantry Company`,team:`German`,desc:[`12th Company, 347th Infantry Regiment`,`12./Infanterie-Regiment 347`],name:`12`,designation:`347`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Machine Gun`,`Motorized`],team:`Italian`,
                                            desc:[`11th Bersaglieri Battalion`,`11° Battaglione Bersaglieri`],name:`11`,designation:`Bersaglieri`,commander:`Straziota`,icon:`trento`,
                                            pos:[2182,1194],
                                            elements:[
                                                {level:4,type:`Motorized Machine Gun Bersaglieri Company`,team:`Italian`,desc:[`1st Company, 11th Bersaglieri Battalion`,`1° Compagnia, 11° Battaglione Bersaglieri`],name:`1`,designation:`11\nBersaglieri`,commander:``},
                                                {level:4,type:`Motorized Machine Gun Bersaglieri Company`,team:`Italian`,desc:[`2nd Company, 11th Bersaglieri Battalion`,`2° Compagnia, 11° Battaglione Bersaglieri`],name:`2`,designation:`11\nBersaglieri`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`16th Infantry Regiment`,`16° Reggimento di Fanteria "Savona"`],name:`16`,designation:`Savona`,commander:`Garrone`,icon:`savona`,
                                    pos:[2086,768],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`1st Battalion, 16th Infantry Regiment`,`I Battaglione Fucilieri, 16° Reggimento di Fanteria Motorizzata "Savona"`],name:`1`,designation:`16`,commander:`Pelosi`,icon:`savona`,
                                            pos:[1915,486],
                                            elements:[
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`1st Company, 16th Infantry Regiment`,`1° Compagnia Fucilieri, 16° Reggimento di Fanteria Motorizzata "Savona"`],name:`1`,designation:`16`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`2nd Company, 16th Infantry Regiment`,`2° Compagnia Fucilieri, 16° Reggimento di Fanteria Motorizzata "Savona"`],name:`2`,designation:`16`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`3rd Company, 16th Infantry Regiment`,`3° Compagnia Fucilieri, 16° Reggimento di Fanteria Motorizzata "Savona"`],name:`3`,designation:`16`,commander:``},
                                                {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`4th Company, 16th Infantry Regiment`,`4° Compagnia Fucilieri, 16° Reggimento di Fanteria Motorizzata "Savona"`],name:`4`,designation:`16`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`3rd Battalion, 16th Infantry Regiment`,`III Battaglione Fucilieri, 16° Reggimento di Fanteria Motorizzata "Savona"`],name:`3`,designation:`16`,commander:`Rossi`,icon:`savona`,
                                            pos:[1812,737],
                                            elements:[
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`9th Company, 16th Infantry Regiment`,`9° Compagnia Fucilieri, 16° Reggimento di Fanteria Motorizzata "Savona"`],name:`9`,designation:`16`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`10th Company, 16th Infantry Regiment`,`10° Compagnia Fucilieri, 16° Reggimento di Fanteria Motorizzata "Savona"`],name:`10`,designation:`16`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`11th Company, 16th Infantry Regiment`,`11° Compagnia Fucilieri, 16° Reggimento di Fanteria Motorizzata "Savona"`],name:`11`,designation:`16`,commander:``},
                                                {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`12th Company, 16th Infantry Regiment`,`12° Compagnia Fucilieri, 16° Reggimento di Fanteria Motorizzata "Savona"`],name:`12`,designation:`16`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Mortar`],team:`Italian`,
                                            desc:[`16th Mortar Company`,`16° Compagnia Mortaio`],name:`16`,designation:``,commander:``,icon:`savona`,
                                            pos:[1991,655],
                                            elements:[
                                                {type:`Mortar Company`},
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`102nd Infantry Division "Trento"`,`102ª Divisione di Fanteria Motorizzata "Trento"`],name:`102`,designation:`Trento`,commander:`Stampioni`,icon:`trento`,
                            pos:[150,1237],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`61st Infantry Regiment`,`61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[297,691],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`1st Battalion, 61st Infantry Regiment`,`I Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`,icon:`trento`,
                                            pos:[408,429],
                                            elements:[
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`1st Company, 61st Infantry Regiment`,`1° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`2nd Company, 61st Infantry Regiment`,`2° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`3rd Company, 61st Infantry Regiment`,`3° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`61`,commander:``},
                                                {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`4th Company, 61st Infantry Regiment`,`4° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`4`,designation:`61`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`2nd Battalion, 61st Infantry Regiment`,`II Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`,icon:`trento`,
                                            pos:[696,777],
                                            elements:[
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`5th Company, 61st Infantry Regiment`,`5° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`5`,designation:`61`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`6th Company, 61st Infantry Regiment`,`6° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`6`,designation:`61`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`7th Company, 61st Infantry Regiment`,`7° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`7`,designation:`61`,commander:``},
                                                {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`8th Company, 61st Infantry Regiment`,`8° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`8`,designation:`61`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Machine Gun`,`Mortar`,`Anti-Tank`],team:`Italian`,
                                            desc:[`3rd Mixed Support Battalion, 61st Motorized Infantry Regiment`,`III Battaglione Armi d'Accompagnamento, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`61`,commander:`Rabezzana`,icon:`trento`,
                                            pos:[476,636],
                                            elements:[
                                                {level:4,type:`Anti-Tank Company`,team:`Italian`,desc:[`9th Company, 61st Infantry Regiment`,`9° Compagnia Anticarro, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`9`,designation:`61`,commander:``},
                                                {level:4,type:`Mortar Company`,team:`Italian`,desc:[`10th Company, 61st Infantry Regiment`,`10° Compagnia Mortaio, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`10`,designation:`61`,commander:``},
                                                {level:4,type:`Machine Gun Company`,team:`Italian`,desc:[`11th Company, 61st Infantry Regiment`,`11° Compagnia Mitraglieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`11`,designation:`61`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`62nd Infantry Regiment`,`62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[975,1250],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`1st Battalion, 62nd Infantry Regiment`,`I Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`,icon:`trento`,
                                            pos:[877,887],
                                            elements:[
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`3rd Company, 62nd Infantry Regiment`,`3° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`62`,commander:``},
                                                {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`4th Company, 62nd Infantry Regiment`,`4° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`4`,designation:`62`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`2nd Battalion, 62nd Infantry Regiment`,`II Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`,icon:`trento`,
                                            pos:[1312,930],
                                            elements:[
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`5th Company, 62nd Infantry Regiment`,`5° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`5`,designation:`62`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`6th Company, 62nd Infantry Regiment`,`6° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`6`,designation:`62`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`7th Company, 62nd Infantry Regiment`,`7° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`7`,designation:`62`,commander:``},
                                                {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`8th Company, 62nd Infantry Regiment`,`8° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`8`,designation:`62`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Machine Gun`,`Mortar`,`Anti-Tank`],team:`Italian`,
                                            desc:[`3rd Mixed Support Battalion, 62nd Motorized Infantry Regiment`,`III Battaglione Armi d'Accompagnamento, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`62`,commander:`Gennaro`,icon:`trento`,
                                            pos:[1076,972],
                                            elements:[
                                                {level:4,type:`Anti-Tank Company`,team:`Italian`,desc:[`9th Company, 62nd Infantry Regiment`,`9° Compagnia Anticarro, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`9`,designation:`62`,commander:``},
                                                {level:4,type:`Mortar Company`,team:`Italian`,desc:[`10th Company, 62nd Infantry Regiment`,`10° Compagnia Mortaio, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`10`,designation:`62`,commander:``},
                                                {level:4,type:`Machine Gun Company`,team:`Italian`,desc:[`11th Company, 62nd Infantry Regiment`,`11° Compagnia Mitraglieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`11`,designation:`62`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`46th Artillery Regiment`,`46° Reggimento Artiglieria "Trento"`],name:`46`,designation:`Trento`,commander:`Grati`,icon:`trento`,
                                    pos:[563,1056],
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
                                            pos:[461,908],
                                            elements:[
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`9th Battery, 46th Artillery Regiment`,`9° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`9`,designation:`46`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`],team:`Italian`,
                                            desc:[`4th Group, 46th Artillery Regiment`,`IV Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`4`,designation:`46`,commander:`Gavazzi`,icon:`trento`,
                                            pos:[820,1017],
                                            elements:[
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`11th Battery, 46th Artillery Regiment`,`11° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`11`,designation:`46`,commander:``},
                                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`12th Battery, 46th Artillery Regiment`,`12° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`12`,designation:`46`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:3,type:[`Machine Gun`,`Mortar`,`Anti-Tank`],team:`Italian`,
                                    desc:[`551st Mixed Support Battalion`,`DLI Battaglione Armi d'Accompagnamento`],name:`551`,designation:``,commander:`Bobbio`,icon:`trento`,
                                    pos:[636,726],
                                    elements:[
                                        {level:4,type:`Anti-Tank Company`,team:`Italian`,desc:[`1st Company, 551st Mixed Support Battalion`,`1° Compagnia Anticarro, DLI Battaglione Armi d'Accompagnamento`],name:`1`,designation:`551`,commander:``},
                                        {level:4,type:`Mortar Company`,team:`Italian`,desc:[`2nd Company, 551st Mixed Support Battalion`,`2° Compagnia Mortaio, DLI Battaglione Armi d'Accompagnamento`],name:`2`,designation:`551`,commander:``},
                                        {level:4,type:`Machine Gun Company`,team:`Italian`,desc:[`3rd Company, 551st Mixed Support Battalion`,`3° Compagnia Mitraglieri, DLI Battaglione Armi d'Accompagnamento`],name:`3`,designation:`551`,commander:``},
                                    ],
                                },
                            ],
                        },
                    ],
                },{
                    name:`Axis Capture of Tobruk`,
                    strength:{name:`Companies`,num:[[36],[30,42]]},partition:[[1],[2],[0]],bonus:1,
                    unit:[
                        {
                            level:0,type:[`Tank`],team:`German`,
                            desc:[`15th Panzer Division`,`15. Panzer-Division`],name:`15`,designation:``,commander:`von Värst`,icon:`15pz`,
                            pos:[2073,946],
                            elements:[
                                {
                                    level:1,type:[`Tank`],team:`German`,
                                    desc:`Kampfgruppe Baade`,name:`KG`,designation:`115`,commander:`Baade`,icon:`15pz`,
                                    pos:[1906,1155],
                                    elements:[
                                        {
                                            level:3,type:[`Tank`],team:`German`,
                                            desc:[`1st Battalion, 8th Panzer Regiment`,`I./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:`Kümmel`,icon:`15pz`,
                                            pos:[1710,1037],
                                            elements:[
                                                {level:4,type:`Medium Tank Company`,team:`German`,desc:[`1st Company, 8th Panzer Regiment`,`1./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:``},
                                                {level:4,type:`Medium Tank Company`,team:`German`,desc:[`2nd Company, 8th Panzer Regiment`,`2./Panzer-Regiment 8`],name:`2`,designation:`8`,commander:``},
                                                {level:4,type:`Medium Tank Company`,team:`German`,desc:[`3rd Company, 8th Panzer Regiment`,`3./Panzer-Regiment 8`],name:`3`,designation:`8`,commander:``},
                                                {level:4,type:`Armed Medium Tank Company`,team:`German`,desc:[`4th Company, 8th Panzer Regiment`,`4./Panzer-Regiment 8`],name:`4`,designation:`8`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`German`,
                                            desc:[`1st Battalion, 115th Rifle Regiment`,`I./Schützen-Regiment 115`],name:`1`,designation:`115`,commander:`von Grolmann`,icon:`15pz`,
                                            pos:[1542,1088],
                                            elements:[
                                                {level:4,type:`Motorized Armed Infantry Company`,team:`German`,desc:[`2nd Company, 115th Rifle Regiment`,`2./Schützen-Regiment 115`],name:`2`,designation:`115`,commander:``},
                                                {level:4,type:`Motorized Armed Infantry Company`,team:`German`,desc:[`3rd Company, 115th Rifle Regiment`,`3./Schützen-Regiment 115`],name:`3`,designation:`115`,commander:``},
                                                {level:4,type:`Motorized Armed Infantry Company`,team:`German`,desc:[`4th Company, 115th Rifle Regiment`,`4./Schützen-Regiment 115`],name:`4`,designation:`115`,commander:``},
                                                {level:4,type:`Motorized Engineer Company`,team:`German`,desc:[`3rd Company, 33rd Engineer Battalion`,`3./Panzer-Pionier-Bataillon 33`],name:`3`,designation:`33`,commander:`Cirener`},
                                                {level:4,type:`Motorized Infantry Gun Company`,team:`German`,desc:[`13th (Infantry Gun) Company, 115th Rifle Regiment`,`13.(Infanteriegeschütz)/Schützen-Regiment 115`],name:`13`,designation:`115`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`German`,
                                            desc:[`1st Battalion, 115th Rifle Regiment`,`I./Schützen-Regiment 115`],name:`1`,designation:`115`,commander:`von Warrelmann`,icon:`15pz`,
                                            pos:[1838,949],
                                            elements:[
                                                {level:4,type:`Motorized Armed Infantry Company`,team:`German`,desc:[`9th Company, 115th Rifle Regiment`,`9./Schützen-Regiment 115`],name:`9`,designation:`115`,commander:``},
                                                {level:4,type:`Motorized Armed Infantry Company`,team:`German`,desc:[`12th Company, 115th Rifle Regiment`,`12./Schützen-Regiment 115`],name:`12`,designation:`115`,commander:``},
                                                {level:4,type:`Motorized Engineer Company`,team:`German`,desc:[`14th (Engineer) Company, 115th Rifle Regiment`,`14.(Pionier)/Schützen-Regiment 115`],name:`14`,designation:`115`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`Battle Group Menny`,`Kampfgruppe Menny`],name:`KG`,designation:`15`,commander:`Menny`,icon:`90l`,
                                    pos:[1545,986],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`,`Motorized`],team:`German`,
                                            desc:[`1st Battalion, 200th Light Infantry Regiment`,`I./Leichtes Infanterie-Regiment 200`],name:`1`,designation:`200`,commander:`von Debschütz`,icon:`90l`,
                                            pos:[1477,889],
                                            elements:[
                                                {level:4,type:`Motorized Armed Infantry Company`,team:`German`,desc:[`1st Company, 200th Light Infantry Regiment`,`1./Leichtes Infanterie-Regiment 200`],name:`1`,designation:`200`,commander:``},
                                                {level:4,type:`Motorized Armed Infantry Company`,team:`German`,desc:[`2nd Company, 200th Light Infantry Regiment`,`2./Leichtes Infanterie-Regiment 200`],name:`2`,designation:`200`,commander:``},
                                                {level:4,type:`Motorized Armed Infantry Company`,team:`German`,desc:[`3rd Company, 200th Light Infantry Regiment`,`3./Leichtes Infanterie-Regiment 200`],name:`3`,designation:`200`,commander:``},
                                                {level:4,type:`Motorized Armed Infantry Company`,team:`German`,desc:[`4th Company, 200th Light Infantry Regiment`,`4./Leichtes Infanterie-Regiment 200`],name:`4`,designation:`200`,commander:``},
                                                {level:4,type:`Motorized Heavy Infantry Gun Company`,team:`German`,desc:[`708th (Heavy Infantry Gun) Company`,`Schwere Infanteriegeschütz Kompanie 708`],name:`708`,designation:``,commander:``},
                                                {level:4,type:`Motorized Engineer Company`,team:`German`,desc:[`1st Company, 33rd Engineer Battalion`,`1./Panzer-Pionier-Bataillon 33`],name:`1`,designation:`33`,commander:``,icon:`15pz`},
                                                {level:4,type:`Motorized Anti-Tank`,team:`German`,desc:[`1st Company, 33rd Anti-Tank Battalion`,`1./Panzerjäger-Abteilung 33`],name:`1`,designation:`33`,commander:``,icon:`15pz`},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`German`,
                                            desc:[`2nd Battalion, 200th Light Infantry Regiment`,`II./Leichtes Infanterie-Regiment 200`],name:`2`,designation:`200`,commander:`Panzenhagen`,icon:`90l`,
                                            pos:[1655,807],
                                            elements:[
                                                {level:4,type:`Motorized Armed Infantry Company`,team:`German`,desc:[`5th Company, 200th Light Infantry Regiment`,`5./Leichtes Infanterie-Regiment 200`],name:`5`,designation:`200`,commander:``},
                                                {level:4,type:`Motorized Armed Infantry Company`,team:`German`,desc:[`6th Company, 200th Light Infantry Regiment`,`6./Leichtes Infanterie-Regiment 200`],name:`6`,designation:`200`,commander:``},
                                                {level:4,type:`Motorized Armed Infantry Company`,team:`German`,desc:[`7th Company, 200th Light Infantry Regiment`,`7./Leichtes Infanterie-Regiment 200`],name:`7`,designation:`200`,commander:``},
                                                {level:4,type:`Motorized Armed Infantry Company`,team:`German`,desc:[`8th Company, 200th Light Infantry Regiment`,`8./Leichtes Infanterie-Regiment 200`],name:`8`,designation:`200`,commander:``},
                                                {level:4,type:`Motorized Engineer Company`,team:`German`,desc:[`2nd Company, 33rd Engineer Battalion`,`2./Panzer-Pionier-Bataillon 33`],name:`2`,designation:`33`,commander:``,icon:`15pz`},
                                                {level:4,type:`Motorized Anti-Tank`,team:`German`,desc:[`2nd Company, 33rd Anti-Tank Battalion`,`2./Panzerjäger-Abteilung 33`],name:`2`,designation:`33`,commander:``,icon:`15pz`},
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Artillery`,`Motorized`],team:`German`,
                                    desc:[`33rd Artillery Regiment`,`Artillerie-Regiment (mot.) 33`],name:`33`,designation:``,commander:`Crasemann`,icon:`15pz`,
                                    pos:[1696,923],
                                    elements:[
                                        {
                                            level:3,type:[`Artillery`,`Motorized`],team:`German`,
                                            desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:`Mayer`,icon:`15pz`,
                                            pos:[1419,992],
                                            elements:[
                                                {level:4,type:`Motorized Concentrated Artillery Battery`,team:`German`,desc:[`2nd Battery, 33rd Artillery Regiment`,`2./Artillerie-Regiment (mot.) 33`],name:`2`,designation:`33`,commander:``},
                                                {level:4,type:`Motorized Concentrated Artillery Battery`,team:`German`,desc:[`3rd Battery, 33rd Artillery Regiment`,`3./Artillerie-Regiment (mot.) 33`],name:`3`,designation:`33`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`,`Motorized`,`Heavy`],team:`German`,
                                            desc:[`3rd Battalion, 33rd Artillery Regiment`,`III./Artillerie-Regiment (mot.) 33`],name:`3`,designation:`33`,commander:`Bickel`,icon:`15pz`,
                                            pos:[1772,820],
                                            elements:[
                                                {level:4,type:`Motorized Heavy Artillery Battery`,team:`German`,desc:[`7th Battery, 33rd Artillery Regiment`,`7./Artillerie-Regiment (mot.) 33`],name:`7`,designation:`33`,commander:``},
                                                {level:4,type:`Motorized Heavy Artillery Battery`,team:`German`,desc:[`8th Battery, 33rd Artillery Regiment`,`8./Artillerie-Regiment (mot.) 33`],name:`8`,designation:`33`,commander:``},
                                                {level:4,type:`Motorized Heavy Artillery Battery`,team:`German`,desc:[`9th Battery, 33rd Artillery Regiment`,`9./Artillerie-Regiment (mot.) 33`],name:`9`,designation:`33`,commander:``},
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`British`,
                            desc:`70th Infantry Division`,name:`70`,designation:``,commander:`Scobie`,icon:`70`,
                            pos:[1106,442],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`201st Guards Brigade`,name:`201`,designation:`Guards`,commander:`Marriott`,icon:`7a`,
                                    pos:[840,510],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`1st Battalion, Worcestershire Regiment`,name:`1`,designation:`Worcester`,commander:`Knight`,icon:`7a`,
                                            pos:[1054,364],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`B Company, 1st Battalion, Worcestershire Regiment`,name:`B`,designation:`1 WR`,commander:``,icon:`7a`,
                                                    pos:[785,293],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`C Company, 1st Battalion, Worcestershire Regiment`,name:`C`,designation:`1 WR`,commander:``,icon:`7a`,
                                                    pos:[1034,234],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`D Company, 1st Battalion, Worcestershire Regiment`,name:`D`,designation:`1 WR`,commander:``,icon:`7a`,
                                                    pos:[984,616],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`1st Battalion, Sherwood Foresters`,name:`1`,designation:`Sherwood\nForesters`,commander:``,icon:`7a`,
                                            pos:[777,381],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`A Company, 1st Battalion, Sherwood Foresters`,name:`A`,designation:`1 SF`,commander:``,icon:`7a`,
                                                    pos:[612,579],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`B Company, 1st Battalion, Sherwood Foresters`,name:`B`,designation:`1 SF`,commander:``,icon:`7a`,
                                                    pos:[605,481],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`C Company, 1st Battalion, Sherwood Foresters`,name:`C`,designation:`1 SF`,commander:``,icon:`7a`,
                                                    pos:[599,380],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`D Company, 1st Battalion, Sherwood Foresters`,name:`D`,designation:`1 SF`,commander:``,icon:`7a`,
                                                    pos:[590,292],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`3rd Battalion, Coldstream Guards`,name:`3`,designation:`Coldstream\nGuards`,commander:`Sainthill`,icon:`7a`,
                                            pos:[1137,633],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`A Company, 3rd Battalion, Coldstream Guards`,name:`A`,designation:`3 CG`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`B Company, 3rd Battalion, Coldstream Guards`,name:`B`,designation:`3 CG`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`C Company, 3rd Battalion, Coldstream Guards`,name:`C`,designation:`3 CG`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`D Company, 3rd Battalion, Coldstream Guards`,name:`D`,designation:`3 CG`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:1,type:[`Tank`,`Heavy`],team:`British`,
                                    desc:`32nd Army Tank Brigade`,name:`32`,designation:``,commander:`Willison`,icon:`32a`,
                                    pos:[999,555],
                                    elements:[
                                        {
                                            level:3,type:[`Tank`,`Heavy`],team:`British`,
                                            desc:[`4th Battalion, Royal Tank Regiment`,`4th Royal Tank Regiment`],name:`4`,designation:`Royal Tank\nRegiment`,commander:`Reeve`,icon:`32a`,
                                            pos:[1193,526],
                                            elements:[
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`A Squadron, 4th Battalion, Royal Tank Regiment`,`A Squadron, 4th Royal Tank Regiment`],name:`A`,designation:`4 RTR`,commander:``},
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`B Squadron, 4th Battalion, Royal Tank Regiment`,`B Squadron, 4th Royal Tank Regiment`],name:`B`,designation:`4 RTR`,commander:``},
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`C Squadron, 4th Battalion, Royal Tank Regiment`,`C Squadron, 4th Royal Tank Regiment`],name:`C`,designation:`4 RTR`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Tank`,`Heavy`],team:`British`,
                                            desc:[`7th Battalion, Royal Tank Regiment`,`7th Royal Tank Regiment`],name:`7`,designation:`Royal Tank\nRegiment`,commander:`Foote`,icon:`32a`,
                                            pos:[1077,542],
                                            elements:[
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`A Squadron, 7th Battalion, Royal Tank Regiment`,`A Squadron, 7th Royal Tank Regiment`],name:`A`,designation:`7 RTR`,commander:``},
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`B Squadron, 7th Battalion, Royal Tank Regiment`,`B Squadron, 7th Royal Tank Regiment`],name:`B`,designation:`7 RTR`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`11th Indian Infantry Brigade`,name:`11`,designation:``,commander:`Anderson`,icon:`4id`,
                                    pos:[1317,554],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`2nd Battalion, Queen's Own Cameron Highlanders`,name:`2`,designation:`Cameron\nHighlanders`,commander:`Duncan`,icon:`4id`,
                                            pos:[1059,654],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`A Company, 2nd Battalion, Queen's Own Cameron Highlanders`,name:`A`,designation:`2 CH`,commander:``,icon:`4id`,
                                                    pos:[844,753],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`B Company, 2nd Battalion, Queen's Own Cameron Highlanders`,name:`B`,designation:`2 CH`,commander:``,icon:`4id`,
                                                    pos:[972,740],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`C Company, 2nd Battalion, Queen's Own Cameron Highlanders`,name:`C`,designation:`2 CH`,commander:``,icon:`4id`,
                                                    pos:[1096,772],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                                    desc:`D Company, 2nd Battalion, Queen's Own Cameron Highlanders`,name:`D`,designation:`2 CH`,commander:``,icon:`4id`,
                                                    pos:[1181,843],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`Indian`,
                                            desc:`2nd Battalion, 5th Mahratta Light Infantry`,name:`2/5`,designation:`Mahratta`,commander:`Doyle`,icon:`4id`,
                                            pos:[1359,701],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`,`Motorized`],team:`Indian`,
                                                    desc:`A Company, 2nd Battalion, 5th Mahratta Light Infantry`,name:`A`,designation:`2/5 MLI`,commander:``,icon:`4id`,
                                                    pos:[1302,825],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`Indian`,
                                                    desc:`B Company, 2nd Battalion, 5th Mahratta Light Infantry`,name:`B`,designation:`2/5 MLI`,commander:``,icon:`4id`,
                                                    pos:[1419,795],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`Indian`,
                                                    desc:`C Company, 2nd Battalion, 5th Mahratta Light Infantry`,name:`C`,designation:`2/5 MLI`,commander:``,icon:`4id`,
                                                    pos:[1537,756],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`Indian`,
                                                    desc:`D Company, 2nd Battalion, 5th Mahratta Light Infantry`,name:`D`,designation:`2/5 MLI`,commander:``,icon:`4id`,
                                                    pos:[1635,690],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`Indian`,
                                            desc:`2nd Battalion, 7th Gurkha Rifles`,name:`2/7`,designation:`Gurkha`,commander:``,icon:`4id`,
                                            pos:[1616,446],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`,`Motorized`],team:`Indian`,
                                                    desc:`A Company, 2nd Battalion, 7th Gurkha Rifles`,name:`A`,designation:`2/7 GR`,commander:``,icon:`4id`,
                                                    pos:[1700,598],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`Indian`,
                                                    desc:`B Company, 2nd Battalion, 7th Gurkha Rifles`,name:`B`,designation:`2/7 GR`,commander:``,icon:`4id`,
                                                    pos:[1734,497],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`Indian`,
                                                    desc:`C Company, 2nd Battalion, 7th Gurkha Rifles`,name:`C`,designation:`2/7 GR`,commander:``,icon:`4id`,
                                                    pos:[1721,388],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`Indian`,
                                                    desc:`D Company, 2nd Battalion, 7th Gurkha Rifles`,name:`D`,designation:`2/7 GR`,commander:``,icon:`4id`,
                                                    pos:[1495,351],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`South African`,
                                            desc:`Beergroup`,name:`Beergroup`,designation:``,commander:`de Beer`,icon:`1sa`,
                                            pos:[818,682],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`,`Motorized`],team:`South African`,
                                                    desc:`D Company, 1st Battalion, Natal Mounted Rifles`,name:`D`,designation:`1 NMR`,commander:``,icon:`1sa`,
                                                    pos:[617,680],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ]
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`South African`,
                                                    desc:`D Company, 1st Battalion, Cape Town Highlanders`,name:`D`,designation:`1 CTH`,commander:``,icon:`1sa`,
                                                    pos:[657,760],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ]
                                                },{
                                                    level:4,type:[`Infantry`,`Motorized`],team:`South African`,
                                                    desc:`D Company, 2nd Battalion, Field Force`,name:`D`,designation:`2 FF`,commander:``,icon:`1sa`,
                                                    pos:[747,764],
                                                    elements:[
                                                        {type:`Motorized Infantry Company`},
                                                    ]
                                                },
                                            ],
                                        },{
                                            level:3,type:[`Artillery`,`Motorized`],team:`British`,
                                            desc:[`25th Battalion, Royal Artillery`,`25th Field Regiment, Royal Artillery`],name:`25`,designation:``,commander:`Pope`,icon:`4id`,
                                            pos:[1397,554],
                                            elements:[
                                                {
                                                    level:4,type:[`Artillery`,`Motorized`],team:`British`,
                                                    desc:[`A Battery, 25th Battalion, Royal Artillery`,`A Battery, 25th Field Regiment, Royal Artillery`],name:`A`,designation:`25 RA`,commander:``,icon:`4id`,
                                                    pos:[1240,684],
                                                    elements:[
                                                        {type:`Motorized Artillery Battery`},
                                                    ],
                                                },{
                                                    level:4,type:[`Artillery`,`Motorized`],team:`British`,
                                                    desc:[`B Battery, 25th Battalion, Royal Artillery`,`B Battery, 25th Field Regiment, Royal Artillery`],name:`B`,designation:`25 RA`,commander:``,icon:`4id`,
                                                    pos:[1506,584],
                                                    elements:[
                                                        {type:`Motorized Artillery Battery`},
                                                    ],
                                                },{
                                                    level:4,type:[`Artillery`,`Motorized`],team:`British`,
                                                    desc:[`C Battery, 25th Battalion, Royal Artillery`,`C Battery, 25th Field Regiment, Royal Artillery`],name:`C`,designation:`25 RA`,commander:``,icon:`4id`,
                                                    pos:[1343,370],
                                                    elements:[
                                                        {type:`Motorized Artillery Battery`},
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },{
                                    level:4,type:[`Artillery`],team:`British`,
                                    desc:`"Bush" Artillery`,name:`Bush`,designation:``,commander:``,icon:``,
                                    pos:[718,627],
                                    elements:[
                                        {type:`Small Artillery Battery`},
                                    ],
                                },{
                                    level:4,type:[`Mortar`],team:`British`,
                                    desc:`"Spigot" Mortars`,name:`Spigot`,designation:``,commander:``,icon:``,
                                    pos:[693,418],
                                    elements:[
                                        {type:`Mortar Company`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`60th Infantry Division "Sabratha"`,`60ª Divisione di Fanteria Autotransportabile "Sabratha"`],name:`60`,designation:`Sabratha`,commander:`Soldarelli`,icon:`sabratha`,
                            pos:[52,870],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`85th Infantry Regiment`,`85° Reggimento di Fanteria "Sabratha"`],name:`85`,designation:`Sabratha`,commander:`Grimaldi`,icon:`sabratha`,
                                    pos:[212,488],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`1st Battalion, 85th Infantry Regiment`,`I Battaglione Fucilieri, 85° Reggimento di Fanteria Motorizzata "Ancona"`],name:`1`,designation:`85`,commander:`Angelozzi`,icon:`sabratha`,
                                            pos:[459,346],
                                            elements:[
                                                {level:4,type:`Small Infantry Company`,team:`Italian`,desc:[`1st Company, 85th Infantry Regiment`,`1° Compagnia Fucilieri, 85° Reggimento di Fanteria Motorizzata "Ancona"`],name:`1`,designation:`85`,commander:``},
                                                {level:4,type:`Small Infantry Company`,team:`Italian`,desc:[`2nd Company, 85th Infantry Regiment`,`2° Compagnia Fucilieri, 85° Reggimento di Fanteria Motorizzata "Ancona"`],name:`2`,designation:`85`,commander:``},
                                                {level:4,type:`Small Infantry Company`,team:`Italian`,desc:[`3rd Company, 85th Infantry Regiment`,`3° Compagnia Fucilieri, 85° Reggimento di Fanteria Motorizzata "Ancona"`],name:`3`,designation:`85`,commander:``},
                                                {level:4,type:`Small Heavy Infantry Company`,team:`Italian`,desc:[`4th Company, 85th Infantry Regiment`,`4° Compagnia Fucilieri, 85° Reggimento di Fanteria Motorizzata "Ancona"`],name:`4`,designation:`85`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`2nd Battalion, 85th Infantry Regiment`,`II Battaglione Fucilieri, 85° Reggimento di Fanteria Motorizzata "Ancona"`],name:`2`,designation:`85`,commander:`Morosini`,icon:`sabratha`,
                                            pos:[469,522],
                                            elements:[
                                                {level:4,type:`Small Infantry Company`,team:`Italian`,desc:[`5th Company, 85th Infantry Regiment`,`5° Compagnia Fucilieri, 85° Reggimento di Fanteria Motorizzata "Ancona"`],name:`5`,designation:`85`,commander:``},
                                                {level:4,type:`Small Infantry Company`,team:`Italian`,desc:[`6th Company, 85th Infantry Regiment`,`6° Compagnia Fucilieri, 85° Reggimento di Fanteria Motorizzata "Ancona"`],name:`6`,designation:`85`,commander:``},
                                                {level:4,type:`Small Infantry Company`,team:`Italian`,desc:[`7th Company, 85th Infantry Regiment`,`7° Compagnia Fucilieri, 85° Reggimento di Fanteria Motorizzata "Ancona"`],name:`7`,designation:`85`,commander:``},
                                                {level:4,type:`Small Heavy Infantry Company`,team:`Italian`,desc:[`8th Company, 85th Infantry Regiment`,`8° Compagnia Fucilieri, 85° Reggimento di Fanteria Motorizzata "Ancona"`],name:`8`,designation:`85`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`86th Infantry Regiment`,`86° Reggimento di Fanteria "Sabratha"`],name:`86`,designation:`Sabratha`,commander:`Castrignanò`,icon:`sabratha`,
                                    pos:[461,908],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`1st Battalion, 86th Infantry Regiment`,`I Battaglione Fucilieri, 86° Reggimento di Fanteria Motorizzata "Ancona"`],name:`1`,designation:`86`,commander:`Velosa`,icon:`sabratha`,
                                            pos:[486,744],
                                            elements:[
                                                {level:4,type:`Small Infantry Company`,team:`Italian`,desc:[`1st Company, 86th Infantry Regiment`,`1° Compagnia Fucilieri, 86° Reggimento di Fanteria Motorizzata "Ancona"`],name:`1`,designation:`86`,commander:``},
                                                {level:4,type:`Small Infantry Company`,team:`Italian`,desc:[`2nd Company, 86th Infantry Regiment`,`2° Compagnia Fucilieri, 86° Reggimento di Fanteria Motorizzata "Ancona"`],name:`2`,designation:`86`,commander:``},
                                                {level:4,type:`Small Infantry Company`,team:`Italian`,desc:[`3rd Company, 86th Infantry Regiment`,`3° Compagnia Fucilieri, 86° Reggimento di Fanteria Motorizzata "Ancona"`],name:`3`,designation:`86`,commander:``},
                                                {level:4,type:`Small Heavy Infantry Company`,team:`Italian`,desc:[`4th Company, 86th Infantry Regiment`,`4° Compagnia Fucilieri, 86° Reggimento di Fanteria Motorizzata "Ancona"`],name:`4`,designation:`86`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`2nd Battalion, 86th Infantry Regiment`,`II Battaglione Fucilieri, 86° Reggimento di Fanteria Motorizzata "Ancona"`],name:`2`,designation:`86`,commander:`Piana`,icon:`sabratha`,
                                            pos:[758,870],
                                            elements:[
                                                {level:4,type:`Small Infantry Company`,team:`Italian`,desc:[`5th Company, 86th Infantry Regiment`,`5° Compagnia Fucilieri, 86° Reggimento di Fanteria Motorizzata "Ancona"`],name:`5`,designation:`86`,commander:``},
                                                {level:4,type:`Small Infantry Company`,team:`Italian`,desc:[`6th Company, 86th Infantry Regiment`,`6° Compagnia Fucilieri, 86° Reggimento di Fanteria Motorizzata "Ancona"`],name:`6`,designation:`86`,commander:``},
                                                {level:4,type:`Small Infantry Company`,team:`Italian`,desc:[`7th Company, 86th Infantry Regiment`,`7° Compagnia Fucilieri, 86° Reggimento di Fanteria Motorizzata "Ancona"`],name:`7`,designation:`86`,commander:``},
                                                {level:4,type:`Small Heavy Infantry Company`,team:`Italian`,desc:[`8th Company, 86th Infantry Regiment`,`8° Compagnia Fucilieri, 86° Reggimento di Fanteria Motorizzata "Ancona"`],name:`8`,designation:`86`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`Artillery Regrouping "Sabratha"`,`Raggruppamento Artiglieria "Sabratha"`],name:`RA`,designation:`Sabratha`,commander:`Ferrario`,icon:`sabratha`,
                                    pos:[221,747],
                                    elements:[
                                        {
                                            level:3,type:[`Artillery`],team:`Italian`,
                                            desc:[`283rd Group, 14th Frontier Guards Artillery Regiment`,`CCLXXXIII Gruppo, 14° Reggimento Artiglieria Guardia alla Frontiera`],name:`283`,designation:`Frontier\nGuard`,commander:`Parrella`,icon:`sabratha`,
                                            pos:[344,608],
                                            elements:[
                                                {level:4,type:`Small Fast Artillery Battery`,team:`Italian`,desc:[`1st Battery, 283rd Group, 14th Frontier Guards Artillery Regiment`,`1° Batteria, CCLXXXIII Gruppo, 14° Reggimento Artiglieria Guardia alla Frontiera`],name:`1`,designation:`283 FG`,commander:``},
                                                {level:4,type:`Small Fast Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 283rd Group, 14th Frontier Guards Artillery Regiment`,`2° Batteria, CCLXXXIII Gruppo, 14° Reggimento Artiglieria Guardia alla Frontiera`],name:`2`,designation:`283 FG`,commander:``},
                                                {level:4,type:`Small Fast Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 283rd Group, 14th Frontier Guards Artillery Regiment`,`3° Batteria, CCLXXXIII Gruppo, 14° Reggimento Artiglieria Guardia alla Frontiera`],name:`3`,designation:`283 FG`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`],team:`Italian`,
                                            desc:[`284th Group, 14th Frontier Guards Artillery Regiment`,`CCLXXXIV Gruppo, 14° Reggimento Artiglieria Guardia alla Frontiera`],name:`284`,designation:`Frontier\nGuard`,commander:`Rocchi`,icon:`sabratha`,
                                            pos:[373,836],
                                            elements:[
                                                {level:4,type:`Small Fast Artillery Battery`,team:`Italian`,desc:[`1st Battery, 284th Group, 14th Frontier Guards Artillery Regiment`,`1° Batteria, CCLXXXIV Gruppo, 14° Reggimento Artiglieria Guardia alla Frontiera`],name:`1`,designation:`284 FG`,commander:``},
                                                {level:4,type:`Small Fast Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 284th Group, 14th Frontier Guards Artillery Regiment`,`2° Batteria, CCLXXXIV Gruppo, 14° Reggimento Artiglieria Guardia alla Frontiera`],name:`2`,designation:`284 FG`,commander:``},
                                                {level:4,type:`Small Fast Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 284th Group, 14th Frontier Guards Artillery Regiment`,`3° Batteria, CCLXXXIV Gruppo, 14° Reggimento Artiglieria Guardia alla Frontiera`],name:`3`,designation:`284 FG`,commander:``},
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`102nd Infantry Division "Trento"`,`102ª Divisione di Fanteria Motorizzata "Trento"`],name:`102`,designation:`Trento`,commander:`Scotti`,icon:`trento`,
                            pos:[1511,1234],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`61st Infantry Regiment`,`61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[1091,1055],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`1st Battalion, 61st Infantry Regiment`,`I Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`,icon:`trento`,
                                            pos:[996,905],
                                            elements:[
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`1st Company, 61st Infantry Regiment`,`1° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`2nd Company, 61st Infantry Regiment`,`2° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`3rd Company, 61st Infantry Regiment`,`3° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`61`,commander:``},
                                                {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`4th Company, 61st Infantry Regiment`,`4° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`4`,designation:`61`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`2nd Battalion, 61st Infantry Regiment`,`II Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`,icon:`trento`,
                                            pos:[1243,951],
                                            elements:[
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`5th Company, 61st Infantry Regiment`,`5° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`5`,designation:`61`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`6th Company, 61st Infantry Regiment`,`6° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`6`,designation:`61`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`7th Company, 61st Infantry Regiment`,`7° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`7`,designation:`61`,commander:``},
                                                {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`8th Company, 61st Infantry Regiment`,`8° Compagnia Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`8`,designation:`61`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`62nd Infantry Regiment`,`62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[2086,768],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`1st Battalion, 62nd Infantry Regiment`,`I Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`,icon:`trento`,
                                            pos:[1828,639],
                                            elements:[
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`1st Company, 62nd Infantry Regiment`,`1° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`2nd Company, 62nd Infantry Regiment`,`2° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`3rd Company, 62nd Infantry Regiment`,`3° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`62`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`2nd Battalion, 62nd Infantry Regiment`,`II Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`,icon:`trento`,
                                            pos:[1915,486],
                                            elements:[
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`5th Company, 62nd Infantry Regiment`,`5° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`5`,designation:`62`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`6th Company, 62nd Infantry Regiment`,`6° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`6`,designation:`62`,commander:``},
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`7th Company, 62nd Infantry Regiment`,`7° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`7`,designation:`62`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`46th Artillery Regiment`,`46° Reggimento Artiglieria "Trento"`],name:`46`,designation:`Trento`,commander:`Grati`,icon:`trento`,
                                    pos:[975,1250],
                                    elements:[
                                        {
                                            level:3,type:[`Artillery`],team:`Italian`,
                                            desc:[`1st Group, 46th Artillery Regiment`,`I Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`1`,designation:`46`,commander:`Giannimi`,icon:`trento`,
                                            pos:[820,1017],
                                            elements:[
                                                {level:4,type:`Small Fast Artillery Battery`,team:`Italian`,desc:[`1st Battery, 46th Artillery Regiment`,`1° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`1`,designation:`46`,commander:``},
                                                {level:4,type:`Small Fast Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 46th Artillery Regiment`,`2° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`2`,designation:`46`,commander:``},
                                                {level:4,type:`Small Fast Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 46th Artillery Regiment`,`3° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`3`,designation:`46`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`],team:`Italian`,
                                            desc:[`3rd Group, 46th Artillery Regiment`,`III Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`3`,designation:`46`,commander:`Salvo`,icon:`trento`,
                                            pos:[2015,566],
                                            elements:[
                                                {level:4,type:`Small Fast Artillery Battery`,team:`Italian`,desc:[`9th Battery, 46th Artillery Regiment`,`9° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`9`,designation:`46`,commander:``},
                                                {level:4,type:`Small Fast Artillery Battery`,team:`Italian`,desc:[`11th Battery, 46th Artillery Regiment`,`11° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`11`,designation:`46`,commander:``},
                                                {level:4,type:`Small Fast Artillery Battery`,team:`Italian`,desc:[`12th Battery, 46th Artillery Regiment`,`12° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`12`,designation:`46`,commander:``},
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],reserve:[
            ],
        },{
            name:[`Frontier`,`Early`],
            term:`Frontier2`,
            unitScale:1,
            cityScale:0.8,
            city:[
                {name:`Gambut`,owner:1,type:1,pos:[101,28]},
                {name:`Gabr Saleh`,owner:1,type:0,pos:[119,782]},
                {name:`Bir Gibni`,owner:1,type:0,pos:[352,1071]},
                {name:`Gasr el Arid`,owner:1,type:0,pos:[353,207]},
                {name:`Bir et Tgheit`,owner:1,type:0,pos:[514,863]},
                {name:`Bir el Hariga`,owner:1,type:0,pos:[535,336]},
                {name:`Umm Maalif`,owner:1,type:0,pos:[553,496]},
                {name:`Bir el Baheira`,owner:1,type:0,pos:[570,139]},
                {name:`Bir Bu Deheua`,owner:1,type:0,pos:[576,898]},
                {name:`Omar Nuovo`,owner:1,type:0,pos:[658,915]},

                {name:`Gabr Lachem`,owner:1,type:0,pos:[669,700]},
                {name:`Sidi Omar`,owner:-1,type:0,pos:[715,976]},
                {name:`Gabr el Gerrari`,owner:1,type:0,pos:[738,779]},
                {name:`Gasr el Abid`,owner:0,type:0,pos:[744,1248]},
                {name:`Libyan Omar`,owner:1,type:0,pos:[761,918]},
                {name:`Bir Sheferzen`,owner:0,type:0,pos:[778,1115]},
                {name:`Point 208`,owner:1,type:0,pos:[794,658]},
                {name:`Bir Beder`,owner:1,type:0,pos:[838,523]},
                {name:`Sidi Azeiz`,owner:1,type:0,pos:[844,405]},
                {name:`Bir el Harush`,owner:0,type:0,pos:[845,1008]},

                {name:`Bir Ghirba`,owner:1,type:0,pos:[875,753]},
                {name:`Bir el Menastir`,owner:1,type:0,pos:[876,162]},
                {name:`Ghot Adhidiba`,owner:1,type:0,pos:[904,885]},
                {name:`Qaryet Abu Fans`,owner:0,type:0,pos:[969,976]},
                {name:`Bir Rilet Uaar`,owner:1,type:0,pos:[1000,340]},
                {name:`Carmuset Naaim`,owner:1,type:0,pos:[1007,148]},
                {name:`Carmuset Scegheila`,owner:1,type:0,pos:[1036,206]},
                {name:`Bir el Ghereidia`,owner:1,type:0,pos:[1050,305]},
                {name:`Point 206`,owner:1,type:0,pos:[1038,754]},
                {name:`Alam Abu Diyak`,owner:1,type:0,pos:[1051,831]},

                {name:`Bir el Masri`,owner:1,type:0,pos:[1066,237]},
                {name:`Fort Capuzzo`,owner:1,type:0,pos:[1071,636]},
                {name:`Bir Salah el Gebescim`,owner:1,type:0,pos:[1106,356]},
                {name:`Sidi Suleiman`,owner:0,type:0,pos:[1125,1002]},
                {name:`Bir Wair`,owner:1,type:0,pos:[1119,693]},
                {name:`Musaid`,owner:1,type:0,pos:[1152,670]},
                {name:`Bir el Khireigat`,owner:0,type:0,pos:[1155,1189]},
                {name:`Qabr el Qaha`,owner:1,type:0,pos:[1155,868]},
                {name:`Bardia`,owner:1,type:1,pos:[1167,269]},
                {name:`Point 191`,owner:1,type:0,pos:[1171,741]},

                {name:`Point 207`,owner:0,type:0,pos:[1178,950]},
                {name:`Gebbanet Tutufahim`,owner:1,type:0,pos:[1196,419]},
                {name:`Point 187`,owner:1,type:0,pos:[1217,834]},
                {name:`Bir er Ramla`,owner:1,type:0,pos:[1242,477]},
                {name:`Sollum Barracks`,owner:1,type:0,pos:[1255,641]},
                {name:`Sollum`,owner:1,type:0,pos:[1277,677]},
                {name:`Halfaya Pass`,owner:1,type:0,pos:[1301,834]},
                {name:`Qalala`,owner:1,type:0,pos:[1329,776]},
                {name:`Bir Nuh`,owner:0,type:0,pos:[1329,938]},
                {name:`Bir el Siweiyat`,owner:0,type:0,pos:[1418,912]},

                {name:`Alam Elkidad`,owner:0,type:0,pos:[1453,818]},
                {name:`Halfway House`,owner:0,type:0,pos:[1578,1191]},
                {name:`Byut Fadit`,owner:0,type:0,pos:[1580,835]},
                {name:`Iluet Elscin`,owner:0,type:0,pos:[1597,936]},
                {name:`Sauani el Augerin`,owner:0,type:0,pos:[1676,1080]},
                {name:`Buq Buq`,owner:0,type:0,pos:[1909,801]},
                {name:`Saryet et Sabil`,owner:0,type:0,pos:[1974,1208]},
                {name:`Alam Samalus`,owner:0,type:0,pos:[2026,959]},
                {name:`Nibeiwa`,owner:0,type:0,pos:[2302,986]},
                {name:`Sidi Barrani`,owner:0,type:1,pos:[2333,667]},
            ],connect:[
                {name:[`Sidi Barrani`,`Buq Buq`]},
                {name:[`Byut Fadit`,`Buq Buq`]},
                {name:[`Alam Elkidad`,`Byut Fadit`]},
                {name:[`Alam Elkidad`,`Qalala`]},
                {name:[`Qalala`,`Sollum`]},
                {name:[`Sollum`,`Musaid`]},
                {name:[`Musaid`,`Fort Capuzzo`]},
                {name:[`Fort Capuzzo`,`Bir Salah el Gebescim`]},
                {name:[`Bir Salah el Gebescim`,`Bardia`]},
                {name:[`Bardia`,`Bir el Masri`]},

                {name:[`Bir el Masri`,`Carmuset Scegheila`]},
                {name:[`Carmuset Scegheila`,`Bir el Menastir`]},
                {name:[`Bir el Menastir`,`Bir el Baheira`]},
                {name:[`Bir el Baheira`,`Gasr el Arid`]},
                {name:[`Bir Salah el Gebescim`,`Sidi Azeiz`]},
                {name:[`Sidi Azeiz`,`Fort Capuzzo`]},
                {name:[`Sidi Azeiz`,`Bir el Hariga`]},
                {name:[`Bir el Hariga`,`Gasr el Arid`]},
                {name:[`Gasr el Arid`,`Gambut`]},
                {name:[`Fort Capuzzo`,`Point 206`]},

                {name:[`Point 206`,`Alam Abu Diyak`]},
                {name:[`Alam Abu Diyak`,`Point 207`]},
                {name:[`Sidi Suleiman`,`Point 207`]},
                {name:[`Point 207`,`Point 187`]},
                {name:[`Halfaya Pass`,`Qalala`]},
                {name:[`Halfaya Pass`,`Bir Nuh`]},
                {name:[`Fort Capuzzo`,`Bir Ghirba`]},
                {name:[`Bir Ghirba`,`Gabr el Gerrari`]},
                {name:[`Gabr el Gerrari`,`Omar Nuovo`]},
                {name:[`Omar Nuovo`,`Sidi Omar`]},

                {name:[`Sidi Omar`,`Bir el Harush`]},
                {name:[`Bir el Harush`,`Bir Sheferzen`]},
                {name:[`Bir el Harush`,`Qaryet Abu Fans`]},
                {name:[`Qaryet Abu Fans`,`Alam Abu Diyak`]},
                {name:[`Qaryet Abu Fans`,`Sidi Suleiman`]},
                {name:[`Sidi Suleiman`,`Bir el Khireigat`]},
                {name:[`Bir el Khireigat`,`Halfway House`]},
                {name:[`Bir Nuh`,`Bir el Siweiyat`]},
                {name:[`Bir el Siweiyat`,`Alam Elkidad`]},
                {name:[`Halfway House`,`Sauani el Augerin`]},

                {name:[`Iluet Elscin`,`Bir el Siweiyat`]},
                {name:[`Iluet Elscin`,`Byut Fadit`]},
                {name:[`Iluet Elscin`,`Sauani el Augerin`]},
                {name:[`Sauani el Augerin`,`Alam Samalus`]},
                {name:[`Alam Samalus`,`Buq Buq`]},
                {name:[`Alam Samalus`,`Saryet et Sabil`]},
                {name:[`Saryet et Sabil`,`Sauani el Augerin`]},
                {name:[`Sidi Barrani`,`Nibeiwa`]},
                {name:[`Nibeiwa`,`Alam Samalus`]},
                {name:[`Bir Nuh`,`Point 207`]},

                {name:[`Gabr el Gerrari`,`Gabr Lachem`]},
                {name:[`Gabr Lachem`,`Umm Maalif`]},
                {name:[`Umm Maalif`,`Bir el Hariga`]},
                {name:[`Gabr Saleh`,`Umm Maalif`]},
                {name:[`Bir Sheferzen`,`Gasr el Abid`]},
                {name:[`Gasr el Abid`,`Bir Gibni`]},
                {name:[`Bir Gibni`,`Gabr Saleh`]},
                {name:[`Gasr el Abid`,`Bir el Khireigat`]},
                {name:[`Gabr Lachem`,`Bir et Tgheit`]},
                {name:[`Bir et Tgheit`,`Bir Bu Deheua`]},
                
                {name:[`Bir Bu Deheua`,`Omar Nuovo`]},
                {name:[`Omar Nuovo`,`Libyan Omar`]},
                {name:[`Libyan Omar`,`Ghot Adhidiba`]},
                {name:[`Ghot Adhidiba`,`Alam Abu Diyak`]},
                {name:[`Alam Abu Diyak`,`Point 187`]},
                {name:[`Point 187`,`Halfaya Pass`]},
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
                    name:`Operation Brevity`,
                    strength:{name:`Companies`,num:[[32],[18,14]]},partition:[[0],[1],[2]],bonus:1,
                    unit:[
                        {
                            level:0,type:[`Infantry`,`Tank`],team:`British`,
                            desc:`Frontier Force`,name:`Frontier`,designation:``,commander:`Gott`,icon:``,
                            pos:[1676,1080],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Artillery`,`Motorized`],team:`British`,
                                    desc:`7th Support Group`,name:`7`,designation:``,commander:`Gott`,icon:`7sg`,
                                    pos:[1597,936],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Renton`,icon:`7sg`,
                                            pos:[1435,865],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`B Company, 2nd Battalion, Rifle Brigade`,name:`B`,designation:`2 RB`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`C Company, 2nd Battalion, Rifle Brigade`,name:`C`,designation:`2 RB`,commander:``},
                                                {level:4,type:`Motorized Heavy Infantry Company`,team:`British`,desc:`S Company, 2nd Battalion, Rifle Brigade`,name:`S`,designation:`2 RB`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`,`Motorized`],team:`British`,
                                            desc:[`60th (North Midland) Battalion, Royal Artillery`,`60th (North Midland) Field Regiment, Royal Artillery`],name:`60`,designation:`North\nMidland`,commander:`Hallifax`,icon:`7sg`,
                                            pos:[1580,845],
                                            elements:[
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`A Battery, 60th (North Midland) Battalion, Royal Artillery`,`A Battery, 60th (North Midland) Field Regiment, Royal Artillery`],name:`A`,designation:`60 RA`,commander:``},
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`B Battery, 60th (North Midland) Battalion, Royal Artillery`,`B Battery, 60th (North Midland) Field Regiment, Royal Artillery`],name:`B`,designation:`60 RA`,commander:``},
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`C Battery, 60th (North Midland) Battalion, Royal Artillery`,`C Battery, 60th (North Midland) Field Regiment, Royal Artillery`],name:`C`,designation:`60 RA`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Tank`],team:`Australian`,
                                            desc:[`6th Australian Division Tank Battalion`,`6th Australian Divisional Cavalry`],name:`6`,designation:`Divisional\nCavalry`,commander:`Morrison`,icon:``,
                                            pos:[1488,965],
                                            elements:[
                                                {level:4,type:`Light Tank Company`,team:`Australian`,desc:[`A Company, 6th Australian Division Tank Battalion`,`A Company, 6th Australian Divisional Cavalry`],name:`A`,designation:`6 DC`,commander:``},
                                                {level:4,type:`Light Tank Company`,team:`Australian`,desc:[`B Company, 6th Australian Division Tank Battalion`,`B Company, 6th Australian Divisional Cavalry`],name:`B`,designation:`6 DC`,commander:``},
                                                {level:4,type:`Light Tank Company`,team:`Australian`,desc:[`C Company, 6th Australian Division Tank Battalion`,`C Company, 6th Australian Divisional Cavalry`],name:`C`,designation:`6 DC`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`22nd Guards Brigade`,name:`22`,designation:`Guards`,commander:`Erskine`,icon:``,
                                    pos:[1287,1040],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`1st Battalion, The Buffs (Royal East Kent Regiment)`,name:`1`,designation:`Buffs`,commander:`Knocker`,icon:``,
                                            pos:[1125,1002],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`A Company, 1st Battalion, The Buffs (Royal East Kent Regiment)`,name:`A`,designation:`1 Buffs`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`B Company, 1st Battalion, The Buffs (Royal East Kent Regiment)`,name:`B`,designation:`1 Buffs`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`C Company, 1st Battalion, The Buffs (Royal East Kent Regiment)`,name:`C`,designation:`1 Buffs`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`D Company, 1st Battalion, The Buffs (Royal East Kent Regiment)`,name:`D`,designation:`1 Buffs`,commander:``},
                                            ]
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`2nd Battalion, Scots Guards`,name:`2`,designation:`Scots\nGuards`,commander:`Mayfield`,icon:``,
                                            pos:[1178,950],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`A Company, 2nd Battalion, Scots Guards`,name:`A`,designation:`2 SG`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`B Company, 2nd Battalion, Scots Guards`,name:`B`,designation:`2 SG`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`C Company, 2nd Battalion, Scots Guards`,name:`C`,designation:`2 SG`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`D Company, 2nd Battalion, Scots Guards`,name:`D`,designation:`2 SG`,commander:``},
                                            ]
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`3rd Battalion, Coldstream Guards`,name:`3`,designation:`Coldstream\nGuards`,commander:`Moubray`,icon:``,
                                            pos:[1250,942],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`A Company, 3rd Battalion, Coldstream Guards`,name:`A`,designation:`3 CG`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`B Company, 3rd Battalion, Coldstream Guards`,name:`B`,designation:`3 CG`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`C Company, 3rd Battalion, Coldstream Guards`,name:`C`,designation:`3 CG`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`D Company, 3rd Battalion, Coldstream Guards`,name:`D`,designation:`3 CG`,commander:``},
                                            ]
                                        },
                                    ],
                                },{
                                    level:1,type:[`Tank`],team:`British`,
                                    desc:[`4th Armored Brigade`,`4th Armoured Brigade`],name:`4`,designation:``,commander:`Gatehouse`,icon:`4ab`,
                                    pos:[995,1088],
                                    elements:[
                                        {
                                            level:3,type:[`Tank`,`Recon`,`Tracked`],team:`British`,
                                            desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`,icon:`7a`,
                                            pos:[744,1248],
                                            elements:[
                                                {level:4,type:`Armored Car Company`,team:`British`,desc:`A Squadron, 1st King's Dragoon Guards`,name:`A`,designation:`1 KDG`,commander:``},
                                                {level:4,type:`Armored Car Company`,team:`British`,desc:`B Squadron, 1st King's Dragoon Guards`,name:`B`,designation:`1 KDG`,commander:``},
                                                {level:4,type:`Armored Car Company`,team:`British`,desc:`C Squadron, 1st King's Dragoon Guards`,name:`C`,designation:`1 KDG`,commander:``},
                                                {level:4,type:`Armored Car Company`,team:`British`,desc:`D Squadron, 1st King's Dragoon Guards`,name:`D`,designation:`1 KDG`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Tank`,`Heavy`],team:`British`,
                                            desc:[`4th Battalion, Royal Tank Regiment`,`4th Royal Tank Regiment`],name:`4`,designation:`Royal Tank\nRegiment`,commander:`O'Carroll`,icon:`4ab`,
                                            pos:[778,1115],
                                            elements:[
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`A Squadron, 4th Battalion, Royal Tank Regiment`,`A Squadron, 4th Royal Tank Regiment`],name:`A`,designation:`4 RTR`,commander:``},
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`B Squadron, 4th Battalion, Royal Tank Regiment`,`B Squadron, 4th Royal Tank Regiment`],name:`B`,designation:`4 RTR`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Artillery`,`Motorized`],team:`British`,
                                            desc:`Jock Column`,name:`Jock`,designation:``,commander:`Campbell`,icon:`7sg`,
                                            pos:[845,1008],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`C Company, 1st Battalion, King's Royal Rifle Corps`,name:`C`,designation:`1 KRRC`,commander:``},
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`A Battery, 4th Battalion, Royal Horse Artillery`,`A Battery, 4th Regiment, Royal Horse Artillery`],name:`A`,designation:`4 RHA`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Artillery`,`Motorized`],team:`British`,
                                            desc:`Jock Column`,name:`Jock`,designation:``,commander:`Currie`,icon:`7sg`,
                                            pos:[969,976],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`D Company, 1st Battalion, King's Royal Rifle Corps`,name:`D`,designation:`1 KRRC`,commander:``},
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`B Battery, 4th Battalion, Royal Horse Artillery`,`B Battery, 4th Regiment, Royal Horse Artillery`],name:`B`,designation:`4 RHA`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`A Company, 2nd Battalion, Rifle Brigade`,name:`A`,designation:`2 RB`,commander:``,icon:`7sg`,
                                            pos:[1155,1189],
                                            elements:[
                                                {type:`Motorized Infantry Company`},
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Fortress`],team:`Italian`,
                            desc:[`Halfaya Garrison`,`Colonna Halfaya`],name:`Halfaya`,designation:``,commander:``,icon:`trento`,
                            pos:[1315,806],
                            elements:[
                                {level:4,type:`Motorcycle Bersaglieri Company`,team:`Italian`,desc:[`1st Company, 8th Bersaglieri Battalion`,`1° Compagnia, 8° Battaglione Bersaglieri`],name:`1`,designation:`8\nBersaglieri`,commander:``},
                                {level:4,type:`Anti-Tank Company`,team:`Italian`,desc:[`102nd Anti-Tank Company`,`102° Compagnia Anticarro`],name:`102`,designation:``,commander:``},
                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`10th Battery, 46th Artillery Regiment`,`10° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`10`,designation:`46`,commander:``},
                            ],
                        },{
                            level:3,type:[`Fortress`],team:`Italian`,
                            desc:[`Capuzzo Garrison`,`Colonna Capuzzo`],name:`Capuzzo`,designation:``,commander:``,icon:`trento`,
                            pos:[1071,636],
                            elements:[
                                {level:4,type:`Motorcycle Bersaglieri Company`,team:`Italian`,desc:[`2nd Company, 8th Bersaglieri Battalion`,`2° Compagnia, 8° Battaglione Bersaglieri`],name:`2`,designation:`8\nBersaglieri`,commander:``},
                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`11th Battery, 46th Artillery Regiment`,`11° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`11`,designation:`46`,commander:``},
                            ],
                        },{
                            level:1,type:[`Tank`],team:`German`,
                            desc:`Kampfgruppe von Herff`,name:`KG`,designation:`115`,commander:`von Herff`,icon:`15pz`,
                            pos:[535,336],
                            elements:[
                                {
                                    level:3,type:[`Tank`],team:`German`,
                                    desc:[`2nd Battalion, 8th Panzer Regiment`,`II./Panzer-Regiment 8`],name:`2`,designation:`8`,commander:`Wahl`,icon:`15pz`,
                                    pos:[844,405],
                                    elements:[
                                        {level:4,type:`Medium Tank Company`,team:`German`,desc:[`5th Company, 8th Panzer Regiment`,`5./Panzer-Regiment 8`],name:`5`,designation:`8`,commander:``},
                                        {level:4,type:`Medium Tank Company`,team:`German`,desc:[`6th Company, 8th Panzer Regiment`,`6./Panzer-Regiment 8`],name:`6`,designation:`8`,commander:``},
                                        {level:4,type:`Armed Medium Tank Company`,team:`German`,desc:[`7th Company, 8th Panzer Regiment`,`7./Panzer-Regiment 8`],name:`7`,designation:`8`,commander:``},
                                    ]
                                },{
                                    level:3,type:[`Infantry`,`Motorcycle`],team:`German`,
                                    desc:[`15th Motorcycle Battalion`,`Kradschützen-Bataillon 15`],name:`15`,designation:``,commander:`Ehle`,icon:`15pz`,
                                    pos:[553,496],
                                    elements:[
                                        {level:4,type:`Motorcycle Infantry Company`,team:`German`,desc:[`1st Company, 15th Motorcycle Battalion`,`1./Kradschützen-Bataillon 15`],name:`1`,designation:`15`,commander:``},
                                        {level:4,type:`Motorcycle Infantry Company`,team:`German`,desc:[`2nd Company, 15th Motorcycle Battalion`,`2./Kradschützen-Bataillon 15`],name:`2`,designation:`15`,commander:``},
                                        {level:4,type:`Motorcycle Infantry Company`,team:`German`,desc:[`3rd Company, 15th Motorcycle Battalion`,`3./Kradschützen-Bataillon 15`],name:`3`,designation:`15`,commander:``},
                                        {level:4,type:`Motorcycle Machine Gun Company`,team:`German`,desc:[`4th Company, 15th Motorcycle Battalion`,`4./Kradschützen-Bataillon 15`],name:`4`,designation:`15`,commander:`Paulewicz`},
                                        {level:4,type:`Motorcycle Heavy Infantry Company`,team:`German`,desc:[`5th Company, 15th Motorcycle Battalion`,`5./Kradschützen-Bataillon 15`],name:`5`,designation:`15`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`German`,
                                    desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`van Nes`,icon:`15pz`,
                                    pos:[352,1071],
                                    elements:[
                                        {level:4,type:`Armored Car Company`,team:`German`,desc:[`1st Company, 33rd Reconnaissance Battalion`,`1./Aufklärungs-Abteilung 33`],name:`1`,designation:`33`,commander:``},
                                        {level:4,type:`Motorcycle Infantry Company`,team:`German`,desc:[`2nd Company, 33rd Reconnaissance Battalion`,`2./Aufklärungs-Abteilung 33`],name:`2`,designation:`33`,commander:``},
                                        {level:4,type:`Motorized Heavy Reconnaissance Company`,team:`German`,desc:[`3rd Company, 33rd Reconnaissance Battalion`,`3./Aufklärungs-Abteilung 33`],name:`3`,designation:`33`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Infantry`],team:`Italian`,
                                    desc:[`1st Battalion, 62nd Infantry Regiment`,`I Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`,icon:`trento`,
                                    pos:[838,523],
                                    elements:[
                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`1st Company, 62nd Infantry Regiment`,`1° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:``},
                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`2nd Company, 62nd Infantry Regiment`,`2° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:``},
                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`3rd Company, 62nd Infantry Regiment`,`3° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`62`,commander:``},
                                        {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`4th Company, 62nd Infantry Regiment`,`4° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`4`,designation:`62`,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Infantry`,`Motorized`],team:`German`,
                            desc:[`Battle Group von Esebeck`,`Kampfgruppe von Esebeck`],name:`KG`,designation:`15`,commander:`von Esebeck`,icon:`15pz`,
                            pos:[111,38],
                            elements:[
                                {level:4,type:`Motorized Machine Gun Company`,team:`German`,desc:[`1st Company, 2nd Machine Gun Battalion`,`1./Maschinengewehr-Bataillon 2`],name:`1`,designation:`2`,commander:``},
                                {level:4,type:`Motorized Machine Gun Company`,team:`German`,desc:[`2nd Company, 2nd Machine Gun Battalion`,`2./Maschinengewehr-Bataillon 2`],name:`2`,designation:`2`,commander:``},
                                {level:4,type:`Motorized Machine Gun Company`,team:`German`,desc:[`3rd Company, 2nd Machine Gun Battalion`,`3./Maschinengewehr-Bataillon 2`],name:`3`,designation:`2`,commander:``},
                                {level:4,type:`Motorized Heavy Machine Gun Company`,team:`German`,desc:[`4th (Heavy) Company, 2nd Machine Gun Battalion`,`4./Maschinengewehr-Bataillon 2`],name:`4`,designation:`2`,commander:``},
                                {level:4,type:`Motorized Small Artillery Battery`,team:`German`,desc:[`4th Battery, 33rd Artillery Regiment`,`4./Artillerie-Regiment (mot.) 33 "Halb und Halb"`],name:`4`,designation:`33`,commander:``},
                                {level:4,type:`Medium Tank Company`,team:`German`,desc:[`1st Company, 8th Panzer Regiment`,`1./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:``},
                                {level:4,type:`Motorized Anti-Tank`,team:`German`,desc:[`1st Company, 33rd Anti-Tank Battalion`,`1./Panzerjäger-Abteilung 33`],name:`1`,designation:`33`,commander:``},

                            ],
                        },{
                            level:3,type:[`Infantry`],team:`Italian`,
                            desc:[`2nd Battalion, 62nd Infantry Regiment`,`II Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`,icon:`trento`,
                            pos:[1153,292],
                            elements:[
                                {
                                    level:4,type:[`Infantry`],team:`Italian`,
                                    desc:[`5th Company, 62nd Infantry Regiment`,`5° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`5`,designation:`62`,commander:``,icon:`trento`,
                                    pos:[1084,199],
                                    elements:[
                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`5th Company, 62nd Infantry Regiment`,`5° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`5`,designation:`62`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Infantry`],team:`Italian`,
                                    desc:[`6th Company, 62nd Infantry Regiment`,`6° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`6`,designation:`62`,commander:``,icon:`trento`,
                                    pos:[1063,276],
                                    elements:[
                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`6th Company, 62nd Infantry Regiment`,`6° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`6`,designation:`62`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Infantry`],team:`Italian`,
                                    desc:[`7th Company, 62nd Infantry Regiment`,`7° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`7`,designation:`62`,commander:``,icon:`trento`,
                                    pos:[1111,356],
                                    elements:[
                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`7th Company, 62nd Infantry Regiment`,`7° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`7`,designation:`62`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Infantry`,`Heavy`],team:`Italian`,
                                    desc:[`8th Company, 62nd Infantry Regiment`,`8° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`8`,designation:`62`,commander:``,icon:`trento`,
                                    pos:[1196,414],
                                    elements:[
                                        {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`8th Company, 62nd Infantry Regiment`,`8° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`8`,designation:`62`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Artillery`],team:`Italian`,
                                    desc:[`12th Battery, 46th Artillery Regiment`,`12° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`12`,designation:`46`,commander:``,icon:`trento`,
                                    pos:[1189,338],
                                    elements:[
                                        {type:`Small Artillery Battery`},
                                    ],
                                },
                            ],
                        },
                    ],
                },{
                    name:`Operation Battleaxe`,
                    strength:{name:`Companies`,num:[[50],[30,20]]},partition:[[0],[1],[2]],bonus:1,
                    unit:[
                        {
                            level:0,type:[`Tank`],team:`British`,
                            desc:[`7th Armored Division`,`7th Armoured Division`],name:`7`,designation:``,commander:`Creagh`,icon:`7a`,
                            pos:[1676,1080],
                            elements:[
                                {
                                    level:1,type:[`Tank`],team:`British`,
                                    desc:[`4th Armored Brigade`,`4th Armoured Brigade`],name:`4`,designation:``,commander:`Gatehouse`,icon:`4ab`,
                                    pos:[995,1088],
                                    elements:[
                                        {
                                            level:3,type:[`Tank`,`Heavy`],team:`British`,
                                            desc:[`7th Battalion, Royal Tank Regiment`,`7th Royal Tank Regiment`],name:`7`,designation:`Royal Tank\nRegiment`,commander:`Groves`,icon:`4ab`,
                                            pos:[969,976],
                                            elements:[
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`A Squadron, 7th Battalion, Royal Tank Regiment`,`A Squadron, 7th Royal Tank Regiment`],name:`A`,designation:`7 RTR`,commander:``},
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`B Squadron, 7th Battalion, Royal Tank Regiment`,`B Squadron, 7th Royal Tank Regiment`],name:`B`,designation:`7 RTR`,commander:``},
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`C Squadron, 7th Battalion, Royal Tank Regiment`,`C Squadron, 7th Royal Tank Regiment`],name:`C`,designation:`7 RTR`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Artillery`,`Motorized`],team:`British`,
                                    desc:`7th Support Group`,name:`7`,designation:``,commander:`Gott`,icon:`7sg`,
                                    pos:[1155,1189],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:`de Salis`,icon:`7sg`,
                                            pos:[845,1008],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`A Company, 1st Battalion, King's Royal Rifle Corps`,name:`A`,designation:`1 KRRC`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`B Company, 1st Battalion, King's Royal Rifle Corps`,name:`B`,designation:`1 KRRC`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`C Company, 1st Battalion, King's Royal Rifle Corps`,name:`C`,designation:`1 KRRC`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`D Company, 1st Battalion, King's Royal Rifle Corps`,name:`D`,designation:`1 KRRC`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Renton`,icon:`7sg`,
                                            pos:[778,1115],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`A Company, 2nd Battalion, Rifle Brigade`,name:`A`,designation:`2 RB`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`B Company, 2nd Battalion, Rifle Brigade`,name:`B`,designation:`2 RB`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`C Company, 2nd Battalion, Rifle Brigade`,name:`C`,designation:`2 RB`,commander:``},
                                                {level:4,type:`Motorized Heavy Infantry Company`,team:`British`,desc:`S Company, 2nd Battalion, Rifle Brigade`,name:`S`,designation:`2 RB`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`,`Motorized`],team:`British`,
                                            desc:[`2nd Battalion, Royal Horse Artillery`,`2nd Regiment, Royal Horse Artillery`],name:`2`,designation:`Royal\nHorse`,commander:`Aikenhead`,icon:`7sg`,
                                            pos:[865,1197],
                                            elements:[
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`A Battery, 2nd Battalion, Royal Horse Artillery`,`A Battery, 2nd Regiment, Royal Horse Artillery`],name:`A`,designation:`2 RHA`,commander:``},
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`B Battery, 2nd Battalion, Royal Horse Artillery`,`B Battery, 2nd Regiment, Royal Horse Artillery`],name:`B`,designation:`2 RHA`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`,`Motorized`],team:`British`,
                                            desc:[`3rd Battalion, Royal Horse Artillery`,`3rd Regiment, Royal Horse Artillery`],name:`3`,designation:`Royal\nHorse`,commander:`Wilson`,icon:`7sg`,
                                            pos:[941,1161],
                                            elements:[
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`A Battery, 3rd Battalion, Royal Horse Artillery`,`A Battery, 3rd Regiment, Royal Horse Artillery`],name:`A`,designation:`3 RHA`,commander:``},
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`B Battery, 3rd Battalion, Royal Horse Artillery`,`B Battery, 3rd Regiment, Royal Horse Artillery`],name:`B`,designation:`3 RHA`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`,`Motorized`],team:`British`,
                                            desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:`Royal\nHorse`,commander:`Campbell`,icon:`7sg`,
                                            pos:[896,1095],
                                            elements:[
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`A Battery, 4th Battalion, Royal Horse Artillery`,`A Battery, 4th Regiment, Royal Horse Artillery`],name:`A`,designation:`4 RHA`,commander:``},
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`B Battery, 4th Battalion, Royal Horse Artillery`,`B Battery, 4th Regiment, Royal Horse Artillery`],name:`B`,designation:`4 RHA`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`British`,
                                    desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`,icon:`7a`,
                                    pos:[744,1248],
                                    elements:[
                                        {level:4,type:`Armored Car Company`,team:`British`,desc:`A Squadron, 1st King's Dragoon Guards`,name:`A`,designation:`1 KDG`,commander:``},
                                        {level:4,type:`Armored Car Company`,team:`British`,desc:`B Squadron, 1st King's Dragoon Guards`,name:`B`,designation:`1 KDG`,commander:``},
                                        {level:4,type:`Armored Car Company`,team:`British`,desc:`C Squadron, 1st King's Dragoon Guards`,name:`C`,designation:`1 KDG`,commander:``},
                                        {level:4,type:`Armored Car Company`,team:`British`,desc:`D Squadron, 1st King's Dragoon Guards`,name:`D`,designation:`1 KDG`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Engineer`,`Motorized`],team:`British`,
                                    desc:[`4th Field Company, Royal Engineers`,`4th Field Squadron, Royal Engineers`],name:`4`,designation:``,commander:``,icon:`7a`,
                                    pos:[1597,936],
                                    elements:[
                                        {type:`Motorized Engineer Company`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:`4th Indian Division`,name:`4`,designation:``,commander:`Messervy`,icon:`4id`,
                            pos:[1909,821],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`11th Indian Infantry Brigade`,name:`11`,designation:``,commander:`Savory`,icon:`4id`,
                                    pos:[1580,850],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`2nd Battalion, Queen's Own Cameron Highlanders`,name:`2`,designation:`Cameron\nHighlanders`,commander:`Duncan`,icon:`4id`,
                                            pos:[1329,938],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`A Company, 2nd Battalion, Queen's Own Cameron Highlanders`,name:`A`,designation:`2 QOCH`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`B Company, 2nd Battalion, Queen's Own Cameron Highlanders`,name:`B`,designation:`2 QOCH`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`C Company, 2nd Battalion, Queen's Own Cameron Highlanders`,name:`C`,designation:`2 QOCH`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`D Company, 2nd Battalion, Queen's Own Cameron Highlanders`,name:`D`,designation:`2 QOCH`,commander:``},
                                            ]
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`Indian`,
                                            desc:`1st Battalion, 6th Rajputana Rifles`,name:`1/6`,designation:`Rajputana`,commander:`Quayle`,icon:`4id`,
                                            pos:[1418,912],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`Indian`,desc:`A Company, 1st Battalion, 6th Rajputana Rifles`,name:`A`,designation:`1/6 Rajput`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`Indian`,desc:`B Company, 1st Battalion, 6th Rajputana Rifles`,name:`B`,designation:`1/6 Rajput`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`Indian`,desc:`C Company, 1st Battalion, 6th Rajputana Rifles`,name:`C`,designation:`1/6 Rajput`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`Indian`,desc:`D Company, 1st Battalion, 6th Rajputana Rifles`,name:`D`,designation:`1/6 Rajput`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`Indian`,
                                            desc:`2nd Battalion, 5th Mahratta Light Infantry`,name:`2/5`,designation:`Mahratta`,commander:`Doyle`,icon:`4id`,
                                            pos:[1453,828],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`Indian`,desc:`A Company, 2nd Battalion, 5th Mahratta Light Infantry`,name:`A`,designation:`2/5 MLI`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`Indian`,desc:`B Company, 2nd Battalion, 5th Mahratta Light Infantry`,name:`B`,designation:`2/5 MLI`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`Indian`,desc:`C Company, 2nd Battalion, 5th Mahratta Light Infantry`,name:`C`,designation:`2/5 MLI`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`Indian`,desc:`D Company, 2nd Battalion, 5th Mahratta Light Infantry`,name:`D`,designation:`2/5 MLI`,commander:``},
                                            ]
                                        },{
                                            level:3,type:[`Tank`,`Heavy`],team:`British`,
                                            desc:[`4th Battalion, Royal Tank Regiment`,`4th Royal Tank Regiment`],name:`4`,designation:`Royal Tank\nRegiment`,commander:`O'Carroll`,icon:`4ab`,
                                            pos:[1445,1011],
                                            elements:[
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`A Squadron, 4th Battalion, Royal Tank Regiment`,`A Squadron, 4th Royal Tank Regiment`],name:`A`,designation:`4 RTR`,commander:``},
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`B Squadron, 4th Battalion, Royal Tank Regiment`,`B Squadron, 4th Royal Tank Regiment`],name:`B`,designation:`4 RTR`,commander:``},
                                                {level:4,type:`Heavy Tank Company`,team:`British`,desc:[`C Squadron, 4th Battalion, Royal Tank Regiment`,`C Squadron, 4th Royal Tank Regiment`],name:`C`,designation:`4 RTR`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`22nd Guards Brigade`,name:`22`,designation:`Guards`,commander:`Erskine`,icon:``,
                                    pos:[1287,1040],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`1st Battalion, The Buffs (Royal East Kent Regiment)`,name:`1`,designation:`Buffs`,commander:`Knocker`,icon:``,
                                            pos:[1125,1002],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`A Company, 1st Battalion, The Buffs (Royal East Kent Regiment)`,name:`A`,designation:`1 Buffs`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`B Company, 1st Battalion, The Buffs (Royal East Kent Regiment)`,name:`B`,designation:`1 Buffs`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`C Company, 1st Battalion, The Buffs (Royal East Kent Regiment)`,name:`C`,designation:`1 Buffs`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`D Company, 1st Battalion, The Buffs (Royal East Kent Regiment)`,name:`D`,designation:`1 Buffs`,commander:``},
                                            ]
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`2nd Battalion, Scots Guards`,name:`2`,designation:`Scots\nGuards`,commander:`Mayfield`,icon:``,
                                            pos:[1178,950],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`A Company, 2nd Battalion, Scots Guards`,name:`A`,designation:`2 SG`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`B Company, 2nd Battalion, Scots Guards`,name:`B`,designation:`2 SG`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`C Company, 2nd Battalion, Scots Guards`,name:`C`,designation:`2 SG`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`D Company, 2nd Battalion, Scots Guards`,name:`D`,designation:`2 SG`,commander:``},
                                            ]
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`3rd Battalion, Coldstream Guards`,name:`3`,designation:`Coldstream\nGuards`,commander:`Moubray`,icon:``,
                                            pos:[1195,1042],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`A Company, 3rd Battalion, Coldstream Guards`,name:`A`,designation:`3 CG`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`B Company, 3rd Battalion, Coldstream Guards`,name:`B`,designation:`3 CG`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`C Company, 3rd Battalion, Coldstream Guards`,name:`C`,designation:`3 CG`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`D Company, 3rd Battalion, Coldstream Guards`,name:`D`,designation:`3 CG`,commander:``},
                                            ]
                                        },{
                                            level:4,type:[`Infantry`,`Motorized`],team:`Indian`,
                                            desc:`22nd Guards Brigade Attack Company`,name:`Attack`,designation:`11 Pavo`,commander:``,icon:``,
                                            pos:[1107,927],
                                            elements:[
                                                {type:`Motorized Infantry Company`},
                                            ]
                                        },
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Fortress`],team:`German`,
                            desc:[`Defense Point Halfaya`,`Stützpunkt Halfaya`],name:`Halfaya`,designation:`1/115`,commander:`Zincke`,icon:`15pz`,
                            pos:[1305,843],
                            elements:[
                                {level:4,type:`Motorized Infantry Company`,team:`German`,desc:[`1st Company, 115th Rifle Regiment`,`1./Schützen-Regiment 115`],name:`1`,designation:`115`,commander:``},
                                {level:4,type:`Mechanized Infantry Company`,team:`German`,desc:[`2nd Company, 115th Rifle Regiment`,`2./Schützen-Regiment 115`],name:`2`,designation:`115`,commander:``},
                                {level:4,type:`Motorized Heavy Infantry Company`,team:`German`,desc:[`5th Company, 115th Rifle Regiment`,`5./Schützen-Regiment 115`],name:`5`,designation:`115`,commander:``},
                                {level:4,type:`Machine Gun Company`,team:`Italian`,desc:[`11th Company, 62nd Infantry Regiment`,`11° Compagnia Mitraglieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`11`,designation:`62`,commander:`de Francesco`,icon:`trento`},
                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`11th Battery, 46th Artillery Regiment`,`11° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`11`,designation:`46`,commander:``,icon:`trento`},
                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`12th Battery, 46th Artillery Regiment`,`12° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`12`,designation:`46`,commander:``,icon:`trento`},
                            ],
                        },{
                            level:3,type:[`Fortress`],team:`German`,
                            desc:[`Defense Point Qalala`,`Stützpunkt Qalala`],name:`Qalala`,designation:`6 Oasis`,commander:`Lauer`,icon:`90l`,
                            pos:[1329,776],
                            elements:[
                                {level:4,type:`Oasis Infantry Company`,team:`German`,desc:[`6th Oasis Company`,`Oasen Kompanie 6`],name:`6`,designation:`Oasis`,commander:`Lauer`},
                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`10th Battery, 46th Artillery Regiment`,`10° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`10`,designation:`46`,commander:``,icon:`trento`},
                                {level:4,type:`Mortar Company`,team:`Italian`,desc:[`10th Company, 62nd Infantry Regiment`,`10° Compagnia Mortaio, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`10`,designation:`62`,commander:``,icon:`trento`},
                            ],
                        },{
                            level:3,type:[`Fortress`],team:`German`,
                            desc:[`Defense Point 206`,`Stützpunkt 206`],name:`206`,designation:`3/15`,commander:``,icon:`15pz`,
                            pos:[1038,754],
                            elements:[
                                {level:4,type:`Motorcycle Infantry Company`,team:`German`,desc:[`3rd Company, 15th Motorcycle Battalion`,`3./Kradschützen-Bataillon 15`],name:`3`,designation:`15`,commander:``},
                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`7th Battery, 46th Artillery Regiment`,`7° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`7`,designation:`46`,commander:``,icon:`trento`},
                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`8th Battery, 46th Artillery Regiment`,`8° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`8`,designation:`46`,commander:``,icon:`trento`},
                            ],
                        },{
                            level:3,type:[`Fortress`],team:`German`,
                            desc:[`Defense Point 208`,`Stützpunkt 208`],name:`208`,designation:`4/15`,commander:`Paulewicz`,icon:`15pz`,
                            pos:[794,658],
                            elements:[
                                {level:4,type:`Motorcycle Machine Gun Company`,team:`German`,desc:[`4th Company, 15th Motorcycle Battalion`,`4./Kradschützen-Bataillon 15`],name:`4`,designation:`15`,commander:`Paulewicz`},
                                {level:4,type:`Anti-Tank Company`,team:`Italian`,desc:[`9th Company, 62nd Infantry Regiment`,`9° Compagnia Anticarro, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`9`,designation:`62`,commander:``,icon:`trento`},
                                {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`9th Battery, 46th Artillery Regiment`,`9° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`9`,designation:`46`,commander:``,icon:`trento`},
                            ],
                        },{
                            level:0,type:[`Tank`],team:`German`,
                            desc:[`15th Panzer Division`,`15. Panzer-Division`],name:`15`,designation:``,commander:`Neumann-Silkow`,icon:`15pz`,
                            pos:[101,38],
                            elements:[
                                {
                                    level:2,type:[`Tank`],team:`German`,
                                    desc:[`Battle Group Cramer`,`Kampfgruppe Cramer`],name:`KG`,designation:`8`,commander:`Cramer`,icon:`15pz`,
                                    pos:[61,98],
                                    elements:[
                                        {
                                            level:3,type:[`Tank`],team:`German`,
                                            desc:[`1st Battalion, 8th Panzer Regiment`,`I./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:`Crohn`,icon:`15pz`,
                                            pos:[61,163],
                                            elements:[
                                                {level:4,type:`Medium Tank Company`,team:`German`,desc:[`1st Company, 8th Panzer Regiment`,`1./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:``},
                                                {level:4,type:`Medium Tank Company`,team:`German`,desc:[`2nd Company, 8th Panzer Regiment`,`2./Panzer-Regiment 8`],name:`2`,designation:`8`,commander:``},
                                                {level:4,type:`Armed Medium Tank Company`,team:`German`,desc:[`3rd Company, 8th Panzer Regiment`,`3./Panzer-Regiment 8`],name:`3`,designation:`8`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`German`,desc:[`3rd Company, 115th Rifle Regiment`,`3./Schützen-Regiment 115`],name:`3`,designation:`115`,commander:``},
                                                {level:4,type:`Motorized Anti-Tank`,team:`German`,desc:[`1st Company, 33rd Anti-Tank Battalion`,`1./Panzerjäger-Abteilung 33`],name:`1`,designation:`33`,commander:``},
                                                {level:4,type:`Motorized Engineer Company`,team:`German`,desc:[`1st Company, 33rd Engineer Battalion`,`1./Panzer-Pionier-Bataillon 33`],name:`1`,designation:`33`,commander:``},
                                            ]
                                        },{
                                            level:3,type:[`Infantry`,`Motorcycle`],team:`German`,
                                            desc:[`15th Motorcycle Battalion`,`Kradschützen-Bataillon 15`],name:`15`,designation:``,commander:`Ehle`,icon:`15pz`,
                                            pos:[61,243],
                                            elements:[
                                                {level:4,type:`Motorcycle Infantry Company`,team:`German`,desc:[`1st Company, 15th Motorcycle Battalion`,`1./Kradschützen-Bataillon 15`],name:`1`,designation:`15`,commander:``},
                                                {level:4,type:`Motorcycle Infantry Company`,team:`German`,desc:[`2nd Company, 15th Motorcycle Battalion`,`2./Kradschützen-Bataillon 15`],name:`2`,designation:`15`,commander:``},
                                                {level:4,type:`Motorcycle Heavy Infantry Company`,team:`German`,desc:[`5th Company, 15th Motorcycle Battalion`,`5./Kradschützen-Bataillon 15`],name:`5`,designation:`15`,commander:``},
                                                {level:4,type:`Motorized Anti-Tank`,team:`German`,desc:[`3rd Company, 33rd Anti-Tank Battalion`,`3./Panzerjäger-Abteilung 33`],name:`3`,designation:`33`,commander:``},
                                                {level:4,type:`Motorized Engineer Company`,team:`German`,desc:[`3rd Company, 33rd Engineer Battalion`,`3./Panzer-Pionier-Bataillon 33`],name:`3`,designation:`33`,commander:`Cirener`},
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Tank`],team:`German`,
                                    desc:[`Battle Group Wahl`,`Kampfgruppe Wahl`],name:`KG`,designation:`2/8`,commander:`Wahl`,icon:`15pz`,
                                    pos:[141,98],
                                    elements:[
                                        {
                                            level:3,type:[`Tank`],team:`German`,
                                            desc:[`2nd Battalion, 8th Panzer Regiment`,`II./Panzer-Regiment 8`],name:`2`,designation:`8`,commander:`Wahl`,icon:`15pz`,
                                            pos:[141,163],
                                            elements:[
                                                {level:4,type:`Medium Tank Company`,team:`German`,desc:[`5th Company, 8th Panzer Regiment`,`5./Panzer-Regiment 8`],name:`5`,designation:`8`,commander:``},
                                                {level:4,type:`Medium Tank Company`,team:`German`,desc:[`6th Company, 8th Panzer Regiment`,`6./Panzer-Regiment 8`],name:`6`,designation:`8`,commander:``},
                                                {level:4,type:`Armed Medium Tank Company`,team:`German`,desc:[`7th Company, 8th Panzer Regiment`,`7./Panzer-Regiment 8`],name:`7`,designation:`8`,commander:``},
                                                {level:4,type:`Motorized Machine Gun Company`,team:`German`,desc:[`4th Company, 115th Rifle Regiment`,`4./Schützen-Regiment 115`],name:`4`,designation:`115`,commander:``},
                                                {level:4,type:`Motorized Anti-Tank`,team:`German`,desc:[`2nd Company, 33rd Anti-Tank Battalion`,`2./Panzerjäger-Abteilung 33`],name:`2`,designation:`33`,commander:``},
                                                {level:4,type:`Motorized Engineer Company`,team:`German`,desc:[`2nd Company, 33rd Engineer Battalion`,`2./Panzer-Pionier-Bataillon 33`],name:`2`,designation:`33`,commander:``},
                                            ]
                                        },{
                                            level:3,type:[`Artillery`,`Motorized`],team:`German`,
                                            desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:`Mayer`,icon:`15pz`,
                                            pos:[141,243],
                                            elements:[
                                                {level:4,type:`Motorized Concentrated Artillery Battery`,team:`German`,desc:[`1st Battery, 33rd Artillery Regiment`,`1./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:``},
                                                {level:4,type:`Motorized Concentrated Artillery Battery`,team:`German`,desc:[`2nd Battery, 33rd Artillery Regiment`,`2./Artillerie-Regiment (mot.) 33`],name:`2`,designation:`33`,commander:``},
                                                {level:4,type:`Motorized Concentrated Artillery Battery`,team:`German`,desc:[`3rd Battery, 33rd Artillery Regiment`,`3./Artillerie-Regiment (mot.) 33`],name:`3`,designation:`33`,commander:``},
                                                {level:4,type:`Motorized Engineer Company`,team:`German`,desc:[`2nd Company, 39th Engineer Battalion`,`2./Panzer-Pionier-Bataillon 39`],name:`2`,designation:`39`,commander:`Streitz`},
                                            ],
                                        },
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`German`,
                                    desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`van Nes`,icon:`15pz`,
                                    pos:[352,1071],
                                    elements:[
                                        {level:4,type:`Armored Car Company`,team:`German`,desc:[`1st Company, 33rd Reconnaissance Battalion`,`1./Aufklärungs-Abteilung 33`],name:`1`,designation:`33`,commander:``},
                                        {level:4,type:`Motorcycle Infantry Company`,team:`German`,desc:[`2nd Company, 33rd Reconnaissance Battalion`,`2./Aufklärungs-Abteilung 33`],name:`2`,designation:`33`,commander:``},
                                        {level:4,type:`Motorized Heavy Reconnaissance Company`,team:`German`,desc:[`3rd Company, 33rd Reconnaissance Battalion`,`3./Aufklärungs-Abteilung 33`],name:`3`,designation:`33`,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:2,type:[`Infantry`],team:`Italian`,
                            desc:[`62nd Infantry Regiment`,`62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                            pos:[1153,292],
                            elements:[
                                {
                                    level:3,type:[`Infantry`],team:`Italian`,
                                    desc:[`1st Battalion, 62nd Infantry Regiment`,`I Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`,icon:`trento`,
                                    pos:[1267,707],
                                    elements:[
                                        {
                                            level:4,type:[`Infantry`],team:`Italian`,
                                            desc:[`1st Company, 62nd Infantry Regiment`,`1° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:``,icon:`trento`,
                                            pos:[1071,636],
                                            elements:[
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`1st Company, 62nd Infantry Regiment`,`1° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Infantry`],team:`Italian`,
                                            desc:[`2nd Company, 62nd Infantry Regiment`,`2° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:``,icon:`trento`,
                                            pos:[1152,670],
                                            elements:[
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`2nd Company, 62nd Infantry Regiment`,`2° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Infantry`],team:`Italian`,
                                            desc:[`3rd Company, 62nd Infantry Regiment`,`3° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`62`,commander:``,icon:`trento`,
                                            pos:[1171,741],
                                            elements:[
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`3rd Company, 62nd Infantry Regiment`,`3° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`3`,designation:`62`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Infantry`,`Heavy`],team:`Italian`,
                                            desc:[`4th Company, 62nd Infantry Regiment`,`4° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`4`,designation:`62`,commander:``,icon:`trento`,
                                            pos:[1255,666],
                                            elements:[
                                                {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`4th Company, 62nd Infantry Regiment`,`4° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`4`,designation:`62`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:3,type:[`Infantry`],team:`Italian`,
                                    desc:[`2nd Battalion, 62nd Infantry Regiment`,`II Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`,icon:`trento`,
                                    pos:[1122,247],
                                    elements:[
                                        {
                                            level:4,type:[`Infantry`],team:`Italian`,
                                            desc:[`5th Company, 62nd Infantry Regiment`,`5° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`5`,designation:`62`,commander:``,icon:`trento`,
                                            pos:[1084,199],
                                            elements:[
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`5th Company, 62nd Infantry Regiment`,`5° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`5`,designation:`62`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Infantry`],team:`Italian`,
                                            desc:[`6th Company, 62nd Infantry Regiment`,`6° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`6`,designation:`62`,commander:``,icon:`trento`,
                                            pos:[1063,276],
                                            elements:[
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`6th Company, 62nd Infantry Regiment`,`6° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`6`,designation:`62`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Infantry`],team:`Italian`,
                                            desc:[`7th Company, 62nd Infantry Regiment`,`7° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`7`,designation:`62`,commander:``,icon:`trento`,
                                            pos:[1111,356],
                                            elements:[
                                                {level:4,type:`Infantry Company`,team:`Italian`,desc:[`7th Company, 62nd Infantry Regiment`,`7° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`7`,designation:`62`,commander:``},
                                            ],
                                        },{
                                            level:4,type:[`Infantry`,`Heavy`],team:`Italian`,
                                            desc:[`8th Company, 62nd Infantry Regiment`,`8° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`8`,designation:`62`,commander:``,icon:`trento`,
                                            pos:[1196,414],
                                            elements:[
                                                {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`8th Company, 62nd Infantry Regiment`,`8° Compagnia Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`8`,designation:`62`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:3,type:[`Artillery`],team:`Italian`,
                                    desc:[`1st Group, 46th Artillery Regiment`,`I Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`1`,designation:`46`,commander:`Giannimi`,icon:`trento`,
                                    pos:[1189,338],
                                    elements:[
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`1st Battery, 46th Artillery Regiment`,`1° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`1`,designation:`46`,commander:``},
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`2nd Battery, 46th Artillery Regiment`,`2° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`2`,designation:`46`,commander:``},
                                        {level:4,type:`Small Artillery Battery`,team:`Italian`,desc:[`3rd Battery, 46th Artillery Regiment`,`3° Batteria, 46° Reggimento Artiglieria "Trento"`],name:`3`,designation:`46`,commander:``},
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],reserve:[
            ],
        },{
            name:[`Frontier`,`Base`],
            term:`Frontier`,
            unitScale:1,
            cityScale:0.8,
            city:[
                {name:`Gambut`,owner:1,type:1,pos:[101,28]},
                {name:`Gabr Saleh`,owner:1,type:0,pos:[119,782]},
                {name:`Bir Gibni`,owner:1,type:0,pos:[352,1071]},
                {name:`Gasr el Arid`,owner:1,type:0,pos:[353,207]},
                {name:`Bir et Tgheit`,owner:1,type:0,pos:[514,863]},
                {name:`Bir el Hariga`,owner:1,type:0,pos:[535,336]},
                {name:`Umm Maalif`,owner:1,type:0,pos:[553,496]},
                {name:`Bir el Baheira`,owner:1,type:0,pos:[570,139]},
                {name:`Bir Bu Deheua`,owner:1,type:0,pos:[576,898]},
                {name:`Omar Nuovo`,owner:1,type:0,pos:[658,915]},

                {name:`Gabr Lachem`,owner:1,type:0,pos:[669,700]},
                {name:`Sidi Omar`,owner:-1,type:0,pos:[715,976]},
                {name:`Gabr el Gerrari`,owner:1,type:0,pos:[738,779]},
                {name:`Gasr el Abid`,owner:-1,type:0,pos:[744,1248]},
                {name:`Libyan Omar`,owner:1,type:0,pos:[761,918]},
                {name:`Bir Sheferzen`,owner:-1,type:0,pos:[778,1115]},
                {name:`Point 208`,owner:1,type:0,pos:[794,658]},
                {name:`Bir Beder`,owner:1,type:0,pos:[838,523]},
                {name:`Sidi Azeiz`,owner:1,type:0,pos:[844,405]},
                {name:`Bir el Harush`,owner:-1,type:0,pos:[845,1008]},

                {name:`Bir Ghirba`,owner:1,type:0,pos:[875,753]},
                {name:`Bir el Menastir`,owner:1,type:0,pos:[876,162]},
                {name:`Ghot Adhidiba`,owner:1,type:0,pos:[904,885]},
                {name:`Qaryet Abu Fans`,owner:-1,type:0,pos:[969,976]},
                {name:`Bir Rilet Uaar`,owner:1,type:0,pos:[1000,340]},
                {name:`Carmuset Naaim`,owner:1,type:0,pos:[1007,148]},
                {name:`Carmuset Scegheila`,owner:1,type:0,pos:[1036,206]},
                {name:`Bir el Ghereidia`,owner:1,type:0,pos:[1050,305]},
                {name:`Point 206`,owner:1,type:0,pos:[1038,754]},
                {name:`Alam Abu Diyak`,owner:1,type:0,pos:[1051,831]},

                {name:`Bir el Masri`,owner:1,type:0,pos:[1066,237]},
                {name:`Fort Capuzzo`,owner:1,type:0,pos:[1071,636]},
                {name:`Bir Salah el Gebescim`,owner:1,type:0,pos:[1106,356]},
                {name:`Sidi Suleiman`,owner:-1,type:0,pos:[1125,1002]},
                {name:`Bir Wair`,owner:1,type:0,pos:[1119,693]},
                {name:`Musaid`,owner:1,type:0,pos:[1152,670]},
                {name:`Bir el Khireigat`,owner:-1,type:0,pos:[1155,1189]},
                {name:`Qabr el Qaha`,owner:1,type:0,pos:[1155,868]},
                {name:`Bardia`,owner:1,type:1,pos:[1167,269]},
                {name:`Point 191`,owner:1,type:0,pos:[1171,741]},

                {name:`Point 207`,owner:-1,type:0,pos:[1178,950]},
                {name:`Gebbanet Tutufahim`,owner:1,type:0,pos:[1196,419]},
                {name:`Point 187`,owner:1,type:0,pos:[1217,834]},
                {name:`Bir er Ramla`,owner:1,type:0,pos:[1242,477]},
                {name:`Sollum Barracks`,owner:1,type:0,pos:[1255,641]},
                {name:`Sollum`,owner:1,type:0,pos:[1277,677]},
                {name:`Halfaya Pass`,owner:1,type:0,pos:[1301,834]},
                {name:`Qalala`,owner:1,type:0,pos:[1329,776]},
                {name:`Bir Nuh`,owner:-1,type:0,pos:[1329,938]},
                {name:`Bir el Siweiyat`,owner:0,type:0,pos:[1418,912]},

                {name:`Alam Elkidad`,owner:0,type:0,pos:[1453,818]},
                {name:`Halfway House`,owner:0,type:0,pos:[1578,1191]},
                {name:`Byut Fadit`,owner:0,type:0,pos:[1580,835]},
                {name:`Iluet Elscin`,owner:0,type:0,pos:[1597,936]},
                {name:`Sauani el Augerin`,owner:0,type:0,pos:[1676,1080]},
                {name:`Buq Buq`,owner:0,type:0,pos:[1909,801]},
                {name:`Saryet et Sabil`,owner:0,type:0,pos:[1974,1208]},
                {name:`Alam Samalus`,owner:0,type:0,pos:[2026,959]},
                {name:`Nibeiwa`,owner:0,type:0,pos:[2302,986]},
                {name:`Sidi Barrani`,owner:0,type:1,pos:[2333,667]},
            ],connect:[
                {name:[`Sidi Barrani`,`Buq Buq`]},
                {name:[`Byut Fadit`,`Buq Buq`]},
                {name:[`Alam Elkidad`,`Byut Fadit`]},
                {name:[`Alam Elkidad`,`Qalala`]},
                {name:[`Qalala`,`Sollum`]},
                {name:[`Sollum`,`Musaid`]},
                {name:[`Musaid`,`Fort Capuzzo`]},
                {name:[`Fort Capuzzo`,`Bir Salah el Gebescim`]},
                {name:[`Bir Salah el Gebescim`,`Bardia`]},
                {name:[`Bardia`,`Bir el Masri`]},

                {name:[`Bir el Masri`,`Carmuset Scegheila`]},
                {name:[`Carmuset Scegheila`,`Bir el Menastir`]},
                {name:[`Bir el Menastir`,`Bir el Baheira`]},
                {name:[`Bir el Baheira`,`Gasr el Arid`]},
                {name:[`Bir Salah el Gebescim`,`Sidi Azeiz`]},
                {name:[`Sidi Azeiz`,`Fort Capuzzo`]},
                {name:[`Sidi Azeiz`,`Bir el Hariga`]},
                {name:[`Bir el Hariga`,`Gasr el Arid`]},
                {name:[`Gasr el Arid`,`Gambut`]},
                {name:[`Fort Capuzzo`,`Point 206`]},

                {name:[`Point 206`,`Alam Abu Diyak`]},
                {name:[`Alam Abu Diyak`,`Point 207`]},
                {name:[`Sidi Suleiman`,`Point 207`]},
                {name:[`Point 207`,`Point 187`]},
                {name:[`Halfaya Pass`,`Qalala`]},
                {name:[`Halfaya Pass`,`Bir Nuh`]},
                {name:[`Fort Capuzzo`,`Bir Ghirba`]},
                {name:[`Bir Ghirba`,`Gabr el Gerrari`]},
                {name:[`Gabr el Gerrari`,`Omar Nuovo`]},
                {name:[`Omar Nuovo`,`Sidi Omar`]},

                {name:[`Sidi Omar`,`Bir el Harush`]},
                {name:[`Bir el Harush`,`Bir Sheferzen`]},
                {name:[`Bir el Harush`,`Qaryet Abu Fans`]},
                {name:[`Qaryet Abu Fans`,`Alam Abu Diyak`]},
                {name:[`Qaryet Abu Fans`,`Sidi Suleiman`]},
                {name:[`Sidi Suleiman`,`Bir el Khireigat`]},
                {name:[`Bir el Khireigat`,`Halfway House`]},
                {name:[`Bir Nuh`,`Bir el Siweiyat`]},
                {name:[`Bir el Siweiyat`,`Alam Elkidad`]},
                {name:[`Halfway House`,`Sauani el Augerin`]},

                {name:[`Iluet Elscin`,`Bir el Siweiyat`]},
                {name:[`Iluet Elscin`,`Byut Fadit`]},
                {name:[`Iluet Elscin`,`Sauani el Augerin`]},
                {name:[`Sauani el Augerin`,`Alam Samalus`]},
                {name:[`Alam Samalus`,`Buq Buq`]},
                {name:[`Alam Samalus`,`Saryet et Sabil`]},
                {name:[`Saryet et Sabil`,`Sauani el Augerin`]},
                {name:[`Sidi Barrani`,`Nibeiwa`]},
                {name:[`Nibeiwa`,`Alam Samalus`]},
                {name:[`Bir Nuh`,`Point 207`]},

                {name:[`Gabr el Gerrari`,`Gabr Lachem`]},
                {name:[`Gabr Lachem`,`Umm Maalif`]},
                {name:[`Umm Maalif`,`Bir el Hariga`]},
                {name:[`Gabr Saleh`,`Umm Maalif`]},
                {name:[`Bir Sheferzen`,`Gasr el Abid`]},
                {name:[`Gasr el Abid`,`Bir Gibni`]},
                {name:[`Bir Gibni`,`Gabr Saleh`]},
                {name:[`Gasr el Abid`,`Bir el Khireigat`]},
                {name:[`Gabr Lachem`,`Bir et Tgheit`]},
                {name:[`Bir et Tgheit`,`Bir Bu Deheua`]},
                
                {name:[`Bir Bu Deheua`,`Omar Nuovo`]},
                {name:[`Omar Nuovo`,`Libyan Omar`]},
                {name:[`Libyan Omar`,`Ghot Adhidiba`]},
                {name:[`Ghot Adhidiba`,`Alam Abu Diyak`]},
                {name:[`Alam Abu Diyak`,`Point 187`]},
                {name:[`Point 187`,`Halfaya Pass`]},
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
                    name:`Operation Sommernachtstraum`,
                    strength:{name:`Companies`,num:[[24],[26,0]]},partition:[[1],[0]],bonus:1,
                    unit:[
                        {
                            level:0,type:[`Tank`],team:`British`,
                            desc:[`7th Armored Division`,`7th Armoured Division`],name:`7`,designation:``,commander:`Gott`,icon:`7a`,
                            pos:[2026,959],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Artillery`,`Motorized`],team:`British`,
                                    desc:`7th Support Group`,name:`7`,designation:``,commander:`Campbell`,icon:`7sg`,
                                    pos:[1578,1191],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:`de Salis`,icon:`7sg`,
                                            pos:[845,1008],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`A Company, 1st Battalion, King's Royal Rifle Corps`,name:`A`,designation:`1 KRRC`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`B Company, 1st Battalion, King's Royal Rifle Corps`,name:`B`,designation:`1 KRRC`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`C Company, 1st Battalion, King's Royal Rifle Corps`,name:`C`,designation:`1 KRRC`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`D Company, 1st Battalion, King's Royal Rifle Corps`,name:`D`,designation:`1 KRRC`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                                            desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Renton`,icon:`7sg`,
                                            pos:[1125,1002],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`A Company, 2nd Battalion, Rifle Brigade`,name:`A`,designation:`2 RB`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`B Company, 2nd Battalion, Rifle Brigade`,name:`B`,designation:`2 RB`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`British`,desc:`C Company, 2nd Battalion, Rifle Brigade`,name:`C`,designation:`2 RB`,commander:``},
                                                {level:4,type:`Motorized Heavy Infantry Company`,team:`British`,desc:`S Company, 2nd Battalion, Rifle Brigade`,name:`S`,designation:`2 RB`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`,`Motorized`],team:`British`,
                                            desc:[`3rd Battalion, Royal Horse Artillery`,`3rd Regiment, Royal Horse Artillery`],name:`3`,designation:`Royal\nHorse`,commander:`Wilson`,icon:`7sg`,
                                            pos:[1155,1189],
                                            elements:[
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`A Battery, 3rd Battalion, Royal Horse Artillery`,`A Battery, 3rd Regiment, Royal Horse Artillery`],name:`A`,designation:`3 RHA`,commander:``},
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`B Battery, 3rd Battalion, Royal Horse Artillery`,`B Battery, 3rd Regiment, Royal Horse Artillery`],name:`B`,designation:`3 RHA`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`,`Motorized`],team:`British`,
                                            desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:`Royal\nHorse`,commander:`Currie`,icon:`7sg`,
                                            pos:[1359,1087],
                                            elements:[
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`A Battery, 4th Battalion, Royal Horse Artillery`,`A Battery, 4th Regiment, Royal Horse Artillery`],name:`A`,designation:`4 RHA`,commander:``},
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`B Battery, 4th Battalion, Royal Horse Artillery`,`B Battery, 4th Regiment, Royal Horse Artillery`],name:`B`,designation:`4 RHA`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`,`Motorized`],team:`British`,
                                            desc:[`60th (North Midland) Battalion, Royal Artillery`,`60th (North Midland) Field Regiment, Royal Artillery`],name:`60`,designation:`North\nMidland`,commander:`Hallifax`,icon:`7sg`,
                                            pos:[1676,1080],
                                            elements:[
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`A Battery, 60th (North Midland) Battalion, Royal Artillery`,`A Battery, 60th (North Midland) Field Regiment, Royal Artillery`],name:`A`,designation:`60 RA`,commander:``},
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`B Battery, 60th (North Midland) Battalion, Royal Artillery`,`B Battery, 60th (North Midland) Field Regiment, Royal Artillery`],name:`B`,designation:`60 RA`,commander:``},
                                                {level:4,type:`Motorized Artillery Battery`,team:`British`,desc:[`C Battery, 60th (North Midland) Battalion, Royal Artillery`,`C Battery, 60th (North Midland) Field Regiment, Royal Artillery`],name:`C`,designation:`60 RA`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`British`,
                                    desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`,icon:`7a`,
                                    pos:[744,1248],
                                    elements:[
                                        {level:4,type:`Armored Car Company`,team:`British`,desc:`A Squadron, 1st King's Dragoon Guards`,name:`A`,designation:`1 KDG`,commander:``},
                                        {level:4,type:`Armored Car Company`,team:`British`,desc:`B Squadron, 1st King's Dragoon Guards`,name:`B`,designation:`1 KDG`,commander:``},
                                        {level:4,type:`Armored Car Company`,team:`British`,desc:`C Squadron, 1st King's Dragoon Guards`,name:`C`,designation:`1 KDG`,commander:``},
                                        {level:4,type:`Armored Car Company`,team:`British`,desc:`D Squadron, 1st King's Dragoon Guards`,name:`D`,designation:`1 KDG`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Engineer`,`Motorized`],team:`British`,
                                    desc:[`4th Field Company, Royal Engineers`,`4th Field Squadron, Royal Engineers`],name:`4`,designation:``,commander:``,icon:`7a`,
                                    pos:[1597,936],
                                    elements:[
                                        {type:`Motorized Engineer Company`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:`4th Indian Division`,name:`4`,designation:``,commander:`Messervy`,icon:`4id`,
                            pos:[1909,821],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`11th Indian Infantry Brigade`,name:`11`,designation:``,commander:`Anderson`,icon:`4id`,
                                    pos:[1580,850],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`,`Motorized`],team:`Indian`,
                                            desc:`1st Battalion, 6th Rajputana Rifles`,name:`1/6`,designation:`Rajputana`,commander:`Quayle`,icon:`4id`,
                                            pos:[1453,828],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`Indian`,desc:`A Company, 1st Battalion, 6th Rajputana Rifles`,name:`A`,designation:`1/6 Rajput`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`Indian`,desc:`B Company, 1st Battalion, 6th Rajputana Rifles`,name:`B`,designation:`1/6 Rajput`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`Indian`,desc:`C Company, 1st Battalion, 6th Rajputana Rifles`,name:`C`,designation:`1/6 Rajput`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`Indian`,desc:`D Company, 1st Battalion, 6th Rajputana Rifles`,name:`D`,designation:`1/6 Rajput`,commander:``},
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Tank`],team:`German`,
                            desc:[`15th Panzer Division`,`15. Panzer-Division`],name:`15`,designation:``,commander:`Neumann-Silkow`,icon:`15pz`,
                            pos:[844,405],
                            elements:[
                                {
                                    level:2,type:[`Tank`],team:`German`,
                                    desc:[`Battle Group Cramer`,`Kampfgruppe Cramer`],name:`KG`,designation:`8`,commander:`Cramer`,icon:`15pz`,
                                    pos:[875,753],
                                    elements:[
                                        {
                                            level:3,type:[`Tank`],team:`German`,
                                            desc:[`1st Battalion, 8th Panzer Regiment`,`I./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:`Crohn`,icon:`15pz`,
                                            pos:[658,915],
                                            elements:[
                                                {level:4,type:`Medium Tank Company`,team:`German`,desc:[`1st Company, 8th Panzer Regiment`,`1./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:``},
                                                {level:4,type:`Medium Tank Company`,team:`German`,desc:[`2nd Company, 8th Panzer Regiment`,`2./Panzer-Regiment 8`],name:`2`,designation:`8`,commander:``},
                                                {level:4,type:`Medium Tank Company`,team:`German`,desc:[`3rd Company, 8th Panzer Regiment`,`3./Panzer-Regiment 8`],name:`3`,designation:`8`,commander:``},
                                                {level:4,type:`Armed Medium Tank Company`,team:`German`,desc:[`4th Company, 8th Panzer Regiment`,`4./Panzer-Regiment 8`],name:`4`,designation:`8`,commander:``},
                                                {level:4,type:`Motorized Engineer Company`,team:`German`,desc:[`1st Company, 33rd Engineer Battalion`,`1./Panzer-Pionier-Bataillon 33`],name:`1`,designation:`33`,commander:``},
                                            ]
                                        },{
                                            level:3,type:[`Tank`],team:`German`,
                                            desc:[`2nd Battalion, 8th Panzer Regiment`,`II./Panzer-Regiment 8`],name:`2`,designation:`8`,commander:`Wahl`,icon:`15pz`,
                                            pos:[904,885],
                                            elements:[
                                                {level:4,type:`Medium Tank Company`,team:`German`,desc:[`5th Company, 8th Panzer Regiment`,`5./Panzer-Regiment 8`],name:`5`,designation:`8`,commander:``},
                                                {level:4,type:`Medium Tank Company`,team:`German`,desc:[`6th Company, 8th Panzer Regiment`,`6./Panzer-Regiment 8`],name:`6`,designation:`8`,commander:``},
                                                {level:4,type:`Captured Medium Tank Company`,team:`German`,desc:[`7th Company, 8th Panzer Regiment`,`7./Panzer-Regiment 8`],name:`7`,designation:`8`,commander:``},
                                                {level:4,type:`Armed Medium Tank Company`,team:`German`,desc:[`8th Company, 8th Panzer Regiment`,`8./Panzer-Regiment 8`],name:`8`,designation:`8`,commander:``},
                                                {level:4,type:`Motorized Engineer Company`,team:`German`,desc:[`3rd Company, 33rd Engineer Battalion`,`3./Panzer-Pionier-Bataillon 33`],name:`3`,designation:`33`,commander:`Cirener`},
                                            ]
                                        },
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`Battle Group Warrelmann`,`Kampfgruppe Warrelmann`],name:`KG`,designation:`2`,commander:`Warrelmann`,icon:`15pz`,
                                    pos:[1257,677],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`,`Motorized`,`Machine Gun`],team:`German`,
                                            desc:[`2nd Machine Gun Battalion`,`2. Maschinengewehr-Bataillon`],name:`2`,designation:``,commander:`Warrelmann`,icon:`15pz`,
                                            pos:[1301,834],
                                            elements:[
                                                {level:4,type:`Motorized Machine Gun Company`,team:`German`,desc:[`1st Company, 2nd Machine Gun Battalion`,`1./Maschinengewehr-Bataillon 2`],name:`1`,designation:`2`,commander:``},
                                                {level:4,type:`Motorized Machine Gun Company`,team:`German`,desc:[`2nd Company, 2nd Machine Gun Battalion`,`2./Maschinengewehr-Bataillon 2`],name:`2`,designation:`2`,commander:``},
                                                {level:4,type:`Motorized Machine Gun Company`,team:`German`,desc:[`3rd Company, 2nd Machine Gun Battalion`,`3./Maschinengewehr-Bataillon 2`],name:`3`,designation:`2`,commander:``},
                                                {level:4,type:`Motorized Heavy Machine Gun Company`,team:`German`,desc:[`4th (Heavy) Company, 2nd Machine Gun Battalion`,`4./Maschinengewehr-Bataillon 2`],name:`4`,designation:`2`,commander:``},
                                                {level:4,type:`Motorized Engineer Company`,team:`German`,desc:[`2nd Company, 39th Engineer Battalion`,`2./Panzer-Pionier-Bataillon 39`],name:`2`,designation:`39`,commander:`Streitz`},
                                            ],
                                        },{
                                            level:3,type:[`Anti-Tank`,`Motorized`],team:`German`,
                                            desc:[`33rd Anti-Tank Battalion`,`Panzerjäger-Abteilung 33`],name:`33`,designation:``,commander:`Beil`,icon:`15pz`,
                                            pos:[1155,868],
                                            elements:[
                                                {level:4,type:`Motorized Anti-Tank`,team:`German`,desc:[`1st Company, 33rd Anti-Tank Battalion`,`1./Panzerjäger-Abteilung 33`],name:`1`,designation:`33`,commander:``},
                                                {level:4,type:`Motorized Anti-Tank`,team:`German`,desc:[`2nd Company, 33rd Anti-Tank Battalion`,`2./Panzerjäger-Abteilung 33`],name:`2`,designation:`33`,commander:``},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`,`Motorized`],team:`German`,
                                            desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:`Mayer`,icon:`15pz`,
                                            pos:[1071,636],
                                            elements:[
                                                {level:4,type:`Motorized Concentrated Artillery Battery`,team:`German`,desc:[`1st Battery, 33rd Artillery Regiment`,`1./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:``},
                                                {level:4,type:`Motorized Concentrated Artillery Battery`,team:`German`,desc:[`2nd Battery, 33rd Artillery Regiment`,`2./Artillerie-Regiment (mot.) 33`],name:`2`,designation:`33`,commander:``},
                                                {level:4,type:`Motorized Concentrated Artillery Battery`,team:`German`,desc:[`3rd Battery, 33rd Artillery Regiment`,`3./Artillerie-Regiment (mot.) 33`],name:`3`,designation:`33`,commander:``},
                                            ],
                                        },
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Semi-Motorized`],team:`German`,
                                    desc:[`Battle Group Panzenhagen`,`Kampfgruppe Panzenhagen`],name:`KG`,designation:`347`,commander:`Panzenhagen`,icon:`90l`,
                                    pos:[352,1071],
                                    elements:[
                                        {level:4,type:`Semi-Motorized Infantry Company`,team:`German`,desc:[`9th Company, 347th Infantry Regiment`,`9./Infanterie-Regiment 347`],name:`9`,designation:`347`,commander:``},
                                        {level:4,type:`Semi-Motorized Infantry Company`,team:`German`,desc:[`10th Company, 347th Infantry Regiment`,`10./Infanterie-Regiment 347`],name:`10`,designation:`347`,commander:``},
                                        {level:4,type:`Semi-Motorized Infantry Company`,team:`German`,desc:[`11th Company, 347th Infantry Regiment`,`11./Infanterie-Regiment 347`],name:`11`,designation:`347`,commander:``},
                                        {level:4,type:`Semi-Motorized Heavy Infantry Company`,team:`German`,desc:[`12th Company, 347th Infantry Regiment`,`12./Infanterie-Regiment 347`],name:`12`,designation:`347`,commander:``},
                                        {level:4,type:`Motorized Engineer Company`,team:`German`,desc:[`2nd Company, 33rd Engineer Battalion`,`2./Panzer-Pionier-Bataillon 33`],name:`2`,designation:`33`,commander:``},
                                        {level:4,type:`Motorized Anti-Tank`,team:`German`,desc:[`3rd Company, 33rd Anti-Tank Battalion`,`3./Panzerjäger-Abteilung 33`],name:`3`,designation:`33`,commander:``},
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],reserve:[
            ],
        },{
            name:[`Frontier`,`Later`],
            term:`Frontier`,
            unitScale:1,
            cityScale:0.8,
            city:[
                {name:`Gambut`,owner:0,type:1,pos:[101,28]},
                {name:`Gabr Saleh`,owner:0,type:0,pos:[119,782]},
                {name:`Bir Gibni`,owner:0,type:0,pos:[352,1071]},
                {name:`Gasr el Arid`,owner:0,type:0,pos:[353,207]},
                {name:`Bir et Tgheit`,owner:0,type:0,pos:[514,863]},
                {name:`Bir el Hariga`,owner:0,type:0,pos:[535,336]},
                {name:`Umm Maalif`,owner:0,type:0,pos:[553,496]},
                {name:`Bir el Baheira`,owner:0,type:0,pos:[570,139]},
                {name:`Bir Bu Deheua`,owner:0,type:0,pos:[576,898]},
                {name:`Omar Nuovo`,owner:0,type:0,pos:[658,915]},

                {name:`Gabr Lachem`,owner:0,type:0,pos:[669,700]},
                {name:`Sidi Omar`,owner:0,type:0,pos:[715,976]},
                {name:`Gabr el Gerrari`,owner:0,type:0,pos:[738,779]},
                {name:`Gasr el Abid`,owner:0,type:0,pos:[744,1248]},
                {name:`Libyan Omar`,owner:0,type:0,pos:[761,918]},
                {name:`Bir Sheferzen`,owner:0,type:0,pos:[778,1115]},
                {name:`Point 208`,owner:0,type:0,pos:[794,658]},
                {name:`Bir Beder`,owner:0,type:0,pos:[838,523]},
                {name:`Sidi Azeiz`,owner:0,type:0,pos:[844,405]},
                {name:`Bir el Harush`,owner:0,type:0,pos:[845,1008]},

                {name:`Bir Ghirba`,owner:0,type:0,pos:[875,753]},
                {name:`Bir el Menastir`,owner:0,type:0,pos:[876,162]},
                {name:`Ghot Adhidiba`,owner:2,type:0,pos:[904,885]},
                {name:`Qaryet Abu Fans`,owner:0,type:0,pos:[969,976]},
                {name:`Bir Rilet Uaar`,owner:0,type:0,pos:[1000,340]},
                {name:`Carmuset Naaim`,owner:0,type:0,pos:[1007,148]},
                {name:`Carmuset Scegheila`,owner:1,type:0,pos:[1036,206]},
                {name:`Bir el Ghereidia`,owner:1,type:0,pos:[1050,305]},
                {name:`Point 206`,owner:2,type:0,pos:[1038,754]},
                {name:`Alam Abu Diyak`,owner:2,type:0,pos:[1051,831]},

                {name:`Bir el Masri`,owner:1,type:0,pos:[1066,237]},
                {name:`Fort Capuzzo`,owner:0,type:0,pos:[1071,636]},
                {name:`Bir Salah el Gebescim`,owner:1,type:0,pos:[1106,356]},
                {name:`Sidi Suleiman`,owner:0,type:0,pos:[1125,1002]},
                {name:`Bir Wair`,owner:0,type:0,pos:[1119,693]},
                {name:`Musaid`,owner:0,type:0,pos:[1152,670]},
                {name:`Bir el Khireigat`,owner:0,type:0,pos:[1155,1189]},
                {name:`Qabr el Qaha`,owner:1,type:0,pos:[1155,868]},
                {name:`Bardia`,owner:1,type:1,pos:[1167,269]},
                {name:`Point 191`,owner:2,type:0,pos:[1171,741]},

                {name:`Point 207`,owner:0,type:0,pos:[1178,950]},
                {name:`Gebbanet Tutufahim`,owner:1,type:0,pos:[1196,419]},
                {name:`Point 187`,owner:2,type:0,pos:[1217,834]},
                {name:`Bir er Ramla`,owner:0,type:0,pos:[1242,477]},
                {name:`Sollum Barracks`,owner:2,type:0,pos:[1255,641]},
                {name:`Sollum`,owner:2,type:1,pos:[1277,677]},
                {name:`Halfaya Pass`,owner:2,type:0,pos:[1301,834]},
                {name:`Qalala`,owner:2,type:0,pos:[1329,776]},
                {name:`Bir Nuh`,owner:0,type:0,pos:[1329,938]},
                {name:`Bir el Siweiyat`,owner:0,type:0,pos:[1418,912]},

                {name:`Alam Elkidad`,owner:0,type:0,pos:[1453,818]},
                {name:`Halfway House`,owner:0,type:0,pos:[1578,1191]},
                {name:`Byut Fadit`,owner:0,type:0,pos:[1580,835]},
                {name:`Iluet Elscin`,owner:0,type:0,pos:[1597,936]},
                {name:`Sauani el Augerin`,owner:0,type:0,pos:[1676,1080]},
                {name:`Buq Buq`,owner:0,type:0,pos:[1909,801]},
                {name:`Saryet et Sabil`,owner:0,type:0,pos:[1974,1208]},
                {name:`Alam Samalus`,owner:0,type:0,pos:[2026,959]},
                {name:`Nibeiwa`,owner:0,type:0,pos:[2302,986]},
                {name:`Sidi Barrani`,owner:0,type:1,pos:[2333,667]},
            ],connect:[
                {name:[`Sidi Barrani`,`Buq Buq`]},
                {name:[`Byut Fadit`,`Buq Buq`]},
                {name:[`Alam Elkidad`,`Byut Fadit`]},
                {name:[`Alam Elkidad`,`Qalala`]},
                {name:[`Qalala`,`Sollum`]},
                {name:[`Sollum`,`Musaid`]},
                {name:[`Musaid`,`Fort Capuzzo`]},
                {name:[`Fort Capuzzo`,`Bir Salah el Gebescim`]},
                {name:[`Bir Salah el Gebescim`,`Bardia`]},
                {name:[`Bardia`,`Bir el Masri`]},

                {name:[`Bir el Masri`,`Carmuset Scegheila`]},
                {name:[`Carmuset Scegheila`,`Bir el Menastir`]},
                {name:[`Bir el Menastir`,`Bir el Baheira`]},
                {name:[`Bir el Baheira`,`Gasr el Arid`]},
                {name:[`Bir Salah el Gebescim`,`Sidi Azeiz`]},
                {name:[`Sidi Azeiz`,`Fort Capuzzo`]},
                {name:[`Sidi Azeiz`,`Bir el Hariga`]},
                {name:[`Bir el Hariga`,`Gasr el Arid`]},
                {name:[`Gasr el Arid`,`Gambut`]},
                {name:[`Fort Capuzzo`,`Point 206`]},

                {name:[`Point 206`,`Alam Abu Diyak`]},
                {name:[`Alam Abu Diyak`,`Point 207`]},
                {name:[`Sidi Suleiman`,`Point 207`]},
                {name:[`Point 207`,`Point 187`]},
                {name:[`Halfaya Pass`,`Qalala`]},
                {name:[`Halfaya Pass`,`Bir Nuh`]},
                {name:[`Fort Capuzzo`,`Bir Ghirba`]},
                {name:[`Bir Ghirba`,`Gabr el Gerrari`]},
                {name:[`Gabr el Gerrari`,`Omar Nuovo`]},
                {name:[`Omar Nuovo`,`Sidi Omar`]},

                {name:[`Sidi Omar`,`Bir el Harush`]},
                {name:[`Bir el Harush`,`Bir Sheferzen`]},
                {name:[`Bir el Harush`,`Qaryet Abu Fans`]},
                {name:[`Qaryet Abu Fans`,`Alam Abu Diyak`]},
                {name:[`Qaryet Abu Fans`,`Sidi Suleiman`]},
                {name:[`Sidi Suleiman`,`Bir el Khireigat`]},
                {name:[`Bir el Khireigat`,`Halfway House`]},
                {name:[`Bir Nuh`,`Bir el Siweiyat`]},
                {name:[`Bir el Siweiyat`,`Alam Elkidad`]},
                {name:[`Halfway House`,`Sauani el Augerin`]},

                {name:[`Iluet Elscin`,`Bir el Siweiyat`]},
                {name:[`Iluet Elscin`,`Byut Fadit`]},
                {name:[`Iluet Elscin`,`Sauani el Augerin`]},
                {name:[`Sauani el Augerin`,`Alam Samalus`]},
                {name:[`Alam Samalus`,`Buq Buq`]},
                {name:[`Alam Samalus`,`Saryet et Sabil`]},
                {name:[`Saryet et Sabil`,`Sauani el Augerin`]},
                {name:[`Sidi Barrani`,`Nibeiwa`]},
                {name:[`Nibeiwa`,`Alam Samalus`]},
                {name:[`Bir Nuh`,`Point 207`]},

                {name:[`Gabr el Gerrari`,`Gabr Lachem`]},
                {name:[`Gabr Lachem`,`Umm Maalif`]},
                {name:[`Umm Maalif`,`Bir el Hariga`]},
                {name:[`Gabr Saleh`,`Umm Maalif`]},
                {name:[`Bir Sheferzen`,`Gasr el Abid`]},
                {name:[`Gasr el Abid`,`Bir Gibni`]},
                {name:[`Bir Gibni`,`Gabr Saleh`]},
                {name:[`Gasr el Abid`,`Bir el Khireigat`]},
                {name:[`Gabr Lachem`,`Bir et Tgheit`]},
                {name:[`Bir et Tgheit`,`Bir Bu Deheua`]},
                
                {name:[`Bir Bu Deheua`,`Omar Nuovo`]},
                {name:[`Omar Nuovo`,`Libyan Omar`]},
                {name:[`Libyan Omar`,`Ghot Adhidiba`]},
                {name:[`Ghot Adhidiba`,`Alam Abu Diyak`]},
                {name:[`Alam Abu Diyak`,`Point 187`]},
                {name:[`Point 187`,`Halfaya Pass`]},
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
                    name:`Reduction of the Frontier`,
                    strength:{name:`Companies`,num:[[26],[3,21]]},partition:[[0],[1],[2]],bonus:0,
                    unit:[
                        {
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`55th Infantry Division "Savona"`,`55ª Divisione di Fanteria Autotransportabile "Savona"`],name:`55`,designation:`Savona`,commander:`de Giorgis`,icon:`savona`,
                            pos:[1142,805],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`15th Infantry Regiment`,`15° Reggimento di Fanteria "Savona"`],name:`15`,designation:`Savona`,commander:`Pedrazzoli`,icon:`savona`,
                                    pos:[988,805],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`3rd Battalion, 15th Infantry Regiment`,`III Battaglione Fucilieri, 15° Reggimento di Fanteria Motorizzata "Savona"`],name:`3`,designation:`15`,commander:`Ugolini`,icon:`savona`,
                                            pos:[1243,791],
                                            elements:[
                                                {
                                                    level:4,type:[`Infantry`],team:`Italian`,
                                                    desc:[`9th Company, 15th Infantry Regiment`,`9° Compagnia Fucilieri, 15° Reggimento di Fanteria Motorizzata "Savona"`],name:`9`,designation:`15`,commander:``,icon:`savona`,
                                                    pos:[1301,834],
                                                    elements:[
                                                        {type:`Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`],team:`Italian`,
                                                    desc:[`11th Company, 15th Infantry Regiment`,`11° Compagnia Fucilieri, 15° Reggimento di Fanteria Motorizzata "Savona"`],name:`11`,designation:`15`,commander:``,icon:`savona`,
                                                    pos:[1217,834],
                                                    elements:[
                                                        {type:`Infantry Company`},
                                                    ],
                                                },{
                                                    level:4,type:[`Infantry`,`Heavy`],team:`Italian`,
                                                    desc:[`12th Company, 15th Infantry Regiment`,`12° Compagnia Fucilieri, 15° Reggimento di Fanteria Motorizzata "Savona"`],name:`12`,designation:`15`,commander:``,icon:`savona`,
                                                    pos:[1155,858],
                                                    elements:[
                                                        {type:`Heavy Infantry Company`},
                                                    ],
                                                },
                                            ],
                                        },{
                                            level:4,type:[`Infantry`,`Heavy`],team:`Italian`,
                                            desc:[`8th Company, 15th Infantry Regiment`,`8° Compagnia Fucilieri, 15° Reggimento di Fanteria Motorizzata "Savona"`],name:`8`,designation:`15`,commander:``,icon:`savona`,
                                            pos:[1171,741],
                                            elements:[
                                                {type:`Heavy Infantry Company`},
                                            ],
                                        },{
                                            level:4,type:[`Mortar`],team:`Italian`,
                                            desc:[`15th Mortar Company`,`15° Compagnia Mortaio`],name:`15`,designation:``,commander:``,icon:`savona`,
                                            pos:[1051,811],
                                            elements:[
                                                {type:`Mortar Company`},
                                            ],
                                        },
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Machine Gun`],team:`Italian`,
                                    desc:[`155st Machine Gun Battalion`,`155º Battaglione Mitraglieri`],name:`155`,designation:``,commander:`Grande`,icon:`savona`,
                                    pos:[977,850],
                                    elements:[
                                        {
                                            level:4,type:[`Infantry`,`Machine Gun`],team:`Italian`,
                                            desc:[`2nd Company, 155st Machine Gun Battalion`,`2° Compagnia, 155º Battaglione Mitraglieri`],name:`2`,designation:`155`,commander:``,icon:`savona`,
                                            pos:[904,865],
                                            elements:[
                                                {type:`Machine Gun Company`},
                                            ],
                                        },
                                    ],
                                },{
                                    level:3,type:[`Artillery`],team:`Italian`,
                                    desc:[`Independent Coastal Artillery Group`,`Gruppo Autonomo di Artiglieria Costiera`],name:`Coastal`,designation:``,commander:`Verri`,icon:`savona`,
                                    pos:[1271,751],
                                    elements:[
                                        {level:4,type:`Tiny Coastal Artillery Battery`,team:`Italian`,desc:[`8th Independent Coastal Artillery Battery`,`8° Batteria Autonomo di Artiglieria Costiera`],name:`8`,designation:`Coastal`,commander:``},
                                        {level:4,type:`Smaller Coastal Artillery Battery`,team:`Italian`,desc:[`27th Independent Coastal Artillery Battery`,`27° Batteria Autonomo di Artiglieria Costiera`],name:`27`,designation:`Coastal`,commander:``},
                                        {level:4,type:`Small Coastal Artillery Battery`,team:`Italian`,desc:[`503rd Independent Coastal Artillery Battery`,`503° Batteria Autonomo di Artiglieria Costiera`],name:`503`,designation:`Coastal`,commander:``},
                                        {level:4,type:`Small Coastal Artillery Battery`,team:`Italian`,desc:[`504th Independent Coastal Artillery Battery`,`504° Batteria Autonomo di Artiglieria Costiera`],name:`504`,designation:`Coastal`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Oasis Infantry`],team:`German`,
                                    desc:[`300th Special Purpose Battalion Staff "Oasis"`,`Bataillonstab z.b.V. 300 "Oasen"`],name:`300`,designation:`z.b.V.\nOasis`,commander:`Ennecerus`,icon:`90l`,
                                    pos:[1241,710],
                                    elements:[
                                        {
                                            level:4,type:[`Oasis Infantry`],team:`German`,
                                            desc:[`6th Oasis Company`,`Oasen Kompanie 6`],name:`6`,designation:`Oasis`,commander:`Lauer`,icon:`90l`,
                                            pos:[1329,776],
                                            elements:[
                                                {type:`Oasis Infantry Company`},
                                            ]
                                        },{
                                            level:4,type:[`Oasis Infantry`],team:`German`,
                                            desc:[`12th Oasis Company`,`Oasen Kompanie 12`],name:`12`,designation:`Oasis`,commander:`Schön`,icon:`90l`,
                                            pos:[1266,666],
                                            elements:[
                                                {type:`Oasis Infantry Company`},
                                            ]
                                        },
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`German`,
                            desc:[`Bardia Division`,`Division Bardia`],name:`Bardia`,designation:``,commander:`Schmitt`,icon:``,
                            pos:[1147,269],
                            elements:[
                                {
                                    level:3,type:[`Infantry`],team:`Italian`,
                                    desc:[`2nd Battalion, 15th Infantry Regiment`,`II Battaglione Fucilieri, 15° Reggimento di Fanteria Motorizzata "Savona"`],name:`2`,designation:`15`,commander:`Russo`,icon:`savona`,
                                    pos:[1051,206],
                                    elements:[
                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`5th Company, 15th Infantry Regiment`,`5° Compagnia Fucilieri, 15° Reggimento di Fanteria Motorizzata "Savona"`],name:`5`,designation:`15`,commander:``},
                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`6th Company, 15th Infantry Regiment`,`6° Compagnia Fucilieri, 15° Reggimento di Fanteria Motorizzata "Savona"`],name:`6`,designation:`15`,commander:``},
                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`7th Company, 15th Infantry Regiment`,`7° Compagnia Fucilieri, 15° Reggimento di Fanteria Motorizzata "Savona"`],name:`7`,designation:`15`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Infantry`],team:`Italian`,
                                    desc:[`2nd Battalion, 16th Infantry Regiment`,`II Battaglione Fucilieri, 15° Reggimento di Fanteria Motorizzata "Savona"`],name:`2`,designation:`16`,commander:`Aveta`,icon:`savona`,
                                    pos:[1126,356],
                                    elements:[
                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`5th Company, 16th Infantry Regiment`,`5° Compagnia Fucilieri, 16° Reggimento di Fanteria Motorizzata "Savona"`],name:`5`,designation:`16`,commander:``},
                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`6th Company, 16th Infantry Regiment`,`6° Compagnia Fucilieri, 16° Reggimento di Fanteria Motorizzata "Savona"`],name:`6`,designation:`16`,commander:``},
                                        {level:4,type:`Infantry Company`,team:`Italian`,desc:[`7th Company, 16th Infantry Regiment`,`7° Compagnia Fucilieri, 16° Reggimento di Fanteria Motorizzata "Savona"`],name:`7`,designation:`16`,commander:``},
                                        {level:4,type:`Heavy Infantry Company`,team:`Italian`,desc:[`8th Company, 16th Infantry Regiment`,`8° Compagnia Fucilieri, 16° Reggimento di Fanteria Motorizzata "Savona"`],name:`8`,designation:`16`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Machine Gun`],team:`Italian`,
                                    desc:[`4th Machine Gun Squadrons Group "Genova Cavalleria"`,`IV Gruppo Squadroni Mitraglieri "Genova Cavalleria"`],name:`4`,designation:`Genova\nCavalleria`,commander:`Pierucci`,icon:`savona`,
                                    pos:[1196,414],
                                    elements:[
                                        {level:4,type:`Machine Gun Company`,team:`Italian`,desc:[`1st Company, 4th Machine Gun Squadrons Group "Genova Cavalleria"`,`1° Squadrone, IV Gruppo Squadroni Mitraglieri "Genova Cavalleria"`],name:`1`,designation:`4 Genova`,commander:``},
                                        {level:4,type:`Machine Gun Company`,team:`Italian`,desc:[`2nd Company, 4th Machine Gun Squadrons Group "Genova Cavalleria"`,`2° Squadrone, IV Gruppo Squadroni Mitraglieri "Genova Cavalleria"`],name:`2`,designation:`4 Genova`,commander:``},
                                        {level:4,type:`Machine Gun Company`,team:`Italian`,desc:[`3rd Company, 4th Machine Gun Squadrons Group "Genova Cavalleria"`,`3° Squadrone, IV Gruppo Squadroni Mitraglieri "Genova Cavalleria"`],name:`3`,designation:`4 Genova`,commander:``},
                                        {level:4,type:`Machine Gun Company`,team:`Italian`,desc:[`4th Company, 4th Machine Gun Squadrons Group "Genova Cavalleria"`,`4° Squadrone, IV Gruppo Squadroni Mitraglieri "Genova Cavalleria"`],name:`4`,designation:`4 Genova`,commander:``},
                                    ],
                                },{
                                    level:4,type:[`Engineer`,`Motorized`],team:`German`,
                                    desc:[`2nd Company, 39th Engineer Battalion`,`2. Panzer-Pionier-Bataillon 39`],name:`2`,designation:`39`,commander:`Streitz`,icon:`90l`,
                                    pos:[1065,290],
                                    elements:[
                                        {type:`Motorized Engineer Company`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                            desc:[`2nd New Zealand Division`,`The New Zealand Division`],name:`2`,designation:``,commander:`Freyberg`,icon:`2nz`,
                            pos:[1155,1189],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                                    desc:`4th New Zealand Infantry Brigade`,name:`4`,designation:``,commander:`Inglis`,icon:`2nz`,
                                    pos:[1597,936],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                                            desc:`18th New Zealand Infantry Battalion`,name:`18`,designation:``,commander:`Peart`,icon:`2nz`,
                                            pos:[1397,846],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`New Zealand`,desc:`A Company, 18th New Zealand Infantry Battalion`,name:`A`,designation:`18`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`New Zealand`,desc:`B Company, 18th New Zealand Infantry Battalion`,name:`B`,designation:`18`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`New Zealand`,desc:`C Company, 18th New Zealand Infantry Battalion`,name:`C`,designation:`18`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`New Zealand`,desc:`D Company, 18th New Zealand Infantry Battalion`,name:`D`,designation:`18`,commander:``},
                                            ]
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                                            desc:`19th New Zealand Infantry Battalion`,name:`19`,designation:``,commander:`Hartnell`,icon:`2nz`,
                                            pos:[1057,897],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`New Zealand`,desc:`A Company, 19th New Zealand Infantry Battalion`,name:`A`,designation:`19`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`New Zealand`,desc:`B Company, 19th New Zealand Infantry Battalion`,name:`B`,designation:`19`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`New Zealand`,desc:`C Company, 19th New Zealand Infantry Battalion`,name:`C`,designation:`19`,commander:``},
                                            ]
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                                            desc:`20th New Zealand Infantry Battalion`,name:`20`,designation:``,commander:`Kippenberger`,icon:`2nz`,
                                            pos:[761,918],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`New Zealand`,desc:`B Company, 20th New Zealand Infantry Battalion`,name:`B`,designation:`20`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`New Zealand`,desc:`C Company, 20th New Zealand Infantry Battalion`,name:`C`,designation:`20`,commander:``},
                                            ]
                                        },
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                                    desc:`5th New Zealand Infantry Brigade`,name:`5`,designation:``,commander:` ̶H̶a̶r̶g̶e̶s̶t̶`,icon:`2nz`,
                                    pos:[844,405],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                                            desc:`21st New Zealand Infantry Battalion`,name:`21`,designation:``,commander:`Fitzpatrick`,icon:`2nz`,
                                            pos:[1204,524],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`New Zealand`,desc:`A Company, 21st New Zealand Infantry Battalion`,name:`A`,designation:`21`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`New Zealand`,desc:`D Company, 21st New Zealand Infantry Battalion`,name:`D`,designation:`21`,commander:``},
                                            ]
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                                            desc:`22nd New Zealand Infantry Battalion`,name:`22`,designation:``,commander:`Andrew`,icon:`2nz`,
                                            pos:[876,162],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`New Zealand`,desc:`B Company, 22nd New Zealand Infantry Battalion`,name:`B`,designation:`22`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`New Zealand`,desc:`C Company, 22nd New Zealand Infantry Battalion`,name:`C`,designation:`22`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`New Zealand`,desc:`D Company, 22nd New Zealand Infantry Battalion`,name:`D`,designation:`22`,commander:``},
                                            ]
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                                            desc:`23rd New Zealand Infantry Battalion`,name:`23`,designation:``,commander:`Leckie`,icon:`2nz`,
                                            pos:[1000,400],
                                            elements:[
                                                {level:4,type:`Motorized Infantry Company`,team:`New Zealand`,desc:`A Company, 23rd New Zealand Infantry Battalion`,name:`A`,designation:`23`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`New Zealand`,desc:`B Company, 23rd New Zealand Infantry Battalion`,name:`B`,designation:`23`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`New Zealand`,desc:`C Company, 23rd New Zealand Infantry Battalion`,name:`C`,designation:`23`,commander:``},
                                                {level:4,type:`Motorized Infantry Company`,team:`New Zealand`,desc:`D Company, 23rd New Zealand Infantry Battalion`,name:`D`,designation:`23`,commander:``},
                                            ]
                                        },
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`],team:`Māori`,
                                    desc:`28th "Māori" New Zealand Infantry Battalion`,name:`28`,designation:``,commander:`Dittmer`,icon:`2nz`,
                                    pos:[1152,670],
                                    elements:[
                                        {level:4,type:`Motorized Infantry Company`,team:`Māori`,desc:`A Company, 28th "Māori" New Zealand Infantry Battalion`,name:`A`,designation:`28`,commander:``},
                                        {level:4,type:`Motorized Infantry Company`,team:`Māori`,desc:`B Company, 28th "Māori" New Zealand Infantry Battalion`,name:`B`,designation:`28`,commander:``},
                                        {level:4,type:`Motorized Infantry Company`,team:`Māori`,desc:`C Company, 28th "Māori" New Zealand Infantry Battalion`,name:`C`,designation:`28`,commander:``},
                                        {level:4,type:`Motorized Infantry Company`,team:`Māori`,desc:`D Company, 28th "Māori" New Zealand Infantry Battalion`,name:`D`,designation:`28`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Artillery`,`Motorized`],team:`New Zealand`,
                                    desc:[`4th New Zealand Artillery Battalion`,`4th New Zealand Field Regiment`],name:`4`,designation:``,commander:`Duff`,icon:`2nz`,
                                    pos:[1125,1002],
                                    elements:[
                                        {level:4,type:`Motorized Artillery Battery`,team:`New Zealand`,desc:[`A Battery, 4th New Zealand Artillery Battalion`,`A Battery, 4th New Zealand Field Regiment`],name:`A`,designation:`RNZA`,commander:``},
                                        {level:4,type:`Motorized Artillery Battery`,team:`New Zealand`,desc:[`B Battery, 4th New Zealand Artillery Battalion`,`B Battery, 4th New Zealand Field Regiment`],name:`B`,designation:`RNZA`,commander:``},
                                        {level:4,type:`Motorized Artillery Battery`,team:`New Zealand`,desc:[`C Battery, 4th New Zealand Artillery Battalion`,`C Battery, 4th New Zealand Field Regiment`],name:`C`,designation:`RNZA`,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Artillery`,`Motorized`],team:`New Zealand`,
                                    desc:[`5th New Zealand Artillery Battalion`,`5th New Zealand Field Regiment`],name:`5`,designation:``,commander:`Fraser`,icon:`2nz`,
                                    pos:[1071,636],
                                    elements:[
                                        {level:4,type:`Motorized Artillery Battery`,team:`New Zealand`,desc:[`C Battery, 5th New Zealand Artillery Battalion`,`C Battery, 5th New Zealand Field Regiment`],name:`C`,designation:`5`,commander:``},
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
                {name:`Bardia`,owner:2,type:1,pos:[2284,671]},
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
                /*{
                    name:`Operation Battleaxe - Old`,
                    strength:{name:`Battalions`,num:[[20],[8,12]]},partition:[[0],[1],[2]],bonus:0,
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
                                    desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:`Mayer`,icon:`15pz`,
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
                },*/{
                    name:`Operation Crusader`,
                    strength:{name:`Battalions`,num:[[38],[14,28]]},partition:[[0],[1],[2]],bonus:1,
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
                                    desc:[`2nd New Zealand Division Artillery Command`,`The New Zealand Division Artillery Command`],name:`2`,designation:``,commander:`Miles`,icon:`2nz`,
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
                                        {level:3,type:`Infantry`,team:`Polish`,desc:[`1st Carpathian Rifle Battalion`,`1 Batalion Strzelców Karpackich`],name:`1`,designation:``,commander:`Kopeć`},
                                        {level:3,type:`Infantry`,team:`Polish`,desc:[`2nd Carpathian Rifle Battalion`,`2 Batalion Strzelców Karpackich`],name:`2`,designation:``,commander:`Brzósko`},
                                        {level:3,type:`Infantry`,team:`Polish`,desc:[`3rd Carpathian Rifle Battalion`,`3 Batalion Strzelców Karpackich`],name:`3`,designation:``,commander:`Sokol`},
                                        {level:3,type:`Infantry`,team:`Czechoslovak`,desc:[`11th Czechoslovak Infantry Battalion`,`11. Československý Pěší Prapor — Východní`],name:`11`,designation:``,commander:`Klapálek`},
                                        {level:3,type:`Machine Gun`,team:`Polish`,desc:[`Carpathian "Uhlans" Machine Gun Battalion`,`Pułk Ułanów Karpackich`],name:`U`,designation:``,commander:`Bobiński`},
                                        {level:3,type:`Artillery`,team:`Polish`,desc:[`Carpathian Artillery Regiment`,`Karpacki Pułk Artylerii`],name:`C`,designation:``,commander:`Gliwicz`},
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
                                        {level:3,type:`Small Coastal Artillery`,team:`Italian`,desc:[`Independent Coastal Artillery Group`,`Gruppo Autonomo di Artiglieria Costiera`],name:`Coastal`,designation:``,commander:`Verri`,icon:`savona`},
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
                                    desc:[`4th Machine Gun Squadrons Group "Genova Cavalleria"`,`IV Gruppo Squadroni Mitraglieri "Genova Cavalleria"`],name:`4`,designation:`Genova\nCavalleria`,commander:`Pierucci`,icon:`savona`,
                                    pos:[2358,967],
                                    elements:[
                                        {level:3,type:`Machine Gun`,team:`Italian`,desc:[`4th Machine Gun Squadrons Group "Genova Cavalleria"`,`IV Gruppo Squadroni Mitraglieri "Genova Cavalleria"`],name:`4`,designation:`Genova`,commander:`Pierucci`},
                                    ],
                                },{
                                    level:3,type:[`Oasis Infantry`],team:`German`,
                                    desc:[`300th Special Purpose Battalion Staff "Oasis"`,`Bataillonstab z.b.V. 300 "Oasen"`],name:`300`,designation:`z.b.V.\nOasis`,commander:`Ennecerus`,icon:`90l`,
                                    pos:[2405,1069],
                                    elements:[
                                        {level:4,type:`Oasis Infantry Company`,team:`German`,desc:[`6th Oasis Company`,`Oasen Kompanie 6`],name:`6`,designation:`Oasis`,commander:`Lauer`},
                                        {level:4,type:`Oasis Infantry Company`,team:`German`,desc:[`12th Oasis Company`,`Oasen Kompanie 12`],name:`12`,designation:`Oasis`,commander:`Schön`},
                                        {level:4,type:`Motorized Engineer Company`,team:`German`,desc:[`2nd Company, 39th Engineer Battalion`,`2. Panzer-Pionier-Bataillon 39`],name:`2`,designation:`39`,commander:`Streitz`},
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
                    strength:{name:`Battalions`,num:[[40],[16,19]]},partition:[[1],[2],[0]],bonus:2,
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
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`3rd Battalion, Royal Horse Artillery`,`3rd Regiment, Royal Horse Artillery`],name:`3`,designation:`Royal\nHorse`,commander:`Wilson`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`7th Motor Brigade`,name:`7`,designation:``,commander:`Renton`,icon:`7sg`,
                                    pos:[1258,1138],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, King's Royal Rifle Corps`,name:`2`,designation:`King's Royal\nRifle Corps`,commander:`Erskine`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Edwardes`},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:``,commander:``},
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
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Cape Town Highlanders`,name:`1`,designation:`Cape Town\nHighlanders`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`2nd Battalion, Field Force`,name:`2`,designation:`Field\nForce`,commander:``},
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
                            desc:[`Armored Reconnaissance Regrouping`,`Raggruppamento Esplorante Corazzato`],name:`RECo`,designation:``,commander:`de Meo`,icon:``,
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
                                    desc:[`200th Light Infantry Regiment`,`Leichtes Infanterie-Regiment 200`],name:`200`,designation:``,commander:`Köster`,icon:`90l`,
                                    pos:[490,95],
                                    elements:[
                                        {level:3,type:`Semi-Motorized Armed Infantry`,team:`German`,desc:[`1st Battalion, 200th Light Infantry Regiment`,`I./Leichtes Infanterie-Regiment 200`],name:`1`,designation:`200`,commander:`von Debschütz`},
                                        {level:3,type:`Semi-Motorized Armed Infantry`,team:`German`,desc:[`2nd Battalion, 200th Light Infantry Regiment`,`II./Leichtes Infanterie-Regiment 200`],name:`2`,designation:`200`,commander:`Panzenhagen`},
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
                    strength:{name:`Battalions`,num:[[28],[14,18]]},partition:[[1],[2],[0]],bonus:1,
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
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, King's Own Roayl Regiment (Lancaster)`,name:`1`,designation:`King's\nOwn`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`2nd Battalion, 11th Sikh Regiment`,name:`2/11`,designation:`Sikh`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`3rd Battalion, 5th Mahratta Light Infantry`,name:`3/5`,designation:`Mahratta`,commander:``},
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
                                            desc:`Scottcol`,name:`Scottcol`,designation:``,commander:`Scott`,icon:`4id`,
                                            pos:[373,700],
                                            elements:[
                                                {level:3,type:`Weaker Motorized Infantry`,team:`Indian`,desc:`Scottcol`,name:`Scottcol`,designation:``,commander:`Scott`},
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
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`3rd Battalion, Royal Horse Artillery`,`3rd Regiment, Royal Horse Artillery`],name:`3`,designation:`Royal\nHorse`,commander:`Wilson`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`7th Motor Brigade`,name:`7`,designation:``,commander:`Garmoyle`,icon:`7sg`,
                                    pos:[400,920],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, King's Royal Rifle Corps`,name:`2`,designation:`King's Royal\nRifle Corps`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Turner`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, London Rifle Brigade`,name:`1`,designation:`London Rifle\nBrigade`,commander:``},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:``,commander:``},
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
                            desc:[`2nd New Zealand Division`,`The New Zealand Division`],name:`2`,designation:``,commander:`Freyberg`,icon:`2nz`,
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
                                    desc:[`2nd New Zealand Division Artillery Command`,`The New Zealand Division Artillery Command`],name:`2`,designation:``,commander:`Miles`,icon:`2nz`,
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
                            desc:[`Armored Reconnaissance Regrouping`,`Raggruppamento Esplorante Corazzato`],name:`RECo`,designation:``,commander:`de Meo`,icon:``,
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
                                    level:2,type:[`Infantry`,`Mixed`],team:`German`,
                                    desc:`Sonderverband 288`,name:`288`,designation:``,commander:`Menton`,icon:`90l`,
                                    pos:[165,520],
                                    elements:[
                                        {level:3,type:`Mixed Combat`,team:`German`,desc:`1st Sperrverband, Sonderverband 288`,name:`1`,designation:``,commander:`Daumiller`},
                                        {level:3,type:`Mixed Infantry`,team:`German`,desc:`2nd Sperrverband, Sonderverband 288`,name:`2`,designation:``,commander:`Borhardt`},
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
            name:[`Alamein`,`Base`],
            term:`Alamein`,
            unitScale:1,
            cityScale:1,
            city:[
                {name:`Bir el Abd`,owner:1,type:1,pos:[685,494]},
                {name:`Deir el Hama`,owner:1,type:0,pos:[700,702]},
                {name:`El Kharita`,owner:2,type:0,pos:[706,1047]},
                {name:`Naqb Abu Dweis`,owner:0,type:0,pos:[708,1370]},
                {name:`Deir el Murra`,owner:1,type:0,pos:[756,363]},
                {name:`Tell el Aqqaqir`,owner:2,type:0,pos:[980,254]},
                {name:`Tell el Gora`,owner:2,type:1,pos:[995,17]},
                {name:`Gabriele Quinto`,owner:2,type:0,pos:[1033,132]},
                {name:`Deir el Tarfa`,owner:0,type:0,pos:[1045,900]},
                {name:`Deir el Qatani`,owner:0,type:0,pos:[1076,684]},

                {name:`El Taqa`,owner:0,type:0,pos:[1094,1389]},
                {name:`El Wishka`,owner:0,type:0,pos:[1210,353]},
                {name:`Qaryet Khadim`,owner:0,type:0,pos:[1220,1237]},
                {name:`Deir el Abyad`,owner:0,type:0,pos:[1230,605]},
                {name:`Bir Sultan Omar`,owner:0,type:0,pos:[1258,77]},
                {name:`Bab el Qattara`,owner:0,type:0,pos:[1263,909]},
                {name:`El Mreir`,owner:0,type:0,pos:[1291,734]},
                {name:`Tell el Eisa`,owner:0,type:0,pos:[1329,171]},
                {name:`Ragabet el Rtem`,owner:0,type:0,pos:[1331,1182]},
                {name:`Naqb Rala`,owner:0,type:0,pos:[1373,1396]},

                {name:`Tell el Makh Khad`,owner:0,type:0,pos:[1381,302]},
                {name:`Miteirya`,owner:0,type:0,pos:[1382,425]},
                {name:`Deir el Dhib`,owner:0,type:0,pos:[1390,501]},
                {name:`Deir el Anqar`,owner:0,type:0,pos:[1431,994]},
                {name:`Deir el Shein`,owner:0,type:0,pos:[1448,645]},
                {name:`Deir Alinda`,owner:0,type:0,pos:[1481,1088]},
                {name:`Bir el Maqtua`,owner:0,type:0,pos:[1525,383]},
                {name:`Alam Nayil`,owner:0,type:0,pos:[1584,932]},
                {name:`Boring Works`,owner:0,type:0,pos:[1592,257]},
                {name:`Qaryet el Himeimat`,owner:0,type:0,pos:[1607,1415]},

                {name:`Deir el Mumassib`,owner:0,type:0,pos:[1652,1117]},
                {name:`Ruweisat`,owner:0,type:0,pos:[1674,670]},
                {name:`El Alamein`,owner:0,type:0,pos:[1731,344]},
                {name:`Deir el Muhafid`,owner:0,type:0,pos:[1785,1051]},
                {name:`Alam el Onsol`,owner:0,type:0,pos:[1859,556]},
                {name:`Deir el Hima`,owner:0,type:0,pos:[1863,810]},
                {name:`Qaryet el Humur`,owner:0,type:0,pos:[1876,1479]},
                {name:`Mirbat Aza`,owner:0,type:0,pos:[1961,1138]},
                {name:`Deir el Agram`,owner:0,type:0,pos:[2053,942]},
                {name:`Alam el Halfa`,owner:0,type:0,pos:[2260,686]},

                {name:`El Imayid`,owner:0,type:0,pos:[2385,365]},
                {name:`El Hammam`,owner:0,type:1,pos:[2750,300]},
            ],connect:[
                {name:[`Tell el Gora`,`Gabriele Quinto`]},
                {name:[`Tell el Eisa`,`Bir Sultan Omar`]},
                {name:[`Tell el Eisa`,`Boring Works`]},
                {name:[`El Alamein`,`Boring Works`]},
                {name:[`El Alamein`,`El Imayid`]},
                {name:[`El Hammam`,`El Imayid`]},
                {name:[`El Alamein`,`Ruweisat`]},
                {name:[`Ruweisat`,`Alam Nayil`]},
                {name:[`Alam Nayil`,`Deir el Hima`]},
                {name:[`Deir el Hima`,`Deir el Agram`]},
                
                {name:[`Alam el Halfa`,`El Imayid`]},
                {name:[`Alam Nayil`,`Deir el Mumassib`]},
                {name:[`Deir el Mumassib`,`Qaryet el Himeimat`]},
                {name:[`Qaryet el Humur`,`Qaryet el Himeimat`]},
                {name:[`Naqb Rala`,`Qaryet el Himeimat`]},
                {name:[`Naqb Rala`,`Qaryet Khadim`]},
                {name:[`Qaryet Khadim`,`Ragabet el Rtem`]},
                {name:[`Ragabet el Rtem`,`Deir Alinda`]},
                {name:[`Deir Alinda`,`Deir el Mumassib`]},
                {name:[`Deir Alinda`,`Deir el Anqar`]},
                
                {name:[`Deir el Anqar`,`Bab el Qattara`]},
                {name:[`Deir el Tarfa`,`Bab el Qattara`]},
                {name:[`Bab el Qattara`,`El Mreir`]},
                {name:[`Deir el Tarfa`,`Deir el Qatani`]},
                {name:[`Deir el Shein`,`El Mreir`]},
                {name:[`Deir el Abyad`,`Deir el Qatani`]},
                {name:[`Deir el Shein`,`Ruweisat`]},
                {name:[`Deir el Tarfa`,`Qaryet Khadim`]},
                {name:[`Deir el Tarfa`,`El Kharita`]},
                {name:[`El Kharita`,`Naqb Abu Dweis`]},
                
                {name:[`Qaryet Khadim`,`El Taqa`]},
                {name:[`Naqb Abu Dweis`,`El Taqa`]},
                {name:[`Deir el Hima`,`Deir el Muhafid`]},
                {name:[`Deir el Mumassib`,`Deir el Muhafid`]},
                {name:[`Mirbat Aza`,`Deir el Muhafid`]},
                {name:[`Ruweisat`,`Alam el Onsol`]},
                {name:[`Alam el Onsol`,`El Imayid`]},
                {name:[`El Mreir`,`Deir el Abyad`]},
                {name:[`Deir el Abyad`,`Deir el Dhib`]},
                {name:[`Deir el Dhib`,`Miteirya`]},
                
                {name:[`Miteirya`,`El Wishka`]},
                {name:[`Deir el Abyad`,`El Wishka`]},
                {name:[`Miteirya`,`Tell el Makh Khad`]},
                {name:[`Miteirya`,`Bir el Maqtua`]},
                {name:[`Bir el Maqtua`,`Boring Works`]},
                {name:[`Tell el Makh Khad`,`Tell el Eisa`]},
                {name:[`Tell el Eisa`,`El Wishka`]},
                {name:[`Deir el Dhib`,`Deir el Shein`]},
                {name:[`Deir el Qatani`,`Deir el Hama`]},
                {name:[`El Kharita`,`Deir el Hama`]},
                
                {name:[`Bir el Abd`,`Deir el Hama`]},
                {name:[`Bir el Abd`,`Deir el Murra`]},
                {name:[`Tell el Gora`,`Bir Sultan Omar`]},
                {name:[`Gabriele Quinto`,`Tell el Aqqaqir`]},
                {name:[`Tell el Aqqaqir`,`Deir el Murra`]},
                {name:[`Qaryet el Humur`,`Mirbat Aza`]},
                {name:[`Mirbat Aza`,`Deir el Agram`]},
                {name:[`Deir el Anqar`,`Alam Nayil`]},
                {name:[`El Wishka`,`Tell el Aqqaqir`]},
                {name:[`Alam el Halfa`,`Deir el Agram`]},
            ],team:[
                {name:`British`,term:`britain`,player:0,quality:1},
                {name:`New Zealand`,term:`new zealand`,player:0,quality:1},
                {name:`South African`,term:`south africa`,player:0,quality:0.95},
                {name:`Polish`,term:`poland`,player:0,quality:1},
                {name:`Australian`,term:`australia`,player:0,quality:1.05},
                {name:`Czechoslovak`,term:`czechoslovakia`,player:0,quality:1},
                {name:`Māori`,term:`maori`,player:0,quality:1},
                {name:`Indian`,term:`india`,player:0,quality:0.95},
                {name:`German`,term:`germany`,player:1,quality:1.3},
                {name:`Italian`,term:`italy`,player:2,quality:0.95},
            ],player:[
                {name:`British`,color:[0,100,250],side:0},
                {name:`German`,color:[150,50,0],side:1},
                {name:`Italian`,color:[0,200,0],side:1},
            ],side:[
                {name:`Allied`,supply:25},
                {name:`Axis`,supply:20},
            ],unit:[
                {
                    name:`First Battle of El Alamein`,
                    strength:{name:`Battalions`,num:[[48],[15,21]]},partition:[[1],[2],[0]],bonus:1,
                    unit:[
                        {
                            level:1,type:[`Infantry`,`Motorized`],team:`Australian`,
                            desc:`20th Australian Infantry Brigade`,name:`20`,designation:``,commander:`Windeyer`,icon:`9a`,
                            pos:[2750,300],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`Australian`,desc:[`13th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/13th Australian Infantry Battalion`],name:`2/13`,designation:``,commander:`Burrows`},
                                {level:3,type:`Motorized Infantry`,team:`Australian`,desc:[`15th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/15th Australian Infantry Battalion`],name:`2/15`,designation:``,commander:`Magno`},
                                {level:3,type:`Motorized Infantry`,team:`Australian`,desc:[`17th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/17th Australian Infantry Battalion`],name:`2/17`,designation:``,commander:`Crawford`},
                                {level:3,type:`Light Tank`,team:`Australian`,desc:[`6th Australian Division Tank Battalion`,`6th Australian Divisional Cavalry`],name:`6`,designation:`Divisional\nCavalry`,commander:`Morrison`,icon:``},
                            ],
                        },{
                            level:3,type:[`Tank`,`Superior`],team:`British`,
                            desc:[`8th Battalion, Irish Hussars`,`8th Irish Hussars`],name:`8`,designation:`Irish\nHussars`,commander:`Kilkelly`,icon:`4id`,
                            pos:[2899,774],
                            elements:[
                                {level:3,type:`Superior Tank`,team:`British`,desc:[`8th Battalion, Irish Hussars`,`8th Irish Hussars`],name:`8`,designation:`Irish\nHussars`,commander:`Kilkelly`},
                            ],
                        },{
                            level:3,type:[`Infantry`,`Motorized`],team:`British`,
                            desc:`1st Battalion, The Buffs (Royal East Kent Regiment)`,name:`1`,designation:`Buffs`,commander:`Knocker`,icon:``,
                            pos:[2679,1365],
                            elements:[
                                {type:`Motorized Infantry`},
                            ]
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:`4th Indian Division`,name:`4`,designation:``,commander:`Briggs`,icon:`4id`,
                            pos:[1094,1389],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`25th Indian Infantry Brigade`,name:`25`,designation:``,commander:`Mountain`,icon:`4id`,
                                    pos:[708,1370],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, King's Own Roayl Regiment (Lancaster)`,name:`1`,designation:`King's\nOwn`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`2nd Battalion, 11th Sikh Regiment`,name:`2/11`,designation:`Sikh`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`3rd Battalion, 5th Mahratta Light Infantry`,name:`3/5`,designation:`Mahratta`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`157th Battalion, Royal Artillery`,`157th Field Regiment, Royal Artillery`],name:`157`,designation:``,commander:``},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`7th Motor Brigade`,name:`7`,designation:``,commander:`Garmoyle`,icon:`7sg`,
                                    pos:[985,1175],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, King's Royal Rifle Corps`,name:`2`,designation:`King's Royal\nRifle Corps`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Turner`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, London Rifle Brigade`,name:`1`,designation:`London Rifle\nBrigade`,commander:``},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:``,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`South African`,
                            desc:`1st South African Infantry Division`,name:`1`,designation:``,commander:`Pienaar`,icon:`1sa`,
                            pos:[1959,556],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                                    desc:`1st South African Infantry Brigade`,name:`1`,designation:``,commander:`Kriegler`,icon:`1sa`,
                                    pos:[1859,556],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Duke of Edinburgh's Own Rifles`,name:`1`,designation:`Duke of\nEdinburgh`,commander:`Seneschall`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Royal Natal Carabineers`,name:`1`,designation:`Royal\nNatal`,commander:`Hay`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Transvaal Scottish Regiment`,name:`1`,designation:`Transvaal\nScottish`,commander:`Smitheman`},
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:[`3rd Battalion, South African Artillery Corps`,`3rd South African Field Regiment`],name:`3`,designation:``,commander:`Whyte`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                                    desc:`2nd South African Infantry Brigade`,name:`2`,designation:``,commander:`du Toit`,icon:`1sa`,
                                    pos:[1627,267],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Natal Mounted Rifles`,name:`1`,designation:`Natal\nMounted`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Cape Town Highlanders`,name:`1`,designation:`Cape Town\nHighlanders`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`2nd Battalion, Field Force`,name:`2`,designation:`Field\nForce`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:[`4th Battalion, South African Artillery Corps`,`4th South African Field Regiment`],name:`4`,designation:``,commander:`Harpur`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`,`Machine Gun`],team:`South African`,
                                    desc:`Machine Gun Battalion "President Steyn"`,name:`PS`,designation:``,commander:`Minnaar`,icon:`1sa`,
                                    pos:[1731,344],
                                    elements:[
                                        {level:3,type:`Motorized Machine Gun`,team:`South African`,desc:`Machine Gun Battalion "President Steyn"`,name:`PS`,designation:``,commander:`Minnaar`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`South African`,
                                    desc:[`6th South African Armored Car Battalion`,`6th South African Armoured Car Regiment`],name:`6`,designation:``,commander:`Short`,icon:`4id`,
                                    pos:[1674,670],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`South African`,desc:[`6th South African Armored Car Battalion`,`6th South African Armoured Car Regiment`],name:`6`,designation:``,commander:`Short`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Tank`],team:`British`,
                            desc:[`7th Armored Division`,`7th Armoured Division`],name:`7`,designation:``,commander:`Renton`,icon:`7a`,
                            pos:[1863,810],
                            elements:[
                                {
                                    level:1,type:[`Tank`],team:`British`,
                                    desc:[`4th Armored Brigade`,`4th Armoured Brigade`],name:`4`,designation:``,commander:`Fisher`,icon:`4ab`,
                                    pos:[1758,522],
                                    elements:[
                                        {level:3,type:`Medium Tank`,team:`British`,desc:[`3rd Battalion, Royal Tank Regiment`,`3rd Royal Tank Regiment`],name:`3`,designation:`Royal Tank\nRegiment`,commander:``},
                                        {level:3,type:`Medium Tank`,team:`British`,desc:[`5th Battalion, Royal Tank Regiment`,`5th Royal Tank Regiment`],name:`5`,designation:`Royal Tank\nRegiment`,commander:`Uniacke`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:``},
                                        {level:3,type:`Motorized Reduced Artillery`,team:`British`,desc:[`3rd Battalion, Royal Horse Artillery`,`3rd Regiment, Royal Horse Artillery`],name:`3`,designation:`Royal\nHorse`,commander:`Wilson`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`18th Indian Infantry Brigade`,name:`18`,designation:``,commander:`Lochner`,icon:`4id`,
                                    pos:[1448,645],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2/5th Battalion, Essex Regiment`,name:`2/5`,designation:`Essex`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`2nd Battalion, 3rd Gurkha Rifles`,name:`2/3`,designation:`Gurkha`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`4th Battalion, 11th Sikh Regiment`,name:`4/11`,designation:`Sikh`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`60th (North Midland) Battalion, Royal Artillery`,`60th (North Midland) Field Regiment, Royal Artillery`],name:`60`,designation:`North\nMidland`,commander:`Hallifax`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`British`,
                                    desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`,icon:`7a`,
                                    pos:[1045,900],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`British`,desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                            desc:[`2nd New Zealand Division`,`The New Zealand Division`],name:`2`,designation:``,commander:`Freyberg`,icon:`2nz`,
                            pos:[1566,1103],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                                    desc:`4th New Zealand Infantry Brigade`,name:`4`,designation:``,commander:`Inglis`,icon:`2nz`,
                                    pos:[1481,1088],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`18th New Zealand Infantry Battalion`,name:`18`,designation:``,commander:`Peart`},
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`19th New Zealand Infantry Battalion`,name:`19`,designation:``,commander:`Hartnell`},
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`20th New Zealand Infantry Battalion`,name:`20`,designation:``,commander:`Burrows`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                                    desc:`5th New Zealand Infantry Brigade`,name:`5`,designation:``,commander:`Kippenberger`,icon:`2nz`,
                                    pos:[1652,1117],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`21st New Zealand Infantry Battalion`,name:`21`,designation:``,commander:`Fitzpatrick`},
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`22nd New Zealand Infantry Battalion`,name:`22`,designation:``,commander:`Andrew`},
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`23rd New Zealand Infantry Battalion`,name:`23`,designation:``,commander:`Leckie`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                                    desc:`6th New Zealand Infantry Brigade`,name:`6`,designation:``,commander:`Barrowclough`,icon:`2nz`,
                                    pos:[1288,828],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`24th New Zealand Infantry Battalion`,name:`24`,designation:``,commander:`Shuttleworth`},
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`25th New Zealand Infantry Battalion`,name:`25`,designation:``,commander:`Burton`},
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`26th New Zealand Infantry Battalion`,name:`26`,designation:``,commander:`Satterthwaite`},
                                    ],
                                },{
                                    level:1,type:[`Artillery`,`Motorized`],team:`New Zealand`,
                                    desc:[`2nd New Zealand Division Artillery Command`,`The New Zealand Division Artillery Command`],name:`2`,designation:``,commander:`Miles`,icon:`2nz`,
                                    pos:[1785,1051],
                                    elements:[
                                        {level:3,type:`Motorized Artillery`,team:`New Zealand`,desc:[`4th New Zealand Artillery Battalion`,`4th New Zealand Field Regiment`],name:`4`,designation:``,commander:`Duff`},
                                        {level:3,type:`Motorized Artillery`,team:`New Zealand`,desc:[`5th New Zealand Artillery Battalion`,`5th New Zealand Field Regiment`],name:`5`,designation:``,commander:`Fraser`},
                                        {level:3,type:`Motorized Artillery`,team:`New Zealand`,desc:[`6th New Zealand Artillery Battalion`,`6th New Zealand Field Regiment`],name:`6`,designation:``,commander:`Weir`},
                                        {level:3,type:`Motorized Anti-Tank`,team:`New Zealand`,desc:[`7th New Zealand Anti-Tank Battalion`,`7th New Zealand Anti-Tank Regiment`],name:`7`,designation:``,commander:`Oakes`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,"Machine Gun"],team:`New Zealand`,
                                    desc:`27th New Zealand Machine Gun Battalion`,name:`27`,designation:``,commander:`Gwilliam`,icon:`2nz`,
                                    pos:[1573,1043],
                                    elements:[
                                        {level:3,type:`Motorized Machine Gun`,team:`New Zealand`,desc:`27th New Zealand Machine Gun Battalion`,name:`27`,designation:``,commander:`Gwilliam`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`],team:`Māori`,
                                    desc:`28th "Māori" New Zealand Infantry Battalion`,name:`28`,designation:``,commander:`Dittmer`,icon:`2nz`,
                                    pos:[1559,1163],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`Māori`,desc:`28th "Māori" New Zealand Infantry Battalion`,name:`28`,designation:``,commander:`Dittmer`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`60th Infantry Division "Sabratha"`,`60ª Divisione di Fanteria Autotransportabile "Sabratha"`],name:`60`,designation:`Sabratha`,commander:`Soldarelli`,icon:`sabratha`,
                            pos:[861,148],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`85th Infantry Regiment`,`85° Reggimento di Fanteria "Sabratha"`],name:`85`,designation:`Sabratha`,commander:`Grimaldi`,icon:`sabratha`,
                                    pos:[1033,132],
                                    elements:[
                                        {level:3,type:`Small Infantry`,team:`Italian`,desc:[`1st Battalion, 85th Infantry Regiment`,`I Battaglione Fucilieri, 85° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`1`,designation:`85`,commander:`Angelozzi`},
                                        {level:3,type:`Small Infantry`,team:`Italian`,desc:[`2nd Battalion, 85th Infantry Regiment`,`II Battaglione Fucilieri, 85° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`2`,designation:`85`,commander:`Morosini`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`86th Infantry Regiment`,`86° Reggimento di Fanteria "Sabratha"`],name:`86`,designation:`Sabratha`,commander:`Castrignanò`,icon:`sabratha`,
                                    pos:[980,254],
                                    elements:[
                                        {level:3,type:`Small Infantry`,team:`Italian`,desc:[`1st Battalion, 86th Infantry Regiment`,`I Battaglione Fucilieri, 86° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`1`,designation:`86`,commander:`Velosa`},
                                        {level:3,type:`Small Infantry`,team:`Italian`,desc:[`2nd Battalion, 86th Infantry Regiment`,`II Battaglione Fucilieri, 86° Reggimento di Fanteria Motorizzata "Sabratha"`],name:`2`,designation:`86`,commander:`Piana`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`Artillery Regrouping "Sabratha"`,`Raggruppamento Artiglieria "Sabratha"`],name:`RA`,designation:`Sabratha`,commander:`Ferrario`,icon:`sabratha`,
                                    pos:[694,182],
                                    elements:[
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`283rd Group, 14th Frontier Guards Artillery Regiment`,`CCLXXXIII Gruppo, 14° Reggimento Artiglieria Guardia alla Frontiera`],name:`283`,designation:`Frontier\nGuard`,commander:`Parrella`},
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`284th Group, 14th Frontier Guards Artillery Regiment`,`CCLXXXIV Gruppo, 14° Reggimento Artiglieria Guardia alla Frontiera`],name:`284`,designation:`Frontier\nGuard`,commander:`Rocchi`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`102nd Infantry Division "Trento"`,`102ª Divisione di Fanteria Motorizzata "Trento"`],name:`102`,designation:`Trento`,commander:`Scotti`,icon:`trento`,
                            pos:[700,702],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`61st Infantry Regiment`,`61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[862,811],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 61st Infantry Regiment`,`I Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 61st Infantry Regiment`,`II Battaglione Fucilieri, 61° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`62nd Infantry Regiment`,`62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[706,1047],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 62nd Infantry Regiment`,`I Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 62nd Infantry Regiment`,`II Battaglione Fucilieri, 62° Reggimento di Fanteria Motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`46th Artillery Regiment`,`46° Reggimento Artiglieria "Trento"`],name:`46`,designation:`Trento`,commander:`Grati`,icon:`trento`,
                                    pos:[492,756],
                                    elements:[
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`1st Group, 46th Artillery Regiment`,`I Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`1`,designation:`46`,commander:`Giannimi`},
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`3rd Group, 46th Artillery Regiment`,`III Gruppo, 46° Reggimento Artiglieria "Trento"`],name:`3`,designation:`46`,commander:`Salvo`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Tank`],team:`Italian`,
                            desc:[`136th Armored Division "Giovani Fascisti"`,`136a Divisione Corazzata "Giovani Fascisti"`],name:`136`,designation:``,commander:`di Nisio`,icon:`ggff`,
                            pos:[78,556],
                            elements:[
                                {
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`Infantry Regiment "Giovani Fascisti"`,`Reggimento di Fanteria "Giovani Fascisti"`],name:`GF`,designation:``,commander:`Nannini`,icon:`ggff`,
                                    pos:[450,1307],
                                    elements:[
                                        {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`1st Battalion, Infantry Regiment "Giovani Fascisti"`,`I Battaglione Fucilieri, Reggimento di Fanteria "Giovani Fascisti"`],name:`1`,designation:`Mi Scaglio\na Ruina`,commander:`Balisti`},
                                        {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`2nd Battalion, Infantry Regiment "Giovani Fascisti"`,`II Battaglione Fucilieri, Reggimento di Fanteria "Giovani Fascisti"`],name:`2`,designation:`Abbi\nFede`,commander:`Benedetti`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`,`Motorized`],team:`Italian`,
                                    desc:[`136th Artillery Regiment`,`136º Reggimento Artiglieria "Giovani Fascisti"`],name:`RBV`,designation:``,commander:`Nicolardi`,icon:`ggff`,
                                    pos:[159,652],
                                    elements:[
                                        {level:3,type:`Motorized Small Artillery`,team:`Italian`,desc:[`14th Group, 136th Artillery Regiment`,`XIV Gruppo, 136º Reggimento Artiglieria "Giovani Fascisti"`],name:`14`,designation:`136`,commander:`da Bino`},
                                        {level:3,type:`Motorized Small Artillery`,team:`Italian`,desc:[`15th Group, 136th Artillery Regiment`,`XV Gruppo, 136º Reggimento Artiglieria "Giovani Fascisti"`],name:`15`,designation:`136`,commander:`Abeille`},
                                        {level:3,type:`Motorized Small Artillery`,team:`Italian`,desc:[`16th Group, 136th Artillery Regiment`,`XVI Gruppo, 136º Reggimento Artiglieria "Giovani Fascisti"`],name:`16`,designation:`136`,commander:`Ghiringhelli`},
                                        {level:3,type:`Motorized Small Artillery`,team:`Italian`,desc:[`17th Group, 136th Artillery Regiment`,`XVII Gruppo, 136º Reggimento Artiglieria "Giovani Fascisti"`],name:`17`,designation:`136`,commander:`Geranzani`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`Italian`,
                                    desc:[`3rd Armored Car Squadrons Group "Cavalleggeri di Monferrato"`,`III Gruppo Squadroni Corazzato "Cavalleggeri di Monferrato"`],name:`3`,designation:`Cavalleggeri\ndi Monferrato`,commander:`Lanzuolo`,icon:`ggff`,
                                    pos:[72,360],
                                    elements:[
                                        {type:`Armored Car`},
                                    ],
                                },
                            ],
                        },{
                            level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                            desc:[`7th Bersaglieri Regiment`,`7° Reggimento Bersaglieri`],name:`7`,designation:`Bersaglieri`,commander:`Scirocco`,icon:`trento`,
                            pos:[443,271],
                            elements:[
                                {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`10th Bersaglieri Battalion`,`10° Battaglione Bersaglieri`],name:`10`,designation:`Bersaglieri`,commander:`Adolfato`},
                                {level:3,type:`Motorized Machine Gun Bersaglieri`,team:`Italian`,desc:[`11th Bersaglieri Battalion`,`11° Battaglione Bersaglieri`],name:`11`,designation:`Bersaglieri`,commander:`Straziota`},
                            ],
                        },{
                            level:0,type:[`Tank`],team:`German`,
                            desc:[`15th Panzer Division`,`15. Panzer-Division`],name:`15`,designation:``,commander:`von Värst`,icon:`15pz`,
                            pos:[685,494],
                            elements:[
                                {
                                    level:2,type:[`Tank`],team:`German`,
                                    desc:[`8th Panzer Regiment`,`Panzer-Regiment 8`],name:`8`,designation:``,commander:`Teege`,icon:`15pz`,
                                    pos:[848,578],
                                    elements:[
                                        {level:3,type:`Medium Tank`,team:`German`,desc:[`1st Battalion, 8th Panzer Regiment`,`I./Panzer-Regiment 8`],name:`1`,designation:`8`,commander:`Kümmel`},
                                        {level:3,type:`Motorized Engineer`,team:`German`,desc:[`33rd Engineer Battalion`,`Panzer-Pionier-Bataillon 33`],name:`33`,designation:``,commander:`Beheim-Schwarzbach`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`115th Rifle Regiment`,`Schützen-Regiment 115`],name:`115`,designation:``,commander:`Baade`,icon:`15pz`,
                                    pos:[911,475],
                                    elements:[
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`1st Battalion, 115th Rifle Regiment`,`I./Schützen-Regiment 115`],name:`1`,designation:`115`,commander:`von Grolmann`},
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`3rd Battalion, 115th Rifle Regiment`,`III./Schützen-Regiment 115`],name:`3`,designation:`115`,commander:`Warrelmann`},
                                        {level:3,type:`Motorized Anti-Tank`,team:`German`,desc:[`33rd Anti-Tank Battalion`,`Panzerjäger-Abteilung 33`],name:`33`,designation:``,commander:`Beil`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`,`Motorized`],team:`German`,
                                    desc:[`33rd Artillery Regiment`,`Artillerie-Regiment (mot.) 33`],name:`33`,designation:``,commander:`Crasemann`,icon:`15pz`,
                                    pos:[ 788,480],
                                    elements:[
                                        {level:3,type:`Motorized Concentrated Artillery`,team:`German`,desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:`Mayer`},
                                        {level:3,type:`Motorized Half Artillery`,team:`German`,desc:[`2nd "Half and Half" Battalion, 33rd Artillery Regiment`,`II./Artillerie-Regiment (mot.) 33 "Halb und Halb"`],name:`2`,designation:`33`,commander:`Mesmer`},
                                        {level:3,type:`Motorized Heavy Artillery`,team:`German`,desc:[`3rd Battalion, 33rd Artillery Regiment`,`III./Artillerie-Regiment (mot.) 33`],name:`3`,designation:`33`,commander:`Bickel`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`German`,
                                    desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`von Hößlin`,icon:`15pz`,
                                    pos:[981,573],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`German`,desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`von Hößlin`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`German`,
                            desc:[`90th Light "Afrika" Division`,`90. Leichte-Division`],name:`A`,designation:`Light`,commander:`Kleemann`,icon:`90l`,
                            pos:[756,363],
                            elements:[
                                {
                                    level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`200th Light Infantry Regiment`,`Leichtes Infanterie-Regiment 200`],name:`200`,designation:``,commander:`Geißler`,icon:`90l`,
                                    pos:[865,349],
                                    elements:[
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`1st Battalion, 200th Light Infantry Regiment`,`I./Leichtes Infanterie-Regiment 200`],name:`1`,designation:`200`,commander:`von Debschütz`},
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`2nd Battalion, 200th Light Infantry Regiment`,`II./Leichtes Infanterie-Regiment 200`],name:`2`,designation:`200`,commander:`Panzenhagen`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`288th "Afrika" Grenadier Regiment`,`Afrika-Grenadier-Regiment 288`],name:`288`,designation:``,commander:`Menton`,icon:`288svb`,
                                    pos:[981,373],
                                    elements:[
                                        {level:3,type:`Motorized Reinforced Infantry`,team:`German`,desc:[`1st Battalion, 288th "Afrika" Grenadier Regiment`,`I./Afrika-Grenadier-Regiment 288`],name:`1`,designation:`288`,commander:`Daumiller`},
                                        {level:3,type:`Motorcycle Armed Infantry`,team:`German`,desc:[`2nd Battalion, 288th "Afrika" Grenadier Regiment`,`II./Afrika-Grenadier-Regiment 288`],name:`2`,designation:`288`,commander:`Borhardt`},
                                    ],
                                },{
                                    level:4,type:[`Tank`,`Recon`,`Tracked`],team:`German`,
                                    desc:[`580th Reconnaissance Company`,`Aufklärungs-Kompanie 580`],name:`580`,designation:``,commander:`Hohmeyer`,icon:`90l`,
                                    pos:[1065,433],
                                    elements:[
                                        {level:4,type:`Armored Car Company`,team:`German`,desc:[`580th Reconnaissance Company`,`Aufklärungs-Kompanie 580`],name:`580`,designation:``,commander:`Hohmeyer`},
                                    ],
                                },
                            ],
                        },{
                            level:4,type:[`Infantry`,`Mixed`],team:`German`,
                            desc:[`13th Company, Special Purpose Training Regiment 800 "Brandenburg"`,`13./Lehr-Regiment "Brandenburg" z.b.V. 800`],name:`13`,designation:`z.b.V. 800\nBrandenburg`,commander:`von Köhnen`,icon:``,
                            pos:[88,1216],
                            elements:[
                                {type:`Elite Infantry Company`},
                            ],
                        },
                    ],
                },
            ],reserve:[
            ],
        },{
            name:[`Legacy Modes`,`Base`],unit:[
                {
                    name:`Legacy Modes`,
                    strength:{name:``,num:[]},partition:[],bonus:0,
                    unit:[],reserve:[],
                },
            ],
        },
    ],
}
export var dev={slow:false,begin:-1}
export var options={obscureKills:true,translate:false,headquarters:false}
export var graphics={main:0,scale:0,load:{map:[],city:[],team:[],unit:[],water:0,fortifications:0}}
export var inputs={mouse:{base:{x:0,y:0},rel:{x:0,y:0},previous:{base:{x:0,y:0},rel:{x:0,y:0}}}}
export var constants={
    init:false,unitId:0,
    turnTime:150,artilleryRange:250,
    battleVariance:1.5,breakVariance:2.5,breakMult:1.2,battalionVariance:1.2,
}
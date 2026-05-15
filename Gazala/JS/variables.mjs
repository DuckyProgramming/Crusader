export var types={
    city:[],
    connect:[],
    team:[],
    player:[],
    side:[],
    unit:[],
    elementType:[
        {name:`Infantry`,unitType:[`Infantry`],class:0,damage:[10,2],armor:0,health:100,morale:1,num:800,speed:1,artillery:false,engineer:false,recon:false},//0
        {name:`Weak Infantry`,unitType:[`Infantry`],class:0,damage:[10,2],armor:0,health:90,morale:0.9,num:700,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Oasis Infantry`,unitType:[`Oasis Infantry`],class:0,damage:[10,1],armor:0,health:125,morale:1.1,num:1000,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Light Oasis Infantry`,unitType:[`Oasis Infantry`,`Recon`],class:0,damage:[9,1],armor:0,health:70,morale:1.1,num:500,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Oasis Infantry Company`,unitType:[`Oasis Infantry`],class:0,damage:[10,1],armor:0,health:25,morale:1.1,num:200,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Machine Gun`,unitType:[`Infantry`,`Machine Gun`],class:0,damage:[12,2],armor:0,health:100,morale:1,num:800,speed:0.9,artillery:false,engineer:false,recon:false},
        {name:`Semi-Motorized Infantry`,unitType:[`Infantry`,`Semi-Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1,num:800,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:100,morale:1,num:800,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Motorized Engineer Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:125,morale:1,num:1000,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Motorized Engineer Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,4],armor:0,health:125,morale:1,num:1000,speed:2.25,artillery:false,engineer:true,recon:false},//10
        {name:`Motorized Bersaglieri`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1.2,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Machine Gun Bersaglieri`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:100,morale:1.2,num:800,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Motorized Militia`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1.1,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Infantry`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[10,1],armor:0,health:100,morale:1,num:800,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Bersaglieri`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[10,1],armor:0,health:100,morale:1.2,num:800,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Police`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[8,1],armor:0.2,health:100,morale:1,num:600,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Light Tank`,unitType:[`Tank`,`Light`],class:1,damage:[12,6],armor:0.6,health:60,morale:0.5,num:50,speed:2,artillery:false,engineer:false,recon:false},
        {name:`Security Tank`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:40,morale:0.6,num:33,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Medium Tank`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:60,morale:0.6,num:50,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Heavy Tank`,unitType:[`Tank`,`Heavy`],class:1,damage:[15,12],armor:1,health:75,morale:0.6,num:50,speed:1.125,artillery:false,engineer:false,recon:false},//20
        {name:`Armored Car`,unitType:[`Tank`,`Recon`,`Tracked`],class:1,damage:[6,1],armor:0.8,health:50,morale:0.5,num:50,speed:3,artillery:false,engineer:false,recon:true},
        {name:`Armored Car Company`,unitType:[`Tank`,`Recon`,`Tracked`],class:1,damage:[6,1],armor:0.8,health:20,morale:0.5,num:20,speed:3,artillery:false,engineer:false,recon:true},
        {name:`Light Artillery`,unitType:[`Light Artillery`],class:2,damage:[8,10],armor:0.2,health:20,morale:0.6,num:24,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Coastal Artillery`,unitType:[`Light Artillery`],class:2,damage:[6,8],armor:0.2,health:12,morale:0.6,num:12,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Small Artillery`,unitType:[`Artillery`],class:2,damage:[6,10],armor:0.4,health:12,morale:0.8,num:12,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Half Artillery`,unitType:[`Artillery`],class:2,damage:[6,12],armor:0.4,health:15,morale:0.8,num:8,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Artillery`,unitType:[`Artillery`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:24,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Concentrated Artillery`,unitType:[`Artillery`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:12,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Heavy Artillery`,unitType:[`Artillery`,`Machine Gun`],class:2,damage:[10,20],armor:0.5,health:20,morale:0.8,num:12,speed:0.6,artillery:true,engineer:false,recon:false},
        {name:`Semi-Motorized Artillery`,unitType:[`Artillery`,`Semi-Motorized`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:12,speed:1.05,artillery:true,engineer:false,recon:false},//30
        {name:`Motorized Light Artillery`,unitType:[`Light Artillery`,`Motorized`],class:2,damage:[4,10],armor:0.2,health:20,morale:0.6,num:12,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Small Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[6,10],armor:0.4,health:12,morale:0.8,num:12,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:24,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Concentrated Artillery`,unitType:[`Artillery`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:12,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Heavy Artillery`,unitType:[`Artillery`,`Machine Gun`,`Motorized`],class:2,damage:[10,20],armor:0.5,health:20,morale:0.8,num:12,speed:1.5,artillery:true,engineer:false,recon:false},
        {name:`Mixed Support`,unitType:[`Machine Gun`,`Mortar`],class:0,damage:[10,8],armor:0.1,health:50,morale:1,num:400,speed:0.8,artillery:false,engineer:false,recon:false},
        {name:`Motorized Mixed Support`,unitType:[`Machine Gun`,`Motorized`,`Mortar`],class:0,damage:[10,8],armor:0.1,health:50,morale:1,num:400,speed:2,artillery:false,engineer:false,recon:false},
        {name:`Motorized Bersaglieri Mixed Support`,unitType:[`Machine Gun`,`Motorized`,`Mortar`],class:0,damage:[10,8],armor:0.1,health:50,morale:1.2,num:400,speed:2,artillery:false,engineer:false,recon:false},
        {name:`Mixed Combat`,unitType:[`Infantry`,`Engineer`,`Mountain`],class:0,damage:[9,6],armor:0.1,health:80,morale:1.1,num:500,speed:1.05,artillery:false,engineer:true,recon:false},
        {name:`Mixed Infantry`,unitType:[`Infantry`,`Recon`,`Artillery`],class:0,damage:[8,8],armor:0.2,health:80,morale:1,num:500,speed:1.1,artillery:false,engineer:false,recon:false},//40
        {name:`Motorized Mixed Combat`,unitType:[`Infantry`,`Engineer`,`Mountain`,`Motorized`],class:0,damage:[9,6],armor:0.1,health:80,morale:1.1,num:500,speed:2.625,artillery:false,engineer:true,recon:false},
        {name:`Motorized Mixed Infantry`,unitType:[`Infantry`,`Recon`,`Artillery`,`Motorized`],class:0,damage:[8,8],armor:0.2,health:80,morale:1,num:500,speed:2.75,artillery:false,engineer:false,recon:false},
        {name:`Motorized Mixed Detachment`,unitType:[`Infantry`,`Recon`,`Mountain`,`Motorized`],class:0,damage:[8,4],armor:0.2,health:80,morale:1.2,num:500,speed:2.875,artillery:false,engineer:false,recon:false},
        {name:`Engineer`,unitType:[`Engineer`],class:0,damage:[6,6],armor:0,health:75,morale:1,num:600,speed:1,artillery:false,engineer:true,recon:false},
        {name:`Motorized Engineer`,unitType:[`Engineer`,`Motorized`],class:0,damage:[6,6],armor:0,health:75,morale:1,num:600,speed:2.5,artillery:false,engineer:true,recon:false},
        {name:`Mixed Engineer`,unitType:[`Engineer`,`Mortar`],class:0,damage:[8,6],armor:0,health:60,morale:1,num:500,speed:0.9,artillery:false,engineer:true,recon:false},
        {name:`Engineer Company`,unitType:[`Engineer`],class:0,damage:[6,6],armor:0,health:25,morale:1,num:200,speed:1,artillery:false,engineer:true,recon:false},
        {name:`Pioneer Company`,unitType:[`Engineer`],class:0,damage:[4,8],armor:0,health:50,morale:1.1,num:200,speed:1.1,artillery:false,engineer:true,recon:false},
        {name:`Anti-Tank`,unitType:[`Anti-Tank`],class:2,damage:[2,24],armor:0.1,health:40,morale:1,num:12,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Motorized Anti-Tank`,unitType:[`Anti-Tank`,`Motorized`],class:2,damage:[2,24],armor:0.1,health:40,morale:1,num:12,speed:2.5,artillery:false,engineer:false,recon:false},//50
        {name:`Flak`,unitType:[`Anti-Air`],class:2,damage:[6,30],armor:0.1,health:20,morale:1,num:8,speed:0.8,artillery:true,engineer:false,recon:false},
        {name:`Motorized Flak`,unitType:[`Anti-Air`,`Motorized`],class:2,damage:[6,30],armor:0.1,health:20,morale:1,num:8,speed:2,artillery:true,engineer:false,recon:false},

        {name:`Motorized Armed Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[11,2],armor:0,health:100,morale:1,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Reinforced Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,3],armor:0.1,health:100,morale:1,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Slow Tank`,unitType:[`Tank`,`Heavy`],class:1,damage:[12,10],armor:1,health:75,morale:0.6,num:50,speed:1.125,artillery:false,engineer:false,recon:false},
        {name:`Superior Tank`,unitType:[`Tank`,`Superior`],class:1,damage:[15,15],armor:0.8,health:60,morale:0.75,num:50,speed:1.5,artillery:false,engineer:false,recon:false},
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
    ],unitLevel:[
        {name:`Division`,symbol:`XX`,size:[44,44,44]},
        {name:`Brigade`,symbol:`X`,size:[40,36,36]},
        {name:`Regiment`,symbol:`III`,size:[34,34,34]},
        {name:`Battalion`,symbol:`II`,size:[28,28,28]},
        {name:`Company`,symbol:`I`,size:[24,24,24]},
    ],map:[
        {
            name:[`Battle of Gazala`,`Base`],
            term:[`main`],
            city:[
                {name:`Tmimi`,owner:1,type:0,pos:[479,15]},
                {name:`Rotonda Segnale`,owner:1,type:1,pos:[235,567]},
                {name:`Bir Temrad`,owner:1,type:1,pos:[383,176]},
                {name:`Sidi Breghisc`,owner:1,type:0,pos:[390,283]},
                {name:`B12`,owner:1,type:0,pos:[479,450]},
                {name:`Alem Hamza`,owner:2,type:0,pos:[590,292]},
                {name:`Rotonda Mteifel`,owner:1,type:0,pos:[634,564]},
                {name:`Gazala`,owner:2,type:0,pos:[771,67]},
                {name:`Bir Hacheim`,owner:2,type:0,pos:[789,895]},
                {name:`Point 160`,owner:2,type:0,pos:[813,402]},
                {name:`Rotonda Ualeb`,owner:2,type:0,pos:[859,667]},
                {name:`Sidi Muftah`,owner:2,type:0,pos:[904,537]},
                {name:`Bir Heleisi`,owner:2,type:0,pos:[923,365]},
                {name:`El Hamrah`,owner:2,type:0,pos:[983,802]},
                {name:`Commonwealth Keep`,owner:2,type:0,pos:[1045,268]},
                {name:`Knightsbridge`,owner:2,type:0,pos:[1078,541]},
                {name:`Bir el Harmat`,owner:2,type:0,pos:[1086,664]},
                {name:`Acroma`,owner:2,type:0,pos:[1179,298]},
                {name:`El Mrassas`,owner:2,type:0,pos:[1196,159]},
                {name:`Hagiag el Raml`,owner:2,type:0,pos:[1222,497]},
                {name:`Retma`,owner:2,type:0,pos:[1258,1138]},
                {name:`Bir Beuid`,owner:2,type:0,pos:[1329,895]},
                {name:`El Adem`,owner:2,type:0,pos:[1425,574]},
                {name:`Tobruk`,owner:2,type:1,pos:[1514,275]},
                {name:`Bir el Gubi`,owner:2,type:0,pos:[1544,1061]},
                {name:`Bir el Haiad`,owner:2,type:0,pos:[1591,828]},
                {name:`Bir Bu Creimisa`,owner:2,type:0,pos:[1626,717]},
                {name:`El Duda`,owner:2,type:0,pos:[1670,561]},
                {name:`Sidi Rezegh`,owner:2,type:0,pos:[1739,666]},
                {name:`Taieb el Esem`,owner:2,type:0,pos:[1820,1059]},
                {name:`Zaafran`,owner:2,type:0,pos:[1841,582]},
                {name:`Bir el Haleizim`,owner:2,type:0,pos:[1936,785]},
                {name:`Gabr Saleh`,owner:2,type:0,pos:[1984,1225]},
                {name:`Bir el Chleta`,owner:2,type:0,pos:[2030,670]},
                {name:`Gambut`,owner:2,type:1,pos:[2152,534]},
                {name:`Gasr el Arid`,owner:2,type:0,pos:[2232,728]},
                {name:`Sidi Azeiz`,owner:2,type:1,pos:[2315,1011]},
            ],connect:[
                {name:[`Gazala`,`Commonwealth Keep`]},
                {name:[`El Mrassas`,`Acroma`]},
                {name:[`Tobruk`,`Acroma`]},
                {name:[`El Adem`,`Hagiag el Raml`]},
                {name:[`Acroma`,`Hagiag el Raml`]},
                {name:[`Bir el Harmat`,`Knightsbridge`]},
                {name:[`Rotonda Ualeb`,`Rotonda Mteifel`]},
                {name:[`El Hamrah`,`Bir Hacheim`]},
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
                {name:[`El Mrassas`,`Commonwealth Keep`]},
                {name:[`Acroma`,`Commonwealth Keep`]},
                {name:[`El Mrassas`,`Tobruk`]},
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
                {name:[`Point 160`,`Sidi Muftah`]},
                {name:[`Point 160`,`Alem Hamza`]},
                {name:[`Point 160`,`Bir Heleisi`]},
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
                {name:[`Bir Hacheim`,`Rotonda Segnale`]},

                {name:[`Tmimi`,`Gazala`]},
                {name:[`Bir Temrad`,`Tmimi`]},
            ],team:[
                {name:`British`,term:`britain`,player:2,quality:0.95},
                {name:`New Zealand`,term:`new zealand`,player:2,quality:1.05},
                {name:`South African`,term:`south africa`,player:2,quality:0.95},
                {name:`Polish`,term:`poland`,player:2,quality:1},
                {name:`Australian`,term:`australia`,player:2,quality:1.05},
                {name:`Czechoslovak`,term:`czechoslovakia`,player:2,quality:1},
                {name:`Māori`,term:`maori`,player:2,quality:1.05},
                {name:`Indian`,term:`india`,player:2,quality:0.9},
                {name:`French`,term:`french`,player:2,quality:1.1},
                {name:`German`,term:`germany`,player:0,quality:1.1},
                {name:`Italian`,term:`italy`,player:1,quality:0.8},
            ],player:[
                {name:`German`,color:[150,50,0],side:0},
                {name:`Italian`,color:[0,200,0],side:0},
                {name:`British`,color:[0,100,250],side:1},
            ],side:[
                {name:`Axis`},
                {name:`Allied`},
            ],unit:[
                {
                    name:`Gazala Simplified`,
                    battalions:[[15,20],[45]],bonus:true,partition:[[0],[1],[2]],pick:false,
                    unit:[
                        {
                            level:1,type:[`Tank`,`Heavy`],team:`British`,
                            desc:`32nd Army Tank Brigade`,name:`32`,designation:``,commander:`Willison`,icon:`32a`,
                            pos:[923,365],
                            elements:[
                                {level:3,type:`Slow Tank`,team:`British`,desc:[`4th Battalion, Royal Tank Regiment`,`4th Royal Tank Regiment`],name:`4`,designation:`Royal Tank\nRegiment`,commander:`Reeve`},
                                {level:3,type:`Slow Tank`,team:`British`,desc:[`7th Battalion, Royal Tank Regiment`,`7th Royal Tank Regiment`],name:`7`,designation:`Royal Tank\nRegiment`,commander:`Foote`},
                                {level:3,type:`Slow Tank`,team:`British`,desc:[`42nd Battalion, Royal Tank Regiment`,`42nd Royal Tank Regiment`],name:`42`,designation:`Royal Tank\nRegiment`,commander:``},
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:`5th Indian Division`,name:`5`,designation:``,commander:`Briggs`,icon:`5id`,
                            pos:[1739,666],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`10th Indian Infantry Brigade`,name:`10`,designation:``,commander:`Boucher`,icon:`5id`,
                                    pos:[2152,534],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Highland Rifles`,name:`2`,designation:`Highland`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`3rd Battalion, 18th Royal Garhwal Rifles`,name:`3/18`,designation:`Garhwal`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`4th Battalion, 10th Baluch Regiment`,name:`4/10`,designation:`Baluch`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`25th Battalion, Royal Artillery`,`25th Field Regiment, Royal Artillery`],name:`25`,designation:``,commander:`Pope`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`29th Indian Infantry Brigade`,name:`29`,designation:``,commander:`Reid`,icon:`5id`,
                                    pos:[1425,574],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, Worcestershire Regiment`,name:`1`,designation:`Worcester`,commander:`Knight`},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`3rd Battalion, 2nd Punjab Regiment`,name:`3/2`,designation:`Punjab`,commander:`Dean`},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`3rd Battalion, 12th Frontier Force Rifles`,name:`3/12`,designation:`Frontier`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`3rd Battalion, Royal Artillery`,`3rd Field Regiment, Royal Artillery`],name:`3`,designation:``,commander:`Teesdale`},
                                    ],
                                },
                            ],
                        },{
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
                                        {level:3,type:`Superior Tank`,team:`British`,desc:`8th Irish Hussars`,name:`8`,designation:`Irish\nHussars`,commander:`Kilkelly`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:``,commander:``},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`7th Motor Brigade`,name:`7`,designation:``,commander:`Renton`,icon:`7sg`,
                                    pos:[1258,1138],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, King's Royal Rifle Corps`,name:`2`,designation:`King's Royal\nRifle Corps`,commander:`Erskine`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Edwardes`},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`51st (Midland) Battalion, Royal Artillery`,`51st (Midland) Field Regiment, Royal Artillery`],name:`51`,designation:`Midland`,commander:``},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`201st Guards Brigade`,name:`201`,designation:`Guards`,commander:`Marriott`,icon:`7a`,
                                    pos:[1078,541],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Scots Guards`,name:`2`,designation:`Scots\nGuards`,commander:`Mayfield`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`3rd Battalion, Coldstream Guards`,name:`3`,designation:`Coldstream\nGuards`,commander:`Sainthill`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`9th Battalion, Rifle Brigade (Tower Hamlets Rifles)`,name:`9`,designation:`Rifle\nBrigade`,commander:`Purdon`},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`3rd Battalion, Royal Horse Artillery`,`3rd Regiment, Royal Horse Artillery`],name:`3`,designation:``,commander:``},
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
                                    desc:`London Rifle Brigade`,name:`L`,designation:`Rifle\nBrigade`,commander:``,icon:`7a`,
                                    pos:[1984,1225],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`London Rifle Brigade`,name:`L`,designation:`Rifle\nBrigade`,commander:``},
                                    ],
                                },
                                
                                {
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`British`,
                                    desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`,icon:`7a`,
                                    pos:[789,895],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`British`,desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:`McCorquodale`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`South African`,
                            desc:`1st South African Infantry Division`,name:`1`,designation:``,commander:`Pienaar`,icon:`1sa`,
                            pos:[800,200],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                                    desc:`1st South African Infantry Brigade`,name:`1`,designation:``,commander:`Kriegler`,icon:`1sa`,
                                    pos:[813,402],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Duke of Edinburgh's Own Rifles`,name:`1`,designation:`Duke of\nEdinburgh`,commander:`Seneschall`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Royal Natal Carabineers`,name:`1`,designation:`Royal\nNatal`,commander:`Hay`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Transvaal Scottish Regiment`,name:`1`,designation:`Transvaal\nScottish`,commander:`Smitheman`},
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:[`1st "Cape" Battalion, South African Artillery Corps`,`1st "Cape" South African Field Regiment`],name:`1`,designation:``,commander:``},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                                    desc:`2nd South African Infantry Brigade`,name:`2`,designation:``,commander:`du Toit`,icon:`1sa`,
                                    pos:[610,282],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Natal Mounted Rifles`,name:`1`,designation:`Natal\nMounted`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Cape Town Highlanders`,name:`1`,designation:`Cape Town\nHighland`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`2nd Battalion, Field Force Battalion`,name:`2`,designation:`Field\nForce`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:[`4th Battalion, South African Artillery Corps`,`4th South African Field Regiment`],name:`4`,designation:``,commander:`Harpur`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                                    desc:`3rd South African Infantry Brigade`,name:`3`,designation:``,commander:`Palmer`,icon:`1sa`,
                                    pos:[676,67],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Imperial Light Horse`,name:`1`,designation:`Imperial\nLight Horse`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Rand Light Infantry`,name:`1`,designation:`Rand`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Royal Durban Light Infantry`,name:`1`,designation:`Royal\nDurban`,commander:`Butler-Porter`},
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:[`5th Battalion, South African Artillery Corps`,`5th South African Field Regiment`],name:`5`,designation:``,commander:``},
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
                                    desc:[`3rd South African Armored Car Battalion`,`3rd South African Armoured Car Regiment`],name:`3`,designation:``,commander:`Roodt`,icon:`1sa`,
                                    pos:[715,341],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`South African`,desc:[`3rd South African Armored Car Battalion`,`3rd South African Armoured Car Regiment`],name:`3`,designation:``,commander:`Roodt`},
                                    ],
                                },
                            ],
                        },{
                            level:1,type:[`Infantry`,`Motorized`],team:`British`,
                            desc:`150th "Tyneside" Infantry Brigade`,name:`150`,designation:``,commander:`Haydon`,icon:`50`,
                            pos:[859,667],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`British`,desc:`4th Battalion, East Yorkshire Yeomanry`,name:`4`,designation:`East\nYorkshire`,commander:``},
                                {level:3,type:`Motorized Infantry`,team:`British`,desc:`4th Battalion, Green Howards`,name:`4`,designation:`Green\nHowards`,commander:``},
                                {level:3,type:`Motorized Infantry`,team:`British`,desc:`7th Battalion, Green Howards`,name:`7`,designation:`Green\nHowards`,commander:``},
                                {level:3,type:`Motorized Artillery`,team:`British`,desc:[`72nd Battalion, Royal Artillery`,`72nd Field Regiment, Royal Artillery`],name:`72`,designation:``,commander:``},
                            ],
                        },{
                            level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                            desc:[`Infantry Regiment "Giovani Fascisti"`,`Reggimento di fanteria "Giovani Fascisti"`],name:`GF`,designation:``,commander:`Nannini`,icon:``,
                            pos:[366,1241],
                            elements:[
                                {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`1st Battalion, Infantry Regiment "Giovani Fascisti"`,`I battaglione fucilieri, Reggimento di fanteria "Giovani Fascisti"`],name:`1`,designation:`Giovani\nFascisti`,commander:`Balisti`},
                                {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`2nd Battalion, Infantry Regiment "Giovani Fascisti"`,`II battaglione fucilieri, Reggimento di fanteria "Giovani Fascisti"`],name:`2`,designation:`Giovani\nFascisti`,commander:`Benedetti`},
                            ],
                        },{
                            level:3,type:[`Infantry`,`Motorcycle`],team:`Italian`,
                            desc:[`6th Battalion "Romolo Gessi", Italian Africa Police`,`6° Battaglione "Romolo Gessi", Polizia dell’Africa Italiana`],name:`6`,designation:`Romolo\nGessi`,commander:`Diamante`,icon:`pai`,
                            pos:[436,1241],
                            elements:[
                                {level:3,type:`Motorcycle Police`,team:`Italian`,desc:[`6th Battalion "Romolo Gessi", Italian Africa Police`,`6° Battaglione "Romolo Gessi", Polizia dell’Africa Italiana`],name:`6`,designation:`Romolo\nGessi`,commander:`Diamante`},
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`60th Infantry Division "Sabratha"`,`60ª Divisione di fanteria "Sabratha"`],name:`60`,designation:`Sabratha`,commander:`Soldarelli`,icon:`sabratha`,
                            pos:[340,383],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`85th Infantry Regiment`,`85° Reggimento di fanteria "Sabratha"`],name:`85`,designation:`Sabratha`,commander:`Grimaldi`,icon:`sabratha`,
                                    pos:[470,250],
                                    elements:[
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`1st Battalion, 85th Infantry Regiment`,`I battaglione fucilieri, 85° Reggimento di fanteria motorizzata "Sabratha"`],name:`1`,designation:`85`,commander:`Angelozzi`},
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`2nd Battalion, 85th Infantry Regiment`,`II battaglione fucilieri, 85° Reggimento di fanteria motorizzata "Sabratha"`],name:`2`,designation:`85`,commander:`Morosini`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`86th Infantry Regiment`,`86° Reggimento di fanteria "Sabratha"`],name:`86`,designation:`Sabratha`,commander:`Castrignanò`,icon:`sabratha`,
                                    pos:[479,450],
                                    elements:[
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`1st Battalion, 86th Infantry Regiment`,`I battaglione fucilieri, 86° Reggimento di fanteria motorizzata "Sabratha"`],name:`1`,designation:`86`,commander:`Velosa`},
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`2nd Battalion, 86th Infantry Regiment`,`II battaglione fucilieri, 86° Reggimento di fanteria motorizzata "Sabratha"`],name:`2`,designation:`86`,commander:`Piana`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`Artillery Regrouping "Sabratha"`,`Raggruppamento artiglieria "Sabratha"`],name:`RA`,designation:`Sabratha`,commander:`Ferrario`,icon:`savona`,
                                    pos:[390,283],
                                    elements:[
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`283rd Group, Artillery Regrouping "Sabratha"`,`CCLXXXIII gruppo, Raggruppamento artiglieria "Sabratha"`],name:`283`,designation:`Sabratha`,commander:`Parrella`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`284th Group, Artillery Regrouping "Sabratha"`,`CCLXXXIV gruppo, Raggruppamento artiglieria "Sabratha"`],name:`284`,designation:`Sabratha`,commander:`Rocchi`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorcycle`],team:`Italian`,
                                    team:`Italian`,desc:[`60th Bersaglieri Battalion`,`60° Battaglione Bersaglieri`],name:`60`,designation:`Bersaglieri`,commander:`Castaldi`,icon:`sabratha`,
                                    pos:[383,176],
                                    elements:[
                                        {level:3,type:`Motorcycle Bersaglieri`,team:`Italian`,desc:[`60th Bersaglieri Battalion`,`60° Battaglione Bersaglieri`],name:`60`,designation:`Bersaglieri`,commander:`Castaldi`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`102nd Infantry Division "Trento"`,`102ª Divisione di fanteria motorizzata "Trento"`],name:`102`,designation:`Trento`,commander:`Scotti`,icon:`trento`,
                            pos:[448,648],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`61st Infantry Regiment`,`61° Reggimento di fanteria motorizzata "Sicilia"`],name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[634,564],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 61st Infantry Regiment`,`I battaglione fucilieri, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 61st Infantry Regiment`,`II battaglione fucilieri, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`62nd Infantry Regiment`,`62° Reggimento di fanteria motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[641,725],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 62nd Infantry Regiment`,`I battaglione fucilieri, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 62nd Infantry Regiment`,`II battaglione fucilieri, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`7th Bersaglieri Regiment`,`7° Reggimento Bersaglieri`],name:`7`,designation:`Bersaglieri`,commander:`Scirocco`,icon:`trento`,
                                    pos:[235,567],
                                    elements:[
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`10th Bersaglieri Battalion`,`10° Battaglione Bersaglieri`],name:`10`,designation:`Bersaglieri`,commander:`Adolfato`},
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`11th Bersaglieri Battalion`,`11° Battaglione Bersaglieri`],name:`11`,designation:`Bersaglieri`,commander:`Straziota`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`46th Artillery Regiment`,`46° Reggimento artiglieria "Trento"`],name:`46`,designation:`Trento`,commander:`Grati`,icon:`savona`,
                                    pos:[548,628],
                                    elements:[
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`1st Group, 46th Artillery Regiment`,`I gruppo, 46° Reggimento artiglieria "Trento"`],name:`1`,designation:`46`,commander:`Giannimi`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`3rd Group, 46th Artillery Regiment`,`III gruppo, 46° Reggimento artiglieria "Trento"`],name:`3`,designation:`46`,commander:`Salvo`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`4th Group, 46th Artillery Regiment`,`IV gruppo, 46° Reggimento artiglieria "Trento"`],name:`4`,designation:`46`,commander:`Gavazzi`},
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Engineer`],team:`Italian`,
                            desc:[`21st Corps Mixed Engineer Battalion`,`XXI battaglione misto genio del Corpo`],name:`21`,designation:`Mixed`,commander:`Cassoli`,icon:``,
                            pos:[491,561],
                            elements:[
                                {level:4,type:`Engineer Company`,team:`Italian`,desc:[`60th Mixed Engineer Company`,`LX compagnia misto genio`],name:`60`,designation:`Mixed`,commander:`Giuliani`},
                                {level:4,type:`Engineer Company`,team:`Italian`,desc:[`161st Mixed Engineer Company`,`DLXI compagnia misto genio`],name:`161`,designation:`Mixed`,commander:`Baruffini`},
                                {level:4,type:`Engineer Company`,team:`Italian`,desc:[`161st Pioneer Company`,`DLXI compagnia minatori`],name:`161`,designation:`Pioneer`,commander:`Matteis`},
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
                                    desc:[`115th Rifle Regiment`,`Schützen-Regiment 115`],name:`115`,designation:``,commander:`Zincke`,icon:`15pz`,
                                    pos:[460,920],
                                    elements:[
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`1st Battalion, 115th Rifle Regiment`,`I./Schützen-Regiment 115`],name:`1`,designation:`115`,commander:`von Grolmann`},
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`2nd Battalion, 115th Rifle Regiment`,`II./Schützen-Regiment 115`],name:`2`,designation:`115`,commander:`Roske`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`,`Motorized`],team:`German`,
                                    desc:[`33rd Artillery Regiment`,`Artillerie-Regiment (mot.) 33`],name:`33`,designation:``,commander:`Crasemann`,icon:`15pz`,
                                    pos:[215,920],
                                    elements:[
                                        {level:3,type:`Motorized Concentrated Artillery`,team:`German`,desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:`Mayer`},
                                        {level:3,type:`Motorized Concentrated Artillery`,team:`German`,desc:[`2nd Battalion, 33rd Artillery Regiment`,`II./Artillerie-Regiment (mot.) 33`],name:`2`,designation:`33`,commander:`Mesmer`},
                                        {level:3,type:`Motorized Heavy Artillery`,team:`German`,desc:[`3rd Battalion, 33rd Artillery Regiment`,`III./Artillerie-Regiment (mot.) 33`],name:`3`,designation:`33`,commander:`Bickel`},
                                    ],
                                },{
                                    level:3,type:[`Engineer`,`Motorized`],team:`German`,
                                    desc:[`33rd Engineer Battalion`,`Panzer-Pionier-Bataillon 33`],name:`33`,designation:``,commander:`Oberembt`,icon:`15pz`,
                                    pos:[300,860],
                                    elements:[
                                        {level:3,type:`Motorized Engineer`,team:`German`,desc:[`33rd Engineer Battalion`,`Panzer-Pionier-Bataillon 33`],name:`33`,designation:``,commander:`Oberembt`}, 
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
                                    level:1,type:[`Infantry`,`Semi-Motorized`],team:`German`,
                                    desc:[`15th Rifle Brigade`,`Schützen-Brigade 15`],name:`15`,designation:``,commander:`Menny`,icon:`90l`,
                                    pos:[410,70],
                                    elements:[
                                        {
                                            level:2,type:[`Infantry`,`Semi-Motorized`],team:`German`,
                                            desc:[`200th Light Infantry Regiment`,`Leichtes Infanterie-Regiment 200`],name:`200`,designation:``,commander:`Geißler`,icon:`90l`,
                                            pos:[490,95],
                                            elements:[
                                                {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`1st Battalion, 200th Light Infantry Regiment`,`I./Leichtes Infanterie-Regiment 200`],name:`1`,designation:`200`,commander:`Finke`}, 
                                                {level:3,type:`Semi-Motorized Infantry`,team:`German`,desc:[`2nd Battalion, 200th Light Infantry Regiment`,`II./Leichtes Infanterie-Regiment 200`],name:`2`,designation:`200`,commander:`Panzenhagen`},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`],team:`German`,
                                            desc:[`2nd "Half and Half" Battalion, 115th Artillery Regiment`,`II./Artillerie-Regiment 115 "Halb und Halb"`],name:`2`,designation:`115`,commander:`Walther`,icon:`90l`,
                                            pos:[320,55],
                                            elements:[
                                                {level:3,type:`Half Artillery`,team:`German`,desc:[`2nd "Half and Half" Battalion, 115th Artillery Regiment`,`II./Artillerie-Regiment 115 "Halb und Halb"`],name:`2`,designation:`115`,commander:`Walther`},
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`288th "Afrika" Grenadier Regiment`,`Afrika-Grenadier-Regiment 288`],name:`288`,designation:``,commander:`Menton`,icon:`288svb`,
                                    pos:[385,1120],
                                    elements:[
                                        {level:3,type:`Motorized Reinforced Infantry`,team:`German`,desc:[`1st Battalion, 288th "Afrika" Grenadier Regiment`,`I./Afrika-Grenadier-Regiment 288`],name:`1`,designation:`288`,commander:`Daumiller`},
                                        {level:3,type:`Motorcycle Infantry`,team:`German`,desc:[`2nd Battalion, 288th "Afrika" Grenadier Regiment`,`II./Afrika-Grenadier-Regiment 288`],name:`2`,designation:`288`,commander:`von Debschütz`},
                                    ],
                                },
                            ],
                        },
                    ],
                },{
                    name:`Battle of Gazala`,
                    battalions:[[18,21],[52]],bonus:true,partition:[[0],[1],[2]],pick:false,
                    unit:[
                        {
                            level:1,type:[`Tank`,`Heavy`],team:`British`,
                            desc:`32nd Army Tank Brigade`,name:`32`,designation:``,commander:`Willison`,icon:`32a`,
                            pos:[923,365],
                            elements:[
                                {level:3,type:`Slow Tank`,team:`British`,desc:[`4th Battalion, Royal Tank Regiment`,`4th Royal Tank Regiment`],name:`4`,designation:`Royal Tank\nRegiment`,commander:`Reeve`},
                                {level:3,type:`Slow Tank`,team:`British`,desc:[`7th Battalion, Royal Tank Regiment`,`7th Royal Tank Regiment`],name:`7`,designation:`Royal Tank\nRegiment`,commander:`Foote`},
                                {level:3,type:`Slow Tank`,team:`British`,desc:[`42nd Battalion, Royal Tank Regiment`,`42nd Royal Tank Regiment`],name:`42`,designation:`Royal Tank\nRegiment`,commander:``},
                            ],
                        },{
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
                            level:0,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:`5th Indian Division`,name:`5`,designation:``,commander:`Briggs`,icon:`5id`,
                            pos:[1739,666],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`10th Indian Infantry Brigade`,name:`10`,designation:``,commander:`Boucher`,icon:`5id`,
                                    pos:[1670,561],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Highland Rifles`,name:`2`,designation:`Highland`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`3rd Battalion, 18th Royal Garhwal Rifles`,name:`3/18`,designation:`Garhwal`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`4th Battalion, 10th Baluch Regiment`,name:`4/10`,designation:`Baluch`,commander:``},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`29th Indian Infantry Brigade`,name:`29`,designation:``,commander:`Reid`,icon:`5id`,
                                    pos:[1425,574],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, Worcestershire Regiment`,name:`1`,designation:`Worcester`,commander:`Knight`},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`3rd Battalion, 2nd Punjab Regiment`,name:`3/2`,designation:`Punjab`,commander:`Dean`},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`3rd Battalion, 12th Frontier Force Rifles`,name:`3/12`,designation:`Frontier`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`3rd Battalion, Royal Artillery`,`3rd Field Regiment, Royal Artillery`],name:`3`,designation:``,commander:`Teesdale`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Tank`],team:`British`,
                            desc:[`7th Armored Division`,`7th Armoured Division`],name:`7`,designation:``,commander:`Messervy`,icon:`7a`,
                            pos:[1329,895],
                            elements:[
                                {
                                    level:1,type:[`Tank`],team:`British`,
                                    desc:`2nd Armoured Brigade`,name:`2`,designation:``,commander:`Briggs`,icon:`7a`,
                                    pos:[1222,497],
                                    elements:[
                                        {level:3,type:`Medium Tank`,team:`British`,desc:`2nd Dragoon Guards (Queen's Bays)`,name:`2`,designation:`Queen's\nBays`,commander:`Draffen`},
                                        {level:3,type:`Medium Tank`,team:`British`,desc:`9th Royal Lancers`,name:`9`,designation:`Royal\nLancers`,commander:`MacDonell`},
                                        {level:3,type:`Medium Tank`,team:`British`,desc:`10th Royal Hussars`,name:`10`,designation:`Royal\nHussars`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`3rd Battalion, Royal Horse Artillery`,`3rd Regiment, Royal Horse Artillery`],name:`3`,designation:``,commander:``},
                                    ],
                                },{
                                    level:1,type:[`Tank`],team:`British`,
                                    desc:[`4th Armored Brigade`,`4th Armoured Brigade`],name:`4`,designation:``,commander:`Richards`,icon:`4ab`,
                                    pos:[1086,664],
                                    elements:[
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`3rd Battalion, Royal Tank Regiment`,`3rd Royal Tank Regiment`],name:`3`,designation:`Royal Tank\nRegiment`,commander:`Roberts`},
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`5th Battalion, Royal Tank Regiment`,`5th Royal Tank Regiment`],name:`5`,designation:`Royal Tank\nRegiment`,commander:`Uniacke`},
                                        {level:3,type:`Superior Tank`,team:`British`,desc:`8th Irish Hussars`,name:`8`,designation:`Irish\nHussars`,commander:`Kilkelly`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:``,commander:``},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`7th Motor Brigade`,name:`7`,designation:``,commander:`Renton`,icon:`7sg`,
                                    pos:[1258,1138],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, King's Royal Rifle Corps`,name:`2`,designation:`King's Royal\nRifle Corps`,commander:`Erskine`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Edwardes`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`London Rifle Brigade`,name:`L`,designation:`Rifle\nBrigade`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`51st (Midland) Battalion, Royal Artillery`,`51st (Midland) Field Regiment, Royal Artillery`],name:`51`,designation:`Midland`,commander:``},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`201st Guards Brigade`,name:`201`,designation:`Guards`,commander:`Marriott`,icon:`7a`,
                                    pos:[1078,541],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, Sherwood Foresters`,name:`1`,designation:`Sherwood\nForesters`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Scots Guards`,name:`2`,designation:`Scots\nGuards`,commander:`Mayfield`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`3rd Battalion, Coldstream Guards`,name:`3`,designation:`Coldstream\nGuards`,commander:`Sainthill`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`9th Battalion, Rifle Brigade (Tower Hamlets Rifles)`,name:`9`,designation:`Rifle\nBrigade`,commander:`Purdon`},
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
                            level:0,type:[`Infantry`,`Motorized`],team:`South African`,
                            desc:`1st South African Infantry Division`,name:`1`,designation:``,commander:`Pienaar`,icon:`1sa`,
                            pos:[800,200],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                                    desc:`1st South African Infantry Brigade`,name:`1`,designation:``,commander:`Kriegler`,icon:`1sa`,
                                    pos:[813,402],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Duke of Edinburgh's Own Rifles`,name:`1`,designation:`Duke of\nEdinburgh`,commander:`Seneschall`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Royal Natal Carabineers`,name:`1`,designation:`Royal\nNatal`,commander:`Hay`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Transvaal Scottish Regiment`,name:`1`,designation:`Transvaal\nScottish`,commander:`Smitheman`},
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:[`1st "Cape" Battalion, South African Artillery Corps`,`1st "Cape" South African Field Regiment`],name:`1`,designation:``,commander:``},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                                    desc:`2nd South African Infantry Brigade`,name:`2`,designation:``,commander:`du Toit`,icon:`1sa`,
                                    pos:[610,282],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Natal Mounted Rifles`,name:`1`,designation:`Natal\nMounted`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Cape Town Highlanders`,name:`1`,designation:`Cape Town\nHighland`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`2nd Battalion, Field Force Battalion`,name:`2`,designation:`Field\nForce`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:[`4th Battalion, South African Artillery Corps`,`4th South African Field Regiment`],name:`4`,designation:``,commander:`Harpur`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                                    desc:`3rd South African Infantry Brigade`,name:`3`,designation:``,commander:`Palmer`,icon:`1sa`,
                                    pos:[676,67],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Imperial Light Horse`,name:`1`,designation:`Imperial\nLight Horse`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Rand Light Infantry`,name:`1`,designation:`Rand`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Royal Durban Light Infantry`,name:`1`,designation:`Royal\nDurban`,commander:`Butler-Porter`},
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:[`5th Battalion, South African Artillery Corps`,`5th South African Field Regiment`],name:`5`,designation:``,commander:``},
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
                                    desc:[`3rd South African Armored Car Battalion`,`3rd South African Armoured Car Regiment`],name:`3`,designation:``,commander:``,icon:`1sa`,
                                    pos:[715,341],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`South African`,desc:[`3rd South African Armored Car Battalion`,`3rd South African Armoured Car Regiment`],name:`3`,designation:``,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:1,type:[`Infantry`,`Motorized`],team:`British`,
                            desc:`150th "Tyneside" Infantry Brigade`,name:`150`,designation:``,commander:`Haydon`,icon:`50`,
                            pos:[859,667],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`British`,desc:`4th Battalion, East Yorkshire Yeomanry`,name:`4`,designation:`East\nYorkshire`,commander:``},
                                {level:3,type:`Motorized Infantry`,team:`British`,desc:`4th Battalion, Green Howards`,name:`4`,designation:`Green\nHowards`,commander:``},
                                {level:3,type:`Motorized Infantry`,team:`British`,desc:`7th Battalion, Green Howards`,name:`7`,designation:`Green\nHowards`,commander:``},
                                {level:3,type:`Motorized Artillery`,team:`British`,desc:[`72nd Battalion, Royal Artillery`,`72nd Field Regiment, Royal Artillery`],name:`72`,designation:``,commander:``},
                            ],
                        },{
                            level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                            desc:[`Infantry Regiment "Giovani Fascisti"`,`Reggimento di fanteria "Giovani Fascisti"`],name:`GF`,designation:``,commander:`Nannini`,icon:``,
                            pos:[366,1241],
                            elements:[
                                {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`1st Battalion, Infantry Regiment "Giovani Fascisti"`,`I battaglione fucilieri, Reggimento di fanteria "Giovani Fascisti"`],name:`1`,designation:`Giovani\nFascisti`,commander:`Balisti`},
                                {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`2nd Battalion, Infantry Regiment "Giovani Fascisti"`,`II battaglione fucilieri, Reggimento di fanteria "Giovani Fascisti"`],name:`2`,designation:`Giovani\nFascisti`,commander:`Benedetti`},
                            ],
                        },{
                            level:3,type:[`Infantry`,`Motorcycle`],team:`Italian`,
                            desc:[`6th Battalion "Romolo Gessi", Italian Africa Police`,`6° Battaglione "Romolo Gessi", Polizia dell’Africa Italiana`],name:`6`,designation:`Romolo\nGessi`,commander:`Diamante`,icon:`pai`,
                            pos:[436,1241],
                            elements:[
                                {level:3,type:`Motorcycle Police`,team:`Italian`,desc:[`6th Battalion "Romolo Gessi", Italian Africa Police`,`6° Battaglione "Romolo Gessi", Polizia dell’Africa Italiana`],name:`6`,designation:`Romolo\nGessi`,commander:`Diamante`},
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`60th Infantry Division "Sabratha"`,`60ª Divisione di fanteria "Sabratha"`],name:`60`,designation:`Sabratha`,commander:`Soldarelli`,icon:`sabratha`,
                            pos:[383,176],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`85th Infantry Regiment`,`85° Reggimento di fanteria "Sabratha"`],name:`85`,designation:`Sabratha`,commander:`Grimaldi`,icon:`sabratha`,
                                    pos:[470,200],
                                    elements:[
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`1st Battalion, 85th Infantry Regiment`,`I battaglione fucilieri, 85° Reggimento di fanteria motorizzata "Sabratha"`],name:`1`,designation:`85`,commander:`Angelozzi`},
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`2nd Battalion, 85th Infantry Regiment`,`II battaglione fucilieri, 85° Reggimento di fanteria motorizzata "Sabratha"`],name:`2`,designation:`85`,commander:`Morosini`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`86th Infantry Regiment`,`86° Reggimento di fanteria "Sabratha"`],name:`86`,designation:`Sabratha`,commander:`Castrignanò`,icon:`sabratha`,
                                    pos:[450,280],
                                    elements:[
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`1st Battalion, 86th Infantry Regiment`,`I battaglione fucilieri, 86° Reggimento di fanteria motorizzata "Sabratha"`],name:`1`,designation:`86`,commander:`Velosa`},
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`2nd Battalion, 86th Infantry Regiment`,`II battaglione fucilieri, 86° Reggimento di fanteria motorizzata "Sabratha"`],name:`2`,designation:`86`,commander:`Piana`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`102nd Infantry Division "Trento"`,`102ª Divisione di fanteria motorizzata "Trento"`],name:`102`,designation:`Trento`,commander:`Scotti`,icon:`trento`,
                            pos:[479,450],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`61st Infantry Regiment`,`61° Reggimento di fanteria motorizzata "Sicilia"`],name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[470,375],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 61st Infantry Regiment`,`I battaglione fucilieri, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 61st Infantry Regiment`,`II battaglione fucilieri, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`62nd Infantry Regiment`,`62° Reggimento di fanteria motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[600,460],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 62nd Infantry Regiment`,`I battaglione fucilieri, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 62nd Infantry Regiment`,`II battaglione fucilieri, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`7th Bersaglieri Regiment`,`7° Reggimento Bersaglieri`],name:`7`,designation:`Bersaglieri`,commander:`Scirocco`,icon:`trento`,
                                    pos:[235,567],
                                    elements:[
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`10th Bersaglieri Battalion`,`10° Battaglione Bersaglieri`],name:`10`,designation:`Bersaglieri`,commander:`Adolfato`},
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`11th Bersaglieri Battalion`,`11° Battaglione Bersaglieri`],name:`11`,designation:`Bersaglieri`,commander:`Straziota`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`,"Motorized"],team:`Italian`,
                            desc:[`101st Motorized Infantry Division "Trieste"`,`101ª Divisione di fanteria motorizzata "Trieste"`],name:`101`,designation:`Trieste`,commander:`Piazzoni`,icon:`trieste`,
                            pos:[518,628],
                            elements:[
                                {
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`65th Motorized Infantry Regiment`,`65° Reggimento di fanteria motorizzata "Trieste"`],name:`65`,designation:`Trieste`,commander:`Bonis`,icon:`trieste`,
                                    pos:[634,564],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`Italian`,desc:[`1st Battalion, 65th Motorized Infantry Regiment`,`I battaglione fucilieri, 65° Reggimento di fanteria motorizzata "Trieste"`],name:`1`,designation:`65`,commander:`Vaiarini`},
                                        {level:3,type:`Motorized Infantry`,team:`Italian`,desc:[`2nd Battalion, 65th Motorized Infantry Regiment`,`II battaglione fucilieri, 65° Reggimento di fanteria motorizzata "Trieste"`],name:`2`,designation:`65`,commander:`Quirico`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`66th Motorized Infantry Regiment`,`66° Reggimento di fanteria motorizzata "Trieste"`],name:`66`,designation:`Trieste`,commander:`Fabozzi`,icon:`trieste`,
                                    pos:[641,695],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`Italian`,desc:[`1st Battalion, 66th Motorized Infantry Regiment`,`I battaglione fucilieri, 66° Reggimento di fanteria motorizzata "Trieste"`],name:`1`,designation:`66`,commander:`Chiarusso`},
                                        {level:3,type:`Motorized Infantry`,team:`Italian`,desc:[`2nd Battalion, 66th Motorized Infantry Regiment`,`II battaglione fucilieri, 66° Reggimento di fanteria motorizzata "Trieste"`],name:`2`,designation:`66`,commander:`Zanetti`},
                                        {level:3,type:`Motorized Infantry`,team:`Italian`,desc:[`3rd Battalion, 66th Motorized Infantry Regiment`,`III battaglione fucilieri, 66° Reggimento di fanteria motorizzata "Trieste"`],name:`3`,designation:`66`,commander:`Manieri`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorcycle`],team:`Italian`,
                                    desc:[`9th Bersaglieri Regiment`,`9° Reggimento Bersaglieri`],name:`9`,designation:`Bersaglieri`,commander:`Bordoni`,icon:`trieste`,
                                    pos:[490,728],
                                    elements:[
                                        {level:3,type:`Motorcycle Bersaglieri`,team:`Italian`,desc:[`28th Bersaglieri Battalion`,`28° Battaglione Bersaglieri`],name:`28`,designation:`Bersaglieri`,commander:`Blandi`},
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`30th Bersaglieri Battalion`,`30° Battaglione Bersaglieri`],name:`30`,designation:`Bersaglieri`,commander:`Borghi`},
                                    ],
                                },{
                                    level:3,type:[`Artillery`,`Motorized`],team:`Italian`,
                                    desc:[`Coastal Defense Artillery Militia Battalion "Maneuver Army Corps"`,`Milizia Marittima di artiglieria battaglione "Corpo d'Armata di Manovra"`],name:`MILMART`,designation:``,commander:`Priore`,icon:`trieste`,
                                    pos:[412,599],
                                    elements:[
                                        {level:3,type:`Motorized Artillery`,team:`Italian`,desc:[`Coastal Defense Artillery Militia Battalion "Maneuver Army Corps"`,`Milizia Marittima di artiglieria battaglione "Corpo d'Armata di Manovra"`],name:`MILMART`,designation:``,commander:`Priore`},
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
                                    desc:[`115th Rifle Regiment`,`Schützen-Regiment 115`],name:`115`,designation:``,commander:`Zincke`,icon:`15pz`,
                                    pos:[460,920],
                                    elements:[
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`1st Battalion, 115th Rifle Regiment`,`I./Schützen-Regiment 115`],name:`1`,designation:`115`,commander:`von Grolmann`},
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`2nd Battalion, 115th Rifle Regiment`,`II./Schützen-Regiment 115`],name:`2`,designation:`115`,commander:`Roske`},
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`3rd Battalion, 115th Rifle Regiment`,`III./Schützen-Regiment 115`],name:`3`,designation:`115`,commander:`Finke`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`,`Motorized`],team:`German`,
                                    desc:[`33rd Artillery Regiment`,`Artillerie-Regiment (mot.) 33`],name:`33`,designation:``,commander:`Crasemann`,icon:`15pz`,
                                    pos:[215,920],
                                    elements:[
                                        {level:3,type:`Motorized Concentrated Artillery`,team:`German`,desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:`Mayer`},
                                        {level:3,type:`Motorized Concentrated Artillery`,team:`German`,desc:[`2nd Battalion, 33rd Artillery Regiment`,`II./Artillerie-Regiment (mot.) 33`],name:`2`,designation:`33`,commander:`Mesmer`},
                                        {level:3,type:`Motorized Heavy Artillery`,team:`German`,desc:[`3rd Battalion, 33rd Artillery Regiment`,`III./Artillerie-Regiment (mot.) 33`],name:`3`,designation:`33`,commander:`Bickel`},
                                    ],
                                },{
                                    level:3,type:[`Engineer`,`Motorized`],team:`German`,
                                    desc:[`33rd Engineer Battalion`,`Panzer-Pionier-Bataillon 33`],name:`33`,designation:``,commander:`Oberembt`,icon:`15pz`,
                                    pos:[300,860],
                                    elements:[
                                        {level:3,type:`Motorized Engineer`,team:`German`,desc:[`33rd Engineer Battalion`,`Panzer-Pionier-Bataillon 33`],name:`33`,designation:``,commander:`Oberembt`}, 
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`German`,
                                    desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`von Hößlin`,icon:`15pz`,
                                    pos:[300,980],
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
                                    level:1,type:[`Infantry`,`Semi-Motorized`],team:`German`,
                                    desc:[`15th Rifle Brigade`,`Schützen-Brigade 15`],name:`15`,designation:``,commander:`Menny`,icon:`90l`,
                                    pos:[410,70],
                                    elements:[
                                        {
                                            level:2,type:[`Infantry`,`Semi-Motorized`],team:`German`,
                                            desc:[`361st Light Infantry Regiment`,`Leichtes Infanterie-Regiment 361`],name:`361`,designation:`Afrika`,commander:`Von Barby`,icon:`90l`,
                                            pos:[505,45],
                                            elements:[
                                                {level:3,type:`Semi-Motorized Infantry`,team:`German`,desc:[`1st Battalion, 361st Light Infantry Regiment`,`I./Leichtes Infanterie-Regiment 361`],name:`1`,designation:`361`,commander:`Harder`},
                                                {level:3,type:`Semi-Motorized Infantry`,team:`German`,desc:[`2nd Battalion, 361st Light Infantry Regiment`,`II./Leichtes Infanterie-Regiment 361`],name:`2`,designation:`361`,commander:`Ryll`},
                                            ],
                                        },{
                                            level:2,type:[`Infantry`,`Semi-Motorized`],team:`German`,
                                            desc:[`200th Light Infantry Regiment`,`Leichtes Infanterie-Regiment 200`],name:`200`,designation:``,commander:`Geißler`,icon:`90l`,
                                            pos:[485,125],
                                            elements:[
                                                {level:3,type:`Motorcycle Infantry`,team:`German`,desc:[`1st Battalion, 200th Light Infantry Regiment`,`I./Leichtes Infanterie-Regiment 200`],name:`1`,designation:`200`,commander:`Ehle`}, 
                                                {level:3,type:`Semi-Motorized Infantry`,team:`German`,desc:[`2nd Battalion, 200th Light Infantry Regiment`,`II./Leichtes Infanterie-Regiment 200`],name:`2`,designation:`200`,commander:`Panzenhagen`},
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`288th "Afrika" Grenadier Regiment`,`Afrika-Grenadier-Regiment 288`],name:`288`,designation:``,commander:`Menton`,icon:`288svb`,
                                    pos:[385,1120],
                                    elements:[
                                        {level:3,type:`Motorized Reinforced Infantry`,team:`German`,desc:[`1st Battalion, 288th "Afrika" Grenadier Regiment`,`I./Afrika-Grenadier-Regiment 288`],name:`1`,designation:`288`,commander:`Daumiller`},
                                        {level:3,type:`Motorized Reinforced Infantry`,team:`German`,desc:[`2nd Battalion, 288th "Afrika" Grenadier Regiment`,`II./Afrika-Grenadier-Regiment 288`],name:`2`,designation:`288`,commander:`Borhardt`},
                                    ],
                                },{
                                    level:3,type:[`Artillery`,`Motorized`],team:`German`,
                                    desc:[`361st "Afrika" Artillery Battalion`,`Afrika-Artillerieabteilung 361`],name:`361`,designation:`Afrika`,commander:`Schilling`,icon:`90l`,
                                    pos:[455,1120],
                                    elements:[
                                        {level:3,type:`Motorized Artillery`,team:`German`,desc:[`361st "Afrika" Artillery Battalion`,`Afrika-Artillerieabteilung 361`],name:`361`,designation:`Afrika`,commander:`Schilling`},
                                    ],
                                },{
                                    level:4,type:[`Tank`,`Recon`,`Tracked`],team:`German`,
                                    desc:[`580th Reconnaissance Company`,`Aufklärungs-Kompanie 580`],name:`580`,designation:``,commander:`Hohmeyer`,icon:`90l`,
                                    pos:[513,1120],
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
        },
    ],
}
export var dev={slow:false,begin:-1}
export var options={obscureKills:true,translate:false}
export var graphics={main:0,scale:0,load:{map:[],city:[],team:[],unit:[],water:0,fortifications:0}}
export var inputs={mouse:{base:{x:0,y:0},rel:{x:0,y:0},previous:{base:{x:0,y:0},rel:{x:0,y:0}}}}
export var constants={
    trig:[[],[]],init:false,unitId:0,
    turnTime:150,artilleryRange:250,
    battleVariance:1.5,breakVariance:2.5,breakMult:1.2,battalionVariance:1.2,
}
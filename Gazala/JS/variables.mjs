export var types={
    city:[],
    connect:[],
    team:[],
    player:[],
    side:[],
    unit:[],
    elementType:[
        {name:`Infantry`,unitType:[`Infantry`],class:0,damage:[10,2],armor:0,health:100,morale:1,num:800,speed:1,artillery:false,engineer:false},//0
        {name:`Weak Infantry`,unitType:[`Infantry`],class:0,damage:[10,2],armor:0,health:90,morale:0.9,num:720,speed:1,artillery:false,engineer:false},
        {name:`Oasis Infantry`,unitType:[`Infantry`],class:0,damage:[10,1],armor:0,health:125,morale:1.1,num:1000,speed:1,artillery:false,engineer:false},
        {name:`Machine Gun`,unitType:[`Infantry`,`Machine Gun`],class:0,damage:[12,2],armor:0,health:100,morale:1,num:800,speed:0.9,artillery:false,engineer:false},
        {name:`Semi-Motorized Infantry`,unitType:[`Infantry`,`Semi-Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1,num:800,speed:1.5,artillery:false,engineer:false},
        {name:`Motorized Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1,num:800,speed:2.5,artillery:false,engineer:false},
        {name:`Motorized Heavy Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:125,morale:1,num:1000,speed:2.25,artillery:false,engineer:true},
        {name:`Motorized Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:100,morale:1,num:800,speed:2.25,artillery:false,engineer:false},
        {name:`Motorized Bersaglieri`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1.2,num:800,speed:2.5,artillery:false,engineer:false},
        {name:`Motorized Machine Gun Bersaglieri`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:100,morale:1.2,num:800,speed:2.25,artillery:false,engineer:false},
        {name:`Motorized Militia`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1.1,num:800,speed:2.5,artillery:false,engineer:false},//10
        {name:`Motorcycle Infantry`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[10,1],armor:0,health:100,morale:1,num:800,speed:3,artillery:false,engineer:false},
        {name:`Motorcycle Bersaglieri`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[10,1],armor:0,health:100,morale:1.2,num:800,speed:3,artillery:false,engineer:false},
        {name:`Motorcycle Police`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[8,1],armor:0.2,health:100,morale:1,num:600,speed:3,artillery:false,engineer:false},
        {name:`Light Tank`,unitType:[`Tank`,`Light`],class:1,damage:[12,6],armor:0.6,health:60,morale:0.5,num:50,speed:2,artillery:false,engineer:false},
        {name:`Security Tank`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:40,morale:0.6,num:33,speed:1.5,artillery:false,engineer:false},
        {name:`Medium Tank`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:60,morale:0.6,num:50,speed:1.5,artillery:false,engineer:false},
        {name:`Heavy Tank`,unitType:[`Tank`,`Heavy`],class:1,damage:[15,12],armor:1,health:75,morale:0.6,num:50,speed:1.125,artillery:false,engineer:false},
        {name:`Armored Car`,unitType:[`Tank`,`Recon`],class:1,damage:[6,1],armor:0.8,health:50,morale:0.5,num:50,speed:3,artillery:false,engineer:false},
        {name:`Armored Car Company`,unitType:[`Tank`,`Recon`],class:1,damage:[6,1],armor:0.8,health:20,morale:0.5,num:20,speed:3,artillery:false,engineer:false},
        {name:`Light Artillery`,unitType:[`Light Artillery`,`Artillery`],class:2,damage:[8,10],armor:0.2,health:20,morale:0.6,num:20,speed:0.7,artillery:true,engineer:false},//20
        {name:`Coastal Artillery`,unitType:[`Light Artillery`,`Artillery`],class:2,damage:[8,10],armor:0.2,health:12,morale:0.6,num:12,speed:0.7,artillery:true,engineer:false},
        {name:`Artillery`,unitType:[`Artillery`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:20,speed:0.7,artillery:true,engineer:false},
        {name:`Semi-Motorized Artillery`,unitType:[`Artillery`,`Semi-Motorized`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:20,speed:1.05,artillery:true,engineer:false},
        {name:`Motorized Light Artillery`,unitType:[`Light Artillery`,`Artillery`,`Motorized`],class:2,damage:[4,10],armor:0.2,health:20,morale:0.7,num:20,speed:1.75,artillery:true,engineer:false},
        {name:`Motorized Group Artillery`,unitType:[`Light Artillery`,`Artillery`,`Motorized`],class:2,damage:[6,13],armor:0.3,health:24,morale:0.7,num:24,speed:1.75,artillery:true,engineer:false},
        {name:`Motorized Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:20,speed:1.75,artillery:true,engineer:false},
        {name:`Mixed Support`,unitType:[`Artillery`,`Machine Gun`],class:0,damage:[10,8],armor:0.1,health:50,morale:1,num:400,speed:0.8,artillery:false,engineer:false},
        {name:`Motorized Mixed Support`,unitType:[`Artillery`,`Machine Gun`,`Motorized`],class:0,damage:[10,8],armor:0.1,health:50,morale:1,num:400,speed:2,artillery:false,engineer:false},
        {name:`Motorized Bersaglieri Mixed Support`,unitType:[`Artillery`,`Machine Gun`,`Motorized`],class:0,damage:[10,8],armor:0.1,health:50,morale:1.2,num:400,speed:2,artillery:false,engineer:false},
        {name:`Mixed Combat`,unitType:[`Infantry`,`Engineer`,`Mountain`],class:0,damage:[9,6],armor:0.1,health:80,morale:1.1,num:500,speed:1.15,artillery:false,engineer:true},//39
        {name:`Mixed Infantry`,unitType:[`Infantry`,`Recon`,`Artillery`],class:0,damage:[8,8],armor:0.2,health:80,morale:1,num:500,speed:1.3,artillery:false,engineer:false},
        {name:`Engineer`,unitType:[`Engineer`],class:0,damage:[6,4],armor:0,health:75,morale:1,num:600,speed:1,artillery:false,engineer:true},
        {name:`Motorized Engineer`,unitType:[`Engineer`,`Motorized`],class:0,damage:[6,4],armor:0,health:75,morale:1,num:600,speed:2.5,artillery:false,engineer:true},
        {name:`Flak`,unitType:[`Anti-Tank`],class:2,damage:[6,30],armor:0.1,health:20,morale:1,num:20,speed:0.8,artillery:true,engineer:false},
        {name:`Motorized Flak`,unitType:[`Anti-Tank`,`Motorized`],class:2,damage:[6,30],armor:0.1,health:20,morale:1,num:20,speed:2,artillery:true,engineer:false},

        {name:`Superior Tank`,unitType:[`Tank`,`Superior`],class:1,damage:[15,15],armor:0.8,health:60,morale:0.75,num:50,speed:1.5,artillery:false,engineer:false},
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

        {name:`Superior`},
    ],unitLevel:[
        {name:`Division`,symbol:`XX`,size:[48,48,48]},
        {name:`Brigade`,symbol:`X`,size:[42,36,36]},
        {name:`Regiment`,symbol:`III`,size:[36,36,36]},
        {name:`Battalion`,symbol:`II`,size:[28,28,28]},
        {name:`Company`,symbol:`I`,size:[24,24,24]},
    ],map:[
        {
            name:[`Operation Crusader`,`Base`],
            term:[`main`],
            city:[
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
                    name:`Main`,
                    battalions:[[52],[18,21]],bonus:true,partition:[[0],[1],[2]],pick:false,
                    unit:[
                        {
                            level:1,type:[`Tank`,`Heavy`],team:`British`,
                            desc:`32nd Army Tank Brigade`,name:`32`,designation:``,commander:`Willison`,icon:`32a`,
                            pos:[923,365],
                            elements:[
                                {level:3,type:`Heavy Tank`,team:`British`,desc:`4th Royal Tank Regiment`,name:`4`,designation:`Royal Tank\nRegiment`,commander:`Reeve`},
                                {level:3,type:`Heavy Tank`,team:`British`,desc:`7th Royal Tank Regiment`,name:`7`,designation:`Royal Tank\nRegiment`,commander:`Foote`},
                                {level:3,type:`Heavy Tank`,team:`British`,desc:`42nd Royal Tank Regiment`,name:`42`,designation:`Royal Tank\nRegiment`,commander:``},
                            ],
                        },{
                            level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:`11th Indian Infantry Brigade`,name:`11`,designation:``,commander:`Anderson`,icon:`4id`,
                            pos:[2152,534],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Queen's Own Cameron Highlanders`,name:`2`,designation:`Cameron\nHighlanders`,commander:`Duncan`},
                                {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`1st Battalion, 6th Rajputana Rifles`,name:`1/6`,designation:`Rajputana`,commander:`Quayle`},
                                {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`2nd Battalion, 5th Mahratta Light Infantry`,name:`2/5`,designation:`Mahratta`,commander:`Doyle`},
                                {level:3,type:`Motorized Artillery`,team:`British`,desc:`25th Field Regiment, Royal Artillery`,name:`25`,designation:``,commander:`Pope`},
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
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:`3rd Regiment, Royal Horse Artillery`,name:`3`,designation:`Royal\nHorse`,commander:`Wilson`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Tank`],team:`British`,
                            desc:`7th Armoured Division`,name:`7`,designation:``,commander:`Messervy`,icon:`7a`,
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
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:`3rd Field Regiment, Royal Artillery`,name:`3`,designation:``,commander:``},
                                    ],
                                },{
                                    level:1,type:[`Tank`],team:`British`,
                                    desc:`4th Armoured Brigade`,name:`4`,designation:``,commander:`Richards`,icon:`7a`,
                                    pos:[1086,664],
                                    elements:[
                                        {level:3,type:`Light Tank`,team:`British`,desc:`3rd Royal Tank Regiment`,name:`3`,designation:`Royal Tank\nRegiment`,commander:`Roberts`},
                                        {level:3,type:`Light Tank`,team:`British`,desc:`5th Royal Tank Regiment`,name:`5`,designation:`Royal Tank\nRegiment`,commander:`Uniacke`},
                                        {level:3,type:`Superior Tank`,team:`British`,desc:`8th Irish Hussars`,name:`8`,designation:`Irish\nHussars`,commander:`Kilkelly`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:`4th Field Regiment, Royal Artillery`,name:`4`,designation:``,commander:``},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`7th Motor Brigade`,name:`7`,designation:``,commander:`Renton`,icon:`7a`,
                                    pos:[1258,1138],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`London Rifle Brigade`,name:`L`,designation:`Rifle\nBrigade`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:`51st (Midland) Field Regiment, Royal Artillery`,name:`60`,designation:`North\nMidland`,commander:`Hallifax`},
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
                                    level:3,type:[`Tank`,`Recon`],team:`British`,
                                    desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:``,icon:`7a`,
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
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:`1st 'Cape' South African Field Artillery Regiment`,name:`1`,designation:``,commander:``},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                                    desc:`2nd South African Infantry Brigade`,name:`2`,designation:``,commander:`du Toit`,icon:`1sa`,
                                    pos:[610,282],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Natal Mounted Rifles`,name:`1`,designation:`Natal\nMounted`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Cape Town Highlanders`,name:`1`,designation:`Cape Town\nHighland`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`2nd Battalion, Field Force Battalion`,name:`2`,designation:`Field\nForce`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:`4th South African Field Artillery Regiment`,name:`4`,designation:``,commander:`Harpur`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                                    desc:`3rd South African Infantry Brigade`,name:`3`,designation:``,commander:`Palmer`,icon:`1sa`,
                                    pos:[676,67],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Imperial Light Horse`,name:`1`,designation:`Imperial\nLight Horse`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Rand Light Infantry`,name:`1`,designation:`Rand`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Royal Durban Light Infantry`,name:`1`,designation:`Royal\nDurban`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:`5th South African Field Artillery Regiment`,name:`5`,designation:``,commander:``},
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
                                    desc:`Machine Gun Battalion 'President Steyn'`,name:`PS`,designation:``,commander:``,icon:`1sa`,
                                    pos:[624,171],
                                    elements:[
                                        {level:3,type:`Motorized Machine Gun`,team:`South African`,desc:`Machine Gun Battalion 'President Steyn'`,name:`PS`,designation:``,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`],team:`South African`,
                                    desc:`3rd South African Armoured Car Regiment`,name:`3`,designation:``,commander:``,icon:`1sa`,
                                    pos:[715,341],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`South African`,desc:`3rd South African Armoured Car Regiment`,name:`3`,designation:``,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:1,type:[`Infantry`,`Motorized`],team:`British`,
                            desc:`150th 'Tyneside' Infantry Brigade`,name:`150`,designation:``,commander:`Haydon`,icon:`50`,
                            pos:[859,667],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`British`,desc:`4th Battalion, East Yorkshire Yeomanry`,name:`4`,designation:`East\nYorkshire`,commander:``},
                                {level:3,type:`Motorized Infantry`,team:`British`,desc:`4th Battalion, Green Howards`,name:`4`,designation:`Green\nHowards`,commander:``},
                                {level:3,type:`Motorized Infantry`,team:`British`,desc:`7th Battalion, Green Howards`,name:`7`,designation:`Green\nHowards`,commander:``},
                                {level:3,type:`Motorized Artillery`,team:`British`,desc:`72nd Field Regiment, Royal Artillery`,name:`72`,designation:``,commander:``},
                            ],
                        },{
                            level:3,type:[`Infantry`,`Motorized`],team:`French`,
                            desc:`Free French Battalion 'Élisabeth de Miribel'`,name:`FF`,designation:`Élisabeth\nde Miribel`,commander:``,icon:``,
                            pos:[1499,280],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`French`,desc:`Free French Battalion 'Élisabeth de Miribel'`,name:`FF`,designation:`Élisabeth\nde Miribel`,commander:``},
                            ],
                        },{
                            level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                            desc:`Infantry Regiment 'Giovani Fascisti'`,name:`GF`,designation:``,commander:`Nannini`,icon:``,
                            pos:[366,1241],
                            elements:[
                                {level:3,type:`Motorized Militia`,team:`Italian`,desc:`1st Battalion, Infantry Regiment 'Giovani Fascisti'`,name:`1`,designation:`Giovani\nFascisti`,commander:`Balisti`},
                                {level:3,type:`Motorized Militia`,team:`Italian`,desc:`2nd Battalion, Infantry Regiment 'Giovani Fascisti'`,name:`2`,designation:`Giovani\nFascisti`,commander:`Benedetti`},
                            ],
                        },{
                            level:3,type:[`Infantry`,`Motorcycle`],team:`Italian`,
                            desc:`Battalion 'Romolo Gessi', Italian Africa Police`,name:`P`,designation:`Romolo\nGessi`,commander:`Diamante`,icon:``,
                            pos:[436,1241],
                            elements:[
                                {level:3,type:`Motorcycle Police`,team:`Italian`,desc:`Battalion 'Romolo Gessi', Italian Africa Police`,name:`P`,designation:`Romolo\nGessi`,commander:`Diamante`},
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:`60th Infantry Division 'Sabratha'`,name:`60`,designation:`Sabratha`,commander:`Soldarelli`,icon:`sabratha`,
                            pos:[383,176],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:`85th Infantry Regiment`,name:`85`,designation:`Sabratha`,commander:`Grimaldi`,icon:`sabratha`,
                                    pos:[470,200],
                                    elements:[
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:`1st Battalion, 85th Infantry Regiment`,name:`1`,designation:`85`,commander:`Angelozzi`},
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:`2nd Battalion, 85th Infantry Regiment`,name:`2`,designation:`85`,commander:`Morosini`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:`86th Infantry Regiment`,name:`86`,designation:`Sabratha`,commander:`Castrignanò`,icon:`sabratha`,
                                    pos:[450,280],
                                    elements:[
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:`1st Battalion, 86th Infantry Regiment`,name:`1`,designation:`86`,commander:`Velosa`},
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:`2nd Battalion, 86th Infantry Regiment`,name:`2`,designation:`86`,commander:`Piana`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:`102nd Infantry Division 'Trento'`,name:`102`,designation:`Trento`,commander:`Scotti`,icon:`trento`,
                            pos:[479,450],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:`61st Infantry Regiment`,name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[470,375],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:`1st Battalion, 61st Infantry Regiment`,name:`1`,designation:`61`,commander:`Pittau`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:`2nd Battalion, 61st Infantry Regiment`,name:`2`,designation:`61`,commander:`Menzio`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:`62nd Infantry Regiment`,name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[600,460],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:`1st Battalion, 62nd Infantry Regiment`,name:`1`,designation:`62`,commander:`Scolli`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:`2nd Battalion, 62nd Infantry Regiment`,name:`2`,designation:`62`,commander:`de Polis`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:`7th Bersaglieri Regiment`,name:`7`,designation:`Bersaglieri`,commander:`Scirocco`,icon:`trento`,
                                    pos:[235,567],
                                    elements:[
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:`10th Bersaglieri Battalion`,name:`10`,designation:`Bersaglieri`,commander:`Adolfato`},
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:`11th Bersaglieri Battalion`,name:`11`,designation:`Bersaglieri`,commander:`Straziota`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`,'Motorized'],team:`Italian`,
                            desc:`101st Motorized Infantry Division 'Trieste'`,name:`101`,designation:`Trieste`,commander:`Piazzoni`,icon:`trieste`,
                            pos:[518,628],
                            elements:[
                                {
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:`65th Motorized Infantry Regiment`,name:`65`,designation:`Trieste`,commander:`Bonis`,icon:`trieste`,
                                    pos:[634,564],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`Italian`,desc:`1st Battalion, 65th Motorized Infantry Regiment`,name:`1`,designation:`65`,commander:`Vaiarini`},
                                        {level:3,type:`Motorized Infantry`,team:`Italian`,desc:`2nd Battalion, 65th Motorized Infantry Regiment`,name:`2`,designation:`65`,commander:`Quirico`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:`66th Motorized Infantry Regiment`,name:`66`,designation:`Trieste`,commander:`Fabozzi`,icon:`trieste`,
                                    pos:[641,695],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`Italian`,desc:`1st Battalion, 66th Motorized Infantry Regiment`,name:`1`,designation:`66`,commander:`Chiarusso`},
                                        {level:3,type:`Motorized Infantry`,team:`Italian`,desc:`2nd Battalion, 66th Motorized Infantry Regiment`,name:`2`,designation:`66`,commander:`Zanetti`},
                                        {level:3,type:`Motorized Infantry`,team:`Italian`,desc:`3rd Battalion, 66th Motorized Infantry Regiment`,name:`3`,designation:`66`,commander:`Manieri`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorcycle`],team:`Italian`,
                                    desc:`9th Bersaglieri Regiment`,name:`9`,designation:`Bersaglieri`,commander:`Bordoni`,icon:`trieste`,
                                    pos:[490,728],
                                    elements:[
                                        {level:3,type:`Motorcycle Bersaglieri`,team:`Italian`,desc:`28th Bersaglieri Battalion`,name:`28`,designation:`Bersaglieri`,commander:`Blandi`},
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:`30th Bersaglieri Battalion`,name:`30`,designation:`Bersaglieri`,commander:`Borghi`},
                                    ],
                                },{
                                    level:3,type:[`Artillery`,`Motorized`],team:`Italian`,
                                    desc:`Milizia Marittima di Artiglieria 'Corpo d'Armata di Manovra'`,name:`MILMART`,designation:``,commander:`Priore`,icon:`trieste`,
                                    pos:[412,599],
                                    elements:[
                                        {level:3,type:`Motorized Artillery`,team:`Italian`,desc:`Milizia Marittima di Artiglieria Battalion 'Corpo d'Armata di Manovra'`,name:`MILMART`,designation:``,commander:`Priore`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Tank`],team:`German`,
                            desc:`15th Panzer Division`,name:`15`,designation:``,commander:`von Värst`,icon:`15pz`,
                            pos:[300,920],
                            elements:[
                                {
                                    level:2,type:[`Tank`],team:`German`,
                                    desc:`8th Panzer Regiment`,name:`8`,designation:``,commander:`Teege`,icon:`15pz`,
                                    pos:[385,920],
                                    elements:[
                                        {level:3,type:`Medium Tank`,team:`German`,desc:`1st Battalion, 8th Panzer Regiment`,name:`1`,designation:`8`,commander:`Kümmel`},
                                        {level:3,type:`Medium Tank`,team:`German`,desc:`2nd Battalion, 8th Panzer Regiment`,name:`2`,designation:`8`,commander:`Wahl`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:`115th Infantry Regiment`,name:`115`,designation:``,commander:`Zincke`,icon:`15pz`,
                                    pos:[460,920],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`German`,desc:`1st Battalion, 115th Infantry Regiment`,name:`1`,designation:`115`,commander:`von Grolmann`},
                                        {level:3,type:`Motorized Infantry`,team:`German`,desc:`2nd Battalion, 115th Infantry Regiment`,name:`2`,designation:`115`,commander:`Göttman`},
                                        {level:3,type:`Motorized Heavy Machine Gun`,team:`German`,desc:`2nd Machine Gun Battalion`,name:`2`,designation:``,commander:`Finke`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`,`Motorized`],team:`German`,
                                    desc:`33rd Artillery Regiment`,name:`33`,designation:``,commander:`Crasemann`,icon:`15pz`,
                                    pos:[215,920],
                                    elements:[
                                        {level:3,type:`Motorized Artillery`,team:`German`,desc:`1st Battalion, 33rd Artillery Regiment`,name:`1`,designation:`33`,commander:`Mayer`},
                                        {level:3,type:`Motorized Artillery`,team:`German`,desc:`2nd Battalion, 33rd Artillery Regiment`,name:`2`,designation:`33`,commander:`Mesmer`},
                                        {level:3,type:`Motorized Artillery`,team:`German`,desc:`3rd Battalion, 33rd Artillery Regiment`,name:`3`,designation:`33`,commander:`Bickel`},
                                    ],
                                },{
                                    level:3,type:[`Engineer`,`Motorized`],team:`German`,
                                    desc:`33rd Panzer Pioneer Battalion`,name:`33`,designation:``,commander:`Oberembt`,icon:`15pz`,
                                    pos:[300,860],
                                    elements:[
                                        {level:3,type:`Motorized Engineer`,team:`German`,desc:`33rd Panzer Pioneer Battalion`,name:`33`,designation:``,commander:`Oberembt`}, 
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`],team:`German`,
                                    desc:`33rd Reconnaissance Battalion`,name:`33`,designation:``,commander:`Héraucourt`,icon:`15pz`,
                                    pos:[300,980],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`German`,desc:`33rd Reconnaissance Battalion`,name:`33`,designation:``,commander:`Héraucourt`}, 
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`German`,
                            desc:`90th Light 'Afrika' Division`,name:`A`,designation:`Light`,commander:`Kleemann`,icon:`90l`,
                            pos:[300,1120],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:`15th Infantry Brigade`,name:`15`,designation:``,commander:`Menny`,icon:`90l`,
                                    pos:[410,70],
                                    elements:[
                                        {
                                            level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                            desc:`361st 'Afrika' Infantry Regiment`,name:`361`,designation:`Afrika`,commander:`Von Barby`,icon:`90l`,
                                            pos:[505,45],
                                            elements:[
                                                {level:3,type:`Motorized Infantry`,team:`German`,desc:`1st Battalion, 361st 'Afrika' Infantry Regiment`,name:`1`,designation:`361`,commander:`Harder`},
                                                {level:3,type:`Motorized Infantry`,team:`German`,desc:`2nd Battalion, 361st 'Afrika' Infantry Regiment`,name:`2`,designation:`361`,commander:`Ryll`},
                                            ],
                                        },{
                                            level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                            desc:`200th Infantry Regiment`,name:`200`,designation:`z.b.V.`,commander:`Geißler`,icon:`90l`,
                                            pos:[485,125],
                                            elements:[
                                                {level:3,type:`Motorcycle Infantry`,team:`German`,desc:`1st Battalion, 200th Infantry Regiment`,name:`1`,designation:`200`,commander:`Ehle`}, 
                                                {level:3,type:`Motorized Infantry`,team:`German`,desc:`2nd Battalion, 200th Infantry Regiment`,name:`2`,designation:`200`,commander:`Grund`},
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:`'Afrika' Grenadier Regiment 288`,name:`288`,designation:``,commander:`Menton`,icon:`90l`,
                                    pos:[385,1120],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`German`,desc:`1st Battalion, 'Afrika' Grenadier Regiment 288`,name:`1`,designation:`288`,commander:`Daumiller`},
                                        {level:3,type:`Motorized Infantry`,team:`German`,desc:`2nd Battalion, 'Afrika' Grenadier Regiment 288`,name:`2`,designation:`288`,commander:`Borhardt`},
                                    ],
                                },{
                                    level:3,type:[`Artillery`,`Motorized`],team:`German`,
                                    desc:`361st 'Afrika' Artillery Battalion`,name:`361`,designation:`Afrika`,commander:`Schilling`,icon:`90l`,
                                    pos:[455,1120],
                                    elements:[
                                        {level:3,type:`Motorized Artillery`,team:`German`,desc:`361st 'Afrika' Artillery Battalion`,name:`361`,designation:`Afrika`,commander:`Schilling`},
                                    ],
                                },{
                                    level:4,type:[`Tank`,`Recon`],team:`German`,
                                    desc:`580th Reconnaissance Company`,name:`580`,designation:``,commander:`Hohmeyer`,icon:`90l`,
                                    pos:[513,1120],
                                    elements:[
                                        {level:4,type:`Armored Car Company`,team:`German`,desc:`580th Reconnaissance Company`,name:`580`,designation:``,commander:`Hohmeyer`}, 
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
export var dev={slow:false}
export var options={obscureKills:true}
export var graphics={main:0,scale:0,load:{map:[],city:[],team:[],unit:[],water:0,fortifications:0}}
export var inputs={mouse:{base:{x:0,y:0},rel:{x:0,y:0},previous:{base:{x:0,y:0},rel:{x:0,y:0}}}}
export var constants={
    trig:[[],[]],init:false,unitId:0,
    turnTime:150,artilleryRange:250,
    battleVariance:1.5,breakVariance:2.5,breakMult:1.2,battalionVariance:1.2,
}
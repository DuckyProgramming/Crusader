export var types={
    city:[],
    connect:[],
    team:[],
    player:[],
    side:[],
    unit:[],
    reserve:[],
    elementType:[
        {name:`Infantry`,unitType:[`Infantry`],class:0,damage:[10,2],armor:0,health:100,morale:1,num:800,speed:1,artillery:false,engineer:false,recon:false},//0
        {name:`Weak Infantry`,unitType:[`Infantry`],class:0,damage:[10,2],armor:0,health:90,morale:0.9,num:700,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Oasis Infantry`,unitType:[`Infantry`],class:0,damage:[10,1],armor:0,health:125,morale:1.1,num:1000,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Machine Gun`,unitType:[`Infantry`,`Machine Gun`],class:0,damage:[12,2],armor:0,health:100,morale:1,num:800,speed:0.9,artillery:false,engineer:false,recon:false},
        {name:`Semi-Motorized Infantry`,unitType:[`Infantry`,`Semi-Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1,num:800,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Heavy Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:125,morale:1,num:1000,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Motorized Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:100,morale:1,num:800,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Motorized Bersaglieri`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1.2,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Machine Gun Bersaglieri`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:100,morale:1.2,num:800,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Motorized Militia`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1.1,num:800,speed:2.5,artillery:false,engineer:false,recon:false},//10
        {name:`Motorcycle Infantry`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[10,1],armor:0,health:100,morale:1,num:800,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Bersaglieri`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[10,1],armor:0,health:100,morale:1.2,num:800,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Police`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[8,1],armor:0.2,health:100,morale:1,num:600,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Light Tank`,unitType:[`Tank`,`Light`],class:1,damage:[12,6],armor:0.6,health:60,morale:0.5,num:50,speed:2,artillery:false,engineer:false,recon:false},
        {name:`Security Tank`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:40,morale:0.6,num:33,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Medium Tank`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:60,morale:0.6,num:50,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Heavy Tank`,unitType:[`Tank`,`Heavy`],class:1,damage:[15,12],armor:1,health:75,morale:0.6,num:50,speed:1.125,artillery:false,engineer:false,recon:false},
        {name:`Armored Car`,unitType:[`Tank`,`Recon`,`Tracked`],class:1,damage:[6,1],armor:0.8,health:50,morale:0.5,num:50,speed:3,artillery:false,engineer:false,recon:true},
        {name:`Armored Car Company`,unitType:[`Tank`,`Recon`,`Tracked`],class:1,damage:[6,1],armor:0.8,health:20,morale:0.5,num:20,speed:3,artillery:false,engineer:false,recon:true},
        {name:`Light Artillery`,unitType:[`Light Artillery`],class:2,damage:[8,10],armor:0.2,health:20,morale:0.6,num:20,speed:0.7,artillery:true,engineer:false,recon:false},//20
        {name:`Coastal Artillery`,unitType:[`Light Artillery`],class:2,damage:[8,10],armor:0.2,health:12,morale:0.6,num:12,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Artillery`,unitType:[`Artillery`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:20,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Semi-Motorized Artillery`,unitType:[`Artillery`,`Semi-Motorized`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:20,speed:1.05,artillery:true,engineer:false,recon:false},
        {name:`Motorized Light Artillery`,unitType:[`Light Artillery`,`Motorized`],class:2,damage:[4,10],armor:0.2,health:20,morale:0.7,num:20,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Group Artillery`,unitType:[`Light Artillery`,`Motorized`],class:2,damage:[6,13],armor:0.3,health:24,morale:0.7,num:24,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:20,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Mixed Support`,unitType:[`Artillery`,`Machine Gun`,`Mortar`],class:0,damage:[10,8],armor:0.1,health:50,morale:1,num:400,speed:0.8,artillery:false,engineer:false,recon:false},
        {name:`Motorized Mixed Support`,unitType:[`Artillery`,`Machine Gun`,`Motorized`,`Mortar`],class:0,damage:[10,8],armor:0.1,health:50,morale:1,num:400,speed:2,artillery:false,engineer:false,recon:false},
        {name:`Motorized Bersaglieri Mixed Support`,unitType:[`Artillery`,`Machine Gun`,`Motorized`,`Mortar`],class:0,damage:[10,8],armor:0.1,health:50,morale:1.2,num:400,speed:2,artillery:false,engineer:false,recon:false},
        {name:`Mixed Combat`,unitType:[`Infantry`,`Engineer`,`Mountain`],class:0,damage:[9,6],armor:0.1,health:80,morale:1.1,num:500,speed:1.15,artillery:false,engineer:true,recon:false},//30
        {name:`Mixed Infantry`,unitType:[`Infantry`,`Recon`,`Artillery`],class:0,damage:[8,8],armor:0.2,health:80,morale:1,num:500,speed:1.3,artillery:false,engineer:false,recon:false},
        {name:`Motorized Mixed Combat`,unitType:[`Infantry`,`Engineer`,`Mountain`,`Motorized`],class:0,damage:[9,6],armor:0.1,health:80,morale:1.1,num:500,speed:2.875,artillery:false,engineer:true,recon:false},
        {name:`Motorized Mixed Infantry`,unitType:[`Infantry`,`Recon`,`Artillery`,`Motorized`],class:0,damage:[8,8],armor:0.2,health:80,morale:1,num:500,speed:3.25,artillery:false,engineer:false,recon:false},
        {name:`Engineer`,unitType:[`Engineer`],class:0,damage:[6,4],armor:0,health:75,morale:1,num:600,speed:1,artillery:false,engineer:true,recon:false},
        {name:`Motorized Engineer`,unitType:[`Engineer`,`Motorized`],class:0,damage:[6,4],armor:0,health:75,morale:1,num:600,speed:2.5,artillery:false,engineer:true,recon:false},
        {name:`Anti-Tank`,unitType:[`Anti-Tank`],class:2,damage:[0,24],armor:0.1,health:20,morale:1,num:20,speed:1,artillery:true,engineer:false,recon:false},
        {name:`Motorized Anti-Tank`,unitType:[`Anti-Tank`,`Motorized`],class:2,damage:[0,24],armor:0.1,health:20,morale:1,num:20,speed:2.5,artillery:true,engineer:false,recon:false},
        {name:`Flak`,unitType:[`Anti-Air`],class:2,damage:[6,30],armor:0.1,health:20,morale:1,num:20,speed:0.8,artillery:true,engineer:false,recon:false},
        {name:`Motorized Flak`,unitType:[`Anti-Air`,`Motorized`],class:2,damage:[6,30],armor:0.1,health:20,morale:1,num:20,speed:2,artillery:true,engineer:false,recon:false},
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
    ],unitLevel:[
        {name:`Division`,symbol:`XX`,size:[55,55,55]},
        {name:`Brigade`,symbol:`X`,size:[45,50,45]},
        {name:`Regiment`,symbol:`III`,size:[45,45,45]},
        {name:`Battalion`,symbol:`II`,size:[35,35,35]},
        {name:`Company`,symbol:`I`,size:[30,30,30]},
    ],map:[
        {
            name:[`Operation Crusader`,`Base`],
            term:[`main`],
            city:[
                {name:`Gazala`,owner:2,type:1,pos:[323,47]},
                {name:`Tobruk`,owner:0,type:1,pos:[916,175]},
                {name:`Alem Hamza`,owner:2,type:0,pos:[92,172]},
                {name:`Acroma`,owner:2,type:0,pos:[581,198]},
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
                {name:`Bir Hacheim`,owner:2,type:0,pos:[191,795]},
                {name:`Fort Capuzzo`,owner:2,type:0,pos:[2245,937]},
                {name:`Taieb el Esem`,owner:2,type:0,pos:[1222,959]},
                {name:`Bir el Gubi`,owner:2,type:0,pos:[946,961]},
                {name:`Sollum`,owner:2,type:0,pos:[2358,967]},
                {name:`Bir Ghirba`,owner:2,type:0,pos:[2104,1017]},
                {name:`Retma`,owner:2,type:0,pos:[660,1038]},
                {name:`Halfaya Pass`,owner:2,type:0,pos:[2405,1069]},
                {name:`Buq Buq`,owner:0,type:1,pos:[2896,1027]},
                {name:`Bir Bu Deheua`,owner:2,type:0,pos:[1895,1124]},
                {name:`Libyan Omar`,owner:2,type:0,pos:[2023,1136]},
                {name:`Gabr Saleh`,owner:2,type:0,pos:[1386,1151]},
                {name:`Sidi Omar`,owner:2,type:0,pos:[2005,1197]},
                {name:`Sidi Suleiman`,owner:-1,type:0,pos:[2281,1230]},
                {name:`Bir Gibni`,owner:2,type:0,pos:[1737,1251]},
                {name:`Bir Sheferzen`,owner:0,type:0,pos:[1950,1282]},
                {name:`Bir el Khireigat`,owner:0,type:0,pos:[2276,1365]},
                {name:`Gasr el Abid`,owner:-1,type:0,pos:[1932,1386]},
                {name:`El Cuasc`,owner:2,type:0,pos:[1062,1469]},
                {name:`Sofafi`,owner:0,type:1,pos:[2937,1420]},
                {name:`Bir Habata`,owner:0,type:0,pos:[2774,1542]},
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
                {name:[`Sofafi`,`Buq Buq`]},
                {name:[`Sofafi`,`Bir Habata`]},
                {name:[`Bir el Khireigat`,`Bir Habata`]},
                {name:[`Bir el Khireigat`,`Sidi Suleiman`]},
                {name:[`Halfaya Pass`,`Sidi Suleiman`]},
                {name:[`Bir Gibni`,`Bir Sheferzen`]},

                {name:[`Gasr el Abid`,`Bir Sheferzen`]},
                {name:[`Bir Sheferzen`,`Bir el Khireigat`]},
                {name:[`Bir Sheferzen`,`Sidi Omar`]},
                {name:[`Sidi Suleiman`,`Sidi Omar`]},
                {name:[`Libyan Omar`,`Sidi Omar`]},
                {name:[`Libyan Omar`,`Bir Ghirba`]},
                {name:[`Sidi Azeiz`,`Bir Ghirba`]},
                {name:[`Libyan Omar`,`Bir Bu Deheua`]},
                {name:[`Bir Gibni`,`Bir Bu Deheua`]},
                {name:[`Gasr el Abid`,`El Cuasc`]},

                {name:[`Sidi Azeiz`,`Bir Bu Deheua`]},
                {name:[`Gambut`,`Gasr el Arid`]},
                {name:[`Bir Ghirba`,`Halfaya Pass`]},
                {name:[`Gasr el Abid`,`Bir el Khireigat`]},
            ],team:[
                {name:`British`,term:`britain`,player:0,quality:1},
                {name:`New Zealand`,term:`new zealand`,player:0,quality:1.05},
                {name:`South African`,term:`south africa`,player:0,quality:0.95},
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
                {name:`Allied`},
                {name:`Axis`},
            ],unit:[
                {
                    name:`Operation Battleaxe - 2 Player`,
                    battalions:[[20],[20]],bonus:false,partition:[[0],[1,2]],pick:-1,
                    unit:[
                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:`Royal\nHorse`,commander:`Currie`},
                    ],
                },{
                    name:`Operation Battleaxe - 3 Player`,
                    battalions:[[19],[8,13]],bonus:false,partition:[[0],[1],[2]],pick:-1,
                    unit:[
                        {
                            level:0,type:[`Tank`],team:`British`,
                            desc:[`7th Armored Division`,`7th Armoured Division`],name:`7`,designation:``,commander:`Creagh`,icon:`7a`,
                            pos:[2650,1420],
                            elements:[
                                {
                                    level:1,type:[`Tank`,`Heavy`],team:`British`,
                                    desc:[`4th Armored Brigade`,`4th Armoured Brigade`],name:`4`,designation:``,commander:`Gatehouse`,icon:`7a`,
                                    pos:[2330,1420],
                                    elements:[
                                        {level:3,type:`Heavy Tank`,team:`British`,desc:[`4th Battalion, Royal Tank Regiment`,`4th Royal Tank Regiment`],name:`4`,designation:`Royal Tank\nRegiment`,commander:`O"Carroll`},
                                        {level:3,type:`Heavy Tank`,team:`British`,desc:[`7th Battalion, Royal Tank Regiment`,`7th Royal Tank Regiment`],name:`7`,designation:`Royal Tank\nRegiment`,commander:`Groves`},
                                    ],
                                },{
                                    level:1,type:[`Tank`],team:`British`,
                                    desc:[`7th Armored Brigade`,`7th Armoured Brigade`],name:`7`,designation:``,commander:`Russell`,icon:`7a`,
                                    pos:[2435,1420],
                                    elements:[
                                        {level:3,type:`Medium Tank`,team:`British`,desc:[`2nd Battalion, Royal Tank Regiment`,`2nd Royal Tank Regiment`],name:`2`,designation:`Royal Tank\nRegiment`,commander:`Chute`},
                                        {level:3,type:`Medium Tank`,team:`British`,desc:[`6th Battalion, Royal Tank Regiment`,`6th Royal Tank Regiment`],name:`6`,designation:`Royal Tank\nRegiment`,commander:`Harland`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Artillery`,`Motorized`],team:`British`,
                                    desc:`7th Support Group`,name:`7`,designation:``,commander:`Gott`,icon:`7a`,
                                    pos:[2540,1420],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:`de Salis`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Renton`},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`3rd Battalion, Royal Horse Artillery`,`3rd Regiment, Royal Horse Artillery`],name:`3`,designation:`Royal\nHorse`,commander:`Wilson`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`British`,
                                    desc:`11th Hussars`,name:`11`,designation:`Hussars`,commander:`Leetham`,icon:`7a`,
                                    pos:[1950,1282],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`British`,desc:`11th Hussars`,name:`11`,designation:`Hussars`,commander:`Leetham`},
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
                            level:0,type:[`Infantry`],team:`Australian`,
                            desc:`9th Australian Division`,name:`9`,designation:``,commander:`Morshead`,icon:`9a`,
                            pos:[916,175],
                            elements:[
                                {
                                    level:1,type:[`Infantry`],team:`Australian`,
                                    desc:`20th Australian Infantry Brigade`,name:`20`,designation:``,commander:`Murray`,icon:`9a`,
                                    pos:[927,275],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Australian`,desc:[`13th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/13th Australian Infantry Battalion`],name:`2/13`,designation:``,commander:`Turner`},
                                        {level:3,type:`Infantry`,team:`Australian`,desc:[`15th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/15th Australian Infantry Battalion`],name:`2/15`,designation:``,commander:`Ogle`},
                                        {level:3,type:`Infantry`,team:`Australian`,desc:[`17th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/17th Australian Infantry Battalion`],name:`2/17`,designation:``,commander:`Crawford`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`],team:`Australian`,
                                    desc:`24th Australian Infantry Brigade`,name:`24`,designation:``,commander:`Godfrey`,icon:`9a`,
                                    pos:[785,180],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Australian`,desc:[`28th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/28th Australian Infantry Battalion`],name:`2/28`,designation:``,commander:`Lloyd`},
                                        {level:3,type:`Infantry`,team:`Australian`,desc:[`43rd Infantry Battalion, 2nd Australian Expeditionary Force`,`2/43rd Australian Infantry Battalion`],name:`2/43`,designation:``,commander:`Wain`},
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Infantry`],team:`German`,
                            desc:[`300th Special Purpose Oasis Battalion`,`Oasen Bataillon z.b.V. 300`],name:`300`,designation:`Oasis`,commander:`Ennecerus`,icon:``,
                            pos:[2405,1069],
                            elements:[
                                {level:3,type:`Oasis Infantry`,team:`German`,desc:[`300th Special Purpose Oasis Battalion`,`Oasen Bataillon z.b.V. 300`],name:`300`,designation:`Oasis`,commander:`Ennecerus`},
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
                                        {level:3,type:`Medium Tank`,team:`German`,desc:[`2nd Battalion, 8th Panzer Regiment`,`II./Panzer-Regiment 8`],name:`2`,designation:`8`,commander:`Ramsauer`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`15th Rifle Brigade`,`Schützen-Brigade 15`],name:`15`,designation:``,commander:`Menny`,icon:`15pz`,
                                    pos:[1564,520],
                                    elements:[
                                        {
                                            level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                            desc:[`115th Rifle Regiment`,`Schützen-Regiment 115`],name:`115`,designation:``,commander:`Zincke`,icon:`15pz`,
                                            pos:[972,381],
                                            elements:[
                                                {level:3,type:`Motorized Infantry`,team:`German`,desc:[`1st Battalion, 115th Rifle Regiment`,`I./Schützen-Regiment 115`],name:`1`,designation:`115`,commander:`von Grolmann`},
                                                {level:3,type:`Motorized Heavy Machine Gun`,team:`German`,desc:[`2nd Machine Gun Battalion`,`2. Maschinengewehr-Bataillon`],name:`2`,designation:``,commander:`Finke`},
                                            ],
                                        },{
                                            level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                            desc:[`200th Special Purpose Regimental Staff`,`Regimentsstab z.b.V. 200`],name:`200`,designation:`z.b.V.`,commander:`Geißler`,icon:`15pz`,
                                            pos:[1634,628],
                                            elements:[
                                                {level:3,type:`Motorcycle Infantry`,team:`German`,desc:[`15th Motorcycle Battalion`,`Kradschützen-Bataillon 15`],name:`15`,designation:``,commander:`Ehle`}, 
                                            ],
                                        },
                                    ],
                                },{
                                    level:3,type:[`Artillery`,`Motorized`],team:`German`,
                                    desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:``,commander:`Mayer`,icon:`15pz`,
                                    pos:[1393,382],
                                    elements:[
                                        {level:3,type:`Motorized Artillery`,team:`German`,desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:`Mayer`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`German`,
                                    desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`Héraucourt`,icon:`15pz`,
                                    pos:[1737,1251],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`German`,desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`Héraucourt`}, 
                                    ],
                                },
                            ],
                        },{
                            level:2,type:[`Artillery`],team:`Italian`,
                            desc:[`8th Army Artillery Group`,`8° Reggimento artiglieria d'Armata`],name:`8`,designation:`Army`,commander:`Bersano`,icon:``,
                            pos:[827,474],
                            elements:[
                                {level:3,type:`Artillery`,team:`Italian`,desc:[`33rd Group, 8th Army Artillery Group`,`XXXIII gruppo, 8° Reggimento artiglieria d'Armata`],name:`33`,designation:``,commander:`Perrod`},
                                {level:3,type:`Light Artillery`,team:`Italian`,desc:[`52nd Group, 8th Army Artillery Group`,`LII gruppo, 8° Reggimento artiglieria d'Armata`],name:`52`,designation:``,commander:`Salvetti`},
                                {level:3,type:`Artillery`,team:`Italian`,desc:[`131st Group, 8th Army Artillery Group`,`CXXXI gruppo, 8° Reggimento artiglieria d'Armata`],name:`131`,designation:``,commander:`Montella`},
                                {level:3,type:`Artillery`,team:`Italian`,desc:[`147th Group, 8th Army Artillery Group`,`CXLVII gruppo, 8° Reggimento artiglieria d'Armata`],name:`147`,designation:``,commander:`Pacinotti`},
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`102nd Infantry Division "Trento"`,`102ª Divisione di fanteria motorizzata "Trento"`],name:`102`,designation:`Trento`,commander:`Stampioni`,icon:`trento`,
                            pos:[480,441],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`61st Infantry Regiment`,`61° Reggimento di fanteria motorizzata "Sicilia"`],name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[666,191],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 61st Infantry Regiment`,`I battaglione fucilieri, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 61st Infantry Regiment`,`II battaglione fucilieri, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`},
                                        {level:3,type:`Mixed Support`,team:`Italian`,desc:[`3rd Mixed Support Battalion, 61st Motorized Infantry Regiment`,`III battaglione armi d'accompagnamento, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`M`,designation:`61`,commander:`Rabezzana`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`62nd Infantry Regiment`,`62° Reggimento di fanteria motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[2014,1167],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 62nd Infantry Regiment`,`I battaglione fucilieri, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 62nd Infantry Regiment`,`II battaglione fucilieri, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`},
                                        {level:3,type:`Mixed Support`,team:`Italian`,desc:[`3rd Mixed Support Battalion, 62nd Motorized Infantry Regiment`,`III battaglione armi d'accompagnamento, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`M`,designation:`62`,commander:`Gennaro`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`7th Bersaglieri Regiment`,`7° Reggimento Bersaglieri`],name:`7`,designation:`Bersaglieri`,commander:`Scirocco`,icon:`trento`,
                                    pos:[378,564],
                                    elements:[
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`10th Bersaglieri Battalion`,`10° Battaglione Bersaglieri`],name:`10`,designation:`Bersaglieri`,commander:`Adolfato`},
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`11th Bersaglieri Battalion`,`11° Battaglione Bersaglieri`],name:`11`,designation:`Bersaglieri`,commander:`Straziota`},
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Infantry`,`Motorcycle`],team:`Italian`,
                            team:`Italian`,desc:[`Battalion "Romolo Gessi", Italian Africa Police`,`Battaglione "Romolo Gessi", Polizia dell’Africa Italiana`],name:`P`,designation:`Romolo\nGessi`,commander:`Diamante`,icon:``,
                            pos:[946,961],
                            elements:[
                                {level:3,type:`Motorcycle Police`,team:`Italian`,desc:[`Battalion "Romolo Gessi", Italian Africa Police`,`Battaglione "Romolo Gessi", Polizia dell’Africa Italiana`],name:`P`,designation:`Romolo\nGessi`,commander:`Diamante`},
                            ],
                        },
                    ],
                },{
                    name:`Crusader Simplified - 2 Player`,
                    battalions:[[40],[40]],bonus:true,partition:[[0],[1,2]],pick:1,
                    unit:[
                        {
                            level:3,type:[`Tank`,`Recon`,`Tracked`],team:`South African`,
                            desc:[`4th South African Armored Car Battalion`,`4th South African Armoured Car Regiment`],name:`4`,designation:``,commander:`Newton-King`,icon:`7a`,
                            pos:[1932,1386],
                            elements:[
                                {level:3,type:`Armored Car`,team:`South African`,desc:[`4th South African Armored Car Battalion`,`4th South African Armoured Car Regiment`],name:`4`,designation:``,commander:`Newton-King`},
                            ],
                        },
                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:`Royal\nHorse`,commander:`Currie`},
                        {
                            level:3,type:[`Artillery`,`Motorized`],team:`German`,
                            desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:``,commander:`Mayer`,icon:`15pz`,
                            pos:[1393,382],
                            elements:[
                                {level:3,type:`Motorized Artillery`,team:`German`,desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:`Mayer`},
                            ],
                        },
                    ],
                },{
                    name:`Crusader Simplified - 3 Player`,
                    battalions:[[38],[14,28]],bonus:true,partition:[[0],[1],[2]],pick:1,
                    unit:[
                        {
                            level:0,type:[`Tank`],team:`British`,
                            desc:[`7th Armored Division`,`7th Armoured Division`],name:`7`,designation:``,commander:`Gott`,icon:`7a`,
                            pos:[2650,1420],
                            elements:[
                                {
                                    level:1,type:[`Tank`,`Light`],team:`British`,
                                    desc:[`4th Armored Brigade`,`4th Armoured Brigade`],name:`4`,designation:``,commander:`Gatehouse`,icon:`7a`,
                                    pos:[2330,1420],
                                    elements:[
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`3rd Battalion, Royal Tank Regiment`,`3rd Royal Tank Regiment`],name:`3`,designation:`Royal Tank\nRegiment`,commander:`Keller`},
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`5th Battalion, Royal Tank Regiment`,`5th Royal Tank Regiment`],name:`5`,designation:`Royal Tank\nRegiment`,commander:`Carver`},
                                        {level:3,type:`Light Tank`,team:`British`,desc:`8th Irish Hussars`,name:`8`,designation:`Irish\nHussars`,commander:`Drew`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Scots Guards`,name:`2`,designation:`Scots\nGuards`,commander:`Mayfield`},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`2nd Battalion, Royal Horse Artillery`,`2nd Regiment, Royal Horse Artillery`],name:`2`,designation:`Royal\nHorse`,commander:`Aikenhead`},
                                    ],
                                },{
                                    level:1,type:[`Tank`],team:`British`,
                                    desc:[`7th Armored Brigade`,`7th Armoured Brigade`],name:`7`,designation:``,commander:`Davy`,icon:`7a`,
                                    pos:[2435,1420],
                                    elements:[
                                        {level:3,type:`Medium Tank`,team:`British`,desc:[`2nd Battalion, Royal Tank Regiment`,`2nd Royal Tank Regiment`],name:`2`,designation:`Royal Tank\nRegiment`,commander:`Chute`},
                                        {level:3,type:`Medium Tank`,team:`British`,desc:[`6th Battalion, Royal Tank Regiment`,`6th Royal Tank Regiment`],name:`6`,designation:`Royal Tank\nRegiment`,commander:`Lister`},
                                        {level:3,type:`Medium Tank`,team:`British`,desc:`7th Queen's Own Hussars`,name:`7`,designation:`Queen's\nHussars`,commander:`Byass`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Artillery`,`Motorized`],team:`British`,
                                    desc:`7th Support Group`,name:`7`,designation:``,commander:`Campbell`,icon:`7a`,
                                    pos:[2540,1420],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:`de Salis`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Renton`},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`3rd Battalion, Royal Horse Artillery`,`3rd Regiment, Royal Horse Artillery`],name:`3`,designation:`Royal\nHorse`,commander:`Wilson`},
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
                            pos:[2495,1520],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                                    desc:`1st South African Infantry Brigade`,name:`1`,designation:``,commander:`Pienaar`,icon:`1sa`,
                                    pos:[2385,1520],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Duke of Edinburgh's Own Rifles`,name:`1`,designation:`Duke of\nEdinburgh`,commander:`Seneschall`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Royal Natal Carabineers`,name:`1`,designation:`Royal\nNatal`,commander:`Hay`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Transvaal Scottish Regiment`,name:`1`,designation:`Transvaal\nScottish`,commander:`Smitheman`},
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:`3rd South African Field Artillery Regiment`,name:`3`,designation:``,commander:`Whyte`},
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
                            desc:`2nd New Zealand Division`,name:`2`,designation:``,commander:`Freyberg`,icon:`2nz`,
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
                                        {level:3,type:`Motorized Artillery`,team:`New Zealand`,desc:`6th New Zealand Field Regiment`,name:`6`,designation:``,commander:`Weir`},
                                        {level:3,type:`Motorized Anti-Tank`,team:`New Zealand`,desc:`7th New Zealand Anti-Tank Regiment`,name:`7`,designation:``,commander:`Oakes`},
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
                                    pos:[867,265],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Polish`,desc:[`1st Carpathian Rifle Battalion`,`1 batalion Strzelców Karpackich`],name:`1`,designation:``,commander:`Kopeć`},
                                        {level:3,type:`Infantry`,team:`Polish`,desc:[`2nd Carpathian Rifle Battalion`,`2 batalion Strzelców Karpackich`],name:`2`,designation:``,commander:`Brzósko`},
                                        {level:3,type:`Infantry`,team:`Polish`,desc:[`3rd Carpathian Rifle Battalion`,`3 batalion Strzelców Karpackich`],name:`3`,designation:``,commander:`Sokol`},
                                        {level:3,type:`Infantry`,team:`Czechoslovak`,desc:[`11th Czechoslovak Infantry Battalion`,`11. československý pěší prapor — Východní`],name:`11`,designation:``,commander:`Klapálek`},
                                        {level:3,type:`Machine Gun`,team:`Polish`,desc:[`Carpathian "Uhlans" Machine Gun Battalion`,`Pułk Ułanów Karpackich`],name:`U`,designation:``,commander:`Bobiński`},
                                        {level:3,type:`Artillery`,team:`Polish`,desc:[`Carpathian Artillery Regiment`,`Karpacki pułk artylerii`],name:`C`,designation:``,commander:`Gliwicz`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`],team:`British`,
                                    desc:`23rd Infantry Brigade`,name:`23`,designation:``,commander:`Cox`,icon:`70`,
                                    pos:[785,170],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`British`,desc:`1st Battalion, Durham Light Infantry`,name:`1`,designation:`Durham\nLight`,commander:`Arderne`},
                                        {level:3,type:`Infantry`,team:`British`,desc:`1st Battalion, Essex Regiment`,name:`1`,designation:`Essex`,commander:`Nichols`},
                                        {level:3,type:`Infantry`,team:`British`,desc:`4th Battalion, Border Regiment`,name:`4`,designation:`Border`,commander:`Tomlinson`},
                                        {level:3,type:`Artillery`,team:`British`,desc:[`104th Battalion, Royal Horse Artillery`,`104th Regiment, Royal Horse Artillery`],name:`104`,designation:`Royal\nHorse`,commander:`Matthew`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`],team:`Australian`,
                                    desc:[`13th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/13th Australian Infantry Battalion`],name:`2/13`,designation:``,commander:`Burrows`,icon:`9a`,
                                    pos:[965,250],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Australian`,desc:[`13th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/13th Australian Infantry Battalion`],name:`2/13`,designation:``,commander:`Burrows`},
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Infantry`],team:`German`,
                            desc:[`300th Special Purpose Oasis Battalion`,`Oasen Bataillon z.b.V. 300`],name:`300`,designation:`Oasis`,commander:`Ennecerus`,icon:``,
                            pos:[2405,1069],
                            elements:[
                                {level:3,type:`Oasis Infantry`,team:`German`,desc:[`300th Special Purpose Oasis Battalion`,`Oasen Bataillon z.b.V. 300`],name:`300`,designation:`Oasis`,commander:`Ennecerus`},
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
                                        {level:3,type:`Medium Tank`,team:`German`,desc:[`2nd Battalion, 8th Panzer Regiment`,`II./Panzer-Regiment 8`],name:`2`,designation:`8`,commander:`Wahl`},
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
                                                {level:3,type:`Motorized Heavy Machine Gun`,team:`German`,desc:[`2nd Machine Gun Battalion`,`2. Maschinengewehr-Bataillon`],name:`2`,designation:``,commander:`Finke`},
                                                {level:3,type:`Motorcycle Infantry`,team:`German`,desc:[`15th Motorcycle Battalion`,`Kradschützen-Bataillon 15`],name:`15`,designation:``,commander:`Ehle`}, 
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Artillery`,`Motorized`],team:`German`,
                                    desc:[`33rd Artillery Regiment`,`Artillerie-Regiment (mot.) 33`],name:`33`,designation:``,commander:`Crasemann`,icon:`15pz`,
                                    pos:[1393,382],
                                    elements:[
                                        {level:3,type:`Motorized Artillery`,team:`German`,desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:`Mayer`},
                                        {level:3,type:`Motorized Artillery`,team:`German`,desc:[`2nd Battalion, 33rd Artillery Regiment`,`II./Artillerie-Regiment (mot.) 33`],name:`2`,designation:`33`,commander:`Mesmer`},
                                        {level:3,type:`Motorized Artillery`,team:`German`,desc:[`3rd Battalion, 33rd Artillery Regiment`,`III./Artillerie-Regiment (mot.) 33`],name:`3`,designation:`33`,commander:`Bickel`},
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
                                    pos:[1035,320],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`German`,desc:[`2nd Battalion, 115th Rifle Regiment`,`II./Schützen-Regiment 115`],name:`2`,designation:`115`,commander:`Göttman`},
                                    ],
                                },
                            ],
                        },{
                            level:1,type:[`Infantry`,`Tank`],team:`Italian`,
                            desc:[`Army Corps Reconnaissance Group`,`Raggruppamento Esplorante del XXI Corpo d'Armata`],name:`RECA`,designation:`XXI`,commander:`de Meo`,icon:``,
                            pos:[1386,1151],
                            elements:[
                                {level:3,type:`Security Tank`,team:`Italian`,desc:[`52nd Security Tank Battalion`,`LII battaglione carri M`],name:`52`,designation:`Security`,commander:`Mayneri`},
                                {level:3,type:`Motorcycle Police`,team:`Italian`,desc:[`Battalion "Romolo Gessi", Italian Africa Police`,`Battaglione "Romolo Gessi", Polizia dell’Africa Italiana`],name:`P`,designation:`Romolo\nGessi`,commander:`Diamante`},
                                {level:3,type:`Motorized Group Artillery`,team:`Italian`,desc:[`Flying Batteries Group`,`Raggruppamento Batterie Volanti`],name:`BV`,designation:`Volanti`,commander:`Nicolardi`},
                            ],
                        },{
                            level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                            desc:[`Infantry Regiment "Giovani Fascisti"`,`Reggimento di fanteria "Giovani Fascisti"`],name:`GF`,designation:``,commander:`Nannini`,icon:``,
                            pos:[1222,959],
                            elements:[
                                {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`1st Battalion, Infantry Regiment "Giovani Fascisti"`,`I battaglione fucilieri, Reggimento di fanteria "Giovani Fascisti"`],name:`1`,designation:`Giovani\nFascisti`,commander:`Balisti`},
                                {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`2nd Battalion, Infantry Regiment "Giovani Fascisti"`,`II battaglione fucilieri, Reggimento di fanteria "Giovani Fascisti"`],name:`2`,designation:`Giovani\nFascisti`,commander:`Benedetti`},
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`55th Infantry Division "Savona"`,`55ª Divisione di fanteria "Savona"`],name:`55`,designation:`Savona`,commander:`de Giorgis`,icon:`savona`,
                            pos:[2202,1078],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`15th Infantry Regiment`,`15° Reggimento di fanteria "Savona"`],name:`15`,designation:`Savona`,commander:`Pedrazzoli`,icon:`savona`,
                                    pos:[2014,1167],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 15th Infantry Regiment`,`I battaglione fucilieri, 15° Reggimento di fanteria "Savona"`],name:`1`,designation:`15`,commander:`Grimaldi`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`3rd Battalion, 15th Infantry Regiment`,`III battaglione fucilieri, 15° Reggimento di fanteria "Savona"`],name:`3`,designation:`15`,commander:`Ugolini`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`16th Infantry Regiment`,`16° Reggimento di fanteria "Savona"`],name:`16`,designation:`Savona`,commander:`Garrone`,icon:`savona`,
                                    pos:[2290,1145],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 16th Infantry Regiment`,`I battaglione fucilieri, 16° Reggimento di fanteria "Savona"`],name:`1`,designation:`16`,commander:`Pelosi`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`3rd Battalion, 16th Infantry Regiment`,`III battaglione fucilieri, 16° Reggimento di fanteria "Savona"`],name:`3`,designation:`16`,commander:`Rossi`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`Task Force di Bardi`,`Raggruppamento di Bardi`],name:`TF`,designation:``,commander:`di Bardi`,icon:`savona`,
                                    pos:[2254,671],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 15th Infantry Regiment`,`II battaglione fucilieri, 15° Reggimento di fanteria "Savona"`],name:`2`,designation:`15`,commander:`Russo`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 16th Infantry Regiment`,`II battaglione fucilieri, 16° Reggimento di fanteria "Savona"`],name:`2`,designation:`16`,commander:`Aveta`},
                                    ],
                                },{
                                    level:2,type:[`Light Artillery`],team:`Italian`,
                                    desc:[`12th Artillery Regiment`,`12° Reggimento artiglieria "Savona"`],name:`12`,designation:`Savona`,commander:`Sabini`,icon:`savona`,
                                    pos:[2245,937],
                                    elements:[
                                        {level:3,type:`Light Artillery`,team:`Italian`,desc:[`2nd Group, 12th Artillery Regiment`,`II gruppo, 12° Reggimento artiglieria "Savona"`],name:`2`,designation:`12`,commander:`Coronati`},
                                        {level:3,type:`Light Artillery`,team:`Italian`,desc:[`3rd Group, 12th Artillery Regiment`,`III gruppo, 12° Reggimento artiglieria "Savona"`],name:`3`,designation:`12`,commander:`Aliberti`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Machine Gun`],team:`Italian`,
                                    desc:[`155th Machine Gun Battalion`,`155º Battaglione mitraglieri`],name:`155`,designation:``,commander:`Grande`,icon:`savona`,
                                    pos:[2150,1190],
                                    elements:[
                                        {level:3,type:`Machine Gun`,team:`Italian`,desc:[`155th Machine Gun Battalion`,`155º Battaglione mitraglieri`],name:`155`,designation:``,commander:`Grande`},
                                    ],
                                },{
                                    level:3,type:[`Engineer`],team:`Italian`,
                                    desc:[`55th Mixed Engineer Battalion`,`LV battaglione misto genio`],name:`55`,designation:``,commander:`Vescovini`,icon:`savona`,
                                    pos:[2104,1017],
                                    elements:[
                                        {level:3,type:`Engineer`,team:`Italian`,desc:[`55th Mixed Engineer Battalion`,`LV battaglione misto genio`],name:`55`,designation:``,commander:`Vescovini`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`102nd Infantry Division "Trento"`,`102ª Divisione di fanteria motorizzata "Trento"`],name:`102`,designation:`Trento`,commander:`Stampioni`,icon:`trento`,
                            pos:[530,320],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`61st Infantry Regiment`,`61° Reggimento di fanteria motorizzata "Sicilia"`],name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[655,125],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 61st Infantry Regiment`,`I battaglione fucilieri, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 61st Infantry Regiment`,`II battaglione fucilieri, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`},
                                        {level:3,type:`Mixed Support`,team:`Italian`,desc:[`3rd Mixed Support Battalion, 61st Motorized Infantry Regiment`,`III battaglione armi d'accompagnamento, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`M`,designation:`61`,commander:`Rabezzana`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`62nd Infantry Regiment`,`62° Reggimento di fanteria motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[730,300],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 62nd Infantry Regiment`,`I battaglione fucilieri, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 62nd Infantry Regiment`,`II battaglione fucilieri, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`},
                                        {level:3,type:`Mixed Support`,team:`Italian`,desc:[`3rd Mixed Support Battalion, 62nd Motorized Infantry Regiment`,`III battaglione armi d'accompagnamento, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`M`,designation:`62`,commander:`Gennaro`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`7th Bersaglieri Regiment`,`7° Reggimento Bersaglieri`],name:`7`,designation:`Bersaglieri`,commander:`Scirocco`,icon:`trento`,
                                    pos:[480,441],
                                    elements:[
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`10th Bersaglieri Battalion`,`10° Battaglione Bersaglieri`],name:`10`,designation:`Bersaglieri`,commander:`Adolfato`},
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`11th Bersaglieri Battalion`,`11° Battaglione Bersaglieri`],name:`11`,designation:`Bersaglieri`,commander:`Straziota`},
                                    ],
                                },{
                                    level:2,type:[`Light Artillery`],team:`Italian`,
                                    desc:[`46th Artillery Regiment`,`46° Reggimento artiglieria "Trento"`],name:`46`,designation:`Trento`,commander:`Grati`,icon:`savona`,
                                    pos:[581,198],
                                    elements:[
                                        {level:3,type:`Light Artillery`,team:`Italian`,desc:[`1st Group, 46th Artillery Regiment`,`I gruppo, 46° Reggimento artiglieria "Trento"`],name:`1`,designation:`46`,commander:`Giannimi`},
                                        {level:3,type:`Light Artillery`,team:`Italian`,desc:[`3rd Group, 46th Artillery Regiment`,`III gruppo, 46° Reggimento artiglieria "Trento"`],name:`3`,designation:`46`,commander:`Salvo`},
                                        {level:3,type:`Light Artillery`,team:`Italian`,desc:[`4th Group, 46th Artillery Regiment`,`IV gruppo, 46° Reggimento artiglieria "Trento"`],name:`4`,designation:`46`,commander:`Gavazzi`},
                                    ],
                                },{
                                    level:3,type:[`Engineer`],team:`Italian`,
                                    desc:[`51st Mixed Engineer Battalion`,`LI battaglione misto genio`],name:`51`,designation:``,commander:`Baruffini`,icon:`trento`,
                                    pos:[323,47],
                                    elements:[
                                        {level:3,type:`Engineer`,team:`Italian`,desc:[`51st Mixed Engineer Battalion`,`LI battaglione misto genio`],name:`51`,designation:``,commander:`Baruffini`},
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Engineer`],team:`Italian`,
                            desc:[`60th Mixed Engineer Battalion`,`LX battaglione misto genio`],name:`60`,designation:``,commander:`Giuliani`,icon:`sabratha`,
                            pos:[932,544],
                            elements:[
                                {level:3,type:`Engineer`,team:`Italian`,desc:[`60th Mixed Engineer Battalion`,`LX battaglione misto genio`],name:`60`,designation:``,commander:`Giuliani`},
                            ],
                        },
                    ],
                },{
                    name:`Operation Crusader - 2 Player`,
                    battalions:[[50],[50]],bonus:true,partition:[[0],[1,2]],pick:0,
                    unit:[
                        {
                            level:1,type:[`Infantry`,`Motorized`],team:`British`,
                            desc:`22nd Guards Brigade`,name:`22`,designation:`Guards`,commander:`Marriott`,icon:``,
                            pos:[2937,1420],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`British`,desc:`3rd Battalion, Coldstream Guards`,name:`3`,designation:`Coldstream\nGuards`,commander:`Moubray`},
                                {level:3,type:`Motorized Infantry`,team:`British`,desc:`9th Battalion, Rifle Brigade (Tower Hamlets Rifles)`,name:`9`,designation:`Rifle\nBrigade`,commander:`Purdon`},
                            ],
                        },
                    ],
                },{
                    name:`Operation Crusader - 3 Player`,
                    battalions:[[48],[16,36]],bonus:true,partition:[[0],[1],[2]],pick:0,
                    unit:[
                        {
                            level:0,type:[`Tank`],team:`British`,
                            desc:[`7th Armored Division`,`7th Armoured Division`],name:`7`,designation:``,commander:`Gott`,icon:`7a`,
                            pos:[2650,1420],
                            elements:[
                                {
                                    level:1,type:[`Tank`,`Light`],team:`British`,
                                    desc:[`4th Armored Brigade`,`4th Armoured Brigade`],name:`4`,designation:``,commander:`Gatehouse`,icon:`7a`,
                                    pos:[2330,1420],
                                    elements:[
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`3rd Battalion, Royal Tank Regiment`,`3rd Royal Tank Regiment`],name:`3`,designation:`Royal Tank\nRegiment`,commander:`Keller`},
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`5th Battalion, Royal Tank Regiment`,`5th Royal Tank Regiment`],name:`5`,designation:`Royal Tank\nRegiment`,commander:`Carver`},
                                        {level:3,type:`Light Tank`,team:`British`,desc:`8th Irish Hussars`,name:`8`,designation:`Irish\nHussars`,commander:`Drew`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Scots Guards`,name:`2`,designation:`Scots\nGuards`,commander:`Mayfield`},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`2nd Battalion, Royal Horse Artillery`,`2nd Regiment, Royal Horse Artillery`],name:`2`,designation:`Royal\nHorse`,commander:`Aikenhead`},
                                    ],
                                },{
                                    level:1,type:[`Tank`],team:`British`,
                                    desc:[`7th Armored Brigade`,`7th Armoured Brigade`],name:`7`,designation:``,commander:`Davy`,icon:`7a`,
                                    pos:[2435,1420],
                                    elements:[
                                        {level:3,type:`Medium Tank`,team:`British`,desc:[`2nd Battalion, Royal Tank Regiment`,`2nd Royal Tank Regiment`],name:`2`,designation:`Royal Tank\nRegiment`,commander:`Chute`},
                                        {level:3,type:`Medium Tank`,team:`British`,desc:[`6th Battalion, Royal Tank Regiment`,`6th Royal Tank Regiment`],name:`6`,designation:`Royal Tank\nRegiment`,commander:`Lister`},
                                        {level:3,type:`Medium Tank`,team:`British`,desc:`7th Queen's Own Hussars`,name:`7`,designation:`Queen's\nHussars`,commander:`Byass`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Artillery`,`Motorized`],team:`British`,
                                    desc:`7th Support Group`,name:`7`,designation:``,commander:`Campbell`,icon:`7a`,
                                    pos:[2540,1420],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:`de Salis`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:`Renton`},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`3rd Battalion, Royal Horse Artillery`,`3rd Regiment, Royal Horse Artillery`],name:`3`,designation:`Royal\nHorse`,commander:`Wilson`},
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
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:`3rd South African Field Artillery Regiment`,name:`3`,designation:``,commander:`Whyte`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                                    desc:`5th South African Infantry Brigade`,name:`5`,designation:``,commander:`Armstrong`,icon:`1sa`,
                                    pos:[2490,1520],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, South African Irish Regiment`,name:`1`,designation:`Irish`,commander:`Cochran`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`2nd Battalion, General Botha Regiment`,name:`2`,designation:`Botha`,commander:`Mason`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`3rd Battalion, Transvaal Scottish Regiment`,name:`3`,designation:`Transvaal\nScottish`,commander:`Rosser`},
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:`4th South African Field Artillery Regiment`,name:`4`,designation:``,commander:`Harpur`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                            desc:`2nd New Zealand Division`,name:`2`,designation:``,commander:`Freyberg`,icon:`2nz`,
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
                                    level:1,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                                    desc:`6th New Zealand Infantry Brigade`,name:`6`,designation:``,commander:`Barrowclough`,icon:`2nz`,
                                    pos:[2510,1315],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`24th New Zealand Infantry Battalion`,name:`24`,designation:``,commander:`Shuttleworth`},
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`25th New Zealand Infantry Battalion`,name:`25`,designation:``,commander:`Burton`},
                                        {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`26th New Zealand Infantry Battalion`,name:`26`,designation:``,commander:`Satterthwaite`},
                                    ],
                                },{
                                    level:1,type:[`Artillery`,`Motorized`],team:`New Zealand`,
                                    desc:`2nd New Zealand Field Brigade`,name:`2`,designation:``,commander:`Miles`,icon:`2nz`,
                                    pos:[2620,1210],
                                    elements:[
                                        {level:3,type:`Motorized Artillery`,team:`New Zealand`,desc:`4th New Zealand Field Regiment`,name:`4`,designation:``,commander:`Duff`},
                                        {level:3,type:`Motorized Artillery`,team:`New Zealand`,desc:`5th New Zealand Field Regiment`,name:`5`,designation:``,commander:`Fraser`},
                                        {level:3,type:`Motorized Artillery`,team:`New Zealand`,desc:`6th New Zealand Field Regiment`,name:`6`,designation:``,commander:`Weir`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,"Machine Gun"],team:`New Zealand`,
                                    desc:`27th New Zealand Machine Gun Battalion`,name:`27`,designation:``,commander:`Gwilliam`,icon:`2nz`,
                                    pos:[2610,1115],
                                    elements:[
                                        {level:3,type:`Motorized Machine Gun`,team:`New Zealand`,desc:`27th New Zealand Machine Gun Battalion`,name:`27`,designation:``,commander:`Gwilliam`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`],team:`Māori`,
                                    desc:`28th "Māori" New Zealand Infantry Battalion`,name:`28`,designation:``,commander:`Dittmer`,icon:`2nz`,
                                    pos:[2610,1305],
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
                                    level:1,type:[`Infantry`],team:`British`,
                                    desc:`14th Infantry Brigade`,name:`14`,designation:``,commander:`Chappell`,icon:`70`,
                                    pos:[965,250],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`British`,desc:`1st Battalion, Bedfordshire and Hertfordshire Regiment`,name:`1`,designation:`Bedford &\nHertford`,commander:`Eason`},
                                        {level:3,type:`Infantry`,team:`British`,desc:`2nd Battalion, Black Watch`,name:`2`,designation:`Black\nWatch`,commander:`Rusk`},
                                        {level:3,type:`Infantry`,team:`British`,desc:`2nd Battalion, York and Lancaster Regiment`,name:`2`,designation:`York &\nLancaster`,commander:`Gilroy`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`],team:`British`,
                                    desc:`23rd Infantry Brigade`,name:`23`,designation:``,commander:`Cox`,icon:`70`,
                                    pos:[850,265],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`British`,desc:`1st Battalion, Durham Light Infantry`,name:`1`,designation:`Durham\nLight`,commander:`Arderne`},
                                        {level:3,type:`Infantry`,team:`British`,desc:`1st Battalion, Essex Regiment`,name:`1`,designation:`Essex`,commander:`Nichols`},
                                        {level:3,type:`Infantry`,team:`British`,desc:`4th Battalion, Border Regiment`,name:`4`,designation:`Border`,commander:`Tomlinson`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`],team:`Polish`,
                                    desc:[`Polish Independent Carpathian Brigade`,`Samodzielna Brygada Strzelców Karpackich`],name:`C`,designation:``,commander:`Kopański`,icon:`70`,
                                    pos:[765,150],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Polish`,desc:[`1st Carpathian Rifle Battalion`,`1 batalion Strzelców Karpackich`],name:`1`,designation:``,commander:`Kopeć`},
                                        {level:3,type:`Infantry`,team:`Polish`,desc:[`2nd Carpathian Rifle Battalion`,`2 batalion Strzelców Karpackich`],name:`2`,designation:``,commander:`Brzósko`},
                                        {level:3,type:`Infantry`,team:`Polish`,desc:[`3rd Carpathian Rifle Battalion`,`3 batalion Strzelców Karpackich`],name:`3`,designation:``,commander:`Sokol`},
                                        {level:3,type:`Infantry`,team:`Czechoslovak`,desc:[`11th Czechoslovak Infantry Battalion`,`11. československý pěší prapor — Východní`],name:`11`,designation:``,commander:`Klapálek`},
                                        {level:3,type:`Infantry`,team:`Australian`,desc:[`13th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/13th Australian Infantry Battalion`],name:`2/13`,designation:``,commander:`Burrows`},
                                        {level:3,type:`Machine Gun`,team:`Polish`,desc:[`Carpathian "Uhlans" Machine Gun Battalion`,`Pułk Ułanów Karpackich`],name:`U`,designation:``,commander:`Bobiński`},
                                        {level:3,type:`Artillery`,team:`Polish`,desc:[`Carpathian Artillery Regiment`,`Karpacki pułk artylerii`],name:`C`,designation:``,commander:`Gliwicz`},
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Infantry`],team:`German`,
                            desc:[`300th Special Purpose Oasis Battalion`,`Oasen Bataillon z.b.V. 300`],name:`300`,designation:`Oasis`,commander:`Ennecerus`,icon:``,
                            pos:[2405,1069],
                            elements:[
                                {level:3,type:`Oasis Infantry`,team:`German`,desc:[`300th Special Purpose Oasis Battalion`,`Oasen Bataillon z.b.V. 300`],name:`300`,designation:`Oasis`,commander:`Ennecerus`},
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
                                        {level:3,type:`Medium Tank`,team:`German`,desc:[`2nd Battalion, 8th Panzer Regiment`,`II./Panzer-Regiment 8`],name:`2`,designation:`8`,commander:`Wahl`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`15th Rifle Brigade`,`Schützen-Brigade 15`],name:`15`,designation:``,commander:`Menny`,icon:`15pz`,
                                    pos:[1584,520],
                                    elements:[
                                        {
                                            level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                            desc:[`115th Rifle Regiment`,`Schützen-Regiment 115`],name:`115`,designation:``,commander:`Zincke`,icon:`15pz`,
                                            pos:[1634,628],
                                            elements:[
                                                {level:3,type:`Motorized Infantry`,team:`German`,desc:[`1st Battalion, 115th Rifle Regiment`,`I./Schützen-Regiment 115`],name:`1`,designation:`115`,commander:`von Grolmann`},
                                                {level:3,type:`Motorized Heavy Machine Gun`,team:`German`,desc:[`2nd Machine Gun Battalion`,`2. Maschinengewehr-Bataillon`],name:`2`,designation:``,commander:`Finke`},
                                            ],
                                        },{
                                            level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                            desc:[`200th Special Purpose Regimental Staff`,`Regimentsstab z.b.V. 200`],name:`200`,designation:`z.b.V.`,commander:`Geißler`,icon:`15pz`,
                                            pos:[1533,599],
                                            elements:[
                                                {level:3,type:`Motorcycle Infantry`,team:`German`,desc:[`15th Motorcycle Battalion`,`Kradschützen-Bataillon 15`],name:`15`,designation:``,commander:`Ehle`}, 
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Artillery`,`Motorized`],team:`German`,
                                    desc:[`33rd Artillery Regiment`,`Artillerie-Regiment (mot.) 33`],name:`33`,designation:``,commander:`Crasemann`,icon:`15pz`,
                                    pos:[1393,382],
                                    elements:[
                                        {level:3,type:`Motorized Artillery`,team:`German`,desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:`Mayer`},
                                        {level:3,type:`Motorized Artillery`,team:`German`,desc:[`2nd Battalion, 33rd Artillery Regiment`,`II./Artillerie-Regiment (mot.) 33`],name:`2`,designation:`33`,commander:`Mesmer`},
                                        {level:3,type:`Motorized Artillery`,team:`German`,desc:[`3rd Battalion, 33rd Artillery Regiment`,`III./Artillerie-Regiment (mot.) 33`],name:`3`,designation:`33`,commander:`Bickel`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`German`,
                                    desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`Héraucourt`,icon:`15pz`,
                                    pos:[1737,1251],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`German`,desc:[`33rd Reconnaissance Battalion`,`Aufklärungs-Abteilung 33`],name:`33`,designation:``,commander:`Héraucourt`}, 
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`German`,
                            desc:[`Special Purpose Divisional Command "Afrika"`,`Divisionskommando z.b.V. Afrika`],name:`A`,designation:`z.b.V.`,commander:`Sümmermann`,icon:`90l`,
                            pos:[1072,461],
                            elements:[
                                {
                                    level:2,type:[`Infantry`,`Semi-Motorized`],team:`German`,
                                    desc:[`361st "Afrika" Reinforced Infantry Regiment`,`Infanterie-Regiment Afrika 361`],name:`361`,designation:`Afrika`,commander:`Grund`,icon:`90l`,
                                    pos:[1141,566],
                                    elements:[
                                        {level:3,type:`Semi-Motorized Infantry`,team:`German`,desc:[`1st Battalion, 361st "Afrika" Reinforced Infantry Regiment`,`I./Infanterie-Regiment Afrika 361`],name:`1`,designation:`361`,commander:`Harder`},
                                        {level:3,type:`Semi-Motorized Infantry`,team:`German`,desc:[`2nd Battalion, 361st "Afrika" Reinforced Infantry Regiment`,`II./Infanterie-Regiment Afrika 361`],name:`2`,designation:`361`,commander:`Ryll`},
                                        {level:3,type:`Semi-Motorized Artillery`,team:`German`,desc:[`361st "Afrika" Artillery Battalion`,`Afrika-Artillerieabteilung 361`],name:`361`,designation:`Afrika`,commander:`Schilling`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`],team:`German`,
                                    desc:[`3rd Battalion, 255th Infantry Regiment`,`III./Infanterie-Regiment 255`],name:`3`,designation:`255`,commander:`von Barby`,icon:`90l`,
                                    pos:[850,375],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`German`,desc:[`3rd Battalion, 255th Infantry Regiment`,`III./Infanterie-Regiment 255`],name:`3`,designation:`255`,commander:`von Barby`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`],team:`German`,
                                    desc:[`3rd Battalion, 347th Infantry Regiment`,`III./Infanterie-Regiment 347`],name:`3`,designation:`347`,commander:`Panzenhagen`,icon:`90l`,
                                    pos:[950,380],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`German`,desc:[`3rd Battalion, 347th Infantry Regiment`,`III./Infanterie-Regiment 347`],name:`3`,designation:`347`,commander:`Panzenhagen`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`2nd Battalion, 115th Rifle Regiment`,`II./Schützen-Regiment 115`],name:`2`,designation:`115`,commander:`Göttman`,icon:`15pz`,
                                    pos:[1035,320],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`German`,desc:[`2nd Battalion, 115th Rifle Regiment`,`II./Schützen-Regiment 115`],name:`2`,designation:`115`,commander:`Göttman`},
                                    ],
                                },
                            ],
                        },{
                            level:2,type:[`Artillery`],team:`Italian`,
                            desc:[`8th Army Artillery Group`,`8° Reggimento artiglieria d'Armata`],name:`8`,designation:`Army`,commander:`Bersano`,icon:``,
                            pos:[827,474],
                            elements:[
                                {level:3,type:`Artillery`,team:`Italian`,desc:[`33rd Group, 8th Army Artillery Group`,`XXXIII gruppo, 8° Reggimento artiglieria d'Armata`],name:`33`,designation:``,commander:`Perrod`},
                                {level:3,type:`Light Artillery`,team:`Italian`,desc:[`52nd Group, 8th Army Artillery Group`,`LII gruppo, 8° Reggimento artiglieria d'Armata`],name:`52`,designation:``,commander:`Salvetti`},
                                {level:3,type:`Artillery`,team:`Italian`,desc:[`131st Group, 8th Army Artillery Group`,`CXXXI gruppo, 8° Reggimento artiglieria d'Armata`],name:`131`,designation:``,commander:`Montella`},
                                {level:3,type:`Artillery`,team:`Italian`,desc:[`147th Group, 8th Army Artillery Group`,`CXLVII gruppo, 8° Reggimento artiglieria d'Armata`],name:`147`,designation:``,commander:`Pacinotti`},
                            ],
                        },{
                            level:1,type:[`Infantry`,`Tank`],team:`Italian`,
                            desc:[`Maneuver Army Corps Reconnaissance Group`,`Raggruppamento Esplorante del Corpo d'Armata di Manovra`],name:`RECAM`,designation:``,commander:`de Meo`,icon:``,
                            pos:[1386,1151],
                            elements:[
                                {level:3,type:`Security Tank`,team:`Italian`,desc:[`52nd Security Tank Battalion`,`LII battaglione carri M`],name:`52`,designation:`Security`,commander:`Mayneri`},
                                {level:3,type:`Motorcycle Police`,team:`Italian`,desc:[`Battalion "Romolo Gessi", Italian Africa Police`,`Battaglione "Romolo Gessi", Polizia dell’Africa Italiana`],name:`P`,designation:`Romolo\nGessi`,commander:`Diamante`},
                                {level:3,type:`Motorized Group Artillery`,team:`Italian`,desc:[`Flying Batteries Group`,`Raggruppamento Batterie Volanti`],name:`BV`,designation:`Volanti`,commander:`Nicolardi`},
                            ],
                        },{
                            level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                            desc:[`Infantry Regiment "Giovani Fascisti"`,`Reggimento di fanteria "Giovani Fascisti"`],name:`GF`,designation:``,commander:`Nannini`,icon:``,
                            pos:[1222,959],
                            elements:[
                                {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`1st Battalion, Infantry Regiment "Giovani Fascisti"`,`I battaglione fucilieri, Reggimento di fanteria "Giovani Fascisti"`],name:`1`,designation:`Giovani\nFascisti`,commander:`Balisti`},
                                {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`2nd Battalion, Infantry Regiment "Giovani Fascisti"`,`II battaglione fucilieri, Reggimento di fanteria "Giovani Fascisti"`],name:`2`,designation:`Giovani\nFascisti`,commander:`Benedetti`},
                            ],
                        },{
                            level:0,type:[`Infantry`,"Motorized"],team:`Italian`,
                            desc:[`101st Motorized Infantry Division "Trieste"`,`101ª Divisione di fanteria motorizzata "Trieste"`],name:`101`,designation:`Trieste`,commander:`Piazzoni`,icon:`trieste`,
                            pos:[660,1038],
                            elements:[
                                {
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`65th Motorized Infantry Regiment`,`65° Reggimento di fanteria motorizzata "Trieste"`],name:`65`,designation:`Trieste`,commander:`Bonis`,icon:`trieste`,
                                    pos:[946,961],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`Italian`,desc:[`1st Battalion, 65th Motorized Infantry Regiment`,`I battaglione fucilieri, 65° Reggimento di fanteria motorizzata "Trieste"`],name:`1`,designation:`65`,commander:`Vaiarini`},
                                        {level:3,type:`Motorized Infantry`,team:`Italian`,desc:[`2nd Battalion, 65th Motorized Infantry Regiment`,`II battaglione fucilieri, 65° Reggimento di fanteria motorizzata "Trieste"`],name:`2`,designation:`65`,commander:`Quirico`},
                                        {level:3,type:`Motorized Mixed Support`,team:`Italian`,desc:[`3rd Mixed Support Battalion, 65th Motorized Infantry Regiment`,`III battaglione armi d'accompagnamento, 65° Reggimento di fanteria motorizzata "Trieste`],name:`M`,designation:`65`,commander:`Bernini`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`66th Motorized Infantry Regiment`,`66° Reggimento di fanteria motorizzata "Trieste"`],name:`66`,designation:`Trieste`,commander:`Fabozzi`,icon:`trieste`,
                                    pos:[191,795],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`Italian`,desc:[`1st Battalion, 66th Motorized Infantry Regiment`,`I battaglione fucilieri, 66° Reggimento di fanteria motorizzata "Trieste"`],name:`1`,designation:`66`,commander:`Chiarusso`},
                                        {level:3,type:`Motorized Infantry`,team:`Italian`,desc:[`2nd Battalion, 66th Motorized Infantry Regiment`,`II battaglione fucilieri, 66° Reggimento di fanteria motorizzata "Trieste"`],name:`2`,designation:`66`,commander:`Zanetti`},
                                        {level:3,type:`Motorized Mixed Support`,team:`Italian`,desc:[`3rd Mixed Support Battalion, 66th Motorized Infantry Regiment`,`III battaglione armi d'accompagnamento, 66° Reggimento di fanteria motorizzata "Trieste`],name:`M`,designation:`66`,commander:`Manieri`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorcycle`],team:`Italian`,
                                    desc:[`9th Bersaglieri Regiment`,`9° Reggimento Bersaglieri`],name:`9`,designation:`Bersaglieri`,commander:`Bordoni`,icon:`trieste`,
                                    pos:[993,728],
                                    elements:[
                                        {level:3,type:`Motorcycle Bersaglieri`,team:`Italian`,desc:[`28th Bersaglieri Battalion`,`28° Battaglione Bersaglieri`],name:`28`,designation:`Bersaglieri`,commander:`Blandi`},
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`30th Bersaglieri Battalion`,`30° Battaglione Bersaglieri`],name:`30`,designation:`Bersaglieri`,commander:`Borghi`},
                                        {level:3,type:`Motorized Machine Gun Bersaglieri`,team:`Italian`,desc:[`32nd Bersaglieri Battalion`,`32° Battaglione Bersaglieri`],name:`32`,designation:`Bersaglieri`,commander:`Benedictis`},
                                        {level:3,type:`Motorized Bersaglieri Mixed Support`,team:`Italian`,desc:[`40th Bersaglieri Battalion`,`40° Battaglione Bersaglieri`],name:`40`,designation:`Bersaglieri`,commander:`Togna`},
                                    ],
                                },{
                                    level:3,type:[`Artillery`,`Motorized`],team:`Italian`,
                                    desc:[`Naval Artillery Militia Battalion "Maneuver Army Corps"`,`Milizia Marittima di artiglieria battaglione "Corpo d'Armata di Manovra"`],name:`MILMART`,designation:``,commander:`Priore`,icon:`trieste`,
                                    pos:[1062,1469],
                                    elements:[
                                        {level:3,type:`Motorized Artillery`,team:`Italian`,desc:[`Naval Artillery Militia Battalion "Maneuver Army Corps"`,`Milizia Marittima di artiglieria battaglione "Corpo d'Armata di Manovra"`],name:`MILMART`,designation:``,commander:`Priore`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`55th Infantry Division "Savona"`,`55ª Divisione di fanteria "Savona"`],name:`55`,designation:`Savona`,commander:`de Giorgis`,icon:`savona`,
                            pos:[2142,1038],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`15th Infantry Regiment`,`15° Reggimento di fanteria "Savona"`],name:`15`,designation:`Savona`,commander:`Pedrazzoli`,icon:`savona`,
                                    pos:[2014,1167],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 15th Infantry Regiment`,`I battaglione fucilieri, 15° Reggimento di fanteria "Savona"`],name:`1`,designation:`15`,commander:`Grimaldi`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`3rd Battalion, 15th Infantry Regiment`,`III battaglione fucilieri, 15° Reggimento di fanteria "Savona"`],name:`3`,designation:`15`,commander:`Ugolini`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`16th Infantry Regiment`,`16° Reggimento di fanteria "Savona"`],name:`16`,designation:`Savona`,commander:`Garrone`,icon:`savona`,
                                    pos:[2290,1145],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 16th Infantry Regiment`,`I battaglione fucilieri, 16° Reggimento di fanteria "Savona"`],name:`1`,designation:`16`,commander:`Pelosi`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`3rd Battalion, 16th Infantry Regiment`,`III battaglione fucilieri, 16° Reggimento di fanteria "Savona"`],name:`3`,designation:`16`,commander:`Rossi`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`Task Force di Bardi`,`Raggruppamento di Bardi`],name:`TF`,designation:``,commander:`di Bardi`,icon:`savona`,
                                    pos:[2254,671],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 15th Infantry Regiment`,`II battaglione fucilieri, 15° Reggimento di fanteria "Savona"`],name:`2`,designation:`15`,commander:`Russo`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 16th Infantry Regiment`,`II battaglione fucilieri, 16° Reggimento di fanteria "Savona"`],name:`2`,designation:`16`,commander:`Aveta`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Machine Gun`],team:`Italian`,
                                    desc:[`4th Machine Gun Battalion "Genova Cavalleria"`,`IV Gruppo squadroni mitraglieri "Genova Cavalleria"`],name:`4`,designation:`Genova`,commander:`Pierucci`,icon:`savona`,
                                    pos:[2358,967],
                                    elements:[
                                        {level:3,type:`Machine Gun`,team:`Italian`,desc:[`4th Machine Gun Battalion "Genova Cavalleria"`,`IV Gruppo squadroni mitraglieri "Genova Cavalleria"`],name:`4`,designation:`Genova`,commander:`Pierucci`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Machine Gun`],team:`Italian`,
                                    desc:[`155th Machine Gun Battalion`,`155º Battaglione mitraglieri`],name:`155`,designation:``,commander:`Grande`,icon:`savona`,
                                    pos:[2150,1190],
                                    elements:[
                                        {level:3,type:`Machine Gun`,team:`Italian`,desc:[`155th Machine Gun Battalion`,`155º Battaglione mitraglieri`],name:`155`,designation:``,commander:`Grande`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`102nd Infantry Division "Trento"`,`102ª Divisione di fanteria motorizzata "Trento"`],name:`102`,designation:`Trento`,commander:`Stampioni`,icon:`trento`,
                            pos:[581,198],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`61st Infantry Regiment`,`61° Reggimento di fanteria motorizzata "Sicilia"`],name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[655,125],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 61st Infantry Regiment`,`I battaglione fucilieri, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 61st Infantry Regiment`,`II battaglione fucilieri, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`},
                                        {level:3,type:`Mixed Support`,team:`Italian`,desc:[`3rd Mixed Support Battalion, 61st Motorized Infantry Regiment`,`III battaglione armi d'accompagnamento, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`M`,designation:`61`,commander:`Rabezzana`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`62nd Infantry Regiment`,`62° Reggimento di fanteria motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[730,300],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 62nd Infantry Regiment`,`I battaglione fucilieri, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 62nd Infantry Regiment`,`II battaglione fucilieri, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`},
                                        {level:3,type:`Mixed Support`,team:`Italian`,desc:[`3rd Mixed Support Battalion, 62nd Motorized Infantry Regiment`,`III battaglione armi d'accompagnamento, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`M`,designation:`62`,commander:`Gennaro`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`7th Bersaglieri Regiment`,`7° Reggimento Bersaglieri`],name:`7`,designation:`Bersaglieri`,commander:`Scirocco`,icon:`trento`,
                                    pos:[480,441],
                                    elements:[
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`10th Bersaglieri Battalion`,`10° Battaglione Bersaglieri`],name:`10`,designation:`Bersaglieri`,commander:`Adolfato`},
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`11th Bersaglieri Battalion`,`11° Battaglione Bersaglieri`],name:`11`,designation:`Bersaglieri`,commander:`Straziota`},
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],reserve:[
                [
                    {
                        level:1,type:[`Tank`,`Heavy`],team:`British`,
                        desc:`32nd Army Tank Brigade`,name:`32`,designation:``,commander:`Willison`,icon:`32a`,
                        pos:[965,250],
                        elements:[
                            {level:3,type:`Heavy Tank`,team:`British`,desc:[`1st Battalion, Royal Tank Regiment`,`1st Royal Tank Regiment`],name:`1`,designation:`Royal Tank\nRegiment`,commander:`Brown`},
                            {level:3,type:`Heavy Tank`,team:`British`,desc:[`4th Battalion, Royal Tank Regiment`,`4th Royal Tank Regiment`],name:`4`,designation:`Royal Tank\nRegiment`,commander:`O"Carroll`},
                            {level:3,type:`Artillery`,team:`British`,desc:[`104th Battalion, Royal Horse Artillery`,`104th Regiment, Royal Horse Artillery`],name:`104`,designation:`Royal\nHorse`,commander:`Matthew`},
                        ],
                    },{
                        level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                        desc:`11th Indian Infantry Brigade`,name:`11`,designation:``,commander:`Anderson`,icon:`4id`,
                        pos:[2510,1105],
                        elements:[
                            {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Queen's Own Cameron Highlanders`,name:`2`,designation:`Cameron\nHighlanders`,commander:`Duncan`},
                            {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`1st Battalion, 6th Rajputana Rifles`,name:`1/6`,designation:`Rajputana`,commander:`Quayle`},
                            {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`2nd Battalion, 5th Mahratta Light Infantry`,name:`2/5`,designation:`Mahratta`,commander:`Doyle`},
                        ],
                    },{
                        level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                        desc:`29th Indian Infantry Brigade`,name:`29`,designation:``,commander:`Reid`,icon:`5id`,
                        pos:[2490,1520],
                        elements:[
                            {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, Worcestershire Regiment`,name:`1`,designation:`Worcester`,commander:`Knight`},
                            {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`1st Battalion, 5th Mahratta Light Infantry`,name:`1/5`,designation:`Mahratta`,commander:`Mahant`},
                            {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`3rd Battalion, 2nd Punjab Regiment`,name:`3/2`,designation:`Punjab`,commander:`Dean`},
                            {level:3,type:`Armored Car`,team:`South African`,desc:[`6th South African Armored Car Battalion`,`6th South African Armoured Car Regiment`],name:`6`,designation:``,commander:`Short`},
                        ],
                    },{
                        level:2,type:[`Infantry`,`Motorized`],team:`German`,
                        desc:[`200th Special Purpose Regimental Staff`,`Regimentsstab z.b.V. 200`],name:`200`,designation:`z.b.V.`,commander:`Geißler`,icon:`15pz`,
                        pos:[1533,599],
                        elements:[
                            {level:3,type:`Motorized Engineer`,team:`German`,desc:[`33rd Engineer Battalion`,`Panzer-Pionier-Bataillon 33`],name:`33`,designation:``,commander:`Oberembt`}, 
                        ],
                    },{
                        level:2,type:[`Infantry`,`Mixed`,`Motorized`],team:`German`,
                        desc:[`288th Sonderverband `,`Sonderverband 288`],name:`288`,designation:``,commander:`Menton`,icon:`90l`,
                        pos:[895,395],
                        elements:[
                            {level:3,type:`Motorized Mixed Combat`,team:`German`,desc:[`1st Blocking Detachment, 288th Sonderverband`,`1. Sperrverband, Sonderverband 288`],name:`1`,designation:``,commander:`Daumiller`},
                            {level:3,type:`Motorized Mixed Infantry`,team:`German`,desc:[`2nd Blocking Detachment, 288th Sonderverband`,`2. Sperrverband, Sonderverband 288`],name:`2`,designation:``,commander:`Borhardt`},
                        ],
                    },{
                        level:4,type:[`Tank`,`Recon`,`Tracked`],team:`German`,
                        desc:[`580th Reconnaissance Company`,`Aufklärungs-Kompanie 580`],name:`580`,designation:``,commander:`Hohmeyer`,icon:`90l`,
                        pos:[1030,315],
                        elements:[
                            {level:4,type:`Armored Car Company`,team:`German`,desc:[`580th Reconnaissance Company`,`Aufklärungs-Kompanie 580`],name:`580`,designation:``,commander:`Hohmeyer`}, 
                        ],
                    },{
                        level:0,type:[`Infantry`],team:`Italian`,
                        desc:[`60th Infantry Division "Sabratha"`,`60ª Divisione di fanteria "Sabratha"`],name:`60`,designation:`Sabratha`,commander:`Soldarelli`,icon:`sabratha`,
                        pos:[1028,617],
                        elements:[
                            {
                                level:2,type:[`Infantry`],team:`Italian`,
                                desc:[`85th Infantry Regiment`,`85° Reggimento di fanteria "Sabratha"`],name:`85`,designation:`Sabratha`,commander:`Grimaldi`,icon:`sabratha`,
                                pos:[932,544],
                                elements:[
                                    {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`1st Battalion, 85th Infantry Regiment`,`I battaglione fucilieri, 85° Reggimento di fanteria motorizzata "Sabratha"`],name:`1`,designation:`85`,commander:`Angelozzi`},
                                    {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`2nd Battalion, 85th Infantry Regiment`,`II battaglione fucilieri, 85° Reggimento di fanteria motorizzata "Sabratha"`],name:`2`,designation:`85`,commander:`Morosini`},
                                ],
                            },{
                                level:2,type:[`Infantry`],team:`Italian`,
                                desc:[`86th Infantry Regiment`,`86° Reggimento di fanteria "Sabratha"`],name:`86`,designation:`Sabratha`,commander:`Castrignanò`,icon:`sabratha`,
                                pos:[993,728],
                                elements:[
                                    {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`1st Battalion, 86th Infantry Regiment`,`I battaglione fucilieri, 86° Reggimento di fanteria motorizzata "Sabratha"`],name:`1`,designation:`86`,commander:`Velosa`},
                                    {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`2nd Battalion, 86th Infantry Regiment`,`II battaglione fucilieri, 86° Reggimento di fanteria motorizzata "Sabratha"`],name:`2`,designation:`86`,commander:`Piana`},
                                ],
                            },
                        ],
                    },[
                        {
                            level:2,type:[`Artillery`],team:`Italian`,
                            desc:[`Mixed Artillery Group`,`Gruppo d'artiglieria misto`],name:`M`,designation:`Army`,commander:`Corvino`,icon:``,
                            pos:[827,474],
                            elements:[
                                {level:3,type:`Light Artillery`,team:`Italian`,desc:[`19th Group, Mixed Artillery Group`,`XIX gruppo, Gruppo d'artiglieria misto`],name:`19`,designation:``,commander:`Luca`},
                                {level:3,type:`Motorized Light Artillery`,team:`Italian`,desc:[`120th Regia Marina Group, Mixed Artillery Group`,`CXX gruppo Regia Marina, Gruppo d'artiglieria misto`],name:`120`,designation:`Regia\nMarina`,commander:`Berton`},
                            ],
                        },{
                            level:3,type:[`Artillery`,`Machine Gun`,`Motorized`,`Mortar`],team:`Italian`,
                            desc:[`508th Mixed Support Battalion`,`DVIII battaglione armi d'accompagnamento`],name:`508`,designation:``,commander:`Pettinau`,icon:`trieste`,
                            pos:[1062,1469],
                            elements:[
                                {level:3,type:`Motorized Mixed Support`,team:`Italian`,desc:[`508th Mixed Support Battalion`,`DVIII battaglione armi d'accompagnamento`],name:`508`,designation:``,commander:`Pettinau`},
                            ],
                        },{
                            level:3,type:[`Artillery`,`Machine Gun`,`Mortar`],team:`Italian`,
                            desc:[`551st Mixed Support Battalion`,`DLI battaglione armi d'accompagnamento`],name:`551`,designation:``,commander:`Bobbio`,icon:`trento`,
                            pos:[378,564],
                            elements:[
                                {level:3,type:`Mixed Support`,team:`Italian`,desc:[`551st Mixed Support Battalion`,`DLI battaglione armi d'accompagnamento`],name:`551`,designation:``,commander:`Bobbio`},
                            ],
                        },
                    ],{
                        level:3,type:[`Artillery`],team:`Italian`,
                        desc:[`503rd Independent Coastal Artillery Group`,`503º Gruppo autonomo di artiglieria costiera`],name:`503`,designation:`Coast`,commander:`Verri`,icon:`savona`,
                        pos:[2245,937],
                        elements:[
                            {level:3,type:`Coastal Artillery`,team:`Italian`,desc:[`503rd Independent Coastal Artillery Group`,`503º Gruppo autonomo di artiglieria costiera`],name:`503`,designation:`Coast`,commander:`Verri`,icon:`savona`},
                        ],
                    },
                ],[
                    [
                        {
                            level:3,type:[`Infantry`],team:`Czechoslovak`,
                            desc:[`11th Czechoslovak Infantry Battalion`,`11. československý pěší prapor — Východní`],name:`11`,designation:``,commander:`Klapálek`,icon:`70`,
                            pos:[765,150],
                            elements:[
                                {level:3,type:`Infantry`,team:`Czechoslovak`,desc:[`11th Czechoslovak Infantry Battalion`,`11. československý pěší prapor — Východní`],name:`11`,designation:``,commander:`Klapálek`},
                            ],
                        },{
                            level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                            desc:`5th South African Infantry Brigade`,name:`5`,designation:``,commander:`Armstrong`,icon:`1sa`,
                            pos:[2490,1520],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, South African Irish Regiment`,name:`1`,designation:`Irish`,commander:`Cochran`},
                                {level:3,type:`Motorized Infantry`,team:`South African`,desc:`2nd Battalion, General Botha Regiment`,name:`2`,designation:`Botha`,commander:`Mason`},
                                {level:3,type:`Motorized Infantry`,team:`South African`,desc:`3rd Battalion, Transvaal Scottish Regiment`,name:`3`,designation:`Transvaal\nScottish`,commander:`Rosser`},
                                {level:3,type:`Motorized Artillery`,team:`South African`,desc:`4th South African Field Artillery Regiment`,name:`4`,designation:``,commander:`Harpur`},
                            ],
                        },
                    ],[
                        {
                            level:1,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                            desc:`6th New Zealand Infantry Brigade`,name:`6`,designation:``,commander:`Barrowclough`,icon:`2nz`,
                            pos:[2510,1315],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`24th New Zealand Infantry Battalion`,name:`24`,designation:``,commander:`Shuttleworth`},
                                {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`25th New Zealand Infantry Battalion`,name:`25`,designation:``,commander:`Burton`},
                                {level:3,type:`Motorized Infantry`,team:`New Zealand`,desc:`26th New Zealand Infantry Battalion`,name:`26`,designation:``,commander:`Satterthwaite`},
                            ],
                        },{
                            level:3,type:[`Infantry`,"Machine Gun"],team:`New Zealand`,
                            desc:`27th New Zealand Machine Gun Battalion`,name:`27`,designation:``,commander:`Gwilliam`,icon:`2nz`,
                            pos:[2610,1305],
                            elements:[
                                {level:3,type:`Motorized Machine Gun`,team:`New Zealand`,desc:`27th New Zealand Machine Gun Battalion`,name:`27`,designation:``,commander:`Gwilliam`},
                            ],
                        },
                    ],{
                        level:2,type:[`Infantry`,`Mixed`,`Motorized`],team:`German`,
                        desc:[`288th Sonderverband `,`Sonderverband 288`],name:`288`,designation:``,commander:`Menton`,icon:`90l`,
                        pos:[1141,566],
                        elements:[
                            {level:3,type:`Motorized Mixed Combat`,team:`German`,desc:[`1st Blocking Detachment, 288th Sonderverband`,`1. Sperrverband, Sonderverband 288`],name:`1`,designation:``,commander:`Daumiller`},
                            {level:3,type:`Motorized Mixed Infantry`,team:`German`,desc:[`2nd Blocking Detachment, 288th Sonderverband`,`2. Sperrverband, Sonderverband 288`],name:`2`,designation:``,commander:`Borhardt`},
                        ],
                    },[
                        {
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`60th Infantry Division "Sabratha"`,`60ª Divisione di fanteria "Sabratha"`],name:`60`,designation:`Sabratha`,commander:`Soldarelli`,icon:`sabratha`,
                            pos:[993,728],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`85th Infantry Regiment`,`85° Reggimento di fanteria "Sabratha"`],name:`85`,designation:`Sabratha`,commander:`Grimaldi`,icon:`sabratha`,
                                    pos:[1028,617],
                                    elements:[
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`1st Battalion, 85th Infantry Regiment`,`I battaglione fucilieri, 85° Reggimento di fanteria motorizzata "Sabratha"`],name:`1`,designation:`85`,commander:`Angelozzi`},
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`2nd Battalion, 85th Infantry Regiment`,`II battaglione fucilieri, 85° Reggimento di fanteria motorizzata "Sabratha"`],name:`2`,designation:`85`,commander:`Morosini`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`86th Infantry Regiment`,`86° Reggimento di fanteria "Sabratha"`],name:`86`,designation:`Sabratha`,commander:`Castrignanò`,icon:`sabratha`,
                                    pos:[946,961],
                                    elements:[
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`1st Battalion, 86th Infantry Regiment`,`I battaglione fucilieri, 86° Reggimento di fanteria motorizzata "Sabratha"`],name:`1`,designation:`86`,commander:`Velosa`},
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`2nd Battalion, 86th Infantry Regiment`,`II battaglione fucilieri, 86° Reggimento di fanteria motorizzata "Sabratha"`],name:`2`,designation:`86`,commander:`Piana`},
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Infantry`,`Machine Gun`],team:`Italian`,
                            desc:[`4th Machine Gun Battalion "Genova Cavalleria"`,`IV Gruppo squadroni mitraglieri "Genova Cavalleria"`],name:`4`,designation:`Genova`,commander:`Pierucci`,icon:`savona`,
                            pos:[2358,967],
                            elements:[
                                {level:3,type:`Machine Gun`,team:`Italian`,desc:[`4th Machine Gun Battalion "Genova Cavalleria"`,`IV Gruppo squadroni mitraglieri "Genova Cavalleria"`],name:`4`,designation:`Genova`,commander:`Pierucci`},
                            ],
                        },
                    ],[
                        {
                            level:2,type:[`Light Artillery`],team:`Italian`,
                            desc:[`Artillery Group "Sabratha"`,`Raggruppamento artiglieria "Sabratha"`],name:`RA`,designation:`Sabratha`,commander:`Ferrario`,icon:`savona`,
                            pos:[827,474],
                            elements:[
                                {level:3,type:`Light Artillery`,team:`Italian`,desc:[`283rd Group, Artillery Group "Sabratha"`,`CCLXXXIII gruppo, Raggruppamento artiglieria "Sabratha"`],name:`1`,designation:`Sabratha`,commander:`Parrella`},
                                {level:3,type:`Light Artillery`,team:`Italian`,desc:[`284th Group, Artillery Group "Sabratha"`,`CCLXXXIV gruppo, Raggruppamento artiglieria "Sabratha"`],name:`3`,designation:`Sabratha`,commander:`Rocchi`},
                            ],
                        },{
                            level:3,type:[`Artillery`,`Machine Gun`,`Mortar`],team:`Italian`,
                            desc:[`551st Mixed Support Battalion`,`DLI battaglione armi d'accompagnamento`],name:`551`,designation:``,commander:`Bobbio`,icon:`trento`,
                            pos:[378,564],
                            elements:[
                                {level:3,type:`Mixed Support`,team:`Italian`,desc:[`551st Mixed Support Battalion`,`DLI battaglione armi d'accompagnamento`],name:`551`,designation:``,commander:`Bobbio`},
                            ],
                        },
                    ],
                ],
            ]
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
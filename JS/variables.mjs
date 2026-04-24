export var types={
    city:[],
    connect:[],
    team:[],
    player:[],
    unit:[],
    elementType:[
        {name:`Infantry`,unitType:[`Infantry`],damage:[],armor:0,health:0,speed:0},//0
        {name:`Machine Gun`,unitType:[`Infantry`,`Machine Gun`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorized Infantry`,unitType:[`Infantry`,`Motorized`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorized Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorized Bersaglieri`,unitType:[`Infantry`,`Motorized`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorized Militia`,unitType:[`Infantry`,`Motorized`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorcycle Infantry`,unitType:[`Infantry`,`Motorcycle`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorcycle Bersaglieri`,unitType:['Infantry',`Motorcycle`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorcycle Police`,unitType:[`Infantry`,`Motorcycle`],damage:[],armor:0,health:0,speed:0},
        {name:`Light Tank`,unitType:[`Tank`,`Light`],damage:[],armor:0,health:0,speed:0},
        {name:`Medium Tank`,unitType:[`Tank`],damage:[],armor:0,health:0,speed:0},//10
        {name:`Armored Car`,unitType:[`Tank`,`Recon`],damage:[],armor:0,health:0,speed:0},
        {name:`Light Artillery`,unitType:[`Light`,`Artillery`],damage:[],armor:0,health:0,speed:0},
        {name:`Artillery`,unitType:[`Artillery`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorized Light Artillery`,unitType:[`Light`,`Artillery`,`Motorized`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorized Artillery`,unitType:[`Artillery`,`Motorized`],damage:[],armor:0,health:0,speed:0},
        {name:`Mixed Support`,unitType:[`Artillery`,`Machine Gun`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorized Mixed Support`,unitType:[`Artillery`,`Machine Gun`,`Motorized`],damage:[],armor:0,health:0,speed:0},
    ],unitType:[
        {name:`Infantry`},
        {name:`Machine Gun`},
        {name:`Motorized`},
        {name:`Motorcycle`},
        {name:`Tank`},
        {name:`Artillery`},
        {name:`Recon`},
        {name:`Light`},
    ],unitLevel:[
        {name:`Division`,symbol:`XX`,size:60},
        {name:`Brigade`,symbol:`X`,size:45},
        {name:`Regiment`,symbol:`III`,size:45},
        {name:`Battalion`,symbol:`II`,size:35},
    ],map:[
        {
            name:[`Operation Crusader`,`Base`],
            term:[`main`],
            city:[
                {name:`Gazala`,owner:2,type:1,pos:[323,17]},
                {name:`Tobruk`,owner:0,type:1,pos:[916,175]},
                {name:`Alem Hamza`,owner:2,type:0,pos:[92,172]},
                {name:`Acroma`,owner:2,type:0,pos:[581,198]},
                {name:`Gambut`,owner:1,type:0,pos:[1554,434]},
                {name:`Knightsbridge`,owner:2,type:0,pos:[480,441]},
                {name:`El Duda`,owner:1,type:0,pos:[1072,461]},
                {name:`Rotonda Mteifel`,owner:2,type:0,pos:[86,464]},
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
                {name:`Buq Buq`,owner:0,type:1,pos:[2896,1077]},
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
                {name:[`Halfaya Pass`,`Buq Buq`]},
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
                {name:`German`,term:`germany`,player:1,quality:1.1},
                {name:`Italian`,term:`italy`,player:2,quality:0.8},
            ],player:[
                {name:`British`,color:[0,100,250],side:0},
                {name:`German`,color:[150,50,0],side:1},
                {name:`Italian`,color:[0,200,0],side:1},
            ],unit:[
                {
                    level:0,type:[`Tank`],team:`British`,
                    desc:`7th Armoured Division`,name:`7`,designation:``,commander:`Gott`,icon:`7a`,
                    pos:[2700,1420],
                    elements:[
                        {
                            level:1,type:[`Tank`,`Light`],team:`British`,
                            desc:`4th Armoured Brigade`,name:`4`,designation:``,commander:`Gatehouse`,icon:`7a`,
                            pos:[2380,1420],
                            elements:[
                                {level:3,type:`Light Tank`,team:`British`,name:`3`,designation:`Royal Tank\nRegiment`,commander:``},
                                {level:3,type:`Light Tank`,team:`British`,name:`5`,designation:`Royal Tank\nRegiment`,commander:``},
                                {level:3,type:`Light Tank`,team:`British`,name:`8`,designation:`Irish\nHussars`,commander:`Drew`},
                                {level:3,type:`Motorized Infantry`,team:`British`,name:`2`,designation:`Scots\nGuards`,commander:``},
                                {level:3,type:`Motorized Artillery`,team:`British`,name:`2`,designation:`Royal\nHorse`,commander:``},
                            ],
                        },{
                            level:1,type:[`Tank`],team:`British`,
                            desc:`7th Armoured Brigade`,name:`7`,designation:``,commander:`Davy`,icon:`7a`,
                            pos:[2485,1420],
                            elements:[
                                {level:3,type:`Medium Tank`,team:`British`,name:`2`,designation:`Royal Tank\nRegiment`,commander:``},
                                {level:3,type:`Medium Tank`,team:`British`,name:`6`,designation:`Royal Tank\nRegiment`,commander:``},
                                {level:3,type:`Medium Tank`,team:`British`,name:`7`,designation:`Queen's\nHussars`,commander:``},
                            ],
                        },{
                            level:1,type:[`Infantry`,`Artillery`,`Motorized`],team:`British`,
                            desc:`7th Support Group`,name:`7`,designation:``,commander:`Campbell`,icon:`7a`,
                            pos:[2590,1420],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`British`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:`de Salis`},
                                {level:3,type:`Motorized Infantry`,team:`British`,name:`2`,designation:`The Rifle\nBrigade`,commander:``},
                                {level:3,type:`Motorized Artillery`,team:`British`,name:`3`,designation:`Royal\nHorse`,commander:``},
                                {level:3,type:`Motorized Artillery`,team:`British`,name:`60`,designation:`North\nMidland`,commander:``},
                            ],
                        },{
                            level:3,type:[`Tank`,`Recon`],team:`British`,
                            desc:`1st King's Dragoon Guards`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:``,icon:`7a`,
                            pos:[1950,1282],
                            elements:[
                                {level:3,type:`Armored Car`,team:`British`,name:`1`,designation:`King's\nDragoon\nGuards`,commander:``},
                            ],
                        },
                    ],
                },{
                    level:0,type:[`Infantry`,`Motorized`],team:`South African`,
                    desc:`1st South African Infantry Division`,name:`1`,designation:``,commander:`Brink`,icon:`1sa`,
                    pos:[2750,1520],
                    elements:[
                        {
                            level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                            desc:`1st South African Infantry Brigade`,name:`1`,designation:``,commander:`Pienaar`,icon:`1sa`,
                            pos:[2535,1520],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`South African`,name:`1`,designation:`Duke of\nEdinburgh`,commander:``},
                                {level:3,type:`Motorized Infantry`,team:`South African`,name:`1`,designation:`Royal\nNatal`,commander:``},
                                {level:3,type:`Motorized Infantry`,team:`South African`,name:`1`,designation:`Transvaal\nScottish`,commander:``},
                                {level:3,type:`Motorized Artillery`,team:`South African`,name:`3`,designation:``,commander:``},
                            ],
                        },{
                            level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                            desc:`5th South African Infantry Brigade`,name:`5`,designation:``,commander:`Armstrong`,icon:`1sa`,
                            pos:[2640,1520],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`South African`,name:`Botha`,designation:``,commander:``},
                                {level:3,type:`Motorized Infantry`,team:`South African`,name:`Irish`,designation:``,commander:``},
                                {level:3,type:`Motorized Infantry`,team:`South African`,name:`3`,designation:`Transvaal\nScottish`,commander:``},
                                {level:3,type:`Motorized Artillery`,team:`South African`,name:`4`,designation:``,commander:``},
                            ],
                        },
                    ],
                },{
                    level:0,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                    desc:`2nd New Zealand Division`,name:`2`,designation:``,commander:`Freyberg`,icon:`2nz`,
                    pos:[2800,1150],
                    elements:[
                        {
                            level:1,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                            desc:`4th New Zealand Infantry Brigade`,name:`4`,designation:``,commander:`Inglis`,icon:`2nz`,
                            pos:[2535,1105],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`New Zealand`,name:`18`,designation:``,commander:`Peart`},
                                {level:3,type:`Motorized Infantry`,team:`New Zealand`,name:`19`,designation:``,commander:`Hartnell`},
                                {level:3,type:`Motorized Infantry`,team:`New Zealand`,name:`20`,designation:``,commander:`Kippenberger`},
                            ],
                        },{
                            level:1,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                            desc:`5th New Zealand Infantry Brigade`,name:`5`,designation:``,commander:`Hargest`,icon:`2nz`,
                            pos:[2535,1210],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`New Zealand`,name:`21`,designation:``,commander:`Fitzpatrick`},
                                {level:3,type:`Motorized Infantry`,team:`New Zealand`,name:`22`,designation:``,commander:`Andrew`},
                                {level:3,type:`Motorized Infantry`,team:`New Zealand`,name:`23`,designation:``,commander:`Romans`},
                            ],
                        },{
                            level:1,type:[`Infantry`,`Motorized`],team:`New Zealand`,
                            desc:`6th New Zealand Infantry Brigade`,name:`6`,designation:``,commander:`Barrowclough`,icon:`2nz`,
                            pos:[2535,1315],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`New Zealand`,name:`24`,designation:``,commander:`Shuttleworth`},
                                {level:3,type:`Motorized Infantry`,team:`New Zealand`,name:`25`,designation:``,commander:`Burton`},
                                {level:3,type:`Motorized Infantry`,team:`New Zealand`,name:`26`,designation:``,commander:`Satterthwaite`},
                            ],
                        },{
                            level:1,type:[`Artillery`,`Motorized`],team:`New Zealand`,
                            desc:`2nd New Zealand Field Brigade`,name:`2`,designation:``,commander:`Miles`,icon:`2nz`,
                            pos:[2645,1210],
                            elements:[
                                {level:3,type:`Motorized Artillery`,team:`New Zealand`,name:`4`,designation:``,commander:`Duff`},
                                {level:3,type:`Motorized Artillery`,team:`New Zealand`,name:`5`,designation:``,commander:`Fraser`},
                                {level:3,type:`Motorized Artillery`,team:`New Zealand`,name:`6`,designation:``,commander:`Weir`},
                            ],
                        },{
                            level:3,type:[`Infantry`,'Machine Gun'],team:`New Zealand`,
                            desc:`27th New Zealand Machine Gun Battalion`,name:`27`,designation:``,commander:`Gwilliam`,icon:`2nz`,
                            pos:[2635,1115],
                            elements:[
                                {level:3,type:`Motorized Machine Gun`,team:`New Zealand`,name:`27`,designation:``,commander:`Gwilliam`},
                            ],
                        },{
                            level:3,type:[`Infantry`,`Motorized`],team:`Māori`,
                            desc:`28th New Zealand Infantry Battalion`,name:`28`,designation:``,commander:`Dittmer`,icon:`2nz`,
                            pos:[2635,1305],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`Māori`,name:`28`,designation:``,commander:`Dittmer`},
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
                                {level:3,type:`Infantry`,team:`British`,name:`1`,designation:`Bedford &\nHertford`,commander:``},
                                {level:3,type:`Infantry`,team:`British`,name:`2`,designation:`Black\nWatch`,commander:``},
                                {level:3,type:`Infantry`,team:`British`,name:`2`,designation:`York &\nLancaster`,commander:``},
                            ],
                        },{
                            level:1,type:[`Infantry`],team:`British`,
                            desc:`23rd Infantry Brigade`,name:`23`,designation:``,commander:`Cox`,icon:`70`,
                            pos:[850,265],
                            elements:[
                                {level:3,type:`Infantry`,team:`British`,name:`1`,designation:`Durham\nLight`,commander:``},
                                {level:3,type:`Infantry`,team:`British`,name:`1`,designation:`Essex`,commander:``},
                                {level:3,type:`Infantry`,team:`British`,name:`4`,designation:`Border`,commander:``},
                            ],
                        },{
                            level:1,type:[`Infantry`],team:`Polish`,
                            desc:`Polish Independent Carpathian Brigade`,name:`C`,designation:``,commander:`Kopański`,icon:`70`,
                            pos:[765,150],
                            elements:[
                                {level:3,type:`Infantry`,team:`Polish`,name:`1`,designation:``,commander:`Kopeć`},
                                {level:3,type:`Infantry`,team:`Polish`,name:`2`,designation:``,commander:`Brzósko`},
                                {level:3,type:`Infantry`,team:`Polish`,name:`3`,designation:``,commander:`Sokol`},
                                {level:3,type:`Infantry`,team:`Czechoslovak`,name:`11`,designation:``,commander:`Klapálek`},
                                {level:3,type:`Infantry`,team:`Australian`,name:`2/13`,designation:``,commander:`Turner`},
                                {level:3,type:`Machine Gun`,team:`Polish`,name:`C`,designation:``,commander:`Bobiński`},
                                {level:3,type:`Artillery`,team:`Polish`,name:`C`,designation:``,commander:`Gliwicz`},
                            ],
                        },
                    ],
                },{
                    level:3,type:[`Infantry`],team:`German`,
                    desc:`300th Oasis Battalion`,name:`300`,designation:`Oasis`,commander:`Ennecerus`,icon:``,
                    pos:[2405,1069],
                    elements:[
                        {level:3,type:`Infantry`,team:`German`,name:`300`,designation:`Oasis`,commander:`Ennecerus`},
                    ],
                },{
                    level:0,type:[`Tank`],team:`German`,
                    desc:`15th Panzer Division`,name:`15`,designation:``,commander:`Neumann-Silkow`,icon:`15pz`,
                    pos:[1554,434],
                    elements:[
                        {
                            level:2,type:[`Tank`],team:`German`,
                            desc:`8th Panzer Regiment`,name:`8`,designation:``,commander:`Cramer`,icon:`15pz`,
                            pos:[1432,570],
                            elements:[
                                {level:3,type:`Medium Tank`,team:`German`,name:`1`,designation:``,commander:`Fenski`},
                                {level:3,type:`Medium Tank`,team:`German`,name:`2`,designation:``,commander:`Wahl`},
                            ],
                        },{
                            level:2,type:[`Infantry`,`Motorized`],team:`German`,
                            desc:`115th Infantry Regiment`,name:`115`,designation:``,commander:`Geißler`,icon:`15pz`,
                            pos:[1634,628],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`German`,name:`1`,designation:``,commander:`Zintel`},
                                {level:3,type:`Motorized Machine Gun`,team:`German`,name:`2`,designation:``,commander:`Warrelmann`},
                            ],
                        },{
                            level:2,type:[`Artillery`,`Motorized`],team:`German`,
                            desc:`33rd Artillery Regiment`,name:`33`,designation:``,commander:`Crasemann`,icon:`15pz`,
                            pos:[1393,382],
                            elements:[
                                {level:3,type:`Motorized Artillery`,team:`German`,name:`1`,designation:``,commander:`Mayer`},
                                {level:3,type:`Motorized Artillery`,team:`German`,name:`2`,designation:``,commander:`Mesmer`},
                                {level:3,type:`Motorized Artillery`,team:`German`,name:`3`,designation:``,commander:`Bickel`},
                            ],
                        },{
                            level:3,type:[`Infantry`,`Motorcycle`],team:`German`,
                            desc:`15th Motorcycle Battalion`,name:`15`,designation:``,commander:`Ehle`,icon:`15pz`,
                            pos:[1533,599],
                            elements:[
                               {level:3,type:`Motorcycle Infantry`,team:`German`,name:`15`,designation:``,commander:`Ehle`}, 
                            ],
                        },{
                            level:3,type:[`Tank`,`Recon`],team:`German`,
                            desc:`33rd Reconnaissance Battalion`,name:`33`,designation:``,commander:`Heraucourt`,icon:`15pz`,
                            pos:[1737,1251],
                            elements:[
                                {level:3,type:`Armored Car`,team:`German`,name:`33`,designation:``,commander:`Heraucourt`}, 
                            ],
                        },
                    ],
                },{
                    level:0,type:[`Infantry`],team:`German`,
                    desc:`Special Purpose Division 'Afrika'`,name:`A`,designation:``,commander:`Sümmermann`,icon:`90l`,
                    pos:[1072,461],
                    elements:[
                        {
                            level:2,type:[`Infantry`],team:`German`,
                            desc:`361st 'Afrika' Infantry Regiment`,name:`361`,designation:`Afrika`,commander:`Von Barby`,icon:`90l`,
                            pos:[1141,566],
                            elements:[
                                {level:3,type:`Infantry`,team:`German`,name:`1`,designation:``,commander:`Harder`},
                                {level:3,type:`Infantry`,team:`German`,name:`2`,designation:``,commander:`Ryll`},
                                {level:3,type:`Artillery`,team:`German`,name:`361`,designation:`Afrika`,commander:`Schilling`},
                            ],
                        },{
                            level:2,type:[`Infantry`,`Artillery`,`Machine Gun`],team:`German`,
                            desc:`Sonderverband 288`,name:`288`,designation:``,commander:`Menton`,icon:`90l`,
                            pos:[1050,325],
                            elements:[
                                {level:3,type:`Infantry`,team:`German`,name:`288`,designation:``,commander:`Daumiller`},
                                {level:3,type:`Mixed Support`,team:`German`,name:`288`,designation:``,commander:`Borhardt`},
                            ],
                        },{
                            level:3,type:[`Infantry`],team:`German`,
                            desc:`3rd Battalion / 255th Infantry Regiment`,name:`3`,designation:`IR 255`,commander:`Hollmann`,icon:`90l`,
                            pos:[900,385],
                            elements:[
                                {level:3,type:`Infantry`,team:`German`,name:`3`,designation:`IR 255`,commander:`Hollmann`},
                            ],
                        },
                    ],
                },{
                    level:2,type:[`Artillery`],team:`Italian`,
                    desc:`8th Army Artillery Group`,name:`8`,designation:`Army`,commander:`Bersano`,icon:``,
                    pos:[827,474],
                    elements:[
                        {level:3,type:`Light Artillery`,team:`Italian`,name:`52`,designation:``,commander:``},
                        {level:3,type:`Artillery`,team:`Italian`,name:`33`,designation:``,commander:``},
                        {level:3,type:`Artillery`,team:`Italian`,name:`131`,designation:``,commander:``},
                        {level:3,type:`Artillery`,team:`Italian`,name:`147`,designation:``,commander:``},
                    ],
                },{
                    level:1,type:[`Infantry`,`Tank`],team:`Italian`,
                    desc:`Raggruppamento Esplorante del Corpo d'Armata di Manovra`,name:`RECAM`,designation:``,commander:`de Meo`,icon:``,
                    pos:[1386,1151],
                    elements:[
                        {level:3,type:`Medium Tank`,team:`Italian`,name:`52`,designation:``,commander:``},
                        {level:3,type:`Motorized Militia`,team:`Italian`,name:`1`,designation:`Giovani\nFascisti`,commander:``},
                        {level:3,type:`Motorized Militia`,team:`Italian`,name:`2`,designation:`Giovani\nFascisti`,commander:``},
                        {level:3,type:`Motorcycle Police`,team:`Italian`,name:`P`,designation:`Romolo\nGessi`,commander:``},
                        {level:3,type:`Motorized Light Artillery`,team:`Italian`,name:`RB`,designation:`Volanti`,commander:``},
                    ],
                },{
                    level:0,type:[`Infantry`,'Motorized'],team:`Italian`,
                    desc:`101st Motorized Infantry Division 'Trieste'`,name:`101`,designation:`Trieste`,commander:`Piazzoni`,icon:`trieste`,
                    pos:[660,1038],
                    elements:[
                        {
                            level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                            desc:`65th Motorized Infantry Regiment`,name:`65`,designation:`Trieste`,commander:`Quirico`,icon:`trieste`,
                            pos:[946,961],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`Italian`,name:`1`,designation:``,commander:``},
                                {level:3,type:`Motorized Infantry`,team:`Italian`,name:`2`,designation:``,commander:``},
                                {level:3,type:`Motorized Infantry`,team:`Italian`,name:`3`,designation:``,commander:``},
                            ],
                        },{
                            level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                            desc:`66th Motorized Infantry Regiment`,name:`66`,designation:`Trieste`,commander:`Zanetti`,icon:`trieste`,
                            pos:[191,795],
                            elements:[
                                {level:3,type:`Motorized Infantry`,team:`Italian`,name:`1`,designation:``,commander:``},
                                {level:3,type:`Motorized Infantry`,team:`Italian`,name:`2`,designation:``,commander:``},
                                {level:3,type:`Motorized Infantry`,team:`Italian`,name:`3`,designation:``,commander:``},
                            ],
                        },{
                            level:2,type:[`Infantry`,`Motorcycle`],team:`Italian`,
                            desc:`9th Bersaglieri Regiment`,name:`9`,designation:`Bersaglieri`,commander:`Bordoni`,icon:`trieste`,
                            pos:[993,728],
                            elements:[
                                {level:3,type:`Motorized Bersaglieri`,team:`Italian`,name:`28`,designation:``,commander:``},
                                {level:3,type:`Motorized Bersaglieri`,team:`Italian`,name:`30`,designation:``,commander:``},
                                {level:3,type:`Motorized Bersaglieri`,team:`Italian`,name:`40`,designation:``,commander:``},
                                {level:3,type:`Motorcycle Bersaglieri`,team:`Italian`,name:`32`,designation:``,commander:``},
                            ],
                        },{
                            level:3,type:[`Artillery`,`Machine Gun`,`Motorized`],team:`Italian`,
                            desc:`508th Mixed Support Battalion`,name:`508`,designation:``,commander:``,icon:`trieste`,
                            pos:[1062,1469],
                            elements:[
                                {level:3,type:`Motorized Mixed Support`,team:`Italian`,name:`508`,designation:``,commander:``},
                            ],
                        },
                    ],
                },{
                    level:0,type:[`Infantry`],team:`Italian`,
                    desc:`55th Infantry Division 'Savona'`,name:`55`,designation:`Savona`,commander:`de Giorgis`,icon:`savona`,
                    pos:[2142,1038],
                    elements:[
                        {
                            level:2,type:[`Infantry`],team:`Italian`,
                            desc:`15th Infantry Regiment`,name:`15`,designation:`Savona`,commander:`Russo`,icon:`savona`,
                            pos:[2014,1167],
                            elements:[
                                {level:3,type:`Infantry`,team:`Italian`,name:`1`,designation:``,commander:``},
                                {level:3,type:`Infantry`,team:`Italian`,name:`2`,designation:``,commander:``},
                                {level:3,type:`Infantry`,team:`Italian`,name:`3`,designation:``,commander:``},
                            ],
                        },{
                            level:2,type:[`Infantry`],team:`Italian`,
                            desc:`16th Infantry Regiment`,name:`16`,designation:`Savona`,commander:`Garrone`,icon:`savona`,
                            pos:[2254,671],
                            elements:[
                                {level:3,type:`Infantry`,team:`Italian`,name:`1`,designation:``,commander:``},
                                {level:3,type:`Infantry`,team:`Italian`,name:`2`,designation:``,commander:``},
                                {level:3,type:`Infantry`,team:`Italian`,name:`3`,designation:``,commander:``},
                            ],
                        },{
                            level:3,type:[`Infantry`,`Machine Gun`],team:`Italian`,
                            desc:`4th Machine Gun Battalion 'Genova Cavalleria'`,name:`4`,designation:`Genova`,commander:`di Bardi`,icon:`savona`,
                            pos:[2358,967],
                            elements:[
                                {level:3,type:`Machine Gun`,team:`Italian`,name:`4`,designation:`Genova`,commander:``},
                            ],
                        },{
                            level:3,type:[`Infantry`,`Machine Gun`],team:`Italian`,
                            desc:`155th Machine Gun Battalion`,name:`155`,designation:``,commander:``,icon:`savona`,
                            pos:[2225,1190],
                            elements:[
                                {level:3,type:`Machine Gun`,team:`Italian`,name:`155`,designation:``,commander:``},
                            ],
                        },
                    ],
                },{
                    level:0,type:[`Infantry`],team:`Italian`,
                    desc:`102nd Infantry Division 'Trento'`,name:`102`,designation:`Trento`,commander:`Stampioni`,icon:`trento`,
                    pos:[581,198],
                    elements:[
                        {
                            level:2,type:[`Infantry`],team:`Italian`,
                            desc:`61st Infantry Regiment`,name:`61`,designation:`Sicilia`,commander:`Menzio`,icon:`trento`,
                            pos:[655,125],
                            elements:[
                                {level:3,type:`Infantry`,team:`Italian`,name:`1`,designation:``,commander:``},
                                {level:3,type:`Infantry`,team:`Italian`,name:`2`,designation:``,commander:``},
                                {level:3,type:`Infantry`,team:`Italian`,name:`3`,designation:``,commander:``},
                            ],
                        },{
                            level:2,type:[`Infantry`],team:`Italian`,
                            desc:`62nd Infantry Regiment`,name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                            pos:[730,300],
                            elements:[
                                {level:3,type:`Infantry`,team:`Italian`,name:`1`,designation:``,commander:``},
                                {level:3,type:`Infantry`,team:`Italian`,name:`2`,designation:``,commander:``},
                                {level:3,type:`Infantry`,team:`Italian`,name:`3`,designation:``,commander:``},
                            ],
                        },{
                            level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                            desc:`7th Bersaglieri Regiment`,name:`7`,designation:`Bersaglieri`,commander:`Adolfato`,icon:`trento`,
                            pos:[480,441],
                            elements:[
                                {level:3,type:`Motorized Bersaglieri`,team:`Italian`,name:`10`,designation:``,commander:``},
                                {level:3,type:`Motorized Bersaglieri`,team:`Italian`,name:`11`,designation:``,commander:``},
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}
export var dev={}
export var options={}
export var graphics={main:0,scale:0,load:{map:[],city:[],team:[],unit:[]}}
export var constants={trig:[[],[]],init:false}
export var inputs={mouse:{base:{x:0,y:0},rel:{x:0,y:0},previous:{base:{x:0,y:0},rel:{x:0,y:0}}}}
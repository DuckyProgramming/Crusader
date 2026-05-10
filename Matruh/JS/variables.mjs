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
        {name:`Light Artillery`,unitType:[`Light Artillery`,`Artillery`],class:2,damage:[8,10],armor:0.2,health:20,morale:0.6,num:20,speed:0.7,artillery:true,engineer:false,recon:false},//20
        {name:`Coastal Artillery`,unitType:[`Light Artillery`,`Artillery`],class:2,damage:[8,10],armor:0.2,health:12,morale:0.6,num:12,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Small Artillery`,unitType:[`Artillery`],class:2,damage:[8,14],armor:0.4,health:12,morale:0.8,num:12,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Artillery`,unitType:[`Artillery`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:20,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Semi-Motorized Artillery`,unitType:[`Artillery`,`Semi-Motorized`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:20,speed:1.05,artillery:true,engineer:false,recon:false},
        {name:`Motorized Light Artillery`,unitType:[`Light Artillery`,`Artillery`,`Motorized`],class:2,damage:[4,10],armor:0.2,health:20,morale:0.7,num:20,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Group Artillery`,unitType:[`Light Artillery`,`Artillery`,`Motorized`],class:2,damage:[6,13],armor:0.3,health:24,morale:0.7,num:24,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:20,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Mixed Support`,unitType:[`Artillery`,`Machine Gun`,`Mortar`],class:0,damage:[10,8],armor:0.1,health:50,morale:1,num:400,speed:0.8,artillery:false,engineer:false,recon:false},
        {name:`Motorized Mixed Support`,unitType:[`Artillery`,`Machine Gun`,`Motorized`,`Mortar`],class:0,damage:[10,8],armor:0.1,health:50,morale:1,num:400,speed:2,artillery:false,engineer:false,recon:false},
        {name:`Motorized Bersaglieri Mixed Support`,unitType:[`Artillery`,`Machine Gun`,`Motorized`,`Mortar`],class:0,damage:[10,8],armor:0.1,health:50,morale:1.2,num:400,speed:2,artillery:false,engineer:false,recon:false},//30
        {name:`Mixed Combat`,unitType:[`Infantry`,`Engineer`,`Mountain`],class:0,damage:[9,6],armor:0.1,health:80,morale:1.1,num:500,speed:1.15,artillery:false,engineer:true,recon:false},
        {name:`Mixed Infantry`,unitType:[`Infantry`,`Recon`,`Artillery`],class:0,damage:[8,8],armor:0.2,health:80,morale:1,num:500,speed:1.3,artillery:false,engineer:false,recon:false},
        {name:`Motorized Mixed Combat`,unitType:[`Infantry`,`Engineer`,`Mountain`,`Motorized`],class:0,damage:[9,6],armor:0.1,health:80,morale:1.1,num:500,speed:2.875,artillery:false,engineer:true,recon:false},
        {name:`Motorized Mixed Infantry`,unitType:[`Infantry`,`Recon`,`Artillery`,`Motorized`],class:0,damage:[8,8],armor:0.2,health:80,morale:1,num:500,speed:3.25,artillery:false,engineer:false,recon:false},
        {name:`Engineer`,unitType:[`Engineer`],class:0,damage:[6,4],armor:0,health:75,morale:1,num:600,speed:1,artillery:false,engineer:true,recon:false},
        {name:`Motorized Engineer`,unitType:[`Engineer`,`Motorized`],class:0,damage:[6,4],armor:0,health:75,morale:1,num:600,speed:2.5,artillery:false,engineer:true,recon:false},
        {name:`Anti-Tank`,unitType:[`Anti-Tank`],class:2,damage:[2,24],armor:0.1,health:40,morale:1,num:20,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Motorized Anti-Tank`,unitType:[`Anti-Tank`,`Motorized`],class:2,damage:[2,24],armor:0.1,health:40,morale:1,num:20,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Flak`,unitType:[`Anti-Air`],class:2,damage:[6,30],armor:0.1,health:20,morale:1,num:20,speed:0.8,artillery:true,engineer:false,recon:false},
        {name:`Motorized Flak`,unitType:[`Anti-Air`,`Motorized`],class:2,damage:[6,30],armor:0.1,health:20,morale:1,num:20,speed:2,artillery:true,engineer:false,recon:false},//40

        {name:`Weaker Motorized Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:75,morale:1,num:600,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Armed Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[11,2],armor:0,health:100,morale:1,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Reinforced Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,3],armor:0.1,health:100,morale:1,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Small Fast Artillery`,unitType:[`Artillery`],class:2,damage:[8,14],armor:0.4,health:12,morale:0.8,num:12,speed:0.85,artillery:true,engineer:false,recon:false},
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

        {name:`Superior`},
    ],unitLevel:[
        {name:`Division`,symbol:`XX`,size:[44,44,44]},
        {name:`Brigade`,symbol:`X`,size:[40,36,36]},
        {name:`Regiment`,symbol:`III`,size:[34,34,34]},
        {name:`Battalion`,symbol:`II`,size:[28,28,28]},
        {name:`Company`,symbol:`I`,size:[24,24,24]},
    ],map:[
        {
            name:[`Battle of Mersa Matruh`,`Base`],
            term:[`main`],
            city:[
                {name:`Abar el Kanayis`,owner:2,type:0,pos:[96,932]},
                {name:`Ragabet Mastura`,owner:0,type:1,pos:[139,612]},
                {name:`Bir el Hukuma`,owner:2,type:0,pos:[373,700]},
                {name:`Qaryet Riguh`,owner:1,type:0,pos:[407,381]},
                {name:`Zawyet Umm el Rakham`,owner:1,type:1,pos:[522,17]},
                {name:`Qaryet el Qibashi`,owner:2,type:0,pos:[715,83]},
                {name:`Minqar Sidi Hamza`,owner:2,type:0,pos:[722,728]},
                {name:`Charing Cross`,owner:2,type:0,pos:[747,342]},
                {name:`Bir Sidi Hamza`,owner:2,type:0,pos:[769,837]},
                {name:`Qaryet el Lahamiya`,owner:2,type:0,pos:[802,484]},

                {name:`Bir Karima`,owner:2,type:0,pos:[847,1046]},
                {name:`Minqar Abu Gabr`,owner:2,type:0,pos:[983,570]},
                {name:`Mersa Matruh`,owner:2,type:1,pos:[987,114]},
                {name:`Minqar Qaim`,owner:2,type:0,pos:[993,930]},
                {name:`Bir Khalda`,owner:2,type:0,pos:[1018,1241]},
                {name:`Ras Alam el Rum`,owner:2,type:0,pos:[1179,102]},
                {name:`Bir Sarahna`,owner:2,type:0,pos:[1217,723]},
                {name:`Bir Abu Batta`,owner:2,type:0,pos:[1212,961]},
                {name:`Bir Shineina`,owner:2,type:0,pos:[1267,833]},
                {name:`Gerawla`,owner:2,type:0,pos:[1281,388]},
                
                {name:`Ras Hawala`,owner:2,type:0,pos:[1605,468]},
                {name:`Bir el Wisheika`,owner:2,type:0,pos:[1742,1067]},
                {name:`Maaten Baggush`,owner:2,type:0,pos:[1844,545]},
                {name:`Qaryet Abu Khashim Ummu`,owner:2,type:0,pos:[2109,1064]},
                {name:`Ras el Kanayis`,owner:2,type:0,pos:[2240,449]},
                {name:`Fuka`,owner:2,type:1,pos:[2299,719]},
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
                {name:`British`,term:`britain`,player:2,quality:0.95},
                {name:`New Zealand`,term:`new zealand`,player:2,quality:1.05},
                {name:`South African`,term:`south africa`,player:2,quality:0.95},
                {name:`Polish`,term:`poland`,player:2,quality:1},
                {name:`Australian`,term:`australia`,player:2,quality:1.05},
                {name:`Czechoslovak`,term:`czechoslovakia`,player:2,quality:1},
                {name:`Māori`,term:`maori`,player:2,quality:1.05},
                {name:`Indian`,term:`india`,player:2,quality:0.9},
                {name:`French`,term:`french`,player:2,quality:1.1},
                {name:`German`,term:`germany`,player:0,quality:1.15},
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
                    name:`Battle of Mersa Matruh`,
                    battalions:[[32],[13,19]],bonus:false,partition:[[0],[1],[2]],pick:false,
                    unit:[
                        {
                            level:0,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:`5th Indian Division`,name:`5`,designation:``,commander:`Briggs`,icon:`5id`,
                            pos:[983,570],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`29th Indian Infantry Brigade`,name:`29`,designation:``,commander:`Reid`,icon:`5id`,
                                    pos:[722,728],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`,`Motorized`],team:`Indian`,
                                            desc:`Leathercol`,name:`Leathercol`,designation:``,commander:`Leatherdale`,icon:`5id`,
                                            pos:[538,503],
                                            elements:[
                                                {level:3,type:`Weaker Motorized Infantry`,team:`Indian`,desc:`Leathercol`,name:`Leathercol`,designation:``,commander:`Leatherdale`},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`Indian`,
                                            desc:`Gleecol`,name:`Gleecol`,designation:``,commander:`Gleeson`,icon:`5id`,
                                            pos:[373,700],
                                            elements:[
                                                {level:3,type:`Weaker Motorized Infantry`,team:`Indian`,desc:`Gleecol`,name:`Gleecol`,designation:``,commander:`Gleeson`},
                                            ],
                                        },
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`South African`,
                                    desc:`1st South African Infantry Brigade`,name:`1`,designation:``,commander:`Kriegler`,icon:`1sa`,
                                    pos:[1281,388],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Duke of Edinburgh's Own Rifles`,name:`1`,designation:`Duke of\nEdinburgh`,commander:`Seneschall`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Royal Natal Carabineers`,name:`1`,designation:`Royal\nNatal`,commander:`Hay`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Transvaal Scottish Regiment`,name:`1`,designation:`Transvaal\nScottish`,commander:`Smitheman`},
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:[`1st "Cape" Battalion, South African Artillery Corps`,`1st "Cape" South African Field Regiment`],name:`1`,designation:``,commander:``},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:`10th Indian Division`,name:`10`,designation:``,commander:`Nichols`,icon:`10id`,
                            pos:[987,124],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`25th Indian Infantry Brigade`,name:`25`,designation:``,commander:`Mountain`,icon:`10id`,
                                    pos:[735,108],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`1st Battalion, 5th Mahratta Light Infantry`,name:`1/5`,designation:`Mahratta`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`2nd Battalion, 11th Sikh Regiment`,name:`2/11`,designation:`Sikh`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`Indian`,desc:`3rd Battalion, 9th Jat Regiment`,name:`3/9`,designation:`Jat`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`157th Battalion, Royal Artillery`,`157th Field Regiment, Royal Artillery`],name:`157`,designation:``,commander:``},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Heavy`],team:`British`,
                                    desc:[`8th Battalion, Royal Tank Regiment`,`8th Royal Tank Regiment`],name:`8`,designation:`Royal Tank\nRegiment`,commander:`Kilkelly`,icon:`10id`,
                                    pos:[670,220],
                                    elements:[
                                        {level:3,type:`Slow Tank`,team:`British`,desc:[`8th Battalion, Royal Tank Regiment`,`8th Royal Tank Regiment`],name:`8`,designation:`Royal Tank\nRegiment`,commander:`Kilkelly`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`South African`,
                                    desc:[`6th South African Armored Car Battalion`,`6th South African Armoured Car Regiment`],name:`6`,designation:``,commander:`Short`,icon:`10id`,
                                    pos:[717,342],
                                    elements:[
                                        {level:3,type:`Armored Car`,team:`South African`,desc:[`6th South African Armored Car Battalion`,`6th South African Armoured Car Regiment`],name:`6`,designation:``,commander:`Short`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`],team:`Māori`,
                                    desc:`28th "Māori" New Zealand Infantry Battalion`,name:`28`,designation:``,commander:`Dittmer`,icon:`2nz`,
                                    pos:[817,474],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`Māori`,desc:`28th "Māori" New Zealand Infantry Battalion`,name:`28`,designation:``,commander:`Dittmer`},
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
                                    desc:[`4th Armored Brigade`,`4th Armoured Brigade`],name:`4`,designation:``,commander:`Fisher`,icon:`7a`,
                                    pos:[250,1060],
                                    elements:[
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`3rd Battalion, Royal Tank Regiment`,`3rd Royal Tank Regiment`],name:`3`,designation:`Royal Tank\nRegiment`,commander:``},
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`5th Battalion, Royal Tank Regiment`,`5th Royal Tank Regiment`],name:`5`,designation:`Royal Tank\nRegiment`,commander:`Uniacke`},
                                        {level:3,type:`Superior Tank`,team:`British`,desc:`8th Irish Hussars`,name:`8`,designation:`Irish\nHussars`,commander:`Kilkelly`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`1st Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:``,commander:``},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Motorized`],team:`British`,
                                    desc:`7th Motor Brigade`,name:`7`,designation:``,commander:`Garmoyle`,icon:`7a`,
                                    pos:[400,920],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, King's Royal Rifle Corps`,name:`1`,designation:`King's Royal\nRifle Corps`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Rifle Brigade`,name:`2`,designation:`Rifle\nBrigade`,commander:``},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`London Rifle Brigade`,name:`L`,designation:`Rifle\nBrigade`,commander:``},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`51st (Midland) Battalion, Royal Artillery`,`51st (Midland) Field Regiment, Royal Artillery`],name:`51`,designation:`Midland`,commander:``},
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
                                        {level:3,type:`Motorized Artillery`,team:`New Zealand`,desc:[`6th New Zealand Artillery Battalion`,`6th New Zealand Field Regiment`],name:`6`,designation:``,commander:`Weir`},
                                        {level:3,type:`Motorized Anti-Tank`,team:`New Zealand`,desc:[`7th New Zealand Anti-Tank Battalion`,`7th New Zealand Anti-Tank Regiment`],name:`7`,designation:``,commander:`Oakes`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,"Machine Gun"],team:`New Zealand`,
                                    desc:`27th New Zealand Machine Gun Battalion`,name:`27`,designation:``,commander:`Gwilliam`,icon:`2nz`,
                                    pos:[1008,870],
                                    elements:[
                                        {level:3,type:`Motorized Machine Gun`,team:`New Zealand`,desc:`27th New Zealand Machine Gun Battalion`,name:`27`,designation:``,commander:`Gwilliam`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`60th Infantry Division "Sabratha"`,`60ª Divisione di fanteria "Sabratha"`],name:`60`,designation:`Sabratha`,commander:`Soldarelli`,icon:`sabratha`,
                            pos:[392,45],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`85th Infantry Regiment`,`85° Reggimento di fanteria "Sabratha"`],name:`85`,designation:`Sabratha`,commander:`Grimaldi`,icon:`sabratha`,
                                    pos:[522,50],
                                    elements:[
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`1st Battalion, 85th Infantry Regiment`,`I battaglione fucilieri, 85° Reggimento di fanteria motorizzata "Sabratha"`],name:`1`,designation:`85`,commander:`Angelozzi`},
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`2nd Battalion, 85th Infantry Regiment`,`II battaglione fucilieri, 85° Reggimento di fanteria motorizzata "Sabratha"`],name:`2`,designation:`85`,commander:`Morosini`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`86th Infantry Regiment`,`86° Reggimento di fanteria "Sabratha"`],name:`86`,designation:`Sabratha`,commander:`Castrignanò`,icon:`sabratha`,
                                    pos:[472,160],
                                    elements:[
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`1st Battalion, 86th Infantry Regiment`,`I battaglione fucilieri, 86° Reggimento di fanteria motorizzata "Sabratha"`],name:`1`,designation:`86`,commander:`Velosa`},
                                        {level:3,type:`Weak Infantry`,team:`Italian`,desc:[`2nd Battalion, 86th Infantry Regiment`,`II battaglione fucilieri, 86° Reggimento di fanteria motorizzata "Sabratha"`],name:`2`,designation:`86`,commander:`Piana`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`Artillery Group "Sabratha"`,`Raggruppamento artiglieria "Sabratha"`],name:`RA`,designation:`Sabratha`,commander:`Ferrario`,icon:`savona`,
                                    pos:[340,123],
                                    elements:[
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`283rd Group, Artillery Group "Sabratha"`,`CCLXXXIII gruppo, Raggruppamento artiglieria "Sabratha"`],name:`283`,designation:`Sabratha`,commander:`Parrella`},
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`284th Group, Artillery Group "Sabratha"`,`CCLXXXIV gruppo, Raggruppamento artiglieria "Sabratha"`],name:`284`,designation:`Sabratha`,commander:`Rocchi`},
                                    ],
                                },{
                                    level:3,type:[`Engineer`],team:`Italian`,
                                    desc:[`60th Mixed Engineer Battalion`,`LX battaglione misto genio`],name:`60`,designation:``,commander:`Giuliani`,icon:`sabratha`,
                                    pos:[246,67],
                                    elements:[
                                        {level:3,type:`Engineer`,team:`Italian`,desc:[`60th Mixed Engineer Battalion`,`LX battaglione misto genio`],name:`60`,designation:``,commander:`Giuliani`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`102nd Infantry Division "Trento"`,`102ª Divisione di fanteria motorizzata "Trento"`],name:`102`,designation:`Trento`,commander:`Scotti`,icon:`trento`,
                            pos:[228,298],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`61st Infantry Regiment`,`61° Reggimento di fanteria motorizzata "Sicilia"`],name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[427,271],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 61st Infantry Regiment`,`I battaglione fucilieri, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 61st Infantry Regiment`,`II battaglione fucilieri, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`62nd Infantry Regiment`,`62° Reggimento di fanteria motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[407,381],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 62nd Infantry Regiment`,`I battaglione fucilieri, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 62nd Infantry Regiment`,`II battaglione fucilieri, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`46th Artillery Regiment`,`46° Reggimento artiglieria "Trento"`],name:`46`,designation:`Trento`,commander:`Grati`,icon:`savona`,
                                    pos:[328,338],
                                    elements:[
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`1st Group, 46th Artillery Regiment`,`I gruppo, 46° Reggimento artiglieria "Trento"`],name:`1`,designation:`46`,commander:`Giannimi`},
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`3rd Group, 46th Artillery Regiment`,`III gruppo, 46° Reggimento artiglieria "Trento"`],name:`3`,designation:`46`,commander:`Salvo`},
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`4th Group, 46th Artillery Regiment`,`IV gruppo, 46° Reggimento artiglieria "Trento"`],name:`4`,designation:`46`,commander:`Gavazzi`},
                                    ],
                                },{
                                    level:3,type:[`Engineer`],team:`Italian`,
                                    desc:[`51st Mixed Engineer Battalion`,`LI battaglione misto genio`],name:`51`,designation:``,commander:`Baruffini`,icon:`trento`,
                                    pos:[255,222],
                                    elements:[
                                        {level:3,type:`Engineer`,team:`Italian`,desc:[`51st Mixed Engineer Battalion`,`LI battaglione misto genio`],name:`51`,designation:``,commander:`Baruffini`},
                                    ],
                                },
                            ],
                        },{
                            level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                            desc:[`Infantry Regiment "Giovani Fascisti"`,`Reggimento di fanteria "Giovani Fascisti"`],name:`GF`,designation:``,commander:`Nannini`,icon:``,
                            pos:[78,767],
                            elements:[
                                {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`1st Battalion, Infantry Regiment "Giovani Fascisti"`,`I battaglione fucilieri, Reggimento di fanteria "Giovani Fascisti"`],name:`1`,designation:`Giovani\nFascisti`,commander:`Balisti`},
                                {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`2nd Battalion, Infantry Regiment "Giovani Fascisti"`,`II battaglione fucilieri, Reggimento di fanteria "Giovani Fascisti"`],name:`2`,designation:`Giovani\nFascisti`,commander:`Benedetti`},
                            ],
                        },{
                            level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                            desc:[`7th Bersaglieri Regiment`,`7° Reggimento Bersaglieri`],name:`7`,designation:`Bersaglieri`,commander:`Scirocco`,icon:`trento`,
                            pos:[158,777],
                            elements:[
                                {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`10th Bersaglieri Battalion`,`10° Battaglione Bersaglieri`],name:`10`,designation:`Bersaglieri`,commander:`Adolfato`},
                                {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`11th Bersaglieri Battalion`,`11° Battaglione Bersaglieri`],name:`11`,designation:`Bersaglieri`,commander:`Straziota`},
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
                                        {level:3,type:`Motorized Engineer`,team:`German`,desc:[`33rd Engineer Battalion`,`Panzer-Pionier-Bataillon 33`],name:`33`,designation:``,commander:`Oberembt`}, 
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`115th Rifle Regiment`,`Schützen-Regiment 115`],name:`115`,designation:``,commander:`Zincke`,icon:`15pz`,
                                    pos:[315,600],
                                    elements:[
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`1st Battalion, 115th Rifle Regiment`,`I./Schützen-Regiment 115`],name:`1`,designation:`115`,commander:`von Grolmann`},
                                        {level:3,type:`Motorized Armed Infantry`,team:`German`,desc:[`3rd Battalion, 115th Rifle Regiment`,`III./Schützen-Regiment 115`],name:`3`,designation:`115`,commander:`Finke`},
                                        {level:3,type:`Motorized Anti-Tank`,team:`German`,desc:[`33rd Anti-Tank Battalion`,`Panzerjäger-Abteilung 33`],name:`33`,designation:``,commander:`Beil`}, 
                                    ],
                                },{
                                    level:2,type:[`Artillery`,`Motorized`],team:`German`,
                                    desc:[`33rd Artillery Regiment`,`Artillerie-Regiment (mot.) 33`],name:`33`,designation:``,commander:`Crasemann`,icon:`15pz`,
                                    pos:[165,600],
                                    elements:[
                                        {level:3,type:`Motorized Artillery`,team:`German`,desc:[`1st Battalion, 33rd Artillery Regiment`,`I./Artillerie-Regiment (mot.) 33`],name:`1`,designation:`33`,commander:`Mayer`},
                                        {level:3,type:`Motorized Artillery`,team:`German`,desc:[`2nd Battalion, 33rd Artillery Regiment`,`II./Artillerie-Regiment (mot.) 33`],name:`2`,designation:`33`,commander:`Mesmer`},
                                        {level:3,type:`Motorized Artillery`,team:`German`,desc:[`3rd Battalion, 33rd Artillery Regiment`,`III./Artillerie-Regiment (mot.) 33`],name:`3`,designation:`33`,commander:`Bickel`},
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
                            desc:`90th Light "Afrika" Division`,name:`A`,designation:`Light`,commander:`Kleemann`,icon:`90l`,
                            pos:[80,520],
                            elements:[
                                {
                                    level:2,type:[`Infantry`,`Semi-Motorized`],team:`German`,
                                    desc:[`200th Light Infantry Regiment`,`Leichtes Infanterie-Regiment 200`],name:`200`,designation:``,commander:`Geißler`,icon:`90l`,
                                    pos:[240,520],
                                    elements:[
                                        {level:3,type:`Motorcycle Infantry`,team:`German`,desc:[`1st Battalion, 200th Light Infantry Regiment`,`I./Leichtes Infanterie-Regiment 200`],name:`1`,designation:`200`,commander:`Ehle`}, 
                                        {level:3,type:`Motorized Infantry`,team:`German`,desc:[`2nd Battalion, 200th Light Infantry Regiment`,`II./Leichtes Infanterie-Regiment 200`],name:`2`,designation:`200`,commander:`Panzenhagen`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`German`,
                                    desc:[`288th "Afrika" Grenadier Regiment`,`Afrika-Grenadier-Regiment 288`],name:`288`,designation:``,commander:`Menton`,icon:`90l`,
                                    pos:[165,520],
                                    elements:[
                                        {level:3,type:`Motorized Reinforced Infantry`,team:`German`,desc:[`1st Battalion, 288th "Afrika" Grenadier Regiment`,`I./Afrika-Grenadier-Regiment 288`],name:`1`,designation:`288`,commander:`Daumiller`},
                                        {level:3,type:`Motorized Reinforced Infantry`,team:`German`,desc:[`2nd Battalion, 288th "Afrika" Grenadier Regiment`,`II./Afrika-Grenadier-Regiment 288`],name:`2`,designation:`288`,commander:`Borhardt`},
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
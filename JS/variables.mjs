export var types={
    city:[],
    connect:[],
    team:[],
    unit:[],
    elementType:[
        {name:`Infantry`,unitType:[`Infantry`],damage:[],armor:0,health:0,speed:0},//0
        {name:`Machine Gun`,unitType:[`Infantry`,`Machine Gun`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorized Infantry`,unitType:[`Infantry`,`Motorized`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorized Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorized Bersaglieri`,unitType:[`Infantry`,`Motorized`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorized Militia`,unitType:[`Infantry`,`Motorized`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorcycle Infantry`,unitType:[`Infantry`,`Motorcycle`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorcycle Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorcycle`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorcycle Bersaglieri`,unitType:['Infantry',`Motorcycle`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorcycle Police`,unitType:[`Infantry`,`Motorcycle`],damage:[],armor:0,health:0,speed:0},
        {name:`Light Tank`,unitType:[`Tank`,`Light`],damage:[],armor:0,health:0,speed:0},//10
        {name:`Medium Tank`,unitType:[`Tank`],damage:[],armor:0,health:0,speed:0},
        {name:`Armored Car`,unitType:[`Tank`,`Recon`],damage:[],armor:0,health:0,speed:0},
        {name:`Artillery`,unitType:[`Artillery`],damage:[],armor:0,health:0,speed:0},
        {name:`Motorized Artillery`,unitType:[`Artillery`,`Motorized`],damage:[],armor:0,health:0,speed:0},
        {name:`Mixed Support`,unitType:[`Artillery`,`Machine Gun`],damage:[],armor:0,health:0,speed:0},
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
                {name:`Gazala`,owner:0,type:1,pos:[323,17]},
                {name:`Tobruk`,owner:1,type:0,pos:[916,175]},
                {name:`Alem Hamza`,owner:0,type:0,pos:[92,172]},
                {name:`Acroma`,owner:0,type:0,pos:[581,198]},
                {name:`Gambut`,owner:0,type:0,pos:[1554,434]},
                {name:`El Duda`,owner:0,type:0,pos:[1072,461]},
                {name:`El Adem`,owner:0,type:0,pos:[827,474]},
                {name:`Zaafran`,owner:0,type:0,pos:[1243,482]},
                {name:`Sidi Rezegh`,owner:0,type:0,pos:[1141,566]},
                {name:`Bir el Chleta`,owner:0,type:0,pos:[1432,570]},
                {name:`Bir el Menastir`,owner:0,type:0,pos:[2098,593]},
                {name:`Bir Bu Creimisa`,owner:0,type:0,pos:[1028,617]},
                {name:`Gasr el Arid`,owner:0,type:0,pos:[1634,628]},
                {name:`Bardia`,owner:0,type:0,pos:[2284,671]},
                {name:`Bir el Haleizim`,owner:0,type:0,pos:[1338,685]},
                {name:`Bir el Hariga`,owner:0,type:0,pos:[1858,722]},
                {name:`Bir el Haiad`,owner:0,type:0,pos:[993,728]},
                {name:`Sidi Azeiz`,owner:0,type:0,pos:[2069,780]},
                {name:`Bir Hacheim`,owner:0,type:0,pos:[191,795]},
                {name:`Musaid`,owner:0,type:0,pos:[2347,867]},
                {name:`Fort Capuzzo`,owner:0,type:0,pos:[2245,937]},
                {name:`Taieb el Esem`,owner:0,type:0,pos:[1222,959]},
                {name:`Bir el Gubi`,owner:0,type:0,pos:[946,961]},
                {name:`Sollum`,owner:0,type:0,pos:[2358,967]},
                {name:`Bir Ghirba`,owner:0,type:0,pos:[2104,1017]},
                {name:`Buq Buq`,owner:1,type:1,pos:[2896,1027]},
                {name:`Halfaya Pass`,owner:0,type:0,pos:[2405,1069]},
                {name:`Bir Bu Deheua`,owner:0,type:0,pos:[1895,1124]},
                {name:`Libyan Omar`,owner:0,type:0,pos:[2023,1136]},
                {name:`Gabr Saleh`,owner:0,type:0,pos:[1386,1151]},
                {name:`Sidi Omar`,owner:0,type:0,pos:[2005,1197]},
                {name:`Sidi Suleiman`,owner:1,type:0,pos:[2281,1230]},
                {name:`Bir Gibni`,owner:0,type:0,pos:[1737,1251]},
                {name:`Gasr el Abid`,owner:0,type:0,pos:[1932,1386]},
                {name:`El Cuasc`,owner:0,type:0,pos:[1062,1469]},
                {name:`Sofafi`,owner:1,type:0,pos:[2937,1420]},
            ],connect:[
                {name:[``,``]},
            ],team:[
                {name:`British`,term:`britain`,side:0,player:0,quality:1},
                {name:`New Zealand`,term:`new zealand`,side:0,player:0,quality:1.05},
                {name:`South African`,term:`south africa`,side:0,player:0,quality:0.95},
                {name:`Polish`,term:`poland`,side:0,player:0,quality:1},
                {name:`Australian`,term:`australia`,side:0,player:0,quality:1.05},
                {name:`Czechoslovak`,term:`czechoslovakia`,side:0,player:0,quality:1},
                {name:`Māori`,term:`maori`,side:0,player:0,quality:1.05},
                {name:`German`,term:`germany`,side:1,player:1,quality:1.1},
                {name:`Italian`,term:`italy`,side:1,player:2,quality:0.8},
            ],unit:[
                {
                    level:0,types:[`Tank`],team:`British`,
                    desc:`7th Armoured Division`,name:`7`,designation:``,commander:`Gott`,icon:`7a`,
                    pos:[2700,1420],
                    elements:[
                        {
                            level:1,types:[`Tank`,`Light`],team:`British`,
                            desc:`4th Armoured Brigade`,name:`4`,designation:``,commander:`Gatehouse`,icon:`7a`,
                            pos:[2380,1420],
                            elements:[`Light Tank`,`Light Tank`,`Light Tank`,`Motorized Infantry`,`Motorized Artillery`],
                        },{
                            level:1,types:[`Tank`],team:`British`,
                            desc:`7th Armoured Brigade`,name:`7`,designation:``,commander:`Davy`,icon:`7a`,
                            pos:[2485,1420],
                            elements:[`Medium Tank`,`Medium Tank`,`Medium Tank`],
                        },{
                            level:1,types:[`Infantry`,`Artillery`,`Motorized`],team:`British`,
                            desc:`7th Support Group`,name:`7`,designation:``,commander:`Campbell`,icon:`7a`,
                            pos:[2590,1420],
                            elements:[`Motorized Infantry`,`Motorized Infantry`,`Motorized Artillery`,`Motorized Artillery`],
                        },{
                            level:3,types:[`Tank`,`Recon`],team:`British`,
                            desc:`1st King's Dragoon Guards`,name:`1`,designation:`KDG`,commander:``,icon:`7a`,
                            pos:[1932,1386],
                            elements:[`Armored Car`],
                        },
                    ],
                },{
                    level:0,types:[`Infantry`,`Motorized`],team:`South African`,
                    desc:`1st South African Infantry Division`,name:`1`,designation:``,commander:`Brink`,icon:`1sa`,
                    pos:[2750,1520],
                    elements:[
                        {
                            level:1,types:[`Infantry`,`Motorized`],team:`South African`,
                            desc:`1st South African Infantry Brigade`,name:`1`,designation:``,commander:`Pienaar`,icon:`1sa`,
                            pos:[2535,1520],
                            elements:[`Motorized Infantry`,`Motorized Infantry`,`Motorized Infantry`,`Motorized Artillery`],
                        },{
                            level:1,types:[`Infantry`,`Motorized`],team:`South African`,
                            desc:`5th South African Infantry Brigade`,name:`5`,designation:``,commander:`Armstrong`,icon:`1sa`,
                            pos:[2640,1520],
                            elements:[`Motorized Infantry`,`Motorized Infantry`,`Motorized Infantry`,`Motorized Artillery`],
                        },
                    ],
                },{
                    level:0,types:[`Infantry`,`Motorized`],team:`New Zealand`,
                    desc:`2nd New Zealand Division`,name:`2`,designation:``,commander:`Freyberg`,icon:`2nz`,
                    pos:[2800,1150],
                    elements:[
                        {
                            level:1,types:[`Infantry`,`Motorized`],team:`New Zealand`,
                            desc:`4th New Zealand Infantry Brigade`,name:`4`,designation:``,commander:`Inglis`,icon:`2nz`,
                            pos:[2535,1105],
                            elements:[`Motorized Infantry`,`Motorized Infantry`,`Motorized Infantry`],
                        },{
                            level:1,types:[`Infantry`,`Motorized`],team:`New Zealand`,
                            desc:`5th New Zealand Infantry Brigade`,name:`5`,designation:``,commander:`Hargest`,icon:`2nz`,
                            pos:[2535,1210],
                            elements:[`Motorized Infantry`,`Motorized Infantry`,`Motorized Infantry`],
                        },{
                            level:1,types:[`Infantry`,`Motorized`],team:`New Zealand`,
                            desc:`6th New Zealand Infantry Brigade`,name:`6`,designation:``,commander:`Barroughclough`,icon:`2nz`,
                            pos:[2535,1315],
                            elements:[`Motorized Infantry`,`Motorized Infantry`,`Motorized Infantry`],
                        },{
                            level:1,types:[`Artillery`,`Motorized`],team:`New Zealand`,
                            desc:`2nd New Zealand Field Brigade`,name:`2`,designation:``,commander:`Queree`,icon:`2nz`,
                            pos:[2645,1210],
                            elements:[`Motorized Artillery`,`Motorized Artillery`,`Motorized Artillery`,`Motorized Machine Gun`],
                        },{
                            level:3,types:[`Infantry`,'Machine Gun'],team:`New Zealand`,
                            desc:`27th New Zealand Machine Gun Battalion`,name:`27`,designation:``,commander:`Gwilliam`,icon:`2nz`,
                            pos:[2635,1115],
                            elements:[`Motorized Machine Gun`],
                        },{
                            level:3,types:[`Infantry`,`Motorized`],team:`Māori`,
                            desc:`28th New Zealand Infantry Battalion`,name:`28`,designation:``,commander:`Dittmer`,icon:`2nz`,
                            pos:[2635,1305],
                            elements:[`Motorized Infantry`],
                        },
                    ],
                },{
                    level:0,types:[`Infantry`],team:`British`,
                    desc:`70th Infantry Division`,name:`70`,designation:``,commander:`Scobie`,icon:`70`,
                    pos:[916,175],
                    elements:[
                        {
                            level:1,types:[`Infantry`],team:`British`,
                            desc:`14th Infantry Brigade`,name:`14`,designation:``,commander:`Chappell`,icon:`70`,
                            pos:[965,250],
                            elements:[`Infantry`,`Infantry`,`Infantry`],
                        },{
                            level:1,types:[`Infantry`],team:`British`,
                            desc:`23rd Infantry Brigade`,name:`23`,designation:``,commander:`Cox`,icon:`70`,
                            pos:[850,265],
                            elements:[`Infantry`,`Infantry`,`Infantry`],
                        },{
                            level:1,types:[`Infantry`],team:`Polish`,
                            desc:`Polish Independent Carpathian Brigade`,name:`C`,designation:``,commander:`Kopański`,icon:`70`,
                            pos:[770,150],
                            elements:[`Infantry`,`Infantry`,`Infantry`,{types:`Infantry`,team:`Australian`},{types:`Infantry`,team:`Czechoslovak`},`Artillery`,`Machine Gun`],
                        },
                    ],
                },{
                    level:0,types:[`Tank`],team:`German`,
                    desc:`15th Panzer Division`,name:`15`,designation:``,commander:`Neumann-Silkow`,icon:`15pz`,
                    pos:[1554,434],
                    elements:[
                        {
                            level:2,types:[`Tank`],team:`German`,
                            desc:`8th Panzer Regiment`,name:`8`,designation:``,commander:`Cramer`,icon:`15pz`,
                            pos:[1432,570],
                            elements:[`Medium Tank`,`Medium Tank`],
                        },{
                            level:2,types:[`Infantry`,`Motorized`],team:`German`,
                            desc:`115th Infantry Regiment`,name:`115`,designation:``,commander:`Zintel`,icon:`15pz`,
                            pos:[1634,628],
                            elements:[`Motorized Infantry`,`Motorized Infantry`],
                        },{
                            level:2,types:[`Artillery`,`Motorized`],team:`German`,
                            desc:`33rd Artillery Regiment`,name:`33`,designation:``,commander:`Crasemann`,icon:`15pz`,
                            pos:[1243,482],
                            elements:[`Motorized Artillery`,`Motorized Artillery`,`Motorized Artillery`,`Motorized Artillery`],
                        },{
                            level:3,types:[`Infantry`,`Motorcycle`],team:`German`,
                            desc:`15th Motorcycle Battalion`,name:`15`,designation:``,commander:`Ehle`,icon:`15pz`,
                            pos:[1533,599],
                            elements:[`Motorcycle Infantry`],
                        },{
                            level:3,types:[`Tank`,`Recon`],team:`German`,
                            desc:`33rd Reconnaissance Battalion`,name:`33`,designation:``,commander:`Heraucourt`,icon:`15pz`,
                            pos:[1737,1251],
                            elements:[`Armored Car`],
                        },
                    ],
                },{
                    level:0,types:[`Infantry`],team:`German`,
                    desc:`Special Purpose Division 'Afrika'`,name:`A`,designation:``,commander:`Sümmermann`,icon:`90l`,
                    pos:[1072,461],
                    elements:[
                        {
                            level:2,types:[`Infantry`],team:`German`,
                            desc:`361st 'Afrika' Infantry Regiment`,name:`361`,designation:`Afrika`,commander:`Von Barby`,icon:`90l`,
                            pos:[1141,566],
                            elements:[`Infantry`,`Infantry`,`Artillery`],
                        },{
                            level:2,types:[`Infantry`,`Artillery`,`Machine Gun`],team:`German`,
                            desc:`Sonderverband 288`,name:`288`,designation:``,commander:`Menton`,icon:`90l`,
                            pos:[1025,350],
                            elements:[`Infantry`,`Mixed Support`],
                        },{
                            level:3,types:[`Infantry`],team:`German`,
                            desc:`300th Oasis Battalion`,name:`300`,designation:`Oasis`,commander:`Ennecerus`,icon:`90l`,
                            pos:[2405,1069],
                            elements:[`Infantry`],
                        },
                    ],
                },{
                    level:2,types:[`Artillery`],team:`Italian`,
                    desc:`8th Army Artillery Group`,name:`8`,designation:`Army`,commander:``,icon:``,
                    pos:[827,474],
                    elements:[`Artillery`,`Artillery`,`Artillery`,`Artillery`],
                },{
                    level:1,types:[`Infantry`,`Tank`],team:`Italian`,
                    desc:`Raggruppamento Esplorante del Corpo d'Armata di Manovra`,name:`RECAM`,designation:``,commander:``,icon:``,
                    pos:[1386,1151],
                    elements:[`Light Tank`,`Medium Tank`,`Motorized Militia`,`Motorized Militia`,`Motorcycle Police`],
                },{
                    level:0,types:[`Infantry`,'Motorized'],team:`Italian`,
                    desc:`101st Motorized Infantry Division 'Trieste'`,name:`101`,designation:`Trieste`,commander:`Piazzoni`,icon:`trieste`,
                    pos:[693,850],
                    elements:[
                        {
                            level:2,types:[`Infantry`,`Motorized`],team:`Italian`,
                            desc:`65th Motorized Infantry Regiment`,name:`65`,designation:``,commander:``,icon:`trieste`,
                            pos:[946,961],
                            elements:[`Motorized Infantry`,`Motorized Infantry`,`Motorized Infantry`],
                        },{
                            level:2,types:[`Infantry`,`Motorized`],team:`Italian`,
                            desc:`66th Motorized Infantry Regiment`,name:`66`,designation:``,commander:``,icon:`trieste`,
                            pos:[191,795],
                            elements:[`Motorized Infantry`,`Motorized Infantry`,`Motorized Infantry`],
                        },{
                            level:2,types:[`Infantry`,`Motorcycle`],team:`Italian`,
                            desc:`9th Bersaglieri Regiment`,name:`9`,designation:`Bersaglieri`,commander:``,icon:`trieste`,
                            pos:[993,728],
                            elements:[`Motorcycle Bersaglieri`,`Motorcycle Bersaglieri`,`Motorcycle Bersaglieri`,`Motorcycle Bersaglieri`,`Motorcycle Machine Gun`],
                        },
                    ],
                },{
                    level:0,types:[`Infantry`],team:`Italian`,
                    desc:`55th Infantry Division 'Savona'`,name:`55`,designation:`Savona`,commander:`Giorgis`,icon:`savona`,
                    pos:[2300,1050],
                    elements:[
                        {
                            level:2,types:[`Infantry`],team:`Italian`,
                            desc:`15th Infantry Regiment`,name:`15`,designation:``,commander:``,icon:`savona`,
                            pos:[2014,1167],
                            elements:[`Infantry`,`Infantry`,`Infantry`],
                        },{
                            level:2,types:[`Infantry`],team:`Italian`,
                            desc:`16th Infantry Regiment`,name:`16`,designation:``,commander:``,icon:`savona`,
                            pos:[2254,671],
                            elements:[`Infantry`,`Infantry`,`Infantry`],
                        },{
                            level:3,types:[`Infantry`,`Machine Gun`],team:`Italian`,
                            desc:`4th Machine Gun Battalion 'Genova Cavalleria'`,name:`4`,designation:`Genova`,commander:``,icon:`savona`,
                            pos:[2358,967],
                            elements:[`Machine Gun`],
                        },{
                            level:3,types:[`Infantry`,`Machine Gun`],team:`Italian`,
                            desc:`155th Machine Gun Battalion`,name:`155`,designation:``,commander:``,icon:`savona`,
                            pos:[2225,1190],
                            elements:[`Machine Gun`],
                        },
                    ],
                },{
                    level:0,types:[`Infantry`],team:`Italian`,
                    desc:`102nd Infantry Division 'Trento'`,name:`102`,designation:`Trento`,commander:`Stampioni`,icon:`trento`,
                    pos:[581,198],
                    elements:[
                        {
                            level:2,types:[`Infantry`],team:`Italian`,
                            desc:`61st Infantry Regiment`,name:`61`,designation:``,commander:``,icon:`trento`,
                            pos:[655,125],
                            elements:[`Infantry`,`Infantry`,`Infantry`],
                        },{
                            level:2,types:[`Infantry`],team:`Italian`,
                            desc:`62nd Infantry Regiment`,name:`62`,designation:``,commander:``,icon:`trento`,
                            pos:[745,320],
                            elements:[`Infantry`,`Infantry`,`Infantry`],
                        },{
                            level:2,types:[`Infantry`,`Motorized`],team:`Italian`,
                            desc:`7th Bersaglieri Regiment`,name:`7`,designation:`Bersaglieri`,commander:``,icon:`trento`,
                            pos:[400,250],
                            elements:[`Motorized Bersaglieri`,`Motorized Bersaglieri`],
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
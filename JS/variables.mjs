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
        {name:`Small Infantry`,unitType:[`Infantry`],class:0,damage:[10,2],armor:0,health:90,morale:1,num:700,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Oasis Infantry`,unitType:[`Oasis Infantry`],class:0,damage:[10,1],armor:0,health:125,morale:1.1,num:1000,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Light Oasis Infantry`,unitType:[`Oasis Infantry`,`Recon`],class:0,damage:[9,1],armor:0,health:70,morale:1.1,num:500,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Oasis Infantry Company`,unitType:[`Oasis Infantry`],class:0,damage:[10,1],armor:0,health:25,morale:1.1,num:200,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Machine Gun`,unitType:[`Infantry`,`Machine Gun`],class:0,damage:[12,2],armor:0,health:100,morale:1,num:800,speed:0.9,artillery:false,engineer:false,recon:false},
        {name:`Semi-Motorized Infantry`,unitType:[`Infantry`,`Semi-Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1,num:800,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Armed Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[11,2],armor:0,health:100,morale:1.05,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:100,morale:1,num:800,speed:2.25,artillery:false,engineer:false,recon:false},//10
        {name:`Motorized Reinforced Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,3],armor:0.1,health:100,morale:1.05,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Heavy Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:125,morale:1,num:1000,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Motorized Engineer Machine Gun`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,4],armor:0,health:125,morale:1,num:1000,speed:2.25,artillery:false,engineer:true,recon:false},
        {name:`Motorized Bersaglieri`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1.2,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Machine Gun Bersaglieri`,unitType:[`Infantry`,`Machine Gun`,`Motorized`],class:0,damage:[12,2],armor:0,health:100,morale:1.2,num:800,speed:2.25,artillery:false,engineer:false,recon:false},
        {name:`Motorized Militia`,unitType:[`Infantry`,`Motorized`],class:0,damage:[10,2],armor:0,health:100,morale:1.1,num:800,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Infantry Company`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[10,1],armor:0,health:25,morale:1,num:200,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Infantry`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[10,1],armor:0,health:100,morale:1,num:800,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Armed Infantry`,unitType:[`Infantry`,`Motorized`],class:0,damage:[11,1],armor:0,health:100,morale:1.05,num:800,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Motorcycle Bersaglieri`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[10,1],armor:0,health:100,morale:1.2,num:800,speed:3,artillery:false,engineer:false,recon:false},//20
        {name:`Motorcycle Police`,unitType:[`Infantry`,`Motorcycle`],class:0,damage:[8,1],armor:0.2,health:100,morale:1,num:600,speed:3,artillery:false,engineer:false,recon:false},
        {name:`Security Tank Company`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:10,morale:0.6,num:9,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Light Tank`,unitType:[`Tank`,`Light`],class:1,damage:[12,6],armor:0.6,health:60,morale:0.5,num:50,speed:2,artillery:false,engineer:false,recon:false},
        {name:`Security Tank`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:40,morale:0.6,num:33,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Medium Tank`,unitType:[`Tank`],class:1,damage:[12,12],armor:0.8,health:60,morale:0.6,num:50,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Heavy Tank`,unitType:[`Tank`,`Heavy`],class:1,damage:[15,12],armor:1,health:75,morale:0.6,num:50,speed:1.125,artillery:false,engineer:false,recon:false},
        {name:`Slow Tank`,unitType:[`Tank`,`Heavy`],class:1,damage:[12,10],armor:1,health:75,morale:0.6,num:50,speed:1.125,artillery:false,engineer:false,recon:false},
        {name:`Superior Tank`,unitType:[`Tank`,`Superior`],class:1,damage:[15,15],armor:0.8,health:60,morale:0.75,num:50,speed:1.5,artillery:false,engineer:false,recon:false},
        {name:`Armored Car`,unitType:[`Tank`,`Recon`,`Tracked`],class:1,damage:[6,1],armor:0.8,health:50,morale:0.5,num:50,speed:3,artillery:false,engineer:false,recon:true},
        {name:`Armored Car Company`,unitType:[`Tank`,`Recon`,`Tracked`],class:1,damage:[6,1],armor:0.8,health:20,morale:0.5,num:20,speed:3,artillery:false,engineer:false,recon:true},//30
        {name:`Light Artillery`,unitType:[`Light Artillery`],class:2,damage:[8,10],armor:0.2,health:20,morale:0.6,num:24,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Coastal Artillery`,unitType:[`Light Artillery`],class:2,damage:[6,8],armor:0.2,health:12,morale:0.6,num:12,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Small Artillery`,unitType:[`Artillery`],class:2,damage:[6,10],armor:0.4,health:12,morale:0.8,num:12,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Small Fast Artillery`,unitType:[`Artillery`],class:2,damage:[6,10],armor:0.4,health:12,morale:0.8,num:12,speed:0.85,artillery:true,engineer:false,recon:false},
        {name:`Half Artillery`,unitType:[`Artillery`],class:2,damage:[6,12],armor:0.4,health:15,morale:0.8,num:8,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Artillery`,unitType:[`Artillery`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:24,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Concentrated Artillery`,unitType:[`Artillery`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:12,speed:0.7,artillery:true,engineer:false,recon:false},
        {name:`Heavy Artillery`,unitType:[`Artillery`,`Machine Gun`],class:2,damage:[10,20],armor:0.5,health:20,morale:0.8,num:12,speed:0.6,artillery:true,engineer:false,recon:false},
        {name:`Semi-Motorized Artillery`,unitType:[`Artillery`,`Semi-Motorized`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:12,speed:1.05,artillery:true,engineer:false,recon:false},
        {name:`Motorized Light Artillery`,unitType:[`Light Artillery`,`Motorized`],class:2,damage:[4,10],armor:0.2,health:20,morale:0.6,num:12,speed:1.75,artillery:true,engineer:false,recon:false},//40
        {name:`Motorized Small Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[6,10],armor:0.4,health:12,morale:0.8,num:12,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Group Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[9,15],armor:0.4,health:24,morale:0.8,num:24,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Half Artillery`,unitType:[`Artillery`],class:2,damage:[6,12],armor:0.4,health:15,morale:0.8,num:8,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Artillery`,unitType:[`Artillery`,`Motorized`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:24,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Concentrated Artillery`,unitType:[`Artillery`],class:2,damage:[8,16],armor:0.4,health:20,morale:0.8,num:12,speed:1.75,artillery:true,engineer:false,recon:false},
        {name:`Motorized Heavy Artillery`,unitType:[`Artillery`,`Machine Gun`,`Motorized`],class:2,damage:[10,20],armor:0.5,health:20,morale:0.8,num:12,speed:1.5,artillery:true,engineer:false,recon:false},
        {name:`Mixed Support`,unitType:[`Machine Gun`,`Mortar`],class:0,damage:[10,8],armor:0.1,health:50,morale:1,num:400,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Motorized Mixed Support`,unitType:[`Machine Gun`,`Motorized`,`Mortar`],class:0,damage:[10,8],armor:0.1,health:50,morale:1,num:400,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Motorized Mixed Support Bersaglieri`,unitType:[`Machine Gun`,`Motorized`,`Mortar`],class:0,damage:[10,8],armor:0.1,health:50,morale:1.2,num:400,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Engineer Mixed Support`,unitType:[`Machine Gun`,`Mortar`,`Engineer`],class:0,damage:[10,10],armor:0.1,health:50,morale:1,num:500,speed:1,artillery:false,engineer:true,recon:false},//50
        {name:`Mixed Combat`,unitType:[`Infantry`,`Engineer`,`Mountain`],class:0,damage:[9,6],armor:0.1,health:80,morale:1.1,num:500,speed:1.05,artillery:false,engineer:true,recon:false},
        {name:`Mixed Infantry`,unitType:[`Infantry`,`Recon`,`Artillery`],class:0,damage:[8,8],armor:0.2,health:80,morale:1,num:500,speed:1.1,artillery:false,engineer:false,recon:false},
        {name:`Motorized Mixed Combat`,unitType:[`Infantry`,`Engineer`,`Mountain`,`Motorized`],class:0,damage:[9,6],armor:0.1,health:80,morale:1.1,num:500,speed:2.625,artillery:false,engineer:true,recon:false},
        {name:`Motorized Mixed Infantry`,unitType:[`Infantry`,`Recon`,`Artillery`,`Motorized`],class:0,damage:[8,8],armor:0.2,health:80,morale:1,num:500,speed:2.75,artillery:false,engineer:false,recon:false},
        {name:`Motorized Mixed Detachment`,unitType:[`Infantry`,`Recon`,`Mountain`,`Motorized`],class:0,damage:[8,4],armor:0.2,health:80,morale:1.2,num:500,speed:2.875,artillery:false,engineer:false,recon:false},
        {name:`Engineer`,unitType:[`Engineer`],class:0,damage:[6,6],armor:0,health:75,morale:1,num:600,speed:1,artillery:false,engineer:true,recon:false},
        {name:`Motorized Engineer`,unitType:[`Engineer`,`Motorized`],class:0,damage:[6,6],armor:0,health:75,morale:1,num:600,speed:2.5,artillery:false,engineer:true,recon:false},
        {name:`Mixed Engineer`,unitType:[`Engineer`,`Mortar`],class:0,damage:[8,6],armor:0,health:60,morale:1,num:500,speed:0.9,artillery:false,engineer:true,recon:false},
        {name:`Engineer Company`,unitType:[`Engineer`],class:0,damage:[6,6],armor:0,health:25,morale:1,num:200,speed:1,artillery:false,engineer:true,recon:false},
        {name:`Pioneer Company`,unitType:[`Engineer`],class:0,damage:[4,8],armor:0,health:50,morale:1.1,num:200,speed:1.1,artillery:false,engineer:true,recon:false},//60
        {name:`Anti-Tank`,unitType:[`Anti-Tank`],class:2,damage:[2,24],armor:0.1,health:40,morale:1,num:12,speed:1,artillery:false,engineer:false,recon:false},
        {name:`Motorized Anti-Tank`,unitType:[`Anti-Tank`,`Motorized`],class:2,damage:[2,24],armor:0.1,health:40,morale:1,num:12,speed:2.5,artillery:false,engineer:false,recon:false},
        {name:`Flak`,unitType:[`Anti-Air`],class:2,damage:[6,30],armor:0.1,health:20,morale:1,num:8,speed:0.8,artillery:true,engineer:false,recon:false},
        {name:`Motorized Flak`,unitType:[`Anti-Air`,`Motorized`],class:2,damage:[6,30],armor:0.1,health:20,morale:1,num:8,speed:2,artillery:true,engineer:false,recon:false},
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
        {name:`Division`,symbol:`XX`,size:[55,55,55]},
        {name:`Brigade`,symbol:`X`,size:[45,50,50]},
        {name:`Regiment`,symbol:`III`,size:[45,45,45]},
        {name:`Battalion`,symbol:`II`,size:[35,35,35]},
        {name:`Company`,symbol:`I`,size:[30,30,30]},
    ],map:[
        {
            name:[`Cyrenaica`,`Base`],
            term:[`Sonnenblume/map/main`],
            city:[
                {name:`El Agheila`,owner:2,type:1,pos:[130,1462]},
                {name:`Mersa Brega`,owner:0,type:0,pos:[313,1396]},
                {name:`Ghemines`,owner:0,type:0,pos:[479,757]},
                {name:`Carcuna`,owner:0,type:0,pos:[482,856]},
                {name:`Benghazi`,owner:0,type:1,pos:[500,544]},
                {name:`Zuetina`,owner:0,type:0,pos:[514,1136]},
                {name:`Agedabia`,owner:0,type:0,pos:[567,1213]},
                {name:`Soluch`,owner:0,type:0,pos:[573,769]},
                {name:`Beda Fomm`,owner:0,type:0,pos:[578,1003]},
                {name:`Regima`,owner:0,type:0,pos:[609,563]},

                {name:`Sceleidima`,owner:0,type:0,pos:[697,818]},
                {name:`Tocra`,owner:0,type:0,pos:[699,325]},
                {name:`El Haseia`,owner:0,type:0,pos:[711,1403]},
                {name:`El Abiar`,owner:0,type:0,pos:[716,501]},
                {name:`Antelat`,owner:0,type:0,pos:[724,1012]},
                {name:`Er Rtem`,owner:0,type:0,pos:[738,660]},
                {name:`Barce`,owner:0,type:0,pos:[829,336]},
                {name:`Nahiba`,owner:0,type:0,pos:[848,395]},
                {name:`Maaten el Grara`,owner:0,type:0,pos:[901,1201]},
                {name:`Msus`,owner:0,type:0,pos:[908,828]},

                {name:`Charruba`,owner:0,type:0,pos:[933,519]},
                {name:`d'Annunzio`,owner:0,type:0,pos:[973,290]},
                {name:`Bel Garanis`,owner:0,type:0,pos:[1008,673]},
                {name:`Beda Littoria`,owner:0,type:0,pos:[1103,195]},
                {name:`El Hamama`,owner:0,type:0,pos:[1164,488]},
                {name:`Bir el Gerrari`,owner:0,type:0,pos:[1169,708]},
                {name:`Bir er Rtima`,owner:0,type:0,pos:[1190,874]},
                {name:`Cirene`,owner:0,type:0,pos:[1223,170]},
                {name:`Ben Gania`,owner:0,type:0,pos:[1261,1084]},
                {name:`El Maraghi`,owner:0,type:0,pos:[1297,318]},

                {name:`Mechili`,owner:0,type:0,pos:[1408,498]},
                {name:`Bir Azzagh`,owner:0,type:0,pos:[1466,369]},
                {name:`Tengeder`,owner:0,type:0,pos:[1476,752]},
                {name:`Derna`,owner:0,type:0,pos:[1534,190]},
                {name:`Martuba`,owner:0,type:0,pos:[1600,285]},
                {name:`Bir Halegh`,owner:0,type:0,pos:[1617,499]},
                {name:`Tmimi`,owner:0,type:0,pos:[1703,424]},
                {name:`Bomba`,owner:0,type:0,pos:[1740,344]},
                {name:`Bir Habesc`,owner:0,type:0,pos:[1781,754]},
                {name:`Alem Hamza`,owner:0,type:0,pos:[1842,579]},

                {name:`Hatiat er Rtem`,owner:0,type:0,pos:[1870,1060]},
                {name:`Gazala`,owner:0,type:0,pos:[1873,494]},
                {name:`Bir Hacheim`,owner:0,type:0,pos:[1890,781]},
                {name:`Acroma`,owner:0,type:0,pos:[1956,552]},
                {name:`El Adem`,owner:0,type:0,pos:[2060,652]},
                {name:`Tobruk`,owner:0,type:1,pos:[2068,542]},
                {name:`Bir el Gubi`,owner:0,type:0,pos:[2119,811]},
                {name:`El Duda`,owner:0,type:0,pos:[2136,627]},
                {name:`El Cuasc`,owner:0,type:0,pos:[2188,1075]},
                {name:`Gabr Saleh`,owner:0,type:0,pos:[2267,850]},

                {name:`Gambut`,owner:0,type:0,pos:[2279,622]},
                {name:`Gasr el Arid`,owner:0,type:0,pos:[2324,678]},
                {name:`Mersa Lucch`,owner:0,type:0,pos:[2326,569]},
                {name:`Sidi Omar`,owner:0,type:0,pos:[2451,891]},
                {name:`Sidi Azeiz`,owner:0,type:0,pos:[2468,731]},
                {name:`Fort Capuzzo`,owner:0,type:0,pos:[2489,779]},
                {name:`Fort Maddalena`,owner:0,type:0,pos:[2498,1152]},
                {name:`Bardia`,owner:0,type:0,pos:[2523,689]},
                {name:`Sollum`,owner:0,type:0,pos:[2555,796]},
                {name:`Bir el Khireigat`,owner:0,type:0,pos:[2561,922]},

                {name:`Halfaya Pass`,owner:0,type:0,pos:[2584,842]},
                {name:`Conference Cairn`,owner:0,type:0,pos:[2612,1025]},
                {name:`Buq Buq`,owner:0,type:0,pos:[2734,811]},
                {name:`Sofafi`,owner:0,type:0,pos:[2770,962]},
                {name:`Misheifa`,owner:0,type:0,pos:[2889,970]},
                {name:`Sidi Barrani`,owner:0,type:1,pos:[2884,761]},
            ],connect:[
                //{name:[``,``]},
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
            ],reserve:[
            ],
        },{
            name:[`Marmarica`,`Base`],
            term:[`Crusader/map/main`],
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
                    battalions:[[15],[7,10]],bonus:false,partition:[[0],[1],[2]],pick:-1,
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
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`3rd Battalion, Royal Horse Artillery`,`3rd Regiment, Royal Horse Artillery`],name:`3`,designation:`Royal\nHorse`,commander:`Wilson`},
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
                            pos:[916,175],
                            elements:[
                                {
                                    level:3,type:[`Infantry`,`Motorized`],team:`Australian`,
                                    desc:[`13th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/13th Australian Infantry Battalion`],name:`2/13`,designation:``,commander:`Burrows`,icon:`9a`,
                                    pos:[960,252],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`Australian`,desc:[`13th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/13th Australian Infantry Battalion`],name:`2/13`,designation:``,commander:`Burrows`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`],team:`Australian`,
                                    desc:[`15th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/15th Australian Infantry Battalion`],name:`2/15`,designation:``,commander:`Ogle`,icon:`9a`,
                                    pos:[820,240],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`Australian`,desc:[`15th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/15th Australian Infantry Battalion`],name:`2/15`,designation:``,commander:`Ogle`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorized`],team:`Australian`,
                                    desc:[`17th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/17th Australian Infantry Battalion`],name:`2/17`,designation:``,commander:`Crawford`,icon:`9a`,
                                    pos:[765,140],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`Australian`,desc:[`17th Infantry Battalion, 2nd Australian Expeditionary Force`,`2/17th Australian Infantry Battalion`],name:`2/17`,designation:``,commander:`Crawford`},
                                    ],
                                },{
                                    level:3,type:[`Artillery`,`Motorized`],team:`British`,
                                    desc:[`104th Battalion, Royal Horse Artillery`,`104th Regiment, Royal Horse Artillery`],name:`104`,designation:`Royal\nHorse`,commander:`Matthew`,icon:``,
                                    pos:[870,160],
                                    elements:[
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`104th Battalion, Royal Horse Artillery`,`104th Regiment, Royal Horse Artillery`],name:`104`,designation:`Royal\nHorse`,commander:`Matthew`},
                                    ],
                                },
                            ],
                        },{
                            level:3,type:[`Oasis Infantry`],team:`German`,
                            desc:[`300th Special Purpose Battalion Staff "Oasis"`,`Bataillonstab z.b.V. 300 "Oasen"`],name:`300`,designation:`z.b.V.\nOasis`,commander:`Teetz`,icon:``,
                            pos:[2405,1069],
                            elements:[
                                {level:4,type:`Oasis Infantry Company`,team:`German`,desc:[`6th Oasis Company`,`Oasen Kompanie 6`],name:`6`,designation:`Oasis`,commander:`Ennecerus`},
                                {level:4,type:`Oasis Infantry Company`,team:`German`,desc:[`12th Oasis Company`,`Oasen Kompanie 12`],name:`12`,designation:`Oasis`,commander:`Schön`},
                                {level:4,type:`Armored Car Company`,team:`German`,desc:[`580th Reconnaissance Company`,`Aufklärungs-Kompanie 580`],name:`580`,designation:``,commander:`Hohmeyer`}, 
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
                            desc:[`102nd Infantry Division "Trento"`,`102ª Divisione di fanteria motorizzata "Trento"`],name:`102`,designation:`Trento`,commander:`Stampioni`,icon:`trento`,
                            pos:[480,441],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`61st Infantry Regiment`,`61° Reggimento di fanteria motorizzata "Sicilia"`],name:`61`,designation:`Sicilia`,commander:`Giorgetti`,icon:`trento`,
                                    pos:[581,198],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`1st Battalion, 61st Infantry Regiment`,`I battaglione fucilieri, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`,icon:`trento`,
                                            pos:[671,121],
                                            elements:[
                                                {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 61st Infantry Regiment`,`I battaglione fucilieri, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`1`,designation:`61`,commander:`Pittau`},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`2nd Battalion, 61st Infantry Regiment`,`II battaglione fucilieri, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`,icon:`trento`,
                                            pos:[755,306],
                                            elements:[
                                                {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 61st Infantry Regiment`,`II battaglione fucilieri, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`2`,designation:`61`,commander:`Menzio`},
                                            ],
                                        },{
                                            level:3,type:[`Machine Gun`,`Mortar`],team:`Italian`,
                                            desc:[`3rd Mixed Support Battalion, 61st Motorized Infantry Regiment`,`III battaglione armi d'accompagnamento, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`3`,designation:`61`,commander:`Rabezzana`,icon:`trento`,
                                            pos:[1010,344],
                                            elements:[
                                                {level:3,type:`Mixed Support`,team:`Italian`,desc:[`3rd Mixed Support Battalion, 61st Motorized Infantry Regiment`,`III battaglione armi d'accompagnamento, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`3`,designation:`61`,commander:`Rabezzana`},
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`62nd Infantry Regiment`,`62° Reggimento di fanteria motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[2245,937],
                                    elements:[
                                        {
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`1st Battalion, 62nd Infantry Regiment`,`I battaglione fucilieri, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`,icon:`trento`,
                                            pos:[2014,1167],
                                            elements:[
                                                {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 62nd Infantry Regiment`,`I battaglione fucilieri, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`],team:`Italian`,
                                            desc:[`2nd Battalion, 62nd Infantry Regiment`,`II battaglione fucilieri, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`,icon:`trento`,
                                            pos:[2254,671],
                                            elements:[
                                                {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 62nd Infantry Regiment`,`II battaglione fucilieri, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`},
                                            ],
                                        },{
                                            level:3,type:[`Machine Gun`,`Mortar`],team:`Italian`,
                                            desc:[`3rd Mixed Support Battalion, 62nd Motorized Infantry Regiment`,`III battaglione armi d'accompagnamento, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`3`,designation:`62`,commander:`Gennaro`,icon:`trento`,
                                            pos:[2222,1165],
                                            elements:[
                                                {level:3,type:`Mixed Support`,team:`Italian`,desc:[`3rd Mixed Support Battalion, 62nd Motorized Infantry Regiment`,`III battaglione armi d'accompagnamento, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`3`,designation:`62`,commander:`Gennaro`},
                                            ],
                                        },
                                    ],
                                },{
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`7th Bersaglieri Regiment`,`7° Reggimento Bersaglieri`],name:`7`,designation:`Bersaglieri`,commander:`Scirocco`,icon:`trento`,
                                    pos:[378,564],
                                    elements:[
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`8th Bersaglieri Battalion`,`8° Battaglione Bersaglieri`],name:`8`,designation:`Bersaglieri`,commander:`Trillini`},
                                        {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`10th Bersaglieri Battalion`,`10° Battaglione Bersaglieri`],name:`10`,designation:`Bersaglieri`,commander:`Adolfato`},
                                        {level:3,type:`Motorized Machine Gun Bersaglieri`,team:`Italian`,desc:[`11th Bersaglieri Battalion`,`11° Battaglione Bersaglieri`],name:`11`,designation:`Bersaglieri`,commander:`Straziota`},
                                    ],
                                },{
                                    level:3,type:[`Artillery`],team:`Italian`,
                                    desc:[`4th Group, 46th Artillery Regiment`,`IV gruppo, 46° Reggimento artiglieria "Trento"`],name:`4`,designation:`46`,commander:`Gavazzi`,icon:`trento`,
                                    pos:[827,474],
                                    elements:[
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`4th Group, 46th Artillery Regiment`,`IV gruppo, 46° Reggimento artiglieria "Trento"`],name:`4`,designation:`46`,commander:`Gavazzi`},
                                    ],
                                },
                            ],
                        },
                    ],
                },{
                    name:`Operation Crusader`,
                    battalions:[[38],[14,28]],bonus:true,partition:[[0],[1],[2]],pick:1,
                    unit:[
                        {
                            level:0,type:[`Tank`],team:`British`,
                            desc:[`7th Armored Division`,`7th Armoured Division`],name:`7`,designation:``,commander:`Gott`,icon:`7a`,
                            pos:[2650,1420],
                            elements:[
                                {
                                    level:1,type:[`Tank`,`Light`],team:`British`,
                                    desc:[`4th Armored Brigade`,`4th Armoured Brigade`],name:`4`,designation:``,commander:`Gatehouse`,icon:`4ab`,
                                    pos:[2330,1420],
                                    elements:[
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`3rd Battalion, Royal Tank Regiment`,`3rd Royal Tank Regiment`],name:`3`,designation:`Royal Tank\nRegiment`,commander:`Keller`},
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`5th Battalion, Royal Tank Regiment`,`5th Royal Tank Regiment`],name:`5`,designation:`Royal Tank\nRegiment`,commander:`Carver`},
                                        {level:3,type:`Light Tank`,team:`British`,desc:[`8th Battalion, Irish Hussars`,`8th Irish Hussars`],name:`8`,designation:`Irish\nHussars`,commander:`Drew`},
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:`2nd Battalion, Scots Guards`,name:`2`,designation:`Scots\nGuards`,commander:`Mayfield`},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:`Royal\nHorse`,commander:`Currie`},
                                    ],
                                },{
                                    level:1,type:[`Infantry`,`Artillery`,`Motorized`],team:`British`,
                                    desc:`7th Support Group`,name:`7`,designation:``,commander:`Campbell`,icon:`7sg`,
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
                                    level:1,type:[`Tank`,`Heavy`],team:`British`,
                                    desc:`32nd Army Tank Brigade`,name:`32`,designation:``,commander:`Willison`,icon:`32a`,
                                    pos:[785,170],
                                    elements:[
                                        {level:3,type:`Heavy Tank`,team:`British`,desc:[`4th Battalion, Royal Tank Regiment`,`4th Royal Tank Regiment`],name:`4`,designation:`Royal Tank\nRegiment`,commander:`O'Carroll`},
                                        {level:3,type:`Heavy Tank`,team:`British`,desc:[`7th Battalion, Royal Tank Regiment`,`7th Royal Tank Regiment`],name:`7`,designation:`Royal Tank\nRegiment`,commander:`Groves`},
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`104th Battalion, Royal Horse Artillery`,`104th Regiment, Royal Horse Artillery`],name:`104`,designation:`Royal\nHorse`,commander:`Matthew`},
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
                                    desc:[`16th Infantry Regiment`,`16° Reggimento di fanteria "Savona"`],name:`16`,designation:`Savona`,commander:`Garrone`,icon:`savona`,
                                    pos:[1040,320],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 16th Infantry Regiment`,`I battaglione fucilieri, 16° Reggimento di fanteria "Savona"`],name:`1`,designation:`16`,commander:`Pelosi`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`3rd Battalion, 16th Infantry Regiment`,`III battaglione fucilieri, 16° Reggimento di fanteria "Savona"`],name:`3`,designation:`16`,commander:`Rossi`},
                                    ],
                                },
                            ],
                        },{
                            level:1,type:[`Infantry`,`Tank`],team:`Italian`,
                            desc:[`Army Corps Reconnaissance Regrouping`,`Raggruppamento Esplorante del XXI Corpo d'Armata`],name:`RECA`,designation:`XXI`,commander:`de Meo`,icon:``,
                            pos:[993,728],
                            elements:[
                                {
                                    level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                                    desc:[`Infantry Regiment "Giovani Fascisti"`,`Reggimento di fanteria "Giovani Fascisti"`],name:`GF`,designation:``,commander:`Nannini`,icon:``,
                                    pos:[946,961],
                                    elements:[
                                        {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`1st Battalion, Infantry Regiment "Giovani Fascisti"`,`I battaglione fucilieri, Reggimento di fanteria "Giovani Fascisti"`],name:`1`,designation:`Giovani\nFascisti`,commander:`Balisti`},
                                        {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`2nd Battalion, Infantry Regiment "Giovani Fascisti"`,`II battaglione fucilieri, Reggimento di fanteria "Giovani Fascisti"`],name:`2`,designation:`Giovani\nFascisti`,commander:`Benedetti`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`,`Motorized`],team:`Italian`,
                                    desc:[`Flying Batteries Regrouping`,`Raggruppamento Batterie Volanti`],name:`RBV`,designation:``,commander:`Nicolardi`,icon:``,
                                    pos:[660,1038],
                                    elements:[
                                        {level:3,type:`Motorized Small Artillery`,team:`Italian`,desc:[`1st Group, Flying Batteries Regrouping`,`I gruppo, Raggruppamento Batterie Volanti`],name:`1`,designation:`RBV`,commander:`da Bino`},
                                        {level:3,type:`Motorized Small Artillery`,team:`Italian`,desc:[`3rd Group, Flying Batteries Regrouping`,`III gruppo, Raggruppamento Batterie Volanti`],name:`3`,designation:`RBV`,commander:`Abeille`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Motorcycle`],team:`Italian`,
                                    desc:[`6th Battalion "Romolo Gessi", Italian Africa Police`,`6° Battaglione "Romolo Gessi", Polizia dell’Africa Italiana`],name:`6`,designation:`Romolo\nGessi`,commander:`Diamante`,icon:``,
                                    pos:[1062,1469],
                                    elements:[
                                        {level:4,type:`Motorcycle Infantry Company`,team:`Italian`,desc:[`1st Motorcycle Company, Italian Africa Police`,`1° compagnia motociclisti, Polizia dell’Africa Italiana`],name:`1`,designation:``,commander:`Marini`},
                                        {level:4,type:`Motorcycle Infantry Company`,team:`Italian`,desc:[`2nd Motorcycle Company, Italian Africa Police`,`2° compagnia motociclisti, Polizia dell’Africa Italiana`],name:`2`,designation:``,commander:`Ciani`},
                                        {level:4,type:`Armored Car Company`,team:`Italian`,desc:[`3rd Armored Car Company, Italian Africa Police`,`3° compagnia carri, Polizia dell’Africa Italiana`],name:`3`,designation:``,commander:`Orlando`},
                                        {level:4,type:`Security Tank Company`,team:`Italian`,desc:[`1st Company, 52nd Tank Battalion`,`1° compagnia, LII battaglione carri M`],name:`1`,designation:`52`,commander:`Mayneri`},
                                        {level:4,type:`Engineer Company`,team:`Italian`,desc:[`161st Pioneer Company`,`DLXI compagnia minatori`],name:`161`,designation:`Pioneer`,commander:`Matteis`},
                                    ],
                                },
                            ],
                        },{
                            level:0,type:[`Infantry`],team:`Italian`,
                            desc:[`55th Infantry Division "Savona"`,`55ª Divisione di fanteria autotrasportabile "Savona"`],name:`55`,designation:`Savona`,commander:`de Giorgis`,icon:`savona`,
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
                                    desc:[`Task Force di Bardi`,`Raggruppamento di Bardi`],name:`TF`,designation:``,commander:`di Bardi`,icon:`savona`,
                                    pos:[2254,671],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 15th Infantry Regiment`,`II battaglione fucilieri, 15° Reggimento di fanteria "Savona"`],name:`2`,designation:`15`,commander:`Russo`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 16th Infantry Regiment`,`II battaglione fucilieri, 16° Reggimento di fanteria "Savona"`],name:`2`,designation:`16`,commander:`Aveta`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`12th Artillery Regiment`,`12° Reggimento artiglieria "Savona"`],name:`12`,designation:`Savona`,commander:`Sabini`,icon:`savona`,
                                    pos:[2245,937],
                                    elements:[
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`2nd Group, 12th Artillery Regiment`,`II gruppo, 12° Reggimento artiglieria "Savona"`],name:`2`,designation:`12`,commander:`Coronati`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`3rd Group, 12th Artillery Regiment`,`III gruppo, 12° Reggimento artiglieria "Savona"`],name:`3`,designation:`12`,commander:`Aliberti`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Machine Gun`],team:`Italian`,
                                    desc:[`155th Machine Gun Battalion`,`155º Battaglione mitraglieri`],name:`155`,designation:``,commander:`Grande`,icon:`savona`,
                                    pos:[2235,1165],
                                    elements:[
                                        {level:3,type:`Machine Gun`,team:`Italian`,desc:[`155th Machine Gun Battalion`,`155º Battaglione mitraglieri`],name:`155`,designation:``,commander:`Grande`},
                                    ],
                                },{
                                    level:3,type:[`Infantry`,`Machine Gun`],team:`Italian`,
                                    desc:[`4th Machine Gun Squadrons Group "Genova Cavalleria"`,`IV Gruppo squadroni mitraglieri "Genova Cavalleria"`],name:`4`,designation:`Genova`,commander:`Pierucci`,icon:`savona`,
                                    pos:[2358,967],
                                    elements:[
                                        {level:3,type:`Machine Gun`,team:`Italian`,desc:[`4th Machine Gun Squadrons Group "Genova Cavalleria"`,`IV Gruppo squadroni mitraglieri "Genova Cavalleria"`],name:`4`,designation:`Genova`,commander:`Pierucci`},
                                    ],
                                },{
                                    level:3,type:[`Oasis Infantry`],team:`German`,
                                    desc:[`300th Special Purpose Battalion Staff "Oasis"`,`Bataillonstab z.b.V. 300 "Oasen"`],name:`300`,designation:`z.b.V.\nOasis`,commander:`Teetz`,icon:``,
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
                                        {level:3,type:`Mixed Support`,team:`Italian`,desc:[`3rd Mixed Support Battalion, 61st Motorized Infantry Regiment`,`III battaglione armi d'accompagnamento, 61° Reggimento di fanteria motorizzata "Sicilia"`],name:`3`,designation:`61`,commander:`Rabezzana`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`62nd Infantry Regiment`,`62° Reggimento di fanteria motorizzata "Sicilia"`],name:`62`,designation:`Sicilia`,commander:`Gatti`,icon:`trento`,
                                    pos:[730,300],
                                    elements:[
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`1st Battalion, 62nd Infantry Regiment`,`I battaglione fucilieri, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`1`,designation:`62`,commander:`Scolli`},
                                        {level:3,type:`Infantry`,team:`Italian`,desc:[`2nd Battalion, 62nd Infantry Regiment`,`II battaglione fucilieri, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`2`,designation:`62`,commander:`de Polis`},
                                        {level:3,type:`Mixed Support`,team:`Italian`,desc:[`3rd Mixed Support Battalion, 62nd Motorized Infantry Regiment`,`III battaglione armi d'accompagnamento, 62° Reggimento di fanteria motorizzata "Sicilia"`],name:`3`,designation:`62`,commander:`Gennaro`},
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
                                    desc:[`46th Artillery Regiment`,`46° Reggimento artiglieria "Trento"`],name:`46`,designation:`Trento`,commander:`Grati`,icon:`trento`,
                                    pos:[581,198],
                                    elements:[
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`1st Group, 46th Artillery Regiment`,`I gruppo, 46° Reggimento artiglieria "Trento"`],name:`1`,designation:`46`,commander:`Giannimi`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`3rd Group, 46th Artillery Regiment`,`III gruppo, 46° Reggimento artiglieria "Trento"`],name:`3`,designation:`46`,commander:`Salvo`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`4th Group, 46th Artillery Regiment`,`IV gruppo, 46° Reggimento artiglieria "Trento"`],name:`4`,designation:`46`,commander:`Gavazzi`},
                                    ],
                                },{
                                    level:3,type:[`Machine Gun`,`Mortar`],team:`Italian`,
                                    desc:[`551st Mixed Support Battalion`,`DLI battaglione armi d'accompagnamento`],name:`551`,designation:``,commander:`Bobbio`,icon:`trento`,
                                    pos:[378,564],
                                    elements:[
                                        {level:3,type:`Mixed Support`,team:`Italian`,desc:[`551st Mixed Support Battalion`,`DLI battaglione armi d'accompagnamento`],name:`551`,designation:``,commander:`Bobbio`},
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
            term:[`Gazala/map/main`],
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
                    name:`Battle of Gazala`,
                    battalions:[[15,20],[40]],bonus:true,partition:[[0],[1],[2]],pick:false,
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
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:``,commander:``},
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
                                    desc:[`London Rifle Brigade Battalion`,`London Rifle Brigade`],name:`L`,designation:`Rifle\nBrigade`,commander:``,icon:`7a`,
                                    pos:[1984,1225],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`British`,desc:[`London Rifle Brigade Battalion`,`London Rifle Brigade`],name:`L`,designation:`Rifle\nBrigade`,commander:``},
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
                                    pos:[813,402],
                                    elements:[
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Duke of Edinburgh's Own Rifles`,name:`1`,designation:`Duke of\nEdinburgh`,commander:`Seneschall`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Royal Natal Carabineers`,name:`1`,designation:`Royal\nNatal`,commander:`Hay`},
                                        {level:3,type:`Motorized Infantry`,team:`South African`,desc:`1st Battalion, Transvaal Scottish Regiment`,name:`1`,designation:`Transvaal\nScottish`,commander:`Smitheman`},
                                        {level:3,type:`Motorized Artillery`,team:`South African`,desc:[`3rd Battalion, South African Artillery Corps`,`3rd South African Field Regiment`],name:`3`,designation:``,commander:`Whyte`},
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
                                    pos:[676,67],
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
                                    desc:`29th Indian Infantry Brigade`,name:`29`,designation:``,commander:`Reid`,icon:`5id`,
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
                            level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                            desc:[`Infantry Regiment "Giovani Fascisti"`,`Reggimento di fanteria "Giovani Fascisti"`],name:`GF`,designation:``,commander:`Nannini`,icon:``,
                            pos:[366,1241],
                            elements:[
                                {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`1st Battalion, Infantry Regiment "Giovani Fascisti"`,`I battaglione fucilieri, Reggimento di fanteria "Giovani Fascisti"`],name:`1`,designation:`Giovani\nFascisti`,commander:`Balisti`},
                                {level:3,type:`Motorized Militia`,team:`Italian`,desc:[`2nd Battalion, Infantry Regiment "Giovani Fascisti"`,`II battaglione fucilieri, Reggimento di fanteria "Giovani Fascisti"`],name:`2`,designation:`Giovani\nFascisti`,commander:`Benedetti`},
                            ],
                        },{
                            level:2,type:[`Artillery`,`Motorized`],team:`Italian`,
                            desc:[`Flying Batteries Regrouping`,`Raggruppamento Batterie Volanti`],name:`RBV`,designation:``,commander:`Nicolardi`,icon:``,
                            pos:[660,1038],
                            elements:[
                                {level:3,type:`Motorized Small Artillery`,team:`Italian`,desc:[`14th Group, Flying Batteries Regrouping`,`XIV gruppo, Raggruppamento Batterie Volanti`],name:`14`,designation:`RBV`,commander:`da Bino`},
                                {level:3,type:`Motorized Small Artillery`,team:`Italian`,desc:[`15th Group, Flying Batteries Regrouping`,`XV gruppo, Raggruppamento Batterie Volanti`],name:`15`,designation:`RBV`,commander:`Abeille`},
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
                                    desc:[`Artillery Regrouping "Sabratha"`,`Raggruppamento artiglieria "Sabratha"`],name:`RA`,designation:`Sabratha`,commander:`Ferrario`,icon:`sabratha`,
                                    pos:[390,283],
                                    elements:[
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`283rd Group, 14th Frontier Guards Artillery Regiment`,`CCLXXXIII gruppo, 14° Reggimento artiglieria Guardia alla Frontiera`],name:`283`,designation:`Frontier\nGuard`,commander:`Parrella`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`284th Group, 14th Frontier Guards Artillery Regiment`,`CCLXXXIV gruppo, 14° Reggimento artiglieria Guardia alla Frontiera`],name:`284`,designation:`Frontier\nGuard`,commander:`Rocchi`},
                                    ],
                                },{
                                    level:3,type:[`Machine Gun`,`Mortar`],team:`Italian`,
                                    desc:[`551st Mixed Support Battalion`,`DLI battaglione armi d'accompagnamento`],name:`551`,designation:``,commander:`Bobbio`,icon:`trento`,
                                    pos:[490,728],
                                    elements:[
                                        {level:3,type:`Mixed Support`,team:`Italian`,desc:[`551st Mixed Support Battalion`,`DLI battaglione armi d'accompagnamento`],name:`551`,designation:``,commander:`Bobbio`},
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
                                        {level:3,type:`Motorized Machine Gun Bersaglieri`,team:`Italian`,desc:[`11th Bersaglieri Battalion`,`11° Battaglione Bersaglieri`],name:`11`,designation:`Bersaglieri`,commander:`Straziota`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`46th Artillery Regiment`,`46° Reggimento artiglieria "Trento"`],name:`46`,designation:`Trento`,commander:`Grati`,icon:`trento`,
                                    pos:[548,628],
                                    elements:[
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`1st Group, 46th Artillery Regiment`,`I gruppo, 46° Reggimento artiglieria "Trento"`],name:`1`,designation:`46`,commander:`Giannimi`},
                                        {level:3,type:`Small Artillery`,team:`Italian`,desc:[`3rd Group, 46th Artillery Regiment`,`III gruppo, 46° Reggimento artiglieria "Trento"`],name:`3`,designation:`46`,commander:`Salvo`},
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
            term:[`Matruh/map/main`],
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
                    name:`Battle of Mersa Matruh`,
                    battalions:[[14,18],[28]],bonus:false,partition:[[0],[1],[2]],pick:false,
                    unit:[
                        {
                            level:0,type:[`Infantry`,`Motorized`],team:`Indian`,
                            desc:`4th Indian Division`,name:`4`,designation:``,commander:`Briggs`,icon:`4id`,
                            pos:[987,124],
                            elements:[
                                {
                                    level:1,type:[`Infantry`,`Motorized`],team:`Indian`,
                                    desc:`29th Indian Infantry Brigade`,name:`29`,designation:``,commander:`Reid`,icon:`5id`,
                                    pos:[769,837],
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
                                            pos:[676,565],
                                            elements:[
                                                {level:3,type:`Weaker Motorized Infantry`,team:`Indian`,desc:`Gleecol`,name:`Gleecol`,designation:``,commander:`Gleeson`},
                                            ],
                                        },{
                                            level:3,type:[`Infantry`,`Motorized`],team:`Indian`,
                                            desc:`Scotcol`,name:`Scotcol`,designation:``,commander:`Scott`,icon:`5id`,
                                            pos:[373,700],
                                            elements:[
                                                {level:3,type:`Weaker Motorized Infantry`,team:`Indian`,desc:`Scotcol`,name:`Scotcol`,designation:``,commander:`Scott`},
                                            ],
                                        },{
                                            level:3,type:[`Artillery`,`Motorized`],team:`British`,
                                            desc:[`3rd Battalion, Royal Artillery`,`3rd Field Regiment, Royal Artillery`],name:`3`,designation:``,commander:`Teesdale`,icon:`5id`,
                                            pos:[722,728],
                                            elements:[
                                                {level:3,type:`Motorized Artillery`,team:`British`,desc:[`3rd Battalion, Royal Artillery`,`3rd Field Regiment, Royal Artillery`],name:`3`,designation:``,commander:`Teesdale`},
                                            ],
                                        },
                                    ],
                                },{
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
                                    level:3,type:[`Tank`,`Superior`],team:`British`,
                                    desc:[`8th Battalion, Irish Hussars`,`8th Irish Hussars`],name:`8`,designation:`Irish\nHussars`,commander:`Kilkelly`,icon:`10id`,
                                    pos:[670,220],
                                    elements:[
                                        {level:3,type:`Superior Tank`,team:`British`,desc:[`8th Battalion, Irish Hussars`,`8th Irish Hussars`],name:`8`,designation:`Irish\nHussars`,commander:`Kilkelly`},
                                    ],
                                },{
                                    level:3,type:[`Tank`,`Recon`,`Tracked`],team:`South African`,
                                    desc:[`6th South African Armored Car Battalion`,`6th South African Armoured Car Regiment`],name:`6`,designation:``,commander:`Short`,icon:`10id`,
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
                                        {level:3,type:`Motorized Artillery`,team:`British`,desc:[`4th Battalion, Royal Horse Artillery`,`4th Regiment, Royal Horse Artillery`],name:`4`,designation:``,commander:``},
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
                            desc:[`60th Infantry Division "Sabratha"`,`60ª Divisione di fanteria "Sabratha"`],name:`60`,designation:`Sabratha`,commander:`Soldarelli`,icon:`sabratha`,
                            pos:[392,45],
                            elements:[
                                {
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`85th Infantry Regiment`,`85° Reggimento di fanteria "Sabratha"`],name:`85`,designation:`Sabratha`,commander:`Grimaldi`,icon:`sabratha`,
                                    pos:[522,50],
                                    elements:[
                                        {level:3,type:`Small Infantry`,team:`Italian`,desc:[`1st Battalion, 85th Infantry Regiment`,`I battaglione fucilieri, 85° Reggimento di fanteria motorizzata "Sabratha"`],name:`1`,designation:`85`,commander:`Angelozzi`},
                                        {level:3,type:`Small Infantry`,team:`Italian`,desc:[`2nd Battalion, 85th Infantry Regiment`,`II battaglione fucilieri, 85° Reggimento di fanteria motorizzata "Sabratha"`],name:`2`,designation:`85`,commander:`Morosini`},
                                    ],
                                },{
                                    level:2,type:[`Infantry`],team:`Italian`,
                                    desc:[`86th Infantry Regiment`,`86° Reggimento di fanteria "Sabratha"`],name:`86`,designation:`Sabratha`,commander:`Castrignanò`,icon:`sabratha`,
                                    pos:[472,160],
                                    elements:[
                                        {level:3,type:`Small Infantry`,team:`Italian`,desc:[`1st Battalion, 86th Infantry Regiment`,`I battaglione fucilieri, 86° Reggimento di fanteria motorizzata "Sabratha"`],name:`1`,designation:`86`,commander:`Velosa`},
                                        {level:3,type:`Small Infantry`,team:`Italian`,desc:[`2nd Battalion, 86th Infantry Regiment`,`II battaglione fucilieri, 86° Reggimento di fanteria motorizzata "Sabratha"`],name:`2`,designation:`86`,commander:`Piana`},
                                    ],
                                },{
                                    level:2,type:[`Artillery`],team:`Italian`,
                                    desc:[`Artillery Regrouping "Sabratha"`,`Raggruppamento artiglieria "Sabratha"`],name:`RA`,designation:`Sabratha`,commander:`Ferrario`,icon:`sabratha`,
                                    pos:[340,123],
                                    elements:[
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`283rd Group, 14th Frontier Guards Artillery Regiment`,`CCLXXXIII gruppo, 14° Reggimento artiglieria Guardia alla Frontiera`],name:`283`,designation:`Frontier\nGuard`,commander:`Parrella`},
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`284th Group, 14th Frontier Guards Artillery Regiment`,`CCLXXXIV gruppo, 14° Reggimento artiglieria Guardia alla Frontiera`],name:`284`,designation:`Frontier\nGuard`,commander:`Rocchi`},
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
                                    desc:[`46th Artillery Regiment`,`46° Reggimento artiglieria "Trento"`],name:`46`,designation:`Trento`,commander:`Grati`,icon:`trento`,
                                    pos:[328,338],
                                    elements:[
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`1st Group, 46th Artillery Regiment`,`I gruppo, 46° Reggimento artiglieria "Trento"`],name:`1`,designation:`46`,commander:`Giannimi`},
                                        {level:3,type:`Small Fast Artillery`,team:`Italian`,desc:[`3rd Group, 46th Artillery Regiment`,`III gruppo, 46° Reggimento artiglieria "Trento"`],name:`3`,designation:`46`,commander:`Salvo`},
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
                            level:2,type:[`Artillery`,`Motorized`],team:`Italian`,
                            desc:[`Flying Batteries Regrouping`,`Raggruppamento Batterie Volanti`],name:`RBV`,designation:``,commander:`Nicolardi`,icon:``,
                            pos:[660,1038],
                            elements:[
                                {level:3,type:`Motorized Small Artillery`,team:`Italian`,desc:[`14th Group, Flying Batteries Regrouping`,`XIV gruppo, Raggruppamento Batterie Volanti`],name:`14`,designation:`RBV`,commander:`da Bino`},
                                {level:3,type:`Motorized Small Artillery`,team:`Italian`,desc:[`15th Group, Flying Batteries Regrouping`,`XV gruppo, Raggruppamento Batterie Volanti`],name:`15`,designation:`RBV`,commander:`Abeille`},
                            ],
                        },{
                            level:2,type:[`Infantry`,`Motorized`],team:`Italian`,
                            desc:[`7th Bersaglieri Regiment`,`7° Reggimento Bersaglieri`],name:`7`,designation:`Bersaglieri`,commander:`Scirocco`,icon:`trento`,
                            pos:[158,777],
                            elements:[
                                {level:3,type:`Motorized Bersaglieri`,team:`Italian`,desc:[`10th Bersaglieri Battalion`,`10° Battaglione Bersaglieri`],name:`10`,designation:`Bersaglieri`,commander:`Adolfato`},
                                {level:3,type:`Motorized Machine Gun Bersaglieri`,team:`Italian`,desc:[`11th Bersaglieri Battalion`,`11° Battaglione Bersaglieri`],name:`11`,designation:`Bersaglieri`,commander:`Straziota`},
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
                                    desc:[`115th Rifle Regiment`,`Schützen-Regiment 115`],name:`115`,designation:``,commander:`Zincke`,icon:`15pz`,
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
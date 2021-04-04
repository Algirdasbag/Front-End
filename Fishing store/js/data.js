const PROD_DATA_JSON_STRING = `
[
  {
    "id": 1,
    "category": "ritės",
    "name": "Abu Garcia Ambassadeur 5601",
    "image": "products_img/1.png",
    "description": "Abu Garcia Ambassadeur Classic C4 ritės pasižymi ypatingai sklandžiu, ir patikimu darbu, neįtikėtinai greitu sukimo momentu 6.3:1, bei keturiais nerudijančio plieno guoliais. Anti prasisukimo guolis.",
    "weight": 340,
    "quantity": 2,
    "price": 159.99
  },
  {
    "id": 2,
    "category": "ritės",
    "name": "Piscifun Alijos 300",
    "image": "products_img/2.png",
    "description": "The Alijoz 300 baitcaster is built for throwing big baits and catching big fish. The high level water resistant treatment provides long-lasting durability in the harshest environments.",
    "weight": 320,
    "quantity": 3,
    "price": 69.99
  },
  {
    "id": 3,
    "category": "ritės",
    "name": "Daiwa Fuego LT 4000",
    "image": "products_img/3.png",
    "description": "Daiwa Fuego LT 2021m modelis pagamintas pagal naująją LT [Light & Tough] koncepciją, pasižyminčia didesne galia, tvirtumu ir lengvumu.",
    "weight": 245,
    "quantity": 5,
    "price": 99.99
  },   
  {
    "id": 4,
    "category": "spiningai",
    "name": "Salmo Aggressor Jerk 180 100",
    "image": "products_img/4.png",
    "description": "A special multiplier spin fishing rod for angling by jerk guiding, using medium and large jerk baits. This rigid fast-action fishing rod will ensure necessary jerk guiding for the lure and “curb” even the most powerful jerks of the fish.",
    "weight": 160,
    "quantity": 2,
    "price": 34.99
  },   
  {
    "id": 5,
    "category": "spiningai",
    "name": "Favorite X1 183 20-60",
    "image": "products_img/5.png",
    "description": "Spiningas Favorite X1, tai aukštos kokybės, tvirtas ir patikimas spiningas už prieinamą kainą.",
    "weight": 134,
    "quantity": 4,
    "price": 49.99
  },   
  {
    "id": 6,
    "category": "spiningai",
    "name": "Savage Gear MPP2 Trigger",
    "image": "products_img/6.png",
    "description": "The most comprehensive Modern Lure and predator fishing rod series we ever made! Covering all types of modern lure fishing, from swimbaits, jerk baits, soft lures and big lure trolling!", 
    "weight": 190,
    "quantity": 3,
    "price": 39.99
  },   
  {
    "id": 7,
    "category": "masalai",
    "name": "Buster Jerk Original",
    "image": "products_img/7.png",
    "description": "Buster Jerk® is an extremely versatile pike catching machine. Deadly side-to-side action with hot belly flash. This is also a great lure to crank. Rip, twitch, pull, or jerk",
    "weight": 75,
    "quantity": 10,
    "price": 17.99
  },   
  {
    "id": 8,
    "category": "masalai",
    "name": "O. S. P. Rudra",
    "image": "products_img/8.png",
    "description": "Asura O.S.P. Rudra 130 SP - 130 mm ilgio, Big Minnow klasės vobleris. Dėka ypatingos konstrukcijos korpuso, pasižymi galingais judesiais-virpesiais, žybsėjimu. Puikiai išsimuša, pasižymi itin aktyviu, įdomiu žaidimu, kuris iš tolimo atstumo itin vilioja didelius plėšrūnus, kurie dažnai net nežiūri į mažus ar vidutinio dydžio masalus.",
    "weight": 20,
    "quantity": 5,
    "price": 18.99
  },
  {
    "id": 9,
    "category": "masalai",
    "name": "Salmo Slider",
    "image": "products_img/9.png",
    "description": "A must-have lure for pike fishing, Salmo slider fishing helps you meet the goal of imitating an injured baitfish, enticing predators to your direction.",
    "weight": 70,
    "quantity": 5,
    "price": 14.99
  },   
  {
    "id": 10,
    "category": "valai",
    "name": "Titan Power",
    "image": "products_img/10.png",
    "description": "Devynių gijų, super stipraus pinimo, skirtas spiningavimui ir dugninei žvejybai. Dėl papildomos dangos, valas turi slidų paviršių todėl lengviau atlikti ilgus ir tikslius metimus.",
    "weight": 40,
    "quantity": 1,
    "price": 19.99
  },   
  {
    "id": 11,
    "category": "valai",
    "name": "Varivas X8",
    "image": "products_img/11.png",
    "description": "Pintas Varivas PE X8 valas. Kaip ir visi Varivas PE valai, realiai yra daug tvirtesnis nei deklaruoja gamintojas bei atsparesnis kliuviniams. Kas 25m yra 50cm tamsesnės spalvos valo juosta, kuri padeda žvejui sekti nuotolį.",
    "weight": 45,
    "quantity": 5,
    "price": 30.99
  },
  {
    "id": 12,
    "category": "valai",
    "name": "Daiwa J-braid X8",
    "image": "products_img/12.png",
    "description": "Pintas Valas Daiwa J-Braid X8, tai 8 gijų pynimo valas, kuris atitinka visus aukščiausius reikalavimus keliamus pintam valui. Valas puikiai slysta žiedeliai, kas leis užmesti net ir lengvą masalą itin toli.",
    "weight": 50,
    "quantity": 5,
    "price": 15.23
  },
  {
    "id": 13,
    "category": "masalai",
    "name": "Jūratė",
    "image": "products_img/13.png",
    "description": "Legendinė blizgė Jūratė, antkurios pagauta daug trofėjų",
    "weight": 30,
    "quantity": 7,
    "price": 2.99
  },   
  {
    "id": 14,
    "category": "masalai",
    "name": "Pig Shad",
    "image": "products_img/14.png",
    "description": "Pig Shad - didelis guminukas, mėgiamas trofėjinių lydekų taikinys.",
    "weight": 50,
    "quantity": 5,
    "price": 18.99
  },
  {
    "id": 15,
    "category": "masalai",
    "name": "SPRO Quatro Devil",
    "image": "products_img/15.png",
    "description": "Spro Screamin Quatro Devil is a 4-section swimbait bait with a thrill, wide swinging action, then keeps its action even when fish very slowly – ideal for trolling and casting.",
    "weight": 71,
    "quantity": 5,
    "price": 12.99
  },
  {
    "id": 16,
    "category": "masalai",
    "name": "YO-ZURI 3DS Crank Deep Diver",
    "image": "products_img/16.png",
    "description": "Legendinis trolinginis vobleris, gaudantis beveik visus plėšrūnus.",
    "weight": 17,
    "quantity": 3,
    "price": 9.90
  }  
]
`;

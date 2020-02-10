getMenuContent=()=>{
    const menu = {
        dayDish:{
            header:'Наш предлог',
            img:'daily-dish.png',
            list:[
                {foodName:'Џигер',foodPrice:'120'},
                {foodName:'Мучкалица',foodPrice:'160/180'},
                {foodName:'Лута плескавица',foodPrice:'120'},
                {foodName:'Микс Убац',foodPrice:'120'}
            ]

        },
        bbq:{
            header:'Скара',
            img:'bbq.png',
            list:[
                {foodName:'Мускул 1кг',foodPrice:'1000'},
                {foodName:'Плешка 1кг',foodPrice:'1000'},
                {foodName:'Свинско филе',foodPrice:'400'},
                {foodName:'Вешалица',foodPrice:'150'},
                {foodName:'Сланина',foodPrice:'160'},
                {foodName:'Ребро',foodPrice:'160'},
                {foodName:'Стек пилешки',foodPrice:'120'},
                {foodName:'Батак пилешки',foodPrice:'120'},
                {foodName:'Кари',foodPrice:'160'},
                {foodName:'Златни прсти',foodPrice:'160'},
                {foodName:'Увијач',foodPrice:'150/200'},
                {foodName:'Шарска',foodPrice:'120'},
                {foodName:'Плескавица',foodPrice:'100'},
                {foodName:'Ајдучка',foodPrice:'300'},
                {foodName:'Ќебап',foodPrice:'10'},
                {foodName:'Уштипак',foodPrice:'350'},
                {foodName:'Колбас',foodPrice:'80/120'},
                {foodName:'Полнета вешалица',foodPrice:'180'},
                {foodName:'Полнет стек',foodPrice:'160'},
                {foodName:'Лепиња',foodPrice:'20'},
                {foodName:'Нафора',foodPrice:'60'},
                {foodName:'Помфрит',foodPrice:'80'},
                {foodName:'Пекарски компир',foodPrice:'100'},
                {foodName:'Пипер',foodPrice:'30'}
            ]
        },
        salad:{
            header:'Салати',
            img:'salad.png',
            list:[
                {foodName:'Шопска мала',foodPrice:'60'},
                {foodName:'Шопска 2ка',foodPrice:'120'},
                {foodName:'Македонска Мала',foodPrice:'80'},
                {foodName:'Грчка мала',foodPrice:'80'},
                {foodName:'Грчка 2ка',foodPrice:'160'},
                {foodName:'Зеленчук на скара',foodPrice:'160'},
                {foodName:'Витаминска',foodPrice:'160'},
                {foodName:'Таратур',foodPrice:'80'},
                {foodName:'Тиквички павлака',foodPrice:'120'},
                {foodName:'Сирење',foodPrice:'80/100'}
            ]
        },
        seasonSalad:{
            header:'Сезонски салати',
            img:'season-salad.png',
            list:[
                {foodName:'Урда пиперка',foodPrice:'70'},
                {foodName:'Павлака пиперка',foodPrice:'80'},
                {foodName:'Мимоза',foodPrice:'60'},
                {foodName:'Пача',foodPrice:'80'},
                {foodName:'Чварки',foodPrice:'100'},
                {foodName:'Комитско мезе',foodPrice:'200'},
                {foodName:'Цезар',foodPrice:'160'},
                {foodName:'Печурки',foodPrice:'80'},
                {foodName:'Туршија',foodPrice:'120'},
            ]
        },
        beer:{
            header:'Пиво',
            img:'beer.png',
            list:[
                {foodName:'Точено',foodPrice:'60'},
                {foodName:'Скопско / Даб',foodPrice:'70'},
                {foodName:'Даб темно',foodPrice:'100'},
                {foodName:'Смут / Лашко',foodPrice:'80'},
                {foodName:'Ипл / Нефилтрирано',foodPrice:'100'},
                {foodName:'Хајнекен',foodPrice:'100'},
                {foodName:'Туборг',foodPrice:'100'},
                {foodName:'Карлсберг',foodPrice:'120'},
                {foodName:'Амстел',foodPrice:'100'}
            ]
        },
        spirits:{
            header:'Жестоко',
            img:'spirits.png',
            list:[
                {foodName:'Жолта',foodPrice:'50'},
                {foodName:'Убавина',foodPrice:'50'},
                {foodName:'Греана ракија',foodPrice:'60'},
                {foodName:'Узо',foodPrice:'50'},
                {foodName:'Мастика',foodPrice:'50'},
                {foodName:'Коњак',foodPrice:'50'},
                {foodName:'Шток',foodPrice:'70'},
                {foodName:'Смирноф',foodPrice:'80'},
                {foodName:'Пелинковец / Џин',foodPrice:'50'},
                {foodName:'Виски',foodPrice:'120'},
                {foodName:'Вишна',foodPrice:'120'}
            ]
        },
        wine:{
            header:'Вина',
            img:'wine.png',
            list:[
                {foodName:'Пола пола',foodPrice:'140'},
                {foodName:'Наливно 2,5дл',foodPrice:'100'},
                {foodName:'Намештај',foodPrice:'100'},
                {foodName:'Шприцер',foodPrice:'50'},
                {foodName:'Бело Брзанов 1л',foodPrice:'400'},
                {foodName:'Црвено Брзанов 1л',foodPrice:'400'},
                {foodName:'Траминец 0,7',foodPrice:'400'},
                {foodName:'Т\'\га за југ',foodPrice:'400'},
                {foodName:'Розе 1л',foodPrice:'220'},
                {foodName:'Смедеревка 1л',foodPrice:'220'}
            ]
        },
        softDrinks:{
            header:'Сокови',
            img:'coke.png',
            list:[
                {foodName:'Кока кола',foodPrice:'50'},
                {foodName:'Фанта',foodPrice:'50'},
                {foodName:'Газоза',foodPrice:'50'},
                {foodName:'Швепс',foodPrice:'50'},
                {foodName:'Тоник',foodPrice:'50'},
                {foodName:'Швепс тангарина',foodPrice:'50'},
                {foodName:'Миринда',foodPrice:'50'},
                {foodName:'7ап',foodPrice:'50'}
            ]
        },
        coffe:{
            header:'Кафе',
            img:'coffe.png',
            list:[
                {foodName:'Кафе турско',foodPrice:'20'},
                {foodName:'Еспресо',foodPrice:'40'},
                {foodName:'Макијато',foodPrice:'60'},
                {foodName:'Чај',foodPrice:'40'}
            ]
        }







    }
    return menu

}
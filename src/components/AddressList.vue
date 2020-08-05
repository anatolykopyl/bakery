<template>
    <div class="wrapper">
        <div v-on:scroll="handleScroll" id="address-list">
            <div class="address" v-for="bakery in bakeries" v-bind:key="bakery.n" 
            v-bind:class="{ 'inactive': bakery.hours.includes('закрыта'), 'selected': selected===bakery.n }"
            :id="'element'+bakery.n"
            v-on:click="select(bakery.n)">
                <h3>{{ bakery.address }}</h3>
                <img v-if="bakery.metro" src="@/assets/metro.png" /> <span class="light">{{ bakery.metro }}{{ bakery.location }}</span>
                <br />
                <span>{{ bakery.hours }}</span>
            </div>
        </div>
        <img v-if="showHint" id="scroll-hint" src="@/assets/down.png">
        <br />
    </div>
</template>

<script>
export default {
    name: "AddressList",
    props: ['selectedNew'],
    data() {
        return {
            selected: 1,
            bakeries: [
                {
                    n: 1,
                    address: "Парашютная ул., д.27 к.1",
                    metro: "Комендантский пр.",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 4,
                    address: "Комендантский пр., д.34 к.1",
                    metro: "Комендантский пр.",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 3,
                    address: "Приморский пр., д.137 к.1",
                    metro: "Беговая",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 9,
                    address: "Смолячкова ул., д.11",
                    metro: "Выборгская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 11,
                    address: "Лесной пр., д.5",
                    metro: "Площадь Ленина",
                    hours: "закрыта",
                },
                {
                    n: 12,
                    address: "Александра Матросова ул., д.9",
                    metro: "Лесная",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 5,
                    address: "Суворовский пр., д.6",
                    metro: "Площадь Восстания",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 6,
                    address: "Среднеохтинский пр., д.25",
                    metro: "Новочеркасская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 10,
                    address: "Маяковского ул., д.28",
                    metro: "Маяковская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 7,
                    address: "Московский пр., д.7",
                    metro: "Садовая",
                    hours: "закрыта",
                },
                {
                    n: 13,
                    address: "Сытнинская ул., д.10",
                    metro: "Горьковская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 14,
                    address: "Бассейная ул., д.39",
                    metro: "Парк Победы",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 15,
                    address: "Кузнечный пер., д.8",
                    metro: "Владимирская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 16,
                    address: "Композиторов пр., д.12",
                    metro: "Проспект Просвещения",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 17,
                    address: "Мытнинская ул., д.20",
                    metro: "Площадь Восстания",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 8,
                    address: "Энгельса пр., д.113 к.2",
                    metro: "Озерки",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 2,
                    address: "Светлановский пр., д.66",
                    metro: "Гражданский проспект",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 18,
                    address: "Брянцева ул., д.20",
                    metro: "Гражданский проспект",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 20,
                    address: "Среднеохтинский пр., д.53",
                    metro: "Новочеркасская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 19,
                    address: "Ланское ш., д.14",
                    metro: "Черная речка",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 41,
                    address: "Стачек пр., д.4",
                    metro: "Нарвская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 43,
                    address: "Фурштатская ул., д.42",
                    metro: "Чернышевская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 48,
                    address: "7-линия В.О., д.28",
                    metro: "Василеостровская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 45,
                    address: "Греческий пр., д.27",
                    metro: "Площадь Восстания",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 55,
                    address: "Малый пр. В.О., д.75",
                    metro: "Приморская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 53,
                    address: "Малая Морская ул., д.19",
                    metro: "Адмиралтейская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 51,
                    address: "Новочеркасский пр., д.49",
                    metro: "Новочеркасская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 58,
                    address: "Малая Посадская ул., д.7/4",
                    metro: "Горьковская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 46,
                    address: "Лазо ул., д.3",
                    metro: "Ладожская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 61,
                    address: "Льва Толстого ул., д.4",
                    metro: "Петроградская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 59,
                    address: "Седова ул., д.89",
                    metro: "Ломоносовская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 64,
                    address: "Заневский пр., д.23",
                    metro: "Новочеркасская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 63,
                    address: "Художников ул., д.30",
                    metro: "Проспект Просвещения",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 66,
                    address: "Моховая ул., д.27-29",
                    metro: "Чернышевская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 73,
                    address: "Типанова ул., д.8",
                    metro: "Московская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 76,
                    address: "Малый пр. ВО, д.45",
                    metro: "Василеостровская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 74,
                    address: "Гражданская ул., д.18",
                    metro: "Садовая",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 71,
                    address: "Комендантский пр., д.51 к.1",
                    metro: "Комендантский проспект",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 78,
                    address: "Стачек пр., д.69",
                    metro: "Автово",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 81,
                    address: "Федора Абрамова ул., д.18 к.1",
                    metro: "Парнас",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 83,
                    address: "Капитанская ул., д.4",
                    metro: "Приморская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 85,
                    address: "Лиговский пр., д.10/118",
                    metro: "Площадь Восстания",
                    hours: "временно закрыта",
                },
                {
                    n: 86,
                    address: "Гаванская ул. д.19/100",
                    metro: "Приморская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 88,
                    address: "Барочная ул. д.8, лит.А",
                    metro: "Петроградская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 89,
                    address: "Литейный пр., д.64/78",
                    metro: "Маяковская",
                    hours: "8:00 - 0:00",
                },
                {
                    n: 87,
                    address: "Торжковская ул., д.1",
                    metro: "Черная речка",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 92,
                    address: "Союза Печатников ул., д.27",
                    metro: "Садовая",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 96,
                    address: "Римского Корсакова пр., д.8/18",
                    metro: "Садовая",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 99,
                    address: "Федора Абрамова ул., д.17",
                    metro: "Парнас",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 101,
                    address: "Наставников пр., д.21, лит.А",
                    metro: "Ладожская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 102,
                    address: "г.Мурино, Бульвар Менделеева, д.11, к.1",
                    metro: "Девяткино",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 103,
                    address: "Планерная ул., д.63, к.1, лит.А",
                    metro: "Комендантский проспект",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 106,
                    address: "Каменноостровский пр., д.29, лит.А",
                    metro: "Петроградская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 22,
                    address: "Энгельса пр., д.124, к.1, ТК Вояж",
                    metro: "Озерки",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 21,
                    address: "Пулковская ул., д.10, к.2",
                    metro: "Звездная",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 23,
                    address: "8-я линия ВО, д.49",
                    metro: "Василеостровская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 25,
                    address: "Коллонтай ул. д.5",
                    metro: "Проспект Большевиков",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 26,
                    address: "Гривцова пер. д.26",
                    metro: "Садовая",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 27,
                    address: "Разъезжая ул. д.43",
                    metro: "Лиговский проспект",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 28,
                    address: "наб. Канала Грибоедова, д.79/23",
                    metro: "Садовая",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 30,
                    address: "Ветеранов пр., д.110",
                    metro: "Проспект Ветеранов",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 29,
                    address: "Заневский пр., д.9/8",
                    metro: "Новочеркасская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 24,
                    address: "Блохина ул. д.23",
                    metro: "Спортивная",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 31,
                    address: "Разъезжая ул., д.1",
                    metro: "Владимирская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 32,
                    address: "Ленина ул., д.27",
                    metro: "Чкаловская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 34,
                    address: "Автовская ул., д.4",
                    metro: "Автово",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 36,
                    address: "Чкаловский пр., д.11",
                    metro: "Чкаловская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 38,
                    address: "Удельный пр., д.25",
                    metro: "Удельная",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 35,
                    address: "1-ая Красноармейская, д.8-10",
                    metro: "Технологический Институт",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 42,
                    address: "ул. Марата, д.54/34",
                    metro: "Лиговский проспект",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 39,
                    address: "Вознесенский пр., д.45",
                    metro: "Садовая",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 33,
                    address: "Пионерская ул., д.35",
                    metro: "Чкаловская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 40,
                    address: "Лермонтовский пр., д.55",
                    metro: "Балтийская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 37,
                    address: "Большая Зеленина ул., д.2/42",
                    metro: "Чкаловская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 44,
                    address: "наб. Канала Грибоедова, д.42",
                    metro: "Сенная площадь",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 47,
                    address: "Солидарности пр., д.9",
                    metro: "Проспект Большевиков",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 50,
                    address: "ул. Дыбенко, д.16",
                    metro: "Улица Дыбенко",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 52,
                    address: "Елизарова пр., д.3",
                    metro: "Елизаровская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 54,
                    address: "Всеволожский пр., д.72А",
                    location: "Всеволожск",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 60,
                    address: "Невский пр., д.15",
                    metro: "Адмиралтейская",
                    hours: "8:00 - 0:00",
                },
                {
                    n: 56,
                    address: "Белышева ул., д.5/6",
                    metro: "Большевиков",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 57,
                    address: "Ланское ш., д.59",
                    metro: "Черная речка",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 49,
                    address: "Жуковского ул. д.38А",
                    metro: "Площадь восстания",
                    hours: "закрыта",
                },
                {
                    n: 62,
                    address: "Коли Томчака ул. д.18/26",
                    metro: "Московские ворота",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 65,
                    address: "Стачек пр., д. 40",
                    metro: "Кировский завод",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 67,
                    address: "Стачек пр., д. 75",
                    metro: "Автово",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 68,
                    address: "Будапештская ул., д.74 к.1",
                    metro: "Купчино",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 69,
                    address: "Ярослава Гашека ул., д.4",
                    metro: "Купчино",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 72,
                    address: "Большевиков пр., д.9",
                    metro: "Проспект Большевиков",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 70,
                    address: "Будапештская ул., д.14",
                    metro: "Международная",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 77,
                    address: "Гражданский пр., д.76",
                    metro: "Академическая",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 79,
                    address: "Новоизмайловский пр., д.38 к.1",
                    metro: "Московская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 80,
                    address: "Гатчинская ул., д.35",
                    metro: "Чкаловская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 82,
                    address: "Федора Абрамова ул., д.8",
                    metro: "Парнас",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 84,
                    address: "ул.Борисова д.4, лит А",
                    location: "г.Сестрорецк",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 93,
                    address: "Европейский проспект, д.8 (Кудрово)",
                    metro: "Улица Дыбенко",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 90,
                    address: "Невский д.52/Садовая ул.д.14",
                    metro: "Гостинный двор",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 91,
                    address: "Конюшенный пер.,д.1/6",
                    metro: "Адмиралтейская",
                    hours: "8:00 - 0:00",
                },
                {
                    n: 94,
                    address: "Бабушкина ул., д.14",
                    metro: "Ломоносовская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 97,
                    address: "Восстания ул., д.43",
                    metro: "Чернышевская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 98,
                    address: "Некрасова ул., д.1/38",
                    metro: "Чернышевская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 100,
                    address: "Невский пр., д.151",
                    metro: "пл. Александра Невского",
                    hours: "8:00 - 22:00",
                },
                /*{
                    n: ,
                    address: "Маршала Казакова ул., д.1, корп.2",
                    metro: "Автово",
                    hours: "8:00 - 22:00",
                },*/
                {
                    n: 104,
                    address: "1-я линия В.О., д. 46, лит. А",
                    metro: "Василеостровская",
                    hours: "8:00 - 22:00",
                },
                /*{
                    n: ,
                    address: "Ветеранов пр., д. 87",
                    metro: "Проспект Ветеранов",
                    hours: "8:00 - 22:00",
                },*/
                {
                    n: 107,
                    address: "Средний пр. В.О. д. 50., лит. А",
                    metro: "Василеостровская",
                    hours: "8:00 - 22:00",
                }
            ],
            showHint: true
        };
    },
    methods: {
        select: function(n) {
            this.selected = n;
            this.$emit('selected', this.selected);
        },
        handleScroll: function() {
            this.showHint = false;
        }
    },
    watch: {
        selectedNew: function() {
            this.selected = this.selectedNew;
        }
    }
};
</script>

<style scoped>
#address-list {
    overflow: auto;
    height: 660px;
    width: 500px;
    
    padding: 10px;
}

#scroll-hint {
    opacity: 0.75;
    width: 50px;
    margin-top: -60px;
    pointer-events: none;
}

.inactive {
    color: gray;
}

.selected h3 {
    color: brown;
}

.address {
    text-align: left;
    border-style: solid;
    border-color: transparent;
    border-width: 1px;
    border-radius: 6px;
    padding: 10px;
}

.address:hover {
    border-color: black;
}

.address h3 {
    margin: 0px;
}

.address img {
    height: 12px;
}

/* width */
::-webkit-scrollbar {
    width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

@media screen and (max-width: 1024px) {
    .wrapper {
        width: 100%;
    }

    #address-list {
        height: 100%;
        width: 90%;
        padding: 20px;
    }

    #scroll-hint {
        display: none;
    }
}
</style>
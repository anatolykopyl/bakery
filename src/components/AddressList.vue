<template>
    <div>
        <div v-on:scroll="handleScroll" id="address-list">
            <div class="address" v-for="bakery in bakeries" v-bind:key="bakery.n" 
            v-bind:class="{ 'inactive': bakery.hours.includes('закрыта'), 'selected': selected===bakery.n }"
            v-on:click="select(bakery.n)">
                <h3>{{ bakery.address }}</h3>
                <img src="@/assets/metro.png" /> <span class="light">{{ bakery.metro }}</span>
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
                    address: "Барочная ул. д.8,лит.А",
                    metro: "Петроградская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 89,
                    address: "Литейный пр.,д.64/78",
                    metro: "Маяковская",
                    hours: "8:00 - 0:00",
                },
                {
                    n: 87,
                    address: "Торжковская ул.,д.1",
                    metro: "Черная речка",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 92,
                    address: "Союза Печатников ул.,д.27",
                    metro: "Садовая",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 96,
                    address: "Римского Корсакова пр.,д.8/18",
                    metro: "Садовая",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 99,
                    address: "Федора Абрамова ул.,д.17",
                    metro: "Парнас",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 101,
                    address: "Наставников пр.,д.21,лит.А",
                    metro: "Ладожская",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 102,
                    address: "г.Мурино, Бульвар Менделеева,д.11,к.1",
                    metro: "Девяткино",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 103,
                    address: "Планерная ул.,д.63,к.1,лит.А",
                    metro: "Комендантский проспект",
                    hours: "8:00 - 22:00",
                },
                {
                    n: 106,
                    address: "Каменноостровский пр.,д.29,лит.А",
                    metro: "Петроградская",
                    hours: "8:00 - 22:00",
                },
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
<template>
    <div class="goods">
        <div id="sneakpeek">
            <div href="#pastry">
                <img src="@/assets/bread-tab.png">
                <h4>Кондитерские изделия</h4>
            </div>
            <div href="#singles">
                <img src="@/assets/bread-tab.png">
                <h4>Мелкоштучные изделия</h4>
            </div>
            <div href="#pies">
                <img src="@/assets/bread-tab.png">
                <h4>Пироги</h4>
            </div>
            <div href="#bread">
                <img src="@/assets/bread-tab.png">
                <h4>Хлеба и багеты</h4>
            </div>
            <div href="#drinks">
                <img src="@/assets/bread-tab.png">
                <h4>Напитки</h4>
            </div>
        </div>
        <h2>Кондитерские изделия:</h2>
        <div class="category">
            <div class="col">
                <Card v-for="item in itemsSubset(1, ['Кондитерские изделия', 'Леденцы', 'Печенье'])" v-bind:key=item.nameEng :item=item />
            </div>
            <div class="col">
                <Card v-for="item in itemsSubset(2, ['Кондитерские изделия', 'Леденцы', 'Печенье'])" v-bind:key=item.nameEng :item=item />
            </div>
            <div class="col">
                <Card v-for="item in itemsSubset(3, ['Кондитерские изделия', 'Леденцы', 'Печенье'])" v-bind:key=item.nameEng :item=item />
            </div>
        </div>
        <h2>Мелкоштучные изделия:</h2>
        <div class="category">
            <div class="col">
                <Card v-for="item in itemsSubset(1, 'Мелкоштучные изделия')" v-bind:key=item.nameEng :item=item />
            </div>
            <div class="col">
                <Card v-for="item in itemsSubset(2, 'Мелкоштучные изделия')" v-bind:key=item.nameEng :item=item />
            </div>
            <div class="col">
                <Card v-for="item in itemsSubset(3, 'Мелкоштучные изделия')" v-bind:key=item.nameEng :item=item />
            </div>
        </div>
        <h2>Пироги:</h2>
        <div class="category">
            <div class="col">
                <Card v-for="item in itemsSubset(1, 'Пироги')" v-bind:key=item.nameEng :item=item />
            </div>
            <div class="col">
                <Card v-for="item in itemsSubset(2, 'Пироги')" v-bind:key=item.nameEng :item=item />
            </div>
            <div class="col">
                <Card v-for="item in itemsSubset(3, 'Пироги')" v-bind:key=item.nameEng :item=item />
            </div>
        </div>
        <h2>Хлеба и багеты:</h2>
        <div class="category">
            <div class="col">
                <Card v-for="item in itemsSubset(1, 'Хлеба, багеты')" v-bind:key=item.nameEng :item=item />
            </div>
            <div class="col">
                <Card v-for="item in itemsSubset(2, 'Хлеба, багеты')" v-bind:key=item.nameEng :item=item />
            </div>
            <div class="col">
                <Card v-for="item in itemsSubset(3, 'Хлеба, багеты')" v-bind:key=item.nameEng :item=item />
            </div>
        </div>
        <h2>Напитки:</h2>
        <div class="category">
            <div class="col">
                <Card v-for="item in itemsSubset(1, 'Напитки')" v-bind:key=item.nameEng :item=item />
            </div>
            <div class="col">
                <Card v-for="item in itemsSubset(2, 'Напитки')" v-bind:key=item.nameEng :item=item />
            </div>
            <div class="col">
                <Card v-for="item in itemsSubset(3, 'Напитки')" v-bind:key=item.nameEng :item=item />
            </div>
        </div>
    </div>
</template>

<script>
import Card from "@/components/Card.vue";
import items from '@/assets/items.js'

export default {
    name: "Goods",
    components: {
        Card
    },
    data() {
        return {
            items: items
        }
    },
    methods: {
        itemsSubset: function(col, category) {
            return this.items.filter((v, i) => (i % 3 === col-1) && category.includes(v.category));
        }
    }
}
</script>

<style scoped>
#sneakpeek {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 60px;
    padding-top: 80px;
    padding-bottom: 80px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0.49763655462184875) 0%, rgba(255,255,255,0) 100%);
}

#sneakpeek h4 {
    font-family: 'Playfair Display', serif;
    font-size: 17px;
    font-weight: 100;
}

#sneakpeek div {
    width: 20%;
    transition: transform .2s;
    cursor: pointer;
}

#sneakpeek img {
    width: 70%;
    /*border: white solid;
    border-radius: 100%;*/
}

#sneakpeek div:hover {
    transform: scale(1.05);
}

h2 {
    text-align: left;
    margin-left: 50px;
    font-family: 'Playfair Display', serif;
    font-weight: 500;
    font-size: 30px;
    color: #3a3a3a;
}

.category {
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
}

.col {
    width: 33.33%;
    padding: 30px;
}
</style>

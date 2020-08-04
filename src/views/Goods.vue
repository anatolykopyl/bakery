<template>
    <div class="goods">
        <a id="top"></a>
        <a class="jump-to-top" href="#top"><img src="@/assets/down.png"></a>
        <div id="sneakpeek">
            <a href="#pastry">
                <img src="@/assets/pastry-tab.png">
                <h4>Кондитерские изделия</h4>
            </a>
            <a href="#singles">
                <img src="@/assets/singles-tab.png">
                <h4>Мелкоштучные изделия</h4>
            </a>
            <a href="#pies">
                <img src="@/assets/pies-tab.png">
                <h4>Пироги</h4>
            </a>
            <a href="#bread">
                <img src="@/assets/bread-tab.png">
                <h4>Хлеба и багеты</h4>
            </a>
            <a href="#drinks">
                <img src="@/assets/drinks-tab.png">
                <h4>Напитки</h4>
            </a>
        </div>
        <h2 id="pastry">Кондитерские изделия:</h2>
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
        <h2 id="singles">Мелкоштучные изделия:</h2>
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
        <h2 id="pies">Пироги:</h2>
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
        <h2 id="bread">Хлеба и багеты:</h2>
        <div class="category">
            <div class="col">
                <Card v-for="item in itemsSubset(1, ['Хлеба, багеты', 'Сухарики'])" v-bind:key=item.nameEng :item=item />
            </div>
            <div class="col">
                <Card v-for="item in itemsSubset(2, ['Хлеба, багеты', 'Сухарики'])" v-bind:key=item.nameEng :item=item />
            </div>
            <div class="col">
                <Card v-for="item in itemsSubset(3, ['Хлеба, багеты', 'Сухарики'])" v-bind:key=item.nameEng :item=item />
            </div>
        </div>
        <h2 id="drinks">Напитки:</h2>
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
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: top;
    justify-content: space-evenly;
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 60px;
    padding-top: 80px;
    padding-bottom: 80px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%);
}

#sneakpeek h4 {
    font-family: 'Playfair Display', serif;
    font-size: 17px;
    font-weight: 100;
    color: #3a3a3a;
}

#sneakpeek a {
    width: 204.8px;
    transition: transform .2s;
    cursor: pointer;
    text-decoration: none;
}

#sneakpeek a:hover {
    transform: scale(1.05);
}

#sneakpeek img {
    width: 70%;
    border: rgb(253, 253, 253) solid;
    border-radius: 100%;
    border-width: 0.35vw;
    filter: drop-shadow(0.35vw 0.35vw 0.35vw rgba(0, 0, 0, 0.4));
}

h2 {
    text-align: left;
    margin-left: 5vh;
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

h2::before { 
  display: block; 
  content: " "; 
  margin-top: -100px; 
  height: 100px; 
  visibility: hidden; 
  pointer-events: none;
}

.col {
    width: 33.33%;
    padding: 30px;
}

.jump-to-top {
    position: fixed;
    opacity: 0.75;
    right: 2vw;
    bottom: 2vw;
    z-index: 100;
}

.jump-to-top img {
    width: 10vh;
    transform: rotate(180deg);
}

@media screen and (max-width: 1024px) {
    #sneakpeek {
        padding: 0px;
        padding-top: 2vh;
    }

    .category {
        display: inline-block;
        padding: 0px;
        padding-left: 5vh;
        padding-right: 5vh;
    }

    .col {
        width: 100%;
        padding: 0px;
    }

    .jump-to-top img {
        width: 15vw;
    }
}
</style>

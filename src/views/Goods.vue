<template>
    <div class="goods">
        <a class="jump-to-top" href="#router-view"><img src="@/assets/down.png"></a>
        <div id="menu">
            <div class="buttons">
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
            <input type="text" placeholder="Поиск..." v-model="query"/>
        </div>
        <h2 v-if="categoryLength(['Кондитерские изделия', 'Леденцы', 'Печенье'])" id="pastry">Кондитерские изделия:</h2>
        <div v-if="categoryLength(['Кондитерские изделия', 'Леденцы', 'Печенье'])" class="category">
            <div v-for="n in 3" v-bind:key=n class="col">
                <Card v-for="item in itemsSubset(n, ['Кондитерские изделия', 'Леденцы', 'Печенье'])" v-bind:key=item.nameEng :item=item :query=query />
            </div>
        </div>
        <h2 v-if="categoryLength('Мелкоштучные изделия')" id="singles">Мелкоштучные изделия:</h2>
        <div v-if="categoryLength('Мелкоштучные изделия')" class="category">
            <div v-for="n in 3" v-bind:key=n class="col">
                <Card v-for="item in itemsSubset(n, 'Мелкоштучные изделия')" v-bind:key=item.nameEng :item=item :query=query />
            </div>
        </div>
        <h2 v-if="categoryLength('Пироги')" id="pies">Пироги:</h2>
        <div v-if="categoryLength('Пироги')" class="category">
            <div v-for="n in 3" v-bind:key=n class="col">
                <Card v-for="item in itemsSubset(n, 'Пироги')" v-bind:key=item.nameEng :item=item :query=query />
            </div>
        </div>
        <h2 v-if="categoryLength(['Хлеба, багеты', 'Сухарики'])" id="bread">Хлеба и багеты:</h2>
        <div v-if="categoryLength(['Хлеба, багеты', 'Сухарики'])" class="category">
            <div v-for="n in 3" v-bind:key=n class="col">
                <Card v-for="item in itemsSubset(n, ['Хлеба, багеты', 'Сухарики'])" v-bind:key=item.nameEng :item=item :query=query />
            </div>
        </div>
        <h2 v-if="categoryLength('Напитки')" id="drinks">Напитки:</h2>
        <div v-if="categoryLength('Напитки')" class="category">
            <div v-for="n in 3" v-bind:key=n class="col">
                <Card v-for="item in itemsSubset(n, 'Напитки')" v-bind:key=item.nameEng :item=item :query=query />
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
            items: items,
            query: ''
        }
    },
    methods: {
        itemsSubset: function(col, category) {
            return this.items.filter((v, i) => (i % 3 === col-1) && category.includes(v.category));
        },
        categoryLength: function(category) {
            let cropped = this.items.filter((v) => category.includes(v.category));
            let result = cropped.filter((v) => v.name.toLowerCase().includes(this.query.toLowerCase()));
            return result.length;
        }
    }
}
</script>

<style scoped>
#menu {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%);
    padding-top: 80px;
    padding-bottom: 40px;
    margin-bottom: 60px;
}

#menu input {
    color: #b4a89c;
    background-color: #F8F3E7;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    padding: 12px;
    width: 40em;
    border: none;
    border-bottom: 2px solid #F8F3E7;
    border-radius: 6px;
    background-image: url("../assets/search.svg");
    background-repeat: no-repeat;
    background-position: center left;
    background-size: 2em;
    background-position-x: 20px;
}

#menu input:focus {
    outline: none;
    border-bottom: 2px solid #b4a89c;
    color: #3a3a3a;
}

.buttons {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: top;
    justify-content: space-evenly;
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 30px;
}

.buttons h4 {
    font-family: 'Playfair Display', serif;
    font-size: 17px;
    font-weight: 100;
    color: #3a3a3a;
}

.buttons a {
    width: 204.8px;
    transition: transform .2s;
    cursor: pointer;
    text-decoration: none;
}

.buttons a:hover {
    transform: scale(1.05);
}

.buttons img {
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
    #menu {
        padding-top: 4vh;
        padding-bottom: 4vh;
    }

    #menu input {
        width: 85%;
    }

    .buttons {
        padding: 0px;
    }

    .category {
        display: inline-block;
        padding: 0px;
        width: 90%;
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

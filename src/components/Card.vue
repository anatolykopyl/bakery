<template>
    <div class="card" v-on:click='expanded=!expanded'>
        <h4>{{ item.name }}</h4>
        <p>{{ item.mainIng }}</p>
        <p v-if=expanded class="light">{{ item.ing }}</p>
        <span class="footer">
            <p>{{item.mass}} {{unit}}</p>
            <p v-if=expanded class='light'>
                {{ item.energ }}<br />
                <span v-if="item.prots && item.fats && item.carbs">
                    Б: {{item.prots}}, Ж: {{item.fats}}, У: {{item.carbs}}
                </span>
            </p>
            <p class="price">{{ cost }}</p>
        </span>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        item: Object
    },
    data() {
        return {
            expanded: false
        }
    },
    computed: {
        //  У некоторых товаров цена указана без символа рубля, легче просто его тут добавить.
        cost: function() {
            return isNaN(this.item.cost) ? this.item.cost : this.item.cost + " ₽"
        },
        unit: function() {
            // У некоторых товаров указана масса, но единицей измерения являются штуки.
            // Вероятно стоит еще указывать количество (1 шт.)?
            if (this.item.mass < 1 && this.item.unit === "шт.") {
                return "кг";
            } else {
                return this.item.unit;
            }
        }
    }
}
</script>

<style scoped>
.card {
    border: black solid;
    border-width: 1px;
    border-radius: 10px;
    margin-bottom: 40px;
    padding: 10px;
    padding-top: 30px;
    transition: transform .2s;
    cursor: pointer;
}

.card:hover {
    background-color: rgba(233, 213, 160, 0.2);
    transform: scale(1.01);
}

h4 {
    margin: 0px;
    margin-bottom: 14px;
    font-family: 'Playfair Display', serif;
    font-weight: 300;
    font-size: 20px;
    color: #3a3a3a;
}

p:first-letter {
    text-transform: uppercase;
}

.footer {
    display: flex;
}

.footer p {
    width: 50%;
}

.light {
    font-size: smaller;
}
</style>
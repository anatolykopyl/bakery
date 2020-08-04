<template>
    <div class="main">
        <div class="side-col">
            <h2>Свяжитесь с нами</h2>
            642-06-38<br />
            <a href="mailto:info@fvolchek.ru">info@fvolchek.ru</a><br />

            <h2>Отдел персонала</h2>
            <a href="mailto:hr@fvolchek.ru">hr@fvolchek.com</a><br />

            <h2>Хотите купить нашу продукцию оптом?</h2>
            <a href="mailto:sales-b2b@fvolchek.ru">sales-b2b@fvolchek.com</a><br />

            <h2>Предложите нам</h2>
            Товары и услуги: <a href="mailto:zakupki@fvolchek.ru">zakupki@fvolchek.com</a><br />
            Предложения по аренде помещений: <a href="mailto:arenda@fvolchek.ru">arenda@fvolchek.com</a><br />

            <h2>По любым вопросам</h2>
            Филипп Вольчек<br />
            <a href="mailto:flv@fvolchek.ru">flv@fvolchek.ru</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact",
}
</script>

<style scoped>
.main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 70px;
    padding-left: 100px;
}

h2 {
    font-family: 'Playfair Display', serif;
    font-weight: 500;
}

.side-col {
    text-align: left;
    color: #3a3a3a;
}

img {
    width: 40%;
    height: auto;
    margin: 30px;
    border: rgb(253, 253, 253) solid;
    border-radius: 100%;
    border-width: 8px;
    filter: drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.4));
}

@media screen and (max-width: 1024px) {
    .main {
        padding-left: 10vw;
    }
}
</style>
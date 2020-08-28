<template>
    <div class="main">
        <div class="side-col">
            <h2>Свяжитесь с нами</h2>
            420-13-37<br />
            <a href="mailto:info@atolchek.ru">info@atolchek.ru</a><br />

            <h2>Отдел персонала</h2>
            <a href="mailto:hr@atolchek.ru">hr@atolchek.com</a><br />

            <h2>Хотите купить нашу продукцию оптом?</h2>
            <a href="mailto:sales-b2b@atolchek.ru">sales-b2b@atolchek.com</a><br />

            <h2>Предложите нам</h2>
            Товары и услуги: <a href="mailto:zakupki@atolchek.ru">zakupki@atolchek.com</a><br />
            Предложения по аренде помещений: <a href="mailto:arenda@atolchek.ru">arenda@atolchek.com</a><br />

            <h2>По любым вопросам</h2>
            Анатолий Тольчек<br />
            <a href="mailto:flv@atolchek.ru">flv@atolchek.ru</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact",
    mounted () {
        window.scrollTo(0, 0);
    }
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
<template>
    <div class="main">
        <img src="@/assets/interior.png">
        <div class='text'>
            <h2>ДРУЗЬЯ!</h2>
            Вы можете заказать любую продукцию к Вашему празднику.<br />
            Для этого необходимо:<br />
            Оформить заказ у продавца в булочной (в любой день, но не позднее 14:00 накануне дня получения),
            оплатить заказ при получении в указанный день.
        </div>
    </div>
</template>

<script>
export default {
    name: "Order",
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
    padding: 70px;
    padding-top: 70px;
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

.text {
    width: 40%;
}

h2 {
    margin-top: 0px;
    font-family: 'Playfair Display', serif;
    font-weight: 500;
    font-size: 30px;
    color: #3a3a3a;
}

@media screen and (max-width: 1024px) {
    .main {
        display: inherit;
    }

    img {
        width: 80%;
        height: auto;
    }

    .text {
        width: 100%;
    }
}
</style>
<template>
    <div id="app">
        <div id="nav">
            <span class="tiny-logo">
                <img class="tiny-logo" src="@/assets/flag.png" v-bind:style='{ "transform": tinyOffset }'>
            </span>
            <span id="links">
                <router-link to="/">Главная</router-link>
                <router-link to="/goods">Ассортимент</router-link>
                <router-link to="/order">Заказ</router-link>
                <router-link to="/contact-us">Контакты</router-link>
            </span>
        </div>
        <router-view id="router-view" />
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            tinyOffset: "translateY(-100px)"
        }
    },
    methods: {
        handleScroll: function() {
            let offset = window.scrollY/3-100;
            offset = Math.min(0, offset);
            this.tinyOffset = "translateY("+offset+"px)";
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,700&family=Raleway:wght@100;200;300&display=swap');

* {
    /*font-family: 'Playfair Display', serif;*/
    font-family: 'Raleway', sans-serif;
}

body {
    margin: 0px;
}

h1 {
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    color: #3a3a3a;
}

.light {
    font-weight: 200;
}

#router-view {
    margin-top: 59px;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: radial-gradient(100% 150.53% at 16.91% 0%, #F8F3E7 0%, rgba(248, 243, 231, 0.06) 100%);
}

#nav {
    width: 90%;
    height: 59px;
    padding-right: 300px;
    background-color: #FAEED1;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10000;
    /*box-shadow: 0px 0px 6px black;*/
}

#nav a {
    color: #656565;
    margin-left: 30px;
    margin-right: 30px;
    text-decoration: none;
}

#nav a:hover {
    color: black;
}

#nav a.router-link-exact-active {
    color: black;
    text-decoration: underline;
}

img.tiny-logo {
    width: auto;
    height: 100px;
    margin-top: 44px;
    margin-left: 150px;
}

@media screen and (max-width: 1024px) {
    #nav {
        width: 100%;
        height: 59px;
        padding-right: 0px;
        background-color: #FAEED1;
        position: fixed;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
        
    #nav a {
        margin-left: 10px;
        margin-right: 10px;
    }

    span.tiny-logo {
        display: none;
    }

    #links {
        width: 100%;
    }
}
</style>

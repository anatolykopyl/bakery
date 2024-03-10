<template>
    <div id="header"></div>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style scoped>
#header {
    background: url('../assets/headcut.png') no-repeat top;
    background-size: cover;
    aspect-ratio: 2000/388;
}

@media screen and (max-width: 1024px) {
    #header {
        background: url('../assets/head.png') no-repeat top;
        background-size: contain;
    }
}
</style>

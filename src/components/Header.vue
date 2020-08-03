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
    background: url('../assets/headcut.png') no-repeat center;
    height: 388px;
}

@media screen and (max-width: 1024px) {
    #header {
        background: url('../assets/head.png') no-repeat center;
        background-size: contain;
        height: 0;
        padding-top: 17.25%; /* (img-height / img-width * container-width) */
                /* (388 / 2000 * 100) */
    }
}
</style>

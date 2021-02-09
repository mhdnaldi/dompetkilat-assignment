<template>
    <div class="home">
        <Header />
    </div>
</template>

<script>
import Header from '../components/Header/Header.vue';

export default {
    components: {
        Header,
    },
};
</script>

<style scoped>
.home {
    width: 60%;
    margin: 0 auto;
}
</style>

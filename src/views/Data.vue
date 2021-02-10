<template>
    <div class="container">
        <Header />
        <Title />
    </div>
</template>

<script>
import Header from '../components/Header/Header.vue';
import Title from '../components/Title/Title.vue';

export default {
    components: {
        Header,
        Title,
    },
};
</script>

<style scoped>
.container {
    width: 50%;
    margin: 0 auto;
}
</style>

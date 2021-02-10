<template>
    <div class="home">
        <Header />
        <Title />
        <Card />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from '../components/Header/Header.vue';
import Title from '../components/Title/Title.vue';
import Card from '../components/Card/Card.vue';

export default {
    components: {
        Header,
        Title,
        Card,
    },
    mounted() {
        this.getData();
    },
    methods: {
        ...mapActions(['getData']),
    },
};
</script>

<style scoped>
.home {
    width: 60%;
    margin: 0 auto;
}
</style>

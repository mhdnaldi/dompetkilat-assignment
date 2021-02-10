<template>
    <div class="home">
        <Header />
        <Title />
        <Card
            v-for="(content, index) in contents"
            :key="index"
            :content="content"
            @click="getInfo(content)"
        />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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
        getInfo(data) {
            console.log(data, 'test');
        },
    },
    computed: {
        ...mapGetters(['contents']),
    },
};
</script>

<style scoped>
.home {
    width: 50%;
    margin: 0 auto;
}
</style>

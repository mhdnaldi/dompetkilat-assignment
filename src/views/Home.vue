<template>
    <div class="home">
        <Header />
        <Title />
        <Card
            v-for="(content, index) in contents"
            :key="index"
            :content="content"
            :invoice="() => getInvoice(content)"
        />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Header from '../components/Header/Header.vue';
import Title from '../components/Title/Title.vue';
import Card from '../components/Card/Card.vue';
// import { main } from '../json/main';

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
        ...mapActions(['getData', 'getInvoiceData']),
        getInvoice(data) {
            // SLICE ENDPOINT
            let query = data.sub.slice(8, data.sub.length); // remove "invoice/"
            query = query.slice(0, query.length - 5); // remove ".json"
            this.getInvoiceData(query);
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

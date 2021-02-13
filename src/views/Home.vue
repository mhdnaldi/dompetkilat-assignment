<template>
    <div class="home">
        <Header />
        <Title />
        <Card
            v-for="(content, index) in contents"
            :key="index"
            :content="content"
            :invoiceData="invoiceData"
            :getEndpoint="(data) => getEndpoint(content, data)"
            :show="showCard"
        />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Header from '../components/Header/Header.vue';
import Title from '../components/Title/Title.vue';
import Card from '../components/Card/Card.vue';
import filteredEndpoint from '../helper/filteredEndpoint';

export default {
    components: {
        Header,
        Title,
        Card,
    },
    mounted() {
        this.getData();
    },
    data() {
        return {
            showCard: false,
        };
    },
    methods: {
        ...mapActions(['getData', 'getInvoiceData']),
        getEndpoint(data, subData) {
            this.showCard = !this.showCard;
            this.getInvoiceData(filteredEndpoint(data, subData));
        },
    },
    computed: {
        ...mapGetters(['contents', 'invoiceData']),
    },
};
</script>

<style scoped>
.home {
    width: 50%;
    margin: 0 auto;
}
</style>

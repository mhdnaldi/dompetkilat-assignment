<template>
    <div class="container">
        <Header />
        <Title />
        <Form :filteredDataProps="filteredData" :sortProps="sortBy" />
        <Table />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Header from '../components/Header/Header.vue';
import Title from '../components/Title/Title.vue';
import Table from '../components/Table/Table.vue';
import Form from '../components/Form/Form.vue';

export default {
    data() {
        return {
            search: '',
        };
    },
    components: {
        Header,
        Title,
        Table,
        Form,
    },
    methods: {
        ...mapActions(['getFilteredData', 'getInvoiceData']),
        filteredData(event) {
            const data = {
                query: event.target.value,
                endPoint: this.endPoint,
            };
            this.getFilteredData(data).then(() => this.getInvoiceData());
        },
    },
    computed: {
        ...mapGetters(['endPoint', 'sortBy']),
    },
};
</script>

<style scoped>
.container {
    width: 50%;
    margin: 0 auto;
}
</style>

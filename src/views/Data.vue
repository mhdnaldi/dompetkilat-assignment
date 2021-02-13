<template>
    <div class="container">
        <Header />
        <Title />
        <Form
            :filteredDataProps="filteredData"
            :sortProps="sortBy"
            :queryParamsProps="queryParams"
        />
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
            queryParams: {
                query: '',
                endPoint: '',
            },
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
            this.queryParams = {
                query: event.target.value,
                endPoint: this.endPoint,
            };
            this.getFilteredData(this.queryParams).then(() =>
                this.getInvoiceData(),
            );
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

<template>
    <div class="container">
        <Header />
        <Title />
        <Form />
        <Table />
    </div>
</template>

<script>
import Header from '../components/Header/Header.vue';
import Title from '../components/Title/Title.vue';
import Table from '../components/Table/Table.vue';
import Form from '../components/Form/Form.vue';

export default {
    components: {
        Header,
        Title,
        Table,
        Form,
    },
};
</script>

<style scoped>
.container {
    width: 50%;
    margin: 0 auto;
}
</style>

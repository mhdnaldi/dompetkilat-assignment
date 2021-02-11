<template>
    <div class="table">
        <table>
            <tr>
                <th v-for="key in allData.key" :key="key">
                    {{ key.toUpperCase() }}
                </th>
            </tr>
            <tr v-for="(data, index) in allData.data" :key="index">
                <td>{{ data.name }}</td>
                <td>
                    <strong>Rp.{{ data.amount }}</strong>
                </td>
                <td>{{ data.tenor || data.return }}</td>
                <td>{{ data.rate }}</td>
                <td>{{ data.type }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['allData']),
    },
};
</script>

<style scoped>
.table {
    overflow: scroll;
    width: 100%;
    height: 250px;
}

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto;
}

td,
th {
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    padding: 8px;
    height: 40px;
}

td {
    text-align: center;
}
/* 
tr:nth-child(even) {
    background-color: #dddddd;
} */
</style>

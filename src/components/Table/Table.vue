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
                <td style="text-align: right">
                    <strong>Rp.{{ data.amount }}</strong>
                </td>
                <td>{{ data.tenor || data.return }}</td>
                <td>{{ data.type || data.grade }}</td>
                <td>{{ data.rate }}</td>
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
</style>

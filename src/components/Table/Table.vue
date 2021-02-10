<template>
    <div class="table">
        <table>
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Tenor</th>
                <th>Rate</th>
                <th>Type</th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
            <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
            </tr>
            <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
                <td>Helen Bennett</td>
                <td>UK</td>
            </tr>
            <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
            </tr>
            <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
.table {
    overflow: scroll;
    width: 100%;
    height: 300px;
}

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
}

td,
th {
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
/* 
tr:nth-child(even) {
    background-color: #dddddd;
} */
</style>

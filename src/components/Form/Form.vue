<template>
    <div class="form">
        <div class="img">
            <img src="../../assets/images/search.png" alt="" />
        </div>
        <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            @input="filteredDataProps"
        />
        <select v-model="sort" @change="sortBy(sort)">
            <option
                v-for="(value, index) in sortProps"
                :key="index"
                :value="value"
            >
                {{ value }}
            </option>
        </select>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import queryParamsValidation from '../../helper/queryParamsValidation';

export default {
    data() {
        return {
            sort: '',
        };
    },
    props: ['filteredDataProps', 'sortProps', 'queryParamsProps'],
    methods: {
        ...mapActions(['getQueryFilteredData']),
        sortBy(sort) {
            console.log(sort);
            this.$emit('query-string', this.sort);
            const queryParams = {
                ...this.queryParamsProps,

                endPoint: this.endPoint,
                sortBy: queryParamsValidation(
                    sort,
                    this.queryParamsProps.query,
                ),
            };
            this.getQueryFilteredData(queryParams);
        },
    },
    computed: {
        ...mapGetters(['endPoint']),
    },
};
</script>

<style scoped>
.form {
    height: 35px;
    width: 100%;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 40px 1fr 90px;
}

.img {
    width: 40px;
    position: relative;
    background-color: rgb(235, 235, 235);
}
img {
    width: 30px;
    position: absolute;
    left: 5px;
    top: 3px;
}

input[type='text'] {
    outline: none;
    text-indent: 8px;
    border: 1px solid #ddd;
}

select {
    border: 1px solid #ddd;
    outline: none;
    background-color: rgb(151, 150, 150);
    border: none;
    border-radius: 2px;
    color: #111;
    text-align: center;
}

::placeholder {
    text-indent: 8px;
}
</style>

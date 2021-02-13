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
            <option value="0">All</option>
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
import { mapMutations, mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            sort: '',
        };
    },
    props: ['filteredDataProps', 'sortProps', 'queryParamsProps'],
    methods: {
        ...mapActions(['getQueryFilteredData']),
        ...mapMutations(['setSort']),
        sortBy(sort) {
            let result = '';
            switch (sort) {
                case '< 0':
                    result = `return=asc`;
                    break;
                case '> = 0':
                    result = `return=desc`;
                    break;
                case 'SBR':
                    result =
                        this.queryParamsProps.query !== ''
                            ? `&type=${sort}`
                            : `?type=${sort}`;
                    break;
                case 'ST':
                    result =
                        this.queryParamsProps.query !== ''
                            ? `&type=${sort}`
                            : `?type=${sort}`;
                    break;
                case 'A':
                    result =
                        this.queryParamsProps.query !== ''
                            ? `&grade=${sort}`
                            : `?grade=${sort}`;
                    break;
                case 'B+':
                    result =
                        this.queryParamsProps.query !== ''
                            ? `&grade=${sort}`
                            : `?grade=${sort}`;
                    break;
                case 'B':
                    result =
                        this.queryParamsProps.query !== ''
                            ? `&grade=${sort}`
                            : `?grade=${sort}`;
                    break;
                default:
                    result = '';
            }
            const queryParams = {
                ...this.queryParamsProps,
                endPoint: this.endPoint,
                sortBy: result,
            };
            console.log(queryParams);
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
    color: #fff;
}

::placeholder {
    text-indent: 8px;
}
</style>

import axios from 'axios';

export default {
    state: {
        contents: [],
        invoiceData: [],
    },
    mutations: {
        getData(state, payload) {
            state.contents = payload;
        },
        getInvoiceData(state, payload) {
            state.invoiceData = payload;
            console.log(state.invoiceData);
        },
    },
    actions: {
        getData(context) {
            return new Promise(() => {
                axios
                    .get('http://localhost:3000/main')
                    .then((res) =>
                        context.commit('getData', res.data.contents),
                    );
            });
        },
        getInvoiceData(context, payload) {
            return new Promise(() => {
                axios
                    .get(`http://localhost:3000/${payload}`)
                    .then((res) =>
                        context.commit('getInvoiceData', res.data.contents),
                    );
            });
        },
    },
    getters: {
        contents(state) {
            return state.contents;
        },
    },
};

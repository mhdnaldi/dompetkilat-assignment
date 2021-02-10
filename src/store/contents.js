import axios from 'axios';

export default {
    state: {
        contents: [],
        invoiceData: [],
        allData: [],
    },
    mutations: {
        getData(state, payload) {
            state.contents = payload;
            console.log(payload);
        },
        getInvoiceData(state, payload) {
            if (payload.length < 5) {
                state.invoiceData = payload;
            } else {
                state.allData = payload;
            }
            console.log(state.allData);
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
        invoiceData(state) {
            return state.invoiceData;
        },
    },
};

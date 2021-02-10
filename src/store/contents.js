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
        getInvoiceData() {},
    },
    actions: {
        getData(context) {
            return new Promise(() => {
                axios.get('http://localhost:3000/main').then((res) => {
                    context.commit('getData', res.data.contents);
                });
            });
        },
        getInvoiceData(context, payload) {
            return new Promise(() => {
                axios
                    .get(`http://localhost:3001/contents/${payload}`)
                    .then((res) => console.log(res));
            });
        },
    },
    getters: {
        contents(state) {
            return state.contents;
        },
    },
};

import axios from 'axios';
import router from '../router/index';

export default {
    state: {
        contents: [],
        invoiceData: [],
        allData: [],
        allDataKey: [],
    },
    mutations: {
        getData(state, payload) {
            state.contents = payload;
        },
        getInvoiceData(state, payload) {
            if (payload.length < 5) {
                state.invoiceData = payload;
            } else {
                state.allData = payload;
                state.allDataKey = Object.keys(payload[0])
                    .map((el) => el)
                    .filter((el) => el !== 'sub');
                router.push('/data');
                console.log(payload);
            }
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
        allData(state) {
            return {
                key: state.allDataKey,
                data: state.allData,
            };
        },
    },
};

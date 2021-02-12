import axios from 'axios';
import router from '../router/index';

export default {
    state: {
        contents: [],
        invoiceData: [],
        allData: [],
        allDataKey: [],
        endPoint: '',
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
            }
        },
        endPoint(state, payload) {
            state.endPoint = payload;
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
            console.log(payload);
            return new Promise(() => {
                axios
                    .get(`http://localhost:3000/${payload}`)
                    .then(
                        (res) =>
                            context.commit('getInvoiceData', res.data.contents),
                        context.commit('endPoint', payload),
                    );
            });
        },
        test() {
            return new Promise(() => {
                axios
                    .get(`http://localhost:3000/sbn?contents.type=ST`)
                    .then((res) => console.log(res));
            });
        },
        getFilteredData(context, payload) {
            console.log(payload);
            return new Promise(() => {
                axios
                    .get(
                        `http://localhost:3000/${payload.endPoint}?contents.name=${payload.query}`,
                    )
                    .then((res) => console.log(res));
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
        endPoint(state) {
            return state.endPoint;
        },
    },
};

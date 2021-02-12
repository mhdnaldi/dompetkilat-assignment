import axios from 'axios';
import router from '../router/index';
import sortFilter from '../helper/sortFilter';

export default {
    state: {
        contents: [],
        invoiceData: [],
        allData: [],
        allDataKey: [],
        endPoint: '',
        sort: [],
    },
    mutations: {
        getData(state, payload) {
            state.contents = payload;
        },
        getInvoiceData(state, payload) {
            // BUG DISINI
            console.log(payload);
            if (payload.length < 5) {
                state.invoiceData = payload;
            } else {
                state.allData = payload;
                state.sort = sortFilter(state.endPoint);
                console.log(state.sort);
                state.allDataKey = Object.keys(payload[0])
                    .map((el) => el)
                    .filter((el) => el !== 'sub');
                router.push('/data');
            }
        },
        getFilteredData(state, payload) {
            state.allData = payload;
        },
        endPoint(state, payload) {
            state.endPoint = payload;
        },
        setSort(state, payload) {
            state.sort = payload;
        },
    },
    actions: {
        getData(context) {
            return new Promise(() => {
                axios
                    .get('http://localhost:3000/main')
                    .then((res) => context.commit('getData', res.data));
            });
        },
        getInvoiceData(context, payload) {
            return new Promise(() => {
                axios
                    .get(`http://localhost:3000/${payload}`)
                    .then(
                        (res) => context.commit('getInvoiceData', res.data),
                        context.commit('endPoint', payload),
                    );
            });
        },
        getFilteredData(context, payload) {
            return new Promise(() => {
                // if (payload.query === '') {
                //     axios
                //         .get(`http://localhost:3000/${payload.endPoint}`)
                //         .then((res) => {
                //             context.commit('getFilteredData', res.data);
                //         });
                // } else {
                axios
                    .get(
                        `http://localhost:3000/${
                            payload.endPoint
                        }?name_like=${payload.query.toUpperCase()}`,
                    )
                    .then((res) => {
                        context.commit('getFilteredData', res.data);
                    });
                // }
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
        sortBy(state) {
            return state.sort;
        },
    },
};

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
        queryParams: '',
    },
    mutations: {
        setData(state, payload) {
            state.contents = payload;
        },
        setInvoiceData(state, payload) {
            if (payload.length < 5) {
                state.invoiceData = payload;
            } else {
                state.allData = payload;
                state.sort = sortFilter(state.endPoint);
                state.allDataKey = Object.keys(payload[0])
                    .map((el) => el)
                    .filter((el) => el !== 'sub');
                router.push('/data');
            }
        },
        setFilteredData(state, payload) {
            state.allData = payload;
        },
        setEndPoint(state, payload) {
            state.endPoint = payload;
        },
        setSort(state, payload) {
            state.queryParams = payload;
        },
    },
    actions: {
        getData(context) {
            return new Promise(() => {
                axios
                    .get('http://localhost:3000/main')
                    .then((res) => context.commit('setData', res.data));
            });
        },
        getInvoiceData(context, payload) {
            return new Promise(() => {
                axios
                    .get(`http://localhost:3000/${payload}`)
                    .then(
                        (res) => context.commit('setInvoiceData', res.data),
                        context.commit('setEndPoint', payload),
                    );
            });
        },
        getFilteredData(context, payload) {
            return new Promise(() => {
                axios
                    .get(
                        `http://localhost:3000/${payload.endPoint}${
                            payload.query !== ''
                                ? `?name_like=${payload.query.toUpperCase()}`
                                : ''
                        }${payload.sortBy}`,
                    )
                    .then((res) => {
                        context.commit('setFilteredData', res.data);
                    });
            });
        },
        getQueryFilteredData(context, payload) {
            return new Promise(() => {
                axios
                    .get(
                        `http://localhost:3000/${payload.endPoint}${
                            payload.query !== ''
                                ? `?name_like=${payload.query.toUpperCase()}`
                                : ''
                        }${payload.sortBy}`,
                    )
                    .then((res) => {
                        context.commit('setFilteredData', res.data);
                    });
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
        infiniteScroll(state) {
            return {
                limit: state.limit,
                busy: state.busy,
            };
        },
    },
};

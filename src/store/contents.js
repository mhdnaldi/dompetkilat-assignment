import axios from 'axios';

export default {
    state: {
        contents: [],
    },
    mutations: {
        getData(state, payload) {
            state.contents = payload;
            console.log(state.contents);
        },
    },
    actions: {
        getData(context) {
            return new Promise((resolve) => {
                axios.get('http://localhost:3000/contents').then((res) => {
                    context.commit('getData', res.data);
                    resolve(res.data);
                });
            });
        },
    },
    getters: {
        data(state) {
            console.log(state);
            return state.contents;
        },
    },
};

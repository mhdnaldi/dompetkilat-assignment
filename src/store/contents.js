import axios from 'axios';

export default {
    state: {
        contents: [],
    },
    mutations: {
        getData(state, payload) {
            state.contents = payload;
        },
    },
    actions: {
        getData(context) {
            return new Promise(() => {
                axios
                    .get('http://localhost:3000/contents')
                    .then((res) => context.commit('getData', res.data));
            });
        },
    },
    getters: {
        contents(state) {
            return state.contents;
        },
    },
};

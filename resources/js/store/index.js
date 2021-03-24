import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        message: 'Welcome, Beautiful People!',
        user: {},
    },
    getters: {
        getMessage(state) {
            return state.message;
        },
        getUser(state){
            return state.user;
        }
    },
    mutations: {
        SET_USER(state, data){
            state.user = data;
        }
    }
});

export default store;

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userId: localStorage.getItem('userId') ? localStorage.getItem('userId') : '',
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
    },
    mutations: {
        saveUserInfo(state, user) {
            state.user = user;
            localStorage.setItem("user", JSON.stringify(user));
        },
        saveUserId(state, userId) {
            state.userId = userId;
            localStorage.setItem("userId", userId);
        }
    },
    actions: {
        saveUserInfo(store, user) {
            store.commit("saveUserInfo", user);
        },
        saveUserId(store, userId) {
            store.commit("saveUserId", userId);
        }
    },
    modules: {}
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userId: "cd492e33b4814bfaac61db834243b2a6",
        user: {}
    },
    mutations: {
        saveUserInfo(state, user) {
            state.user = user;
        },
        saveUserId(state, userId) {
            state.userId = userId;
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

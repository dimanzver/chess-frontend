import {getApiHost} from "@/utils/urls";

export default {
    namespaced: true,
    state: {
        get token(){
            return localStorage.getItem('access_token');
        },

        set token(access_token){
            if(!access_token){
                localStorage.removeItem('access_token');
            }else{
                localStorage.setItem('access_token', access_token);
            }
        },

        loading: true,
        user: null,
    },

    getters: {
        isAuthenticated(state){
            return !!state.token && state.user;
        },
    },

    mutations: {
        AUTH_SUCCESS(state, token) {
            state.token = token;
        },

        AUTH_LOGOUT(state) {
            state.token = null;
        },

        SET_USER(state, user) {
            state.user = user;
        },

        SET_LOADING(state, loading) {
            state.loading = loading;
        },
    },

    actions: {
        async loadUser({commit}) {
            try{
                let response = await fetch(getApiHost() + '/auth/user', {
                    headers: {
                        Authorization: localStorage.getItem('access_token'),
                    },
                });
                if(!response.ok)
                    throw response;
                let user = await response.json();
                commit('SET_USER', user);
            }finally {
                commit('SET_LOADING', false);
            }
        },

        async logout({commit}){
            commit('AUTH_LOGOUT');
        },
    },
};
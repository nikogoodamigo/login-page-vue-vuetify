import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
axios.defaults.baseURL = '';

const store = new Vuex.Store({
    modules: [],
    plugins: [],
    state:{
        token: localStorage.getToken('access_token') || null,
    },
    getters:{
        loggedIn(state){
            return state.token !== null
        },
    },
    mutations:{
        retriveToken(state, token) {
            state.token = token
        }
    },
    actions:{
        getToken(context, credentials){
            return new Promise((resolve, reject) => {
                axios.post('/login', {
                    username: credentials.username,
                    password: credentials.password,
                })
                .then(response =>{
                    const token = response.data.access_token
                    localStorage.setItem('access_token', token)
                    context.commit('getToken', token)
                    resolve(response)
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
            })
        }
    }
});

export default store;


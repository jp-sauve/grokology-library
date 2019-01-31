import Vue from "vue";
import Vuex from "vuex";
import { firebaseMutations, firebaseAction } from "vuexfire";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    user: null
  },
  mutations: {
    ...firebaseMutations
  },
  getters: {
    books: state => state.books
  },
  actions: {
    
  }
});

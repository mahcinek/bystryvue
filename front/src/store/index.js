import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import example from './module-example';

Vue.use(Vuex);

const baseURL = 'http://api/api/v1/'

const store = new Vuex.Store({
  modules: {
    example,
  },
});

export default store;

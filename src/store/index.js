import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

import auth from './modules/auth';
import game from "@/store/modules/game";

export default new Vuex.Store({
  modules: {
    auth, game,
  },
  strict: debug,
})

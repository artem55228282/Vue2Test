import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
import card from './modules/card'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    post,
    // eslint-disable-next-line no-undef
    card
  }
})

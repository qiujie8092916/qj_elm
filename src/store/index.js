import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  latitude: '', // 当前位置纬度
  longitude: '', // 当前位置经度
  userInfo: null  // 用户信息
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

import * as actions from './actions'
import state, { PlantEventState } from './state'
import mutations from './mutations'
import { Module } from 'vuex'
import { RootState } from '@/store'

const store: Module<PlantEventState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default store

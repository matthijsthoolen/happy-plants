export default {
  LOAD_HOUSEHOLD_PROGRESS (state) {
    state.household.loading = true
  },

  LOAD_HOUSEHOLD_SUCCESS (state, payload) {
    console.log(payload)
    state.household.loading = false
    state.household.finished = true
    state.household = payload.household || state.household
  },

  UPDATE_HOUSEHOLD_ID (state, payload) {
    state.household = Object.assign({},
      state.household,
      { id: payload.id || state.household.id }
    )
  }
}

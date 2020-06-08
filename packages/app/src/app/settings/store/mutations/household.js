export default {
  LOAD_HOUSEHOLD_PROGRESS (state) {
    state.household.loading = true
  },

  LOAD_HOUSEHOLD_SUCCESS (state, payload) {
    console.log(payload)
    state.household.loading = false
    state.household.finished = true
    state.updated = Date.now()
    state.household = payload.household || state.tags.household
  },

  UPDATE_HOUSEHOLD_ID (state, payload) {
    console.log(payload)
    state.household = Object.assign({},
      state.household,
      { id: payload.id || state.household.id }
    )
  }
}

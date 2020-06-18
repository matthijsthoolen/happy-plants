export default {
  WATER_PLANT_PROGRESS (state) {
    state.updated = Date.now()
  },

  WATER_PLANTS_SUCCESS (state, payload) {
    state.updated = Date.now()

    for (const item of payload.items) {
      const index = state.plants.data.findIndex(p => p.guid === item.guid)
      state.plants.data[index].plantActions = item.plantActions
    }

    // state.plants.data.push(payload.item)
  },

  WATER_PLANTS_FAILURE (state) {
    state.plants.error = true
  }
}

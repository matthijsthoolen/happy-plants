import {
  updateEntry as updateEntryFire,
  getEntry as getEntryFire
} from '@/api/firebase'

import {
  updateEntry as updateEntryLF
} from '@/api/localforage'

const namespace = 'plant-'
const folder = 'plants'

export async function waterPlants ({ state, commit }, items) {
  commit('WATER_PLANT_PROGRESS')

  const householdOwnerId = state.household.id ?? state.user.id

  try {
    await Promise.all(items.map(async item => {
      const path = [['users', householdOwnerId], [folder, item.guid]]
      let plantActions = {}

      if (state.storage.type === 'cloud') {
        let plant = []
        const data = await getEntryFire(path)
        if (data.exists) {
          plant = data.data()
          plantActions = plant.plantActions ?? {}
        }
      }

      plantActions[Date.now()] = 'water'
      item.plantActions = plantActions

      await updateEntryFire(path, { plantActions: plantActions })
      await updateEntryLF(namespace + item.guid, item)
    }))
  } catch (error) {
    commit('WATER_PLANTS_FAILURE')
  }

  if (!state.storage.migrationMode) {
    commit('WATER_PLANTS_SUCCESS', { items })
  }
}

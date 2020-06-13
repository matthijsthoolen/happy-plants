import {
  updateEntry as updateEntryFire,
  getEntry as getEntryFire
} from '@/api/firebase'

const folder = 'plants'

export async function waterPlants ({ state, commit }, items) {
  commit('WATER_PLANT_PROGRESS')

  if (state.storage.type === 'cloud') {
    const householdOwnerId = state.household.id ?? state.user.id

    try {
      await Promise.all(items.map(async item => {
        const path = [['users', householdOwnerId], [folder, item.guid]]
        const data = await getEntryFire(path)
        let plantActions = {}

        let plant = []
        if (data.exists) {
          plant = data.data()
          plantActions = plant.plantActions ?? {}
        }

        plantActions[Date.now()] = 'water'

        const lastAction = Object.keys(plantActions).reduce((a, b) => plantActions[a] > plantActions[b] ? a : b)

        console.log(typeof lastAction)

        const oneDay = 24 * 60 * 60 * 1000
        const firstDate = new Date(parseInt(lastAction))
        const secondDate = new Date()

        const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay))
        console.log(diffDays)

        await updateEntryFire(path, { plantActions: plantActions })
      }))
    } catch (error) {
      commit('WATER_PLANTS_FAILURE')
    }
  }

  // await Promise.all(items.map(item => deleteEntryLF(namespace + item.guid, item)))

  // if (!state.storage.migrationMode) {
  //   commit('WATER_PLANTS_SUCCESS', { items })
  // }
}

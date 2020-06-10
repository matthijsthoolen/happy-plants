import {
  addEntry as addEntryFire,
  updateEntry as updateEntryFire,
  getEntry as getEntryFire
} from '@/api/firebase'

export async function loadHousehold ({ state, commit }, data = {}) {
  commit('LOAD_HOUSEHOLD_PROGRESS')
  let household = []

  if (state.storage.type === 'cloud' && state.user.id) {
    data = await getEntryFire([['users', state.user.id], ['household', 'main']])
    if (data.exists) {
      household = data.data()
    }
  }

  commit('LOAD_HOUSEHOLD_SUCCESS', { household })
}

export async function addHouseholdId ({ state, commit }, data) {
  commit('UPDATE_HOUSEHOLD_ID', data)

  if (state.storage.type === 'cloud') {
    await addEntryFire([['users', state.user.id], ['household', 'main']], {
      id: state.household.id,
      added: Date.now()
    })
  }
}

export async function updateHouseholdId ({ state, commit }, data) {
  commit('UPDATE_HOUSEHOLD_ID', data)

  if (state.storage.type === 'cloud') {
    await updateEntryFire([['users', state.user.id], ['household', 'main']], { id: state.household.id })
  }
}

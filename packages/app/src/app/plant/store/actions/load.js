import { getUrlFromBlob } from '@/utils/blob'
import {
  getEntry as getEntryLF,
  addEntry as addEntryLF,
  deleteEntry as deleteEntryLF
} from '@/api/localforage'
import { firestoreQuery, downloadFile, updateEntry as updateEntryFire } from '@/api/firebase'

const namespace = 'plant-'
const folder = 'plants'
const orderMap = new Map([
  ['alphabetical', ['name', 'asc']],
  ['latest', ['created', 'desc']]
])

async function loadPlantsFirestore (state, commit) {
  const plants = []
  const [orderBy, sortBy] = orderMap.get(state.settings.orderBy)
  const householdOwnerId = state.household.id ?? state.user.id

  const snapshot = await firestoreQuery([['users', householdOwnerId], [folder]])
    .orderBy(orderBy, sortBy)
    .get()

  if (!state.plants.data.length) {
    commit('LOAD_PLANTS_TOTAL_COUNT', { total: snapshot.size })
  }

  for (const doc of snapshot.docs) {
    const path = [['users', householdOwnerId], [folder, doc.id]]
    const plant = await firestoreQuery(path).get()
    const plantData = plant.data()
    const plantExists = state.plants.data.find(p => p.guid === plantData.guid)

    // console.log(plantData)

    if (plantData.imageURL && (plantData.imageURLMedium == null || plantData.imageURLThumb == null)) {
      // plantData.imageURLLarge = await downloadFile(plantData.imageURL.replace('.png', '_1000x1000.png'))
      plantData.imageURLMedium = await downloadFile(plantData.imageURL.replace('.png', '_500x500.png'))
      plantData.imageURLThumb = await downloadFile(plantData.imageURL.replace('.png', '_175x175.png'))

      await updateEntryFire(path, {
        imageURLMedium: plantData.imageURLMedium,
        imageURLThumb: plantData.imageURLThumb
      })
    }

    if (plantExists) {
      if (plantData.modified > plantExists.modified) {
        commit('UPDATE_PLANT', { plant: plantData })
      }
    } else {
      if (plantData.imageURL && state.storage.migrationMode) {
        const photo = await fetch(plantData.imageURL)
        plantData.blob = await photo.blob()
        plantData.imageURL = getUrlFromBlob(plantData.blob)
      }

      if (!state.storage.migrationMode) {
        commit('LOAD_PLANTS_SINGLE', { plant: plantData })
        await addEntryLF(namespace + plantData.guid, plantData)
      }
    }

    plants.push(plantData)
  }

  return plants
}

async function loadPlantsLocalforage (state) {
  const plants = []
  const values = await getEntryLF(namespace)
    .then(plantData => {
      const copy = plantData
      delete copy[namespace + 'undefined']
      return copy
    })
    .then(Object.values)

  for (const item of values) {
    plants.push(item)
  }

  return plants
}

export async function loadPlants ({ state, commit }) {
  commit('LOAD_PLANTS_PROGRESS')
  let plantsFromLocalforage = []
  const householdOwnerId = state.household.id ?? state.user.id

  try {
    plantsFromLocalforage = await loadPlantsLocalforage(state)
    commit('LOAD_PLANTS_LOCALSTORAGE', { plants: plantsFromLocalforage })
  } catch (error) {
    // eslint-disable-next-line
    console.warn('Unable to load plants from storage: ', error.message)
    commit('LOAD_PLANTS_FAILURE')
  }

  if ((state.storage.type === 'cloud') && householdOwnerId) {
    try {
      const plants = await loadPlantsFirestore(state, commit)
      const removals = plantsFromLocalforage.filter(p => !plants.find(p1 => p1.guid === p.guid))

      if (plantsFromLocalforage.length && removals.length) {
        await Promise.all(removals
          .map(item => deleteEntryLF(namespace + item.guid, item))
        )
      }

      commit('LOAD_PLANTS_FIREBASE', { plants })
    } catch (error) {
      // eslint-disable-next-line
      console.warn('Unable to load plants from Firestore: ', error.message)
      commit('LOAD_PLANTS_FAILURE')
    }
  }

  commit('LOAD_PLANTS_SUCCESS')
}

export async function loadPlantItem ({ commit }, guid) {
  commit('LOAD_PLANT_ITEM', { guid })
}

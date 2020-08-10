import { Commit, Dispatch } from 'vuex'
import { v4 as uuid } from 'uuid'
import { RootState } from '@/store'
import { setLocalEntry } from '@/services/localStorage'
import logger from '@/utils/vueLogger'
import {
  setTags,
  getCollection,
  getUserDoc,
  FirestoreCollections,
  downloadFile,
} from '@/services/firebase'
import config from '@/config'
import { PlantEvent } from '@/types/plant'

export const loadPlantEvents = async (
  context: {
    commit: Commit
    dispatch: Dispatch,
    rootState: RootState
  },
  payload: { orderBy: string } = { orderBy: 'latest' }
): Promise<void> => {

}

export const createPlantEvent = async (
  context: { commit: Commit; dispatch: Dispatch; rootState: RootState },
  payload: { label: string; plantEventId?: string }
) => {

}

export const updatePlantEvent = async (
  context: { commit: Commit; dispatch: Dispatch; rootState: RootState }
) => {

}

export const deleteTags = async (
  context: { commit: Commit; dispatch: Dispatch; rootState: RootState }
) => {

}

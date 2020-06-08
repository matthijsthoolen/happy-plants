import data from './data'
import settings from './settings'
import household from './household'
import storage from './storage'
import tags from './tags'

export default {
  ...data,
  ...settings,
  ...household,
  ...storage,
  ...tags
}

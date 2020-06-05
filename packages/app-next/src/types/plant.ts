import { PlantModule } from './modules'
import { PlantTag } from './tags'

export interface Plant {
  guid: string
  created: DateConstructor
  modified: DateConstructor
  blob: Blob | null
  imageURL: string | null
  name: string
  modules: PlantModule[]
  tags: PlantTag[]
}

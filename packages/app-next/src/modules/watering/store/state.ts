import { Plant } from ' @/types/plant'

export interface PlantEventState {
  plants: {
    data: Plant[]
    loaded: boolean
  }
  events: {
    data: PlantEvent[],
    loaded: boolean
  }
}

const state: PlantEventState = {
  plants: {
    data: [],
    loaded: false,
  },
  events: {
    data: [],
    loaded: false,
  }
}

export default state

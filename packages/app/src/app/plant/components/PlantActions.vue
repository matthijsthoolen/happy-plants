<template>
  <plant-component>
    <template v-slot:icon>
      <feather-droplet />
    </template>

    <template v-slot:title>
      <h2>Plant actions</h2>
    </template>

    <template v-slot:content>
      <div class="action-description">
        <p>
          Last five plant actions are:
        </p>
        <ul id="plant-actions" style="padding-left:20px">
          <li v-for="(action, index) in sortedPlantActions" :key="index">
            {{ action }} {{ index | formatDate }}
          </li>
        </ul>
      </div>
    </template>
  </plant-component>
</template>

<script>
  import PlantComponent from './PlantComponent'
  export default {
    name: 'PlantActions',

    components: {
      'plant-component': PlantComponent,
      'feather-droplet': () =>
        import('vue-feather-icons/icons/DropletIcon' /* webpackChunkName: "icons" */)
    },

    computed: {
      sortedPlantActions () {
        const ordered = {}
        const unordered = this.plantActions
        Object.keys(unordered).sort().reverse().slice(0, 5).forEach(function (key) {
          ordered[key] = unordered[key]
        })

        return ordered
      }
    },

    props: {
      plantActions: { type: Object, default: () => {} }
    }
  }
</script>

<style lang="postcss" scoped>
  .action-description {
    color: var(--text-color-secondary);
    width: 100%;
    flex: 1;
    padding-right: var(--base-gap);
  }
</style>

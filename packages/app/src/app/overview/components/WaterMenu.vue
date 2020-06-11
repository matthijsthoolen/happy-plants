<template>
  <div class="box green water-container">
    <v-button
      aria-label="Trash"
      class="water icon"
      @click.native="activate($event)"
    >
      <template v-slot:icon>
        <feather-droplet />
      </template>
    </v-button>

    <div class="watering-info">
      <p>{{ selectionCount }}</p>
    </div>

    <v-button
      color="green"
      aria-label="Cancel water"
      class="cancel icon"
      @click.native="cancel($event)"
    >
      <template v-slot:icon>
        <feather-x />
      </template>
    </v-button>
  </div>
</template>

<script>
  export default {
    name: 'WaterMenu',

    props: {
      selected: { type: Number, default: 0 }
    },

    components: {
      'feather-droplet': () =>
        import('vue-feather-icons/icons/DropletIcon' /* webpackChunkName: "icons" */),
      'feather-x': () =>
        import('vue-feather-icons/icons/XIcon' /* webpackChunkName: "icons" */)
    },

    computed: {
      selectionCount () {
        const term = (this.selected === 1) ? 'plant' : 'plants'
        return `${this.selected} ${term} selected.`
      }
    },

    methods: {
      activate (event) {
        if (event.currentTarget) event.currentTarget.blur()
        this.$emit('water-selection')
      },
      cancel (event) {
        if (event.currentTarget) event.currentTarget.blur()
        this.$emit('cancel-selection')
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .water-container {
    display: flex;
    border-radius: 0;
    width: 100%;
    height: 100%;

    & button {
      width: var(--app-footer-size);
      height: var(--app-footer-size);
      display: flex;
      justify-content: center;
      flex: 1 0 auto;

      & svg {
        margin-right: 0;
      }

      &.water:focus,
      &:focus {
        --button-focus: transparent;
        --button-background: var(--brand-yellow);
      }
    }

    & button.water {
      --button-background: rgba(0, 0, 0, 0.2);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    & button.cancel {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .watering-info {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: left;
    color: var(--text-color-inverse);
    padding: 0 var(--base-gap);

    & p {
      display: inline-block;
      font-weight: 500;
    }
  }
</style>

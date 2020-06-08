<template>
  <better-dialog
    id="settings-tags-dialog"
    :show="show"
    @close-dialog="emitCloseDialog"
  >
    <template v-slot:headline>
      <span>Join household</span>
    </template>

    <form class="dialog-content">
      <label for="dialog-name">
        <h2>Household ID</h2>
        <input
          id="dialog-name"
          type="text"
          :value="householdIdValue"
          @change="updateHouseholdId"
        >
      </label>

      <v-button :loading="loading" @click.native="updateHousehold">
        Join household
      </v-button>
    </form>
  </better-dialog>
</template>

<script>
  export default {
    name: 'TagModal',

    props: {
      show: { type: Boolean, default: false },
      householdId: { type: String, default: '' },
      loading: { type: Boolean, default: false }
    },

    data: () => ({
      newHouseholdId: ''
    }),

    computed: {
      householdIdValue () {
        return this.householdId
          ? this.householdId
          : ''
      }
    },

    methods: {
      updateHouseholdId (event) {
        if (!event.target.value) return
        this.newHouseholdId = event.target.value
      },
      emitCloseDialog () {
        Object.assign(this.$data, this.$options.data()) // Reset state
        this.$emit('close-dialog')
      },
      updateHousehold () {
        const data = {
          ...this.householdId,
          id: this.newHouseholdId === ''
            ? this.householdId
            : this.newHouseholdId
        }

        this.$emit('content-update', data)
        this.emitCloseDialog()
      }
    }
  }
</script>

<style lang="postcss" scoped>
  label {
    display: block;
    margin-bottom: calc(var(--base-gap) * 2);

    & h2 {
      margin-bottom: var(--base-gap);
    }

    & span {
      display: block;
      color: var(--text-color-secondary);
      font-size: var(--text-size-small);
      margin-bottom: var(--base-gap);
      padding: 0 1px;
    }

    & input {
      width: 100%;
    }
  }
</style>

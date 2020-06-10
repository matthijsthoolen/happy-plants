<template>
  <div class="settings-household">
    <!-- Modal for joining household tags. -->
    <join-modal
      :show="showModal"
      :household-id="getHouseholdId"
      :loading="updateHouseholdProgress"
      @content-update="editHouseholdId"
      @content-error="showHouseUpdateError"
      @close-dialog="closeModal"
    />
    <section class="about-introh box">
      <feather-home />Share your plants with others so they can help you take care of the plants!
    </section>

    <section v-if="householdId" class="about-intro blue box">
      <feather-home />You are currently in household: {{ householdId }}
    </section>

    <section class="about-intro green box">
      You can also join another household and help them take care of the plants.
      <br>
      <v-button
        color="plain"
        class="edit"
        aria-label="Edit or add household id"
        @click.native="openJoinModal()"
      >
        <template v-if="householdId" v-slot:icon>
          Join
        </template>
        <template v-if="householdId !== false" v-slot:icon>
          Edit
        </template>
      </v-button>
    </section>
  </div>
</template>

<script>
  import JoinModal from '@/app/settings/components/JoinModal'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'SettingsHousehold',

    meta: {
      title: 'Your household'
    },

    computed: {
      ...mapState({
        householdId: state => state.household.id
      }),
      getHouseholdId () {
        return this.householdId
          ? this.householdId
          : ''
      }
    },

    components: {
      'join-modal': JoinModal,
      'feather-home': () =>
        import('vue-feather-icons/icons/HomeIcon' /* webpackChunkName: "icons" */)
    },

    data: () => ({
      showModal: false,
      showDialog: false,
      updateHouseholdProgress: false
    }),

    methods: {
      ...mapActions([
        'updateHouseholdId',
        'addHouseholdId',
        'showNotification'
      ]),
      closeModal () {
        this.showModal = false
      },
      showHouseUpdateError () {
        this.showNotification({
          message: 'Could not change to household.'
        })
      },
      async editHouseholdId (householdId) {
        this.updateHouseholdProgress = true

        if (this.householdId) {
          await this.updateHouseholdId(householdId)
        } else {
          await this.addHouseholdId(householdId)
        }
        this.updateHouseholdProgress = false

        this.showNotification({ message: 'Changed household.' })
      },
      openJoinModal () {
        this.showModal = true
      }
    }
  }
</script>

<style lang="postcss" scoped>
  @import "../../../styles/media-queries";

  .settings-household {
    padding: var(--base-gap);
    line-height: 150%;

    & .box {
      padding: var(--base-gap);
      margin-bottom: var(--base-gap);
    }

    & h2 {
      margin-bottom: calc(var(--base-gap) / 2);
    }

    & svg {
      width: var(--icon-size-small);
      height: var(--icon-size-small);
      vertical-align: middle;
      margin-right: calc(var(--base-gap) / 3);
    }
  }
</style>

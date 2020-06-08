<template>
  <div class="settings-household">
    <!-- Modal for joining household tags. -->
    <join-modal
      :show="showModal"
      :loading="updateHouseholdProgress"
      @content-update="editHouseholdId"
      @content-error="showTagUpdateError"
      @close-dialog="closeModal"
    />
    <section class="about-intro box">
      <feather-home />Share your plants with others so they can help you take care of the plants!
    </section>

    <section class="about-intro green box">
      You can also join another household and help them take care of the plants.
      <br>
      <v-button
        color="plain"
        class="edit"
        aria-label="Edit tag"
        @click.native="openJoinModal()"
      >
        <template v-slot:icon>
          Join
        </template>
      </v-button>
    </section>
  </div>
</template>

<script>
  import JoinModal from '@/app/settings/components/JoinModal'
  import { mapActions } from 'vuex'

  export default {
    name: 'SettingsHousehold',

    meta: {
      title: 'Your household'
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
        this.selectedTag = null
      },
      closeDialog () {
        this.showDialog = false
        this.selectedTag = null
      },
      showTagUpdateError (tag) {
        this.showNotification({
          message: `A tag with name "${tag.label}" already exists.`
        })
      },
      async editHouseholdId (householdId) {
        this.updateHouseholdProgress = true
        await this.addHouseholdId(householdId)
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

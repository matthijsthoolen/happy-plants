<template>
  <v-layout class="screen-release-notes">
    <app-header return-to="/settings">Release Notes</app-header>

    <main>
      <header class="release-notes-header">
        <div>
          <v-text>All notable changes to HappyPlants are documented here.</v-text>
          <v-text class="release-notes-current">
            Current version
            <strong>{{ version }}</strong>
          </v-text>
        </div>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 123">
          <g fill="none" fill-rule="evenodd">
            <path
              fill="#FFF"
              d="M80.498 35.374c-.325 14.336-.025 30.034-5.662 37.31-1.25 1.606-3.225 1.754-4.7.378-2.55-2.36-4.363-6.829-5.463-10.272-2.413-7.544-3.05-8.5-9.613-4.983-2.762 1.483-6.375 5.094-9.162-.255-4.963-9.512 6.987-24.01-7.288-32.538-1.825-1.087-3.85-1.778-5.8-2.574-9.013-3.67-12.25-4.16-15.813-8.452-2.275-2.736-3.175-5.547-.788-8.146 1.45-1.583 3.475-2.697 10.225-4.097 12.45-2.59 29.201-1.873 41.814-.57 1.725.179 3.45.704 5.113 1.275 2.1.719 3.537 2.314 4.462 4.496 3.713 8.803 2.963 15.393 2.813 28.43a4.267 4.267 0 00-.138-.002M21.013 54.49c-2.18-.077-3.836-1.2-4.963-3.201-2.27-4.034-.44-9.297 1.53-13.515 1.37-2.93 4.952-5.644 7.91-4.51 9.162 3.512 5.245 21.572-4.477 21.226M34.692 74c.207.651.412 1.112.5 1.598 1.602 8.87 1.115 6.94 1.26 9.295.2 3.279-2.976 2.497-20.867 8.045-1.15 1.218.093 2.152.607 15.965.037 1.01-.12 2.039-.28 3.042-.213 1.335-.917 2.281-2.167 2.581-7.29 1.752-9.185 1.792-10.238-.643-.366-.848-.687-1.765-.811-2.685C.574 95.373-.571 92.428.286 86.257c.523-3.757 2.026-4.033 33.03-12.073.384-.1.787-.108 1.376-.184M52.056 117.114c-.29 1.258-.98 2.378-3.97 3.185-3.65.982-10.25 1.855-11.92 1.756-3.24-.19-3.27-2.43-3.74-5.895-1.59-11.769-2.63-16.244 1.26-17.3 14.36-3.902 15.46-5.069 16.9-2.468.57 1.026.81 2.173.95 3.321.56 4.495 1.55 13.011.52 17.401"
            />
            <path
              fill="#1B6D4F"
              d="M43.938 26.178c.995-3.361 3.756-8.146 6.824-9.986.322-.193.681-.222 1.045-.168 1.417.212 1.471 1.965.689 2.739-1.859 1.84-5.418 3.829-6.785 8.273.435.707 1.973 1.748 2.15 5.023.21 3.887-.927 7.378-3.12 10.572-1.407 2.047-3.302 3.5-5.516 4.584-4.494 2.202-9.532 1.995-14.672 1.336-.48-.061-.95-.23-1.416-.381-.077-.025-.122-.216-.136-.334-.008-.07.057-.184.122-.219.82-.436 1.669-.335 3.1-1.801C32.43 39.46 31.107 32.83 37.54 27.898c2.786-2.138 4.961-1.796 6.399-1.72"
            />
            <path
              fill="#F8C559"
              d="M52.152 95.01c-3.164 1.742-2.767 1.872-3.31.981-1.291-2.114-1.22-2.002-1.386-1.984-.397.859-.624 1.83-1.038 2.699-.702.065-1.33-.24-2.028-.23.119.735.556 1.305.672 2.035-.74.527-.068.068-1.808 1.084-.088.051-.156.147-.254.242.685.464 1.451.594 2.068 1.09-.033.867-.359 1.648-.383 2.566 1.635-1.125 1.316-1.099 2.106-1.445 1.533 2.732 1.373 2.62 1.672 2.952.383-.943.78-2.88 1.136-3.515.74-.068 1.427.284 2.187.253-.176-.718-.702-1.183-.848-1.87.394-.37 1.479-.587 2.062-.977-.583-.41-1.173-.617-1.658-.982-.071-.49.186-.721.525-1.861.095-.308.268-.59.285-1.037zM49.48 116c-.316-.202-.361-.46-.45-.678-3.889-9.517-3.16-7.91-3.57-8.729-.865.518-3.37 2.556-5.928 4.432-.237-.084-.24-.228-.2-.384.44-1.697 1.92-7.335 2.01-7.842-.155-.075-.313-.17-.478-.23-7.213-2.625-6.746-2.385-6.863-2.612.034-.27-.268-.023 4.4-2.89 1.962-1.205 1.416-.857 1.91-1.221-.072-.495-2.96-5.386-3.047-5.838.134-.244.296-.161.447-.12 6.815 1.9 5.764 1.643 6.348 1.746.23-.218.333-.502.47-.757 3.309-6.2 3.013-5.807 3.26-5.877.268.093-.02-.234 3.391 6.402.065.126.144.245.234.393.714-.385.508-.326 5.867-3.9.374.1.35-.297-1.374 7.342-.048.216-.08.437-.124.693 1.738.2 3.46.175 5.218.39-.161.728.522-.449-4.844 5.641.378.978-.377-.805 2.817 6.332.096.213.265.413.193.681-.203.148-.368.023-.53-.052-7.68-3.49-5.952-2.759-6.91-3.109-.389 1.227-1.808 8.855-2.247 10.187z"
            />
          </g>
        </svg>
      </header>

      <ul class="release-notes-list">
        <li v-for="entry of releaseNotes" :key="entry.version">
          <button
            @click="toggleReleaseNote(entry.version)"
            :aria-expanded="toggled.includes(entry.version) || 'false'"
          >
            <v-text type="subtitle">{{ entry.version }} ({{ entry.date }})</v-text>
          </button>
          <div :class="{ show: toggled.includes(entry.version) }">{{ entry.content }}</div>
        </li>
      </ul>
    </main>
  </v-layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import config from '@/config'
  import releaseNotes from '@/data/release-notes.json'

  export default Vue.extend({
    name: 'SettingsReleaseNotes',

    data: () => ({
      version: config.version,
      toggled: [],
      releaseNotes,
    }),

    methods: {
      toggleReleaseNote(version: string): void {
        if (!this.toggled.includes(version)) {
          this.toggled.push(version)
        } else {
          this.toggled = this.toggled.filter(v => v !== version)
        }
      },
    },
  })
</script>

<style lang="postcss" scoped>
  .screen-release-notes #app-header {
    background: var(--brand-beige);
  }

  .screen-release-notes main {
    justify-content: flex-start;
  }

  .release-notes-header {
    display: grid;
    grid-template-columns: 1fr 80px;
    grid-column-gap: calc(0.5 * var(--base-gap));

    & div {
      display: grid;
      grid-template-rows: min-content min-content;
      row-gap: var(--base-gap);
      padding-top: calc(0.5 * var(--base-gap));
    }

    & .release-notes-current {
      background: var(--brand-white);
      padding: calc(0.5 * var(--base-gap));
      border-radius: var(--base-radius);
    }
  }

  .release-notes-list {
    width: 100%;
    list-style: none;
    padding-top: calc(0.5 * var(--base-gap));

    & li {
      padding-bottom: var(--base-gap);

      &:first-child button {
        background: var(--brand-blue);
        box-shadow: 0 2px 9px var(--brand-blue);

        & h2 {
          color: var(--brand-white);
        }
      }
    }

    & li div {
      display: none;
      padding-top: var(--base-gap);

      &.show {
        display: block;
      }
    }

    & button {
      width: 100%;
      border: none;
      border-radius: var(--base-radius);
      background: var(--brand-white);
      text-align: left;
      padding: var(--base-gap);
    }
  }
</style>

<template>
  <v-layout class="screen-onboarding-account">
    <v-loading v-if="loginRedirect" message="login" />

    <app-header return-to="/welcome">Create account</app-header>

    <main>
      <header class="onboarding-account-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 308 185"
        >
          <defs>
            <path
              id="a"
              d="M19.917 50.93c.582-5.995.358-17.805 6.389-30.752 6.359-13.67 26.824-25.821 40.23-17.4 18.091 11.351 9.12 42.547 23.779 48.248 4.985 1.942 9.06 2.906 11.36 9.546 1.79 5.166 1.806 10.258-.195 15.309-4.553 11.428-12.763 20.607-23.928 22.538-4.867.842-10.987 1.065-17.227 2.482-17.749 4.03-15.733 25.768-35.706 27.809-4.33.44-9.614.82-13.6-2.372C-2.265 115.713-2.742 99.27 5.348 83.876 11.05 73.037 18.44 65.95 19.917 50.93z"
            />
          </defs>
          <g fill="none" fill-rule="evenodd">
            <use fill="#FFF" transform="translate(15 21)" xlink:href="#a" />
            <path
              fill="#FFF"
              d="M123.593 42.182c.093 3.685-1.334 6.48-4.166 8.449-7.948 5.526-14.643-1.645-13.24-7.231 1.839-7.324 6.636-15.157 12.211-11.448 3.529 2.35 5.099 5.84 5.195 10.23M11.14 60.188c.333.634.676 1.262 1.014 1.893 2.287 4.25 1.76 10.65.423 15.114-.29.974-.574 1.955-.782 2.954-.636 3.042 2.27 5.884 4.674 4.483 1.017-.591 1.782-1.474 2.172-2.663 1.981-6.037 1.318-11.875.947-17.263-.139-2.003-.472-3.976-.889-5.926-.347-1.631-.995-3.141-1.848-4.521-.636-1.03-1.482-1.801-2.597-2.158-2.138-.683-6.254 2.097-3.114 8.087"
            />
            <path
              fill="#1B6D4F"
              d="M131.421 32.09c.69.023 1.35.004 1.992.201 1.018.313 1.991.716 2.855 1.342.52.376 1.02.844.535 1.26-3.129 2.687-5.63 2.505-7.17 2.529-1.256.02-2.441-.254-3.531-.851-.172.05-.138.176-.116.271.644 2.618.66 6.182.308 7.573a3.184 3.184 0 01-.377.847c-.195.321-.494.53-.852.681-.444.188-.974-.11-.995-.607-.056-1.25.875-3.014.387-6.05-.397-2.47-.46-2.343-.629-2.852-.246-.098-.371.05-.497.15-1.358 1.08-3.716 2.28-6.067 2.648-1.751.275-2.75.33-4.941-.174-.11-.026-.215-.077-.322-.12-.19-.073-.263-.23-.17-.402 1.56-2.857 2.968-3.847 4.935-4.955-.1-.094-.175-.182-.266-.243-2.93-1.973-4.996-5.62-5.48-7.701-.087-.379.107-.585.522-.547.942.088 1.886.154 2.823.278 3.05.404 4.562 1.548 5.773 2.256.018.01.05.001.098.001-.362-2.91-.902-6.01 1.468-10.885a3.67 3.67 0 01.359-.576c.154-.206.418-.216.6-.041.321.311 2.507 3.03 3.617 5.931.702 1.834 1.021 4.22 1.106 4.696.017.098.08.188.148.345.735-.85 1.642-2.295 4.236-4.018.568-.378 2.445-1.467 2.987-1.668 1.091-.403.87.462.666 1.587-.904 5.012-1.82 6.134-4 8.931-.013.017-.002.052-.002.164"
            />
            <path
              fill="#FFF"
              d="M47.564 14.749c-6.459-.37-8.086-10.727-.612-14.367 1.015-.494 2.058-.545 3.083.063.904.536 3.436 1.06 4.406 4.917.403 1.607-.51 6.37-4.417 8.596-.743.424-1.636.536-2.46.79M194.013 75.49c-2.18-.077-3.836-1.2-4.963-3.201-2.27-4.034-.44-9.297 1.53-13.515 1.37-2.93 4.952-5.644 7.91-4.51 9.162 3.512 5.245 21.572-4.477 21.226"
            />
            <path
              fill="#1B6D4F"
              d="M204.052 64.019c.763-2.648 2.88-6.418 5.233-7.868.246-.152.521-.175.8-.132 1.087.167 1.128 1.548.528 2.158-1.425 1.45-4.153 3.016-5.201 6.518.333.557 1.512 1.378 1.649 3.957.16 3.063-.712 5.813-2.393 8.33-1.079 1.613-2.531 2.757-4.229 3.612-3.445 1.735-7.308 1.572-11.248 1.053-.369-.05-.73-.182-1.086-.301-.059-.02-.094-.17-.104-.263-.007-.055.043-.145.093-.172.63-.344 1.28-.265 2.377-1.42 4.758-5.006 3.744-10.23 8.675-14.117 2.137-1.684 3.804-1.415 4.906-1.355"
            />
            <path
              fill="#FFF"
              d="M159.07 79.406c-.332 1.715-.842 8.841-7.776 14.192-7.177 5.54-18.884.344-17.114-9.024 1.497-7.924 7.993-17.041 15.106-15.375 1.562.366 3.104.861 4.624 1.404 2.586.923 5.263 5.336 5.16 8.803"
            />
            <path
              fill="#0A3E2B"
              d="M31.01 78.793l.232-10.652c.008-.318.043-.634.046-.95.008-.936-.316-1.645-1.078-2.292-5.793-4.923-12.344-8.346-19.673-10.27-1.395-.365-5.904-1.548-7.356-1.767-.338-.051-.557.287-.57.6-.478 10.584-.873 13.944.07 17.84.764 3.154.682 4.815 2.228 5.044 1.107.163 5.295.839 7.41 1.42-.625.413-1.18.398-1.667.562-5.6 1.888-6.123.807-5.818 4.445.789 9.395 4.802 16.337 5.023 16.85.27.628.683.816 1.306.873 3.263.302 6.526.632 9.787.958.619.062 1.237.145 2.25.267-1.604.471-2.756.834-2.756.834-7.508 2.005-7.322 1.902-7.841 2.146-.538.253-.697.762-.351 1.263 1.153 1.673 2.402 3.27 3.847 4.7 4.455 4.405 9.754 6.921 16.021 7.305 2.272.139 4.533.169 6.872-.25.747 1.805.668 2.27 1.163 3.388 1.03 2.319 3.834.436 3.485-1.886-.104-.693-.379-2.055-.797-3.177.04-.646.462-.883.765-1.182 2.425-2.388 3.855-5.313 4.526-8.62.697-3.437 1.161-6.965.187-10.356-.153-.533-.808-.689-1.23-.318-.664.584-1.303 1.195-1.951 1.794-.019.303-.234.442-.48.482-.206.033-.185-.356.08-.763.065-.098.182-.16.274-.239.579-1.124 1.168-2.245 1.734-3.377.319-.635.4-1.303.331-2.029-.56-5.98-2.514-11.493-5.505-16.659-.891-1.539-1.914-2.996-3.196-4.234-.493-.475-1.084-.857-1.663-1.23-.309-.199-.825-.02-.991.307-.199.392-.363.803-.52 1.217-1.066 2.85-2.325 5.614-3.698 8.325-.098.2-.161.43-.305.588-.144.157-.355.038-.353-.137.002-.274.104-.546.161-.82M93.58 56.914c2.158-1.701 4.565-3.018 7.273-3.64 1.02-.236 2.111-.272 3.162-.226 1.23.054 2.12.764 2.663 1.862 1.525 3.086-.756 7.975-2.766 10.717C98.802 72.6 93.538 75.8 87.928 79.21c-2.004 1.217-5.813 2.674-8.635 1.309-.454.212-.418.62-.447.97-1.47 17.792.367 16.457.08 24.367-.096 2.635-2.23 5.315-4.856 3.606-3.458-2.248-2.11-8-2.47-18.29-.319 0-.568-.069-.753.01-1.502.634-2.83.165-4.11-.604-6.7-4.022-15.26-18.89-14.712-25.34.306-3.602 2.414-4.13 4.977-3.424 1.877.517 3.378 1.703 4.77 3.005 6.713 6.278 9.608 17.752 10.566 20.51.584-.462.21.88 4.057-21.16-.086-.11-.123-.209-.177-.22-2.253-.441-3.707-1.916-4.998-3.668-4.407-5.981-8.063-14.637-7.797-21.332.086-2.185 1.748-4.147 3.997-3.328 5.922 2.155 8.856 16.246 10.394 22.506.005-.002.098-.014.141-.066.095-.11.197-.232.24-.367 1.682-5.325 3.789-10.496 5.778-15.711.047-.126-.01-.29-.028-.593-.93-.7-2.903-1.57-4.442-5.14-2.128-4.94-4.424-13.423-3.268-18.686 1.489-6.78 6.303-3.75 8.231 2.922 1.953 6.756 1.852 12.562 1.983 14.902.688.242.226.269 5.447-8.929 2.02-3.557 3-3.98 2.512-5.126-1.855-4.344 2.659-11.391 5.82-14.987.848-.964 1.806-1.833 2.745-2.713 1.528-1.428 4.685-2.665 5.609-.326.366.923.528 1.87.338 2.878-.534 2.848-1.49 4.303-6.494 11.307-3.836 5.367-5.038 3.767-6.726 6.95-2.739 5.165-7.562 13.778-8.54 19.555 3.526-4.079 6.854-8.33 11.743-11.036 1.317-.728 2.715-.95 4.187-.796 3.06.32 2.776 4.113 1.894 5.609-.535.906-1.073 1.844-1.782 2.612-3.487 3.78-7.622 6.675-12.421 8.604-1.682.676-3.61.809-4.753-.652-.187.162-.363.24-.4.36-2.332 7.495-4.095 15.122-5.373 22.86-.491.941-.475.944-.016 1.668 2.611-6.222 7.947-12.058 13.341-16.312"
            />
            <path
              fill="#1B6D4F"
              d="M93.238 98.372c6.714-11.493 12.031-20.546 23.5-27.53 2.277-1.386 7.003-3.734 9.401-2.84.762.283 1.115 1.131.657 1.812a9.687 9.687 0 01-1.243 1.503c-12.075 11.803-8.72 27.215-26.961 41.425-6.862 5.343-9.01 6.154-13.001 8.718-4.116 2.645-4.065 4.294-4.977 5.177-.796.772-1.556.169-2.46-.482-2.073-1.493-4.437-2-6.898-1.7-3.57.433-7.088.094-10.588-.45-24.583-3.824-30.222-22.792-46.594-30.736-.5-.242-.969-.555-1.434-.864-.99-.66-.965-2.11 1.03-2.385 23.336-3.211 30.775 4.093 39.115 11.272 1.012 1.141 1.012 1.141 1.895 1.17-.378-.686-.534-1.418-1.201-1.857-7.506-14.43-7.835-25.559-18.527-32.866-2.544-1.737-5.106-3.43-8.15-4.223-1.68-.437-1.64-1.917.139-2.144 1.478-.187 2.953-.497 4.434-.541 8.743-.26 11.106.03 13.34.755 7.197 2.333 12.634 5.862 17.033 12.057 14.022 19.746 14.42 29.204 16.173 33.969 0-22.059-4.935-57.724 19.931-70.332 1.796-.911 2.973.612 2.67 1.551-1.362 4.215-6.001 12.22-6.783 25.222-.368 6.16-.06 12.297.414 18.434.383 4.98-.656 10.51-1.552 15.245-.647.899-.757 1.944-1.091 3.485.989-1.126 1.525-1.883 1.728-2.845"
            />
            <path
              fill="#0A3E2B"
              d="M99 39.513c-1.329 1.86-2.6 3.036-4.223 6.771-4.345 10.003-6.116 17.663-6.129 29.647-.023 20.27.623 31.375-8.314 45.5-.68 1.076-1.822.52-1.107-.776 4.97-9.002 8.348-13.432 8.09-41.077-.134-14.333.857-22.592 7.369-36.066.77-1.598 1.798-3.05 3.112-4.263.398-.367.806-.367 1.202.264M76 119.745c-.441.16-.815.566-1.47-.178-15.907-18.134-13.98-37.548-31.636-51.094-4.363-3.346-6.613-3.553-8.174-4.18-1.06-.427-.952-1.567.343-1.232 7.898 2.045 15.274 9.29 19.226 15.87 2.168 3.606 4.022 7.36 5.67 11.227 9.187 21.606 9.409 20.794 15.807 28.775.15.187.147.494.234.812M90.385 114c-.49-.92-1.132-.682 2.44-3.393 12.548-9.52 12.016-21.411 24.11-35.254 1.022-1.17 4.022-4.548 5.602-4.344.162.02.426.14.442.246.04.236.03.66-.095.718-2.264 1.066-3.804 2.935-5.36 4.797-13.202 15.786-9.485 24.1-26.124 36.756-.276.209-.639.303-1.015.474M20.951 93c7.65 1.182 12.457 5.178 25.469 14.572 9.52 6.873 15.861 8.262 18.406 9.524.115.057.194.329.17.48-.028.15-.204.385-.324.392-.455.026-.954.081-1.365-.067-16.323-5.865-20.63-12.455-32.59-19.665-6.305-3.8-7.78-3.256-10.58-4.346-.067-.027-.155-.173-.134-.23.196-.554.234-.458.948-.66"
            />
            <path
              fill="#FFF"
              d="M60.004 165.424c.17-18.216 1.914-31.935 24.31-36.415 6.033-1.208 10.06-1.682 15.396.601 8.214 3.515 8.485 16.582.21 19.192-3.118.984-5.827 1.111-7.22 4.923-1.881 5.156-2.444 5.924-8.707 7.078-5.627 1.037-.697 11.484-11.126 20.076-5.375 4.429-10.294 7.839-12.236-3.844-.637-3.844-.643-7.726-.627-11.611M307.998 102.97c-.225 1.15-.57 5.923-5.272 9.508-4.867 3.71-12.804.23-11.604-6.045 1.015-5.308 5.42-11.416 10.242-10.3 1.06.245 2.105.577 3.135.94 1.754.62 3.569 3.575 3.499 5.898"
            />
            <path
              fill="#0A3E2B"
              d="M290.671 99.292c.295-1.577.728-4.843 2.023-5.952.955-.819 2.03-.14 2.09 1.841.007.206-.002.412.01.617.013.194-.078.403.074.582.197.077.304-.084.437-.173 1.626-1.082 1.802-1.308 2.741-1.453 1.138-.176 1.906.644 1.656 1.788a3.052 3.052 0 01-.81 1.515c-1.645 1.66-4.694 3.11-5.23 3.4.056.246.215.142.317.151.34.03 2.524-.579 5.19.186 1.005.289 1.052 1.422.39 2.03-.334.307-.735.473-1.139.642-.176.074-.415.018-.518.253.006.284.278.36.412.544.244.333.448.678.559 1.084.313 1.16-.596 2.87-2.566 1.643-2.698-1.681-2.963-3.945-4.7-4.662-.343.103-.534.344-.721.588-2.048 2.674-2.47 7.535-2.858 8.476-.288.699-1.066.815-1.553.246-1.714-2 1.112-6.73 2.723-8.79.228-.292.442-.596.689-.93-.157-.087-.263-.188-.383-.207-3.523-.548-5.79-.656-6.86-1.427-.85-.61-.857-1.708-.03-2.34 1.01-.77 1.686-.647 2.95-.647.15-.17.088-.34.05-.497-.185-.734-.593-1.557-.206-2.709.232-.69 1.004-.962 1.55-.741.682.275 1.195.757 1.691 1.268.775.798 1.224 1.792 1.585 2.835.097.283.136.596.437.84"
            />
            <g fill="#F8C559">
              <path
                d="M264.122 12.204c.518-1.38 1.61-7.107 2.65-8.674.423-.638 1.108-.707 1.657-.169.926.906 2.759 5.792 3.946 7.2.525.622.596.25 5.744-.575.864-.138 1.743-.223 2.623-.1.1.015.202.018.298.042.793.2 1.168.847.843 1.587-.838 1.913-4.81 5.926-5.658 6.807 1.562 2.229 3.853 4.945 3.786 6.977-.027.83-1.137 1.137-1.887.967-2.613-.593-7.525-3.006-8.484-3.443-1.603 1.405-4.148 5.033-6.467 6.046-1.25.547-1.766-.77-1.819-1.168-.068-.512-.156-1.035-.12-1.545.382-5.551 1.002-5.457.534-5.809-.157-.118-4.928-3.695-6.055-4.76-.685-.648-1.143-1.936-.092-2.261 1.985-.613 7.23-.529 8.501-1.122"
              />
            </g>
            <path
              fill="#DE4A4D"
              d="M167.775 129.866c.677-.033.952-.588 2.316-1.556 1.602-1.14 2.876-.532 2.908.796.01.47-.043.98-.201 1.41-.851 2.375-2.062 4.49-3.69 6.275-.947 1.035-2.665 1.891-3.617.43-.55-.845-1.856-3.739-2.437-8.047-.28-2.065.507-5.026 3.119-1.624.582.761.582.992 1.602 2.316"
            />
          </g>
        </svg>
        <v-text type="subtitle">How do you want to use your account?</v-text>
      </header>

      <form class="onboarding-account-form" @submit.prevent>
        <label-group label="Email and password" id="create-account-email">
          <template v-slot="{ label }">
            <v-input
              type="email"
              id="create-account-email"
              placeholder="lover@plants.garden"
              v-model="email"
              :aria-describedby="label"
            />
          </template>
        </label-group>

        <label-group label="Social login" id="create-account-social" :error="false">
          <div>
            <v-button
              small
              :color="socialBtnSelected('twitter')"
              @click.native.prevent="selectSocial('twitter')"
            >Twitter</v-button>
            <v-button
              small
              :color="socialBtnSelected('github')"
              @click.native.prevent="selectSocial('github')"
            >GitHub</v-button>
            <v-button
              small
              :color="socialBtnSelected('google')"
              @click.native.prevent="selectSocial('google')"
            >Google</v-button>
          </div>
        </label-group>
      </form>

      <div class="onboarding-account-actions">
        <router-link to="/welcome" class="btn border green">Back</router-link>
        <v-button
          @click.native="resolveNextPage"
          :disabled="!canProceed"
          :aria-disabled="!canProceed"
          :color="canProceed ? 'green' : 'grey'"
        >Next</v-button>
      </div>
    </main>
  </v-layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapActions } from 'vuex'
  import { getSessionEntry, deleteSessionEntry } from '@/services/sessionStorage'
  import delay from '@/utils/promiseDelay'
  import logger from '@/utils/vueLogger'

  export default Vue.extend({
    name: 'AccountSelection',
    data: () => ({
      loginRedirect: false,
      email: null,
      social: null,
    }),
    computed: {
      canProceed(): boolean {
        return this.email || this.social
      },
    },
    watch: {
      email(newValue) {
        if (newValue) {
          this.social = null
        }
      },
    },
    methods: {
      ...mapActions({
        createAccount: 'user/signInUser',
        authRedirectResults: 'user/authRedirectResults',
        showNotification: 'notifications/show',
      }),
      selectSocial(provider: string): void {
        this.email = null
        this.social = this.social === provider ? null : provider
      },
      socialBtnSelected(provider: string): string {
        if (this.social === provider) {
          return 'blue'
        }
        return 'grey'
      },
      async resolveNextPage(): Promise<void> {
        if (!this.email && !this.social) {
          return
        }

        if (this.email) {
          this.$router.push({ path: '/onboarding/email', query: { email: this.email } })
          return
        }

        try {
          await this.createAccount({ type: this.social })
        } catch (error) {
          logger(`resolveNextPage() => ${error.message}`, true)
          this.showNotification({
            type: 'alert',
            message: error.message,
          })
        }
      },
    },
    async created() {
      if (getSessionEntry('USER_SIGNIN_PROGRESS')) {
        deleteSessionEntry('USER_SIGNIN_PROGRESS')
        this.loginRedirect = true
        await Promise.all([this.authRedirectResults(), delay(4000)])
        this.$router.push('/onboarding/success')
      }
    },
    beforeDestroy() {
      this.loginRedirect = false
    },
  })
</script>

<style lang="postcss">
  .screen-onboarding-account main {
    justify-content: flex-start;
  }

  .onboarding-account-header {
    width: 100%;
    position: relative;

    & h2 {
      display: block;
      width: 80%;
      transform: translateY(calc(-1 * var(--base-gap)));
    }
  }

  .onboarding-account-form {
    width: 100%;

    & label[for='create-account-social'] > div:not(.error-container) {
      display: grid;
      grid-gap: var(--base-gap);
      grid-template-columns: repeat(3, 1fr);
    }

    & label .text {
      color: var(--brand-green-dark);
    }
  }

  .onboarding-account-actions {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--base-gap);
    margin-top: auto;
    padding-bottom: var(--base-gap);
  }
</style>

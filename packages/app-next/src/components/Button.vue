<template>
  <button :class="btnClass">
    <slot />
  </button>
</template>

<script lang="ts">
  import Vue from 'vue'

  const colors = ['green', 'blue', 'yellow', 'red', 'grey', 'white']

  export default Vue.extend({
    name: 'VButton',

    props: {
      color: {
        type: String,
        default: 'green',
        validator: v => colors.includes(v),
      },
      small: {
        type: Boolean,
        default: false,
      },
      round: {
        type: Boolean,
        default: false,
      },
      border: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      btnClass(): string[] {
        return [
          'btn',
          this.color,
          this.small && 'small',
          this.border && 'border',
          this.round && 'round',
        ]
      },
    },
  })
</script>

<style lang="postcss">
  .btn {
    --background: var(--brand-green);
    --shadow: var(--brand-green);
    --icon-size: 20px;
    background: var(--background);
    border-radius: var(--base-radius);
    color: var(--brand-white);
    font-weight: 500;
    font-size: var(--text-size-base);
    border: 2px solid var(--background);
    padding: 10.5px var(--base-gap);
    box-shadow: 0 2px 9px var(--shadow);
    text-decoration: none;
    text-align: center;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: border-color 100ms ease-in-out, box-shadow 100ms ease-in-out;

    &:active {
      animation: bounce 650ms;
    }

    &:focus:not(.border),
    &:active:not(.border) {
      border-color: var(--brand-white);
      outline: none;
    }

    /* Icons */
    & > svg {
      width: var(--icon-size);
      height: var(--icon-size);
      margin-right: calc(0.5 * var(--base-gap));
    }

    /* Type */
    &.round {
      border-radius: 100%;
      padding: 10.5px;

      & svg {
        margin-right: 0;
      }

      &.small {
        --icon-size: 26px;
        padding: 0;
      }
    }

    &.border {
      background: transparent !important;
      border: 2px solid var(--brand-white);
      box-shadow: none;

      &:focus,
      &:active {
        --shadow: var(--brand-white);
        box-shadow: 0 2px 9px var(--shadow);
        outline: none;
      }

      &.yellow {
        color: var(--brand-white);
      }

      &.green {
        border: 2px solid var(--brand-green);
        color: var(--brand-green);
        --shadow: var(--brand-green);
      }

      &.white {
        border: 2px solid var(--brand-white);
        color: var(--brand-white);
      }
    }

    /* Size */
    &.small {
      padding: calc(var(--base-gap) / 2.5) 10px;
    }

    /* Color */
    &.blue {
      --background: var(--brand-blue);
      --shadow: var(--brand-blue);
    }

    &.yellow {
      --background: var(--brand-yellow);
      --shadow: var(--brand-yellow);
      color: var(--brand-green-dark);
    }

    &.red {
      --background: var(--brand-red);
      --shadow: var(--brand-red);
    }

    &.grey,
    &[disabled],
    &[aria-disabled] {
      --background: var(--brand-beige-dark);
      --shadow: var(--brand-beige-dark);
      box-shadow: none;
    }

    &.grey:focus,
    &.gey:active {
      box-shadow: 0 2px 9px var(--shadow);
    }
  }
</style>

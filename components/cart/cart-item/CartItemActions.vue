<template>
  <div
    class="cart-item-actions-container d-flex justify-space-between align-center pl-3 pr-5 px-md-0"
  >
    <div
      class="cart-item-action-buttons d-flex justify-space-between align-center"
      :class="[`buttons-offset-left-${$vuetify.breakpoint.name}`]"
    >
      <!-- TODO EXTRACT FAVORITE BUTTON INTO A COMPONENT -->
      <v-btn
        :icon="$vuetify.breakpoint.xs"
        small
        :text="$vuetify.breakpoint.smAndUp"
        class="cart-item-action favorite mr-2 mr-sm-0"
      >
        <v-icon color="red">{{ icons.favorite }}</v-icon>
        <span
          v-if="$vuetify.breakpoint.smAndUp"
          class="text-capitalize text-caption black--text ml-1"
        >
          {{ $t('cart.add_to_favorites') }}
        </span>
      </v-btn>

      <v-btn
        small
        :icon="$vuetify.breakpoint.xs"
        :text="$vuetify.breakpoint.smAndUp"
        class="cart-item-action delete mr-2 mr-sm-0"
      >
        <v-icon>{{ icons.delete }}</v-icon>
        <span
          v-if="$vuetify.breakpoint.smAndUp"
          class="text-capitalize text-caption ml-1"
        >
          {{ $t('cart.remove_from_cart') }}
        </span>
      </v-btn>
    </div>

    <div
      v-if="$vuetify.breakpoint.smAndDown"
      class="d-flex justify-center align-center quantity-sm-and-down"
    >
      {{ quantity }}
    </div>
  </div>
</template>

<script lang="ts">
import { mdiHeart, mdiTrashCanOutline } from '@mdi/js'
import Vue from 'vue'
export default Vue.extend({
  props: {
    quantity: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      icons: {
        favorite: mdiHeart,
        delete: mdiTrashCanOutline,
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.cart-item-actions-container {
  width: 100%;

  .cart-item-action-buttons {
    position: relative;
  }

  .buttons-offset-left-xl {
    left: 5vw;
  }

  .buttons-offset-left-lg {
    left: 10vw;
  }

  .buttons-offset-left-md {
    left: 14vw;
  }

  // .buttons-offset-left-sm {
  //   left: 1vw;
  // }

  // .buttons-offset-left-xs {
  //   left: 1vw;
  // }
}
</style>

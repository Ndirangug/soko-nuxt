// TODO ADD VALIDATION
<template>
  <div class="text-field" :style="{ width: selectWidth }">
    <v-text-field v-model="model" dense outlined>
      <template v-slot:append>
        <div class="btn-append">
          <v-btn icon @click="increament">
            <v-icon>{{ icons.plus }}</v-icon>
          </v-btn>
        </div>
      </template>
      <template v-slot:prepend-inner>
        <div class="btn-prepend">
          <v-btn icon @click="decreament">
            <v-icon>{{ icons.minus }}</v-icon>
          </v-btn>
        </div>
      </template>
      <template v-slot:label>
        <div class="text-capitalize">{{ $t('product_details.quantity') }}</div>
      </template>
    </v-text-field>
  </div>
</template>

<script lang="ts">
import { mdiMinus, mdiPlus } from '@mdi/js'
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      model: 0,
      icons: {
        plus: mdiPlus,
        minus: mdiMinus,
      },
    }
  },

  computed: {
    selectWidth(): string {
      let width = ''

      // @ts-ignore
      if (this.$vuetify.breakpoint.mdAndUp) {
        width = '16vw'
        // @ts-ignore
      } else if (this.$vuetify.breakpoint.sm) {
        width = '20vw'
      } else {
        width = '55vw'
      }

      return width
    },
  },

  watch: {
    model(value) {
      // TODO UPDATE IN PRODUCT-DETAILS/SUMMARY
      console.log(value)
    },
  },

  methods: {
    increament() {
      this.model++
    },
    decreament() {
      this.model--
    },
  },
})
</script>

<style lang="scss" scoped></style>
<style lang="scss">
.v-input__prepend-inner,
.v-input__append-inner {
  margin-top: 8px !important;
}
</style>

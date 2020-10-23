<template>
  <v-row class="new-address-modal-container" justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <slot name="activator" :attrs="attrs" :on="on">
          <v-btn color="primary" v-bind="attrs" v-on="on">
            $t('checkout.add_new')
          </v-btn>
        </slot>
      </template>

      <AddNewAddressForm :dialog.sync="dialog" />
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      dialog: false,
    }
  },
})
</script>

<style lang="scss" scoped></style>

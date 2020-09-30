<template>
  <div class="share-container d-flex flex-column align-start mx-auto">
    <h6 class="text-caption font-weight-medium font-italic mb-1">
      {{ $t('product_details.share_with_friends') }}
    </h6>
    <div class="share-buttons d-flex justify-center align-center">
      <v-btn
        v-for="(icon, i) in icons.share_icons"
        :key="i"
        color="primary"
        icon
        class="mr-md-4"
        large
        @click="share(i)"
      >
        <v-icon large>{{ icon }}</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import {
  mdiFacebook,
  mdiInstagram,
  mdiPinterest,
  mdiTwitter,
  mdiWhatsapp,
} from '@mdi/js'
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      icons: {
        share_icons: [
          mdiFacebook,
          mdiInstagram,
          mdiPinterest,
          mdiTwitter,
          mdiWhatsapp,
        ],
      },
    }
  },

  computed: {
    socialNetworks(): string[] {
      return ['facebook', 'instagram', 'pinterest', 'twitter', 'whatsapp']
    },
  },

  methods: {
    share(method: number) {
      // TODO IMPLEMENT THIS
      console.log(this.socialNetworks[method])
    },
  },
})
</script>

<style lang="scss" scoped>
.share-container {
  width: fit-content;

  h6 {
    &:first-letter {
      text-transform: uppercase;
    }
  }
}
</style>

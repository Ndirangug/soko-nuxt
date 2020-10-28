<template>
  <v-container
    class="root-container d-flex justify-center align-center flex-column py-16 px-4 px-sm-6 px-md-8 px-lg-16"
    fluid
  >
    <div
      class="footer-row d-flex flex-column-reverse flex-sm-row justify-space-between align-center align-sm-start"
    >
      <div
        class="links d-flex justify-space-between align-start flex-wrap px-4 px-sm-0"
      >
        <div
          class="col1 d-flex justify-center align-start flex-column mr-4 mr-sm-6 mr-md-8 mr-lg-16"
        >
          <div
            class="links-group site d-flex justify-center align-start flex-column mb-md-8"
          >
            <h6 class="text-button mb-3">{{ $t('footer.site') }}</h6>

            <NuxtLink
              v-for="link in $t('footer.links_site')"
              :key="link"
              :to="localePath(`/${link}`)"
              class="text-body-2 text-decoration-none white--text text-capitalize my-1"
            >
              {{ link }}
            </NuxtLink>
          </div>
        </div>
        <div
          class="col2 d-flex justify-center align-start flex-column mr-3 ml-3 ml-md-8 mr-sm-6 mr-md-8 mr-lg-16"
        >
          <div
            class="links-group company d-flex justify-center align-start flex-column mb-md-8"
          >
            <h6 class="text-button mb-3">{{ $t('footer.company') }}</h6>
            <NuxtLink
              v-for="link in $t('footer.links_company')"
              :key="link"
              :to="localePath(`/${link}`)"
              class="text-body-2 text-decoration-none white--text text-capitalize my-1"
            >
              {{ link }}
            </NuxtLink>
          </div>
          <div
            class="links-group legal d-flex justify-center align-start flex-column mb-md-8"
          >
            <h6 class="text-button mb-3">{{ $t('footer.legal') }}</h6>
            <NuxtLink
              v-for="link in $t('footer.links_legal')"
              :key="link"
              :to="localePath(`/${link}`)"
              class="text-body-2 text-decoration-none white--text text-capitalize my-1"
            >
              {{ link }}
            </NuxtLink>
          </div>
        </div>
        <div
          class="col3 d-flex justify-center align-start flex-column ml-4 ml-sm-4 ml-md-8"
        >
          <div
            class="links-group shopping d-flex justify-center align-start flex-column mb-md-8"
          >
            <h6 class="text-button mb-3">{{ $t('footer.shopping') }}</h6>
            <NuxtLink
              v-for="link in $t('footer.links_shopping')"
              :key="link"
              :to="localePath(`/${link}`)"
              class="text-body-2 text-decoration-none white--text text-capitalize my-1"
            >
              {{ link }}
            </NuxtLink>
          </div>
          <div
            class="links-group selling d-flex justify-center align-start flex-column mb-md-8"
          >
            <h6 class="text-button mb-3">{{ $t('footer.selling') }}</h6>
            <NuxtLink
              v-for="link in $t('footer.links_selling')"
              :key="link"
              :to="localePath(`/${link}`)"
              class="text-body-2 text-decoration-none white--text text-capitalize my-1"
            >
              {{ link }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <div
        class="app-stores d-flex justify-center align-start flex-column ml-lg-n8"
        :style="{ width: $vuetify.breakpoint.sm ? '30%' : '' }"
      >
        <h6 class="text-button mb-2">{{ $t('footer.download') }}</h6>
        <p>{{ $t('footer.download_tip') }}</p>
        <div
          class="app-store-badges d-flex justify-center align-center"
          :class="{
            'flex-column': $vuetify.breakpoint.sm,
            'align-start': $vuetify.breakpoint.sm,
            'mb-8': $vuetify.breakpoint.xs,
          }"
        >
          <a target="_blank" href="https://store.apple.com">
            <v-img
              eager
              max-width="153"
              src="/footer/app-store-badges/Download_on_the_App_Store_Badge.svg"
            />
          </a>
          <a target="_blank" href="https://play.google.com">
            <v-img
              eager
              max-width="153"
              src="/footer/app-store-badges/Google_Play_Store_badge_EN_small.svg"
            />
          </a>
        </div>
      </div>
    </div>

    <div
      class="footer-row d-flex flex-column flex-md-row justify-center justify-md-space-between align-md-start mt-10"
    >
      <div
        class="social px-md-12 mb-8 mb-md-0 d-flex flex-column align-center align-md-start"
        :style="{ width: $vuetify.breakpoint.mdAndUp ? '50%' : '' }"
      >
        <h6 class="mb-4 mb-md-7 text-body-2">{{ $t('footer.follow_us') }}</h6>
        <div
          class="icons d-flex justify-center justify-md-space-around align-center flex-wrap"
        >
          <v-btn dark href="http://facebook.com" icon class="mx-4 mx-md-4">
            <v-icon :large="$vuetify.breakpoint.mdAndUp">
              {{ icons.facebook }}
            </v-icon>
          </v-btn>
          <v-btn dark href="http://pinterest.com" icon class="mx-4 mx-md-4">
            <v-icon :large="$vuetify.breakpoint.mdAndUp">
              {{ icons.pinterest }}
            </v-icon>
          </v-btn>
          <v-btn dark href="http://instagram.com" icon class="mx-4 mx-md-4">
            <v-icon :large="$vuetify.breakpoint.mdAndUp">
              {{ icons.instagram }}
            </v-icon>
          </v-btn>
          <v-btn dark href="http://twitter.com" icon class="mx-4 mx-md-4">
            <v-icon :large="$vuetify.breakpoint.mdAndUp">
              {{ icons.twitter }}
            </v-icon>
          </v-btn>
        </div>
      </div>
      <div
        class="payment-methods px-md-2 d-flex flex-column align-center align-md-start"
        :style="{ width: $vuetify.breakpoint.mdAndUp ? '50%' : '' }"
      >
        <h6 class="mb-4 mb-md-7 text-capitalize text-body-2">
          {{ $t('footer.payment_methods') }}
        </h6>
        <div
          class="icons d-flex flex-column flex-sm-row justify-center justify-md-space-around align-start flex-wrap"
        >
          <v-img
            v-for="(icon, i) in icons.payment_methods"
            :key="i"
            eager
            class="payment-method-icon mx-2 mx-md-2 my-2 my-sm-0"
            :src="icon"
            max-height="50"
            min-height="30"
            max-width="120"
            min-width="50"
            contain
          />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { mdiFacebook, mdiInstagram, mdiPinterest, mdiTwitter } from '@mdi/js'
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      icons: {
        facebook: mdiFacebook,
        instagram: mdiInstagram,
        pinterest: mdiPinterest,
        twitter: mdiTwitter,
        payment_methods: [
          '/payment-icons/lipa_na_mpesa.png',
          '/payment-icons/mc_vrt_rev.svg',
          '/payment-icons/visa.svg',
          '/payment-icons/Money_Flat_Icon.svg',
        ],
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.root-container {
  color: $white;

  .footer-row {
    width: 100%;
  }

  .links-group {
    a {
      color: $grey-text-dark !important;

      &:hover {
        color: $green-secondary !important;
      }
    }
  }
}
</style>

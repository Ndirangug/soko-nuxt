<template>
  <v-card class="add-new-addrdess-form-container">
    <v-card-title class="header">
      <span class="headline text-capitalize">
        {{ $t('checkout.add_a_new_address') }}
      </span>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row class="name">
          <v-col class="first-name" cols="12" sm="6">
            <v-text-field
              v-model="formInput.firstName"
              :label="`${$t('forms.firstName')} *`"
              required
              filled
            ></v-text-field>
          </v-col>

          <v-col class="last-name" cols="12" sm="6">
            <v-text-field
              v-model="formInput.lastName"
              :label="`${$t('forms.lastName')} *`"
              required
              filled
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="phone">
          <v-col cols="12">
            <v-text-field
              v-model="formInput.phone"
              :label="`${$t('forms.phone')} *`"
              required
              filled
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="county">
          <v-col cols="12">
            <v-autocomplete
              v-model="formInput.county"
              :items="counties"
              item-text="name"
              item-value="name"
              :label="`${$t('forms.county')} *`"
              filled
            ></v-autocomplete>
          </v-col>
        </v-row>

        <v-row class="town">
          <v-col cols="12">
            <v-autocomplete
              v-model="formInput.town"
              :items="towns"
              item-text="name"
              item-value="name"
              :label="`${$t('forms.town')} *`"
              filled
            ></v-autocomplete>
          </v-col>
        </v-row>

        <LocationSelector
          :county="formInput.county"
          :town="formInput.town"
          :area.sync="formInput.area"
          class="area"
        />

        <v-row class="additional-information">
          <v-col cols="12">
            <v-text-field
              v-model="formInput.additionalInformation"
              :label="`${$t('forms.additionalInformation')} *`"
              required
              filled
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <small>*indicates required field</small>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="closeDialog">
        {{ $t('checkout.cancel') }}
      </v-btn>
      <v-btn color="primary" text @click="saveAddress">
        {{ $t('checkout.save') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { CountyAndTowns } from '~/types/ui'

export default Vue.extend({
  props: {
    dialog: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      formInput: {
        firstName: '',
        lastName: '',
        phone: '',
        county: '',
        town: '',
        area: '',
        additionalInformation: '',
      },
    }
  },
  computed: {
    counties(): CountyAndTowns[] {
      // TODO: FETCH THESE FROM API. Possibly a delivery microservice, itself fetching these occassionally from an online database or something
      return [
        {
          name: 'Nairobi',
          towns: ['CBD', 'Westlands', 'Umoja', 'Embakasi', 'Upperhiill'],
        },
        {
          name: 'Kiambu',
          towns: ['Juja', 'Thika', 'Witethie', 'Ruiru', 'Kiambu'],
        },
        {
          name: 'Laikipia',
          towns: ['Nanyuki', 'Nyahururu', 'Rumuruti', 'Marmanet'],
        },
      ]
    },
    towns() {
      let towns: string[] = []

      for (const county of this.counties) {
        if (county.name === this.formInput.county) {
          towns = county.towns
          break
        }
      }

      return towns
    },
  },

  methods: {
    closeDialog() {
      this.$emit('update:dialog', false)
    },

    saveDialog() {
      // TODO DO MUTATION HERE
      // TODO PROGRESS DIALOG NESTED
      console.log('saving address')
      this.closeDialog()
    },
  },
})
</script>

<style lang="scss" scoped>
.text-sentence {
  @include sentence-case();
}
</style>

<template>
  <v-card
    :shaped="$vuetify.breakpoint.smAndUp"
    class="add-new-addrdess-form-container pa-8"
  >
    <v-card-title v-if="$vuetify.breakpoint.smAndUp" class="header">
      <span
        class="headline text-capitalize text-body-1 text-md-h6 font-weight-medium mt-n2"
      >
        {{ $t('checkout.add_a_new_address') }}
      </span>
    </v-card-title>

    <v-toolbar v-else dark color="primary">
      <v-btn icon dark @click="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title
        class="text-capitalize text-body-1 text-md-h6 font-weight-medium"
      >
        {{ $t('checkout.add_a_new_address') }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark text @click="saveAddress"> {{ $t('forms.save') }} </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-divider v-if="$vuetify.breakpoint.smAndUp" />

    <v-card-text class="pb-1">
      <v-container class="pb-0">
        <v-row class="name" justify="center">
          <v-col class="first-name py-0" cols="12" sm="6">
            <v-text-field
              v-model="formInput.firstName"
              required
              filled
              class="input mx-auto"
              dense
            >
              <template v-slot:label>
                <div class="text-capitalize">{{ $t('forms.firstName') }}*</div>
              </template>
            </v-text-field>
          </v-col>

          <v-col class="last-name py-0" cols="12" sm="6">
            <v-text-field
              v-model="formInput.lastName"
              required
              filled
              class="input mx-auto"
              dense
            >
              <template v-slot:label>
                <div class="text-capitalize">{{ $t('forms.lastName') }}*</div>
              </template>
            </v-text-field>
          </v-col>
        </v-row>

        <v-row class="phone" justify="center">
          <v-col cols="12 py-0">
            <v-text-field
              v-model="formInput.phone"
              required
              filled
              class="input mx-auto"
              dense
            >
              <template v-slot:label>
                <div class="text-capitalize">{{ $t('forms.phone') }}*</div>
              </template>
            </v-text-field>
          </v-col>
        </v-row>

        <v-row class="county" justify="center">
          <v-col cols="12 py-0">
            <v-autocomplete
              v-model="formInput.county"
              :items="counties"
              item-text="name"
              item-value="name"
              filled
              class="input mx-auto"
              dense
            >
              <template v-slot:label>
                <div class="text-capitalize">{{ $t('forms.county') }}*</div>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>

        <v-row class="town" justify="center">
          <v-col cols="12 py-0">
            <v-autocomplete
              v-model="formInput.town"
              :items="towns"
              item-text="name"
              item-value="name"
              filled
              class="input mx-auto"
              dense
            >
              <template v-slot:label>
                <div class="text-capitalize">{{ $t('forms.town') }}</div>
              </template>

              <template v-slot:no-data>
                <div
                  class="text-capitalize text-subtitle-2 text-md-subtitle-1 font-weight-regular pl-2"
                >
                  {{ $t('forms.chooseCountyFirst') }}
                </div>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>

        <LocationSelector
          :county="formInput.county"
          :town="formInput.town"
          :area.sync="formInput.area"
          class="area"
        />

        <v-row class="additional-information" justify="center">
          <v-col cols="12 py-0">
            <v-textarea
              v-model="formInput.additionalInformation"
              required
              filled
              class="input mx-auto"
              dense
              auto-grow
            >
              <template v-slot:label>
                <div class="text-capitalize">
                  {{ $t('forms.additionalInformation') }}
                </div>
              </template>
            </v-textarea>
          </v-col>
        </v-row>
      </v-container>
      <small
        class="text-caption text-md-subtitle-2 font-weight-light pb-1 pb-sm-0"
      >
        {{ $t('forms.requiredFieldIndicator') }}
      </small>
    </v-card-text>

    <v-divider v-if="$vuetify.breakpoint.smAndUp" />

    <v-card-actions v-if="$vuetify.breakpoint.smAndUp">
      <v-spacer></v-spacer>
      <v-btn color="warning" text @click="closeDialog">
        {{ $t('forms.cancel') }}
      </v-btn>
      <v-btn color="primary" text @click="saveAddress">
        {{ $t('forms.save') }}
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

.input {
  max-width: 400px;
}
</style>

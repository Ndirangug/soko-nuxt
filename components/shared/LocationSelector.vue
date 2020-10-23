<template>
  <v-row>
    <v-col cols="12 py-0">
      <div class="d-flex justify-center align-center">
        <v-autocomplete
          v-model="locationString"
          filled
          :loading="isLoading"
          auto-select-first
          hide-no-data
          :search-input.sync="search"
          :items="items"
          class="input mx-auto"
          dense
        >
          <template v-slot:label>
            <div class="text-capitalize">{{ $t('forms.area') }}*</div>
          </template>
        </v-autocomplete>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              icon
              v-bind="attrs"
              class="mt-n8"
              @click="fetchCurrentLocation"
              v-on="on"
            >
              <v-icon>{{ icons.location }}</v-icon>
            </v-btn>
          </template>
          <span class="text-sentence">
            {{ $t('forms.useCurrentLocation') }}
          </span>
        </v-tooltip>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { mdiMapMarker } from '@mdi/js'
import { Location } from '~/types/types'

export default Vue.extend({
  props: {
    county: {
      type: String,
      required: true,
    },
    town: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    gpsLocation: {
      type: Object,
      required: true,
    } as PropOptions<Location | {}>,
  },
  data(): { [keys: string]: any; items: string[] } {
    return {
      icons: {
        location: mdiMapMarker,
      },
      locationString: '',
      newGpsLocation: '',
      isLoading: false,
      items: [],
      search: null,
    }
  },

  watch: {
    locationString(value: string) {
      this.$emit('update:area', value)
      this.$emit('update:gps-location', this.newGpsLocation)
    },

    search(_: string) {
      // Items have already been loaded
      if (this.items.length > 0) return

      // Items have already been requested
      if (this.isLoading) return

      // Lazily load input items
      this.searchLocation()
    },
  },

  methods: {
    fetchCurrentLocation() {
      this.isLoading = true
      //  TODO ACTUALLY IMPLEMENT THIS: LOCATION FETCHING based on current location

      setTimeout(() => {
        // validateFetchedLocation()
        this.items = ['loc4', 'loc5', 'loc6']
        this.isLoading = false
        // openPanel()
      }, 5000)
    },

    searchLocation() {
      this.isLoading = true

      // TODO probably query google maps api with the provided county, town, and search term, not considering current location
      setTimeout(() => {
        // validateFetchedLocation()
        this.items = ['loc1', 'loc2', 'loc3']
        this.isLoading = false
        // openPanel()
      }, 5000)
    },
  },
})
</script>

<style lang="scss" scoped>
.input {
  max-width: 400px;
}
</style>

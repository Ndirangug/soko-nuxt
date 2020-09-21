<template>
  <v-container class="root-container" fluid>
    <div
      class="blog-content d-flex justify-center align-center"
      :class="{ 'flex-column-reverse': $vuetify.breakpoint.smAndDown }"
    >
      <div
        class="content d-flex flex-column"
        :class="[
          $vuetify.breakpoint.mdAndUp ? 'mr-8' : 'mt-6',
          { 'align-center': $vuetify.breakpoint.smAndDown },
        ]"
      >
        <h3
          class="text-center text-md-left mb-2 mb-md-4 text-h5 text-capitalize primary--text"
        >
          {{ blogPost.title }}
        </h3>
        <p class="text-center text-md-left text-body-1 blog-text">
          {{ blogPost.content }}
        </p>
      </div>
      <div
        class="poster"
        :class="{
          'ml-8': $vuetify.breakpoint.mdAndUp,
          'mb-6': $vuetify.breakpoint.smAndDown,
        }"
      >
        <v-img
          :src="blogPost.posterImage"
          lazy-src="/placeholders/image-512.webp"
          :width="posterWidth"
        />
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { BlogPost } from '~/types/types'

export default Vue.extend({
  props: {
    blogPost: {
      type: Object,
      required: true,
    } as PropOptions<BlogPost>,
  },
  computed: {
    posterWidth(): number {
      // @ts-ignore
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 250
        case 'sm':
          return 300
        case 'md':
          return 400
        case 'lg':
          return 500
        case 'xl':
          return 600
        default:
          return 400
      }
    },
  },
})
</script>

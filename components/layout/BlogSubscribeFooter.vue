<template>
  <div>
    <div
      class="blog d-flex justify-center align-center flex-column py-8 px-2 pa-md-16"
    >
      <h2 class="text-capitalize text-h4 text-md-h3">
        {{ $t('blog.featured_blog') }}
      </h2>
      <BlogPost class="my-10" :blog-post="blogPost" />
      <v-btn
        :href="blogPost.blogUrl"
        text
        target="_blank"
        color="primary"
        class="text-uppercase text-h6"
        :class="{ 'mt-n8': $vuetify.breakpoint.smAndDown }"
      >
        {{ $t('blog.read_more') }}
      </v-btn>
    </div>

    <div
      class="subscribe d-flex justify-center align-center flex-column px-2 pt-8 pb-3 pt-md-16 pb-md-10 px-md-16"
    >
      <h2 class="text-capitalize text-h4 text-md-h3">
        {{ $t('subscribe.subscribe') }}
      </h2>
      <p class="text-center mt-4 mb-2 px-1 px-md-4">
        {{ $t('subscribe.subscribe_tip') }}
      </p>
      <Subscribe />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BlogPost } from '~/apollo/queries/blog_post.graphql'

export default Vue.extend({
  props: {
    blogPostId: {
      type: Number,
      required: true,
    },
  },
  // @ts-ignore
  apollo: {
    blogPost: {
      query: BlogPost,
      prefetch: true,
      // @ts-ignore
      variables() {
        return {
          // @ts-ignore
          blogPostID: this.blogPostId,
        }
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.blog {
  background-color: $grey-background;
  width: 100%;
}

.subscribe {
  width: 100%;
  background-color: $white;
  background: url('/footer/subscribe/background.png');
  background-size: cover;
  background-position: center;
}
.footer {
  background-color: $black;
  width: 100%;
}
</style>

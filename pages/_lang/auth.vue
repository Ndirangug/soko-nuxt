<template>
  <div id="auth-flex-container">
    <div id="decorative-section" class="flex-child">
      <div>
        <BlackWhiteLogo class="logo" />
        <hr class="divider" role="presentation" />
        <p class="login-tip">{{ $t('auth.tip') }}</p>
      </div>

      <v-carousel
        id="testimonials"
        cycle
        continuous
        show-arrows-on-hover
        hide-delimiter-background
        height="150"
      >
        <v-carousel-item
          v-for="testimonial in testimonials"
          id="testimonial-item"
          :key="testimonial.customerName"
        >
          <q>{{ testimonial.testimonialText }}</q>
          <address>{{ testimonial.customerName }}</address>
          <address>{{ testimonial.customerLocation }}</address>
        </v-carousel-item>
      </v-carousel>
    </div>

    <div id="login-signup-section" class="flex-child">
      <div class="container">
        <div class="tab-switchers">
          <nuxt-link :to="localePath('auth-login')">
            {{ $t('auth.login') }}
          </nuxt-link>
          <nuxt-link :to="localePath('auth-signup')">
            {{ $t('auth.create_account') }}
          </nuxt-link>
        </div>
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Testimonial } from '~/types/types'

const sampleTestimonials: Testimonial[] = [
  {
    testimonialText:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut officiis placeat illo sit distinctio laboriosam non sunt, a similique porro. Enim, obcaecati impedit possimus dolorem perferendis ad necessitatibus cum soluta!',
    customerName: 'Mama Kevin',
    customerLocation: 'Nairobi',
  },
  {
    testimonialText:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut officiis placeat illo sit distinctio laboriosam non sunt, a similique porro. Enim, obcaecati impedit possimus dolorem perferendis ad necessitatibus cum soluta!',
    customerName: 'Kevin',
    customerLocation: 'Nakuru',
  },
  {
    testimonialText:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut officiis placeat illo sit distinctio laboriosam non sunt, a similique porro. Enim, obcaecati impedit possimus dolorem perferendis ad necessitatibus cum soluta!',
    customerName: 'Annonymous',
    customerLocation: 'Embakasi',
  },
]

export default Vue.extend({
  data() {
    return {
      testimonials: sampleTestimonials,
    }
  },

  layout: 'auth',
})
</script>

<style lang="scss" scoped>
#auth-flex-container {
  background: url('/auth/background.png');
  background: {
    attachment: fixed;
    size: cover;
    repeat: no-repeat;
    attachment: fixed;
    position: center;
  }
  height: 100%;
  width: 100%;

  display: flex;
  flex: {
    direction: row;
    wrap: no-wrap;
  }
  align-items: center;

  .flex-child {
    height: 100%;
  }

  #decorative-section {
    padding: 2vw 3vw;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 45%;
    .logo {
      font-size: 3vw;
    }
    .divider {
      background-color: white;
      float: right;
      width: 55%;
      margin-top: -4vw;
      height: 0.3vw;
    }
    .login-tip {
      color: white;
      width: 65%;
      margin-top: 0.8vw;
    }
    #testimonials {
      font-size: 1.2vw;
      font-style: italic;
      text-align: right;
    }
  }

  #login-signup-section {
    background-color: white;
    padding: 3vw 0;
    width: 55%;

    .container {
      display: flex;
      flex-flow: column nowrap;

      .tab-switchers {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;

        a {
          text-transform: uppercase;
          color: $grey-text-dark;
          font-weight: 600;
          font-size: 1.7vw;
          margin: 0 2vw;
          text-decoration: none;

          &:hover {
            color: black;
          }
          &:focus {
            color: black;
          }
          &:active {
            color: black;
          }
        }
      }
    }
  }
}

/*  tablets - phoness */
@media only screen and (max-width: 768px) and (min-width: 600px) {
  #auth-flex-container {
    //display: flex;

    #decorative-section {
      width: 40%;

      .divider {
        width: 40%;
      }

      #testimonials {
        display: none;
      }
    }
    #login-signup-section {
      width: 60%;
    }
  }
}

// phones and smaller
@media screen and (max-width: 600px) {
  #auth-flex-container {
    display: block;

    #decorative-section {
      width: 100%;
      height: 100%;

      .divider {
        display: none;
      }
      .login-tip {
        display: none;
      }

      #testimonials {
        display: none;
      }
    }

    #login-signup-section {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      width: 80%;
      height: 80%;
      margin: auto;
    }
  }
}
</style>

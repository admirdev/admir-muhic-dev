<template>
  <div class="container">
    <div class="text-center mx-auto">
      <the-spinner :loading="loading"></the-spinner>
    </div>
  </div>
  <div class="mt-4" v-for="about in aboutMe" :key="'id_' + about.id">
    <h1 class="text-light-blue">{{ about.header }}</h1>
    <p>
      {{ about.description }}
    </p>
  </div>
</template>

<script>
import AboutMeService from '../services/about-me.service'
import TheSpinner from '../components/helpers/TheSpinner.vue'

export default {
  name: 'AboutMeView',
  components: {
    'the-spinner': TheSpinner
  },
  data() {
    return {
      aboutMe: null,
      loading: true
    }
  },
  mounted() {
    this.getAboutMe()
  },
  methods: {
    async getAboutMe() {
      try {
        this.loading = true
        this.aboutMe = await AboutMeService.getAboutMe()
        console.log(this.aboutMe)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
// About me styling
</style>

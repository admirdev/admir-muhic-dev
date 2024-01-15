<template>
  <h1 class="my-4">Projects</h1>
  <div class="container">
    <div class="text-center mx-auto">
      <the-spinner :loading="loading"></the-spinner>
    </div>
  </div>
  <div class="col-lg-6 mb-4" v-for="project in projects" :key="'id_' + project.id">
    <div class="card h-100">
      <a :href="project.url"
        ><img class="card-img-top" :src="project.image" :alt="'Project image_' + project.title"
      /></a>
      <div class="card-body">
        <h2 class="card-title">
          {{ project.title }}
        </h2>
        <p class="card-text">
          {{ project.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectService from '../../services/project.service'
import TheSpinner from '../helpers/TheSpinner.vue'

export default {
  name: 'Projects',
  components: {
    'the-spinner': TheSpinner
  },
  data() {
    return {
      projects: [],
      loading: true
    }
  },
  mounted() {
    this.getProjects()
  },
  methods: {
    async getProjects() {
      try {
        this.loading = true
        this.projects = await ProjectService.getProjects()
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
h2 {
  color: $text-light-blue;
}
</style>

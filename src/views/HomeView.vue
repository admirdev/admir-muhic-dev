<template>
  <profile></profile>
  <projects></projects>
</template>

<script>
import Profile from '../components/profile/Profile.vue'
import Projects from '../components/projects/Projects.vue'

export default {
  name: 'HomeView',
  components: {
    profile: Profile,
    projects: Projects
  },
  data() {
    return {}
  }
}
</script>

<style scoped></style>

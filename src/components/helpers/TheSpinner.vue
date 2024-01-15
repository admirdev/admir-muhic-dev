<template>
  <div class="spinner-grow text-primary" role="status" v-if="loading">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script>
export default {
  name: 'TheSpinner',
  components: {},
  data() {
    return {}
  },
  props: {
    loading: Boolean
  }
}
</script>

<style scoped lang="scss">
.text-primary {
  background-color: $bg-light-blue;
}
</style>

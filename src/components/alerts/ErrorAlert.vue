<template>
  <div class="alert alert-danger" role="alert">{{ this.alertMessage }}</div>
</template>

<script>
export default {
  name: 'ErrorAlert',
  components: {},
  data() {
    return {}
  },
  props: {
    alertMessage: String
  }
}
</script>

<style scoped lang="scss"></style>

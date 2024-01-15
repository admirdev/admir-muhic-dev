<template>
  <div class="alert alert-primary" role="alert">{{ this.alertMessage }}</div>
</template>

<script>
export default {
  name: 'SuccessAlert',
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

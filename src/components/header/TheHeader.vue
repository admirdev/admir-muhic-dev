<template>
  <header class="masthead">
    <div class="container pb-5">
      <div class="row gx-5 align-items-center">
        <RouterView />
      </div>
    </div>
  </header>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  name: 'TheHeader',
  components: {},
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.masthead {
  height: 100vh;
  min-height: 500px;
  background-color: $bg-gray;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

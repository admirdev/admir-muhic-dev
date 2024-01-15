<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-white py-3 shadow-sm" id="mainNav">
    <div class="container">
      <router-link class="navbar-brand fw-bold text-light-blue" :to="{ path: '/' }"
        >admirmuhic.dev</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: 'about-me' }">About me</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: 'projects' }">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: 'resume' }">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: 'contact' }">Contact me</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  components: {},
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.text-light-blue {
  color: $bg-light-blue;
}
</style>

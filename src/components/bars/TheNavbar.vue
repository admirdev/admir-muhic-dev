<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-white py-3 shadow-sm" id="mainNav">
    <div class="container">
      <a class="navbar-brand fw-bold text-light-blue" href="/">admirmuhic.dev</a>
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
            <a class="nav-link"><router-link :to="{ path: 'about-me' }">About me</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><router-link :to="{ path: 'projects' }">Projects</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><router-link :to="{ path: 'resume' }">Resume</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><router-link :to="{ path: 'contact' }">Contact me</router-link></a>
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

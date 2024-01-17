<template>
  <div class="col-xxl-5">
    <div class="text-center text-xxl-start">
      <div class="fs-3 fw-light text-muted">An application built with Vue.js</div>
      <h1 class="display-3 fw-bolder mb-5">
        <span class="text-gradient d-inline">Check out my hobby projects and resume!</span>
      </h1>
      <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
        <router-link
          class="btn btn-default btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
          :to="{ path: 'projects' }"
          >Projects <i class="bi bi-chevron-right"></i
        ></router-link>
        <router-link
          class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
          :to="{ path: 'resume' }"
          >Curriculum vitae <i class="bi bi-chevron-right"></i
        ></router-link>
      </div>
    </div>
  </div>
  <div class="col-xxl-7">
    <div class="d-flex justify-content-center justify-content-xxl-end mt-5 mt-xxl-0">
      <div class="profile bg-gradient-primary-to-secondary">
        <img class="profile-img" src="@/assets/profile.png" alt="Profile picture" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  components: {},
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
// Profile specific styling
</style>

<template>
  <div class="container px-5 my-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <success-alert v-if="showSuccessAlert" :alertMessage="alertMessage"></success-alert>
        <error-alert v-if="showErrorAlert" :alertMessage="alertMessage"></error-alert>
        <div class="card border-0 rounded-3 shadow-lg">
          <div class="card-body p-4">
            <div class="text-center mb-3">
              <div class="h1 fw-light">Contact me</div>
            </div>
            <form ref="form" @submit.prevent="sendEmail">
              <div class="form-group">
                <div class="row mb-3">
                  <div class="col">
                    <input
                      id="name"
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      aria-label="User name"
                      name="from_name"
                      v-model="formData.name"
                      :class="{ 'is-invalid': errors.name }"
                    />
                    <span class="text-danger">{{ errors.name }}</span>
                  </div>
                  <div class="col">
                    <input
                      id="email"
                      type="text"
                      class="form-control"
                      placeholder="E-mail"
                      aria-label="User email"
                      name="from_email"
                      v-model="formData.email"
                      :class="{ 'is-invalid': errors.email }"
                    />
                    <span class="text-danger">{{ errors.email }}</span>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col">
                    <textarea
                      id="message"
                      class="form-control"
                      placeholder="Message"
                      aria-label="User message"
                      name="message"
                      rows="3"
                      v-model="formData.message"
                      :class="{ 'is-invalid': errors.message }"
                    ></textarea>
                    <span class="text-danger">{{ errors.message }}</span>
                  </div>
                </div>
                <div class="d-grid">
                  <button
                    class="btn btn-default btn-lg"
                    :class="disabledButton ? 'disabled' : ''"
                    id="submitButton"
                    type="submit"
                  >
                    Send e-mail
                  </button>
                </div>
              </div>
            </form>
            <div class="text-center mx-auto">
              <the-spinner :loading="loading"></the-spinner>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'
import Constants from '../constants/constants.js'
import SuccessAlert from '../components/alerts/SuccessAlert.vue'
import ErrorAlert from '../components/alerts/ErrorAlert.vue'
import TheSpinner from '../components/helpers/TheSpinner.vue'

export default {
  name: 'ContactView',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      errors: {},
      alertMessage: '',
      showSuccessAlert: false,
      showErrorAlert: false,
      loading: false,
      disabledButton: false
    }
  },
  components: {
    'success-alert': SuccessAlert,
    'error-alert': ErrorAlert,
    'the-spinner': TheSpinner
  },
  methods: {
    validateForm() {
      this.errors = {}

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (!this.formData.name) {
        this.errors.name = 'Name must be included'
      }

      if (!emailRegex.test(this.formData.email)) {
        this.errors.email = 'Email address is required and in the correct format'
      }

      if (!this.formData.message) {
        this.errors.message = 'A message is required'
      }

      return Object.keys(this.errors).length === 0
    },
    sendEmail() {
      if (this.validateForm()) {
        this.disabledButton = true
        this.loading = true

        emailjs
          .sendForm(
            Constants.SERVICE_ID,
            Constants.TEMPLATE_ID,
            this.$refs.form,
            Constants.PUBLIC_KEY
          )
          .then(
            (result) => {
              this.alertMessage = 'E-mail sent!'
              this.showSuccessAlert = true
              this.loading = false
              console.log('SUCCESS!', result.text)
            },
            (error) => {
              this.alertMessage = 'Something went wrong, the email has not been sent.'
              this.showErrorAlert = true
              console.log('FAILED...', error.text)
            }
          )
      }
    }
  }
}
</script>

<style scoped lang="scss">
// Contact view specific styling
</style>

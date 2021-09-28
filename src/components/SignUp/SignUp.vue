<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">
              Registrieren
            </h5>

            <form @submit.prevent="signUp">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="register_username"
                  placeholder="Benutzername"
                  v-model="username"
                />
                <label for="register_username">Benutzername</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="register_password"
                  placeholder="Passwort"
                  v-model="password"
                />
                <label for="register_password">Password</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="register_confirm_password"
                  placeholder="Passwort bestätigen"
                  v-model="confirmPassword"
                />
                <label for="register_confirm_password">
                  Password bestätigen
                </label>
              </div>
              <b-alert v-model="arePasswordsSame" variant="danger">
                Passwörter sind nicht gleich!
              </b-alert>
              <div class="d-grid">
                <button
                  class="btn btn-primary btn-login text-uppercase fw-bold"
                  type="submit"
                  :disabled="!disabled"
                >
                  Registrieren
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./SignUp.ts"></script>

<style scoped></style>

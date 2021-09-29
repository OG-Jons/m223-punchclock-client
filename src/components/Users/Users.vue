<template>
  <div>
    <h3>Benutzer Verwaltung</h3>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="card border-0 shadow rounded-3 my-5">
            <b-table striped hover :items="users" :fields="fields" responsive>
              <template #cell(username)="data">
                {{ data.value }}
              </template>
              <template #cell(role)="data">
                <b-form-checkbox
                  size="lg"
                  v-model="data.item.role"
                  name="admin"
                  :value="{ id: 1, name: 'Admin' }"
                  :unchecked-value="null"
                >
                </b-form-checkbox>
              </template>
              <template #cell(id)="data">
                <b-button-group>
                  <b-button
                    variant="secondary"
                    title="Speichern"
                    @click="makeUserAdmin(data.value, data.item)"
                  >
                    <b-icon icon="cloud-upload" aria-label="Speichern"></b-icon>
                  </b-button>
                  <b-button
                    title="Löschen"
                    variant="danger"
                    @click="deleteUser(data.value)"
                  >
                    <b-icon icon="trash" aria-label="Löschen"></b-icon>
                  </b-button>
                </b-button-group>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Users.ts"></script>

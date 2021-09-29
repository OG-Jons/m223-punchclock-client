<template>
  <div>
    <h3>
      {{ admin ? "Alle Einträge" : `Alle Einträge von ${user}` }}
    </h3>
    <SignOut />
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="card border-0 shadow rounded-3 my-5 p-2">
            <h4>Neuen Eintrag erstellen</h4>
            <b-form @submit.prevent="setNewEntry" @reset.prevent="onReset">
              <b-form-group
                id="checkIn-group"
                label="Check-In Zeitpunkt:"
                description="Dein Check-In Zeitpunkt hier eingeben"
              >
                <b-form-input
                  type="date"
                  v-model="newEntry.checkIn.date"
                  required
                ></b-form-input>
                <b-form-input
                  type="time"
                  v-model="newEntry.checkIn.time"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="checkOut-group"
                label="Check-In Zeitpunkt:"
                description="Dein Check-Out Zeitpunkt hier eingeben"
              >
                <b-form-input
                  type="date"
                  v-model="newEntry.checkOut.date"
                  required
                ></b-form-input>
                <b-form-input
                  type="time"
                  v-model="newEntry.checkOut.time"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="checkIn-group-1"
                label="Kategorie:"
                description="Die Kategorie hier auswählen"
              >
                <b-form-select
                  v-model="newEntry.category"
                  :options="categories"
                  required
                ></b-form-select>
                <br />
              </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="entries.length > 0">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="card border-0 shadow rounded-3 my-5">
              <b-table
                striped
                hover
                :items="entries"
                :fields="fields"
                responsive
              >
                <template #cell(checkIn)="data">
                  <b-form-input
                    type="date"
                    v-model="data.item.checkIn.date"
                  ></b-form-input>
                  <b-form-input
                    type="time"
                    v-model="data.item.checkIn.time"
                  ></b-form-input>
                </template>
                <template #cell(checkOut)="data">
                  <b-form-input
                    type="date"
                    v-model="data.item.checkOut.date"
                  ></b-form-input>
                  <b-form-input
                    type="time"
                    v-model="data.item.checkOut.time"
                  ></b-form-input>
                </template>
                <template #cell(category)="data">
                  <b-form-select
                    v-model="data.item.category"
                    :options="categories"
                  ></b-form-select>
                </template>
                <template #cell(id)="data">
                  <b-button-group class="mt-3">
                    <b-button
                      variant="secondary"
                      title="Speichern"
                      @click="updateEntry(data.value)"
                    >
                      <b-icon
                        icon="cloud-upload"
                        aria-label="Speichern"
                      ></b-icon>
                    </b-button>
                    <b-button
                      title="Löschen"
                      variant="danger"
                      @click="deleteEntry(data.value)"
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
  </div>
</template>

<script lang="ts" src="./Dashboard.ts"></script>

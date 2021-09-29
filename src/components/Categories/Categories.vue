<template>
  <div>
    <h3>Kategorien Verwaltung</h3>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="card border-0 shadow rounded-3 my-5 p-2">
            <h4>Neue Kategorie erstellen</h4>
            <b-form @submit.prevent="setCategory" @reset.prevent="onReset">
              <b-form-group
                id="category-group"
                label="Name:"
                description="Den Namen für die neue Kategorie"
              >
                <b-form-input
                  type="text"
                  v-model="newCategory.name"
                  required
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="card border-0 shadow rounded-3 my-5">
            <b-table
              striped
              hover
              :items="categories"
              :fields="fields"
              responsive
            >
              <template #cell(name)="data">
                <b-form-input
                  type="text"
                  v-model="data.item.name"
                ></b-form-input>
              </template>
              <template #cell(id)="data">
                <b-button-group>
                  <b-button
                    variant="secondary"
                    title="Speichern"
                    @click="updateCategory(data.value)"
                  >
                    <b-icon icon="cloud-upload" aria-label="Speichern"></b-icon>
                  </b-button>
                  <b-button
                    title="Löschen"
                    variant="danger"
                    @click="deleteCategory(data.value)"
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
<script lang="ts" src="./Categories.ts"></script>

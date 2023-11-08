<template>
  <div class="text-h4 q-mb-md" style="color: var(--darkAccent); font-weight: bold;">Persönliche Informationen</div>
  <hr class="divider-line">

  <div class="center-car">
    <q-card class="parent-card">
      <p class="card-label">Mitarbeiter</p>
      <hr class="divider-line">
      <div style="width: 350px">
        <q-input type="text" class="form-input" rounded label-color="black" standout="bg-blue-6" v-model="last_name" label="Name:" />
        <q-input type="text" class="form-input" rounded label-color="black" standout="bg-blue-6" v-model="first_name" label="Vorname:" />
        <q-input type="date" class="form-input" rounded label-color="black" standout="bg-blue-6" v-model="birth_date" label="Geburtsdatum:" />
        <q-input type="number" class="form-input" rounded label-color="black" standout="bg-blue-6" v-model="zip_code" label="Postleitzahl:" />
        <q-input type="text" class="form-input" rounded label-color="black" standout="bg-blue-6" v-model="residence" label="Wohnort:" />
        <q-input type="text" class="form-input" rounded label-color="black" standout="bg-blue-6" v-model="address" label="Straße & Hausnummer:" />
        <q-input type="text" class="form-input" rounded label-color="black" standout="bg-blue-6" v-model="job_position" label="Unternehmensposition:" />
        <q-input type="date" class="form-input" rounded label-color="black" standout="bg-blue-6" v-model="employed_since" label="Angestellt seit:" />
        <q-input type="date" class="form-input" rounded label-color="black" standout="bg-blue-6" v-model="employed_till" label="Angestellt bis:" />

      </div>
    </q-card>
  </div>
</template>

<script setup>

import { ref } from 'vue'

let first_name = ref('')
let last_name = ref('')
let birth_date = ref('')
let zip_code = ref('')
let residence = ref('')
let address = ref('')
let job_position = ref('')
let employed_since = ref('')
let employed_till = ref('')


</script>

<style scoped>

.card-label {
  font-size: 2.4em;
  color: var(--darkAccent);
}

.center-card {
  display: flex;
  justify-content: center;
  align-items: center;
}

.parent-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
  padding: 30px;
  border-radius: 20px;
  margin-top: 2%;
  margin-left: 2%
}

.divider-line {
  border-top: 2px solid #ccc;
  width: 100%;
}

.form-input {
  margin: 10px;
}
.bg-asd {
  background: var(--background) !important;
}

.text-bgCol {
  color: var(--darkAccent) !important;
}


</style>
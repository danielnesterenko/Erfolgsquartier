<template>
  <div class="text-h4 q-mb-md" style="color: var(--darkAccent); font-weight: bold;">Persönliche Informationen</div>
  <hr class="divider-line">

  <div class="center-card">

    <q-card class="parent-card">
      <p class="card-label">Mitarbeiter</p>
      <hr class="divider-line">
      <div style="width: 350px" class="col-center">
        <q-input type="text" class="form-input" rounded label-color="black" standout="bg-blue-6" v-model="last_name" label="Name:" />
        <q-input type="text" class="form-input" rounded label-color="black" standout="bg-blue-6" v-model="first_name" label="Vorname:" />
        <q-input type="date" class="form-input" rounded label-color="black" standout="bg-blue-6" v-model="birth_date" stack-label label="Geburtsdatum:" />
        <q-input type="text" class="form-input" rounded label-color="black" standout="bg-blue-6" v-model="zip_code" label="Postleitzahl:" />
        <q-input type="text" class="form-input" rounded label-color="black" standout="bg-blue-6" v-model="residence" label="Wohnort:" />
        <q-input type="text" class="form-input" rounded label-color="black" standout="bg-blue-6" v-model="address" label="Straße & Hausnummer:" />
        <q-input type="text" class="form-input" rounded label-color="black" standout="bg-blue-6" v-model="job_position" label="Unternehmensposition:" />
        <q-input type="date" class="form-input" rounded label-color="black" standout="bg-blue-6" v-model="employed_since" stack-label label="Angestellt seit:" />
        <q-input type="date" class="form-input" rounded label-color="black" standout="bg-blue-6" v-model="employed_till" stack-label label="Angestellt bis:"/>
        <q-btn style="margin-top: 4%; background: var(--accent); scale: 1.2" unelevated rounded @click="generateTemplate()">Template generieren</q-btn>
      </div>
    </q-card>

    <q-card class="parent-card" style="width: fit-content">
      <p class="card-label">Template: Mitarbeiterblock</p>
      <hr class="divider-line" style="width: 95%;">
      <div class="q-pa-md q-gutter-sm">
        <div class="col-center">
          <q-editor
              class="pre-formatted"
              v-model="personalInformationTemplate"
              style="height: 1188px; width: 840px;"
              ref="editorRef"
              spellcheck="false"
              toolbar-toggle-color="blue-6"
              :toolbar="[
        ['bold', 'italic', 'underline']
      ]"
          >
          </q-editor>
          <q-btn style="margin-top: 4%; background: var(--accent); scale: 1.2" unelevated rounded @click="generateTemplate()">speichern</q-btn>
        </div>
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

let personalInformationTemplate = ref('')

function generateTemplate() {
  console.log(personalInformationTemplate.value)
  personalInformationTemplate.value =
      "<b>" +
      first_name.value + " " + last_name.value + "\n" +
      zip_code.value + " " + residence.value + "\n" +
      address.value +
      "</b>" +
      "\n" + "\n" +
      "Herr/Frau " + last_name.value + " geboren am " + birth_date.value + " arbeitete im Zeitraum vom " +
      employed_since.value + " bis " + employed_till.value + " als " + job_position.value + "."
}


</script>

<style scoped>

.card-label {
  font-size: 2.4em;
  color: var(--darkAccent);
}

.center-card {
  display: flex;
  flex-direction: row;
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

.col-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.divider-line {
  border-top: 2px solid #ccc;
  width: 100%;
}

.form-input {
  margin: 10px;
  width: 100%;
}

.pre-formatted {
  white-space: pre;
}

</style>
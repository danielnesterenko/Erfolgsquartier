<template>
  <div class="text-h4 q-mb-md" style="color: var(--darkAccent); font-weight: bold;">Tätigkeitsbeschreibung</div>
  <hr class="divider-line">

  <div class="center-card">

    <q-card class="parent-card">
      <p class="card-label">Bewertung des Mitarbeiters</p>
      <hr class="divider-line" style="margin-bottom: -5px">
      <div style="width: 600px" class="col-center">
        <div class="col-center" style="width: 100%">
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Fachwissen</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="expertise" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="expertise" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="expertise" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="expertise" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Weiterbildung</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="education_improvement" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="education_improvement" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="education_improvement" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="education_improvement" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Auffassungsgabe</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="comprehension" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="comprehension" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="comprehension" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="comprehension" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Leistungsbereitschaft</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="willingness_performance" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="willingness_performance" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="willingness_performance" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="willingness_performance" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Lernbereitschaft</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="willingness_education" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="willingness_education" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="willingness_education" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="willingness_education" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Belastbarkeit</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="resilience" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="resilience" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="resilience" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="resilience" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Arbeitsweise</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="way_of_working" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="way_of_working" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="way_of_working" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="way_of_working" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Zuverlässigkeit</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="reliability" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="reliability" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="reliability" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="reliability" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Arbeitsergebnis</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="work_result" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="work_result" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="work_result" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="work_result" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Verhalten</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="behaviour" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="behaviour" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="behaviour" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="behaviour" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
          </div>
          <hr class="divider-line" style="margin-bottom: -5px">
        </div>
        <hr class="divider-line">
      </div>
    </q-card>



  </div>
</template>

<script setup>

import { ref } from 'vue'

let expertise = ref()
let education_improvement = ref()
let comprehension = ref()
let willingness_performance = ref()
let willingness_education = ref()
let resilience = ref()
let way_of_working = ref()
let reliability = ref()
let work_result = ref()
let behaviour = ref()


//<div class="row-container">
//<q-btn push color="primary" round icon="arrow_drop_up" />
//<q-btn push color="primary" round icon="arrow_drop_down" />
//</div>
/*    <q-card class="parent-card" style="width: 70%">
    <p class="card-label">Template: Mitarbeiterblock</p>
<hr class="divider-line" style="width: 95%;">
  <div class="q-pa-md q-gutter-sm" style="width: 100%">
    <div class="col-center">
      <q-editor
          class="pre-formatted"
          v-model="personalInformationTemplate"
          style="width: 100%; height: 500px"
          ref="editorRef"
          spellcheck="false"
          toolbar-text-color="white"
          toolbar-toggle-color="yellow-8"
          toolbar-bg="blue-6"
      :toolbar="[
      ['bold', 'italic', 'underline']
      ]"
      >
    </q-editor>
    <q-btn style="margin-top: 4%; background: var(--accent); scale: 1.2" unelevated rounded @click="generateTemplate()">speichern</q-btn>
</div>
</div>
</q-card>*/
</script>

<style scoped>


.card-label {
  font-size: 2.4em;
  color: var(--darkAccent);
}

.property-label {
  margin-top: 10px;
  font-size: 1.5em;
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

.row-container {
  display: flex;
  flex-direction: row;
}

.divider-line {
  border-top: 2px solid #ccc;
  width: 100%;
}

.pre-formatted {
  white-space: pre;
}


</style>
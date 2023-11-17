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
          <div class="q-gutter-sm" style="margin-bottom: 10px; width: 80%">
            <q-radio v-model="expertise" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="expertise" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="expertise" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="expertise" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="expertise_expand" @click="togglePropertyEditor('expertise')" />
            <q-card v-if="expertise_vis">
              editor
            </q-card>
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Weiterbildung</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="education_improvement" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="education_improvement" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="education_improvement" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="education_improvement" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="education_improvement_expand" @click="togglePropertyEditor('education_improvement')" />

          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Auffassungsgabe</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="comprehension" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="comprehension" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="comprehension" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="comprehension" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="comprehension_expand" @click="togglePropertyEditor('comprehension')" />

          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Leistungsbereitschaft</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="willingness_performance" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="willingness_performance" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="willingness_performance" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="willingness_performance" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="willingness_performance_expand" @click="togglePropertyEditor('willingness_performance')" />

          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Lernbereitschaft</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="willingness_education" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="willingness_education" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="willingness_education" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="willingness_education" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="willingness_education_expand" @click="togglePropertyEditor('willingness_education')" />

          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Belastbarkeit</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="resilience" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="resilience" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="resilience" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="resilience" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="resilience_expand" @click="togglePropertyEditor('resilience')" />

          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Arbeitsweise</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="way_of_working" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="way_of_working" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="way_of_working" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="way_of_working" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="way_of_working_expand" @click="togglePropertyEditor('way_of_working')" />
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Zuverlässigkeit</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="reliability" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="reliability" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="reliability" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="reliability" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="reliability_expand" @click="togglePropertyEditor('reliability')" />
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Arbeitsergebnis</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="work_result" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="work_result" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="work_result" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="work_result" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="work_result_expand" @click="togglePropertyEditor('work_result')" />
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Verhalten</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="behaviour" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="behaviour" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="behaviour" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="behaviour" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="behaviour_expand" @click="togglePropertyEditor('behaviour')" />
          </div>
          <hr class="divider-line" style="margin-bottom: -5px">
        </div>
        <hr class="divider-line">
      </div>
    </q-card>



  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

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

let expertise_vis = ref(false)
let education_improvement_vis = ref(false)
let comprehension_vis = ref(false)
let willingness_performance_vis = ref(false)
let willingness_education_vis = ref(false)
let resilience_vis = ref(false)
let way_of_working_vis = ref(false)
let reliability_vis = ref(false)
let work_result_vis = ref(false)
let behaviour_vis = ref(false)

let expertise_expand = ref("expand_more")
let education_improvement_expand = ref("expand_more")
let comprehension_expand= ref("expand_more")
let willingness_performance_expand = ref("expand_more")
let willingness_education_expand = ref("expand_more")
let resilience_expand = ref("expand_more")
let way_of_working_expand = ref("expand_more")
let reliability_expand = ref("expand_more")
let work_result_expand = ref("expand_more")
let behaviour_expand = ref("expand_more")

function togglePropertyEditor(id) {
  switch(id) {
    case 'expertise':
      toggleExpand(expertise_expand)
      break;
    case 'education_improvement':
      console.log(id);
      break;
    case 'comprehension':
      console.log(id);
      break;
    case 'willingness_performance':
      console.log(id);
      break;
    case 'willingness_education':
      console.log(id);
      break;
    case 'resilience':
      console.log(id);
      break;
    case 'way_of_working':
      console.log(id);
      break;
    case 'reliability':
      console.log(id);
      break;
    case 'work_result':
      console.log(id);
      break;
    case 'behaviour':
      console.log(id);
      break;
  }
}

function toggleExpand(property) {
  if (property.value === 'expand_more') {
    property.value = 'expand_less'
  } else if (property.value === 'expand_less') {
    property.value = 'expand_more'
  }
}

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

.expand-button {
  scale: 0.7;
  background-color: #0d47a1;
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
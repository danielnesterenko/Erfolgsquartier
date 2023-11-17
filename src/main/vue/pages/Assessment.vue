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
            <q-radio v-model="expertise" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" @update:modelValue="updateEditor('expertise')" />
            <q-radio v-model="expertise" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" @update:model-value="updateEditor('expertise')" />
            <q-radio v-model="expertise" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" @update:model-value="updateEditor('expertise')" />
            <q-radio v-model="expertise" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" @update:model-value="updateEditor('expertise')" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="expertise_expand" @click="togglePropertyEditor('expertise')" />
            <div class="q-pa-md q-gutter-sm" v-if="expertise_vis">
              <q-editor
                  v-model="expertise_editor"
                  :toolbar="[['bold', 'italic', 'strike', 'underline']]"
              />
            </div>
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Weiterbildung</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="education_improvement" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="education_improvement" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="education_improvement" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="education_improvement" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="education_improvement_expand" @click="togglePropertyEditor('education_improvement')" />
            <div class="q-pa-md q-gutter-sm" v-if="education_improvement_vis">
              <q-editor
                  v-model="education_improvement_editor"
                  :toolbar="[['bold', 'italic', 'strike', 'underline']]"
              />
            </div>
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Auffassungsgabe</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="comprehension" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="comprehension" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="comprehension" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="comprehension" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="comprehension_expand" @click="togglePropertyEditor('comprehension')" />
            <div class="q-pa-md q-gutter-sm" v-if="comprehension_vis">
              <q-editor
                  v-model="comprehension_editor"
                  :toolbar="[['bold', 'italic', 'strike', 'underline']]"
              />
            </div>
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Leistungsbereitschaft</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="willingness_performance" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="willingness_performance" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="willingness_performance" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="willingness_performance" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="willingness_performance_expand" @click="togglePropertyEditor('willingness_performance')" />
            <div class="q-pa-md q-gutter-sm" v-if="willingness_performance_vis">
              <q-editor
                  v-model="willingness_performance_editor"
                  :toolbar="[['bold', 'italic', 'strike', 'underline']]"
              />
            </div>
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Lernbereitschaft</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="willingness_education" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="willingness_education" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="willingness_education" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="willingness_education" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="willingness_education_expand" @click="togglePropertyEditor('willingness_education')" />
            <div class="q-pa-md q-gutter-sm" v-if="willingness_education_vis">
              <q-editor
                  v-model="willingness_education_editor"
                  :toolbar="[['bold', 'italic', 'strike', 'underline']]"
              />
            </div>
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Belastbarkeit</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="resilience" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="resilience" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="resilience" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="resilience" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="resilience_expand" @click="togglePropertyEditor('resilience')" />
            <div class="q-pa-md q-gutter-sm" v-if="resilience_vis">
              <q-editor
                  v-model="resilience_editor"
                  :toolbar="[['bold', 'italic', 'strike', 'underline']]"
              />
            </div>
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Arbeitsweise</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="way_of_working" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="way_of_working" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="way_of_working" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="way_of_working" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="way_of_working_expand" @click="togglePropertyEditor('way_of_working')" />
            <div class="q-pa-md q-gutter-sm" v-if="way_of_working_vis">
              <q-editor
                  v-model="way_of_working_editor"
                  :toolbar="[['bold', 'italic', 'strike', 'underline']]"
              />
            </div>
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Zuverlässigkeit</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="reliability" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="reliability" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="reliability" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="reliability" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="reliability_expand" @click="togglePropertyEditor('reliability')" />
            <div class="q-pa-md q-gutter-sm" v-if="reliability_vis">
              <q-editor
                  v-model="reliability_editor"
                  :toolbar="[['bold', 'italic', 'strike', 'underline']]"
              />
            </div>
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Arbeitsergebnis</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="work_result" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="work_result" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="work_result" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="work_result" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="work_result_expand" @click="togglePropertyEditor('work_result')" />
            <div class="q-pa-md q-gutter-sm" v-if="work_result_vis">
              <q-editor
                  v-model="work_result_editor"
                  :toolbar="[['bold', 'italic', 'strike', 'underline']]"
              />
            </div>
          </div>
          <hr class="divider-line">
          <p class="property-label" style="margin-bottom: -5px">Verhalten</p>
          <div class="q-gutter-sm" style="margin-bottom: 10px">
            <q-radio v-model="behaviour" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" />
            <q-radio v-model="behaviour" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" />
            <q-radio v-model="behaviour" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" />
            <q-radio v-model="behaviour" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" />
            <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="behaviour_expand" @click="togglePropertyEditor('behaviour')" />
            <div class="q-pa-md q-gutter-sm" v-if="behaviour_vis">
              <q-editor
                  v-model="behaviour_editor"
                  :toolbar="[['bold', 'italic', 'strike', 'underline']]"
              />
            </div>
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

let expertise_editor = ref('')
let education_improvement_editor = ref('')
let comprehension_editor = ref('')
let willingness_performance_editor = ref('')
let willingness_education_editor = ref('')
let resilience_editor = ref('')
let way_of_working_editor = ref('')
let reliability_editor = ref('')
let work_result_editor = ref('')
let behaviour_editor = ref('')

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

let expertise_1 = ref('Fachwissen - Sehr Gut')
let expertise_2 = ref('Fachwissen - Gut')
let expertise_3 = ref('Fachwissen - Befriedigend')
let expertise_4 = ref('Fachwissen - Ausreichend')

function togglePropertyEditor(id) {
  switch(id) {
    case 'expertise':
      toggleExpand(expertise_expand, expertise_vis)
      break;
    case 'education_improvement':
      toggleExpand(education_improvement_expand, education_improvement_vis)
      break;
    case 'comprehension':
      toggleExpand(comprehension_expand, comprehension_vis)
      break;
    case 'willingness_performance':
      toggleExpand(willingness_performance_expand, willingness_performance_vis)
      break;
    case 'willingness_education':
      toggleExpand(willingness_education_expand, willingness_education_vis);
      console.log(id)
      break;
    case 'resilience':
      toggleExpand(resilience_expand, resilience_vis)
      break;
    case 'way_of_working':
      toggleExpand(way_of_working_expand, way_of_working_vis)
      break;
    case 'reliability':
      toggleExpand(reliability_expand, reliability_vis)
      break;
    case 'work_result':
      toggleExpand(work_result_expand, work_result_vis)
      break;
    case 'behaviour':
      toggleExpand(behaviour_expand, behaviour_vis)
      break;
  }
}

function toggleExpand(property, property_vis) {
  if (property.value === 'expand_more') {
    property.value = 'expand_less'
    property_vis.value = !property_vis.value
  } else if (property.value === 'expand_less') {
    property.value = 'expand_more'
    property_vis.value = !property_vis.value
  }
}

function updateEditor(id){
  switch(id) {
    case 'expertise':
      switch(expertise.value) {
        case '1':
          expertise_editor.value = expertise_1.value;
          break;
        case '2':
          expertise_editor.value = expertise_2.value;
          break;
        case '3':
          expertise_editor.value = expertise_3.value;
          break;
        case '4':
          expertise_editor.value = expertise_4.value;
          break;
      }
      break;
    case 'education_improvement':
      toggleExpand(education_improvement_expand, education_improvement_vis)
      break;
    case 'comprehension':
      toggleExpand(comprehension_expand, comprehension_vis)
      break;
    case 'willingness_performance':
      toggleExpand(willingness_performance_expand, willingness_performance_vis)
      break;
    case 'willingness_education':
      toggleExpand(willingness_education_expand, willingness_education_vis);
      console.log(id)
      break;
    case 'resilience':
      toggleExpand(resilience_expand, resilience_vis)
      break;
    case 'way_of_working':
      toggleExpand(way_of_working_expand, way_of_working_vis)
      break;
    case 'reliability':
      toggleExpand(reliability_expand, reliability_vis)
      break;
    case 'work_result':
      toggleExpand(work_result_expand, work_result_vis)
      break;
    case 'behaviour':
      toggleExpand(behaviour_expand, behaviour_vis)
      break;
  }
}

function updateEditorText(editor, grade) {

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
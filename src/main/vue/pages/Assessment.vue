<template>
  <div class="text-h4 q-mb-md" style="color: var(--darkAccent); font-weight: bold;">Notenvergabe</div>
  <hr class="divider-line">

    <div class="center-card">

      <q-card class="rating-card">
        <p class="card-label">Bewertung des Mitarbeiters</p>
        <hr class="divider-line" style="margin-bottom: -5px">
        <div style="width: 600px" class="col-center">
          <div class="col-center" style="width: 100%">

            <hr class="divider-line">
            <p class="property-label" style="margin-bottom: 5px">Fachwissen</p>
            <div class="col-center">
              <div class="row-container" style="margin-bottom: 10px;">
                <q-radio v-model="expertise" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" @update:modelValue="updateEditor('expertise')" />
                <q-radio v-model="expertise" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" @update:model-value="updateEditor('expertise')" />
                <q-radio v-model="expertise" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" @update:model-value="updateEditor('expertise')" />
                <q-radio v-model="expertise" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" @update:model-value="updateEditor('expertise')" />
                <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="expertise_expand" @click="togglePropertyEditor('expertise')" />
              </div>
                <div class="col-center" style="width: 100%" v-if="expertise_vis">
                  <q-editor
                      style="width: 100%;"
                      v-model="expertise_editor_temp"
                      :toolbar="[['bold', 'italic', 'strike', 'underline']]"
                  />
                  <q-btn style="margin: 10px 0 3px 0" outline color="blue-6" label="Speichern" @click="saveTemp('expertise')" />
                </div>
            </div>

            <hr class="divider-line">
            <p class="property-label" style="margin-bottom: 5px">Weiterbildung</p>
            <div class="col-center">
              <div class="row-container" style="margin-bottom: 10px">
                <q-radio v-model="education_improvement" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" @update:modelValue="updateEditor('education_improvement')" />
                <q-radio v-model="education_improvement" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" @update:modelValue="updateEditor('education_improvement')" />
                <q-radio v-model="education_improvement" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" @update:modelValue="updateEditor('education_improvement')" />
                <q-radio v-model="education_improvement" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" @update:modelValue="updateEditor('education_improvement')" />
                <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="education_improvement_expand" @click="togglePropertyEditor('education_improvement')" />
              </div>
              <div class="col-center" v-if="education_improvement_vis">
                <q-editor
                    style="width: 100%;"
                    v-model="education_improvement_editor_temp"
                    :toolbar="[['bold', 'italic', 'strike', 'underline']]"
                />
                <q-btn style="margin: 10px 0 3px 0" outline color="blue-6" label="Speichern"  @click="saveTemp('education_improvement')" />
              </div>
            </div>

            <hr class="divider-line">
            <p class="property-label" style="margin-bottom: 5px">Auffassungsgabe</p>
            <div class="col-center">
              <div class="row-container" style="margin-bottom: 10px">
                <q-radio v-model="comprehension" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" @update:modelValue="updateEditor('comprehension')" />
                <q-radio v-model="comprehension" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" @update:modelValue="updateEditor('comprehension')" />
                <q-radio v-model="comprehension" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" @update:modelValue="updateEditor('comprehension')" />
                <q-radio v-model="comprehension" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" @update:modelValue="updateEditor('comprehension')" />
                <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="comprehension_expand" @click="togglePropertyEditor('comprehension')" />
              </div>
                <div class="col-center" v-if="comprehension_vis">
                  <q-editor
                      style="width: 100%;"
                      v-model="comprehension_editor_temp"
                      :toolbar="[['bold', 'italic', 'strike', 'underline']]"
                  />
                  <q-btn style="margin: 10px 0 3px 0" outline color="blue-6" label="Speichern" @click="saveTemp('comprehension')" />
                </div>
            </div>

            <hr class="divider-line">
            <p class="property-label" style="margin-bottom: 5px">Leistungsbereitschaft</p>
            <div class="col-center">
              <div class="row-container" style="margin-bottom: 10px">
                <q-radio v-model="willingness_performance" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" @update:modelValue="updateEditor('willingness_performance')" />
                <q-radio v-model="willingness_performance" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" @update:modelValue="updateEditor('willingness_performance')" />
                <q-radio v-model="willingness_performance" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" @update:modelValue="updateEditor('willingness_performance')" />
                <q-radio v-model="willingness_performance" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" @update:modelValue="updateEditor('willingness_performance')" />
                <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="willingness_performance_expand" @click="togglePropertyEditor('willingness_performance')" />
              </div>
                <div class="col-center" v-if="willingness_performance_vis">
                  <q-editor
                      style="width: 100%;"
                      v-model="willingness_performance_editor_temp"
                      :toolbar="[['bold', 'italic', 'strike', 'underline']]"
                  />
                  <q-btn style="margin: 10px 0 3px 0" outline color="blue-6" label="Speichern" @click="saveTemp('willingness_performance')" />
                </div>
            </div>

            <hr class="divider-line">
            <p class="property-label" style="margin-bottom: 5px">Lernbereitschaft</p>
            <div class="col-center">
              <div class="row-container" style="margin-bottom: 10px">
                <q-radio v-model="willingness_education" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" @update:modelValue="updateEditor('willingness_education')" />
                <q-radio v-model="willingness_education" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" @update:modelValue="updateEditor('willingness_education')" />
                <q-radio v-model="willingness_education" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" @update:modelValue="updateEditor('willingness_education')" />
                <q-radio v-model="willingness_education" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" @update:modelValue="updateEditor('willingness_education')" />
                <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="willingness_education_expand" @click="togglePropertyEditor('willingness_education')" />
              </div>
                <div class="col-center" v-if="willingness_education_vis">
                  <q-editor
                      style="width: 100%;"
                      v-model="willingness_education_editor_temp"
                      :toolbar="[['bold', 'italic', 'strike', 'underline']]"
                  />
                  <q-btn style="margin: 10px 0 3px 0" outline color="blue-6" label="Speichern" @click="saveTemp('willingness_education')" />
                </div>
            </div>

            <hr class="divider-line">
            <p class="property-label" style="margin-bottom: 5px">Belastbarkeit</p>
            <div class="col-center">
              <div class="row-container" style="margin-bottom: 10px">
                <q-radio v-model="resilience" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" @update:modelValue="updateEditor('resilience')" />
                <q-radio v-model="resilience" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" @update:modelValue="updateEditor('resilience')" />
                <q-radio v-model="resilience" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" @update:modelValue="updateEditor('resilience')" />
                <q-radio v-model="resilience" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" @update:modelValue="updateEditor('resilience')" />
                <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="resilience_expand" @click="togglePropertyEditor('resilience')" />
              </div>
                <div class="col-center" v-if="resilience_vis">
                  <q-editor
                      style="width: 100%;"
                      v-model="resilience_editor_temp"
                      :toolbar="[['bold', 'italic', 'strike', 'underline']]"
                  />
                  <q-btn style="margin: 10px 0 3px 0" outline color="blue-6" label="Speichern" @click="saveTemp('resilience')" />
                </div>
            </div>

            <hr class="divider-line">
            <p class="property-label" style="margin-bottom: 5px">Arbeitsweise</p>
            <div class="col-center">
              <div class="row-container" style="margin: 10px 0 10px 0">
                <q-radio v-model="way_of_working" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" @update:modelValue="updateEditor('way_of_working')" />
                <q-radio v-model="way_of_working" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" @update:modelValue="updateEditor('way_of_working')" />
                <q-radio v-model="way_of_working" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" @update:modelValue="updateEditor('way_of_working')" />
                <q-radio v-model="way_of_working" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" @update:modelValue="updateEditor('way_of_working')" />
                <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="way_of_working_expand" @click="togglePropertyEditor('way_of_working')" />
              </div>
                <div class="col-center" v-if="way_of_working_vis">
                  <q-editor
                      style="width: 100%;"
                      v-model="way_of_working_editor_temp"
                      :toolbar="[['bold', 'italic', 'strike', 'underline']]"
                  />
                  <q-btn style="margin: 10px 0 3px 0" outline color="blue-6" label="Speichern" @click="saveTemp('way_of_working')" />
                </div>
            </div>

            <hr class="divider-line">
            <p class="property-label" style="margin-bottom: 5px">Zuverlässigkeit</p>
            <div class="col-center">
              <div class="row-container" style="margin-bottom: 10px">
                <q-radio v-model="reliability" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" @update:modelValue="updateEditor('reliability')" />
                <q-radio v-model="reliability" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" @update:modelValue="updateEditor('reliability')" />
                <q-radio v-model="reliability" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" @update:modelValue="updateEditor('reliability')" />
                <q-radio v-model="reliability" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" @update:modelValue="updateEditor('reliability')" />
                <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="reliability_expand" @click="togglePropertyEditor('reliability')" />
              </div>
                <div class="col-center" v-if="reliability_vis">
                  <q-editor
                      style="width: 100%;"
                      v-model="reliability_editor_temp"
                      :toolbar="[['bold', 'italic', 'strike', 'underline']]"
                  />
                  <q-btn style="margin: 10px 0 3px 0" outline color="blue-6" label="Speichern" @click="saveTemp('reliability')" />
                </div>
            </div>

            <hr class="divider-line">
            <p class="property-label" style="margin-bottom: 5px">Arbeitsergebnis</p>
            <div class="col-center">
              <div class="row-container" style="margin-bottom: 10px">
                <q-radio v-model="work_result" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" @update:modelValue="updateEditor('work_result')" />
                <q-radio v-model="work_result" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" @update:modelValue="updateEditor('work_result')" />
                <q-radio v-model="work_result" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" @update:modelValue="updateEditor('work_result')" />
                <q-radio v-model="work_result" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" @update:modelValue="updateEditor('work_result')" />
                <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="work_result_expand" @click="togglePropertyEditor('work_result')" />
              </div>
                <div class="col-center" v-if="work_result_vis">
                  <q-editor
                      style="width: 100%;"
                      v-model="work_result_editor_temp"
                      :toolbar="[['bold', 'italic', 'strike', 'underline']]"
                  />
                  <q-btn style="margin: 10px 0 3px 0" outline color="blue-6" label="Speichern" @click="saveTemp('work_result')" />
                </div>
            </div>

            <hr class="divider-line">
            <p class="property-label" style="margin-bottom: 5px">Verhalten</p>
            <div class="col-center">
              <div class="row-container" style="margin-bottom: 10px">
                <q-radio v-model="behaviour" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="1" label="Sehr gut" @update:modelValue="updateEditor('behaviour')" />
                <q-radio v-model="behaviour" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="2" label="Gut" @update:modelValue="updateEditor('behaviour')" />
                <q-radio v-model="behaviour" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="3" label="Befriedigend" @update:modelValue="updateEditor('behaviour')" />
                <q-radio v-model="behaviour" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="4" label="Ausreichend" @update:modelValue="updateEditor('behaviour')" />
                <q-btn class="expand-button" push color="blue-1" text-color="primary" round :icon="behaviour_expand" @click="togglePropertyEditor('behaviour')" />
              </div>
                <div class="col-center" v-if="behaviour_vis">
                  <q-editor
                      style="width: 100%;"
                      v-model="behaviour_editor_temp"
                      :toolbar="[['bold', 'italic', 'strike', 'underline']]"
                  />
                  <q-btn style="margin: 10px 0 3px 0" outline color="blue-6" label="Speichern" @click="saveTemp('behaviour')" />
                </div>
            </div>

            <hr class="divider-line" style="margin-bottom: -5px">
          </div>
          <hr class="divider-line">
        </div>
      </q-card>


      <q-card class="transcript-card">
        <p class="card-label">Arbeitszeugnis</p>
        <hr class="divider-line" style="margin-bottom: -5px">
        <div class="col-center" style="width: 100%; margin-top: 20px">
          <q-editor
              class="pre-formatted"
              style="height: 1188px; width: 840px;"
              v-model="transcript_editor"
              :toolbar="[['bold', 'italic', 'strike', 'underline']]"
          />
          <q-btn style="margin: 10px 0 3px 0" outline color="blue-6" label="Speichern" />
        </div>
      </q-card>
    </div>
</template>

<script setup>

import { ref } from 'vue'

let transcript_editor = ref('')


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

let expertise_editor_temp = ref('')
let education_improvement_editor_temp = ref('')
let comprehension_editor_temp = ref('')
let willingness_performance_editor_temp = ref('')
let willingness_education_editor_temp = ref('')
let resilience_editor_temp = ref('')
let way_of_working_editor_temp = ref('')
let reliability_editor_temp = ref('')
let work_result_editor_temp = ref('')
let behaviour_editor_temp = ref('')

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

let education_improvement_1 = ref('Weiterbildung - Sehr Gut')
let education_improvement_2 = ref('Weiterbildung - Gut')
let education_improvement_3 = ref('Weiterbildung - Befriedigend')
let education_improvement_4 = ref('Weiterbildung - Ausreichend')

let comprehension_1 = ref('Auffassungsgabe - Sehr Gut')
let comprehension_2 = ref('Auffassungsgabe - Gut')
let comprehension_3 = ref('Auffassungsgabe - Befriedigend')
let comprehension_4 = ref('Auffassungsgabe - Ausreichend')

let willingness_performance_1 = ref('Leistungsbereitschaft - Sehr Gut')
let willingness_performance_2 = ref('Leistungsbereitschaft - Gut')
let willingness_performance_3 = ref('Leistungsbereitschaft - Befriedigend')
let willingness_performance_4 = ref('Leistungsbereitschaft - Ausreichend')

let willingness_education_1 = ref('Lernbereitschaft - Sehr Gut')
let willingness_education_2 = ref('Lernbereitschaft - Gut')
let willingness_education_3 = ref('Lernbereitschaft - Befriedigend')
let willingness_education_4 = ref('Lernbereitschaft - Ausreichend')

let resilience_1 = ref('Belastbarkeit - Sehr Gut')
let resilience_2 = ref('Belastbarkeit - Gut')
let resilience_3 = ref('Belastbarkeit - Befriedigend')
let resilience_4 = ref('Belastbarkeit - Ausreichend')

let way_of_working_1 = ref('Arbeitsweise - Sehr Gut')
let way_of_working_2 = ref('Arbeitsweise - Gut')
let way_of_working_3 = ref('Arbeitsweise - Befriedigend')
let way_of_working_4 = ref('Arbeitsweise - Ausreichend')

let reliability_1 = ref('Zuverlässigkeit - Sehr Gut')
let reliability_2 = ref('Zuverlässigkeit - Gut')
let reliability_3 = ref('Zuverlässigkeit - Befriedigend')
let reliability_4 = ref('Zuverlässigkeit - Ausreichend')

let work_result_1 = ref('Arbeitsergebnis - Sehr Gut')
let work_result_2 = ref('Arbeitsergebnis - Gut')
let work_result_3 = ref('Arbeitsergebnis - Befriedigend')
let work_result_4 = ref('Arbeitsergebnis - Ausreichend')

let behaviour_1 = ref('Verhalten - Sehr Gut')
let behaviour_2 = ref('Verhalten - Gut')
let behaviour_3 = ref('Verhalten - Befriedigend')
let behaviour_4 = ref('Verhalten - Ausreichend')

function updateTranscript() {
  transcript_editor.value = "\n\n\n\n\n\n\n\n\n"
      + expertise_editor.value + "\n"
      + education_improvement_editor.value + "\n"
      + comprehension_editor.value + "\n"
      + willingness_performance_editor.value + "\n"
      + willingness_education_editor.value + "\n"
      + resilience_editor.value + "\n"
      + way_of_working_editor.value + "\n"
      + reliability_editor.value + "\n"
      + work_result_editor.value + "\n"
      + behaviour_editor.value
}

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
          expertise_editor_temp.value = expertise_1.value;
          updateTranscript();
          break;
        case '2':
          expertise_editor.value = expertise_2.value;
          expertise_editor_temp.value = expertise_2.value;
          updateTranscript();
          break;
        case '3':
          expertise_editor.value = expertise_3.value;
          expertise_editor_temp.value = expertise_3.value;
          updateTranscript();
          break;
        case '4':
          expertise_editor.value = expertise_4.value;
          expertise_editor_temp.value = expertise_4.value;
          updateTranscript();
          break;
      }
      break;
    case 'education_improvement':
      switch(education_improvement.value) {
        case '1':
          education_improvement_editor.value = education_improvement_1.value;
          education_improvement_editor_temp.value = education_improvement_1.value;
          updateTranscript();
          break;
        case '2':
          education_improvement_editor.value = education_improvement_2.value;
          education_improvement_editor_temp.value = education_improvement_2.value;
          updateTranscript();
          break;
        case '3':
          education_improvement_editor.value = education_improvement_3.value;
          education_improvement_editor_temp.value = education_improvement_3.value;
          updateTranscript();
          break;
        case '4':
          education_improvement_editor.value = education_improvement_4.value;
          education_improvement_editor_temp.value = education_improvement_4.value;
          updateTranscript();
          break;
      }
      break;
    case 'comprehension':
      switch(comprehension.value) {
        case '1':
          comprehension_editor.value = comprehension_1.value;
          comprehension_editor_temp.value = comprehension_1.value;
          updateTranscript();
          break;
        case '2':
          comprehension_editor.value = comprehension_2.value;
          comprehension_editor_temp.value = comprehension_2.value;
          updateTranscript();
          break;
        case '3':
          comprehension_editor.value = comprehension_3.value;
          comprehension_editor_temp.value = comprehension_3.value;
          updateTranscript();
          break;
        case '4':
          comprehension_editor.value = comprehension_4.value;
          comprehension_editor_temp.value = comprehension_4.value;
          updateTranscript();
          break;
      }
      break;
    case 'willingness_performance':
      switch(willingness_performance.value) {
        case '1':
          willingness_performance_editor.value = willingness_performance_1.value;
          willingness_performance_editor_temp.value = willingness_performance_1.value;
          updateTranscript();
          break;
        case '2':
          willingness_performance_editor.value = willingness_performance_2.value;
          willingness_performance_editor_temp.value = willingness_performance_2.value;
          updateTranscript();
          break;
        case '3':
          willingness_performance_editor.value = willingness_performance_3.value;
          willingness_performance_editor_temp.value = willingness_performance_3.value;
          updateTranscript();
          break;
        case '4':
          willingness_performance_editor.value = willingness_performance_4.value;
          willingness_performance_editor_temp.value = willingness_performance_4.value;
          updateTranscript();
          break;
      }
      break;
    case 'willingness_education':
      switch(willingness_education.value) {
        case '1':
          willingness_education_editor.value = willingness_education_1.value;
          willingness_education_editor_temp.value = willingness_education_1.value;
          updateTranscript();
          break;
        case '2':
          willingness_education_editor.value = willingness_education_2.value;
          willingness_education_editor_temp.value = willingness_education_2.value;
          updateTranscript();
          break;
        case '3':
          willingness_education_editor.value = willingness_education_3.value;
          willingness_education_editor_temp.value = willingness_education_3.value;
          updateTranscript();
          break;
        case '4':
          willingness_education_editor.value = willingness_education_4.value;
          willingness_education_editor_temp.value = willingness_education_4.value;
          updateTranscript();
          break;
      }
      console.log(id)
      break;
    case 'resilience':
      switch(resilience.value) {
        case '1':
          resilience_editor.value = resilience_1.value;
          resilience_editor_temp.value = resilience_1.value;
          updateTranscript();
          break;
        case '2':
          resilience_editor.value = resilience_2.value;
          resilience_editor_temp.value = resilience_2.value;
          updateTranscript();
          break;
        case '3':
          resilience_editor.value = resilience_3.value;
          resilience_editor_temp.value = resilience_3.value;
          updateTranscript();
          break;
        case '4':
          resilience_editor.value = resilience_4.value;
          resilience_editor_temp.value = resilience_4.value;
          updateTranscript();
          break;
      }
      break;
    case 'way_of_working':
      switch(way_of_working.value) {
        case '1':
          way_of_working_editor.value = way_of_working_1.value;
          way_of_working_editor_temp.value = way_of_working_1.value;
          updateTranscript();
          break;
        case '2':
          way_of_working_editor.value = way_of_working_2.value;
          way_of_working_editor_temp.value = way_of_working_2.value;
          updateTranscript();
          break;
        case '3':
          way_of_working_editor.value = way_of_working_3.value;
          way_of_working_editor_temp.value = way_of_working_3.value;
          updateTranscript();
          break;
        case '4':
          way_of_working_editor.value = way_of_working_4.value;
          way_of_working_editor_temp.value = way_of_working_4.value;
          updateTranscript();
          break;
      }
      break;
    case 'reliability':
      switch(reliability.value) {
        case '1':
          reliability_editor.value = reliability_1.value;
          reliability_editor_temp.value = reliability_1.value;
          updateTranscript();
          break;
        case '2':
          reliability_editor.value = reliability_2.value;
          reliability_editor_temp.value = reliability_2.value;
          updateTranscript();
          break;
        case '3':
          reliability_editor.value = reliability_3.value;
          reliability_editor_temp.value = reliability_3.value;
          updateTranscript();
          break;
        case '4':
          reliability_editor.value = reliability_4.value;
          reliability_editor_temp.value = reliability_4.value;
          updateTranscript();
          break;
      }
      break;
    case 'work_result':
      switch(work_result.value) {
        case '1':
          work_result_editor.value = work_result_1.value;
          work_result_editor_temp.value = work_result_1.value;
          updateTranscript();
          break;
        case '2':
          work_result_editor.value = work_result_2.value;
          work_result_editor_temp.value = work_result_2.value;
          updateTranscript();
          break;
        case '3':
          work_result_editor.value = work_result_3.value;
          work_result_editor_temp.value = work_result_3.value;
          updateTranscript();
          break;
        case '4':
          work_result_editor.value = work_result_4.value;
          work_result_editor_temp.value = work_result_4.value;
          updateTranscript();
          break;
      }
      break;
    case 'behaviour':
      switch(behaviour.value) {
        case '1':
          behaviour_editor.value = behaviour_1.value;
          behaviour_editor_temp.value = behaviour_1.value;
          updateTranscript();
          break;
        case '2':
          behaviour_editor.value = behaviour_2.value;
          behaviour_editor_temp.value = behaviour_2.value;
          updateTranscript();
          break;
        case '3':
          behaviour_editor.value = behaviour_3.value;
          behaviour_editor_temp.value = behaviour_3.value;
          updateTranscript();
          break;
        case '4':
          behaviour_editor.value = behaviour_4.value;
          behaviour_editor_temp.value = behaviour_4.value;
          updateTranscript();
          break;
      }
      break;
  }
}

function saveTemp(id) {
  switch(id) {
    case 'expertise':
      expertise_editor.value = expertise_editor_temp.value;
      updateTranscript();
      togglePropertyEditor(id);
      break;
    case 'education_improvement':
      education_improvement_editor.value = education_improvement_editor_temp.value;
      updateTranscript();
      togglePropertyEditor(id);
      break;
    case 'comprehension':
      comprehension_editor.value = comprehension_editor_temp.value;
      updateTranscript();
      togglePropertyEditor(id);
      break;
    case 'willingness_performance':
      willingness_performance_editor.value = willingness_performance_editor_temp.value;
      updateTranscript();
      togglePropertyEditor(id);
      break;
    case 'willingness_education':
      willingness_education_editor.value = willingness_education_editor_temp.value;
      updateTranscript();
      togglePropertyEditor(id);
      break;
    case 'resilience':
      resilience_editor.value = resilience_editor_temp.value;
      updateTranscript();
      togglePropertyEditor(id);
      break;
    case 'way_of_working':
      way_of_working_editor.value = way_of_working_editor_temp.value;
      updateTranscript();
      togglePropertyEditor(id);
      break;
    case 'reliability':
      reliability_editor.value = reliability_editor_temp.value;
      updateTranscript();
      togglePropertyEditor(id);
      break;
    case 'work_result':
      work_result_editor.value = work_result_editor_temp.value;
      updateTranscript();
      togglePropertyEditor(id);
      break;
    case 'behaviour':
      behaviour_editor.value = behaviour_editor_temp.value;
      updateTranscript();
      togglePropertyEditor(id);
      break;
  }
}

</script>

<style scoped>


.card-label {
  font-size: 2.4em;
  color: var(--darkAccent);
}

.property-label {
  margin-top: 10px;
  font-size: 1.5em;
  font-weight: bold;
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

.rating-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
  padding: 30px;
  border-radius: 20px;
  margin-top: 1%;
  margin-left: 1%
}

.transcript-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 30px;
  border-radius: 20px;
  margin-top: 1%;
  margin-left: 1%;
}

.col-center {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.row-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.divider-line {
  border-top: 2px solid #ccc;
  width: 100%;
}

.pre-formatted {
  white-space: pre;
}


</style>
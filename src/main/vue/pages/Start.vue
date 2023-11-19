
<template>
  <div class="tab-wrapper">
    <q-splitter
        v-model="splitterModel"
        style="height: 100%; background-color: var(--background); background: var(--background)"
    >

      <template v-slot:before>
        <div>
        <q-tabs
            v-model="tab"
            vertical
            class="text-teal"
        >
          <q-tab style="color: var(--accent); background: var(--base)" name="PersonalInformation" icon="face" label="Angaben zur Person" />
          <q-tab style="color: var(--accent); background: var(--base)" name="FirmInformation" icon="factory" label="Angaben zum Unternehmen" />
          <q-tab style="color: var(--accent); background: var(--base)" name="WorkDescription" icon="work" label="Tätigkeitsbeschreibung" />
          <q-tab style="color: var(--accent); background: var(--base)" name="Assessment" icon="troubleshoot" label="Bewertung" />
          <q-tab style="color: var(--accent); background: var(--base)" name="Transcript" icon="receipt" label="Arbeitszeugnis" />
        </q-tabs>
        </div>
      </template>

      <template v-slot:after>
        <q-tab-panels
            v-model="tab"
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
        >
          <q-tab-panel class="tab-panel" name="PersonalInformation"><PersonalInformation/></q-tab-panel>
          <q-tab-panel class="tab-panel" name="FirmInformation"><FirmInformation/></q-tab-panel>
          <q-tab-panel class="tab-panel" name="WorkDescription"><WorkDescription/></q-tab-panel>
          <q-tab-panel class="tab-panel" name="Assessment"><Assessment/></q-tab-panel>
          <q-tab-panel class="tab-panel" name="Transcript"><Transcript/></q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
</template>




<script setup>
import { ref } from 'vue'
import PersonalInformation from "./PersonalInformation.vue";
import FirmInformation from "./FirmInformation.vue";
import WorkDescription from "./WorkDescription.vue";
import Transcript from "./Transcript.vue";
import Assessment from "./Assessment.vue";

let tab = ref('mails');
let splitterModel = ref(20);

let personalInformationLabel = "Persönliche \n Informationen";


</script>

<style>

.tab-wrapper {
  width: 100%;
}

.tab-panel {
  background: var(--background);
}

</style>

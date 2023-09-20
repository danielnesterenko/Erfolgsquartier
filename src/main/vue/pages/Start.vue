
<template>
  <div class="tab-wrapper">
    <q-splitter
        v-model="splitterModel"
        style="height: 100%"
    >

      <template v-slot:before>
        <q-tabs
            v-model="tab"
            vertical
            class="text-teal"
            active-color="bgCol"
        >
          <q-tab style="color: var(--accent);" name="PersonalInformation" icon="face" label="Angaben zur Person" />
          <q-tab style="color: var(--accent);" name="FirmInformation" icon="factory" label="Angaben zum Unternehmen" />
          <q-tab style="color: var(--accent);" name="WorkDescription" icon="work" label="Tätigkeitsbeschreibung" />
          <q-tab style="color: var(--accent);" name="Transcript" icon="receipt" label="Arbeitszeugnis" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
        >
          <q-tab-panel name="PersonalInformation"><PersonalInformation/></q-tab-panel>
          <q-tab-panel name="FirmInformation"><FirmInformation/></q-tab-panel>
          <q-tab-panel name="WorkDescription"><WorkDescription/></q-tab-panel>
          <q-tab-panel name="Transcript"><Transcript/></q-tab-panel>
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

let tab = ref('mails');
let splitterModel = ref(20);

let personalInformationLabel = "Persönliche \n Informationen";


</script>

<style>

.tab-wrapper {
  width: 100%;
  align-self: start;
  margin-top: 1%;
}

.text-accentCol {
  color: var(--accent) !important;
}

.text-bgCol {
  color: var(--darkAccent) !important;
}


</style>

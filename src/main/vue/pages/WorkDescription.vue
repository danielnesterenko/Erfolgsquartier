<template>
  <div class="text-h4 q-mb-md" style="color: var(--darkAccent); font-weight: bold;">Tätigkeitsbeschreibung</div>
  <hr class="divider-line">

  <div class="center-card">

    <q-card class="parent-card">
      <p class="card-label">Mitarbeiter</p>
      <hr class="divider-line">
      <div style="width: 350px" class="col-center">
        <div class="row-container">
          <q-select class="select-component" rounded label-color="black" standout="bg-blue-6" v-model="prop01" :options="prop01_options" label="Rounded standout" />
        </div>
      </div>
    </q-card>

  </div>
</template>

<script setup>

import { ref } from 'vue'

let prop01 = ref()
let prop01_options = [1, 2, 3, 4, 5, 6, 7]

//<div class="row-container">
    //<q-btn push color="primary" round icon="arrow_drop_up" />
    //<q-btn push color="primary" round icon="arrow_drop_down" />
    //</div>
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

.row-container {
  display: flex;
  flex-direction: row;
}

.divider-line {
  border-top: 2px solid #ccc;
  width: 100%;
}

.select-component {
  margin: 10px;
  width: 300px;
}

.pre-formatted {
  white-space: pre;
}


</style>
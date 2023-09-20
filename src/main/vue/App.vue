<template>
  <q-layout view="hHh lpR fFf" class="site-background">

    <q-header class="header" elevated style="width: inherit">

      <q-toolbar>
        <div style="display: flex; flex-direction: row; justify-content: space-between; width: 100%">
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: start;">
          </div>
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-top: 5px;">
            <q-toolbar-title center-middle class="header-title" id="title" style="text-align: center; width: 100%">Erfolgsquartier</q-toolbar-title>
          </div>
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <!--img :src="imageUrl" class="telekom-img-header" style="margin-top: 2px;"-->
          </div>
        </div>
      </q-toolbar>

    </q-header>

    <q-page-container class="page-container">
      <router-view/>
    </q-page-container>

    <q-footer elevated class="footer">
      <p class="footer-p" style="margin-right: 30px"><!--<router-link to="/imprint">-->Impressum<!--</router-link>-->
      </p>
    </q-footer>

  </q-layout>

</template>

<script setup>

import {ref, onMounted} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter()

let design = ref();
let imageUrl = ref(null);
let applicationName = ref(" ");


onMounted(async () => {

  // setting color-codes according to the CorporateDesign supplied by the backend
  document.documentElement.style.setProperty('--header', "#793FDF");
  document.documentElement.style.setProperty('--footer', "#793FDF");
  document.documentElement.style.setProperty('--accent', "#793FDF");
  document.documentElement.style.setProperty('--darkAccent', "#552ACE");
  document.documentElement.style.setProperty('--text', "#FFFD8C");

});
</script>

<style lang="scss" scoped>

.site-background{
  background-color: #fefefe;
}

.header {
  background-color: #793FDF;
  height: 76px;
  color: white;
}

.header-title {
  font-size: 40px;
  color: #FFFD8C;
}

.img-header {
  top: 0;
  right: 30px;
  height: 70px;
  width: 100px;
}

.footer{
  background-color: var(--accent);
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.footer-p {
  color: #FFFD8C;
  display: inline-block;
  margin: 0 7px;
  font-weight: bold;
}

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
}

</style>
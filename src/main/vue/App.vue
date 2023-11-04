<template>
  <q-layout view="hHh lpR fFf" class="site-background">

    <q-header class="header" elevated style="width: inherit">

      <q-toolbar>
        <div style="display: flex; flex-direction: row; justify-content: space-between; width: 100%">
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: start;">
          </div>
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-top: 5px;">
            <img src="./assets/CorporateLogo.png" class="telekom-img-header" style="height: 50px; width: 200px; margin-top: 5%;" alt="CorporateLogo">
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
  document.documentElement.style.setProperty('--base', "#11243B");
  document.documentElement.style.setProperty('--header', "#11243B");
  document.documentElement.style.setProperty('--footer', "#11243B");
  document.documentElement.style.setProperty('--accent', "#71B0FF");
  document.documentElement.style.setProperty('--darkAccent', "#285AB7");
  document.documentElement.style.setProperty('--background', "#EBE7E6");
  document.documentElement.style.setProperty('--text', "#FFFD8C");

});
</script>

<style lang="scss" scoped>

.site-background{
  background-color: var(--background);
}

.header {
  background-color: var(--header);
  height: 76px;
  color: white;
}

.footer{
  background-color: var(--footer);
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.footer-p {
  color: var(--accent);
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
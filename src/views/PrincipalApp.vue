<template>
  <!-- <div>
    <button @click="rec">Recarga</button>
  </div> -->
  <keep-alive>
    <MenuApp :key="yap" />
  </keep-alive>

</template>
<script setup>
import { ref } from 'vue';
import MenuApp from './MenuApp.vue';

const yap = ref(0)

</script>
<style lang="scss">

</style>

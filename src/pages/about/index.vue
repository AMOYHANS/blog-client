<script setup lang="ts">
import About from "@/components/About.vue";
</script>

<template>
  <div class="container">
    <About/>
  </div>
</template>

<style scoped lang="scss">
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 48px);
    overflow: hidden;
  }
</style>

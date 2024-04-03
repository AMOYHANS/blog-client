<script setup lang="ts">
import AccountInfo from '@/components/setting/AccountInfo.vue'
</script>

<template>
  <div class="container">
    <AccountInfo/>
    <div class="right">zsfcsvsdvdsvddsa
    </div>
  </div>
</template>

<style scoped lang="scss">
.container{
  display: flex;

  .right{
    flex: 1;
  }
}
@media screen and (max-width: 768px) {
  .container{
    flex-direction: column;
}
  
}
</style>

<script setup lang="ts">
import { computed, ref, defineEmits } from 'vue';
const emojiRef = ref<HTMLDivElement>()
const emit = defineEmits(['emojiClick'])

const emojiCodes = computed(() => {
  const codes: number[] = []
  for(let i = 128512; i < 128580; i++){
    codes.push(i)
  }

  for (let b = 129296; b <= 129488; b++) {
    codes.push(b);
  }
  return codes
})

const hanedleEmjClick = (e: MouseEvent) => {
  emit('emojiClick', e.target)
}

</script>

<template>
  <div class="emoji" ref="emojiRef">
    <span v-for="item in emojiCodes" v-html="`&#${item};`" @click="hanedleEmjClick"></span>
  </div>
</template>

<style scoped lang="scss">
.emoji{
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid #000;
  overflow-y: scroll;
  border-radius: 4px;
  background-color: aliceblue;
  span{
    font-size: 20px;
    cursor: pointer;
    &:hover{
      background-color: #655e5e;
      border-radius: 1px;
    }
  }
}
</style>

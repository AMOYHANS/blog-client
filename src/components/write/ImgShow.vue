<script setup lang="ts">
import { ref } from 'vue';
defineProps({
  src: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['imgClose'])
const imgRef = ref<HTMLImageElement>()
const imgScale = ref(1)
const handleModalScroll = (e: WheelEvent) => {
  e.preventDefault()
  imgScale.value *= e.deltaY < 0 ? 1.1 : 0.9
}

const handleTopClick = (e: Event) => {
  if(e.target !== imgRef.value) {
    emit('imgClose')
  }
}

</script>

<template>
  <div class="modal" @wheel="handleModalScroll" @click="handleTopClick">
    <img ref="imgRef" :src="src" :width="`${imgScale * 50}%`" alt="">
  </div>
</template>

<style scoped lang="scss">
.modal{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

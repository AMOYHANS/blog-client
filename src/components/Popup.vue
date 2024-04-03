<script setup lang="ts">

defineProps({
  content: {
    type: String,
    default: '确认删除？'
  },
  width: {
    type: String,
    default: '200px'
  }
})
const emit = defineEmits(['confirm', 'cancel'])
</script>

<template>
  <div class="modal">
    <div class="popup" :style="{width: width}">
      <div class="title">
        <span @click="emit('cancel')">X</span>
      </div>
      <div class="content">
        {{content}}
      </div>
      <div class="footer">
        <button @click="emit('confirm')">确认</button>
        <button @click="emit('cancel')" >取消</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .modal{
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    overflow: hidden;
    cursor:default;
    user-select: none;
    .popup{
      width: 20%;
      height: 20%;
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title{
        display: flex;
        justify-content: flex-end;
        padding-right: 6px;
        span{
          transform: scaleX(1.5);
          scale: 0.6;
          cursor: pointer;
        }
      }
      .content{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .footer{
        padding: 8px;
        display: flex;
        justify-content: center;
        gap: 8px;
        button{
          padding: 4px 12px;
          border-radius: 5px;
          outline: none;
          cursor: pointer;
          background-color: var(--dark-color);
          color: var(--light-color);
        }
      }
    }
  }
</style>

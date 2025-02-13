<template>
  <div class="progress-bar">
    <div class="progress-bar-fill" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      required: true,
      default: 0
    }
  }
}
</script>

<style scoped>
.progress-bar {
  width: 100%;
  background-color: #93d7ea;
  border-radius: 5px;
  overflow: hidden;
}
.progress-bar-fill {
  height: 20px;
  background-color: #76c7c0;
  width: 0;
  transition: width 0.5s ease;
}
</style>

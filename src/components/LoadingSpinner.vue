<template>
  <div v-if="isLoading" class="loading-spinner">
    <img src="../assets/images/loader.png" alt="Loading..." />
  </div>
</template>

<script setup>
import { isLoading } from '@/loadingState.js'
</script>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-spinner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.loading-spinner img {
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite; /* Apply the animation */
}
</style>

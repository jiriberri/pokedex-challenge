<template>
  <div v-if="isLoading" class="loading-spinner">
    <img src="../assets/images/loader.png" alt="Loading..." />
  </div>
</template>

<script setup>
import { isLoading } from '@/loadingState.js'
</script>

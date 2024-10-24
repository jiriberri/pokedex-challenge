<template>
  <main>
    <LoadingSpinner />
    <router-view></router-view>
  </main>
</template>

<script setup>
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import '@/assets/styles/main.css'
</script>
<style scoped></style>

<script setup>
import Profile from './components/TheProfile.vue'
</script>

<template>
  <div id="appContent">
      <Profile></Profile>
  </div>

</template>

<style scoped>
#appContent{
  margin:8px;
}

@media (min-width: 1024px) {
  #appContent{
    margin:23px;
  }
}
</style>

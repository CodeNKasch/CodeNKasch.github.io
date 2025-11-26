<script setup>
import { ref } from 'vue';
import Profile from "@/components/Profile.vue";
let name = "Karl Schmidt"
let url = "https://d2exd72xrrp1s7.cloudfront.net/www/10/10lw9isgd9rav1beebkkvc702u414l6v3j-u689455295973-full/17e2452fe2a?width=400&height=400&crop=true";
const imageLoaded = ref(false);
</script>

<template>
  <Profile>
    <template #name>
      {{name}}
    </template>
    <template #img>
      <div v-if="!imageLoaded" class="image-loading"></div>
      <img :src="url" @load="imageLoaded = true" :class="{ loaded: imageLoaded }" />
    </template>
  </Profile>
</template>

<style scoped>
.image-loading {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(90deg, var(--color-background-soft) 25%, var(--color-background-mute) 50%, var(--color-background-soft) 75%);
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

img {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

img.loaded {
  opacity: 1;
}
</style>
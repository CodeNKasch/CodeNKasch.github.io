<script setup>

import IconGithub from "@/components/icons/IconGithub.vue";
import IconKomoot from "@/components/icons/IconKomoot.vue";
import IconXing from "@/components/icons/IconXing.vue";

const handleNameClick = () => {
  if (window.cvEasterEgg) {
    window.cvEasterEgg();
  }
};
</script>

<template>
  <div class="profile">
    <div class="profile_name">
    <h1 @click="handleNameClick" class="clickable-name" title="Triple-click for a surprise!">
      <slot name="name"></slot>
    </h1>
  </div>
    <div class="profile_img">
      <slot name="img"></slot>
    </div>
  </div>
</template>

<style scoped>
.profile{
  position: relative;
  min-width: 240px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.clickable-name {
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease;
}

.clickable-name:hover {
  transform: scale(1.02);
}

.clickable-name:active {
  transform: scale(0.98);
}

.profile_img {
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
}

</style>
<script setup>

import IconGithub from "@/components/icons/IconGithub.vue";
import IconKomoot from "@/components/icons/IconKomoot.vue";
import IconXing from "@/components/icons/IconXing.vue";
</script>

<template>
  <div class="profile">
    <div class="profile_name">
    <h1>
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
  min-width: 250px;
}
.profile_img {
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
}

</style>
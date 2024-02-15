<script setup>
import Profile from './components/TheProfile.vue'
import Socials from "@/components/Socials.vue";
</script>

<template>
  <div class="content">

    <Profile/>

    <div class="divider"></div>

    <Socials/>

  </div>
</template>

<style scoped>
.content{
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 250px;
}
.divider{
  margin: 15px 0;
  position: relative;
  width:100%;
  height:3px;
  border-radius: 1px;
  background: var(--gradient);
}
#app{
  display: flex;
  flex-direction: column;
}
@media (min-width: 1024px) {
  .divider {
    width: 3px;
    height: 100%;
    margin: 0 40px;
  }
  .content{
    flex-direction: row;
    justify-content: space-between;

  }
}
</style>

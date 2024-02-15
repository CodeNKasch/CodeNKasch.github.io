<script setup>
import Profile from "@/components/Profile.vue";
let name = "Karl Schmidt"
let url = "https://d2exd72xrrp1s7.cloudfront.net/www/10/10lw9isgd9rav1beebkkvc702u414l6v3j-u689455295973-full/17e2452fe2a?width=400&height=400&crop=true";
</script>

<template>
  <Profile>
    <template #name>
      {{name}}
    </template>
    <template #img>
      <img :src=url />
    </template>
  </Profile>
</template>

<style scoped>
img{
  position:absolute;
  height: 100%;
  width:100%;
  top:0;
  left:0;
}

</style>
<script setup>
import Profile from "@/components/Profile.vue";
</script>

<template>
  <Profile>
    <template #img>
      <img src="https://d2exd72xrrp1s7.cloudfront.net/www/10/10lw9isgd9rav1beebkkvc702u414l6v3j-u689455295973-full/17e2452fe2a?width=400&height=400&crop=true"/>
    </template>
    <template #name>
      Karl Schmidt
    </template>
  </Profile>
</template>

<style scoped>
.profile_img{
  padding: 10px;
  overflow: hidden;
  border-radius: 20px;
}
</style>
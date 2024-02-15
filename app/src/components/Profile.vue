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
  <div>
    <div class="flexbox_container">
      <div class="profile_item">
        <a href="https://github.com/CodeNKasch" target="_blank" rel="noopener noreferrer" class=" profile_github">
          <icon-github/>
          <h4>Code</h4>
        </a>
      </div>
      <div class="profile_item">
        <a href="https://www.komoot.com/de-de/user/689455295973" target="_blank" rel="noopener noreferrer" class="profile_github">
          <IconKomoot/>
          <h4>Sport</h4>
        </a></div>
      <div class="profile_item">
        <a href="https://www.xing.com/profile/Karl_Schmidt024310/web_profiles" target="_blank" rel="noopener noreferrer" class=" profile_xing">
         <IconXing/>
          <h4>Career</h4>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile{
  position: relative;
}
.profile_img {
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
}
.flexbox_container{
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  transition-duration: 500ms;
  transition-property: background;
  min-width: 0;
  min-height: 0;
  flex: none;
  padding: 0;
  margin: 0;
  padding-top:10px;
}

.profile_item{
  width: 60px;
  margin: auto;
  text-align: center;
  a{
    h4::before{
      content:"#"
    }
  }
}


@media (min-width: 1024px) {
  #app{
    min-width: 60vh;
  }
}
</style>
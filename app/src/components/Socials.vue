<script>
import IconXing from "@/components/icons/IconXing.vue";
import IconKomoot from "@/components/icons/IconKomoot.vue";
import IconGithub from "@/components/icons/IconGithub.vue";

export default {
  name: 'Socials',
  components: {IconGithub, IconKomoot, IconXing}
}
</script>

<template>
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
.flexbox_container{
  position: relative;
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
  .flexbox_container{
    flex-direction: column;
    width:100%
  }
  .profile_item{
    position: relative;
    width: 100%;
    min-width: 140px;
  }
}
</style>
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
        <a href="https://github.com/CodeNKasch" target="_blank" rel="noopener noreferrer" class="profile_github" aria-label="Visit GitHub profile for code projects">
          <icon-github aria-hidden="true"/>
          <h4>Code</h4>
        </a>
      </div>
      <div class="profile_item">
        <a href="https://www.komoot.com/de-de/user/689455295973" target="_blank" rel="noopener noreferrer" class="profile_github" aria-label="Visit Komoot profile for sport activities">
          <IconKomoot aria-hidden="true"/>
          <h4>Sport</h4>
        </a></div>
      <div class="profile_item">
        <a href="https://www.xing.com/profile/Karl_Schmidt024310/web_profiles" target="_blank" rel="noopener noreferrer" class="profile_xing" aria-label="Visit Xing profile for career information">
          <IconXing aria-hidden="true"/>
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
  width: 70px;
  margin: 8px;
  text-align: center;
  a{
    display: block;
    padding: 8px;
    border-radius: 8px;
    transition: all 0.3s ease;
    text-decoration: none;

    h4::before{
      content:"#"
    }

    &:hover {
      transform: translateY(-4px);
      background: rgba(93, 219, 149, 0.1);
    }

    &:focus {
      outline: 2px solid var(--gradient);
      outline-offset: 2px;
    }

    &:active {
      transform: translateY(-2px);
    }
  }

  svg {
    transition: transform 0.3s ease;
  }

  a:hover svg {
    transform: scale(1.1);
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
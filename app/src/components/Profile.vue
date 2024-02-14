<script setup>

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
          <svg aria-hidden="true" focusable="false" width="50" height="50" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg-inline--fa fa-github style-7c3c83d4"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
          <h4>#Code</h4>
        </a>
      </div>
      <div class="profile_item">
        <a href="https://www.komoot.com/de-de/user/689455295973" target="_blank" rel="noopener noreferrer" class="profile_github">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32" fill="none"><path d="M31.5526 19.7414C33.619 11.1519 28.3309 2.51368 19.7414 0.447365C11.1519 -1.61895 2.51368 3.66912 0.447365 12.2586C-1.61895 20.8481 3.66912 29.4863 12.2586 31.5526C20.8481 33.619 29.4863 28.3309 31.5526 19.7414Z" fill="#333"></path> <path d="M2.3064 15.9981C2.3064 8.44947 8.45096 2.30491 15.9996 2.30491C23.5528 2.30491 29.6928 8.44947 29.6928 15.9981C29.6928 19.0365 28.7176 21.9034 26.8756 24.3097L20.0087 17.4428C20.1802 16.9733 20.266 16.4857 20.266 15.9936C20.266 13.6414 18.3518 11.7272 15.9996 11.7272C13.6474 11.7272 11.7332 13.6414 11.7332 15.9936C11.7332 16.4857 11.819 16.9733 11.9905 17.4428L5.12359 24.3097C3.28158 21.9079 2.3064 19.0365 2.3064 15.9981Z" fill="currentColor"></path> <path d="M13.4894 19.2307L15.9996 15.3164L18.5098 19.2261L25.3135 26.0299C22.7717 28.3911 19.4714 29.6913 15.9996 29.6913C12.5278 29.6913 9.22748 28.3911 6.68568 26.0299L13.4894 19.2307Z" fill="currentColor"></path></svg>
          <h4>#Sport</h4>
        </a></div>
      <div class="profile_item">
        <a href="https://www.xing.com/profile/Karl_Schmidt024310/web_profiles" target="_blank" rel="noopener noreferrer" class=" profile_xing"><svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" data-xds="LogoXINGLogoDuo" height="50" width="50"><path d="M1.805 5.984l3.635 6.479L0 22.018h6.491l5.4-9.555-3.634-6.48H1.805z" fill="currentColor"></path> <path d="M21.122 0l-10.49 18.642L17.396 31h6.582l-6.88-12.358L27.6 0h-6.478z" fill="currentColor"></path></svg>
          <h4>#Career</h4>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile_img{
  overflow: hidden;
  border-radius: 20px;
}
.flexbox_container{

  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  transition-duration: 500ms;
  transition-property: background;
  min-width: 0;
  min-height: 0;
  flex: none;
  padding: 0;
  margin: 0;
  padding-top:10px;
  ::after{
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 2em;
      height: 0.15em;
      border-radius: 999px;
      background-image: inherit;
  }
}
.profile_item{
  width: 33%;
  text-align: center;
}
</style>
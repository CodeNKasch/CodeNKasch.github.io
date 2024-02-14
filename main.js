Vue.component('project-component',{
  props:['project'],
  filters:{},
  methods:{},
  template:`
    <div class="project" >
        <h3><a :href="project.github"  target="_blank" rel="noopener noreferrer" >{{project.name}}</a></h3>
        <div class="card">    
            <img :src="project.img"> 
        </div>
        </br>
        <i>{{project.status}}</i> 
        </br>
        <i>{{project.date}}</i>        
    </div>
  `
});

Vue.component('profile-component',{
	props:['profile'],
	filters:{},
	methods:{},
	template:`
	<div class="profile">
	     <header><h1> {{profile.name}} </h1></header>
		<img :src=profile.img class="profile_img"  />
		<div class="flexbox_container"> 
		   <a class="profile_item profile_github" :href=profile.github target="_blank" rel="noopener noreferrer" >
		      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github style-7c3c83d4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>     
		      Code
		   </a>
		   <a class="profile_item profile_github" :href=profile.komoot target="_blank" rel="noopener noreferrer" >
		      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32" fill="none">
                <path d="M31.5526 19.7414C33.619 11.1519 28.3309 2.51368 19.7414 0.447365C11.1519 -1.61895 2.51368 3.66912 0.447365 12.2586C-1.61895 20.8481 3.66912 29.4863 12.2586 31.5526C20.8481 33.619 29.4863 28.3309 31.5526 19.7414Z" fill="#333"/>
                <path d="M2.3064 15.9981C2.3064 8.44947 8.45096 2.30491 15.9996 2.30491C23.5528 2.30491 29.6928 8.44947 29.6928 15.9981C29.6928 19.0365 28.7176 21.9034 26.8756 24.3097L20.0087 17.4428C20.1802 16.9733 20.266 16.4857 20.266 15.9936C20.266 13.6414 18.3518 11.7272 15.9996 11.7272C13.6474 11.7272 11.7332 13.6414 11.7332 15.9936C11.7332 16.4857 11.819 16.9733 11.9905 17.4428L5.12359 24.3097C3.28158 21.9079 2.3064 19.0365 2.3064 15.9981Z" fill="currentColor"/>
                <path d="M13.4894 19.2307L15.9996 15.3164L18.5098 19.2261L25.3135 26.0299C22.7717 28.3911 19.4714 29.6913 15.9996 29.6913C12.5278 29.6913 9.22748 28.3911 6.68568 26.0299L13.4894 19.2307Z" fill="currentColor"/>
              </svg>
              Sport
           </a>
		</div>
    </div>
    
`
});

var app = new Vue({
  el:"#app",
  data:{
    profile:{
	    img:"https://avatars.githubusercontent.com/u/24311812",
	    name:"Karl Schmidt",
        github: "https://github.com/CodeNKasch",
        komoot: "https://www.komoot.com/de-de/user/689455295973"
    },
    tours: null,
    message:'Work in progress',
    projects:[
      {name:'TPHeaven',date:'22.12.2018',status:'PLANNING',img:'rock600x400.jpg', github:'https://github.com/CodeNKasch/TPHeaven', description: 'Login to Heaven HR via Android.'},
      {name:'Landing page',date:'22.12.2018',status:'PLANNING',img:'vue.png',github: 'https://github.com/CodeNKasch/CodeNKasch.github.io', description: 'Github landing page.'},
      {name:'Stravistix for strava',date:'01.01.1970',status:'WIP',img:'stravisitx.PNG', github: 'https://github.com/CodeNKasch/stravistix', description: 'Only a adaption of chrome-webext code to firefox'}
    ]
  },
    mounted () {
    axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.tours = response))
},
  computed:{
    projectnames(){
      return `Projects: ${this.projects.map(p=>p.name).join(", ")}`
    }
  },
  template: `
  <div>
    <div class="main_content"> 

        <div class="profile_container">
            <profile-component  v-bind:profile="profile" />
        </div>
        <div class="project_container">
            <h1> Projects and Stuff </h1>
            <project-component v-for="item in projects" v-bind:project="item" :key="item.name" />
        </div>
    </div> 
  </div>  
`
});


/// GET /api/v007/users/689455295973/tours/ H3
// Accept: application/hal+json,application/json
// Sec-Fetch-Site: same-origin
// Accept-Encoding: gzip, deflate, br
// If-None-Match: "0a2b4cae4f11ef2d5f8611b3f4829394b"
// Sec-Fetch-Mode: cors
// Accept-Language: de
// Host: www.komoot.com
// Referer: https://www.komoot.com/de-de/user/689455295973/tours
// Connection: keep-alive
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2.1 Safari/605.1.15
// Cookie: _dd_s=rum=0&expire=1707923882054; kmt_rid=no-consent; kmt_sess=eyJsYW5nIjoiZW4iLCJtZXRyaWMiOnRydWV9; kmt_sess.sig=-Hx37oUo29M3jtx5yaA1PkKsqzw
// Sec-Fetch-Dest: empty
// Priority: u=3, i
Vue.component('project-component',{
  props:['project'],
  filters:{},
  methods:{},
  template:`
    <div class="project" >
    <h3><i><a :href="project.github">{{project.name}}</a></i></h3>
      
      <div class="card">
        <div class="front">
            <img :src="project.img"> 
        </div>
        <div class="back">
        
        </div>
      </div>
      </br>
        <i>{{project.status}}</i> -
        <i>{{project.date}}</i>        
    </div>
  `
});

var app = new Vue({
  el:"#app",
  data:{
    message:'Work in progress',
    projects:[
      {name:'TPHeaven',date:'22.12.2018',status:'PLANNING',img:'rock600x400.jpg', github:'https://github.com/CodeNKasch/TPHeaven', description: 'Login to Heaven HR via Android.'},
      {name:'Landing page',date:'22.12.2018',status:'PLANNING',img:'vue.png',github: 'https://github.com/CodeNKasch/CodeNKasch.github.io', description: 'Github landing page.'},
      {name:'Stravistix for strava',date:'01.01.1970',status:'WIP',img:'stravisitx.PNG', github: 'https://github.com/CodeNKasch/stravistix', description: 'Only a adaption of chrome-webext code to firefox'}
    ]
  },
  computed:{
    projectnames(){
      return `Projects: ${this.projects.map(p=>p.name).join(", ")}`
    }
  },
  template: `
    <div>
      <i>{{message}}</i>
      <header><h1><i style="font-weight: 900"> Projects and Stuff </i></h1></header>
      <div class="projectcontainer">
          <project-component v-for="item in projects" v-bind:project="item" :key="item.name" ></project-component>
      </div>
    </div>
  `
});

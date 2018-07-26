Vue.component('project-component',{
  props:['project'],
  filters:{},
  methods:{},
  template:`
    <div class="card" >
      <img :src="project.img">
      <i>{{project.name}}</i> -
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
      {name:'Project 1',date:'22.12.2018',status:'PLANNING',img:'rock600x400.jpg'},
      {name:'Project 2',date:'22.12.2018',status:'PLANNING',img:'vue.png'},
      {name:'Project 3',date:'01.01.1970',status:'WIP',img:'stravisitx.PNG'}
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
      <div class="cardcontainer">
          <project-component v-for="item in projects" v-bind:project="item" :key="item.name" ></project-component>
      </div>
    </div>
  `
});

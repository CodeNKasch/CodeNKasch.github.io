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
  filters:{
    //reusable computed values here then us it as {{ value | filter}}
  },
  template: `
    <div>
      <i>{{message}}</i>
      <header><h1> Projects and Stuff </h1></header>
      <div class="cardcontainer">
        <div class="card" v-for="project in projects">
          <img :src="project.img">
          <label>{{project.name}}</label>
      </div>
      </div>
    </div>
  `
});

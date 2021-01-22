<template>
  <div>
      <vs-navbar
        :type="type"
        v-model="activeItem"
        class="nabarx spacing-added-to-nav">
        <div slot="title">
          <vs-navbar-title>
            Logo under construction
          </vs-navbar-title>
        </div>

        <vs-navbar-item class="spacing-navbar-element">
          <span @click="myprofil">{{ name }}</span>
        </vs-navbar-item>
        <vs-navbar-item class="spacing-navbar-element">
          {{ userStatus }}
        </vs-navbar-item>
          <vs-navbar-item class="spacing-navbar-element">
          <span  @click="goMAinFeed">Main Fedd</span>
         </vs-navbar-item>
        <vs-navbar-item v-if="userStatus ==='admin'"  class="spacing-navbar-element">
          <span @click="adminDashboard">Admin dashboard</span>
        </vs-navbar-item>
        <vs-navbar-item class="spacing-navbar-element">
          <span @click="logout">Logout</span>
        </vs-navbar-item>
      </vs-navbar>
      <div class="profil-main-info">
      <vs-avatar class="avaatar" size="150px" src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
       <h2 class="profil-username"> Welcome {{ name }} </h2>
       <div class="profil-interact-info">
         <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-sm="12">
          <vs-card>
          <div slot="header">
          <h4>
        Followers under-constraction
          </h4>
          </div>
          </vs-card>
          </vs-col>
          </vs-row>
           <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-sm="12">
          <vs-card>
          <div slot="header">
          <h4>
         Followed-under constraction
          </h4>
          </div>
          </vs-card>
          </vs-col>
          </vs-row>
           <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-sm="12">
          <vs-card>
          <div slot="header">
          <h4>
         Likes : {{mylikes}}
          </h4>
          </div>
          </vs-card>
          </vs-col>
          </vs-row>
       </div>
         <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="5" vs-sm="12">
          <vs-card>
          <div slot="header">
          <h4>
         My posts
          </h4>
          </div>
          </vs-card>
          </vs-col>
          </vs-row>
          <Profilfeed />
     </div>
   </div>   
</template>
<script>
import axios from 'axios';
import Profilfeed from './Profilfeed.vue';
const Cookies = require("js-cookie");
export default {
   name:'Myprofil',
   components:{
       Profilfeed
   },
     data: () => ({
    name: Cookies.get("name"),
     userId: Cookies.get("_id"),
    userStatus: Cookies.get("status"),
    popupActivo: false,
    type: "type",
    activeItem: "activeItem",
    mylikes:null,
  }),
async mounted(){
    const mylikes= await axios.get(`/api/likes/mylike/${this.userId}`)
    if(mylikes){
        this.mylikes=mylikes.data.length
    }
},

  methods: {
    logout() {
      Cookies.remove("name");
      Cookies.remove("_id");
      Cookies.remove("status");
      document.location.replace('/');
    },
    adminDashboard(){
      this.$router.push("/admindashboard");
    },
    goToPost(id){
      this.$router.push(`/post/${id}`)
    },
     goMAinFeed(){
      window.location.replace('/mainfeed');
    },
    myprofil(){
    this.$router.push('/myprofil')
    }
  },
}

</script>
<style scoped>
.spacing-added-to-nav {
  padding: 1rem 2.4rem;
  background: #fff;
}
.spacing-navbar-element {
  margin: 0 0.6rem;
}
.button-nav-spacing {
  width: 7.6rem;
  border-radius: 25px;
}
span {
  cursor: pointer;
}
.avaatar {
 margin: 4rem auto;

}
.profil-interact-info{
    width: 58rem;
    margin: 4rem auto;
    display: flex;

}
.profil-main-info{
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;   
}
.profil-username{
    text-align: center;
}

</style>
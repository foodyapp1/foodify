<template>
  <div>
      <vs-navbar
        :type="type"
        :color="colorx"
        v-model="activeItem"
        class="nabarx spacing-added-to-nav">
        <div slot="title">
         <vs-navbar-title class="logo-and-brand">
              <img class="logo-all-places" src="https://res.cloudinary.com/datafeelya69/image/upload/v1611938624/logoFoodify_ywgtic.png" alt="test">
              <h2 class="title-big-landing">FOODIFY</h2>
          </vs-navbar-title>
        </div>

        <vs-navbar-item class="spacing-navbar-element">
          <span @click="myprofil">{{ name }}</span>
        </vs-navbar-item>
          <vs-navbar-item class="spacing-navbar-element">
          <span  @click="goMAinFeed">Main Feed</span>
         </vs-navbar-item>
        <vs-navbar-item v-if="userStatus ==='admin'"  class="spacing-navbar-element">
          <span @click="adminDashboard">Admin dashboard</span>
        </vs-navbar-item>
        <vs-navbar-item class="spacing-navbar-element">
          <span @click="logout">Logout</span>
        </vs-navbar-item>
      </vs-navbar>
      <div class="profil-main-info">
      <vs-avatar class="avaatar" size="150px" :src= profileimage />
       <h2 class="profil-username"> Welcome {{ name }} </h2>
        <div class="profil-interact-info">
          <vs-row vs-justify="center">
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-sm="12">
            <vs-card>
            <div slot="header">
            <h4>
              Followers {{myfollowers}}
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
              Likes {{mylikes}}
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
          <Profilfeed :userId="userId"/>
     </div>
     <Chatting />
     <Clicktopost />
   </div>   
</template>
<script>
import axios from 'axios';
import Profilfeed from './Profilfeed.vue';
import Clicktopost from '../posts/Clicktopost'
import Chatting from '../posts/Chatting'
const Cookies = require("js-cookie");
export default {
   name:'Myprofil',
   components:{
       Profilfeed,
       Clicktopost,
       Chatting
    },
    data: () => ({
      profileimage: "",
      name: Cookies.get("name"),
      userId: Cookies.get("_id"),
      userStatus: Cookies.get("status"),
      myfollowers: 0,
      popupActivo: false,
      type: "type",
      activeItem: "activeItem",
      mylikes:null,
      colorx: "#262523"
    }),
    async mounted(){
      const mylikes= await axios.get(`/api/likes/mylike/${this.userId}`)
      const followers= await axios.get(`/api/loginsignup/${this.userId}`);
      if(mylikes && followers){
        // console.log(followers.data)
          this.mylikes= mylikes.data.length;
          this.myfollowers= followers.data.followingYou
      }
      let string = Cookies.get('img');
      let target = string.search('upload/');
      this.profileimage = string.slice(0,target+7) + 'w_1000,c_fill,ar_1:1,g_auto,r_max/' + string.slice(target+7);
},

  methods: {
    logout() {
      Cookies.remove("name");
      Cookies.remove("_id");
      Cookies.remove("status");
      Cookies.remove("img");
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,300&display=swap');
.nabarx{
  background-color: rgba(38,35,37,0.6) ;
}
.spacing-added-to-nav {
  padding: 0.4rem 2.4rem;
}
.spacing-navbar-element {
  margin: 0 0.6rem;
}
.spacing-navbar-element span {
  font-size: 1.02rem;
  color: #fff;
}
.spacing-navbar-element span:hover{
  color:#F27405;
}
.button-nav-spacing {
  width: 7.6rem;
}
.logo-all-places{
  width: 5rem;
  border-radius: 100px
}
/* .landingpage-back-g{
} */
span {
  cursor: pointer;
}
.main {
  height: 90.6vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://res.cloudinary.com/datafeelya69/image/upload/v1611867542/lily-banse--YHSwy6uqvk-unsplash_fkql1x.jpg');
}
.main h1 {
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 4rem;
  font-weight: 400;
  text-shadow: 3px 6px 6px #262523;
}
.logo-and-brand {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title-big-landing{
  font-family: 'Roboto', sans-serif;
  color: #fff;
  margin-left: 1.2rem;
  font-size: 2rem;
  font-weight: 900;
  font-style: italic;
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
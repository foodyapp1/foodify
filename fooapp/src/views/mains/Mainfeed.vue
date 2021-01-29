<template>
  <div>
    <div class="con-type-example">
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

        <vs-navbar-item class="spacing-navbar-element" >
          <span @click="myprofil">{{ name }}</span>
        </vs-navbar-item>
        <vs-navbar-item class="spacing-navbar-element">
          <span @click="gotoFollowerfeed">Followed Feed</span>
        </vs-navbar-item>
        <vs-navbar-item v-if="userStatus ==='admin'"  class="spacing-navbar-element">
          <span @click="adminDashboard">Admin dashboard</span>
        </vs-navbar-item>
        <vs-navbar-item class="spacing-navbar-element">
          <span @click="logout">Logout</span>
        </vs-navbar-item>
      </vs-navbar>
    </div>


    <div v-if="allposts" id="columns">
      <div class="under-columns" v-for="post in allposts" :key="post._id">
        <figure @click="goToPost(post._id)">
            <img :src= post.image />
            <figcaption> {{post.title}} </figcaption>
        </figure>
      </div>
    </div>
    <Chatting />
    <Clicktopost />
  </div>
</template>

<script>

import axios from 'axios';
import Clicktopost from '../posts/Clicktopost'
import Chatting from '../posts/Chatting'
const Cookies = require("js-cookie");
export default {
  name: "Mainfeed",
  components: {
    Clicktopost,
    Chatting
  },
  data: () => ({
    name: Cookies.get("name"),
    userId: Cookies.get("_id"),
    userStatus: Cookies.get("status"),
    popupActivo: false,
    colorx: "#262523",
    type: "type",
    activeItem: "activeItem",
    allposts: null
  }),
  async mounted(){
    const allpostsDum = await axios.get("/api/dummieposts");
    this.allposts = allpostsDum.data;
  },
  methods: {
    logout() {
      Cookies.remove("name");
      Cookies.remove("_id");
      Cookies.remove("status");
      Cookies.remove("img");
      window.location.replace('/');
    },
    adminDashboard(){
      this.$router.push("/admindashboard");
    },
    goToPost(id){
        this.$router.push(`/post/${id}`)
    },
    myprofil(){
    this.$router.push('/myprofil')
    },
    gotoFollowerfeed(){
      this.$router.push('/followers')
    }
  },
};
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

body {
  font-family: Calluna, Arial, sans-serif;
  min-height: 1000px;
}
#columns {
  column-width: 320px;
  column-gap: 15px;
  width: 90%;
  max-width: 85%;
  margin: 3% auto;
}

div#columns figure {
  border-radius: 10px;
  background: #fefefe;
  border: 2px solid #fcfcfc;
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  margin: 0 2px 15px;
  padding: 15px;
  padding-bottom: 10px;
  transition: opacity 0.4s ease-in-out;
  display: inline-block;
  column-break-inside: avoid;
}

div#columns figure img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin-bottom: 5px;
}

div#columns figure figcaption {
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;
}

div#columns small {
  font-size: 1rem;
  float: right;
  text-transform: uppercase;
  color: #aaa;
}

div#columns small a {
  color: #666;
  text-decoration: none;
  transition: 0.4s color;
}

figure:hover {
  cursor: pointer;
  transform: scale(1.04);
}

@media screen and (max-width: 750px) {
  #columns {
    column-gap: 0px;
  }
  #columns figure {
    width: 100%;
  }
}
</style>

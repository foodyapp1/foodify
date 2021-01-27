<template>
  <div>
    <div class="con-type-example">
      <vs-navbar
        :type="type"
        v-model="activeItem"
        class="nabarx spacing-added-to-nav">
        <div slot="title">
          <vs-navbar-title>
            Logo under construction
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
    <Clicktopost />
  </div>
</template>

<script>

import axios from 'axios';
import Clicktopost from '../posts/Clicktopost'
const Cookies = require("js-cookie");
export default {
  name: "Mainfeed",
  components: {
    Clicktopost
  },
  data: () => ({
    name: Cookies.get("name"),
    userStatus: Cookies.get("status"),
    popupActivo: false,
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

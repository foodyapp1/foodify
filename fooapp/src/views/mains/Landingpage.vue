<template>
  <div>
    <div v-if="!this.loggedin" class="landingpage-back-g" >
      <div class="con-type-example">
        <vs-navbar
          :type="type"
          :color="colorx"
          v-model="activeItem"
          class="nabarx spacing-added-to-nav"
        >
          <div slot="title">
            <vs-navbar-title class="logo-and-brand">
              <img class="logo-all-places" src="https://res.cloudinary.com/datafeelya69/image/upload/v1611938624/logoFoodify_ywgtic.png" alt="test">
              <h2 class="title-big-landing">FOODIFY</h2>
            </vs-navbar-title>
          </div>
          <vs-navbar-item class="spacing-navbar-element">
            <Signup />
          </vs-navbar-item>
          <vs-navbar-item class="spacing-navbar-element">
            <Signin :login="this.login" />
          </vs-navbar-item>
          <vs-navbar-item class="spacing-navbar-element">
            <span @click="gotoAbout">About-Us</span>
          </vs-navbar-item>
        </vs-navbar>
      </div>
      <div class="main">
        <h1>Take a Deep Bite</h1>
        <!-- <div class="d1"></div>
        <div class="d2"></div>
        <div class="d3"></div>
        <div class="d4"></div> -->
      </div>
    </div>
    <div v-else>
      <Mainfeed />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Signin from "../sign-in-up/Signin";
import Signup from "../sign-in-up/Signup";
import Mainfeed from "../mains/Mainfeed";
const axios = require("axios");
const Cookies = require("js-cookie");
export default {
  components: {
    Signin,
    Signup,
    Mainfeed,
  },
  data: () => ({
    loggedin: false,
    colorx: "#262523",
    activeItem: 0,
    type: "Default",
    types: [
      {
        value: null,
        text: "Default",
      },
    ],
  }),
  mounted: function() {
    Cookies.get("name") ? (this.loggedin = true) : (this.loggedin = false);
  },

  methods: {
    ////////////////////////////////////////////////////
    async login(useremail, password) {
      try {
        const resp = await axios.post(
          "/api/loginsignup/login",
          { useremail, password }
        );
        if (resp.data === "user_not_found") {
          console.log("moush mawjoud");
          alert("wrong credentials");
        } else {
          Cookies.set("name", resp.data.username);
          Cookies.set("_id", resp.data._id);
          Cookies.set("status", resp.data.status);
          // console.log(resp.data.status);
          Cookies.set("img",resp.data.image)

          document.location.reload(false);
        }
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    },
    ///////////////////////////////////////////////////////
    gotoAbout() {
      this.$router.push("/");
      
    },
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
.spacing-navbar-element span{
  margin-left: 1rem;
  color: #fff;
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
  height: 91.1vh;
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
.d1 {
  position: absolute;
  background-image: url(https://i.imgur.com/mEuvnp0.jpg);
  background-size: 2700px 1500px;
  height: 22vh;
  width: 12vw;
  background-position: 0 50%;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.8);
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  animation: dd1 10s 1, dd12 10s 1;
  animation-delay: 4s, 14s;
  border-radius: 2.6rem;
}
.d2 {
  position: absolute;
  background-image: url(https://i.imgur.com/mEuvnp0.jpg);
  background-size: 2700px 1500px;
  height: 40vh;
  width: 20vw;
  background-position: -10vw 50%;
  left: 10vw;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  animation: dd2 10s 2;
  animation-delay: 4s;
  border-radius: 2.6rem;
}
.d3 {
  position: absolute;
  background-image: url(https://i.imgur.com/mEuvnp0.jpg);
  background-size: 2700px 1500px;
  overflow: hidden;
  height: 86vh;
  width: 40vw;
  left: 25vw;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.8);
  background-position: -35vw 50%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  animation: dd3 10s 2;
  animation-delay: 4s;
  border-radius: 2.6rem;
}
.d4 {
  position: absolute;
  overflow: hidden;
  background-image: url(https://i.imgur.com/mEuvnp0.jpg);
  background-size: 2700px 1500px;
  height: 60vh;
  width: 20vw;
  left: 60vw;
  background-position: -70vw 50%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  animation: dd4 10s 2;
  animation-delay: 4s;
  border-radius: 2.6rem;
}
@keyframes dd1 {
  50% {
    width: 90vw;
  }
}
@keyframes dd12 {
  50% {
    background-position: Calc(-40vw) 50%;
  }
}
@keyframes dd2 {
  50% {
    background-position: Calc(-50vw) 50%;
  }
}
@keyframes dd3 {
  50% {
    background-position: Calc(-75vw) 50%;
  }
}
@keyframes dd4 {
  50% {
    background-position: Calc(-110vw) 50%;
  }
}
</style>

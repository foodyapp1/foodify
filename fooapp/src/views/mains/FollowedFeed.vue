<template>
    <div>
        <!-- nav bar area start -->
        <div class="con-type-example">
            <vs-navbar
                :type="type"
                :color="colorx"
                v-model="activeItem"
                class="nabarx spacing-added-to-nav">
                <div slot="title">
                <vs-navbar-title>
                    <vs-navbar-title class="logo-and-brand">
                        <img class="logo-all-places" src="https://res.cloudinary.com/datafeelya69/image/upload/v1611938624/logoFoodify_ywgtic.png" alt="test">
                        <h2 class="title-big-landing">FOODIFY</h2>
                    </vs-navbar-title>
                </vs-navbar-title>
                </div>

                <vs-navbar-item class="spacing-navbar-element" >
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
        </div>
        <!-- nav bar area end -->
        <!-- if no followers -->
        <vs-row v-if="!allfollowedPost" vs-justify="center" class="card-position-no-follow">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="4" vs-sm="12">
          <vs-card>
          <div slot="header">
          <h4 class="center-text-in">
          You are not following other Foodies
          </h4>
          </div>
          </vs-card>
          </vs-col>
          </vs-row>
        <!-- end no folloers -->
        <!-- start feed of posts -->
        <div v-if="allfollowedPost" class="separator-followerfeed">
        <vs-row class="posts-followers-roll" v-if="allfollowedPost" vs-justify="center">
            <vs-col v-for="post in allfollowedPost" :key="post._id" type="flex" vs-justify="center" vs-align="center" vs-w="5" vs-sm="12" >
                <vs-card class="cardx">
                <div slot="header" class="header-follow-stylus">
                <h4>
                {{post.title}}
                </h4>
                <h4>
                {{post.username}}
                </h4>
                </div>
                <div slot="media">
                <img :src= post.image @click="goToPost(post._id)">
                </div>
                <div>
                <span>{{post.text}}</span>
                </div>
                </vs-card>
            </vs-col>
        </vs-row>
        </div>
          <!-- end feed of posts -->
        <Chatting />
        <Clicktopost />
    </div>
</template>

<script>
import axios from "axios"
import Cookies from 'js-cookie'
import Clicktopost from '../posts/Clicktopost'
import Chatting from '../posts/Chatting'
    export default {
        name: "FollowerFeed",
        components: {
            Clicktopost,
            Chatting
        },
        data: () => ({
            name: Cookies.get("name"),
            userStatus: Cookies.get("status"),
            userId: Cookies.get("_id"),
            popupActivo: false,
            type: "type",
            colorx: "#262523",
            activeItem: "activeItem",
            allfollowedPost: null
        }),
        async mounted(){
            const userData = await axios.get(`/api/loginsignup/${this.userId}`);
            if(userData){
                // eslint-disable-next-line
                console.log(userData.data.followers)
                let arrayfollow = userData.data.followers
                let filtered = [];
                const allpostsnonfilter = await axios.get('/api/dummieposts/');
                arrayfollow.forEach(cond =>{
                    allpostsnonfilter.data.forEach(element =>{
                        if(cond === element.user_id){
                            filtered.push(element)
                        }
                    })
                })
                // eslint-disable-next-line
                console.log(filtered);
                if(filtered.length){
                    this.allfollowedPost = filtered;
                }
                
            //end
            }
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
            goMAinFeed(){
                window.location.replace('/mainfeed');
            }
        }
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
span, img {
  cursor: pointer;
}
.center-text-in{
    text-align: center;
}
.separator-followerfeed{
    margin-top: 6.8rem;
}
.posts-followers-roll{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.card-position-no-follow{
    margin-top: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header-follow-stylus{
    display: flex;
    justify-content: space-between;
}
</style>
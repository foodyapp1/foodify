<template>
    <div>
        <div class="con-type-example">
            <vs-navbar
                :type="type"
                :color="colorx"
                v-model="activeItem"
                class="nabarx spacing-added-to-nav"
            >
                <div slot="title">
                <vs-navbar-title>
                    <vs-navbar-title class="logo-and-brand">
                        <img class="logo-all-places" src="https://res.cloudinary.com/datafeelya69/image/upload/v1611938624/logoFoodify_ywgtic.png" alt="test">
                        <h2 class="title-big-landing">FOODIFY</h2>
                    </vs-navbar-title>
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
        </div>


        <vs-row v-if="thePost" vs-justify="center" class="main-shower-post">

          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="5" vs-sm="12">
            <vs-card class="cardx" fixedHeight>
            <div slot="header" class="header-post-unique">
            <h4>
            {{thePost.title}}
            </h4>
            <h4>By : <span @click="goTouserProfile(thePost.user_id)" >{{ thePost.username }}</span> </h4>
            </div>
            <div slot="media">
            <img :src= thePost.image class="img-resise">
            </div>
            <div>
            <span>{{thePost.text}}</span>
            </div>
            <div>
            <vs-row vs-justify="flex-end">
            <Likes :postId="this.postId" :postUserId="this.postUserId" />
            <Report :postId="this.postId" :posttitle="thePost.title" :postUserName="thePost.username"/>
            <vs-button v-if="userStatus === 'admin'" color="danger" type="line" class="showpost-dell-bttn" @click="deletePost">Delete post</vs-button>
            </vs-row>
            </div>
            


            <div class="commentary-main-field" >
   
             <Commentary :postId="this.postId"  />
             </div>
            </vs-card>
          </vs-col>
        </vs-row> 
           {{/*just footer*/}}
          <vs-breadcrumb align="center">
          <h6> copyRight by DataDriven 2020/2021</h6>
          </vs-breadcrumb>
         <Chatting />
        <Clicktopost /> 
    </div>
</template>

<script>
import axios from "axios"
import Commentary from "../interactions/commentary"
import Likes from '../interactions/Likes'
import Report from "../interactions/Report"
import Clicktopost from '../posts/Clicktopost'
import Chatting from '../posts/Chatting'
 
const Cookies = require("js-cookie");
    export default {
        name : "Showpost",
        components:{
         Commentary,
         Likes,
         Report,
        Clicktopost,
        Chatting
        },
        data: () => ({
            name: Cookies.get("name"),
            userStatus: Cookies.get("status"),
            userId: Cookies.get("_id"),
            popupActivo: false,
            type: "type",
            activeItem: "activeItem",
            thePost : null,
            postId : null,
            postUserId: null,
            colorx: "#262523",
        }),
        async mounted(){
            const id = this.$route.params.idpost;
            this.postId=id;
            // console.log(id)
            const onepost = await axios.get(`/api/dummieposts/${id}`);
            this.thePost = onepost.data;
            // eslint-disable-next-line
            console.log(this.thePost);
            this.postUserId = onepost.data.user_id
            // console.log(this.postUserId);
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
            goMAinFeed(){
                window.location.replace('/mainfeed');
            },
            async deletePost(){
                const id = this.$route.params.idpost;
                const deleted = await axios.delete(`/api/dummieposts/${id}`);
                    if(deleted.data){
                        alert(`post ${id} has been deleted !`)
                        window.location.replace('/mainfeed');
                    } else {
                        alert('post deletion undonne server problem ! pease try again')
                    }
            },
            myprofil(){
                this.$router.push('/myprofil')
            },
            goTouserProfile(id){
              if(id !== this.userId){
                this.$router.push(`/yourprofile/${id}`);
              }
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
.main-shower-post{
    margin: 2.6rem auto;
}
.img-resise{
    height: 75vh;
}
.commentary-under-me{
margin-bottom: 1.6rem;
}
.commentary-main-field{
    margin-top: 1.6rem;
}
.header-post-unique{
    display: flex;
    justify-content: space-between;
}
.showpost-dell-bttn{
    margin-left: 1.4rem;
}
</style>
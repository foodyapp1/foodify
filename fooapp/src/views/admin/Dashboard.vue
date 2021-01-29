<template>
    <div>
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
                <vs-navbar-item class="spacing-navbar-element">
                    <span  @click="myprofil">{{ name }}</span>
                </vs-navbar-item>
                <vs-navbar-item class="spacing-navbar-element">
                   <span  @click="goMAinFeed">Main Feed</span>
                </vs-navbar-item>
                <vs-navbar-item class="spacing-navbar-element">
                    <span @click="logout">Logout</span>
                </vs-navbar-item>
            </vs-navbar>
        </div>

        <div class="main-data-feed-admin">
            <!-- set 01 -->
            <vs-row vs-justify="center">
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-sm="12">
                <vs-card>
                <div slot="header">
                <h4>
                    Users
                </h4>
                </div>
                <div>
                    <span>All users: {{allusers}} </span>
                </div>
                </vs-card>
                </vs-col>
            </vs-row>
            <!-- set 02 -->
            <vs-row vs-justify="center">
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-sm="12" >
                <vs-card>
                <div slot="header">
                <h4>
                    Posts
                </h4>
                </div>
                <div >
                    <span>All Posts count: {{allposts}} </span>
                </div>
                </vs-card>
                </vs-col>
            </vs-row>
            <!-- set 03 -->
            <vs-row vs-justify="center">
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-sm="12">
                <vs-card>
                <div slot="header">
                <h4>
                    Likes
                </h4>
                </div>
                <div>
                    <span> all likes count: {{alllikes}} </span>
                </div>
                </vs-card>
                </vs-col>
            </vs-row>
            <!-- set 04 -->
            <vs-row vs-justify="center">
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-sm="12">
                <vs-card>
                <div slot="header">
                <h4>
                    Reports
                </h4>
                </div>
                <div>
                    <span> all reports count: {{allreports}} </span>
                </div>
                </vs-card>
                </vs-col>
            </vs-row>
            <!-- set 05 -->
            <vs-row vs-justify="center">
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-sm="12">
                <vs-card>
                <div slot="header">
                <h4>
                    Comments
                </h4>
                </div>
                <div>
                    <span>all comments count: {{allcoommentaries}} </span>
                </div>
                </vs-card>
                </vs-col>
                </vs-row>
            
        </div>
            <vs-row vs-justify="center">
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10" vs-sm="12">
                <vs-card>
                <div slot="header">
                    <h4>
                        display data
                    </h4>
                </div>
                <div>
                    <!-- strat -->
                        <div class="">
                            <vs-tabs>
                            <vs-tab label="users">
                            <div>
                                <Usersstats />
                            </div>
                            </vs-tab>
                            <vs-tab label="reported posts">
                            <div>
                                <Reportedp />
                            </div>
                            </vs-tab>
                            </vs-tabs>
                        </div>
                    <!-- end -->
                </div>
                </vs-card>
                </vs-col>
            </vs-row>
    </div>
</template>

<script>
import axios from "axios"
import Usersstats from "./Userstats"
import Reportedp from "./Reportedp"
const Cookies = require("js-cookie");
    export default {
        name: "Dashboard",
        components: {
            Usersstats,
            Reportedp
        },
        data: () => ({
            name: Cookies.get("name"),
            userStatus: Cookies.get("status"),
            colorx: "#262523",
            type: "type",
            activeItem: "activeItem",
            allusers:0,
            alllikes: 0,
            allreports: 0,
            allcoommentaries: 0,
            allposts: null,
            reportedPosts: [],
            usersstats: true,
            reportedPostsStats: false
        }),
        async mounted(){
            //all axis call for data
            const alluser = await axios.get('/api/loginsignup/');          
            const allpostsDum = await axios.get("/api/dummieposts");
            const allcomms = await axios.get("/api/comments/");
            const alllikes = await axios.get("/api/likes/")
            const allreports = await axios.get("/api/report/")
            //assigniong values for stats
            this.allposts = allpostsDum.data.length;
            this.allusers = alluser.data.length;
            this.allcoommentaries = allcomms.data.length;
            this.alllikes = alllikes.data.length;
            this.allreports = allreports.data.length;
        },
        methods: {
            logout() {
                Cookies.remove("name");
                Cookies.remove("_id");
                Cookies.remove("status");
                Cookies.remove("img");
                document.location.replace('/');
            },
            goMAinFeed(){
                window.location.replace('/mainfeed');
            },
            myprofil(){
                this.$router.push('/myprofil')
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
.main-data-feed-admin{
    width: 90%;
    margin: 8rem auto;
    display: flex;
}
.likes-color{
    background-color: #D95284;
}
.reports-color{
    background-color: #F27E63;
}
.comms-color{
    background-color: #0476D9;
}
</style>
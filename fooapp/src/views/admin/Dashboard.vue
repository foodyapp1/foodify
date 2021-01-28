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
                <vs-navbar-item class="spacing-navbar-element">
                    admin panel
                </vs-navbar-item>
                <vs-navbar-item class="spacing-navbar-element">
                    <span  @click="myprofil">{{ name }}</span>
                </vs-navbar-item>
                <vs-navbar-item class="spacing-navbar-element">
                   <span  @click="goMAinFeed">Main Fedd</span>
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
                    <span>All users : {{allusers}} </span>
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
                    <span> all likes count : {{alllikes}} </span>
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
                    <span> all reports count : {{allreports}} </span>
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
                    Commentaries
                </h4>
                </div>
                <div>
                    <span>all comments count : {{allcoommentaries}} </span>
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
.spacing-added-to-nav {
  padding: 1rem 2.4rem;
  background: #fff;
}
.spacing-navbar-element {
  margin: 0 0.6rem;
  color: #000;
}
.button-nav-spacing {
  width: 7.6rem;
  border-radius: 25px;
}
span {
  cursor: pointer;
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
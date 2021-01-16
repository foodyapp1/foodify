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
                    <span>{{ name }}</span>
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
            <vs-row vs-justify="center">
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10" vs-sm="12">
                <vs-card>
                <div slot="header">
                <h4>
                    Main statistics
                </h4>
                </div>
                <div class="main-data-feed-admin-inside">
                
            <vs-row vs-justify="center">
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-sm="12">
                <vs-card>
                <div slot="header">
                <h4>
                    Users counter
                </h4>
                </div>
                <div>
                    <span>All users : {{allusers}} </span>
                </div>
                </vs-card>
                </vs-col>
            </vs-row>
            <vs-row vs-justify="center">
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-sm="12" >
                <vs-card>
                <div slot="header">
                <h4>
                    Posts counter
                </h4>
                </div>
                <div >
                    <span>All Posts : {{allposts}} </span>
                </div>
                </vs-card>
                </vs-col>
            </vs-row>
            <vs-row vs-justify="center">
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-sm="12">
                <vs-card>
                <div slot="header">
                <h4>
                    interactions
                </h4>
                </div>
                <div>
                    <span> Under construction</span>
                </div>
                </vs-card>
                </vs-col>
            </vs-row>
            <vs-row vs-justify="center">
                <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-sm="12">
                <vs-card>
                <div slot="header">
                <h4>
                    Commentaries counter
                </h4>
                </div>
                <div>
                    <span>all commentarys : {{allcoommentaries}} </span>
                </div>
                </vs-card>
                </vs-col>
                </vs-row>
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
                    Reported posts feed
                </h4>
                </div>
                <div>
                    
                </div>
                </vs-card>
                </vs-col>
            </vs-row>
    </div>
</template>

<script>
import axios from "axios"
const Cookies = require("js-cookie");
    export default {
        name: "Dashboard",
        data: () => ({
            name: Cookies.get("name"),
            userStatus: Cookies.get("status"),
            type: "type",
            activeItem: "activeItem",
            allusers: null,
            alllikes: 0,
            allreports: 0,
            allcoommentaries: 0,
            allposts: null,
            reportedPosts: []
        }),
        async mounted(){
            const alluser = await axios.get('/api/loginsignup/');
            this.allusers = alluser.data.length;
            const allpostsDum = await axios.get("/api/dummieposts");
            this.allposts = allpostsDum.data.length;
            const allcomms = await axios.get("/api/comments/");
            this.allcoommentaries = allcomms.data.length;
        },
        methods: {
            logout() {
                Cookies.remove("name");
                Cookies.remove("_id");
                Cookies.remove("status");
                document.location.replace('/');
            },
            goMAinFeed(){
                window.location.replace('/mainfeed');
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
    width: 100%;
    margin: 4rem auto;
    display: flex; 
}
.main-data-feed-admin-inside{
    width: 95%;
    margin: 1rem auto;
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
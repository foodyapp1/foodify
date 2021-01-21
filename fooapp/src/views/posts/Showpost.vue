<template>
    <div>
        <div class="con-type-example">
            <vs-navbar
                :type="type"
                v-model="activeItem"
                class="nabarx spacing-added-to-nav"
            >
                <div slot="title">
                <vs-navbar-title>
                    Logo under construction
                </vs-navbar-title>
                </div>

                <vs-navbar-item class="spacing-navbar-element">
                {{ name }}
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
        </div>


        <vs-row v-if="thePost" vs-justify="center" class="main-shower-post">

          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="5" vs-sm="12">
            <vs-card class="cardx" fixedHeight>
            <div slot="header" class="header-post-unique">
            <h4>
            {{thePost.title}}
            </h4>
            <h4> {{username}} </h4>
            </div>
            <div slot="media">
            <img :src= thePost.image class="img-resise">
            </div>
            <div>
            <span>{{thePost.text}}</span>
            </div>
            <div>
            <vs-row vs-justify="flex-end">
            <Likes :postId="this.postId" :postUserId="this.postUserId"/>
            <Report :postId="this.postId"/>
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
          <li><a href="#" title="Home">Home</a><span class="vs-breadcrum--separator">/</span></li>
          <li><a href="#" title="Profil">Profil</a><span class="vs-breadcrum--separator">/</span></li>
          <li aria-current="page" class="active">Infos</li>
          </vs-breadcrumb>
          <vs-breadcrumb align="center">
          <h6> copyRight by DataDriven 2020/2021</h6>
          </vs-breadcrumb>
          
    </div>
</template>

<script>
import axios from "axios"
import Commentary from "../interactions/commentary"
import Likes from '../interactions/Likes'
import Report from "../interactions/Report"
 
const Cookies = require("js-cookie");
    export default {
        name : "Showpost",
        components:{
         Commentary,
         Likes,
         Report
        },
      data: () => ({
            name: Cookies.get("name"),
            userStatus: Cookies.get("status"),
            username: Cookies.get("name"),
            popupActivo: false,
            type: "type",
            activeItem: "activeItem",
            thePost : null,
            postId : null,
            postUserId: null,
        }),
        async mounted(){
            const id = this.$route.params.idpost;
            this.postId=id;
            // console.log(id)
            const onepost = await axios.get(`/api/dummieposts/${id}`);
            this.thePost = onepost.data;
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
</style>
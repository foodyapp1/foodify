<template>
    <div>
        <!-- nav bar area start -->
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
        <!-- nav bar area end -->
        <!-- start feed of posts -->
        <div class="separator-followerfeed">
        <vs-row class="posts-followers-roll" v-if="allfollowedPost" vs-justify="center">
            <vs-col v-for="post in allfollowedPost" :key="post._id" type="flex" vs-justify="center" vs-align="center" vs-w="5" vs-sm="12" >
                <vs-card class="cardx">
                <div slot="header">
                <h4>
                {{post.title}}
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
    </div>
</template>

<script>
import axios from "axios"
import Cookies from 'js-cookie'
    export default {
        name: "FollowerFeed",
        data: () => ({
            name: Cookies.get("name"),
            userStatus: Cookies.get("status"),
            userId: Cookies.get("_id"),
            popupActivo: false,
            type: "type",
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
                this.allfollowedPost = filtered;
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
span, img {
  cursor: pointer;
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
</style>
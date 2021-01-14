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
        <vs-navbar-item v-if="userStatus ==='admin'"  class="spacing-navbar-element">
          <span @click="adminDashboard">Admin dashboard</span>
        </vs-navbar-item>
        <vs-navbar-item class="spacing-navbar-element">
          <span @click="logout">Logout</span>
        </vs-navbar-item>
      </vs-navbar>
    </div>


        <vs-row vs-justify="center" class="main-data-feed-admin">
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="7" vs-sm="12">
            <vs-card>
            <div slot="header">
            <h4>
                Create a DummiePost
            </h4>
            </div>
                <div class="default-input d-flex align-items-center">
                    <vs-input label="Title" class="inputx" placeholder="Title of the post" v-model="postTitle"/>
                    <vs-input label="image URL" class="inputx" placeholder="image URL" v-model="postImge"/>
                    <div class="text-area-inside">
                        <vs-textarea label="Label in Textarea" cols="40" v-model="postText" />
                    </div>
                    <vs-button class="bttn-active-cnt" color="primary" type="gradient" @click="createDpost">Submit</vs-button>
                </div>
            </vs-card>
            </vs-col>
        </vs-row>
        
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
const Cookies = require("js-cookie");
    export default {
        name: "Expcrudpost",
        data: () => ({
            name: Cookies.get("name"),
            userStatus: Cookies.get("status"),
            user_id: Cookies.get("_id"),
            type: "type",
            activeItem: "activeItem",
            postTitle: "",
            postText: "",
            postImge: ""
        }),
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
            async createDpost(){
                console.log(this.user_id)
                //this function call axios to post to the data base the dummie post information
                const dumpost = await axios.post("http://localhost:3000/api/dummieposts", {
                    user_id: this.user_id,
                    title : this.postTitle,
                    image : this.postImge,
                    text : this.postText
                })
                if(dumpost){
                    alert(`thank you for your contribution your post : ${dumpost.data.title} has been saved`);
                    // console.log(dumpost.data);
                } else {
                    alert('axios call not donne');
                }
                this.postTitle = "";
                this.postImge = "";
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
.d-flex{
    flex-direction: column;
}
.main-data-feed-admin{
    width: 100%;
    margin: 4rem auto;
    display: flex; 
}
.bttn-active-cnt{
    width: 6rem;
    margin: 2.4rem auto;
}
.inputx{
    margin-top: 1.2rem;
}
.text-area-inside{
    width: 18rem;
    margin-top : 1.8rem; 
}
</style>
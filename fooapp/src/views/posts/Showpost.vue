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

          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6" vs-sm="12">
            <vs-card class="cardx" fixedHeight>
            <div slot="header">
            <h4>
            {{thePost.title}}
            </h4>
            </div>
            <div slot="media">
            <img :src= thePost.image class="img-resise">
            </div>
            <div>
            <span>{{thePost.text}}</span>
            </div>
            <div>
            <vs-row vs-justify="flex-end">
            <vs-button class="mr-2" color="primary" type="gradient" >View</vs-button>
            <vs-button color="danger" type="gradient">Delete</vs-button>
            </vs-row>
            </div>


            <div class="commentary-main-field">

            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-sm="12">
                <vs-card>
                <div slot="header">
                <h4>
                Commentaries
                </h4>
                </div>
                <div >
                <vs-textarea v-model="textarea" />
                <div slot="footer">
                <vs-row vs-justify="flex-end">
                <vs-button color="success" type="gradient">commnent</vs-button>
                </vs-row>
                </div>
                </div>
                    <div class="commentary-main-field">
                        <vs-row vs-justify="center">
                            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-sm="12"  v-for="(comment, index) in allcomments" :key="index">
                            <vs-card class="commentary-spacing-style">
                            <h5>username {{index}} </h5>
                            <br>
                            <div>
                            <span> {{comment}} </span>
                            </div>
                            </vs-card>
                            </vs-col>
                        </vs-row>
                    </div>
                </vs-card>
                </vs-col>
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
        name : "Showpost",
         data: () => ({
            name: Cookies.get("name"),
            userStatus: Cookies.get("status"),
            popupActivo: false,
            type: "type",
            activeItem: "activeItem",
            thePost : null,
            textarea: '',
            allcomments :[
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eum quaerat. Suscipit.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eum quaerat. Suscipit.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eum quaerat. Suscipit.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eum quaerat. Suscipit.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eum quaerat. Suscipit."]
        }),
        async mounted(){
            const id = this.$route.params.idpost;
            // console.log(id)
            const onepost = await axios.get(`/api/dummieposts/${id}`);
            this.thePost = onepost.data;
            // console.log(onepost.data);
        },
        methods: {
            logout() {
                Cookies.remove("name");
                Cookies.remove("_id");
                Cookies.remove("status");
                document.location.reload(false);
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
.commentary-main-field{
    margin-top: 1.6rem;
}
.commentary-spacing-style{
    margin: 0.2rem auto;
}
</style>
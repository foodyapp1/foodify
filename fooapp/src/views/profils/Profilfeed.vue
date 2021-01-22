<template>
     <vs-row class="mypost-feed-display" vs-justify="center">
          <vs-col vs-justify="center" vs-align="center" vs-w="4" vs-sm="12" v-for="post in myposts" :key="post._id">
          <vs-card class="cardx">
          <div slot="header">
          <h4>
       {{post.title}}
          </h4>
          </div>
          <div slot="media">
          <img :src= post.image >
          </div>
          <div>
          <span>{{post.text}}</span>
          </div>
          <div slot="footer">
          <vs-row vs-justify="flex-end">
          <vs-button class="mr-2" type="gradient" color="danger" icon="favorite"></vs-button>
          <vs-button class="mr-2" color="primary" icon="turned_in_not"></vs-button>
          <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
          </vs-row>
          </div>
          </vs-card>
          </vs-col>
          </vs-row>
</template>
<script>
import axios from 'axios'
const Cookies = require("js-cookie");
export default {
    name:"Profilfeed",
    data: () => ({
     userId: Cookies.get("_id"),
     myposts:null,
    }),
     async mounted(){
    const mypost= await axios.get(`/api/dummieposts/mypost/${this.userId}`)
    if(mypost){
        this.myposts=mypost.data
    }
  },
}
</script>
<style scoped>
.mypost-feed-display{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
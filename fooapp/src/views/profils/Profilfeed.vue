<template>
     <vs-row class="mypost-feed-display" vs-justify="center">
        <vs-col vs-justify="center" vs-align="center" vs-w="4" vs-sm="12" v-for="(post, i) in myposts" :key="post._id">
          <div class="clicable-pointer" @click="goToPost(post._id)">
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
          <vs-button color="danger" type="gradient" class="my-profile-bttn" v-if="curentuserId === userId" @click="deletePost(post._id, i)">Delete</vs-button>
          <vs-button color="warning" type="gradient" class="my-profile-bttn" v-if="curentuserId === userId" @click="goToEdit(post._id)">Edit</vs-button>
          </vs-row>
          </div>
          </vs-card>
          </div>
        </vs-col>
      </vs-row>
</template>
<script>
import axios from 'axios'
const Cookies = require("js-cookie");
export default {
    name:"Profilfeed",
    props:{
      userId: String,
    },
    data: () => ({
      curentuserId: Cookies.get("_id"),
      myposts:null,
    }),
     async mounted(){
        const mypost= await axios.get(`/api/dummieposts/mypost/${this.userId}`)
        if(mypost){
            this.myposts=mypost.data
        }
  },
  methods: {
      //delete a post uses post_ir db and the index:
      // to refreshnthe array without the need to refrech the hole component to make an axios call
      async deletePost(id, index){
        const deleted = await axios.delete(`/api/dummieposts/${id}`);
          if(deleted.data){
            //   console.log(deleted.data)
              this.myposts.splice(index, 1);
              alert(`post ${id} has been deleted !`);
          } else {
              alert('post deletion undonne server problem ! pease try again');
          }
      },
      goToEdit(id){
        this.$router.push(`/editpost/${id}`);
      },
      goToPost(id){
      this.$router.push(`/post/${id}`)
      },
  }
}
</script>
<style scoped>
.mypost-feed-display{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.my-profile-bttn{
    margin-left: 1.4rem;
}
.clicable-pointer{
  cursor: pointer;
}
</style>
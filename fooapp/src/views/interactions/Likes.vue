<template>
    <div>
        <vs-button v-if="liked" color="danger" type="gradient" icon="favorite" class="likes-bttn-stiling-main" @click="likeswitch"> {{counter}} </vs-button>
        <vs-button v-if="!liked" color="danger" type="gradient" icon="favorite_border" class="likes-bttn-stiling-main" @click="likeswitch"> {{counter}} </vs-button>
    </div>
</template>

<script>
import axios from 'axios'
const Cookies = require("js-cookie");
    export default {
        name : "Likes",
        props: {
            postId: String,
            postUserId: String,
        },
        data: ()=> ({
            counter : 0,
            liked : false,
            userId: Cookies.get("_id"),
            likeId: null,
        }),
        async mounted() {
            const countLikes= await axios.get(`/api/likes/${this.postId}`);
            // console.log(findComment.data)
            this.counter=countLikes.data.length;
            countLikes.data.forEach(element => {
                if(element.user_Id === this.userId){
                    this.liked = true;
                    this.likeId = element._id;
                }
            })
        },
        methods: {
            async likeswitch() {
                //if the the user alredy likes the post
                if(this.liked){
                    const unliked = await axios.delete(`/api/likes/${this.likeId}`);
                    if(unliked.data){
                        this.counter--;
                        this.liked = false;
                        this.likeId = null;
                    } else {
                        alert('please retry unliking process server error !');
                    }
                } else {
                    //the post is not marked as liked by user
                    const like = await axios.post('/api/likes', {
                        post_Id: this.postId,
                        user_Id: this.userId,
                        userowner_Id: this.postUserId,
                    });
                    if(like.data){
                        this.counter++;
                        this.liked = true;
                        this.likeId = like.data._id
                    } else {
                        alert('please retry liking process server error !');
                    }
                }
                

            },
        }
    }
</script>

<style scoped>
.likes-bttn-stiling-main{
    margin : 0.5rem 0.6rem;
    width: 3.4rem;
}
</style>
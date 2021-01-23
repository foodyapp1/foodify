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

                <vs-navbar-item class="spacing-navbar-element" >
                    <span @click="myprofil">{{ name }}</span>
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
                    <div class="text-area-inside">
                        <vs-textarea label="Label in Textarea" cols="40" v-model="postText" />
                    </div>
                    <label for="file"> Upload an image</label>
                    <input 
                        type="file"
                        ref="file"
                        @change="selectFile"
                    />
                    <vs-button class="bttn-active-cnt" color="primary" type="gradient" @click="createDpost">Submit</vs-button>
                </div>
            </vs-card>
            </vs-col>
        </vs-row>
        
    </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
    export default {
       name: 'Createpost',
       data: () => ({
            name: Cookies.get("name"),
            userStatus: Cookies.get("status"),
            user_id: Cookies.get("_id"),
            popupActivo: false,
            type: "type",
            activeItem: "activeItem",
            postTitle: "",
            postText: "",
            file: ""
        }),
        methods: {
            logout() {
                Cookies.remove("name");
                Cookies.remove("_id");
                Cookies.remove("status");
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
            selectFile(){
                this.file = this.$refs.file.files[0]; 
            },
            goMAinFeed(){
                window.location.replace('/mainfeed');
            },
            async createDpost(){
                // console.log(this.user_id)
                //this function call axios to post to the data base the post information
                const formData = new FormData();
                formData.append('file', this.file);
                const imgUrl = await axios.post('/api/uploadtest/test', formData)
                // console.log(imgUrl.data);
                const dumpost = await axios.post("/api/dummieposts", {
                    user_id: this.user_id,
                    username: this.name,
                    title : this.postTitle,
                    text : this.postText,
                    image : imgUrl.data
                })
                if(dumpost){
                    alert(`thank you for your contribution your post : ${dumpost.data.title} has been saved`);
                    // console.log(dumpost.data);
                } else {
                    alert('axios call not donne');
                }
                this.postTitle = "";
                this.postText = "";
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
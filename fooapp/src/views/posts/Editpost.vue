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
                post a Post
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
                    <vs-button class="bttn-active-cnt" color="primary" type="gradient" @click="editDpost">Edit</vs-button>
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
       name: 'Editpost',
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
        async mounted(){
            const id = this.$route.params.idedit
            const post = await axios.get(`/api/dummieposts/${id}`);
            if(post){
                this.postTitle = post.data.title;
                this.postText = post.data.text;
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
            selectFile(){
                this.file = this.$refs.file.files[0]; 
            },
            goMAinFeed(){
                window.location.replace('/mainfeed');
            },
            async editDpost(){
                //so this update method will have 2 conditions if the image have been changed
                //or the image haven't been changed :
                //grab the Id from the url params to set the post we need to change
                const id = this.$route.params.idedit;
                //if image change engaged
                if(this.file){
                    const formData = new FormData();
                    formData.append('file', this.file);
                    const imgUrl = await axios.post('/api/uploadtest/test', formData);
                    if(imgUrl){
                        const updatePost = await axios.put(`/api/dummieposts/${id}`, {
                            title : this.postTitle,
                            text : this.postText,
                            image : imgUrl.data
                        });
                        if(updatePost){
                            alert('your post have been updated, have a nice day')
                        }
                    } else{
                        alert('some problem happend plz try again later');
                    }
                } else {
                    //if no image change
                    const updatePost = await axios.put(`/api/dummieposts/${id}`, {
                            title : this.postTitle,
                            text : this.postText,
                        });
                        if(updatePost){
                            alert('your post have been updated, have a nice day')
                        }
                }
                
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
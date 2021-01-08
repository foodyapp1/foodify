<template>
        <div>
            <div class="con-type-example">
                <vs-navbar :type="type" v-model="activeItem" class="nabarx spacing-added-to-nav">
                <div slot="title">
                <vs-navbar-title>
                    Logo under construction
                </vs-navbar-title>
                </div>
                    <vs-navbar-item class="spacing-navbar-element">
                        <Signup />
                    </vs-navbar-item>
                    <vs-navbar-item class="spacing-navbar-element">
                        <Signin />
                    </vs-navbar-item>
                    <vs-navbar-item class="spacing-navbar-element" >
                        <span @click="gotoAbout" >About-Us</span>
                    </vs-navbar-item>
                </vs-navbar>
            </div>
            <div class="main">
                <div class="d1"></div>
                <div class="d2"></div>
                <div class="d3"></div>
                <div class="d4"></div>
            </div>
        </div>
</template>

<script>
import Signin from "../sign-in-up/Signin"
import Signup from "../sign-in-up/Signup"
    export default {
        components: {
            Signin,
            Signup
        },
        data:()=>({
          activeItem: 0,
          type: 'Default',
          types: [
          {
          value: null, text: 'Default'
          }
          ]
          }),
          methods:{
             gotoAbout(){
                 this.$router.push('/about')
             } 
          }
    }
</script>

<style scoped>
    .spacing-added-to-nav{
        padding: 1rem 2.4rem;
        background: #fff;
    }
    .spacing-navbar-element{
        margin: 0 0.6rem;
    }
    .button-nav-spacing{
        width: 7.6rem;
        border-radius: 25px;
    }
    span{
        cursor: pointer;
    }
    .main {
        height: 80vh;
        width: 90%;
        margin-top: 5rem;
        margin-left: 8rem; 
        position: relative;
    }
    .d1 {
        position: absolute;
        background-image: url(https://i.imgur.com/xFEgZ9r.jpg);
        background-size: 2700px 1500px;
        height: 22vh;
        width: 12vw;
        background-position: 0 50%;
        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.8);
        top: 50%;
        transform: translateY(-50%);
        z-index: 5;
        animation: dd1 10s 1, dd12 10s 1;
        animation-delay: 4s, 14s;
        border-radius: 2.6rem;
    }
    .d2 {
        position: absolute;
        background-image: url(https://i.imgur.com/xFEgZ9r.jpg);
        background-size: 2700px 1500px;
        height: 40vh;
        width: 20vw;
        background-position: -10vw 50%;
        left: 10vw;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        animation: dd2 10s 2;
        animation-delay: 4s;
        border-radius: 2.6rem;
    }
    .d3 {
        position: absolute;
        background-image: url(https://i.imgur.com/xFEgZ9r.jpg);
        background-size: 2700px 1500px;
        overflow: hidden;
        height: 86vh;
        width: 40vw;
        left: 25vw;
        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.8);
        background-position: -35vw 50%;
        top: 50%;
        transform: translateY(-50%);
        z-index: 3;
        animation: dd3 10s 2;
        animation-delay: 4s;
        border-radius: 2.6rem;
    }
    .d4 {
        position: absolute;
        overflow: hidden;
        background-image: url(https://i.imgur.com/xFEgZ9r.jpg);
        background-size: 2700px 1500px;
        height: 60vh;
        width: 20vw;
        left: 60vw;
        background-position: -70vw 50%;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        animation: dd4 10s 2;
        animation-delay: 4s;
        border-radius: 2.6rem;
    }
    @keyframes dd1 {
        50% {
            width: 90vw;
        }
    }
    @keyframes dd12 {
        50% {
            background-position: Calc(-40vw) 50%;
        }
    }
    @keyframes dd2 {
        50% {
            background-position: Calc(-50vw) 50%;
        }
    }
    @keyframes dd3 {
        50% {
            background-position: Calc(-75vw) 50%;
        }
    }
    @keyframes dd4 {
        50% {
            background-position: Calc(-110vw) 50%;
        }
    }
    
</style>
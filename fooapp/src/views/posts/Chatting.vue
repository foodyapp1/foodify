<template>
    <div>
        <vs-button color="danger" text-color="rgb(255, 255, 255)" class="click-to-make-posts" @click="goToCreatePost"><span class="material-icons">
textsms</span>
</vs-button>
    </div>
</template>

<script>
    export default {
        name: 'Chatting',
        colorin: "#7D1617",
        methods: {
            goToCreatePost(){
                 window.open('http://localhost:8081')
            }
        }
    }
</script>

<style scoped>
.click-to-make-posts{
    position: fixed;
    bottom: 7rem;
    right: 3rem;
    width : 3.2rem;
    height: 3.2rem;
    border-radius: 25px;
    font-size: 1.6rem;
}
.click-to-make-posts:hover{
    font-weight: 600;
    font-size: 1.8rem;
}
</style>
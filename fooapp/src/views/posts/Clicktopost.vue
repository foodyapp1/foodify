<template>
    <div>
        <vs-button color="success" text-color="rgb(255, 255, 255)" class="click-to-make-posts" @click="goToCreatePost">+</vs-button>
    </div>
</template>

<script>
    export default {
        name: 'Clicktopost',
        methods: {
            goToCreatePost(){
                 this.$router.push("/createpost");
            }
        }
    }
</script>

<style scoped>
.click-to-make-posts{
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    width : 3.4rem;
    height: 3.4rem;
    border-radius: 25px;
    font-size: 1.6rem;
}
.click-to-make-posts:hover{
    font-weight: 600;
    font-size: 1.8rem;
}
</style>
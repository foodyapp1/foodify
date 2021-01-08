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
                        {{userstatus}}
                    </vs-navbar-item>
                    <vs-navbar-item class="spacing-navbar-element">
                        {{username}}
                    </vs-navbar-item>
                    <vs-navbar-item class="spacing-navbar-element" >
                        <span @click="logout" >Logout</span>
                    </vs-navbar-item>
                </vs-navbar>
        </div>
        <h1>this is the mainfeed page</h1>
    </div>
</template>

<script>
    export default {
        name: "Mainfeed",
        data: () => ({
            popupActivo: false,
            userstatus: "user",
            username: "Garbouj",
        }),
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
</style>
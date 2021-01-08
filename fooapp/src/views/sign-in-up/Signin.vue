<template>
    <div>
        <div class="centerx">
            <vs-button @click="popupActivo=true" color="primary" type="border" class="button-nav-spacing">sign-in</vs-button>
            <vs-popup class="holamundo" title="Sign-in" :active.sync="popupActivo">
                <h3></h3>
                <div class="default-input d-flex align-items-center">
                    <vs-input label="Email" class="inputx" placeholder="Email adress" v-model="email"/>
                    <vs-input type="password" label="Password" class="inputx" placeholder="Password" v-model="password"/>
                </div>
                <vs-button color="primary" type="filled" class="button-nav-spacing">Sign-in</vs-button>
                <p>if you are not Registered : <span>Sign-up</span></p>
                
            </vs-popup>
        </div>
    </div>
</template>

<script>
    export default {
       data: () => ({
            popupActivo: false,
            email: "",
            password: "",
        }),
        methods: {
            // login(){
            //     let user={
            //         email:this.email,
            //         password:this.password
            //     }
            // }
        }
    }
</script>

<style scoped>
    .holamundo{
        text-align: center;
    }
    .d-flex{
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }
    .inputx{
        margin: 1rem 0;
    }
    .button-nav-spacing{
        width: 7.6rem;
        border-radius: 25px;
    }
    .button-nav-spacing{
            width: 7.6rem;
            border-radius: 25px;
    }
</style>
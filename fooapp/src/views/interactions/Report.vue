<template>
     <div class="centerx">
        <vs-button @click="popupActivo=true" color="warning" type="gradient" class="likes-bttn-stiling-main">report</vs-button>
            <vs-popup class="holamundo" title="Report a post, site your reasons" :active.sync="popupActivo">
                <div class="mb-3">
                    <vs-checkbox class="justify-content-start" v-model="contentInprop">Inappropriate  Content</vs-checkbox>
                </div>
                <div class="mb-3">
                    <vs-checkbox class="justify-content-start" v-model="hate">Hate</vs-checkbox>
                </div>
                <div class="mb-3">
                    <vs-checkbox class="justify-content-start" v-model="contentIllit">Illicit Content</vs-checkbox>
                </div>
                <vs-button color="warning" type="gradient" @click="reportsubmit" class="report-bttn-submit-main">report !</vs-button>
            </vs-popup>
        </div>
</template>

<script>
import axios from 'axios'
const Cookies = require("js-cookie");
    export default {
        name: "Report",
        props: {
            postId: String,
        },
        data: ()=> ({
            userId: Cookies.get("_id"),
            popupActivo:false,
            contentInprop: false,
            hate: false,
            contentIllit: false
        }),
        methods: {
            reportsubmit(){
                // console.log("Inapropriate : ", this.contentInprop);
                // console.log("Hate : ", this.hate);
                // console.log("content Illicit : ", this.contentIllit);
                this.contentInprop = false;
                this.hate = false;
                this.contentIllit = false;
                this.popupActivo = false;
            }
        }
    }
</script>

<style scoped>
.likes-bttn-stiling-main{
    margin : 0.5rem 0.6rem;
}
.report-bttn-submit-main{
    width : 6rem;
    margin-left : 29rem;
    margin-top : 0.5rem;
}
</style>
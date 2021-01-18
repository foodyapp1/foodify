<template>
     <div class="centerx">
        <vs-button @click="popupActivo1=true" color="warning" type="gradient" class="likes-bttn-stiling-main">report</vs-button>
            <vs-popup class="holamundo" title="Report a post, site your reasons" :active.sync="popupActivo1">
                <div class="mb-3">
                    <vs-checkbox class="justify-content-start" v-model="contentInprop">Inappropriate  Content</vs-checkbox>
                </div>
                <div class="mb-3">
                    <vs-checkbox class="justify-content-start" v-model="contentHate">Hate</vs-checkbox>
                </div>
                <div class="mb-3">
                    <vs-checkbox class="justify-content-start" v-model="contentAbuse">Illicit Content</vs-checkbox>
                </div>
                <vs-button color="warning" type="gradient" @click="reportsubmit" class="report-bttn-submit-main">report !</vs-button>
            </vs-popup>

            <vs-popup class="holamundo second-popup-alert-confirm" title="Report sent" :active.sync="popupActivo2">
                <h4>resons</h4>
                <ul>
                    <li v-if="contentInprop" >Inappropriate content</li>
                    <li v-if="contentHate" >Hatefull content</li>
                    <li v-if="contentAbuse" >Abusive content</li>
                </ul>
                <vs-button color="warning" type="gradient" @click="closeConfirmation" class="report-bttn-submit-main">Sure !</vs-button>
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
            popupActivo1:false,
            popupActivo2:false,
            contentInprop: false,
            contentHate: false,
            contentAbuse: false
        }),
        methods: {
            async reportsubmit(){
                // console.log("Inapropriate : ", this.contentInprop);
                // console.log("Hate : ", this.hate);
                // console.log("content Illicit : ", this.contentIllit);
                const report = await axios.post("/api/report/", {
                    post_Id: this.postId,
                    user_Id: this.userId,
                    inapropriate: this.contentInprop,
                    hate: this.contentHate,
                    illicit: this.contentAbuse
                })
                if(report){
                    this.popupActivo1 = false,
                    this.popupActivo2 = true
                }
            },
            closeConfirmation(){
                this.popupActivo2 = false,
                this.contentInprop = false,
                this.contentHate = false,
                this.contentAbuse = false
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
.second-popup-alert-confirm{
    z-index : 12;
}
</style>
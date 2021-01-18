<template>
   <div class="centerx">
              <vs-button class="report-bttn-submit-main" @click="popupActivo2 = true" color="warning" type="gradient"
      >Repport</vs-button
    >
    <vs-popup
      classContent="popup-example"
      title="repport note"
      :active.sync="popupActivo2"
    >
      <vs-list>
        <vs-list-header
          title="please select one or all of them" color="primary"
        ></vs-list-header>
        <vs-list-item title="abuse" subtitle="being abused verbally">
          <vs-checkbox color="primary" v-model="abuse"/>
        </vs-list-item>
        <vs-list-item title="hate" subtitle="any act of hate ">
          <vs-checkbox color="primary" v-model="hate" />
        </vs-list-item>
        <vs-list-item
          title="inappropriate content"
          subtitle="sexual content or violance "
        >
          <vs-checkbox color="primary" v-model="inappropriate"/>
        </vs-list-item>
      </vs-list>
      
      <vs-button class="repprot-batn-pop" @click="sendReport" color="primary" type="filled"
        >send it</vs-button
      >
      <vs-popup title="done" :active.sync="popupActivo3">
        <p>
          repport Done
        </p>
      </vs-popup>
    </vs-popup>
              <vs-popup
                classContent="popup-example"
                title="Lorem ipsum dolor sit amet"
                :active.sync="popupActivo2"
              >
              </vs-popup>
          
            </div>
            
</template>

<script>
// eslint-disable-next-line
import axios from 'axios';
const Cookies = require("js-cookie");
    export default {
        name: "Report",
        props: {
            postId: String,
        },
        data: ()=> ({
            abuse:false,
            hate:false,
            inappropriate:false,
        popupActivo2: false,
        popupActivo3: false,
        textarea: '',
        userId: Cookies.get("_id"),
           
        }),
        methods: {
           async sendReport(){
                this.popupActivo2=false
                this.popupActivo3 = true 

                 
                // console.log("inappropriate : ", this.inappropriate);
                // console.log("hate : ", this.hate);
                // console.log("abuse : ", this.abuse);

                 const report =  await axios.post("/api/report/", {
                    post_Id: this.postId,
                    user_Id: this.userId,
                    inappropriate: this.inappropriate,
                    hate: this.hate,
                    abuse: this.abuse
                })
                if(report){
            
                    this.popupActivo3 = true
                }
            }
        }
    }
</script>

<style scoped>
.repprot-batn-pop{
    margin-top:1.6rem;
    
}
.report-bttn-submit-main{
    width : 6rem;
    margin : 0.5rem 0.6rem;
}
</style>
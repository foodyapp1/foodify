<template>
   <div class="centerx">
              <vs-button v-if="!reported" class="report-bttn-submit-main" @click="popupActivo2 = true" color="warning" type="gradient">Report</vs-button>
              <vs-button v-if="reported" class="report-bttn-submit-main" @click="popupActivo4 = true" color="warning" type="border">Reported</vs-button>

    <vs-popup
      classContent="popup-example"
      title="repport note"
      :active.sync="popupActivo2">
      <vs-list>
        <vs-list-header
          title="please select one or all of them" color="primary">
        </vs-list-header>
        <vs-list-item title="abuse" subtitle="being abused verbally">
          <vs-checkbox color="primary" v-model="abuse"/>
        </vs-list-item>
        <vs-list-item title="hate" subtitle="any act of hate ">
          <vs-checkbox color="primary" v-model="hate" />
        </vs-list-item>
        <vs-list-item
          title="inappropriate content"
          subtitle="sexual content or violance ">
          <vs-checkbox color="primary" v-model="inappropriate"/>
        </vs-list-item>
      </vs-list>
      <vs-button class="repprot-batn-pop" @click="sendReport" color="primary" type="filled">send it</vs-button>
      <vs-popup title="done" :active.sync="popupActivo3">
        <p>report saved !</p>
      </vs-popup>
    </vs-popup>

    <vs-popup class="holamundo" title="Delete The report" :active.sync="popupActivo4">
            <p>
            You've already reported this post for :
            </p>
            <ul>
              <li v-if="abuse">Abuse</li>
              <li v-if="hate">Hate</li>
              <li v-if="inappropriate">Inappropriate content</li>
            </ul>
            <vs-button class="repprot-batn-pop" @click="deleteReport" color="danger" type="filled">Delete The report</vs-button>
            <vs-popup title="Report deleted" :active.sync="popupActivo5">
              <p>Report deletion Done !</p>
            </vs-popup>
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
            posttitle: String,
            postUserName: String,
        },
        data: ()=> ({
            abuse:false,
            hate:false,
            inappropriate: false,
            popupActivo2: false,
            popupActivo3: false,
            popupActivo4: false,
            popupActivo5: false,
            textarea: '',
            userId: Cookies.get("_id"),
            reported: false,
            myreportId : null,
        }),
        async mounted(){
            //make an axios call for the reports related to this post and run a compareson
                //if user Id exist than swhitch reported to true and run conditional redering,
            const allreportonpost = await axios.get(`/api/report/${this.postId}`);
            // console.log(allreportonpost.data);
            allreportonpost.data.forEach(element => {
              if(element.user_Id === this.userId){
                this.reported = true;
                this.myreportId = element._id;
                this.abuse = element.abuse;
                this.hate = element.hate;
                this.inappropriate = element.inappropriate;
              }
            })
            // console.log(this.reported, '//', this.myreportId);
        },
        methods: {
           async sendReport(){
             if(this.inappropriate || this.hate || this.abuse){
                this.popupActivo2= false;
                this.popupActivo3= true;
                 const report = await axios.post("/api/report/", {
                    post_Id: this.postId,
                    user_Id: this.userId,
                    reportedName: this.postUserName,
                    reportedPostName: this.posttitle,
                    inappropriate: this.inappropriate,
                    hate: this.hate,
                    abuse: this.abuse
                })
                if(report){
                    this.popupActivo3 = true;
                    this.reported = true;
                    setTimeout(() => {
                      window.location.reload()
                    }, 1300)
                   ;
                }
             } else{
               alert("please pick a reason")
             }
          },
          async deleteReport(){
              const deleteReport = await axios.delete(`/api/report/${this.myreportId}`);
              if(deleteReport){
                this.popupActivo4 = false;
                this.abuse= false;
                this.hate= false;
                this.inappropriate= false;
                this.popupActivo5 = true;
                this.reported = false;
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
li{
  list-style: none;
}
</style>
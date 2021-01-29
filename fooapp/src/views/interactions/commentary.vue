<template>
  
    <vs-col
      type="flex"
      vs-justify="center"
      vs-align="center"
      vs-w="12"
      vs-sm="12"
    >
      <vs-card>
        <div slot="header">
          <h4>
            Comments
          </h4>
        </div>
        <div>
          <vs-textarea v-model="textarea" />
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button color="success" type="gradient" @click="submitcomment"
                >comment</vs-button
              >
            </vs-row>
          </div>
        </div>
        <div class="commentary-main-field">
          <vs-row vs-justify="center">
            <vs-col
              type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="12"
              vs-sm="12"
              v-for="(comment, index) in allcomments"
              :key="index"
            >
              <vs-card class="commentary-spacing-style">
                <h5>{{ comment.username }}</h5>
                <br />
                <div>
                  <span> {{ comment.text }} </span>
                </div>
              </vs-card>
            </vs-col>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  
</template>
<script>
import axios from 'axios'
const Cookies = require("js-cookie");
export default {
  name: "Commentary",
  props: {
    postId: String,
  },
  data: () => ({
    username: Cookies.get("name"),
    userId: Cookies.get("_id"),
    textarea: "",
    allcomments: [],
  }),
 async mounted() {
  const findComment= await axios.get(`/api/comments/${this.postId}`);
  // console.log(findComment.data)
  this.allcomments=findComment.data;
  },
  methods: {
  async submitcomment() {
      const createdComment = await axios.post('/api/comments',{
        post_Id:this.postId,
        username: this.username,
        user_Id: this.userId,
        text: this.textarea,
      })
      //to optimise with socket IO ::
      this.textarea = "";
      this.allcomments.unshift(createdComment.data);
    },
  },
};
</script>
<style scoped>
.commentary-main-field{
    margin-top: 1.6rem;
}
.commentary-spacing-style{
    margin: 0.2rem auto;
}
</style>

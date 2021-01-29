<template lang="html">
  <div id="pop-btn">
    <vs-button
      @click="popupActivo = true"
      color="primary"
      type="filled"
      class="button-nav-spacing"
      >Sign Up</vs-button
    >
    <vs-popup
      class="holamundo"
      title="Create Your Account !"
      :active.sync="popupActivo"
    >
      <vs-input
        label="Username"
        class="inputx"
        placeholder="Placeholder"
        v-model="fname"
        @keyup.enter="signup(fname, email, password)"
      />
      <vs-input
        label="email"
        class="inputx"
        placeholder="email"
        v-model="email"
        @keyup.enter="signup(fname, email, password)"
      />
      <vs-input
        type="password"
        label="Password"
        class="inputx"
        placeholder="Password"
        v-model="password"
        @keyup.enter="signup(fname, email, password)"
      />
      <vs-input
        type="password"
        label="password confirmation"
        class="inputx"
        placeholder="confirm your password"
        v-model="passwordconf"
        @keyup.enter="signup(fname, email, password)"
      />
      
      <div class="pop-btn">
        <label for="file">Upload an image</label>
        <input 
          type="file"
          ref="file"
          @change="selectFile"
        />
      </div>
      <div>
      <span
        @click="
          checkemptyinput(),
            signup(fname, email, password),
            $vs.notify({
              title: 'Support',
              text: 'thank you for joining our community',
              color: 'primary',
            })
        "
      >
        <vs-button
          @click="openLoadingColor"
          type="filled"
          color="primary"
          class="button-inside-sign-spacing"
          >Register</vs-button
        >
      </span>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import slugify from "slugify";
let bcrypt = require("bcryptjs");
const axios = require("axios");
export default {

  name: "Signup",
  data() {
    return {
      colorLoading: "#7d0c3f",
      popupActivo: false,
      fname: "",
      email: "",
      password: "",
      passwordconf: "",
      file: ""
    };
  },
  methods: {
    selectFile(){
      this.file = this.$refs.file.files[0];
    },
    async signup(username, useremail, password) {
      if(password === this.passwordconf){
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        try {
          // eslint-disable-next-line
          const formData = new FormData();
          formData.append('file', this.file);
          const imgUrl = await axios.post('/api/uploadtest/test', formData)
          // eslint-disable-next-line
          console.log('secure url :', imgUrl.data);
          // eslint-disable-next-line
          const resp = await axios.post("/api/loginsignup/signup",{
              username: username,
              handle: slugify(username.toLowerCase()),
              email: useremail,
              password: hash,
              image: imgUrl.data
            }
          );
          this.popupActivo = false;
          // console.log("saved");
        } catch (err) {
          // Handle Error Here
          // eslint-disable-next-line
          console.error(err);
        }
      } else{
        alert('pasword deoasn\'t match confirmation pattern')
      }
      
    },
    //////////////////////////////////////////////////
    checkemptyinput() {
      if (
        this.fname.length < 1 ||
        this.email.length < 1 ||
        this.email.length < 1
      ) {
        alert("fill the form pls");
        return;
      }
    },
    //////////////////////////////////////////////////
    openLoadingColor() {
      this.$vs.loading({ color: this.colorLoading });
      setTimeout(() => {
        this.$vs.loading.close();
      }, 2000);
    },
    randomIcon() {
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let color = `rgb(${getRandomInt(0, 255)},${getRandomInt(
        0,
        255
      )},${getRandomInt(0, 255)})`;
      this.$vs.notify({
        title: "Icon mail",
        text: "Lorem ipsum dolor sit amet, consectetur",
        color: color,
        icon: "verified_user",
      });
    },
  },
};
</script>
<style scoped>
.holamundo {
  text-align: center;
}
.inputx {
  margin: 1rem auto;
}
.button-nav-spacing {
  width: 7.6rem;
}
.button-inside-sign-spacing {
  width: 7.6rem;
  margin: 1.2rem 0 1rem 0;
}
.pop-btn{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

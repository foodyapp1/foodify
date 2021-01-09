<<<<<<< HEAD
<template>
    
</template>

<script>
    export default {
       
    }
</script>
=======
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
      />
      <vs-input
        label="email"
        class="inputx"
        placeholder="email"
        v-model="email"
      />
      <vs-input
        type="password"
        label="Password"
        class="inputx"
        placeholder="Password"
        v-model="password"
      />
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
    </vs-popup>
  </div>
</template>

<script>
let bcrypt = require("bcryptjs");
const axios = require("axios");
export default {
  /* eslint-disable */
>>>>>>> d0c37309d4bfcd0b776ac14b7f378c077475de19

  name: "Signup",
  data() {
    return {
      colorLoading: "#7d0c3f",
      popupActivo: false,
      fname: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signup(username, useremail, password) {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(password, salt);
      try {
        const resp = await axios.post(
          "http://localhost:3000/api/loginsignup/signup",
          { username, useremail, password: hash }
        );
        this.popupActivo = false;
        console.log("saved");
      } catch (err) {
        // Handle Error Here
        console.error(err);
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
<<<<<<< HEAD

</style>
=======
.holamundo {
  text-align: center;
}
.inputx {
  margin: 1rem auto;
}
.button-nav-spacing {
  width: 7.6rem;
  border-radius: 25px;
}
.button-inside-sign-spacing {
  width: 7.6rem;
  border-radius: 25px;
  margin: 1.2rem 0 1rem 0;
}
</style>
>>>>>>> d0c37309d4bfcd0b776ac14b7f378c077475de19

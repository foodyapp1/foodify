<template>
<<<<<<< HEAD
    <div>
=======
  <div>
    <div class="centerx">
      <vs-button
        @click="popupActivo = true"
        color="primary"
        type="border"
        class="button-nav-spacing"
        >sign-in</vs-button
      >
      <vs-popup class="holamundo" title="Sign-in" :active.sync="popupActivo">
        <h3></h3>
        <div class="default-input d-flex align-items-center">
          <vs-input
            label="Email"
            class="inputx"
            placeholder="Email adress"
            v-model="email"
          />
          <vs-input
            type="password"
            label="Password"
            class="inputx"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <vs-button
          color="primary"
          type="filled"
          class="button-inside-sign-spacing"
          @click="login(email, password)"
          >Sign-in</vs-button
        >
        <p>Or</p>
        <span @click="signup"><Signup /></span>
        <br />
      </vs-popup>
>>>>>>> d0c37309d4bfcd0b776ac14b7f378c077475de19
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
    export default {
    
    }
</script>

<style scoped>
   
</style>
=======
/* eslint-disable */
import Signup from "./Signup";
export default {
  name: "Signin",
  components: {
    Signup,
  },
  props: { login: Function },
  data: () => ({
    popupActivo: false,
    email: "",
    password: "",
  }),
  methods: {
    signup() {
      this.popupActivo = false;
    },
  },
};
</script>

<style scoped>
.holamundo {
  text-align: center;
}
.d-flex {
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.inputx {
  margin: 1rem 0;
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

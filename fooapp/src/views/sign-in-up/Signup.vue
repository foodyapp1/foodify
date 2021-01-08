<template lang="html">
  <div id="pop-btn">
    <vs-button @click="popupActivo = true" color="primary" type="filled" class="button-nav-spacing">Sign Up</vs-button
    >
    <vs-popup
      class="holamundo"
      title="Create Your Account !"
      :active.sync="popupActivo">
      <vs-input
        label="Username"
        class="inputx"
        placeholder="Placeholder"
        v-model="fname"/>
      <vs-input
        label="email"
        class="inputx"
        placeholder="email"
        v-model="email"/>
      <vs-input
        type="password"
        label="Password"
        class="inputx"
        placeholder="Password"
        v-model="password"/>
            <span  @click="
                $vs.notify({
                title: 'Support',
                text: 'thank you for subscribing with us',
                color: 'primary',
                })">
                <vs-button @click="openLoadingColor" type="filled" color="primary" class="button-inside-sign-spacing">Register</vs-button>
            </span>
    </vs-popup>
  </div>
</template>

<script>
export default {
    name: "Signup",
    data() {
        return {
        colorLoading: "#7d0c3f",
        popupActivo: false,
        fname: "",
        email: "",
        password: "",
        }
    },
    methods: {
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
    .holamundo{
        text-align: center;
    }
    .inputx{
        margin: 1rem auto;
    }
    .button-nav-spacing{
        width: 7.6rem;
        border-radius: 25px;
    }
    .button-inside-sign-spacing{
            width: 7.6rem;
            border-radius: 25px;
            margin: 1.2rem 0 1rem 0;
    }
</style>

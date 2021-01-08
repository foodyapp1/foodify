<template lang="html">
  <div id="pop-btn">
    <vs-button @click="popupActivo = true" color="danger" type="border"
      >Sign Up</vs-button
    >
    <vs-popup
      class="holamundo"
      title="Create Your Account !"
      :active.sync="popupActivo"
    >
      <p>Sign Up</p>
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
        class="inputx ml-3"
        placeholder="Password"
        v-model="password"
      />
      <div class="centerx">
        <vs-button
          @click="
            $vs.notify({
              title: 'Support',
              text: 'thank you for subscribing with us',
              color: 'danger',
            })
          "
          color="danger"
          type="danger"
        >
          <vs-button @click="openLoadingColor" type="gradient" color="danger"
            >Danger</vs-button
          >
        </vs-button>
      </div>
    </vs-popup>
  </div>
</template>

<script>
export default {
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

<template>
  <div>
    <div class="con-type-example">
      <vs-navbar
        :type="type"
        v-model="activeItem"
        class="nabarx spacing-added-to-nav"
      >
        <div slot="title">
          <vs-navbar-title>
            Logo under construction
          </vs-navbar-title>
        </div>

        <vs-navbar-item class="spacing-navbar-element">
          {{ name }}
        </vs-navbar-item>
        <vs-navbar-item class="spacing-navbar-element">
          <span @click="logout">Logout</span>
        </vs-navbar-item>
      </vs-navbar>
    </div>
    <div id="columns">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        />
        <figcaption>some grilled meat and salad</figcaption>
      </figure>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80"
        />
        <figcaption>a dish for egg lovers</figcaption>
      </figure>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
        />
        <figcaption>a good healthy breakfast</figcaption>
      </figure>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        />
        <figcaption>todays best meal</figcaption>
      </figure>

      <figure>
        <div class="img-hover-zoom">
          <img
            src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>

        <figcaption>spice up your day</figcaption>
      </figure>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <figcaption>pasta lovers will enjoy this</figcaption>
      </figure>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <figcaption>some meat balls</figcaption>
      </figure>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <figcaption>for vegeterians</figcaption>
      </figure>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <figcaption>just a food pic</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
const Cookies = require("js-cookie");
export default {
  name: "Mainfeed",
  data: () => ({
    name: Cookies.get("name"),
    popupActivo: false,
    type: "type",
    activeItem: "activeItem",
  }),

  methods: {
    logout() {
      Cookies.remove("name");
      document.location.reload(false);
    },
  },
};
</script>

<style scoped>
.spacing-added-to-nav {
  padding: 1rem 2.4rem;
  background: #fff;
}
.spacing-navbar-element {
  margin: 0 0.6rem;
}
.button-nav-spacing {
  width: 7.6rem;
  border-radius: 25px;
}
span {
  cursor: pointer;
}

body {
  font-family: Calluna, Arial, sans-serif;
  min-height: 1000px;
}
#columns {
  column-width: 320px;
  column-gap: 15px;
  width: 90%;
  max-width: 85%;
  margin: 3% auto;
}

div#columns figure {
  border-radius: 10px;
  background: #fefefe;
  border: 2px solid #fcfcfc;
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  margin: 0 2px 15px;
  padding: 15px;
  padding-bottom: 10px;
  transition: opacity 0.4s ease-in-out;
  display: inline-block;
  column-break-inside: avoid;
}

div#columns figure img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin-bottom: 5px;
}

div#columns figure figcaption {
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;
}

div#columns small {
  font-size: 1rem;
  float: right;
  text-transform: uppercase;
  color: #aaa;
}

div#columns small a {
  color: #666;
  text-decoration: none;
  transition: 0.4s color;
}

/* div#columns:hover figure:not(:hover) {
  opacity: 0.6;
} */

figure:hover {
  cursor: pointer;
}

@media screen and (max-width: 750px) {
  #columns {
    column-gap: 0px;
  }
  #columns figure {
    width: 100%;
  }
}
</style>

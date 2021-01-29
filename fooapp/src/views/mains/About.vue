/* eslint-disable */
<template lang="html">
  <div class="centerx">
    <div>
      {{/*this is the btn that inside the navbar that contain home,dahsboared,profile need to link*/}}
      <vs-tabs :color="primary">
        <vs-tab label="home" icon="filter_vintage" @click="colorx = '#FFA500'">
        </vs-tab>
        <vs-tab label="Dashboard" icon="dashboard" @click="colorx = '#FFA500'">
        </vs-tab>
        <vs-tab
          label="Profile"
          icon="account_circle"
          @click="colorx = '#FFA500'"
        >
        </vs-tab>
      </vs-tabs>
    </div>

    <vs-row vs-justify="center">
      <vs-col
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="6"
        vs-sm="12"
      >
        <vs-card>
          <div slot="header">
            <h4>
              Hello world !
            </h4>
          </div>
          <div>
            <span
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.</span
            >
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end"> </vs-row>
          </div>
          <div>
            <vs-collapse :type="type">
              <vs-collapse-item>
                <div slot="header">
                  ur mom
                </div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                rhoncus eros tortor, non fringilla lectus cursus et. Fusce vel
                nisi ante. Aliquam sit amet lectus pharetra, luctus mi sed,
                aliquet felis. Mauris a tortor viverra, ornare tellus in,
                consectetur leo.
                <br /><br />
                <span></span>
                Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit.
                Vestibulum iaculis nibh commodo neque ultrices lobortis. Cras
                magna massa, pretium vitae mattis varius, pharetra nec massa.
                Aliquam ac ex enim. Quisque consequat dui libero, vel blandit
                lorem porttitor sit amet. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae; Nullam
                sed lobortis nisl, quis eleifend metus.
              </vs-collapse-item>
            </vs-collapse>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>

    {{/*this for seprating don't touch it*/}}
    <vs-breadcrumb :items="items" separator="•"></vs-breadcrumb>
    <vs-row vs-justify="center">
      <vs-col
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="6"
        vs-sm="12"
      >
        <vs-card actionable class="cardx">
          <div slot="header">
            <h4>
              Dali the Destroyer
            </h4>
          </div>
          <div slot="media">
            <span
              ><vs-avatar
                size="150px"
                src="https://tse4.mm.bing.net/th?id=OIP.BPJCMh5rGadtvQaRgvqaHwHaEJ&pid=Api&P=0&w=282&h=159"
            /></span>
          </div>
          <div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button
                :color="colorx"
                @click="popupActivo5 = true"
                type="filled"
                >View</vs-button
              >
              <vs-popup
                style="color:rgb(255,255,255)"
                background-color="rgba(255,255,255,.6)"
                :background-color-popup="colorx"
                title="background"
                :active.sync="popupActivo5"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br />
                  <br />
                  e irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </vs-popup>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <vs-col
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="6"
        vs-sm="12"
      >
        <vs-card actionable class="cardx">
          <div slot="header">
            <h4>
              AZIZ THE little devil
            </h4>
          </div>
          <div slot="media">
            <span
              ><vs-avatar
                size="150px"
                src="https://tse4.mm.bing.net/th?id=OIP.BPJCMh5rGadtvQaRgvqaHwHaEJ&pid=Api&P=0&w=282&h=159"
            /></span>
          </div>
          <div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button
                :color="colorx"
                @click="popupActivo5 = true"
                type="filled"
                >View</vs-button
              >
              <vs-popup
                style="color:rgb(255,255,255)"
                background-color="rgba(255,255,255,.6)"
                :background-color-popup="colorx"
                title="background"
                :active.sync="popupActivo5"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br />
                  <br />
                  e irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </vs-popup>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <vs-col
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="6"
        vs-sm="12"
      >
        <vs-card actionable class="cardx">
          <div slot="header">
            <h4>
              Anas the funny
            </h4>
          </div>
          <div slot="media">
            <span
              ><vs-avatar
                size="150px"
                src="https://tse4.mm.bing.net/th?id=OIP.BPJCMh5rGadtvQaRgvqaHwHaEJ&pid=Api&P=0&w=282&h=159"
            /></span>
          </div>
          <div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button
                :color="colorx"
                @click="popupActivo5 = true"
                type="filled"
                >View</vs-button
              >
              <vs-popup
                style="color:rgb(255,255,255)"
                background-color="rgba(255,255,255,.6)"
                :background-color-popup="colorx"
                title="background"
                :active.sync="popupActivo5"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br />
                  <br />
                  e irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </vs-popup>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <vs-col
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="6"
        vs-sm="12"
      >
        <vs-card actionable class="cardx">
          <div slot="header">
            <h4>
              dali red in humor
            </h4>
          </div>
          <div slot="media">
            <span
              ><vs-avatar
                size="150px"
                src="https://tse4.mm.bing.net/th?id=OIP.BPJCMh5rGadtvQaRgvqaHwHaEJ&pid=Api&P=0&w=282&h=159"
            /></span>
          </div>
          <div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button
                :color="colorx"
                @click="popupActivo5 = true"
                type="filled"
                >View</vs-button
              >
              <vs-popup
                style="color:rgb(255,255,255)"
                background-color="rgba(255,255,255,.6)"
                :background-color-popup="colorx"
                title="background"
                :active.sync="popupActivo5"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br />
                  <br />
                  e irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </vs-popup>
            </vs-row>
          </div>
        </vs-card>
        {{/*this for seprating don't touch it*/}}
        <vs-breadcrumb :items="items" separator="•"></vs-breadcrumb>
      </vs-col>
    </vs-row>
    <vs-breadcrumb align="center">
      <li>
        <a href="#" title="Home">Home</a
        ><span class="vs-breadcrum--separator">/</span>
      </li>
      <li>
        <a href="#" title="Profil">Profil</a
        ><span class="vs-breadcrum--separator">/</span>
      </li>
      <li aria-current="page" class="active">Infos</li>
    </vs-breadcrumb>
    <vs-breadcrumb align="center">
      <h6>copyRight by DataDriven 2020/2021</h6>
    </vs-breadcrumb>
  </div>
</template>

<script>
export default {
    name:"About",
  data: () => ({
    colorx: "#4a5153",
    popupActivo5: false,

    activeItem: 0,
    type: "shadow",
    types: [
      {
        value: "shadow",
        text: "Shadow",
      },
    ],
  }),
};
</script>

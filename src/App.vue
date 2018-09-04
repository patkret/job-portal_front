<template>
    <div id="app">
        <header class="panel-header">
            <div class="portal-name">
                <img src="./assets/img/start-logo.png">
            </div>
            <transition name="fade">
                <span class="admin-panel-text" v-if="showText">ADMIN PANEL</span>
            </transition>
        </header>
        <main>
            <div class="sidebar">
                <transition name="slide-right">
                    <div class="sidebar-full" v-if="toggleSidebar">
                        <button class="icon-button small-icon" @click="toggleSidebar = !toggleSidebar"><i
                                class="fa fa-chevron-left fa-1x"></i></button>
                        <ul>
                            <router-link v-for="route in routes" :to="route.path" :key="route.name">
                                <li :class="{'link': true, 'active-link': activeRoute === route.path }"
                                    @click="activeRoute = route.path">
                                    {{route.name}}
                                </li>
                            </router-link>
                        </ul>
                    </div>
                </transition>
                <button class="sidebar-icon-min" v-if="showMinIcon" @click="toggleSidebar = true">
                    <i class="fa fa-chevron-right"></i>
                </button>
            </div>
            <section class="content-container" @click="toggleSidebar = false">
                <div class="view-container">
                    <router-view/>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      showText: false,
      toggleSidebar: false,
      showMinIcon: true,
      activeRoute: '',
      routes: [
        {id: 0, name: 'Dashboard', path: '/', children: []},
        {id: 1, name: 'Offers', path: '/offers', children: []},
        {id: 2, name: 'Cities', path: '/cities', children: []},
        {id: 3, name: 'Companies', path: '/companies', children: []},
        {id: 4, name: 'Technologies', path: '/technologies', children: []},

      ],
    }),
    watch: {

      toggleSidebar: function (value) {
        if (!value) {
          setTimeout(() => {
            this.showMinIcon = true
          }, 800)
        }
        else {
          this.showMinIcon = false
        }
      },
    },
    methods: {
      showWithDelay () {
        setTimeout(() => {
          this.showText = true
        }, 700)
      },

    },
    created: function () {
      this.showWithDelay()
      this.activeRoute = this.$route.path
    },

  }
</script>

<style>

</style>

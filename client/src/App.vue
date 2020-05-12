<template lang="html">
  <body id="app">
      <page-header/>
      <nav>
          <div class="nav-links-group">
              <router-link  class="nav-links"  :to="{ name: 'login'}">Login</router-link>
              <router-link  class="nav-links"  :to="{name: 'study'}">Study</router-link>
              <router-link  class="nav-links"  :to="{ name: 'test'}">Test</router-link>
              <router-link  class="nav-links"  :to="{ name: 'statistics'}">Statistics</router-link>
          </div>
      </nav>
      <router-view id="view" />
  </body>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';

import {eventBus} from '@/main.js';

export default {
    name: 'app',
    data() {
        return {
            loggedUser: null
        }
    },
    components: {
        'page-header': PageHeader,
    },
    mounted() {

        eventBus.$on('new-user', (payload) => {
            UsersService.postUser(payload)
            .then(user => this.users.push(user))
        })
    }
}
</script>

<style lang="css" scoped>
#app{
    cursor:url("https://img.icons8.com/ultraviolet/40/000000/ball-point-pen.png") 3 40,pointer;
    width:100%;
    min-width:750px;
    min-height:750px;
    height:100vh;
    display:flex;
    flex-direction:column;
    box-sizing:border-box;

    padding:0px;
    margin:0px;

    border-style:solid;
    border-width:thin;
    background-image: linear-gradient(-45deg,red, yellow);
    background-repeat:no-repeat;

    font-family:nunito;
    font-weight:600;
    font-size:20px;
    text-align:center;

}
.pageHeader{
    width:100%;
    display:flex;
    flex-direction:column;
    align-self:center;
}
.nav-links-group{
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    background-color:black;
}
.nav-links{
    width:30%;
    text-decoration:none;
    border-style:solid;
    color:white;
    font-family:'nunito';
    font-weight:400;
    font-size:25px;
    padding:5px;
    text-shadow:3px 3px 4px red;
}
.nav-links:hover{
    border-radius:30px;
    background-color:lightblue;
    color:black;

}
.body{
    width:100%;
    height:100%;
    box-sizing:border-box;
    padding:10px;
    align-self:center;
    background-image:url(https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80);
    background-repeat:no-repeat;
    background-blend-mode:soft-light;
    }
</style>

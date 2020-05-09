<template lang="html">
  <body id="app">
    <div class="pageHeader">
      <page-header />
    </div>
    <div class="body">
      <revision v-if="viewSelector === 1" />
      <test-page v-if="viewSelector === 2" />
      <stats v-if="viewSelector === 3" />
    </div>
</body>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import {eventBus} from '@/main.js';
import TestPage from '@/components/TestPage.vue';
import Revision from '@/components/Revision.vue';
import Stats from '@/components/Stats.vue';
import UsersService from '@/services/UsersService.js';

export default {
  name: 'app',
  components: {
    'page-header': PageHeader,
    'test-page': TestPage,
    'revision': Revision,
    'stats': Stats
  },
  data() {
    return {
      viewSelector: 0,
      users: []
    }
  },
  mounted() {
    eventBus.$on('selected-nav-revision', (navNumber) => {
      this.viewSelector = navNumber
    }),
    eventBus.$on('selected-nav-test', (navNumber) => {
      this.viewSelector = navNumber
    }),
    eventBus.$on('selected-nav-stats', (navNumber) => {
      this.viewSelector = navNumber
    }),
    eventBus.$on('user-login', (payload) => {
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
    height:900px;
    display:flex;
    flex-direction:column;
    box-sizing:border-box;


    padding:0px;
    margin:0px;

    border-style:solid;
    border-width:thin;
    background-image: linear-gradient(-45deg,red, yellow);
    background-repeat:no-repeat;


}
.pageHeader{
width:100%;
display:flex;
flex-direction:column;
align-self:center;
}
.body{
    width:100%;
    height:100%;
    align-self:center;
    background-image:url(https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80);
    background-repeat:no-repeat;
    background-blend-mode:soft-light;
    opacity:1;
}

</style>

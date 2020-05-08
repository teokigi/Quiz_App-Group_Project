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
    width:90%;
    align-self:center;
}

</style>

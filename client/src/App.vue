<template lang="html">
  <body id="app">
    <div class="pageHeader">
      <page-header />
    </div>
    <div class="body">
      <home v-if="viewSelector === 0" />
      <revision :topics="topics" v-if="viewSelector === 1" />
      <test-page :topics="topics" :users="users" v-if="viewSelector === 2" />
      <stats v-if="viewSelector === 3" />
      <sign-up v-if="viewSelector === 4" />
    </div>
</body>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import TestPage from '@/components/TestPage.vue';
import Revision from '@/components/Revision.vue';
import Stats from '@/components/Stats.vue';
import HomePage from '@/components/HomePage.vue';
import SignUpForm from '@/components/SignUpForm';

import UsersService from '@/services/UsersService.js';
import TopicsService from '@/services/TopicsService.js';

import {eventBus} from '@/main.js';

export default {
  name: 'app',
  components: {
    'page-header': PageHeader,
    'test-page': TestPage,
    'revision': Revision,
    'stats': Stats,
    'home': HomePage,
    'sign-up': SignUpForm
  },
  data() {
    return {
      viewSelector: 0,
      users: [],
      loginStatus: 0,
      topics: null
    }
  },
  mounted() {
    TopicsService.getTopics()
    .then(topics => this.topics = topics)

    UsersService.getUsers()
    .then(users => this.users = users)

    eventBus.$on('update-answer', (user) => {
      const payload = {
      answerSet: user.answerSet
      }
      UsersService.updateUser(user._id, payload)})

    eventBus.$on('sign-in-up', (navNumber) => {
      this.viewSelector = navNumber
    }),
    eventBus.$on('selected-nav-revision', (navNumber) => {
      this.viewSelector = navNumber
    }),
    eventBus.$on('selected-nav-test', (navNumber) => {
      this.viewSelector = navNumber
    }),
    eventBus.$on('selected-nav-stats', (navNumber) => {
      this.viewSelector = navNumber
    }),
    eventBus.$on('sign-out', (navNumber) => {
      this.viewSelector =  navNumber
      this.loginStatus = navNumber
    }),
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

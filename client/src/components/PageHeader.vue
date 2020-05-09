<template lang="html">
  <div class="headWrapper">
  <div class="site-name">
      Exam Buddy
    </div>
    <div class="nav-links-group">
      <span class="nav-links" v-on:click="onClickSignInUp">  Sign In/Up </span>
      <span class="nav-links" v-on:click="onClickRevision"> Revise </span>
      <span class="nav-links" v-on:click="onClickTest"> Test </span>
      <span class="nav-links" v-on:click="onClickStats">  Stats </span>
    </div>
    <button v-if="loginStatus" type="button" name="sign-out" v-on:click="onClickSignOut">Sign Out</button>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: 'page-header',
  props: ['loginStatus'],
  methods: {
    onClickTest() {
      eventBus.$emit('selected-nav-test', 2)
    },
    onClickStats() {
      eventBus.$emit('selected-nav-stats', 3)
    },
    onClickRevision() {
      eventBus.$emit('selected-nav-revision', 1)
    },
    onClickSignOut() {
      eventBus.$emit('sign-out', 0)
    }
  }
}
</script>

<style lang="css" scoped>
.headWrapper{
    width:100%;
    height:150px;
    padding:5px;
    box-sizing:border-box;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    background-color:black;
    color:white;
    padding:5px;
    text-shadow: 0px 0px 4px red, 2px 2px 8px white;

}
.site-name{
    letter-spacing:60px;
    font-family:'nunito';
    font-weight:800;
    font-size:70px;
    height:60%;
}
.nav-links-group{
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
}
.nav-links{
 border-bottom-style:solid;
 font-family:'nunito';
 font-weight:400;
 font-size:25px;
     padding:5px;
}
.nav-links:hover{
    border-radius:30px;
    background-color:grey;

}
</style>

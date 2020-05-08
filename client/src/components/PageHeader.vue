<template lang="html">
  <div class="headWrapper">
  <div class="site-name">
    <h1>Exam Buddy</h1>
    </div>
    <div class="nav-links-group">
      <span class="nav-links" v-on:click="onClickRevision"> Revise </span>
      <span class="nav-links" v-on:click="onClickTest"> Test </span>
      <span class="nav-links" v-on:click="onClickStats">  Stats </span>
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: 'page-header',
  methods: {
    onClickTest() {
      eventBus.$emit('selected-nav-test', 2)
    },
    onClickStats() {
      eventBus.$emit('selected-nav-stats', 3)
    },
    onClickRevision() {
      eventBus.$emit('selected-nav-revision', 1)
    }
  }
}
</script>

<style lang="css" scoped>
.headWrapper{
    width:100%;
    height:110px;
    padding:5px;
    border-radius:30px;
    box-sizing:border-box;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    background-color:black;
    color:white;
    padding:5px;

}
.site-name{
    letter-spacing:10px;
}
.nav-links-group{
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
}
.nav-links{
 border-bottom-style:dotted;
 font-size:20px;
}
.nav-links:hover{
    border-bottom:solid;
}
</style>

<template lang="html">
  <div class="header">
    <h1 class="site-name">Exam-Buddy</h1>
    <h3 class="nav-links-group">
      <span class="nav-links" v-on:click="onClickRevision"> Revise </span>
      <span class="nav-links" v-on:click="onClickTest"> Test </span>
      <span class="nav-links" v-on:click="onClickStats">  Stats </span>
    </h3>
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
</style>

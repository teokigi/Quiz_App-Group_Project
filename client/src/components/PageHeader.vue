<template lang="html">
  <div class="header">
    <h1 class="site-name">Quizia</h1>
    <h3>
      <span class="nav-links" v-on:click="onClickRevision">Revise</span>
      <span class="nav-links" v-on:click="onClickQuiz">Quiz</span>
      <span class="nav-links" v-on:click="onClickStats">Stats</span>
    </h3>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: 'page-header',
  methods: {
    onClickQuiz() {
      eventBus.$emit('selected-nav-quiz', 2)
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

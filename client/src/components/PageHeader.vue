<template lang="html">
  <div class="header">
    <h1>Quizia</h1>
    <h3 class="nav-links" v-on:click="onClickQuiz">Quiz</h3>
    <h3 class="nav-links" v-on:click="onClickStats">Stats</h3>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: 'page-header',
  methods: {
    onClickQuiz() {
      eventBus.$emit('selected-nav-quiz')
    },
    onClickStats() {
      eventBus.$emit('selected-nav-stats')
    }
  }
}
</script>

<style lang="css" scoped>
</style>

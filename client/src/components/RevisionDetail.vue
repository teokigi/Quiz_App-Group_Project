<template lang="html">
  <div class="selected-topic">
    <h2>{{selectedTopic.category}}</h2>
    <br>
    <p>Learn everything you'll need for the test </p>
    <embed type="video/quicktime" :src="selectedTopic.youtubeURL" width="300" height="300">
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: 'revision-detail',
  props: ['selectedTopic']
}
</script>

<style lang="css" scoped>
</style>

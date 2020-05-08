<template lang="html">
  <div class="selected-topic">
    <h2>{{selectedTopic.category}}</h2>
    <br>
    <p>Learn everything you'll need for the test here!</p>
    <iframe :src="selectedTopic.youtubeURL" width="960" height="540" />
  </div>
</template>

<script>
import Revision from '@/components/Revision.vue';

export default {
  name: 'revision-detail',
  props: ['selectedTopic']

}
</script>

<style lang="css" scoped>
</style>

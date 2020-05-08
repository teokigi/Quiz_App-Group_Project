<template lang="html">
  <div class="">
    <h2>Quiz</h2>
    <label for="revision">Select a Topic: </label>
    <select id="revision" v-on:change="topicSelected" v-model="selectedTopic">
      <option disabled value="">select a topic...</option>
      <option v-for="topic of topics" :value="topic">{{topic.category}}</option>
    </select>
    <revision-detail v-if="selectedTopic" :selectedTopic="selectedTopic" />
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import

export default {
}
</script>

<style lang="css" scoped>
</style>

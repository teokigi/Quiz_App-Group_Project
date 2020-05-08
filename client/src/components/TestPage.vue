<template lang="html">
  <div class="">
    <h2>Start a Test</h2>
    <label for="revision">Select a Test Topic: </label>

    <select id="revision" v-on:change="topicSelected" v-model="selectedTopic">
      <option disabled value="">select a topic...</option>
      <option v-for="topic of topics" :value="topic">{{topic.category}}</option>
    </select>

    <form id="username-form" v-on:submit.prevent="onSubmit">
      <span>
        <label for="name-field">Name: </label>
        <input required type="text" id="name-field" v-model="user">
        <button type="submit"> Continue </button>
      </span>
    </form>

    <question-list v-if="selectedTopic" :selectedTopic="selectedTopic" />
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import TopicsService from '@/services/TopicsService.js';
import QuestionList from '@/components/QuestionList.vue';

export default {
  name: 'test-page',
  props: ['categories'],
  data() {
    return {
      selectedTopic: null,
      topics: []
    }
  },
  components: {
    'question-list': QuestionList
  },
  methods: {
    topicSelected() {
      eventBus.$emit('topic-selected', this.selectedTopic)
    }
  },
  mounted() {
    TopicsService.getTopics()
    .then(topics => this.topics = topics)
  }
}
</script>

<style lang="css" scoped>
</style>

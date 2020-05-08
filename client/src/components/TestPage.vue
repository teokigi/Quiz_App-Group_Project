<template lang="html">
  <div class="">
    
    <h2>Start a Test</h2>
    <label for="revision">Select a Test Topic: </label>

    <select id="revision" v-on:change="topicSelected" v-model="selectedTopic">
      <option disabled value="">select a topic...</option>
      <option v-for="topic of topics" :value="topic">{{topic.category}}</option>
    </select>

    <br>
    <br>

    <form id="username-form" v-on:submit.prevent="onSubmit">
      <label for="nickname-field">Nickname: </label>
      <input required type="text" id="nickname-field" v-model="user">
      <br>
      <label for="emailAddress-field">Email Address: </label>
      <input required type="email" id="emailAddress-field" v-model="emailAddress">
      <br>
      <label for="password-field">Password: </label>
      <input required type="password" v-model="password">
      <br>
      <button type="submit"> Continue </button>
    </form>

    <question-list v-if="selectedTopic" :selectedTopic="selectedTopic" />
    <hr>

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
      topics: [],
      user: null
    }
  },
  components: {
    'question-list': QuestionList
  },
  methods: {
    topicSelected() {
      eventBus.$emit('topic-selected', this.selectedTopic)
    },
    onSubmit() {
      const payload = {
        user: this.user
      }
      eventBus.$emit('user-login', payload)
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

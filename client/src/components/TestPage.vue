<template lang="html">
  <div class="">

    <h2>Start a Test</h2>
    <label for="revision">Select a Test Topic: </label>

    <select id="revision" v-on:change="topicSelected" v-model="selectedTopic">
      <option disabled value="">select a topic...</option>
      <option v-for="topic of topics" :value="topic">{{topic.category}}</option>
    </select>

    <hr>
    <question-list v-if="listView" :selectedQuestions="selectedTopic" />

  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import TopicsService from '@/services/TopicsService.js';
import QuestionList from '@/components/QuestionList.vue';
import UsersService from '@/services/UsersService.js';

export default {
  name: 'test-page',
  data() {
    return {
      selectedTopic: null,
      topics: [],
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
        user: this.user,
        emailAddress: this.emailAddress,
        password: this.password,
      }
      eventBus.$emit('new-user', payload)
      this.user = this.emailAddress = this.password = ""
      this.listView = true
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

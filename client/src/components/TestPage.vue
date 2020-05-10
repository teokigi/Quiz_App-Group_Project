<template lang="html">
  <div class="">


    <div v-if="!selectedUser">
      <h2>Start a Test</h2>
      <label for="revision">Select a User: </label>
      <select id="revision" v-model="selectedUser">
        <option disabled value="">select a user</option>
        <option v-for="user of users" :value="user">{{user.nickname}}</option>
      </select>
    </div>
    <div v-if="selectedUser&&!selectedTopic">
      <h2>Start a Test</h2>
      <label for="revision">Select a Test Topic: </label>
      <select id="revision"v-model="selectedTopic">
        <option disabled value="">select a topic...</option>
        <option v-for="topic of topics" :value="topic">{{topic.category}}</option>
      </select>
    </div>

    <question-list v-if="selectedTopic" :selectedQuestions="selectedTopic.questions" :selectedUser="selectedUser"/>

  </div>
</template>

<script>
import QuestionList from '@/components/QuestionList.vue';


export default {
  name: 'test-page',
  props: ['topics', 'users'],
  data() {
    return {
      selectedTopic: null,
      selectedUser: null,
    }
  },
  components: {
    'question-list': QuestionList
  }
}
</script>

<style lang="css" scoped>
</style>

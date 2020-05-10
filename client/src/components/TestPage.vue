<template lang="html">
  <div class="">

    <h2>Start a Test</h2>
    <label for="revision">Select a Test Topic: </label>

    <select id="revision"v-if="!selectedTopic" v-model="selectedTopic">
      <option disabled value="">select a topic...</option>
      <option v-for="topic of topics" :value="topic">{{topic.category}}</option>
    </select>

    <hr>
    <question-list v-if="selectedTopic" :selectedQuestions="selectedTopic.questions" />

  </div>
</template>

<script>
import QuestionList from '@/components/QuestionList.vue';


export default {
  name: 'test-page',
  props: ['topics'],
  data() {
    return {
      selectedTopic: null,      
    }
  },
  components: {
    'question-list': QuestionList
  }
}
</script>

<style lang="css" scoped>
</style>

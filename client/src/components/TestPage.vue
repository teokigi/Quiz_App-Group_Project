<template lang="html">
  <div class="">

    <div v-if="!selectedTopic">
      <h2>Start a Test</h2>
      <label for="revision">Select a Test Topic: </label>
      <select id="revision"v-model="selectedTopic">
        <option disabled value="">select a topic...</option>
        <option v-for="topic of topics" :value="topic">{{topic.category}}</option>
      </select>
    </div>

    <question-list v-if="selectedTopic" :topic="selectedTopic" :currentUser="currentUser" @resetValues="resetValues"/>

  </div>
</template>

<script>
import QuestionList from '@/components/QuestionList.vue';

export default {
  name: 'test-page',
  props: ['topics', 'currentUser'],
  data() {
    return {
      selectedTopic: null,
    }
  },
  components: {
    'question-list': QuestionList
    },
    methods:{
        resetValues(resVal){
            this.selectedUser = this.selectedTopic = resVal;
        }
    }
}
</script>

<style lang="css" scoped>
</style>

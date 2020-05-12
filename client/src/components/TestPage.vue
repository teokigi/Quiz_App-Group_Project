<template lang="html">
  <div class="">

    <div class="test-wrapper" v-if="!selectedTopic">
      <h2 class="test-heading">Start a Test</h2>
      <br>
      <br>
      <label class="selectorTxt" for="revision">Select a Test Topic: </label>
      <select class="selectorTxt" id="revision"v-model="selectedTopic">
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

.test-heading{
  font-family:nunito;
  width: 300px;
  justify-content: center;
  font-weight:600;
  font-size:30px;
  background-color:white;
  border-radius:35px;
  padding:10px;
  margin:20px;
  box-shadow: 10px 10px 5px black;
}

.selectorTxt{
    font-family:nunito;
    font-weight:600;
    font-size:20px;
    text-align:center;
}

.test-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

</style>

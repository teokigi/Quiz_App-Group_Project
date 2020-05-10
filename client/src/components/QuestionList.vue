<template lang="html">
  <div>
    <!-- <question-list-item v-for="question of selectedQuestions" :question="question" /> -->
    <form v-on:submit.prevent="handleSubmit()" class="formWrapper">
      <div class="firstQuestion">
          {{selectedQuestions[0].question}}<br>

          <input id="answer2" type="radio" name="drone" value="Insects" v-model="answers[0]">
          <label for="answer2">{{selectedQuestions[0].answers[0]}}</label><br>

          <input id="answer3" type="radio" name="drone" value="Mammals" v-model="answers[0]">
          <label for="answer3">{{selectedQuestions[0].answers[1]}}</label><br>

          <input id="answer4" type="radio" name="drone" value="Atmosphere" v-model="answers[0]">
          <label for="answer4">{{selectedQuestions[0].answers[2]}}</label><br>

          <input id="answer5" type="radio" name="drone" value="Plants" v-model="answers[0]">
          <label for="answer5">{{selectedQuestions[0].answers[3]}}</label><br>
      </div>

        <input type="submit"></input>

    </form>
  </div>
</template>

<script>
import QuestionListItem from '@/components/QuestionListItem.vue';

export default {
  name: 'question-list',
  props: ['selectedQuestions'],
  components: {
    'question-list-item': QuestionListItem
  },
  data(){
    return {
      answers: []
    }
  },
  methods:{
    handleSubmit(){
      console.log(this.selectedQuestions[0].correct_answer);
      console.log(this.answers[0]);
      if(this.selectedQuestions[0].correct_answer === this.answers[0]){
        console.log("Correct Answer!");
      }else{
        console.log("Incorrect Answer");
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>

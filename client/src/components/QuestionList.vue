<template lang="html">
  <div>
    <form v-on:submit.prevent="handleSubmit()" class="formWrapper" v-if="!completedTest">
      <div class="firstQuestion">
          {{topic.questions[0].question}}<br>
          <input id="answer1" type="radio" name="drone1" :value="topic.questions[0].answers[0]" v-model="answers[0]">
          <label for="answer1">{{topic.questions[0].answers[0]}}</label><br>
          <input id="answer2" type="radio" name="drone1" :value="topic.questions[0].answers[1]" v-model="answers[0]">
          <label for="answer2">{{topic.questions[0].answers[1]}}</label><br>
          <input id="answer3" type="radio" name="drone1" :value="topic.questions[0].answers[2]" v-model="answers[0]">
          <label for="answer3">{{topic.questions[0].answers[2]}}</label><br>
          <input id="answer4" type="radio" name="drone1" :value="topic.questions[0].answers[3]" v-model="answers[0]">
          <label for="answer4">{{topic.questions[0].answers[3]}}</label><br>
      </div>
      <br>
      <div class="secondQuestion">
          {{topic.questions[1].question}}<br>
          <input id="answer1" type="radio" name="drone2" :value="topic.questions[1].answers[0]" v-model="answers[1]">
          <label for="answer1">{{topic.questions[1].answers[0]}}</label><br>
          <input id="answer2" type="radio" name="drone2" :value="topic.questions[1].answers[1]" v-model="answers[1]">
          <label for="answer2">{{topic.questions[1].answers[1]}}</label><br>
          <input id="answer3" type="radio" name="drone2" :value="topic.questions[1].answers[2]" v-model="answers[1]">
          <label for="answer3">{{topic.questions[1].answers[2]}}</label><br>
          <input id="answer4" type="radio" name="drone2" :value="topic.questions[1].answers[3]" v-model="answers[1]">
          <label for="answer4">{{topic.questions[1].answers[3]}}</label><br>
      </div>
      <br>
      <div class="thirdQuestion">
          {{topic.questions[2].question}}<br>
          <input id="answer1" type="radio" name="drone3" :value="topic.questions[2].answers[0]" v-model="answers[2]">
          <label for="answer1">{{topic.questions[2].answers[0]}}</label><br>
          <input id="answer2" type="radio" name="drone3" :value="topic.questions[2].answers[1]" v-model="answers[2]">
          <label for="answer2">{{topic.questions[2].answers[1]}}</label><br>
          <input id="answer3" type="radio" name="drone3" :value="topic.questions[2].answers[2]" v-model="answers[2]">
          <label for="answer3">{{topic.questions[2].answers[2]}}</label><br>
          <input id="answer4" type="radio" name="drone3" :value="topic.questions[2].answers[3]" v-model="answers[2]">
          <label for="answer4">{{topic.questions[2].answers[3]}}</label><br>
      </div>
      <br>
      <div class="fourthQuestion">
          {{topic.questions[3].question}}<br>
          <input id="answer1" type="radio" name="drone4" :value="topic.questions[3].answers[0]" v-model="answers[3]">
          <label for="answer1">{{topic.questions[3].answers[0]}}</label><br>
          <input id="answer2" type="radio" name="drone4" :value="topic.questions[3].answers[1]" v-model="answers[3]">
          <label for="answer2">{{topic.questions[3].answers[1]}}</label><br>
          <input id="answer3" type="radio" name="drone4" :value="topic.questions[3].answers[2]" v-model="answers[3]">
          <label for="answer3">{{topic.questions[3].answers[2]}}</label><br>
          <input id="answer4" type="radio" name="drone4" :value="topic.questions[3].answers[3]" v-model="answers[3]">
          <label for="answer4">{{topic.questions[3].answers[3]}}</label><br>
      </div>
      <br>
      <div class="fifthQuestion">
          {{topic.questions[4].question}}<br>
          <input id="answer1" type="radio" name="drone5" :value="topic.questions[4].answers[0]" v-model="answers[4]">
          <label for="answer1">{{topic.questions[4].answers[0]}}</label><br>
          <input id="answer2" type="radio" name="drone5" :value="topic.questions[4].answers[1]" v-model="answers[4]">
          <label for="answer2">{{topic.questions[4].answers[1]}}</label><br>
          <input id="answer3" type="radio" name="drone5" :value="topic.questions[4].answers[2]" v-model="answers[4]">
          <label for="answer3">{{topic.questions[4].answers[2]}}</label><br>
          <input id="answer4" type="radio" name="drone5" :value="topic.questions[4].answers[3]" v-model="answers[4]">
          <label for="answer4">{{topic.questions[4].answers[3]}}</label><br>
      </div>
      <br>
      <input type="submit"></input>
    </form>
    <div v-if="completedTest">
      You've completed the test!
    </div>
  </div>
</template>

<script>
import QuestionListItem from '@/components/QuestionListItem.vue';
import {eventBus} from '@/main.js';

export default {
  name: 'question-list',
  props: ['topic', 'user'],
  components: {
    'question-list-item': QuestionListItem
  },
  data(){
    return {
      answers: [],
      completedTest: null
    }
  },
  methods:{
    handleSubmit(){
      const index = this.user.answerSet.findIndex(result => result.category === this.topic.category)
      for (let question of this.topic.questions){
        for(let answer of this.answers){
          if(question.correct_answer === answer){
            this.user.answerSet[index].correctAnswers ++;
            eventBus.$emit('update-answer', this.user)
          }else{
            this.user.answerSet[index].incorrectAnswers ++;
            eventBus.$emit('update-answer', this.user)
          };
        }
      }
      this.completedTest= 1
    }
  }
}
</script>

<style lang="css" scoped>
</style>

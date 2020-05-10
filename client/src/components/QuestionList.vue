<template lang="html">
  <div>
    <form v-on:submit.prevent="handleSubmit()" class="formWrapper" v-if="!completedTest">
      <div class="firstQuestion">
          {{topic.questions[0].question}}<br>
          <label v-for="answer of this.topic.questions[0].answers" >
              <input type="radio" name="drone0" v-model="answers[0]" v-bind:value="answer">
              {{answer}}<br>
          </label>
      </div>
      <br>
      <div class="secondQuestion">
          {{topic.questions[1].question}}<br>
          <label v-for="answer of this.topic.questions[1].answers" >
              <input type="radio" name="drone1" v-model="answers[1]" v-bind:value="answer">
              {{answer}}<br>
          </label>
      </div>
      <br>
      <div class="thirdQuestion">
          {{topic.questions[2].question}}<br>
          <label  v-for="answer of this.topic.questions[2].answers" >
              <input type="radio" name="drone2" v-model="answers[2]" v-bind:value="answer">
              {{answer}}<br>
          </label>
      </div>
      <br>
      <div class="fourthQuestion">
          {{topic.questions[3].question}}<br>
          <label  v-for="answer of this.topic.questions[3].answers" >
              <input type="radio" name="drone3" v-model="answers[3]" v-bind:value="answer">
              {{answer}}<br>
          </label>
      </div>
      <br>
      <div class="fifthQuestion">
          {{topic.questions[4].question}}<br>
          <label  v-for="answer of this.topic.questions[4].answers" >
              <input type="radio" name="drone4" v-model="answers[4]" v-bind:value="answer">
              {{answer}}<br>
          </label>
      </div>
      <br>
      <input type="submit">
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

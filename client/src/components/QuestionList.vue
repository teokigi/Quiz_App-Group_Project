<template lang="html">
  <div>
    <form v-on:submit.prevent="handleSubmit()" class="formWrapper" v-if="!completedTest">
        <div class="DRY" v-for="(question, qindex) of this.topic.questions">
            {{question.question}}<br>
            <label v-for="(answer, aindex) of question.answers">
                <input type="radio" :name="'drone'+ qindex" v-model="answers[qindex]" v-bind:value="answer">
                {{answer}}<br>
            </label>
        </div>
      <button type="submit">Submit Answers</button>
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
      completedTest: null,
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
button {
    margin:10px;
    font-family:nunito;
    font-weight:600;
    font-size:20px;
    border-radius:10px;
    background-color:lightblue;
    box-shadow:8px 8px 2px black;
}


</style>

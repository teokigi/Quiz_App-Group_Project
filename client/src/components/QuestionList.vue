<template lang="html">
  <div>
    <form v-on:submit.prevent="handleSubmit()" class="formWrapper" v-if="!completedTest">
        <div class="question" v-for="(question, qindex) of this.topic.questions">
            Q{{qindex+1}}. {{question.question}}<br>
            <label v-for="(answer, aindex) of question.answers" class="answerLabel">
                <input type="radio" :name="'drone'+ qindex" v-model="answers[qindex]" v-bind:value="answer" required>
                {{answer}}<br>
            </label>
        </div>
      <button type="submit">Submit Answers</button>
    </form>
    <div v-if="completedTest" class="formWrapper">
      Here are your results
      <div class="question" v-for="(question, qindex) of this.topic.questions">
          Q{{qindex+1}}. {{question.question}}<br>
          Correct Answer: {{question.correct_answer}}<br>
          Your Answer: <span :class="question.correct_answer === answers[qindex] ? 'correct':'incorrect'">{{answers[qindex]}}</span>
      </div>
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
.formWrapper{
    display:flex;
    flex-direction:column;
    align-items:center;
}
.question{
    margin:10px;
    padding:10px;
    text-align:left;
    width:40%;
    border-style:solid;
    border-radius:30px;
    background-color:lightblue;
    opacity:0.75;
}

button {
    margin:10px;
    font-family:nunito;
    font-weight:600;
    font-size:20px;
    border-radius:10px;
    background-color:lightblue;
    box-shadow:8px 8px 2px black;
}
.answerLabel:hover{
    color:blue;
}
.correct{
    background-color:lightgreen;
}
.incorrect{
    background-color:coral;
}

</style>

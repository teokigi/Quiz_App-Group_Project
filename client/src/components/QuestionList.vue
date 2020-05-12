<template lang="html">
  <div class="QL">
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
      <br>
      <button type="button" v-on:click="resetHandle"> Take another test!! </button>
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: 'question-list',
  props: ['topic', 'currentUser'],
  data(){
    return {
      answers: [],
      completedTest: null
    }
  },
  methods:{
    handleSubmit(){
      const questions = this.topic.questions
      const answerSet = this.currentUser.answerSet
        const index = answerSet.findIndex(result => result.category === this.topic.category)
        for (let i=0; i<questions.length ; i++){
          if (questions[i].correct_answer === this.answers[i]){
              answerSet[index].correctAnswers ++;
              eventBus.$emit('update-answer', this.currentUser)
          }else{
              answerSet[index].incorrectAnswers ++;
              eventBus.$emit('update-answer', this.currentUser)
          }
        }
        this.completedTest= 1
    },
    resetHandle(){
      this.answers= [];
      this.$emit('resetValues', 0)
    }
  }
}
</script>

<style lang="css" scoped>
.QL{
    height:75vh;
    overflow-y:scroll;
}
.formWrapper{
    display:flex;
    flex-direction:column;
    align-items:center;

}

.question{
    box-sizing:border-box;
    margin:10px;
    padding:5px;
    padding-left:10px;
    text-align:left;
    width:40%;
    border-style:solid;
    border-radius:20px;
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
input{
    cursor:inherit;
}
button:hover{
    cursor:inherit;
}
.answerLabel{
    font-size:15px;
}
.answerLabel:hover{
    color:blue;
    cursor:inherit;
}
.correct{
    background-color:lightgreen;
}
.incorrect{
    background-color:coral;
}

</style>

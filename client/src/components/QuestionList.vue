<template lang="html">
  <div>
    <!-- <question-list-item v-for="question of selectedQuestions" :question="question" /> -->
    <form>
        <div class="firstQuestion">
            {{selectedQuestions[0].question}}<br>

            <input id="answer1" type="radio" name="drone" value="correct">
            <label for="answer1">{{selectedQuestions[0].correct_answer}}</label>

            <input id="answer2" type="radio" name="drone" value="incorrect">
            <label for="answer2">{{selectedQuestions[0].answers[0]}}</label>

            <input id="answer3" type="radio" name="drone" value="incorrect">
            <label for="answer3">{{selectedQuestions[0].answers[1]}}</label>

            <input id="answer4" type="radio" name="drone" value="incorrect">
            <label for="answer4">{{selectedQuestions[0].answers[2]}}</label>

            <input id="answer5" type="radio" name="drone" value="incorrect">
            <label for="answer5">{{selectedQuestions[0].answers[3]}}</label>
        </div>
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
  }
}
</script>

<style lang="css" scoped>
</style>

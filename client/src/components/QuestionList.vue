<template lang="html">
  <div>
    <question-list-item v-for="question of selectedQuestions" :question="question" />
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

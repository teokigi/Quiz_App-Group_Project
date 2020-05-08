<template lang="html">
  <div>
    <question-list-item v-for="question of questionsInTopic" :question="question" />
  </div>
</template>

<script>
import QuestionListItem from '@/components/QuestionListItem.vue';

export default {
  name: 'question-list',
  props: ['questionsInTopic'],
  components: {
    'question-list-item': QuestionListItem
  }
}
</script>

<style lang="css" scoped>
</style>

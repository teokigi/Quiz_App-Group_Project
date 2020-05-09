<template lang="html">
  <div>
    <p>hello world</p>
  </div>
</template>

<script>
export default {
  name: 'question-list-item',
  data() {
    return {
      questions: []
    }
  },
  methods: {
    getQuestion() {
      return this.question.questions[0].question
    }
  },
  mounted() {
    eventBus.$on('user-login', (payload) => {
      TopicsService.getTopic(payload.selectedTopic)
      .then(result => this.questions.push(result))
    })
  }
}
</script>

<style lang="css" scoped>
</style>

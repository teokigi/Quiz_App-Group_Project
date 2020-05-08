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
      console.log(this.question.questions[0].question)
      return this.question.questions[0].question
    },
    eventBus.$on('user-login', (payload) => {
      TopicsService.getTopic(payload.selectedTopic)
      .then(result => this.questions.push(result))
      // TODO: Add code to get questions into questions Data Return!
    })
  }
}
</script>

<style lang="css" scoped>
</style>

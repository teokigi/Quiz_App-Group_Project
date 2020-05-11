<template lang="html">
  <div class="selectedStatsWrapper">

    <highcharts :options="chartOptions"></highcharts>

  </div>
</template>

<script>
import Stats from '@/components/Stats.vue';

export default {
  name: 'stats-chart',
  props: ['user'],
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'column'
        },
        title: {
          text: this.user.nickname + "'s Stats"
        },
        columns: [
            [null, this.user.answerSet[0].category, this.user.answerSet[1].category, this.user.answerSet[2].category],
            ['Correct', this.user.answerSet[0].correctAnswers, this.user.answerSet[1].correctAnswers, this.user.answerSet[2].correctAnswers],
            ['Incorrect', this.user.answerSet[0].incorrectAnswers, this.user.answerSet[1].incorrectAnswers, this.user.answerSet[2].incorrectAnswers]
        ]
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>

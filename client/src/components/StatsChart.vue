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
        yAxis: {
          title: {
            text:'Score'
          }
        },
        xAxis: {
          categories:[this.user.answerSet[0].category,this.user.answerSet[1].category,this.user.answerSet[2].category]
        },
            series: [{
              name:'Correct',
              data:[
                    {name:this.user.answerSet[0].category,y:this.user.answerSet[0].correctAnswers},
                    {name:this.user.answerSet[1].category,y:this.user.answerSet[1].correctAnswers},
                    {name:this.user.answerSet[2].category,y:this.user.answerSet[2].correctAnswers}
              ],
              color:'#5ca230'
            },
            {
              name:'Incorrect',
              data:[
                {name:this.user.answerSet[0].category,y:this.user.answerSet[0].incorrectAnswers},
                {name:this.user.answerSet[1].category,y:this.user.answerSet[1].incorrectAnswers},
                {name:this.user.answerSet[2].category,y:this.user.answerSet[2].incorrectAnswers},
              ],
              color:'#f18a1a'
            }
          ]
      }
    }
  }
}

</script>

<style lang="css" scoped>
.selectedStatsWrapper{
    margin:30px;
}
</style>

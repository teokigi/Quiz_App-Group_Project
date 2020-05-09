<template lang="html">
  <div class="statsWrapper">
  <div class="site-name">
    Test Complete!
  </div>
</div>
</template>


<script>
import {eventBus} from '@/main.js';
import QuestionService from '@/services/QuestionsSservice.js';

export default {
  score: [],
  props: ['questions'],
    data() {
      return {
      selected: null
    }
  },
  components: {
    'stats-chart': StatsChart
  },
  methods: {
    statsSelected() {
      eventBus.$emit('stats-selected', this.selectedStats)
    }
  },
  mounted() {
    StatsService.getStats()
    .then(stats => this.stats = stats)
  }
}
</script>

<style lang="css" scoped>

</style>

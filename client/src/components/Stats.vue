<template lang="html">
  <div class="statsWrapper">
  <div class="site-name">
    Test Complete!
    <stats-chart />
  </div>
</div>
</template>


<script>
import {eventBus} from '@/main.js';
import StatsChart from '@/components/StatsChart.vue'

export default {
  props: ['stats'],
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
  }
}
</script>

<style lang="css" scoped>

</style>

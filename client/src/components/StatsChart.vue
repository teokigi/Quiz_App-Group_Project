<template lang="html">
  <div class="selectedStatsWrapper">
    <div class="chartHeading">
    {{selectedTopic.stats}}
  </div>
  <div class="chartBody">
    <p>Your Score!</p>
    </div>
  </div>
</template>

<script>
import Stats from '@/components/Stats.vue';

export default {
  name: 'stats-chart',
  props: ['selectedPlaceholder']

}
</script>

<style lang="css" scoped>
</style>

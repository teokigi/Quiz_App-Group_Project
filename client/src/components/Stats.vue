<template lang="html">
  <div class="statsWrapper">
    <stats-chart v-if="currentUser" :currentUser="currentUser" />
  </div>
</template>


<script>
import StatsChart from '@/components/StatsChart.vue';

export default {
  name: 'stats',
  props: ['users', 'currentUser'],
  components: {
    'stats-chart': StatsChart
  }
}
</script>

<style lang="css" scoped>

</style>

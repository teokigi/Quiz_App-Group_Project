<template lang="html">
  <div class="statsWrapper">

    <div v-if="!selectedUser">
      <label for="revision">Select a User: </label>
      <select id="revision" v-model="selectedUser">
        <option disabled value="">select a user</option>
        <option v-for="user of users" :value="user">{{user.nickname}}</option>
      </select>
    </div>
    <stats-chart v-if="selectedUser" :user="selectedUser" />
  </div>
</template>


<script>
import StatsChart from '@/components/StatsChart.vue';

export default {
  name: 'stats',
  props: ['users'],
  components: {
    'stats-chart': StatsChart
  },
  data() {
    return {
      selectedUser: null
    }
  }
}
</script>

<style lang="css" scoped>

</style>

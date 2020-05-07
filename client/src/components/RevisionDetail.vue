<template lang="html">
  <div class="selected-topic">
    <h2>{{selectedTopic.category}}</h2>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: 'revision-detail',
  props: ['selectedTopic']
}
</script>

<style lang="css" scoped>
</style>

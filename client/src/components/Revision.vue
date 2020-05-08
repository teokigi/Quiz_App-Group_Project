<template lang="html">
  <div class="">
    <h2>Revise</h2>
    <label for="revision">Select a Topic: </label>
    <select id="revision" v-on:change="topicSelected" v-model="selectedTopic">
      <option disabled value="">select a topic...</option>
      <option v-for="topic of topics" :value="topic">{{topic.category}}</option>
    </select>
    <revision-detail v-if="selectedTopic" :selectedTopic="selectedTopic" />
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import RevisionService from '@/services/RevisionService.js';
import RevisionDetail from '@/components/RevisionDetail.vue';

export default {
  name: 'revision',
  props: ['categories'],
  data() {
    return {
      selectedTopic: null,
      topics: []
    }
  },
  components: {
    'revision-detail': RevisionDetail
  },
  methods: {
    topicSelected() {
      eventBus.$emit('topic-selected', this.selectedTopic)
    }
  },
  mounted() {
    RevisionService.getTopics()
    .then(topics => this.topics = topics)
  }
}
</script>

<style lang="css" scoped>
</style>

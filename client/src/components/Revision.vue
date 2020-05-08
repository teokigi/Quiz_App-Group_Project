<template lang="html">

    <div class="revisionWrapper">

        <div class="revisionSelector" v-if="!selectedTopic">
            <h2>Do Some Revision?</h2>
            <label for="revision">Select a Revision Topic: </label>
            <select name="revision" v-on:change="topicSelected" v-model="selectedTopic">
                <option disabled value="">select a topic...</option>
                <option v-for="topic of topics" :value="topic">{{topic.category}}</option>
            </select>
        </div>

        <div class="revisionSelectedWrapper"v-if="selectedTopic" >
            <button type="button" v-on:click="selectedTopic= null" >Return To Topic Selector</button>
            <revision-detail :selectedTopic="selectedTopic" />
        </div>

    </div>
</template>

<script>
import {eventBus} from '@/main.js';
import TopicsService from '@/services/TopicsService.js';
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
    TopicsService.getTopics()
    .then(topics => this.topics = topics)
  }
}
</script>

<style lang="css" scoped>
.revisionWrapper{
    width:100%;
    height:500px;
    display:flex;
    flex-direction:column;
    align-items:center;
}
.revisionSelectedWrapper{
    width:100%;
    height:500px;
    display:flex;
    flex-direction:column;
    align-items:center;
}
.revisionTopic{
}
</style>

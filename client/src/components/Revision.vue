<template lang="html">

    <div class="revisionWrapper">

        <div class="revisionSelector" v-if="!selectedTopic">
            <div class="revisionHeading">
                Care To study something new?
            </div>
            <div>
                <label for="revision" class="selectorTxt">Select a Revision Topic: </label>
                <select class="selectorTxt" name="revision" v-on:change="topicSelected" v-model="selectedTopic">
                    <option disabled value="">select a topic...</option>
                    <option v-for="topic of topics" :value="topic">{{topic.category}}</option>
                </select>
            </div>
        </div>

        <div class="revisionSelectedWrapper"v-if="selectedTopic" >
            <revision-detail :selectedTopic="selectedTopic" />
            <button class="returnButton" type="button" v-on:click="selectedTopic= null" >Return To Topic Selector</button>
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
.revisionHeading{
    font-family:nunito;
    text-align:center;
    font-weight:600;
    font-size:30px;
    background-color:white;
    border-radius:35px;
    padding:10px;
    margin:20px;
    box-shadow: 10px 10px 5px black;
}
.revisionSelectedWrapper{
    width:100%;
    height:500px;
    display:flex;
    flex-direction:column;
    align-items:center;
}
.selectorTxt{
    font-family:nunito;
    font-weight:600;
    font-size:20px;
    text-align:center;
}
.returnButton{
    margin:10px;
    align-self:flex-end;
    margin-right:100px;
    font-family:nunito;
    font-weight:600;
    font-size:20px;
    text-align:center;
    border-radius:10px;
    background-color:lightblue;
    box-shadow:5px 5px 10px black;
}
</style>

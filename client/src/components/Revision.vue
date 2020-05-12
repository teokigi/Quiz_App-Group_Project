<template lang="html">

    <div class="revisionWrapper">

        <div class="revisionSelector" v-if="!selectedTopic">
            <div class="revisionHeading">
                Care To study something new {{currentUser.nickname}}?
            </div>
            <div>
                <label for="revision" class="selectorTxt">Select a Revision Topic: </label>
                <select class="selectorTxt" name="revision" v-model="selectedTopic">
                    <option disabled value="">select a topic...</option>
                    <option v-for="topic of topics" :value="topic">{{topic.category}}</option>
                </select>
            </div>
        </div>

        <div class="revisionSelectedWrapper"v-if="selectedTopic" >
            <revision-detail :selectedTopic="selectedTopic" @nullTopic="nullTopic"/>
        </div>

    </div>
</template>

<script>

import RevisionDetail from '@/components/RevisionDetail.vue';

export default {
  name: 'revision',
  props: ['topics', 'currentUser', 'authenticated'],
  data() {
    return {
      selectedTopic: null
    }
  },
  components: {
    'revision-detail': RevisionDetail
  },
  methods: {
    nullTopic(nullNum){
        this.selectedTopic=nullNum
    }
  },
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

</style>

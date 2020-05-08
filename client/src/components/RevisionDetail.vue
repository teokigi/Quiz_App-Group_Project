<template lang="html">
  <div class="selectedRevisionWrapper">
    <div class="detailHeading">
    {{selectedTopic.category}}
    </div>
    <div class="detailBody">
    <p>Learn everything you'll need for the test here!</p>
    <iframe :src="selectedTopic.youtubeURL" width="680" height="420" />
    </div>
  </div>
</template>

<script>
import Revision from '@/components/Revision.vue';

export default {
  name: 'revision-detail',
  props: ['selectedTopic']

}
</script>

<style lang="css" scoped>
.selectedRevisionWrapper{
    width:100%;
}
.detailHeading{
    width:100%;
    font-size:40px;
}
.selected-topic{
    width:100%;

}
</style>

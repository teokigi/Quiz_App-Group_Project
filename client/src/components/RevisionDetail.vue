<template lang="html">
  <div class="selectedRevisionWrapper">
    <div class="detailTxt">
        <div class="detailTxtHeading">
            {{selectedTopic.category}}
        </div>
        <div class="detailTxtSummary">
            <p>The learning resource to the right will give you all the information you need to ace our test!!</p>
        </div>
    </div>
    <div class="detailVid">
    <iframe :src="selectedTopic.youtubeURL" allowfullscreen/>
    <button class="returnButton" type="button" v-on:click="revDetButtonHandle" >Return To Topic Selector</button>
    </div>
  </div>
</template>

<script>
import Revision from '@/components/Revision.vue';
import {eventBus} from '@/main.js';

export default {
  name: 'revision-detail',
  props: ['selectedTopic'],
  methods:{
      revDetButtonHandle(){
      this.$emit('nullTopic', 0)
  }
  }

}
</script>

<style lang="css" scoped>
.selectedRevisionWrapper{
    width:100%;
    height:100%;
    margin:10px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
}
.detailTxt{
    padding:20px;
    text-align:center;
    width:300px;
    height:100%;
}
.detailTxtHeading{
    background-color:black;
    color:white;
    text-shadow:0px 0px 4px black;
    margin-top:10px;

    font-family:nunito;
    font-weight:600;
    font-size:28px;
    letter-spacing:3px;

    border-radius:30px;
    box-shadow: 10px 10px 16px black;
}
.detailTxtSummary{
    font-family:nunito;
    font-weight:600;
    font-size:20px;
    text-align:left;

}
.detailVid{
    width:100%;
    height:100%;
    padding:20px;
    text-align:right;
}
iframe{
    width:100%;
    height:65vh;
}
.vidFrame{
    box-shadow: 10px 10px 16px black;
}
.selected-topic{
    width:100%;
}
.returnButton{
    margin:10px;
    font-family:nunito;
    font-weight:600;
    font-size:20px;
    border-radius:10px;
    background-color:lightblue;
    box-shadow:8px 8px 2px black;
}
video{
     width:100% ;
     height: auto;

}
</style>

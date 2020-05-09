<template lang="html">
  <div class="selectedRevisionWrapper">
    <div class="detailTxt">
        <div class="detailTxtHeading">
            {{selectedTopic.category}}
        </div>
        <div class="detailTxtSummary">
            <p>Learning resource to the right will give you all the information you need to ace our test!!</p>
        </div>
    </div>
    <div class="detailVid">
    <iframe class="vidFrame":src="selectedTopic.youtubeURL" width="960" height="540" />
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
    width:90%;
    margin:10px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
}
.detailTxt{
    text-align:center;
    width:50%;
}
.detailTxtHeading{
    background-color:black;
    color:white;
    text-shadow:0px 0px 4px black;
    margin-top:10px;

    font-family:nunito;
    font-weight:600;
    font-size:40px;
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
    margin-left:50px;
    padding:5px;
}
.vidFrame{
    box-shadow: 10px 10px 16px black;
}
.selected-topic{
    width:100%;

}
</style>

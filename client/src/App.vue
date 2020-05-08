<template lang="html">
  <body id="app">
    <div class="pageHeader">
      <page-header />
    </div>
    <div class="body">
      <revision v-if="viewSelector === 1" />
      <quiz v-if="viewSelector === 2" />
      <stats v-if="viewSelector === 3" />
    </div>
</body>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import {eventBus} from '@/main.js';
import Quiz from '@/components/Quiz.vue';
import Revision from '@/components/Revision.vue';
import Stats from '@/components/Stats.vue';

export default {
  name: 'app',
  components: {
    'page-header': PageHeader,
    'quiz': Quiz,
    'revision': Revision,
    'stats': Stats
  },
  data() {
    return {
      viewSelector: 0
    }
  },
  mounted() {
    eventBus.$on('selected-nav-revision', (navNumber) => {
      this.viewSelector = navNumber
    })
    eventBus.$on('selected-nav-quiz', (navNumber) => {
      this.viewSelector = navNumber
    })
    eventBus.$on('selected-nav-stats', (navNumber) => {
      this.viewSelector = navNumber
    })
  }
}
</script>

<style lang="css" scoped>
#app{
    width:100%;
    height:700px;
    display:flex;
    flex-direction:column;
    box-sizing:border-box;


    padding:0px;
    margin:0px;

    border-style:solid;
    border-radius:40px;
    border-width:thin;
    background-image: linear-gradient(-45deg,red, yellow);
    background-repeat:no-repeat;


}
.pageHeader{

}
.body{
    width:100%;
}
div{
    border-style:solid;
    border-width:thin;
}
</style>

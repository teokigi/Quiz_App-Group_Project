<template lang="html">
  <div>
    <section>
      <page-header />
    </section>
    <div class="body">
      <revision v-if="viewSelector === 1" />
      <test-page v-if="viewSelector === 2" />
      <stats v-if="viewSelector === 3" />
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import {eventBus} from '@/main.js';
import TestPage from '@/components/TestPage.vue';
import Revision from '@/components/Revision.vue';
import Stats from '@/components/Stats.vue';

export default {
  name: 'app',
  components: {
    'page-header': PageHeader,
    'test-page': TestPage,
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
    eventBus.$on('selected-nav-test', (navNumber) => {
      this.viewSelector = navNumber
    })
    eventBus.$on('selected-nav-stats', (navNumber) => {
      this.viewSelector = navNumber
    })
  }
}
</script>

<style lang="css" scoped>
body{
    background-color:grey;
}
div{
    border-style:solid;
    border-radius:20px;
    margin:5px;
    padding:5px;
}
</style>

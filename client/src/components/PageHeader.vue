<template lang="html">
  <div class="headWrapper">
  <div class="site-name">
      A-ducation Programmed Interface // Web End Ed // Webucation testing
    </div>

  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: 'page-header'
}
</script>

<style lang="css" scoped>
.headWrapper{
    width:100%;
    height:150px;
    box-sizing:border-box;
    text-align:center;
    display:flex;
    justify-content:space-around;
    background-color:black;
    color:white;
    text-shadow: 0px 0px 4px red, 2px 2px 8px white;
}
.site-name{
    font-weight:800;
    font-size:30px;
}
</style>

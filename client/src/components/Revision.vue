<template lang="html">
  <div class="">
    <h2>Revise</h2>
    <label for="revision">Select a Topic:</label>
    <select id="revision" v-on:change="topicSelected" v-model="selectedTopic">
      <option disabled value="">select a topic...</option>
      <option v-for="category in "></option>
    </select>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>

<template lang="html">
  <div class="">


    <div v-if="!selectedUser">
      <h2>Start a Test</h2>
      <label for="revision">Select a User: </label>
      <select id="revision" v-model="selectedUser">
        <option disabled value="">select a user</option>
        <option v-for="user of users" :value="user">{{user.nickname}}</option>
      </select>
    </div>
    <div v-if="selectedUser&&!selectedTopic">
      <h2>Start a Test</h2>
      <label for="revision">Select a Test Topic: </label>
      <select id="revision"v-model="selectedTopic">
        <option disabled value="">select a topic...</option>
        <option v-for="topic of topics" :value="topic">{{topic.category}}</option>
      </select>
    </div>

    <question-list v-if="selectedTopic" :topic="selectedTopic" :user="selectedUser" @resetValues="resetValues" @updateAnswer="updateAnswer"/>

  </div>
</template>

<script>
import QuestionList from '@/components/QuestionList.vue';

import TopicsService from '@/services/TopicsService.js';
import UsersService from '@/services/UsersService.js';


export default {
  name: 'test-page',
  data() {
    return {
      selectedTopic: null,
      selectedUser: null,
      topics: null,
      users: null
    }
  },
  mounted(){
      TopicsService.getTopics()
      .then(topics => this.topics = topics)

      UsersService.getUsers()
      .then(users => this.users = users)

    },

  components: {
    'question-list': QuestionList
    },
    methods:{
        resetValues(resVal){
            this.selectedUser = this.selectedTopic = resVal;
        },
        updateAnswer(user) {
            const payload = {
                answerSet: user.answerSet
            }
            UsersService.updateUser(user._id, payload)
        },
    }
}
</script>

<style lang="css" scoped>
</style>

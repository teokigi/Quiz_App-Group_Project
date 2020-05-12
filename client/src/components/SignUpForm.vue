<template lang="html">
  <div>
    <div>
      <h3>Create a New Account?</h3>
      <form id="new-user-form" v-on:submit.prevent="onSubmit()">
        <label for="nickname-field">Nickname: </label>
        <input required type="text" id="nickname-field" v-model="newUser">
        <br>
        <label for="emailAddress-field">Email Address: </label>
        <input required type="email" id="emailAddress-field" v-model="newEmailAddress">
        <br>
        <label for="password-field">Password: </label>
        <input required type="password" v-model="newPassword">
        <br>
        <button type="submit"> Create Account </button>
      </form>
    </div>

    <div>
      <h3>Login Here</h3>
      <form id="login-form" v-on:submit.prevent="onLogin()">
        <label for="emailAddress-login">Email Address: </label>
        <input required type="email" id="emailAddress-login" v-model="loginEmailAddress">
        <br>
        <label for="password-login">Password: </label>
        <input required type="password" v-model="loginPassword">
        <br>
        <button type="submit"> Login </button>
      </form>
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: 'sign-up-form',
  data() {
    return {
      newUser: null,
      newEmailAddress: null,
      newPassword: null,
      listView: false,
      loginEmailAddress: null,
      loginPassword: null
    }
  },
  methods: {
    onLogin() {
      const payload = {
        emailAddress: this.loginEmailAddress,
        password: this.loginPassword
      }
      eventBus.$emit('user-login', payload)
    },
    onSubmit() {
      const payload = {
        nickname: this.newUser,
        emailAddress: this.newEmailAddress,
        password: this.newPassword,
        answerSet:[
            {category:"Biology: The Ecosystem",
            correctAnswers:0,
            incorrectAnswers:0},
            {category:"Language: Japanese",
            correctAnswers:0,
            incorrectAnswers:0},
            {category:"Classical Studies: The Odyssey",
            correctAnswers:0,
            incorrectAnswers:0}
          ]
        }
      eventBus.$emit('new-user', (payload))
    }
  }
}
</script>

<style lang="css" scoped>
</style>

<template lang="html">
  <div class="login-page">
    <div class="new-user-form" v-if="!authenticated">
      <h3>Create a New Account?</h3>
      <form class="boxes" id="new-user-form" v-on:submit.prevent="onSubmit()">
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

    <div class="login-user-form" v-if="!authenticated">
      <h3>Login Here</h3>
      <form class="boxes" id="login-form" v-on:submit.prevent="onLogin()">
        <label for="emailAddress-login">Email Address: </label>
        <input required type="email" id="emailAddress-login" v-model="loginEmailAddress">
        <br>
        <label for="password-login">Password: </label>
        <input required type="password" v-model="loginPassword">
        <br>
        <button type="submit"> Login </button>
      </form>
    </div>

    <div v-if="authenticated">
      <h3>Welcome {{currentUser.nickname}}!</h3>
    </div>

  </div>
</template>


<script>
import {eventBus} from '@/main.js';

export default {
  name: 'sign-up-form',
  props: ['authenticated', 'currentUser'],
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
      this.loginEmailAddress = this.loginPassword = null
    },
    onSubmit() {
      const payload = {
        nickname: this.newUser,
        emailAddress: this.newEmailAddress,
        password: this.newPassword,
        answerSet:[
            {
              category:"Biology: The Ecosystem",
              correctAnswers:0,
              incorrectAnswers:0
            },
            {
              category:"Language: Japanese",
              correctAnswers:0,
              incorrectAnswers:0
            },
            {
              category:"Classical Studies: The Odyssey",
              correctAnswers:0,
              incorrectAnswers:0
            }
          ]
        }
      eventBus.$emit('new-user', (payload))
      this.newUser = this.newEmailAddress = this.newPassword = null
    }
  }
}
</script>

<style lang="css" scoped>

.login-page {
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
  align-items: bas;
}

button {
  margin:10px;
  font-family:nunito;
  font-weight:600;
  font-size:20px;
  border-radius:10px;
  background-color:lightblue;
  box-shadow:8px 8px 2px black;
}

.new-user-form {
  font-family:nunito;
  width: 500px;
  justify-content: center;
  font-weight:600;
  font-size:25px;
  background-color: #d8d8d8;
  border-radius:35px;
  padding:10px;
  margin:20px;
  box-shadow: 10px 10px 5px black;
  opacity: 0.9;
}

.login-user-form {
  font-family:nunito;
  width: 500px;
  height: 320px;
  justify-content: center;
  font-weight:600;
  font-size:25px;
  background-color: #d8d8d8;
  border-radius:35px;
  padding:10px;
  margin:20px;
  box-shadow: 10px 10px 5px black;
  opacity: 0.9;
}

.boxes {
  width: 400px;
  text-align: right;
}

input {
  font-size:20px;
}

</style>

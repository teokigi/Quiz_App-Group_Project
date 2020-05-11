<template lang="html">
  <div class="loginWrapper">
    <div class="form">
      <h3>New User</h3>
      <form id="new-user-form" v-on:submit.prevent="onSubmit()">
        <label for="nickname-field">Nickname: </label>
        <input required type="text" id="nickname-field" v-model="newUser">
        <br>
        <label for="emailAddress-field">E-mail Address: </label>
        <input required type="email" id="emailAddress-field" v-model="newEmailAddress">
        <br>
        <label for="password-field">Password: </label>
        <input required type="password" v-model="newPassword">
        <br>
        <button type="submit"> Sign-up</button>
      </form>
    </div>

    <div class="form">
      <h3>Login In</h3>
      <form id="login-form" v-on:submit.prevent="onLogin()">
        <label for="emailAddress-login">E-mail address : </label>
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
import UsersService from '@/services/UsersService.js';

export default {
  name: 'login-form',
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
        loginEmailAddress: this.loginEmailAddress,
        loginPassword: this.loginPassword
      }
      UsersService.verify(payload)
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
      UsersService.postUser(payload)
    }
  }
}
</script>

<style lang="css" scoped>
h3{
    text-align:center;
}
.form{
    padding:10px;
    border-style:solid;
    border-radius:20px;
    text-align:right;
}
.loginWrapper{
    width:60%;
    align-self:center;
    padding:30px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
}
button {
    margin:5px;
    font-family:nunito;
    font-weight:600;
    font-size:20px;
    border-radius:10px;
    background-color:lightblue;
    box-shadow:8px 8px 2px black;
}
</style>

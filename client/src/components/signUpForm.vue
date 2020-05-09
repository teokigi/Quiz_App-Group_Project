<template lang="html">
  <div>
    <form id="username-form" v-on:submit.prevent="onSubmit()">
      <label for="nickname-field">Nickname: </label>
      <input required type="text" id="nickname-field" v-model="user">
      <br>
      <label for="emailAddress-field">Email Address: </label>
      <input required type="email" id="emailAddress-field" v-model="emailAddress">
      <br>
      <label for="password-field">Password: </label>
      <input required type="password" v-model="password">
      <br>
      <button type="submit"> Continue </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'sign-up-form',
  data() {
    return {
      user: null,
      emailAddress: null,
      password: null,
      listView: false
    }
  },
  mounted() {
    onSubmit() {
      eventBus.$emit('new-user', (payload))
    }
  }
}
</script>

<style lang="css" scoped>
</style>

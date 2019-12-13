<template>
  <form v-on:submit='submitForm'>
    <div>
      <label for="username">id:</label>
      <input id="username" type="text" v-model='username'>
    </div>
    <div>
      <label for="password">pw:</label>
      <input id="password" type="text" v-model='password'>
    </div>
    <button type='submit'>LOGIN</button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitForm: function() {
      console.log(this.username)
      //console.log(this.username, this.password);
    }
  }
}
</script>

<style>

</style>
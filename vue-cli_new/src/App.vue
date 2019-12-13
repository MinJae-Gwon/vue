<template>
  <div>
    <app-header 
    v-bind:propsdata="str"
    v-on:renew='renewString'
    ></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
  data: function()  {
    return {
      str: 'header'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewString: function() {
      if(this.str =='hi')
      {
        this.str = 'header'
      }
      else
      {
        this.str = 'hi'
      }
      
    }
  }
}
</script>

<style>

</style>
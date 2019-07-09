<template>
  <!-- template root는 단 1개!!, div 두개 동시는 안됨 -->
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header
     v-bind:propsdata="str"
     v-on:renew="reNewStr"></app-header>
  </div>
</template>

<script>
//확장자도 붙어주면 안깨짐
import AppHeader from './components/AppHeader.vue';

export default {
  data: function() {
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader,
  },
  methods: {
    reNewStr: function() {
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>

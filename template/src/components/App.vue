<template>
  <section class="app">
    <img src="../assets/img/logo.png">
    <div class="nav">
      <router-link :to="{ name: 'index', params: { userId: 123 }}">index</router-link>
      <router-link :to="{ path : '/error'}">404</router-link>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
import store from '../common/store';
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  created(){
    console.log('created')
  },
  mounted(){
    
  }
}
</script>

<style lang="less" scoped>
  .app{
    font-size: 0.18rem;
    text-align: center;
    .nav{
      display: flex;
      justify-content: space-around;
    }
  }
</style>

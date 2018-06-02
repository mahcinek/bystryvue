<template>
  <div id="app">
    <!--<navigationBar></navigationBar>-->
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router/index';
import navigationBar from './components/NavigationBar';

export default {
  name: 'App',
  router,
  components: {
    navigationBar,
  },
};
</script>

<style>
</style>

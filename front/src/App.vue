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
  /*@media screen and (min-width: 600px) {*/
    /*#app{*/
      /*width: 80%;*/
      /*margin: auto;*/
    /*}*/
  /*}*/
  /*@media screen and (min-width: 800px) {*/
    /*#app{*/
      /*width: 650px;*/
      /*margin: auto;*/
    /*}*/
  /*}*/
  /*@media screen and (min-width: 1200px) {*/
    /*#app{*/
      /*width: 800px;*/
      /*margin: auto;*/
    /*}*/
  /*}*/
  #app{ /* krótksza wersja */
    max-width: 800px;
    margin: auto;
  }
  body{
    background-color: #004d40;
  }
  /*
  #00897B
  #00796b
  #00695c
  #004d40
  */

</style>

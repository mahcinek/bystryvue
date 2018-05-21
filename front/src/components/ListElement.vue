<template>
  <router-link to="/Map" tag="div" class="listElement">
    <span class="header">{{name}}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    name: String,
    img: String,
  },
};
</script>

<style>
  .listElement{
    width: 100%;
    height: 33%;
    background-color: #00c853;
    border: black solid 1px;
    vertical-align: middle;
    text-align: center;

  }
  .header{
    font-size: 22px;
    vertical-align: bottom;
    display: inline-block;
  }


</style>

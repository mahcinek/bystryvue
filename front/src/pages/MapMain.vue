<template>

  <q-page>
    <GmapMap
  :center="{lat:51.000708, lng:16.753288}"
  :zoom="12"
  map-type-id="terrain"
  style="
    width: 100%;
    height: 100%;
    position: absolute;
    fullscreen: true"
>
</GmapMap>
</q-page>
</template>

<script>
export default {
  name: 'mapMain',
  created(){
    this.$store.state.example.showBtn = true;
    this.$store.state.example.pageTitle = 'Mapa';
  }
};
</script>

<style scoped>

</style>

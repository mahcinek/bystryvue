<template>

  <q-page fullscreen>
  <GmapMap
  :center="{lat:51.000708, lng:16.753288}"
  :zoom="12"
  map-type-id="terrain"
  style="
    width: 100%;
    height: calc(100% - 40px);
    position: fixed;
    bottom: 0px;
    "
>
    <GmapMarker
      :position="{lat:51.000708, lng:16.753288}"
      :clickable="true"
      @click="consoleLog"
    />
</GmapMap>
</q-page>
</template>

<script>
export default {
  name: 'mapMain',
  created(){
    this.$store.state.example.showBtn = true;
    this.$store.state.example.pageTitle = 'Mapa';
    this.$store.state.example.isMapPage = true;
  },
  methods:{
    consoleLog: function(){
      console.log("Klikniete");
    }
  },
  beforeDestroy(){
    this.$store.state.example.isMapPage=  false;
  }


};

</script>

<style scoped>


</style>

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
      :position="{lat:navigationPoint[0], lng:navigationPoint[1]}"
      :clickable="true"
      @click="consoleLog"
    />
</GmapMap>
</q-page>
</template>

<script>
export default {
  data() {
        return{ 
          navigationPoint: [0.1, 0.1],
          navigationType: '',
          navigationArray: [[0.0, 0.0], [0.1, 0.1]]
        }
      },
  name: 'Navigation',
  created(){
    this.$store.state.example.showBtn = true;
    this.$store.state.example.pageTitle = 'Nawigacja';
    this.navigationArray = this.$store.state.example.navigationArr;
    this.navigationType = this.$store.state.example.navigationType
    this.navigationPoint = this.$store.state.example.navigationLongLat
  },
  methods:{
    consoleLog: function(){
      console.log("Klikniete");
    }
  }


};

</script>

<style scoped>


</style>

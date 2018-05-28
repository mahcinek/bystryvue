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
    ">
   <gmap-info-window
                        :options="infoWindowOptions"
                        :position="infoWindowPosition"
                        :opened="infoWindowOpen"
                        @closeclick="infoWindowOpen=false"
   >{{infoWindowContent}}
   </gmap-info-window>
    <GmapMarker v-for="marker in monumentsMarkers"
                :position="marker.position"
                :clickable="true"
                :visible="monumentsMarkersFlag"
                @click="toggleInfoWindow(marker)"
                :icon="'../assets/markers/palace-2.png'"
    />
    <GmapMarker v-for="marker in natureMarkers"
                :position="marker.position"
                :clickable="true"
                :visible="natureMarkersFlag"
                @click="toggleInfoWindow(marker)"
                :icon="'../assets/markers/tree.png'"
    />
    <GmapMarker v-for="marker in touristMarkers"
                :position="marker.position"
                :clickable="true"
                :visible="touristMarkersFlag"
                @click="toggleInfoWindow(marker)"
                :icon="'../assets/markers/restaurant.png'"
    />

</GmapMap>
</q-page>
</template>

<script>
export default {
  name: 'mapMain',
  data() {
    return {
      monumentsMarkers: [
        {name: 'Pałac',position: {lat:51.000708, lng:16.773288}},
      ],
      natureMarkers: [
        {name: 'Przebiśnieg',position: {lat:51.011308, lng:16.783288}}
        ],
      touristMarkers: [
        {name: 'Karczma Rzym',position: {lat:51.020008, lng:16.793288}}
        ],
      infoWindowContent: '',
      infoWindowPosition: {lat:51.000708, lng:16.753288},
      infoWindowOpen: false,
      infoWindowOptions: {
        pixelOffset: {
          width: 0,
          height: -30
        }
      }
    }
  },
  computed:{
    monumentsMarkersFlag: function () {
      return this.$store.state.example.monumentsMarkersFlag;
    },
    natureMarkersFlag: function () {
      return this.$store.state.example.natureMarkersFlag;
    },
    touristMarkersFlag: function () {
      return this.$store.state.example.touristMarkersFlag;
    }
  },
  methods:{
    toggleInfoWindow: function(marker){
      this.infoWindowContent = marker.name;
      if(this.infoWindowPosition.lng === marker.position.lng
        && this.infoWindowPosition.lat === marker.position.lat){
        this.infoWindowOpen = !this.infoWindowOpen;
      }
      else{
        this.infoWindowOpen = true;
      }
      this.infoWindowPosition.lat = marker.position.lat;
      this.infoWindowPosition.lng = marker.position.lng;
    }
  },
  created(){
    this.$store.state.example.showBtn = true;
    this.$store.state.example.pageTitle = 'Mapa';
    this.$store.state.example.isMapPage = true;
    this.$store.state.example.isNavigation = false;
  },
  beforeDestroy(){
    this.$store.state.example.isMapPage = false;
  }
};

</script>

<style scoped>

</style>

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
                  :key="marker.id"
                  :position="{lat: marker.dlugosc_geograficzna, lng: marker.szerokosc_geograficzna}"
                  :clickable="true"
                  :visible="monumentsMarkersFlag"
                  @click="toggleInfoWindow(marker)"
                  :icon="'../statics/markers/palace-2.png'"
      />
      <GmapMarker v-for="marker in natureMarkers"
                  :key="marker.id"
                  :position="{lat: marker.dlugosc_geograficzna, lng: marker.szerokosc_geograficzna}"
                  :clickable="true"
                  :visible="natureMarkersFlag"
                  @click="toggleInfoWindow(marker)"
                  :icon="'../statics/markers/tree.png'"
      />
      <GmapMarker v-for="marker in touristMarkers"
                  :key="marker.id"
                  :position="{lat: marker.dlugosc_geograficzna, lng: marker.szerokosc_geograficzna}"
                  :clickable="true"
                  :visible="touristMarkersFlag"
                  @click="toggleInfoWindow(marker)"
                  :icon="'../statics/markers/restaurant.png'"
      />

  </GmapMap>
</q-page>
</template>

<script>
  export default {
    name: 'mapMain',
    data() {
      return {
        infoWindowContent: '',
        infoWindowPosition: {
          lat:51.000708,
          lng:16.753288},
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
      },
      monumentsMarkers: function () {
        return this.$store.state.example.monumentsMarkers;
      },
      natureMarkers: function () {
        return this.$store.state.example.natureMarkers;
      },
      touristMarkers: function () {
        return this.$store.state.example.touristMarkers;
      }
    },
    methods:{
      toggleInfoWindow: function(marker){
        this.infoWindowContent = marker.nazwa;
        if(this.infoWindowPosition.lat
          === marker.dlugosc_geograficzna
          && this.infoWindowPosition.lng
          === marker.szerokosc_geograficzna){
          this.infoWindowOpen = !this.infoWindowOpen;
        }
        else{
          this.infoWindowOpen = true;
        }
        this.infoWindowPosition.lat = marker.dlugosc_geograficzna;
        this.infoWindowPosition.lng = marker.szerokosc_geograficzna;
      }
    },
    beforeCreate(){
      this.$store.state.example.showBtn = true;
      this.$store.state.example.pageTitle = 'Mapa';
      this.$store.state.example.isMapPage = true;
      this.$store.state.example.isNavigation = false;
    },
    beforeDestroy(){
      this.$store.state.example.isMapPage = false;
    },
  };

</script>

<style scoped>
</style>

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
                  :icon="'../assets/markers/palace-2.png'"
      />
      <GmapMarker v-for="marker in natureMarkers"
                  :key="marker.id"
                  :position="{lat: marker.dlugosc_geograficzna, lng: marker.szerokosc_geograficzna}"
                  :clickable="true"
                  :visible="natureMarkersFlag"
                  @click="toggleInfoWindow(marker)"
                  :icon="'../assets/markers/tree.png'"
      />
      <GmapMarker v-for="marker in touristMarkers"
                  :key="marker.id"
                  :position="{lat: marker.dlugosc_geograficzna, lng: marker.szerokosc_geograficzna}"
                  :clickable="true"
                  :visible="touristMarkersFlag"
                  @click="toggleInfoWindow(marker)"
                  :icon="'../assets/markers/restaurant.png'"
      />

  </GmapMap>
</q-page>
</template>

<script>
  import axios from 'axios';

export default {
  name: 'mapMain',
  data() {
    return {
      markers:[
        { id: 1,
          typ: 0,
          nazwa: '',
          dlugosc_geograficzna:51.000708,
          szerokosc_geograficzna:16.773288}
      ],
      monumentsMarkers: [
        { id: 2,
          typ: 0,
          nazwa: '',
          dlugosc_geograficzna:51.000708,
          szerokosc_geograficzna:16.773288},
      ],
      natureMarkers: [
        { id: 3,
          typ: 0,
          nazwa: '',
          dlugosc_geograficzna:51.011308,
          szerokosc_geograficzna:16.783288}
        ],
      touristMarkers: [
        { id: 4,
          typ: 0,
          nazwa: '',
          dlugosc_geograficzna:51.020008,
          szerokosc_geograficzna:16.793288}
        ],
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
    }
  },
  methods:{
    toggleInfoWindow: function(marker){
      this.infoWindowContent = marker.nazwa;
      if(this.infoWindowPosition.dlugosc_geograficzna
        === marker.dlugosc_geograficzna
        && this.infoWindowPosition.szerokosc_geograficzna
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
    axios.get('http://bystrzyca.herokuapp.com/api/v1/obiekts')
      .then(response => {
        this.markers = response.data;
        this.markers.forEach(function (obj) {
          obj.dlugosc_geograficzna = obj.dlugosc_geograficzna/1000;
          obj.szerokosc_geograficzna = obj.szerokosc_geograficzna/1000;
        })
      }).then(data => {
        this.monumentsMarkers = this.markers.filter(obj =>{
          return obj.typ === 1 || obj.typ === 4
        });
        this.natureMarkers = this.markers.filter(obj =>{
          return obj.typ === 2
        });
        this.touristMarkers = this.markers.filter(obj =>{
          return obj.typ === 3
        });
      });
  },
  beforeDestroy(){
    this.$store.state.example.isMapPage = false;
  }
};

</script>

<style scoped>

</style>

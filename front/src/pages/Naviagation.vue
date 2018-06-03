

<template>

  <q-page fullscreen>
  <GmapMap
  :center="{lat:lat, lng:lng}"
  :zoom="12"
  map-type-id="terrain"
  style="
    width: 100%;
    height: calc(100% - 40px);
    position: fixed;
    bottom: 0px;
    "
    ref="map"
>
    <GmapMarker
      :position="{lat:navigationPoint[0], lng:navigationPoint[1]}"
      :clickable="true"
      @click="consoleLog2"
    />
    <GmapMarker
      :position="{lat:lat, lng:lng}"
      :clickable="true"
      @click="consoleLog"
    />
    <DirectionsRenderer />
</GmapMap>
</q-page>
</template>

<script>
import DirectionsRenderer from './DirectionsRenderer.js'
export default {
  components: {DirectionsRenderer},
  data() {
        return{ 
          navigationPoint: [0.1, 0.1],
          navigationType: '',
          navigationArray: [[0.0, 0.0], [0.1, 0.1]],
          lat: 0.1,
          lng: 0.1
        }
      },
  name: 'Navigation',
  created(){
    this.$store.state.example.showBtn = true;
    this.$store.state.example.pageTitle = 'Nawigacja';
    this.navigationArray = this.$store.state.example.navigationArray;
    this.navigationType = this.$store.state.example.navigationType
    this.navigationPoint = this.$store.state.example.navigationLongLat
    this.$store.state.example.isNaviagation = true;
  },
  mounted(){
    this.geolocation()
  },
   beforeDestroy(){
    this.$store.state.example.isNavigation=  false;
  },
  computed: {
    DirMode: function() {
      return this.$store.state.example.walking_or_driving
    }
  },
  methods:{
    consoleLog: function(){
      console.log("Klikniete");
    },
    consoleLog2: function(){
      console.log("aa")
      var addressLongLat=this.navigationPoint[0].toString()+','+this.navigationPoint[1].toString()
      // window.open("google.navigation:q="+addressLongLat);
      // window.open("google.navigation:q=23.3728831,85.3372199&mode=d" , '_system');
      window.open("https://www.google.com/maps/dir/?api=1&destination="+addressLongLat);
    },
    geolocation : function() {
      navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude
          this.lng = position.coords.longitude
          this.getRoute()
      });
    },
    openMaps: function (){
      console.log("aa")
      addressLongLat=navigationPoint[0].toString()+','+navigationPoint[1].toString()
      window.open("geo:"+addressLongLat);
    },
    getRoute: function () {
      if (this.navigationType == 'Point'){
      console.log([this.lat, this.lng])
      console.log([this.navigationPoint[0], this.navigationPoint[1]])
      this.directionsService = new google.maps.DirectionsService()
      this.directionsDisplay = new google.maps.DirectionsRenderer()
      this.directionsDisplay.setMap(this.$refs.map.$mapObject)
      var vm = this
      vm.directionsService.route({
        origin: {lat: this.lat, 
                lng: this.lng}, // Can be coord or also a search query
        destination: {lat: this.navigationPoint[0],
                      lng: this.navigationPoint[1]},
        travelMode: vm.DirMode
      }, function (response, status) {
        console.log(status)
        if (status === 'OK') {
          vm.directionsDisplay.setDirections(response) // draws the polygon to the map
        } else {
          console.log('Directions request failed due to ' + status)
        }
      })
      }
      else {
        console.log(this.navigationArr)
      }
    }
  }


};

</script>

<style scoped>


</style>

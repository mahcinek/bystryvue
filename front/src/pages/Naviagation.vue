

<template>
  <q-page fullscreen>
<q-modal v-model="opened" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
  <q-modal-layout>
    <q-toolbar slot="header">
      <q-btn
        flat
        round
        dense
        v-close-overlay
        icon="keyboard_arrow_left"
      />
      <q-toolbar-title>
        {{title}}
      </q-toolbar-title>
    </q-toolbar>

    <div class="layout-padding">
      {{desc}}



      <p> <q-btn
        color="secondary"
        @click="nabig2"
        label="Nawiguj do tego miejsca"/>
       <q-btn
        color="secondary"
        v-close-overlay
        label="Zamknij"
      /></p>
    </div>
  </q-modal-layout>
</q-modal>
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
      v-if="navigationType == 'Point'"
      :position="{lat:navigationPoint[0], lng:navigationPoint[1]}"
      :clickable="true"
      @click="nabig"
    />
    <GmapMarker
      :position="{lat:lat, lng:lng}"
      :clickable="true"
      @click="consoleLog"
    />

    <div v-if="navigationType=='path'">
      <GmapMarker v-for="elem in navigationArray"
      :position="{lat:elem.lng, lng:elem.lat}"
      :clickable="true"
      @click="consoleLog2(elem.id)"
    />
    </div>
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
          lng: 0.1,
          opened: false,
          desc: "blah",
          title: "blah",
          selectedLat: 0.0,
          selectedLng: 0.0
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
    },
    Obj: function(){
      return this.$store.state.example.currentObject[0]
    }
  },
  methods:{
    consoleLog: function(){
      console.log("Klikniete");
    },
    consoleLog2: function(id){
      console.log("aa")
      var vm = this;
      this.$store.dispatch('example/getObjectById', {vm: vm, id_param: id})
      console.log(vm.Obj)
      this.desc = this.Obj.opis
      this.title = this.Obj.nazwa
      this.selectedLat = this.Obj.dlugosc_geograficzna
      this.selectedLng = this.Obj.szerokosc_geograficzna
      this.opened=true
      // var addressLongLat=this.navigationPoint[0].toString()+','+this.navigationPoint[1].toString()
      // window.open("google.navigation:q="+addressLongLat);
      // window.open("google.navigation:q=23.3728831,85.3372199&mode=d" , '_system');
      // window.open("https://www.google.com/maps/dir/?api=1&destination="+addressLongLat);
    },
    nabig(){
      var addressLongLat=this.navigationPoint[0].toString()+','+this.navigationPoint[1].toString()
      // window.open("google.navigation:q="+addressLongLat);
      // window.open("google.navigation:q=23.3728831,85.3372199&mode=d" , '_system');
      window.open("https://www.google.com/maps/dir/?api=1&destination="+addressLongLat);
    },
    nabig2(){
      var addressLongLat=this.selectedLat.toString()+','+this.selectedLng.toString()
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
        this.navigationPoint=this.findTheClosestOne()
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
    },
    findTheClosestOne(){
      var closestOne = [this.navigationArray[0].lat, this.navigationArray[0].lng]
      var closestDistance = Math.sqrt(Math.pow(this.lat-closestOne[0],2)+Math.pow(this.lng-closestOne[1],2))
      var currDist = 0.0
      this.navigationArray.forEach(element => {
        currDist = Math.sqrt(Math.pow(this.lat-element.lat,2)+Math.pow(this.lng-element.lng,2))
        if (currDist<closestDistance){
          closestOne = [element.lng, element.lat]
        }
        
      });
      return closestOne
    }
  }


};

</script>

<style scoped>


</style>

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
        @click="nabig2(selectedLat, selectedLng)"
        label="Nawiguj do tego miejsca"/>
       <q-btn
        color="secondary"
        v-close-overlay
        label="Zamknij"
      /></p>
    </div>
  </q-modal-layout>
</q-modal>
    <GmapMap v-bind:class='{desktop: $q.platform.is.desktop }'
    :center="{lat:51.060708, lng:16.803288}"
    :zoom="11"
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
                  @click="consoleLog2(marker.id)"
                  :icon="'https://image.ibb.co/kBvdv8/palace_2.png'"
      />
      <GmapMarker v-for="marker in natureMarkers"
                  :key="marker.id"
                  :position="{lat: marker.dlugosc_geograficzna, lng: marker.szerokosc_geograficzna}"
                  :clickable="true"
                  :visible="natureMarkersFlag"
                  @click="consoleLog2(marker.id)"
                  :icon="'https://image.ibb.co/hzY92o/tree.png'"
      />
      <GmapMarker v-for="marker in touristMarkers"
                  :key="marker.id"
                  :position="{lat: marker.dlugosc_geograficzna, lng: marker.szerokosc_geograficzna}"
                  :clickable="true"
                  :visible="touristMarkersFlag"
                  @click="consoleLog2(marker.id)"
                  :icon="'https://image.ibb.co/jtzhNo/restaurant.png'"
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
        },
        opened: false,
        desc: "blah",
        title: "blah",
        selectedLat: 0.0,
        selectedLng: 0.0
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
      },
      Obj: function(){
      return this.$store.state.example.currentObject[0]
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
      },
    nabig2(lat, lng){
      var addressLongLat=lat.toString()+','+lng.toString()
      window.open("https://www.google.com/maps/dir/?api=1&destination="+addressLongLat);
    },
     consoleLog2: function(id){
      var vm = this;
      this.$store.dispatch('example/getObjectById', {vm: vm, id_param: id})
      // console.log(vm.Obj)
      this.desc = this.Obj.opis
      this.title = this.Obj.nazwa
      this.selectedLat = this.Obj.dlugosc_geograficzna
      this.selectedLng = this.Obj.szerokosc_geograficzna
      this.opened=true
      // var addressLongLat=this.navigationPoint[0].toString()+','+this.navigationPoint[1].toString()
      // window.open("google.navigation:q="+addressLongLat);
      // window.open("google.navigation:q=23.3728831,85.3372199&mode=d" , '_system');
      // window.open("https://www.google.com/maps/dir/?api=1&destination="+addressLongLat);
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
    }
  };

</script>

<style scoped>
  .desktop{
    max-width: 1000px;
  }
</style>

<template>
  <q-page color="primary" style="position: relative; height: 92vh;">
      <q-card color="primary" square style="width: 100%; height: 100%;">
        <!--<q-card-media style="width: 100%">-->
          <!--<img :src=imagePath>-->
        <!--</q-card-media>-->
        <q-modal v-model="opened">
          <!-- v-on:dblclick.native="doubleClick"
          v-on:dblclick="doubleClick"
          > -->
          <img :src='modal_source' style="width=100%"
          v-on:dblclick.native="doubleClick"
          v-on:dblclick="doubleClick"
          @click='oneClick' >
        </q-modal>
        <q-carousel
          id="#carousel"
          arrows
          infinite
          autoplay
          color="white"
          style="width: 100%; height: 45%;"
          >
          <q-carousel-slide :img-src=images ></q-carousel-slide>
          <q-carousel-control
            slot="control-button"
            slot-scope="carousel"
            position="bottom-right"
            :offset="[18, 22]"
          >
            <q-btn
              round dense push
              color="#00897B"
              :icon="carousel.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="togFS(carousel.slide)"
            ></q-btn>
          </q-carousel-control>
        </q-carousel>

        <!--<q-btn color="primary" class="glossy" @click="modal = true">-->
          <!--Launch-->
        <!--</q-btn>-->

        <p>{{description}}
        </p>
        <q-btn
          @click="goToArrival"
          label="Zaprowadź mnie tam"
          text-color="white"
          color="secondary"
          style="width: 100%; position:fixed; bottom: 0px;">
        </q-btn>
      </q-card>
  </q-page>
</template>

<script>
    export default {
      data() {
        return{ opened: false,
                index1: 0,
                car: null,
               // images: [
               //    'http://bi.gazeta.pl/im/83/87/11/z18380931Q.jpg',
               //    'https://i.nocimg.pl/img/zdj_hd/d8/1369/124-wroc-aw-karczma-rzym-wroc-aw.jpg',
               //    'https://s-ec.bstatic.com/images/hotel/max1024x768/143/14305843.jpg'
               //  ],
                modal_source: '',
                interval: false,
                count:0,
                clicks:0,
                delay: 500,
                timer: null,
                // lat:51.001662,
                // lng:16.780929,
                id: this.$route.params.id
        }
      },
      props: {
        obj: {}
      },
      computed:{
        description: function(){
          return this.obj.opis;
        },
        images: function(){
          return this.obj.link;
        },
        lat: function () {
          return this.obj.dlugosc_geograficzna;
        },
        lng: function () {
          return this.obj.szerokosc_geograficzna;
        }
      },
      methods: {
        goToArrival(){
          this.$store.state.example.navigationLongLat = [this.lat, this.lng]
          this.$store.state.example.navigationType = 'point'
          this.$router.replace('/navigate');
        },
        consoleLog: function(){
          console.log("Klikniete");
        },
        togFS(slide){
          this.modal_source = this.images[slide]
          this.opened=true
        },
        addOne(){
          console.log("adding one")
          count++
        },
        doubleClick(){
          console.log("d click")
          this.opened = false
        },
        oneClick: function(event){
          console.log("clicked")
          this.clicks++
          if(this.clicks === 1) {
            var self = this;
            this.timer = setTimeout(function() {
              self.clicks = 0
            }, this.delay);
          } else{
            clearTimeout(this.timer);
            this.opened = false;
            this.clicks = 0;
          }
        },

        buildURL(section){
          return baseURL + section;
        },
        getDescription(section){
          let url = buildURL(section);
          axios.get(url)
            .then( (response) => {
              this.decsription = response.data.opis;
            });
        },
        getImages(section){
          let url = buildURL(section);
          axios.get(url)
            .then( (response) => {
              this.data().images = response.data.results;
            });
        },
      },
      created(){
        this.$store.state.example.pageTitle = this.obj.nazwa;
      }
    }
</script>

<style scoped>
p {
  color: white;
}
</style>

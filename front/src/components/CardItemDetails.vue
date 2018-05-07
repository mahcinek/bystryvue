<template>
  <q-page color="primary" style="position: relative; height: 92vh;">
      <q-card color="primary" square style="width: 100%; height: 100%;">
        <!--<q-card-media style="width: 100%">-->
          <!--<img :src=imagePath>-->
        <!--</q-card-media>-->
        <q-carousel
          id="#carousel"
          arrows
          infinite
          autoplay
          color="white"
          style="width: 100%; height: 45%;"
          @input="input($event.payload)"
          >

          <q-carousel-slide img-src='http://bi.gazeta.pl/im/83/87/11/z18380931Q.jpg' />
          <q-carousel-slide img-src='https://i.nocimg.pl/img/zdj_hd/d8/1369/124-wroc-aw-karczma-rzym-wroc-aw.jpg' />
          <q-carousel-slide img-src='https://s-ec.bstatic.com/images/hotel/max1024x768/143/14305843.jpg' />

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
              @click="modal = true, index1 = carousel.slide"
            />
          </q-carousel-control>
        </q-carousel>

        <!--<q-btn color="primary" class="glossy" @click="modal = true">-->
          <!--Launch-->
        <!--</q-btn>-->
        <q-modal v-model="modal" maximized @show="(findElementById(car2)).goToSlide(index1)" >
          <q-carousel
            id="car2"
            arrows
            infinite
            autoplay
            color="white"
            class="text-white full-height"

          >
            <q-carousel-slide img-src='http://bi.gazeta.pl/im/83/87/11/z18380931Q.jpg' />
            <q-carousel-slide img-src='https://i.nocimg.pl/img/zdj_hd/d8/1369/124-wroc-aw-karczma-rzym-wroc-aw.jpg' />
            <q-carousel-slide img-src='https://s-ec.bstatic.com/images/hotel/max1024x768/143/14305843.jpg' />

            <q-carousel-control slot="control-progress" slot-scope="carousel" position="bottom-right"  :offset="[18, 22]">
              <q-btn
                round dense push
                color="#00897B"
                :icon="carousel.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="modal = false"
              />
            </q-carousel-control>
          </q-carousel>
        </q-modal>
        <p>
          {{description}}
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
        return{ modal: false,
                index1: 0,
                car: null
        }
      },
      props: {
        pageTitle: String, //tytuł na pasku nawigacji
        //imagePath: String,
        description: String
      },
      methods: {
        goToArrival(){
          this.$router.replace('/map');
        },
        consoleLog: function(){
          console.log("Klikniete");
        },
        input(i){
          index1 = i;
        }
      }
    }
</script>

<style scoped>
p {
  color: white;
}
</style>

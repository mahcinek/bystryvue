<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :inverted="$q.theme === 'ios'"
        >
        <q-btn
          flat
          dense
          round
          @click="goBack"
          aria-label="Menu"
          v-if=showBtn
        >
          <q-icon name="arrow back" />
        </q-btn>

        <q-btn
          flat
          dense
          round
          v-if=!showBtn
          class="invisible"
        ></q-btn>

        <q-toolbar-title align="center">
         {{pageTitle}}
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="more_vert"
          v-if=isMapPage>
            <q-popover class="q-itemColor">
            <q-list style="min-width: 150px" >
              <q-item class="q-itemColor">
                <q-item-side left>
                  <q-toggle v-model="monumentsMarkersFlag" ></q-toggle>
                </q-item-side>
                <q-item-main label="Zabytki" />
              </q-item>
              <q-item class="q-itemColor">
                <q-item-side left>
                  <q-toggle v-model="natureMarkersFlag" ></q-toggle>
                </q-item-side>
                <q-item-main label="Przyroda" />
              </q-item>
              <q-item class="q-itemColor">
                <q-item-side left>
                  <q-toggle v-model="touristMarkersFlag" ></q-toggle>
                </q-item-side>
                <q-item-main label="Dla turysty" />
              </q-item>
            </q-list>
          </q-popover>
        </q-btn>

        <q-btn
          flat
          dense
          round
          @click="goToAbout"
          aria-label="Menu"
          v-if=!showBtn
        >
          <q-icon name="info" />
        </q-btn>

        <q-btn
          flat
          dense
          round
          v-if=invisibleButton
          class="invisible"
        ></q-btn>


      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'LayoutDefault',
  data () {
    return {
      monumentsMarkersFlag: true,
      natureMarkersFlag: true,
      touristMarkersFlag: true,
      walkingOrDriving:false
    }
  },
  computed: {
    showBtn: function() {
      return this.$store.state.example.showBtn
    },
    pageTitle: function(){
      return this.$store.state.example.pageTitle
    },
    isMapPage: function(){
      return this.$store.state.example.isMapPage
    },
    isNaviagation: function(){
      return this.$store.state.example.isNaviagation
    },
    invisibleButton: function () {
      return this.showBtn && !this.isMapPage;
    }
  },
  watch: {
    monumentsMarkersFlag: function (value) {
      this.$store.state.example.monumentsMarkersFlag = value;
    },
    natureMarkersFlag: function (value) {
      this.$store.state.example.natureMarkersFlag = value;
    },
    touristMarkersFlag: function (value) {
      this.$store.state.example.touristMarkersFlag = value;
    }
  },
  methods: {
    openURL,
    goBack() {
      this.$router.go(-1)
    },
    goToAbout() {
      this.$router.push('/about');
    },
    setMode (){
      if (this.walkingOrDriving === true)
      this.$store.state.example.walkingOrDriving = 'WALKING'
      else
      this.$store.state.example.walkingOrDriving = 'DRIVING'
    }
  },
  beforeMount(){
    if(this.$store.state.example.objects.length === 0){
      var vm = this;
      this.$store.dispatch('example/fetchObjects',vm)
    }
  },

};
</script>

<style>

  .q-itemColor{
    background-color: #00897B;
    color: white;
  }
</style>

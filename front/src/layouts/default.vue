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

        <q-toolbar-title align="center">
         {{pageTitle}}
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="more_vert"
          v-if=isMapPage
          :on-click = "showPopover = true">
            <q-popover class="q-itemColor"
            v-if = "showPopover">
            <q-list style="min-width: 150px" >
              <q-item class="q-itemColor">
                <q-item-side left>
                  <q-toggle v-model="monuments_markers" ></q-toggle>
                </q-item-side>
                <q-item-main label="Zabytki" />
              </q-item>
              <q-item class="q-itemColor">
                <q-item-side left>
                  <q-toggle v-model="nature_markers" ></q-toggle>
                </q-item-side>
                <q-item-main label="Przyroda" />
              </q-item>
              <q-item class="q-itemColor">
                <q-item-side left>
                  <q-toggle v-model="tourist_markers" ></q-toggle>
                </q-item-side>
                <q-item-main label="Dla turysty" />
              </q-item>
            </q-list>
          </q-popover>
        </q-btn>



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
      showPopover: false,
      monuments_markers: true,
      nature_markers: true,
      tourist_markers: true,
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
    }
  },
  methods: {
    openURL,
    goBack() {
      this.$router.go(-1)
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

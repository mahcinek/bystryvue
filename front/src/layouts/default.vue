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
  computed: {
    showBtn: function() {
      return this.$store.state.example.showBtn
    },
    pageTitle: function(){
      return this.$store.state.example.pageTitle
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
</style>

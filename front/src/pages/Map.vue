<template>
  <q-layout>
    Mapa
  </q-layout>
</template>

<script>
export default {
  name: 'map',
  created(){
    this.$store.state.example.showBtn = true;
    this.$store.state.example.pageTitle = 'Mapa';
  }
};
</script>

<style scoped>

</style>

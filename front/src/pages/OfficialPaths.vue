<template>
  <q-page>
    <MenuCardsList class="klasa" :cards="paths"></MenuCardsList>
  </q-page>
</template>

<script>
  import MenuCardsList from '../components/MenuCardsList';

    export default {
      name: "official-paths",
      data() {
        return {
          paths: [
            {title: 'Dydaktyczna ścieżka rowerowa', imagePath: '../assets/sciezka-dydaktyczna.jpg', destination: '/pathDescription'},
            {title: 'Ścieżka Jarnołtów-Ratyń', imagePath: '../assets/jarnoltow-ratyn.jpg', destination: '/pathDescription'},
            {title: 'Cicha Dolina', imagePath: '../assets/cicha-dolina.jpg', destination: '/pathDescription'},
          ],
        };
      },
      components: {
        MenuCardsList,
      },
    };
</script>

<style scoped>
</style>

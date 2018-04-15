<template>
  <q-page>
    <MenuCardsList :cards="paths"></MenuCardsList>
  </q-page>
</template>

<script>
  import MenuCardsList from '../components/MenuCardsList';

    export default {
      name: "official-paths",
      data() {
        return {
          paths: [
            {title: 'Dydaktyczna ścieżka rowerowa', imagePath: '../assets/sciezka-dydaktyczna.jpg'},
            {title: 'Ścieżka Jarnołtów-Ratyń', imagePath: '../assets/jarnoltow-ratyn.jpg'},
            {title: 'Cicha Dolina', imagePath: '../assets/cicha-dolina.jpg'},
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

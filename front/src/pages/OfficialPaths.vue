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
            {title: 'Dydaktyczna ścieżka rowerowa', imagePath: '../assets/sciezka-dydaktyczna.jpg', destination: '/pathDescription/1'},
            {title: 'Ścieżka Jarnołtów-Ratyń', imagePath: '../assets/jarnoltow-ratyn.jpg', destination: '/pathDescription/2'},
            {title: 'Cicha Dolina', imagePath: '../assets/cicha-dolina.jpg', destination: '/pathDescription/3'},
          ],
        };
      },
      components: {
        MenuCardsList,
      },
      created(){
        this.$store.state.example.showBtn = true;
        this.$store.state.example.pageTitle = 'Oficjalne ścieżki';
      }
    };
</script>

<style scoped>
</style>

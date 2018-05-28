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
            {nazwa: 'Dydaktyczna ścieżka rowerowa', zdjecie_link: '../assets/sciezka-dydaktyczna.jpg', destination: '/pathDescription/1'},
            {nazwa: 'Ścieżka Jarnołtów-Ratyń', zdjecie_link: '../assets/jarnoltow-ratyn.jpg', destination: '/pathDescription/2'},
            {nazwa: 'Cicha Dolina', zdjecie_link: '../assets/cicha-dolina.jpg', destination: '/pathDescription/3'},
          ],
        };
      },
      components: {
        MenuCardsList,
      },
      created(){
        this.$store.state.example.showBtn = true;
        this.$store.state.example.pageTitle = 'Oficjalne ścieżki';
        console.log("Oficjalne sciezki");
      },
      methods:{

      }
    };
</script>

<style scoped>
</style>

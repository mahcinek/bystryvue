<template>
  <q-page>
    <MenuCardListTriPic :cards="paths"></MenuCardListTriPic>
  </q-page>
</template>

<script>
  import MenuCardListTriPic from '../components/MenuCardListTriPic';
  import axios from 'axios';

    export default {
      name: "official-paths",
      data() {
        return {
          paths: [
            {nazwa: 'Dydaktyczna ścieżka rowerowa', link: '../assets/sciezka-dydaktyczna.jpg', destination: '/pathDescription/1'},
            {nazwa: 'Ścieżka Jarnołtów-Ratyń', link: '../assets/jarnoltow-ratyn.jpg', destination: '/pathDescription/2'},
            {nazwa: 'Cicha Dolina', link: '../assets/cicha-dolina.jpg', destination: '/pathDescription/3'},
          ],
        };
      },
      components: {
        MenuCardListTriPic,
      },
      methods:{
        getData(){
          console.log("getData");
          let url = 'http://bystrzyca.herokuapp.com/api/v1/trasas';
          const resultArray = [];
          axios.get(url)
            .then( response => {
              this.paths = response.data;
              return response;});
        }
      },
      created(){
        this.$store.state.example.showBtn = true;
        this.$store.state.example.pageTitle = 'Oficjalne ścieżki';
      }

    };
</script>

<style scoped>
</style>

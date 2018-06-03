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
            {nazwa: 'Cicha Dolina', link: '../assets/cicha-dolina.jpg', destination: '/pathDescription/1'},
            {nazwa: 'Ścieżka Jarnołtów-Ratyń', link: '../assets/jarnoltow-ratyn.jpg', destination: '/pathDescription/2'},
            {nazwa: 'Dydaktyczna ścieżka rowerowa', link: '../assets/sciezka-dydaktyczna.jpg', destination: '/pathDescription/3'},
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
              // this.paths = response.data;
              var res = response.data;
              console.log(res)
              this.$store.state.example.touristPaths = res;
              return response;});
        url = 'http://bystrzyca.herokuapp.com/api/v1/obiekt_w_trasies';
        axios.get(url)
            .then( response => {
              // this.paths = response.data;
              let res = response.data;
              console.log(res)
              this.$store.state.example.touristPathsElements = res;
              return response;});
        }
      },
      created(){
        this.$store.state.example.showBtn = true;
        this.$store.state.example.pageTitle = 'Oficjalne ścieżki';
        if (this.$store.state.example.touristPaths === ''){
          this.getData();
        }
      }

    };
</script>

<style scoped>
</style>

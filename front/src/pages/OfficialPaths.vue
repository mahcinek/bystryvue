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
            {nazwa: 'Cicha Dolina', link: this.$store.state.example.touristPaths[0].link, destination: '/pathDescription/1'},
            {nazwa: 'Ścieżka Jarnołtów-Ratyń', link:  this.$store.state.example.touristPaths[1].link, destination: '/pathDescription/2'},
            {nazwa: 'Dydaktyczna ścieżka rowerowa', link:  this.$store.state.example.touristPaths[2].link, destination: '/pathDescription/3'},
          ],
        };
      },
      components: {
        MenuCardListTriPic,
      },
      methods:{
        getData(){
          console.log("getData");
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

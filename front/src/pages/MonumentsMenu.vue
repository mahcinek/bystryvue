<template>
  <q-page>
    <MenuCardsList :cards="cards"></MenuCardsList>
  </q-page>
</template>

<script>
  import MenuCardsList from '../components/MenuCardsList';
  import axios from 'axios';

  export default {
    name: "monuments-menu",
    data() {
      return {
        cards: [
          { nazwa: 'Pałac w Sadowicach', zdjecie_link: '../assets/palac-sadowice.jpg', destination: '/details/1' },
          { nazwa: 'Pałac w Samotworze', zdjecie_link: '../assets/palac-samotwor.jpg', destination: '/details/1' },
          { nazwa: 'Pałac w Krobielowicach', zdjecie_link: '../assets/palac-krobielowice.jpg', destination: '/details/1' },
          { nazwa: 'Pałac w Sośnicy', zdjecie_link: '../assets/palac-sosnica.jpg', destination: '/details/1' },
        ],
      };
    },
    components: {
      MenuCardsList,
    },
    methods:{
      getData(){
        console.log("getData");
        let url = 'http://bystrzyca.herokuapp.com/api/v1/obiekts';
        const resultArray = [];
        axios.get(url)
          .then( response => {
            this.cards = response.data;
            return response;});
      }
    },
    created(){
      this.$store.state.example.showBtn = true;
      this.$store.state.example.pageTitle = 'Zabytki';
      //this.getData();
    }
    }
</script>

<style scoped>

</style>

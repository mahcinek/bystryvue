<template>
  <q-page>
    <MenuCardsList :cards="cards"></MenuCardsList>
  </q-page>
</template>

<script>
  import MenuCardsList from '../components/MenuCardsList';
  import axios from 'axios';

  export default {
    name: "tourist-attractions-menu",
    data() {
      return {
        cards: [
          { nazwa: 'Zajazd Banderoza', zdjecie_link: '../assets/zajazd-banderoza.jpg', destination: '/details/1' },
          { nazwa: 'Straszny Dwór', zdjecie_link: '../assets/straszny-dwor.jpg', destination: '/details/1' },
          { nazwa: 'Karczma Rzym', zdjecie_link: '../assets/karczma-rzym.jpg', destination: '/details/1' },
          { nazwa: 'Pałac w Krobielowicach', zdjecie_link: '../assets/palac-krobielowice-at.jpg', destination: '/details/1' },
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
    this.$store.state.example.pageTitle = 'Atrakcje turystyczne';
    //console.log(cards);
    //this.getData();
  }
    }
</script>

<style scoped>

</style>

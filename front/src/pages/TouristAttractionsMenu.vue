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
          { title: 'Zajazd Banderoza', imagePath: '../assets/zajazd-banderoza.jpg', destination: '/details/1' },
          { title: 'Straszny Dwór', imagePath: '../assets/straszny-dwor.jpg', destination: '/details/1' },
          { title: 'Karczma Rzym', imagePath: '../assets/karczma-rzym.jpg', destination: '/details/1' },
          { title: 'Pałac w Krobielowicach', imagePath: '../assets/palac-krobielowice-at.jpg', destination: '/details/1' },
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
    this.getData();
  }
    }
</script>

<style scoped>

</style>

<template>
  <q-page>
    <MenuCardsList :cards="cards"></MenuCardsList>
  </q-page>
</template>

<script>
  import MenuCardsList from '../components/MenuCardsList';
  import axios from 'axios';

  export default {
        name: "natural-attractions-menu",
      data() {
        return {
          cards: [
            { title: 'Łąki', imagePath: '../assets/laki.jpg', destination: '/details/1' },
            { title: 'Zbiornik Mietkowski', imagePath: '../assets/zbiornik-mietkowski.jpg', destination: '/details/1' },
            { title: 'Grądy i Olsy', imagePath: '../assets/grady-olsy.jpg', destination: '/details/1' },
            { title: 'Starorzecza', imagePath: '../assets/starorzecza.jpg', destination: '/details/1' },
          ],
        };
      },
      components: {
        MenuCardsList,
      },

    methods:{
      getDescription(section){
        const resultArray = [];
        let url = 'http://api/api/v1/' + section;
        axios.get(url)
          .then( response => {
            return response;})
          .then(data => {
            for(let key in data){
              resultArray.push(data[key]);
            }
            this.cards = resultArray;
          });
      },
      getImages(section){
        console.log("getImages");
        let url = 'http://bystrzyca.herokuapp.com/api/v1/obiekts';
        const resultArray = [];
        axios.get(url)
          .then( response => {
            return response;})
          .then( data => {
            for(let key in data){
              console.log("for");
              resultArray.push(data[key]);
            }
            this.cards = resultArray;
          });
        console.log("getImges finished");
      }
    },
    created(){
      this.$store.state.example.showBtn = true;
      this.$store.state.example.pageTitle = 'Przyroda';
      this.getImages("zdjecies");
    }
  }
</script>

<style scoped>
</style>

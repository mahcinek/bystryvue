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
          { nazwa: 'Zajazd Banderoza', link: '../assets/zajazd-banderoza.jpg', destination: '/details/1' },
          { nazwa: 'Straszny Dwór', link: '../assets/straszny-dwor.jpg', destination: '/details/1' },
          { nazwa: 'Karczma Rzym', link: '../assets/karczma-rzym.jpg', destination: '/details/1' },
          { nazwa: 'Pałac w Krobielowicach', link: '../assets/palac-krobielowice-at.jpg', destination: '/details/1' },
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
      },
      getPics(){
        console.log("getPics");
        let url = 'http://bystrzyca.herokuapp.com/api/v1/zdjecies';
        const resultArray = [];
        axios.get(url)
          .then( response => {
            var r;
            for(r = 0; r < response.data.length; r++){
              var i;
              for(i = 0; i < this.cards.length; i++){
                if(this.cards[i].id == response.data[r].obiekt_id){
                  this.cards[i].link = response.data[r].zdjecie_link;
                }
              }
            }
            return response;});
      }
    },
  created(){
    this.$store.state.example.showBtn = true;
    this.$store.state.example.pageTitle = 'Atrakcje turystyczne';
    //this.getData();
    //this.getPics();
  }
    }
</script>

<style scoped>

</style>

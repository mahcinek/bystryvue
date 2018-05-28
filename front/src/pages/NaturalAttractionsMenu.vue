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
            { nazwa: 'Łąki', zdjecie_link: '../assets/laki.jpg', destination: '/details/1' },
            { nazwa: 'Zbiornik Mietkowski', zdjecie_link: '../assets/zbiornik-mietkowski.jpg', destination: '/details/1' },
            { nazwa: 'Grądy i Olsy', zdjecie_link: '../assets/grady-olsy.jpg', destination: '/details/1' },
            { nazwa: 'Starorzecza', zdjecie_link: '../assets/starorzecza.jpg', destination: '/details/1' },
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
            //console.log("response");
            //console.log(response.data);
            this.cards = response.data;
            //console.log(this.cards == null);
            return response;});
          // .then( data => {
          //   console.log("Tu jest data");
          //   console.log(data);
          //   for(let key in data){
          //     console.log("for");
          //     resultArray.push(data[key]);
          //   }
          //   this.cards = resultArray;
          // });
        // console.log("getImges finished");
        // console.log(this.cards.pop().title);
      }
    },
    created(){
      this.$store.state.example.showBtn = true;
      this.$store.state.example.pageTitle = 'Przyroda';
      //this.getData();
    }
  }
</script>

<style scoped>
</style>

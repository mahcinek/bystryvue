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
      getData(){
        console.log("getData");
        let url = 'http://bystrzyca.herokuapp.com/api/v1/obiekts';
        const resultArray = [];
        axios.get(url)
          .then( response => {
            //console.log("response");
            //console.log(response.data);
            this.cards = response.data;
            console.log(this.cards == null);
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
      this.getData();
    }
  }
</script>

<style scoped>
</style>

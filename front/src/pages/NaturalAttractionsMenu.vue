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
            { nazwa: 'Łąki', link: '../assets/laki.jpg', destination: '/details/1' },
            { nazwa: 'Zbiornik Mietkowski', link: '../assets/zbiornik-mietkowski.jpg', destination: '/details/1' },
            { nazwa: 'Grądy i Olsy', link: '../assets/grady-olsy.jpg', destination: '/details/1' },
            { nazwa: 'Starorzecza', link: '../assets/starorzecza.jpg', destination: '/details/1' },
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
      this.$store.state.example.pageTitle = 'Przyroda';
      // TODO
      //this.getData();
      //this.getPics();
    }
  }
</script>

<style scoped>
</style>

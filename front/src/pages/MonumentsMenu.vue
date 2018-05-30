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
          {id:0, nazwa: 'Pałac w Sośnicy', link: '../assets/palac-sosnica.jpg', destination: '/details/1' },
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
            var vm = this;
            this.cards.forEach(function (obj) {
              vm.$set(obj,'destination','details/'+obj.id);
            });
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
      },
    },
    created(){
      this.$store.state.example.showBtn = true;
      this.$store.state.example.pageTitle = 'Zabytki';
      this.getData();
      this.getPics();
    },
    }
</script>

<style scoped>

</style>

<template>
  <q-page>
    <MenuCardsList :cards="cards"></MenuCardsList>
  </q-page>
</template>

<script>
  import MenuCardsList from '../components/MenuCardsList';

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
  created(){
    this.$store.state.example.showBtn = true;
    this.$store.state.example.pageTitle = 'Atrakcje turystyczne';
  }
    }
</script>

<style scoped>

</style>

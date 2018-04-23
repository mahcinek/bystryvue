<template>
  <q-page>
    <MenuCardsList :cards="cards"></MenuCardsList>
  </q-page>
</template>

<script>
  import MenuCardsList from '../components/MenuCardsList';

  export default {
    name: "monuments-menu",
    data() {
      return {
        cards: [
          { title: 'Pałac w Sadowicach', imagePath: '../assets/palac-sadowice.jpg', destination: '/details/1' },
          { title: 'Pałac w Samotworze', imagePath: '../assets/palac-samotwor.jpg', destination: '/details/1' },
          { title: 'Pałac w Krobielowicach', imagePath: '../assets/palac-krobielowice.jpg', destination: '/details/1' },
          { title: 'Pałac w Sośnicy', imagePath: '../assets/palac-sosnica.jpg', destination: '/details/1' },
        ],
      };
    },
    components: {
      MenuCardsList,
    },
    created(){
      this.$store.state.example.showBtn = true;
      this.$store.state.example.pageTitle = 'Zabytki';
    }
    }
</script>

<style scoped>

</style>

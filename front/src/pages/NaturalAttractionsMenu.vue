<template>
  <q-page>
    <MenuCardsList :cards="cards"></MenuCardsList>
  </q-page>
</template>

<script>
  import MenuCardsList from '../components/MenuCardsList';

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
    created(){
      this.$store.state.example.showBtn = true;
      this.$store.state.example.pageTitle = 'Przyroda';
    }
  }
</script>

<style scoped>
</style>

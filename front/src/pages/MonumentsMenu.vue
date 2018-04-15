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
          { title: 'Pałac w Sadowicach', imagePath: '../assets/palac-sadowice.jpg' },
          { title: 'Pałac w Samotworze', imagePath: '../assets/palac-samotwor.jpg' },
          { title: 'Pałac w Krobielowicach', imagePath: '../assets/palac-krobielowice.jpg' },
          { title: 'Pałac w Sośnicy', imagePath: '../assets/palac-sosnica.jpg' },
        ],
      };
    },
    components: {
      MenuCardsList,
    },
    }
</script>

<style scoped>

</style>

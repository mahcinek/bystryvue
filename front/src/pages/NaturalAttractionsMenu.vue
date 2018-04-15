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
            { title: 'Łąki', imagePath: '../assets/laki.jpg' },
            { title: 'Zbiornik Mietkowski', imagePath: '../assets/zbiornik-mietkowski.jpg' },
            { title: 'Grądy i Olsy', imagePath: '../assets/grady-olsy.jpg' },
            { title: 'Starorzecza', imagePath: '../assets/starorzecza.jpg' },
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

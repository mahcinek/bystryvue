<template>
  <q-page>
    <MenuCardItemTriPic
      v-for="card in cards"
      :title="card.nazwa"
      :imagePath="card.link"
      :key="card.id"
      :destination = "card.destination"
      :id="card.id">
    </MenuCardItemTriPic>
  </q-page>
</template>

<script>
  import MenuCardItemTriPic from './MenuCardItemTriPic';

  export default {
    name: 'card-list',
    props: ['cards']
    ,
    components: {
      MenuCardItemTriPic,
    }
  };
</script>

<style scoped>
</style>

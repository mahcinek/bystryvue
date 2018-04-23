<template>
  <q-page>
    <MenuCardItemTriPic
      v-for="card in cards"
      :title="card.title"
      :imagePath="card.imagePath"
      :key="card.title"
      :destination = "card.destination">
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

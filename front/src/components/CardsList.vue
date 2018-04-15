<template>
<q-page>
  <CardsListItem v-for="card in cards"
                 :title="card.title"
                 :imagePath="card.imagePath"
                 :key="card.title">
  </CardsListItem>
</q-page>
</template>

<script>
import CardsListItem from './CardsListItem';

export default {
  name: 'card-list',
  props: {
    cards: [],
  },
  components: {
    CardsListItem,
  },
};
</script>

<style scoped>

</style>

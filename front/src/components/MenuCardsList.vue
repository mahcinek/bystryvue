<template>
<q-page>
  <MenuCardItem  v-for="card in cards"
                 :title="card.title"
                 :imagePath="card.imagePath"
                 :key="card.title">
  </MenuCardItem>
</q-page>
</template>

<script>
import MenuCardItem from './MenuCardItem';

export default {
  name: 'card-list',
  props: {
    cards: [],
  },
  components: {
    MenuCardItem,
  },
};
</script>

<style scoped>
</style>

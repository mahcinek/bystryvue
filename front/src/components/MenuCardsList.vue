<template>
<q-page>
  <MenuCardItem
                  v-for="card in cards"
                  :title="card.nazwa"
                  :imagePath="card.zdjecie_link"
                  :key="card.nazwa"
                  :destination = "card.destination">
  </MenuCardItem>
</q-page>
</template>

<script>
import MenuCardItem from './MenuCardItem';

export default {
  name: 'card-list',
  props: ['cards'],
  components: {
    MenuCardItem,
  }
};
</script>

<style scoped>
</style>

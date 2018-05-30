<template>
<q-page>
  <MenuCardItem
                  v-for="card in cards"
                  :title="card.nazwa"
                  :imagePath="card.link"
                  :key="card.id"
                  :destination = "card.destination"
                  :id="card.id">
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

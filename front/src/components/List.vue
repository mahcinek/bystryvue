<template>
  <div>
    <div class="fitScreen">
      <listelement v-for="listElement in listElements"
                   :key="listElement.name"
                   :name="listElement.name"
      ></listelement>
    </div>
  </div>
</template>

<script>
import listElement from './ListElement';

export default {
  data() {
    return {
      listElements: [
        { name: 'Mapa', img: 'link1' },
        { name: 'Ścieżki', img: 'link2' },
        { name: 'Ciekawe miejsca', img: 'link3' },
      ],
    };
  },
  components: {
    listelement: listElement,
  },
};
</script>

<style>
  .fitScreen{
    height: 98vh;
  }
</style>

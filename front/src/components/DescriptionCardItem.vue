<template>
      <q-card color="primay" square style="width: 100%">
        <q-card-media style="width: 100%">
          <img :src=imagePath>
        </q-card-media>
          <p>
            {{description}}
          </p>
        <q-btn label="Zaprowadź mnie tam" text-color="white" color="secondary">
        </q-btn>
      </q-card>
</template>

<script>
    export default {
      props: {
        name: String, //tytuł na pasku nawigacji
        imagePath: String,
        description: String
      },
    }
</script>

<style scoped>
p {
  color: white;
}
</style>

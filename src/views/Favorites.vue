<template>
  <div>
    <div class="favorites">
      <div v-if="favorites.length === 0">
        <h1>You have no favorited images</h1>
      </div>
      <FavoritesList :favorites="favorites" />
    </div>

  </div>
</template>

<script>
import FavoritesList from "../components/FavoritesList.vue"
export default {
  name: 'Favorites',
  components: {
    FavoritesList
  },
  computed: {
    favorites() {
      return this.$root.$data.favorites;
    }
  }
}
</script>

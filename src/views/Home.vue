<template>
  <div class="home">
    <div id="mainBody">
      <img id="logo" alt="My logo" src="../assets/logo_1.png">
      <h1>Gallery Space</h1>
    </div>
    <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="search" />
    </form>
    <Gallery :gallery="gallery" />
  </div>
</template>

<script>
// @ is an alias to /src
import Gallery from '@/components/Gallery.vue'

export default {
  name: 'Home',
  components: {
    Gallery
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    gallery() {
      return this.$root.$data.gallery.filter(image => image.name.toLowerCase().search(this.search.toLowerCase()) >= 0);
    }
  }
}
</script>

<style>
#mainBody{
  display:flex;
  flex-wrap:wrap;
  align-content:center;
  flex-direction:column;
}

#logo{
  margin: 10px;
}
</style>

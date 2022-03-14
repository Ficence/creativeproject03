<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Human')" href="#" class="pure-menu-link">Human</a></li>
      <li class="pure-menu-item"><a @click="select('Comic')" href="#" class="pure-menu-link">Comic</a></li>
      <li class="pure-menu-item"><a @click="select('Scene')" href="#" class="pure-menu-link">Scene</a></li>
      <li class="pure-menu-item"><a @click="select('Dragon')" href="#" class="pure-menu-link">Dragon</a></li>
    </ul>
  </div>
  <Gallery :gallery="gallery" />
</div>
</template>

<script>
import Gallery from "../components/Gallery.vue"
export default {
  name: 'TagSearch',
  components: {
    Gallery
  },
  data() {
    return {
      tag: '',
    }
  },
  computed: {
    gallery() {
      return this.$root.$data.gallery.filter(image => image.tags.includes(this.tag));
    }
  },
  methods: {
    select(tag) {
      this.tag = tag;
    }
  }
}
</script>

<style scope>
  .pure-menu{
    margin: 5px 0 0 0;
  }
  .pure-menu-link{
    background-color:#bbb;
    border-left: 1px solid black;
  }
  .pure-menu-link{
    color:black;
  }
</style>

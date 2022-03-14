<template>
  <div class="wrapper">
    <div id="gallery">
      <div class="thumbnail" v-for="image in gallery" :key="image.id">
          <div class="image" :id="image.id">
              <div class="name unselectable">{{image.name}}</div>
              <div v-if="image.favorited === false">
                <svg class=star height="25" width="25" v-on:click="favorite(image)">
                  <path d="M12.5 0 L15.45 9.081816 L25 9.081816 L17.27457514 14.6946313
                  L20.2254242859 25 L12.5 19.38715 L4.77457514 25 L7.725424859 14.6946313
                  L0 9.081816 L9.54915 9.081816 Z" stroke="white" stroke-width="2" fill="none"/>
                </svg>
              </div>
              <div v-else>
                <svg class=star height="25" width="25" v-on:click="favorite(image)">
                  <path d="M12.5 0 L15.45 9.081816 L25 9.081816 L17.27457514 14.6946313
                  L20.2254242859 25 L12.5 19.38715 L4.77457514 25 L7.725424859 14.6946313
                  L0 9.081816 L9.54915 9.081816 Z" stroke="white" stroke-width="2" fill="red"/>
                </svg>
              </div>
              <div class="overlay"></div>
              <img :src="'/images/'+image.image">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    gallery: Array
  },
  methods:{
    favorite(image){
      if(!image.favorited){
        image.favorited = true;
        this.$root.favorites.push(image);
        let ele = document.getElementById(image.id);
        let ele2 = ele.getElementsByTagName("path")[0];
        ele2.setAttribute("fill","red");
      }
      else{
        image.favorited = false;
        this.$root.favorites.splice(this.$root.favorites.indexOf(image),1);
        let ele = document.getElementById(image.id);
        let ele2 = ele.getElementsByTagName("path")[0];
        ele2.setAttribute("fill","none");
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#gallery{
  display: flex;
  flex-wrap: wrap;
}
.thumbnail {
  margin: 10px;
  width: 250px;
}
.image > .overlay{
  position: absolute;
  display: block;
  width: 250px;
  height: 200px;
  background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));;
  opacity: 0;
}
.image:hover > .overlay{
  opacity: 1;
}
.image img{
  width: 250px;
  height: 200px;
  object-fit: cover
}
svg.star, .name{
  display: none;
}
.image:hover > .name{
  position: absolute;
  display: block;
  color: white;
  float: left;
  margin: 5px 0px 0px 5px;
  display:block;
  z-index:2;
}
.image:hover > div > svg.star{
  position:absolute;
  margin: 170px 0px 0px 220px;
  display:block;
  z-index:2;
}
.image:hover > div > svg.star:hover path{
  stroke:red;
}
.image:hover > div > svg.star-fav path{
  fill:red;
}
.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>

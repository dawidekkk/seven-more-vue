<template>
  <div class="carousel-card">
    <h3>{{ name }}</h3>
    <img :src="img" alt="zdjecie produktu" class="imgs">
    <h4>{{ color }}</h4>
    <h4>{{ collection }}</h4>
    <h4>{{ price }}</h4>
  </div>
</template>

<script>


export default {

  props: {
    name: String,
    img: String,
    color: String,
    collection: String,
    price: Number,
  },

  
}
</script>

<style scoped>

.carousel-card {
  width: 300px; height: 300px;
  background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.imgs {
  width: 150px; height: 150px;
}

h3,
p {
  color: black;
  font-size: 20px;
}
</style>
<template>
  <li class="carousel-card">
    <h3>{{ collection }}</h3>
    <img :src="img" alt="zdjecie produktu" class="imgs">
    <div class="carousel-info">
      <span>{{ name }}</span><span>{{ color }}</span>
      <p>{{ price }}</p>
    </div>
  </li>
</template>

<script>


export default {

 data() {
   return {
     imgPath: require("../../assets/images/1.png")
   }
 },

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
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: auto auto auto; 
  gap: 0px 0px;
  grid-template-areas: 
    "collection collection"
    "imgs imgs"
    "carousel-info carousel-info";
  width: 90%;
  margin: 1rem auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.collection { grid-area: collection; }
.imgs { 
  grid-area: imgs; 
  width: 100%; height: 100%;
  margin: 0 auto;
}
.carousel-info { 
  grid-area: carousel-info; 
  display: flex; 
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: black;
  width: 70%;
  margin: 0 auto;
}

h3,
p {
  color: black;
  font-size: 20px;
}

h3 {
  background-color: green;
  color: black;
  width: auto;
}
</style>
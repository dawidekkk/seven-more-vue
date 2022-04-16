<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="product in products" :key="product.id" class="test">
      <li class="carousel-card">
        <h3>{{ product.collection }}</h3>
        <img :src="product.image" alt="zdjecie produktu" class="imgs" />
        <div class="carousel-info">
          <span>{{ product.name }}</span
          ><span>{{ product.color }}</span>
          <p>{{ product.price }}</p>
        </div>
      </li>
    </swiper-slide>
  </swiper>
</template>

<script>
import SwiperCore, { Navigation, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

SwiperCore.use([Navigation, Parallax]);
export default {
  components: {
    SwiperSlide,
    Swiper,
  },

  props: {
    name: String,
    img: String,
    color: String,
    collection: String,
    price: Number,
  },

  computed: {
    // ...mapGetters(["products"]),
    products() {
      return this.$store.getters["products/products"];
    },
  },
};
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
  height: 600px;
  margin: 1rem auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.collection {
  grid-area: collection;
}
.imgs {
  grid-area: imgs;
  width: 100%;
  height: 100%;
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

<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    :centeredSlides="true"
    pagination
    parallax
    :autoplay="delay"
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
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { reactive } from "vue";
import useProduct from "../../hooks/products.js";

export default {
  components: {
    SwiperSlide,
    Swiper,
  },
  
  setup() {
    SwiperCore.use([Pagination, Autoplay]);

    const delay = reactive({
      delay: 2500,
      disableOnInteraction: false
    });

    const [products] = useProduct('carouselProducts');

    return{
      delay,
      products
    };
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
  margin: 1rem auto 4rem auto;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  backdrop-filter: blur(20px);
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3)
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
  /* background-color: green; */
  color: black;
  width: auto;
}


</style>

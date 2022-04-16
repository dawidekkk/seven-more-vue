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
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { reactive, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    SwiperSlide,
    Swiper,
  },
  
  setup() {
    SwiperCore.use([Navigation, Pagination, Autoplay])

    const delay = reactive({
      delay: 2500,
      disableOnInteraction: false
    })

    const store = useStore();

    const products = computed(() => {
      return store.getters["products/products"];
    })

    return{
      delay,
      products
    }
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

.test {
  width: 100%;
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

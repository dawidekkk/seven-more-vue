<template>
  <swiper
    pagination
    parallax
    :autoplay="delay"
    ref="swiper"
    :slides-per-view="1"
    :breakpoints="swiperOptions"
    autoreplay
  >
    <swiper-slide v-for="product in products" :key="product.id">
      <li class="carousel-card">
        <h3>{{ product.stock }}</h3>
        <div class="imgs">
          <router-link :to="`/sklep/${product.id}`">
            <img :src="product.image[0].first" alt="zdjecie produktu" />
          </router-link>
        </div>
        <div class="info">
          <span>{{ product.name }}</span
          ><span>{{ product.color }}</span>
          <h4>{{ product.price }}</h4>
        </div>
      </li>
    </swiper-slide>
  </swiper>
</template>

<script>
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { reactive } from "vue";
// import useProduct from "../../hooks/products.js";

export default {
  components: {
    SwiperSlide,
    Swiper,
  },

  computed: {
    products() {
      return this.$store.getters.shopProducts;
    },
  },

  setup() {
    SwiperCore.use([Pagination, Autoplay]);

    const delay = reactive({
      delay: 2500,
      disableOnInteraction: false,
    });

    // Carousel responsive
    const swiperOptions = reactive({
      breakpoints: {
        600: {
          slidesPerView: 2,
        },

        992: {
          slidesPerView: 3,
        },

        1400: {
          slidesPerView: 4,
        },
      },
    });

    // Using hook with $store.state.carouselProducts
    // const [products] = useProduct("carouselProducts");

    return {
      delay,
      // products,
      swiperOptions: swiperOptions.breakpoints,
    };
  },
};
</script>

<style scoped lang="scss">
.carousel-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 0px 0px;
  grid-template-areas:
    "collection collection"
    "imgs imgs"
    "info info";
  width: 90%;
  height: 600px;
  margin: 1rem auto 3.5rem auto;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  backdrop-filter: blur(20px);
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);

  .collection {
    grid-area: collection;
  }

  .imgs {
    grid-area: imgs;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 300px;
    }
  }

  .info {
    grid-area: info;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    color: black;
    width: 70%;
    margin: 0 auto;
  }
}
</style>

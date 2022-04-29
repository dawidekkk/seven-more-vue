<template>
  <section>
    <BasePages :page-name="title"></BasePages>
    <div class="the-shop">
      <div class="the-shop-wrapper">
        <div class="menu-wrapper">
          <nav>
            <ul>
              <h3>Produkty</h3>
              <li>T-shirt</li>
              <li>Hoodie</li>
              <li>Longsleeve</li>
              <li>Spodnie</li>
              <li>Akcesoria</li>
            </ul>
          </nav>
        </div>
        <div class="menu-wrapper">
          <nav>
            <ul>
              <h3>Kolekcje</h3>
              <li>DROP</li>
              <li>BASIC</li>
              <li>SICARIOS</li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="btns-wrapper">
        <div class="the-shop-btns-wrapper">
          <ShopSizesCheckboxes @change-filter="setFilters" />
          <button @click="filterSize">Test</button>
        </div>
        <div class="the-shop-btns-wrapper">
          <ShopColorCheckboxes @change-filter="setColorFilters" />
        </div>
      </div>
      <div class="bestseller-wrapper" v-if="filterSize">
        <HomeProductCard
          v-for="product in filterSize"
          :key="product.id"
          :id="product.id"
          :name="product.name"
          :color="product.color"
          :image="product.image[0].first"
          :price="product.price"
          :stock="product.stock"
        />
      </div>
    </div>
  </section>
</template>

<script>
import HomeProductCard from "../../components/UI/HomeProductCard";
import ShopSizesCheckboxes from "../../components/UI/ShopSizesCheckboxes";
import ShopColorCheckboxes from "@/components/UI/ShopColorCheckboxes.vue";
// import { reactive } from "vue";
// import { useStore } from "vuex";
// import useFilter from "../../hooks/useFilter";
export default {
  components: {
    HomeProductCard,
    ShopSizesCheckboxes,
    ShopColorCheckboxes,
  },

  data() {
    return {
      title: "Sklep",
      activeFilters: {
        uniwersalny: true,
        s: true,
        m: true,
        l: true,
        xl: true,
      },

      activeColors: {
        czarny: true,
        blekit: true,
        bialy: true,
        bezowy: true,
        grafit: true,
        czerwony: true,
        pomaranczowy: true,
        bordowy: true,
      }
    };
  },

  methods: {
    setFilters(updateFilters) {
      this.activeFilters = updateFilters;
    },

    setColorFilters(updateFilters) {
      this.activeColors = updateFilters;
    },
  },

  computed: {
    products() {
      const products = this.$store.getters.shopProducts;

      return products;
    },

    filterSize() {
      const products = this.$store.getters.shopProducts;
      const size = products.filter((product) => {
        if (this.activeFilters.uniwersalny && product.size.includes("uniwersalny") ||
        this.activeColors.czarny && product.color.includes('czarny')) {
          return true;
        }
        if (this.activeFilters.s && product.size.includes("S") ||
        this.activeColors.blekit && product.color.includes("blekit")) {
          return true;
        }
        if (this.activeFilters.m && product.size.includes("M")) {
          return true;
        }
        if (this.activeFilters.l && product.size.includes("L")) {
          return true;
        }
        if (this.activeFilters.xl && product.size.includes("XL")) {
          return true;
        }

        return false;
      })

      return size;
    },

    filterColors() {
      const products = this.$store.getters.shopProducts;
      const color = products.filter((product) => {
        if (this.activeColors.czarny && product.color.includes('czarny')) {
          return true;
        }
        if (this.activeColors.blekit && product.color.includes("blekit")) {
          return true;
        }
        return false;
      })

      return color;
    }
  },

  setup() {

    // const store = useStore();
    // const products = computed(() => {
    //   return store.getters.shopProducts;
    // })

    // const activeFilters = reactive({
    //   activeFilters: {
    //     uniwersalny: true,
    //     s: true,
    //     m: true,
    //     l: true,
    //     xl: true,
    //   },
    // })

    // const setFilters = (updateFilters) => {
    //   activeFilters.activeFilters = updateFilters;
    // }

    // const [products] = useFilter(activeFilters)

    // return {
    //   setFilters,
    //   activeFilters: activeFilters.activeFilters,
    //   products: products.value,
    //   // sizes,
    // }
  }
};
</script>

<style scoped lang="scss">
.the-shop {
  width: 100%;
  height: 100%;
  background-color: hsl(210, 17%, 98%);
  min-height: auto;
  position: relative;
  top: 100px;
  left: 0;
  color: grey;
  padding: 2rem 0rem;
}

.the-shop-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  height: 100%;
  margin: 0 auto;

  .menu-wrapper {
    display: flex;
    justify-content: center;
    width: auto;
    height: 200px;
    margin: 0 auto;
  }

  li {
    list-style: none;
  }
}

.btns-wrapper {
  margin: 1.5rem auto;
  padding: 0rem 3rem;
  width: 400px;
}

.the-shop-btns-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;

  // button {
  //   margin: 0.5rem 0;
  //   width: 40px;
  //   height: 40px;
  //   border-radius: 50%;
  //   border: 1px solid black;
  //   cursor: pointer;
  // }

  .black {
    background-color: black;
  }
  .white {
    background-color: white;
  }
  .yellow {
    background-color: yellow;
  }
  .blue {
    background-color: blue;
  }
  .violet {
    background-color: violet;
  }
  .grey {
    background-color: grey;
  }
}

.bestseller-wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>

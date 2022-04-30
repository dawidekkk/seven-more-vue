<template>
  <section>
    <BasePages :page-name="title" />
    <div class="the-shop">
      <div class="the-shop-wrapper">
        <div class="menu-wrapper">
          <nav>
            <ul>
              <h3>Produkty</h3>
              <li><router-link to="/sklep/tshirt">T-shirt</router-link></li>
              <li><router-link to="/sklep/hoodies">Hoodies</router-link></li>
              <li><router-link to="/sklep/long">Longsleeve</router-link></li>
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
        <div class="checkbox-wrapper">
          <h3>Rozmiar:</h3>
          <ShopSizesCheckboxes @change-filter="setFilters" />
          <!-- <button @click="filter = true">Test</button> -->
        </div>
        <!-- <div class="checkbox-wrapper">
          <h3>Kolor:</h3>
          <ShopColorCheckboxes @change-filter="setColorFilters" />
        </div> -->
      </div>
      <div>
        <div v-if="shopPath" class="items-wrapper">
          <ProductCard
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
        <div v-if="tshirtPath" class="items-wrapper">
          <router-view :active-filters="activeFilters" />
          <!-- <ShopProductTshirt :active-filters="activeFilters" /> -->
        </div>
        <div v-if="hoodiesPath" class="items-wrapper">
          <router-view :active-filters="activeFilters" />
          <!-- <ShopProductHoodies :active-filters="activeFilters" /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "../../components/UI/ProductCard";
import ShopSizesCheckboxes from "../../components/UI/ShopSizesCheckboxes";
// import ShopProductTshirt from "../../pages/shop/ShopProductTshirt";
// import ShopProductHoodies from "../../pages/shop/ShopProductHoodies";

// import ShopColorCheckboxes from "@/components/UI/ShopColorCheckboxes.vue";
// import ShopProductTshirt from "@/components/UI/ShopProductTshirt.vue";
// import { ref } from "vue";
// import { useStore } from "vuex";
// import useFilter from "../../hooks/useFilter";
export default {
  components: {
    ProductCard,
    ShopSizesCheckboxes,
    // ShopProductTshirt,
    // ShopProductHoodies
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
        bronze: true,
      },

      filter: false,
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
    // tshirts() {
    //   return this.$store.getters.tshirts;
    // },

    hoodies() {
      return this.$store.getters.hoodies;
    },

    tshirtPath() {
      return this.$route.path === "/sklep/tshirt";
    },

    hoodiesPath() {
      return this.$route.path === "/sklep/hoodies";
    },

    shopPath() {
      return this.$route.path === "/sklep";
    },

    filterSize() {
      const products = this.$store.getters.shopProducts;
      const size = products.filter((product) => {
        if (this.activeFilters.uniwersalny && product.size.includes("uniwersalny")) {
          return true;
        }
        if (this.activeFilters.s && product.size.includes("S")) {
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
      });
      return size;
    },
  },
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
  display: flex;
  justify-content: space-around;
  width: 400px;
  height: auto;
  margin: 0 auto;
}

.items-wrapper {
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

        // if (this.activeColors.czarny && product.color.includes("czarny")) {
        //   return true;
        // }
        // if (this.activeColors.blekit && product.color.includes("blekit")) {
        //   return true;
        // }
        // if (this.activeColors.bialy && product.color.includes("bialy")) {
        //   return true;
        // }
        // if (this.activeColors.bezowy && product.color.includes("bezowy")) {
        //   return true;
        // }
        // if (this.activeColors.grafit && product.color.includes("grafit")) {
        //   return true;
        // }
        // if (this.activeColors.czerwony && product.color.includes("czerwony")) {
        //   return true;
        // }
        // if (this.activeColors.pomaranczowy && product.color.includes("pomaranczowy")) {
        //   return true;
        // }
        // if (this.activeColors.bronze && product.color.includes("bronze")) {
        //   return true;
        // }
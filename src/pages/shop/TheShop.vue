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
          <ShopCheckboxes @change-filter="setFilters" />
        </div>
        <div class="the-shop-btns-wrapper">
          <button class="black"></button>
          <button class="white"></button>
          <button class="yellow"></button>
          <button class="blue"></button>
          <button class="violet"></button>
          <button class="grey"></button>
        </div>
      </div>
      <div class="bestseller-wrapper">
        <HomeProductCard
          v-for="product in products"
          :key="product"
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
import ShopCheckboxes from "../../components/UI/ShopCheckboxes"
export default {
  components: {
    HomeProductCard,
    ShopCheckboxes
  },

  data() {
    return {
      title: "Sklep",
      activeFilters: {
        universal: true,
        s: true,
        m: true,
        l: true,
        xl: true,
      }
    };
  },

  methods: {
    setFilters(updateFilters) {
      this.activeFilters = updateFilters;
    }
  },

  computed: {
    products() {
      const products = this.$store.getters.shopProducts

      return products.filter((product) => {
        if(this.activeFilters.universal && product.size.includes('uniwersalny')) {
          return true;
        }
        if(this.activeFilters.s && product.size.includes('S')) {
          return true;
        }
      })    
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

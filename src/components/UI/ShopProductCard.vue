<template>
  <section>
    <BasePages :page-name="`${title}`"></BasePages>
    <div class="shop-product-card">
      <div class="wrapper">
        <div class="imgs">
          <img :src="prod.image[0].first" alt="zdjecie produktu" class="main-img" />
          <div class="img-wrapper">
            <img :src="prod.image[1].second" alt="" class="loop-img" />
            <!-- <img :src="prod.image[2].third" alt="" class="loop-img" /> -->
          </div>
        </div>
        <div class="product-info">
          <div class="info-wrapper">
            <h2>{{ prod.name }}</h2>
            <h3>{{ prod.price }}</h3>
            <p>{{ prod.info }}</p>
            <p :class="prod.color">Kolor: {{ prod.color }}</p>
            <p>Przeznaczenie: {{ prod.gender }}</p>
            <div>
              <span>Rozmiar:</span> <span v-for="size in prod.size" :key="size">{{ size }}, </span>
            </div>
          </div>
          <div>
            <BaseButton class="btn" @click.prevent="addToCart"
              >Dodaj do koszyka</BaseButton
            >
            <p>Dostawa: od 2-4 dni roboczych.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import ShowModal from '../UI/ShowModal'
export default {
  components: {
    // ShowModal,
  },
  props: {
    id: String,
  },
  data() {
    return {
      title: "Sklep",
      prod: [],
    };
  },
  computed: {
    products() {
      return this.$store.getters.shopProducts;
    },
  },

  methods: {

    loadProducts(id) {
      // const id = this.$route.params.id; // this is our props: { id: String } actually.
      const selected = this.products.find((prodId) => prodId.id === id); // MAGIC BEHIND THE SHOPPING CART
      if (!selected) return;
      this.prod = selected;
    },

    addToCart() {
      this.$store.commit({
        type: "addProductToCart",
        productId: this.prod.id,
        name: this.prod.name,
        color: this.prod.color,
        price: this.prod.price,
        image: this.prod.image[0].first,
        stock: this.prod.stock,
        category: this.prod.category,
        info: this.prod.info,
        gender: this.prod.gender,
        size: this.prod.size,
        qty: this.prod.qty,
      });
    },
  },
  created() {
    // created() lifecycle hook will be called when the cmp is created before it's shown on the screen.
    this.loadProducts(this.id);
  },
};
</script>

<style scoped lang="scss">
@mixin flexCenter() {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.shop-product-card {
  width: 100%;
  height: auto;
  background-color: hsl(210, 17%, 98%);
  min-height: auto;
  position: relative;
  top: 100px;
  left: 0;
  color: grey;
  padding: 2rem 3rem;
}

.imgs {
  @include flexCenter();
}

.main-img {
  width: 100%;
  height: 100%;
  // display: flex;

  &:hover {
    transform: scale(2);
  }

  @media screen and (min-width: 600px) {
    width: 500px;
    height: auto;
  }

  @media screen and (min-width: 996px) {
    // width: 650px;
    // height: auto;
  }
}

.img-wrapper {
  display: flex;
  justify-content: center;
}

.loop-img {
  width: 150px;
  height: auto;
}

.btn {
  width: 100%;
  margin: 1rem auto;
}

.input-wrapper {
  @include flexCenter();
  margin: 1rem auto;

  input {
    margin: 1rem auto;
  }
}

.czarny {
  color: black;
}

@media screen and (min-width: 996px) {
  .wrapper {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "imgs product-info";
  }
  .imgs {
    grid-area: imgs;
  }
  .product-info {
    grid-area: product-info;
    font-size: 1.5rem;
    @include flexCenter();
  }
}

</style>

<template>
  <section>
    <BasePages :page-name="`${title}`"></BasePages>
    <div class="shop-product-card">
      <div class="wrapper">
        <img :src="prod.image[0].first" alt="zdjecie produktu" class="main-img" />
        <div class="img-wrapper">
          <img :src="prod.image[1].second" alt="" class="loop-img" />
          <img :src="prod.image[2].third" alt="" class="loop-img" />
        </div>
        <div class="info-wrapper">
          <h2>{{ prod.name }}</h2>
          <h3>{{ prod.price }}</h3>
          <p>{{ prod.info }}</p>
          <p>Kolor: {{ prod.color }}</p>
          <p>Przeznaczenie: {{ prod.gender }}</p>
          <p>Rozmiar: {{ prod.size }}</p>
        </div>
        <form class="input-wrapper">
          <input type="number" min="1" max="10" value="1" />
          <BaseButton @click.prevent="addToCart">Dodaj do koszyka</BaseButton>
          <p>Dostawa: od 2-4 dni roboczych.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
        type: 'addProductToCart',
        id: this.prod.id,
        name: this.prod.name,
        color: this.prod.color,
        price: this.prod.price,
        image: this.prod.image[0].first,
        stock: this.prod.stock,
        category: this.prod.category,
        info: this.prod.info,
        gender: this.prod.gender,
        size: this.prod.size,
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

.main-img {
  width: 100%;
  height: 100%;
}

.img-wrapper {
  display: flex;
  justify-content: center;
}

.loop-img {
  width: 150px;
  height: auto;
}

.input-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem auto;

  input {
    margin: 1rem auto;
  }
}
</style>

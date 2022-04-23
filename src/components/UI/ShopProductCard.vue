<template>
  <section>
    <BasePages :page-name="title"></BasePages>
    <div class="shop-product-card">
      <div class="wrapper">
        <p>{{ this.$route.params.id }}</p>
        <img :src="image" alt="zdjecie produktu" />
        <div class="img-wrapper">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div class="product-info">
          <h2>{{ name }}</h2>
          <h3>{{ price }}</h3>
          <p>{{ info }}</p>
          <p>{{ color }}</p>
          <p>{{ gender }}</p>
          <p>{{ size }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    image: String,
    price: Number,
    stock: String,
    color: String,
    info: String,
    gender: String,
    size: String,
  },
  data() {
    return {
      title: "Sklep",
    };
  },
  methods: {
    shopProd() {
      return this.$store.getters.shopProducts;
    },
  },

  mounted() {
    console.log(this.$route.params.id)
  },
};
</script>

<style scoped lang="scss">
.shop-product-card {
  width: 100%;
  background-color: hsl(210, 17%, 98%);
  min-height: auto;
  position: relative;
  top: 100px;
  left: 0;
  color: grey;
  padding: 2rem 3rem;
}
</style>

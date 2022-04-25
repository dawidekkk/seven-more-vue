<template>
  <div class="home-product-card">
    <h4>{{ stock }}</h4>
    <router-link :to="`/sklep/${id}`">
      <img :src="image" alt="zdjecie produktu" class="img" />
    </router-link>
    <p>{{ name }}</p>
    <span>{{ color }}</span>
    <p>{{ price }}</p>
    <div class="btn-wrapper">
      <BaseButton class="btn" @click="addToCart">
        DODAJ DO KOSZYKA<font-awesome-icon icon="plus" class="plus" />
      </BaseButton>
    </div>
  </div>
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
  },

  methods: {
    addToCart() {
      this.$store.commit({
        type: "addProductToCart",
        id: this.id,
        name: this.name,
        image: this.image,
        price: this.price,
        color: this.color,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.home-product-card {
  width: auto;
  height: auto;
  background-color: aquamarine;
  color: black;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  backdrop-filter: blur(20px);
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
}

.plus {
  width: 1rem;
  height: 1rem;
}

.img {
  width: 160px;
  height: auto;
  display: flex;
  margin: 0 auto;

  @media screen and (min-width: 600px) {
    width: 250px;
  }

  @media screen and (min-width: 992px) {
    width: 350px;
  }
}
</style>

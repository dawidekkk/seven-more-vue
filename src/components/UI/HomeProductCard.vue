<template>
  <div class="home-product-card">
    <h4>{{ stock }}</h4>
    <a href="">
      <img :src="image" alt="zdjecie produktu" class="img" />
    </a>
    <p>{{ name }}</p>
    <span>{{ color }}</span>
    <p>{{ price }}</p>
    <div>
      <button class="btn">
        <h4 class="home-product-h4">
          dodaj do koszyka<font-awesome-icon icon="plus" class="plus" />
        </h4>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    color: String,
    price: Number,
    image: String,
    stock: String,
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

.home-product-h4 {
  text-transform: uppercase;
}

.plus {
  width: 1rem;
  height: 1rem;
}

.btn {
  border: none;
  background-color: inherit;
  cursor: pointer;
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

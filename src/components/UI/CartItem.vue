<template>
  <li>
    <div class="wrapper">
      <div class="img-wrapper">
        <img :src="image" alt="title" />
      </div>
      <div>
        <h3>{{ name }}</h3>
        <h4>{{ color }}</h4>
        <div class="item__data">
          <div>
            Price per Item:
            <strong>${{ price }}</strong>
          </div>
          <div>
            Quantity:
            <strong>{{ qty }}</strong>
          </div>
        </div>
        <div class="item__total">Total: ${{ itemTotal }}</div>
        <button @click="removeProductFromCart({ id })">Remove</button>
      </div>
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["id", "name", "image", "price", "qty", "color"],

  computed: {
    itemTotal() {
      return (this.price * this.qty).toFixed(2);
    },
  },
  methods: {
    ...mapActions["removeProductFromCart"],
  },
};
</script>

<style scoped lang="scss">
li {
  list-style: none;
  width: 400px;
  height: auto;
  border: 1px solid black;
}

.img-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
    height: auto;
  }
}
</style>

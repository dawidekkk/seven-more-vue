<template>
  <section>
    <BasePages :page-name="title"></BasePages>
    <div class="shopping-carts">
      <div class="empty">
        <h2>Koszyk jest pusty! :( Nic nie znajduję się obecnie w koszyku.</h2>
      </div>
      <div>
        <h2>Your cart</h2>
        <h3>Total amount: {{ cartTotal }}</h3>
        <ul>
          <CartItem
            v-for="item in cartItems"
            :key="item.id"
            :name="item.name"
            :price="item.price"
            :qty="item.qty"
            :id="item.id"
            :image="item.image"
            :color="item.color"
          />
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import CartItem from "../../components/UI/CartItem";
export default {
  components: {
    CartItem,
  },

  data() {
    return {
      title: "Koszyk",
      empty: false,
    };
  },

  computed: {
    cartTotal() {
      return this.$store.getters.cartTotal.toFixed(2);
    },
    cartItems() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>

<style scoped lang="scss">
.shopping-carts {
  width: 100%;
  height: 100%;
  background-color: hsl(210, 17%, 98%);
  min-height: auto;
  position: relative;
  top: 100px;
  left: 0;
  color: grey;
  padding: 2rem 3rem;
}

.empty {
  background-color: #d1ecf1;
  padding: 1rem;

  h2 {
    color: #0e5561;
  }
}

ul {
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  // justify-content: center;
  flex-wrap: wrap;
}

// h3 {
//   text-align: center;
//   margin: 1.5rem auto;
//   color: grey;
//   font-weight: bold;
// }

// a {
//   font-size: 2.25rem;
// }

// @media screen and (min-width: 992px) {
//   ul {
//     width: 50%;
//     margin: 0 auto;
//   }
// }
</style>

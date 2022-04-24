<template>
  <section>
    <BasePages :page-name="title"></BasePages>
    <div class="shopping-carts">
      <div class="empty" v-if="!hasCartItems">
        <h2>Koszyk jest pusty! :( Nic nie znajduję się obecnie w koszyku.</h2>
      </div>
      <div>
        <div class="title-wrapper" v-if="hasCartItems">
          <h2>Twoje zamówienie:</h2>
        </div>
        <ul class="ul">
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
      <div class="title-wrapper" v-if="hasCartItems">
        <h3>Kwota całkowita: {{ cartTotal }} PLN</h3>
        <div class="input-wrapper">
          <input class="input-ok" type="text" placeholder="Kod promocyjny" />
          <BaseButton class="button-ok">Dodaj kod promocyjny</BaseButton>
        </div>
        <BaseButton class="button-next">DALEJ</BaseButton>
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

    hasCartItems() {
      return this.$store.getters.hasCartItems;
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
  padding: 2rem 1rem;
}

.empty {
  background-color: #d1ecf1;
  padding: 1rem;

  @media screen and (min-width: 996px) {
    width: 80%;
    margin: 0 auto;
  }

  h2 {
    color: #0e5561;
    text-align: center;
  }
}

.title-wrapper {
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    width: 500px;
  }
}

.input-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1rem auto;
}

ul {
  width: 100%;
  height: auto;
}

.input-ok {
  width: 160px;
  border-radius: 8px;
  border: none;
  height: 42px;
  font-weight: bold;
  border: 0.5px solid grey;
}

.button-next {
  width: 80%;
}
</style>

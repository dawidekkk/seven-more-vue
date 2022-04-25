<template>
  <li>
    <div class="wrapper">
      <div class="img-wrapper">
        <router-link :to="`/sklep/${id}`">
          <img :src="image" alt="title" />
        </router-link>
      </div>
      <div>
        <h3>{{ name }}</h3>
        <h4 :class="color">Kolor: {{ color }}</h4>
        <div class="item-data">
          <div class="info">
            Kwota za produkt:
            <strong>{{ price }} PLN</strong>
          </div>
          <div>
            Ilość: <strong>{{ qty }} {{ checkQty() }}</strong>
          </div>
        </div>
        <div class="item-total">Całość: {{ itemTotal }} PLN</div>
        <div class="btn-wrapper">
          <div class="btns-inc-dec">
            <BaseButton @click="decrease">-</BaseButton>
            <BaseButton @click="increase">+</BaseButton>
          </div>
          <div>
            <BaseButton @click="removeProductFromCart">Usuń</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "image", "price", "qty", "color"],
  computed: {
    itemTotal() {
      return (this.price * this.qty).toFixed(2);
    },
  },

  data() {
    return {
      qtyy: this.qty,
    };
  },

  watch: {
    qty(val) {
      if (val === 0) {
        this.removeProductFromCart();
        this.resetProducts();
      }
    },
  },

  methods: {
    increase() {
      this.$store.dispatch({
        type: "increase",
        id: this.id,
        price: this.price,
      });
    },

    resetProducts() {
      this.$store.dispatch({
        type: "resetProducts",
        id: this.id,
      });
    },

    decrease() {
      this.$store.dispatch({
        type: "decrease",
        id: this.id,
        price: this.price,
      });
    },

    removeProductFromCart() {
      this.$store.dispatch({
        type: "removeProductFromCart",
        id: this.id,
      });
    },

    checkQty() {
      if (this.qty === 1) {
        return "sztuka";
      } else if (this.qty === 2 || this.qty === 3 || this.qty === 4) {
        return "sztuki";
      } else {
        return "sztuk";
      }
    },
  },

  // created() {
  //   console.log(this.removeProductFromCart())
  // },
};
</script>

<style scoped lang="scss">
li {
  list-style: none;
  width: 100%;
  height: auto;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid rgb(187, 187, 187);
}

.info {
  margin-top: 1rem;
}

.btn-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;

  .btns-inc-dec {
    display: flex;

    button {
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
  }
}

.img-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    height: auto;
  }
}

input {
  width: 80px;
  padding: 0.5rem;
}

.czarny {
  color: black;
}

.pomaranczowy {
  color: orange;
}

.blekit {
  color: rgb(0, 140, 255);
}

.bialy {
  color: rgb(226, 226, 226);
}

.bezowy {
  color: beige;
}

.grafit {
  color: grey;
}

.bordowy {
  color: violet;
}

@media screen and (min-width: 600px) {
  .wrapper {
    width: 500px;
  }
}
</style>

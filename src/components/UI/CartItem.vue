<template>
  <li>
    <div class="wrapper">
      <div class="img-wrapper">
        <img :src="image" alt="title" />
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
          <div>
            <BaseButton class="test" @click="increase">Wiecej</BaseButton>
            <BaseButton class="test" @click="decrease">Mniej</BaseButton>
          </div>
          <BaseButton @click="removeProductFromCart">Usuń</BaseButton>
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
  methods: {
    increase() {
      this.$store.dispatch({
        type: "increase",
        id: this.id,
        price: this.price,
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
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
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

.test {
  width: 80px;
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

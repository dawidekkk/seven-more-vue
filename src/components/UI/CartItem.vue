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
            Kwota za produkt:
            <strong>{{ price }} PLN</strong>
          </div>
          <div>
            Ilość:
            <strong>{{ qty }} {{ checkQty() }} </strong>
          </div>
        </div>
        <div class="item__total">Total: ${{ itemTotal }}</div>
        <button @click="removeProductFromCart">Remove</button>
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
    removeProductFromCart() {
      this.$store.commit({
        type: 'removeProductFromCart',
        id: this.id,
        // image: this.image,
        // name: this.name,
        // price: this.price,
        // color: this.color,
      })
    },

    checkQty() {
      if(this.qty === 1) {
        return 'sztuka'
      } else if(this.qty === 2 || this.qty === 3 || this.qty === 4) {
        return 'sztuki'
      } else {
        return 'sztuk';
      }
    }
  },
};
</script>

<style scoped lang="scss">
li {
  list-style: none;
  width: 90%;
  height: auto;
  border: 1px solid black;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.img-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    height: auto;
  }
}
</style>

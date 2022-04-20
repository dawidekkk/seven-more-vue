<template>
  <section>
    <BasePages :page-name="title"></BasePages>
    <div class="shop-product-card">
      <div class="wrapper">
        <div >
123
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

  props: {
    image: String,
  },

  data() {
    return {
      title: "Sklep",
    };
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

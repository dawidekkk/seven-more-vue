<template>
  <div class="wrapper">
    <div>
      <input type="checkbox" id="uniwersalny" checked @change="setFilter" />
      <label for="uniwersalny">Uniwersalny</label>
    </div>
    <div>
      <input type="checkbox" id="s" checked @change="setFilter" />
      <label for="s">S</label>
    </div>
    <div>
      <input type="checkbox" id="m" checked @change="setFilter" />
      <label for="m">M</label>
    </div>
    <div>
      <input type="checkbox" id="l" checked @change="setFilter" />
      <label for="l">L</label>
    </div>
    <div>
      <input type="checkbox" id="xl" checked @change="setFilter" />
      <label for="xl">XL</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizes: {
        uniwersalny: true,
        s: true,
        m: true,
        l: true,
        xl: true,
      },
    };
  },

  methods: {
    setFilter(e) {
      const inputId = e.target.id;
      const isActive = e.target.checked;
      const updateFilters = {
        ...this.sizes, // copying object
        [inputId]: isActive, // at the moment, [inputId] is our KEY. So s: isActive(true or false) etc...
      };

      this.sizes = updateFilters;
      this.$emit("change-filter", updateFilters);
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  margin-bottom: 2rem;
}
</style>

<template>
  <div>
    <input type="checkbox" id="czarny" checked @change="setFilter" />
    <label for="czarny">Czarny</label>
  </div>
  <div>
    <input type="checkbox" id="blekit" checked @change="setFilter" />
    <label for="blekit">Błękitny</label>
  </div>
  <div>
    <input type="checkbox" id="bialy" checked @change="setFilter" />
    <label for="bialy">Biały</label>
  </div>
  <div>
    <input type="checkbox" id="bezowy" checked @change="setFilter" />
    <label for="bezowy">Beżowy</label>
  </div>
  <div>
    <input type="checkbox" id="grafit" checked @change="setFilter" />
    <label for="grafit">Grafit</label>
  </div>
  <div>
    <input type="checkbox" id="czerwony" checked @change="setFilter" />
    <label for="czerwony">Czerwony</label>
  </div>
  <div>
    <input type="checkbox" id="pomaranczowy" checked @change="setFilter" />
    <label for="pomaranczowy">Pomarańczowy</label>
  </div>
  <div>
    <input type="checkbox" id="bordowy" checked @change="setFilter" />
    <label for="bordowy">Bordowy</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: {
        czarny: true,
        blekit: true,
        bialy: true,
        bezowy: true,
        grafit: true,
        czerwony: true,
        pomaranczowy: true,
        bordowy: true,
      },
    };
  },

  methods: {
    setFilter(e) {
      const inputId = e.target.id;
      console.log(inputId);
      const isActive = e.target.checked;
      const updateFilters = {
        ...this.colors, // copying object
        [inputId]: isActive, // at the moment, [inputId] is our KEY. So s: isActive(true or false) etc...
      };

      this.colors = updateFilters;
      this.$emit("change-filter", updateFilters);
    },
  },
};
</script>

<style scoped>

</style>
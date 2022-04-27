<template>
  <form>
    <select name="size" id="selectSize" :value="modelValue" @input="updateModelValue">
      <option disabled value="">Rozmiar:</option>
      <option v-if="size[0]" :value="size[0]">{{size[0]}}</option>
      <option v-if="size[1]" :value="size[1]">{{size[1]}}</option>
      <option v-if="size[2]" :value="size[2]">{{size[2]}}</option>
      <option v-if="size[3]" :value="size[3]">{{size[3]}}</option>
    </select>
  </form>
</template>

<script>
export default {

  props: {
    size: Array,
    modelValue: String,
  },

  data() {
    return {
      // selected: '',
    }
  },

  methods: {
    updateModelValue(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  },

  mounted() {
    console.log(this.selected)
  },
};
</script>

<style scoped>

</style>

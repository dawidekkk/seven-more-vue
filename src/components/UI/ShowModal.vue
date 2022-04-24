<template>
  <teleport to="body">
    <div>
      <img :src="image" alt="" />
    </div>
  </teleport>
</template>

<script>
export default {
  props: ["image"],
};
</script>

<style scoped></style>

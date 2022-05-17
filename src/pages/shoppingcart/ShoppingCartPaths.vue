<template>
  <div class="paths">
    <div class="path" :class="{ activeShop }">
      <p>1. Koszyk</p>
    </div>
    <div class="path" :class="{activeShop: this.$route.path === '/logowanie'}">
      <p>2. Logowanie</p>
    </div>
    <div class="path">
      <p>3. Transport</p>
    </div>
    <div class="path">
      <p>4. Płatność</p>
    </div>
    <div class="path">
      <p>5. Zakończenie</p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    activeShop: String,
  },



};
</script>

<style scoped lang="scss">
.paths {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem auto;
  color: rgb(40, 40, 40);
}

.path {
  width: 250px;
  background-color: #cdcdcd;
  margin-bottom: 0.5rem;
  text-align: center;
  padding: 0.75rem;
}

@keyframes bg {
  from {
    background-color: #78d5ef;
  }

  to {
    background-color: #1893b5;
  }
}

@media screen and (min-width: 1200px) {
  .paths {
    flex-direction: row;
  }

  .path {
    margin: 0rem 0.5rem;
  }
}

.activeShop {
  background-color: #78d5ef;
  color: white;
  animation-name: bg;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
}
</style>

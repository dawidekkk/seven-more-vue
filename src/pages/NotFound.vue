<template>
  <section>
    <h2>Page Not Found</h2>
    <p>This page could not be found - maybe check out all our: <router-link to="/home">home</router-link></p>
  </section>
</template>

<style scoped>
section {
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  font-size: 30px;
  width: 90%;
}
</style>
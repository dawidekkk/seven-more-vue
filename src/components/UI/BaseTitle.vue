<template>
  <h2>
    <slot></slot>
  </h2>
</template>

<style scoped lang="scss">
h2 {
  text-transform: uppercase;
  letter-spacing: 6px;
  font-weight: 400;
  font-size: 28px;
  color: black;
  text-align: center;
  padding: 2rem 2rem;

  @media screen and (min-width: 1200px) {
    font-size: 42px;
  }
}
</style>
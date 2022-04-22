<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  width: 160px;
  border-radius: 8px;
  border: none;
  height: 42px;
  font-weight: bold;
  background: linear-gradient(145deg, #ffffff, #e0e1e2);
  box-shadow: 8px 8px 17px #d4d5d5, -8px -8px 17px #ffffff;
  cursor: pointer;

  &:hover,
  &:active {
    box-shadow: inset 8px 8px 17px #d4d5d5, inset -8px -8px 17px #ffffff;
  }
}
</style>
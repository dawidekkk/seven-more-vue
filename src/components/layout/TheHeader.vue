<template>
  <header>
    <div class="logo-wrapper">
      <img src="../../assets/images/logo.png" alt="logo strony">
    </div>
    <font-awesome-icon icon="bars" class="icon" />
    <nav class="hidden">
      <ul>
        <li>home</li>
        <li>sklep</li>
        <li>kontakt</li>
        <li>koszyk</li>
        <li>logowanie</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0; left: 0;
  z-index: 100;
  width: 100vw;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: .5rem;
}

ul > li {
  text-transform: uppercase;
  list-style: none;
}

a {
  text-decoration: none;
}

.hidden {
  display: none;
}

.icon {
  height: 2rem;
}
</style>
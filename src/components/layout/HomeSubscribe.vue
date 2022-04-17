<template>
  <section class="home-sub">
    <BaseTitle>DOŁĄCZ DO NAS!</BaseTitle>
    <form action="email">
      <label for="email">
        <input type="email" placeholder="Wpisz swój adres email" />
        <button type="submit">Subcribe</button>
      </label>
    </form>
  </section>
</template>

<style scoped lang="scss">
@mixin center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-sub {
  width: 100vw;
  height: 45vh;
  background-color: rgb(255, 255, 255);
  @include center();
  flex-direction: column;
}

form {
  @include center();
}

input {
  height: 52px;
  border: 1px solid black;
  color: black;
  font-size: 16px;
  width: 300px;
  padding: 0.5rem;
}

button {
  height: 52px;
  width: 80px;
  border: none;
  color: white;
  background-color: black;
  font-size: 16px;
}
</style>

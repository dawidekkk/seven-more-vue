<template>
  <section class="home-sub">
    <h1 class="h1">Newsletter</h1>
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
  position: relative
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

.h1 {
  opacity: 0;
  display: none;

  @media screen and (min-width: 1200px) {
    opacity: 1;
    display: block;
    position: absolute;
    top: -23%; left: 50%;
    transform: translate(-50%, 50%);
    color: rgba(128, 128, 128, 0.12);
    font-size: 180px;
  }
}
</style>

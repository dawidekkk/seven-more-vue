<template>
  <section class="home-sub">
  <h2>DOŁĄCZ DO NAS!</h2>
    <form action="email">
      <label for="email">
        <input type="email" placeholder="Wpisz swój adres email">
        <button type="submit">Subcribe</button>
      </label>
    </form>
  </section>
</template>

<style scoped>
.home-sub {
  width: 100vw;
  height: 50vh;
  background-color: rgb(161, 161, 161);
  padding: 4rem 0rem;
  /* background-image: url("../../assets/images/bg_4.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
}

h2 {
  color: white;
  font-size: 36px;
  text-align: center;
  margin: 2rem auto;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
}

input {
  height: 52px;
  border: 1px solid black;;
  color: black;
  font-size: 16px;
  width: 300px;
  padding: .5rem;
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
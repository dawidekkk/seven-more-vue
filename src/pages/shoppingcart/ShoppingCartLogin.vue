<template>
  <section>
    <BasePages :page-name="title"></BasePages>
    <div class="wrapper">
      <ShoppingCartPaths />
      <div>
        <form class="form">
          <label for="email" class="label">Logowanie do konta</label>
          <input type="email" name="email" placeholder="Email" class="input-name">
          <input type="password" name="password" placeholder="Password" class="input-name">
          <input type="submit" name="submit" class="submit">
          <router-link to="/przypomnij-haslo" class="forget">Nie pamietasz hasla?</router-link>
        </form>
        <div class="account-wrapper">
          <h2>Nie masz konta?</h2>
          <p>Rejestracja zajmie Ci tylko kilka minut!</p>
          <button class="submit">Utworz nowe konto</button>
          <button class="submit">Wykonaj zakup bez logowania</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ShoppingCartPaths from "./ShoppingCartPaths.vue";
export default {
  data() {
    return {
      title: "Logowanie",
    };
  },
  components: { ShoppingCartPaths },
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  background-color: hsl(210, 17%, 98%);
  min-height: auto;
  position: relative;
  top: 100px;
  left: 0;
  color: grey;
  padding: 2rem 3rem;
}

h3 {
  text-align: center;
  margin: 1.5rem auto;
  color: grey;
  font-weight: bold;
}

a {
  font-size: 2.25rem;
}

.form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1.5rem auto;
}

.account-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.input-name {
  height: 52px;
  border: 1px solid black;
  color: black;
  font-size: 16px;
  width: 300px;
  padding: 0.5rem;
  margin-bottom: 4px;
}

.label {
  font-size: 1.5rem;
}

.forget {
  font-size: 1rem;
}

.submit {
  width: 100%;
  height: 42px;
  border-radius: 30px;
  border: none;
  font-size: 1rem;
  margin: .5rem auto;  
}

@media screen and (min-width: 992px) {
  ul {
    width: 50%;
    margin: 0 auto;
  }
}
</style>

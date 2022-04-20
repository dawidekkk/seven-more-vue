<template>
  <section>
    <div class="contact-form">
      <form @submit.prevent="submitForm">
        <h2>Formularz kontaktowy</h2>
        <div class="form-control">
          <label for="name">Imię i nazwisko:</label>
          <input type="text" name="name" required>
        </div>
        <div class="form-control">
          <label for="phone">Numer telefonu:</label>
          <input type="number" name="phone" required>
        </div>
        <div class="form-control">
          <label for="email">E-mail:</label>
          <input type="email" name="email" required>
        </div>
        <div class="form-control">
          <label for="textarea">Treść wiadomości:</label>
          <textarea name="textarea" id="" cols="30" rows="10" placeholder="podeślij wiadke wariacie"></textarea>
        </div>
        <button>Wyślij zapytanie</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
.form-control {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem auto;
  
  input,
  textarea {
    padding: .5rem;
  }
}

button {
  width: 50%;
  height: 2.5rem;
  border-radius: 8px;
  border: none;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  color: white;
  font-size: 18px;
}

@media screen and (min-width: 992px) {
  .contact-form {
    width: 60%;
    margin: 0 auto;
  }
}
</style>
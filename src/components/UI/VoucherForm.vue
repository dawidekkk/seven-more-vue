<template>
  <form action="">
    <label for="price"><strong>Voucher prezentowy 7MORE7</strong></label>
    <input
      type="number"
      class="price"
      id="price"
      placeholder="minimalnie 100,00"
      min="100,00"
      value="100,00"
    />

    <div class="radio">
      <h3>Przesyłka:</h3>
      <div>
        <input type="radio" id="elektroniczna" name="ship" />
        <label for="elektroniczna" class="lab"
          ><strong>Forma elektroniczna</strong> 0,00 PLN</label
        >
      </div>
      <div>
        <input type="radio" id="inpost" name="ship" />
        <label for="inpost" class="lab"
          ><strong>InPost Paczkomaty</strong> 24/7 11,00 PLN</label
        >
      </div>
      <div>
        <input type="radio" id="kurier" name="ship" />
        <label for="kurier" class="lab"
          ><strong>Kurierska krajowa</strong> 17,00 PLN</label
        >
      </div>
    </div>
    <div class="ship-info">
      <h3>Dane kupującego:</h3>
      <div>
        <label for="name">Imię i nazwisko:</label>
        <input
          type="text"
          name="name"
          class="input-name"
          required
          placeholder="Imię i naziwsko"
        />
      </div>
      <div>
        <label for="street">Ulica i nr budynku:</label>
        <input
          type="text"
          name="street"
          class="input-name"
          required
          placeholder="Ulica i nr. budynku"
        />
      </div>
      <div>
        <label for="post-nr">Kod pocztowy:</label>
        <input
          type="number"
          name="post-nr"
          class="input-name"
          required
          placeholder="Kod pocztowy"
        />
      </div>
      <div>
        <label for="city">Miasto:</label>
        <input type="text" name="city" class="input-name" required placeholder="Miasto" />
      </div>
      <div>
        <label for="number">Miasto:</label>
        <input
          type="number"
          name="number"
          class="input-name"
          required
          placeholder="Number"
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          class="input-name"
          required
          placeholder="Email"
        />
      </div>
    </div>
    <div class="checkboxes">
      <div>
        <input type="checkbox" required name="rule-one" id="rule-one" />
        <label for="rule-one"
          >Zapoznałem/am/ się i akceptuję
          <router-link to="/regulamin">regulamin</router-link> oraz politykę
          prywatności</label
        >
      </div>
    </div>
  </form>
</template>

<style scoped>
.price,
.input-name {
  height: 52px;
  border: 1px solid black;
  color: black;
  font-size: 16px;
  width: 300px;
  padding: 0.5rem;
}

.radio {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 1.5rem auto;
}

.ship-info > div {
  margin: 1rem auto;
}
</style>

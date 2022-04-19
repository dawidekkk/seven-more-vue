<template>
  <section>
    <BasePages :page-name="title"></BasePages>
    <div class="ship-info">
      <div class="payment-info">
        <h2>Płatność</h2>
        <p>
          Płatności w sklepie internetowym dokonuje się za pośrednictwem firmy ROOTPAY Sp.
          z o.o., BLUEMEDIA S.A. lub za pobraniem - płatność podczas odbioru paczki oraz
          za pośrednictwem PayPala
        </p>
        <img
          src="../../assets/images/banner_platnosci_kart+blik.png"
          alt="zdjecie banerow z platnosciami"
        />
      </div>
      <div class="payment-info">
        <h2>Wysyłka</h2>
        <h3>Wysyłki realizujemy za pośrednictwem firmy kurierskiej GLS.</h3>
        <ul>
          <li>przesyłka przedpłacona - 17,00 zł</li>
          <li>przesyłka pobraniowa - 19,00 zł</li>
          <li>przesyłka InPost Paczkomaty 24/7 - 11,00 zł</li>
          <li>przesyłka zagraniczna - od 70,00 zł</li>
        </ul>
        <p>
          (Austria, Belgia, Chorwacja, Czechy, Estonia, Holandia, Litwa, Łotwa, Niemcy,
          Słowacja, Słowenia, Węgry, Włochy, Szwecja, Finlandia, Irlandia Północna, Dania,
          Irlandia Południowa)
        </p>
        <p>Bezpłatna przesyłka krajowa przy zamówieniu powyżej 700 zł</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Platność i wysyłka",
    };
  },
};
</script>

<style scoped lang="scss">
.ship-info {
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

.payment-info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    margin: 1.5rem auto;
  }
}

@media screen and (min-width: 992px) {
  .payment-info {
    width: 50%;
    margin: 0 auto;
  }
}
</style>

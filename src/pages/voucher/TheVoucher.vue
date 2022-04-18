<template>
  <section>
    <BasePages :page-name="title"></BasePages>
    <div class="the-voucher">
      <h1>Karta Podarunkowa 7MORE7</h1>
      <p>
        Chciałbyś obdarować bliską osobę prezentem z naszego sklepu 7MORE7, ale nie do
        końca wiesz, na jaki produkt się zdecydować? Nie musisz zastanawiać się, co wybrać
        z naszej oferty - postaw na Kartę Podarunkową 7MORE7!
      </p>
      <p>Voucher prezentowy 7MORE7 dostępny jest dwóch wersjach:</p>
      <ul>
        <li>elektronicznej - w formie pliku PDF (wysyłany na adres email),</li>
        <li>
          tradycyjnej - w formie Karty Podarunkowej 7MORE7 (wysyłany na podany adres
          dostawy).
        </li>
      </ul>
      <p>
        Sam decydujesz, jaką wartość pieniężną będzie miała Twoja Karta Podarunkowa - 100
        zł (minimalnie) do 500 zł (maksymalnie).
      </p>
      <p>
        Karta Podarunkowa 7MORE7 jest jednorazowa. Możesz z niej skorzystać w przypadku,
        gdy wartość produktów w Twoim koszyku jest większa niż kwota Karty Podarunkowej
        7MORE7. W przypadku, gdy wartość produków jest wyższa niż wartość Karty
        Podarunkowej, możesz dopłacić różnicę. Karta Podarunkowa nie może zostać
        wykorzystana na pokrycie kosztów dostawy.
      </p>
      <p>
        Voucher prezentowy 7MORE7 jest ważny przez 12 miesięcy od daty zakupu i możesz go
        wykorzystać wyłącznie na terytorium Polski.
      </p>
      <p>
        Ważność i wartość Twojego Vouchera możesz sprawdzić pod linkiem
        https://www.7more.com/voucher-sprawdz
      </p>
      <p>Regulamin Karty Podarunkowej 7MORE7 https://www.7more.com/regulamin-voucher</p>
      <div>
        <img src="../../assets/images/voucher.png" alt="zdjecie vouchera" class="img" />
        <VoucherForm />
      </div>
    </div>
  </section>
</template>

<script>
import VoucherForm from "../../components/UI/VoucherForm.vue";
export default {
    data() {
        return {
            title: "voucher",
        };
    },
    components: { VoucherForm }
};
</script>

<style scoped lang="scss">
.the-voucher {
  width: 100%;
  background-color: hsl(210, 17%, 98%);
  height: 100%;
  min-height: auto;
  position: relative;
  top: 100px;
  left: 0;
  color: grey;
  padding: 2rem 3rem;

  h1 {
    color: black;
  }

  p {
    margin: 1rem auto;
  }
}

.img {
  width: 200px;
  height: 200px;
}
</style>

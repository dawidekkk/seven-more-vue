<template>
  <section>
    <BasePages :page-name="title"></BasePages>
    <div class="the-contact">
      <div class="the-contact-wrapper">
        <div class="contact-info-wrapper">
          <div class="contact-info">
            <h2>7MORE7.COM</h2>
            <p>ul. Podcienie 2</p>
            <p>43-300 Bielsko-Biała</p>
            <p>sklep@7more7.com</p>
          </div>
          <div class="contact-info">
            <h2>Adres do zwrotów</h2>
            <p>Centrum Logistyczne - 7MORE7</p>
            <p>ul. Nad Białą 5</p>
            <p>43-300 Bielsko-Biała</p>
          </div>
        </div>
        <div class="contact-info">
          <h2>FAQ</h2>
          <div class="toggle-box" mode="out-in" @click="activeOne">
            <h3>Jak dokonać zwrotu produktu?</h3>
            <transition name="test" mode="out-in">
              <p v-if="toggleOne">
                Jeżeli produkt nie posiada śladów użytkowania, można dokonać zwrotu
                produktu w terminie 14 dni. Adres do zwrotu: Centrum Logistyczne - 7MORE7
                ul. Nad Białą 5 43-300 Bielsko-Biała Formularz do zwrotu dostępny po
                pobrania:
                <router-link to="/pliki"
                  >Przekierowanie do strony z plikami do pobrania.</router-link
                >
              </p>
            </transition>
          </div>
          <div class="toggle-box" mode="out-in" @click="activeTwo">
            <h3>Czy można dokonać wymiany rozmiaru?</h3>
            <transition name="test" mode="out-in">
              <p v-if="toggleTwo">
                Produkty dostępne w sprzedaży są produktami limitowanymi i nie ma
                możliwości dokonania wymiany na inny rozmiar. Można dokonać zwrotu w
                terminie 14 dni.
              </p>
            </transition>
          </div>
          <div class="toggle-box" mode="out-in" @click="activeThree">
            <h3>Czy dostępny będzie dany model/rozmiar?</h3>
            <transition name="test" mode="out-in">
              <p v-if="toggleThree">
                Produkty są limitowane i ich ilość jest ograniczona. Zachęcamy do
                śledzenia naszych social mediów, tam publikowane są wszystkie informację
                na temat kolekcji i dostępności.
              </p>
            </transition>
          </div>
          <div class="toggle-box" mode="out-in" @click="activeFour">
            <h3>Czy moje zamówienie zostało wysłane?</h3>
            <transition name="test" mode="out-in">
              <p v-if="toggleFour">
                Regulaminowy czas realizacji zamówień wynosi od 2 do 14 dni roboczych. W
                momencie spakowania przesyłki otrzymują Państwo maila od firmy kurierskiej
                z linkiem do śledzenia.
              </p>
            </transition>
          </div>
          <div class="toggle-box" mode="out-in" @click="activeFive">
            <h3>
              Po opłaceniu zamówienia otrzymałam/em maila z informacją o jego anulowainu.
              Jaki jest tego powód?
            </h3>
            <transition name="test" mode="out-in">
              <p v-if="toggleFive">
                Najczęstszą przyczyną otrzymana takiej wiadomości jest fakt złożenia dwóch
                identycznych zamówień i opłacenie tylko jednego z nich. W tej sytuacji
                należy porównać maile z numerami zamówienia, aby sprawdzić, które zostało
                poprawnie opłacone. Brak opłaty za złożone zamówienie skutkuje jego
                automatycznym anulowaniem. Innym powodem może być przedłużone księgowanie
                transakcji w banku, jeśli zamówienie zostało opłacone w weekend. W tej
                sytuacji należy kontaktować się mailowo z obsługą sklepu poprzez
                formularz.
              </p>
            </transition>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import useToggle from "../../hooks/useToggle";
import ContactForm from '../../components/UI/ContactForm.vue'

export default {
    components: { ContactForm },

    setup() {
        const title = ref("Kontakt");
        const toggleOne = ref(false);
        const toggleTwo = ref(false);
        const toggleThree = ref(false);
        const toggleFour = ref(false);
        const toggleFive = ref(false);
        const [activeOne] = useToggle(toggleOne);
        const [activeTwo] = useToggle(toggleTwo);
        const [activeThree] = useToggle(toggleThree);
        const [activeFour] = useToggle(toggleFour);
        const [activeFive] = useToggle(toggleFive);
        return {
            title,
            toggleOne,
            toggleTwo,
            toggleThree,
            toggleFour,
            toggleFive,
            activeOne,
            activeTwo,
            activeThree,
            activeFour,
            activeFive,
        };
    },
    
};
</script>

<style scoped lang="scss">
.the-contact {
  width: 100%;
  background-color: #f9fafb;
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
  color: rgb(110, 187, 222);
  font-weight: bold;
}

.contact-info {
  margin: 1.5rem auto;
  text-align: center;
}

.toggle-box {
  background-color: #f7f7f7;
  // background: linear-gradient(145deg, #ffffff, #e0e1e2);
  width: 100%;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 8px;
  box-shadow:  6px 6px 12px #e5e6e7, -6px -6px 12px #ffffff;
  // box-shadow:  6px 6px 12px #e5e6e7, -6px -6px 12px #ffffff;

  &:active {
    box-shadow: inset 6px 6px 12px #e5e6e7,
            inset -6px -6px 12px #ffffff;
  }
}

.test-enter-from,
.test-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.test-enter-active {
  transition: all .5s ease-out;
}

.test-leave-active {
  transition: all .5s ease-in;
}

.test-enter-to,
.test-leave-from {
  opacity: 1;
  transform: translateY(0);
}


@media screen and (min-width: 600px) {
  

  .toggle-box > p {
    width: 80%;
    margin: 0 auto;
  }
}
@media screen and (min-width: 992px) {

  .the-contact-wrapper {
    width: 50%;
    margin: 0 auto;
  }

  .contact-info-wrapper {
    display: flex;
  }

  .contact-info {
    font-size: 1.25rem;
  }
}
</style>

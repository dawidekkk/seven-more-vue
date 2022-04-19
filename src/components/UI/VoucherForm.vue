<template>
  <form @submit.prevent="submitForm">
    <label for="price"><strong>Voucher prezentowy 7MORE7</strong></label>
    <input
      type="number"
      class="price"
      id="price"
      placeholder="minimalnie 100,00 PLN"
      min="100,00"
      v-model="enteredPrice"
      :class="validatePrice"
    />
    <div class="radio">
      <h3>Przesyłka:</h3>
      <div>
        <input
          type="radio"
          id="elektroniczna"
          value="elektroniczna"
          name="ship"
          v-model="chosenShipRadio"
        />
        <label for="elektroniczna" class="lab"
          ><strong>Forma elektroniczna</strong> 0,00 PLN</label
        >
      </div>
      <div>
        <input
          type="radio"
          id="inpost"
          value="inpost"
          name="ship"
          v-model="chosenShipRadio"
        />
        <label for="inpost" class="lab"
          ><strong>InPost Paczkomaty</strong> 24/7 11,00 PLN</label
        >
      </div>
      <div>
        <input
          type="radio"
          id="kurier"
          value="ship"
          name="ship"
          v-model="chosenShipRadio"
        />
        <label for="kurier" class="lab"
          ><strong>Kurierska krajowa</strong> 17,00 PLN</label
        >
      </div>
    </div>
    <div class="ship-info">
      <h3>Dane kupującego:</h3>
      <div class="form-control">
        <label for="name">Imię i nazwisko:</label>
        <input
          type="text"
          name="name"
          class="input-name"
          required
          placeholder="Imię i naziwsko"
          v-model.trim="enteredName"
          :class="{ border: validName }"
          @blur="validateInputName"
        />
      </div>
      <p class="red" v-if="validName">Pole z imieniem i nazwiskiem jest pustę.</p>
      <div>
        <label for="street">Ulica i nr budynku:</label>
        <input
          type="text"
          name="street"
          class="input-name"
          required
          placeholder="Ulica i nr. budynku"
          v-model.trim="enteredStreet"
          :class="{ border: validStreet }"
          @blur="validateInputStreet"
        />
      </div>
      <p class="red" v-if="validStreet">Pole z ulicą i numerem budynku jest pustę.</p>
      <div>
        <label for="post-nr">Kod pocztowy:</label>
        <input
          type="number"
          name="post-nr"
          class="input-name"
          required
          placeholder="Kod pocztowy"
          v-model.trim="enteredPost"
          :class="{ border: validPost }"
          @blur="validateInputPost"
        />
      </div>
      <p class="red" v-if="validPost">
        Pole z kodem pocztowym jest albo pustę albo zawiera nieprawidłowe znaki.
      </p>
      <div>
        <label for="city">Nazwa miasta:</label>
        <input
          type="text"
          name="city"
          class="input-name"
          required
          placeholder="Miasto"
          v-model.trim="enteredCity"
          :class="{ border: validCity }"
          @blur="validateInputCity"
        />
      </div>
      <p class="red" v-if="validCity">Pole z miastem jest albo pustę.</p>
      <div>
        <label for="number">Numer telefonu:</label>
        <input
          type="number"
          name="number"
          class="input-name"
          required
          placeholder="Number"
          v-model.trim="enteredPhone"
          :class="{ border: validPhone }"
          @blur="validateInputPhone"
        />
      </div>
      <p class="red" v-if="validPhone">Pole z numerem jest albo pustę albo zawiera nieprawidłowe znaki.</p>
      <div>
        <label for="email">Adres @mail:</label>
        <input
          type="email"
          name="email"
          class="input-name"
          required
          placeholder="Email"
          v-model.trim="enteredEmail"
          :class="{ border: validEmail }"
          @blur="validateInputEmail"
        />
      </div>
      <p class="red" v-if="validEmail">Pole z emailem jest albo pustę albo zawiera nieprawidłowe znaki.</p>
    </div>
    <div class="checkboxes">
      <div>
        <input
          type="checkbox"
          required
          name="rule-one"
          id="rule-one"
          v-model="enteredCheckboxOne"
        />
        <label for="rule-one"
          >Zapoznałem/am/ się i akceptuję
          <router-link to="/regulamin">regulamin</router-link> oraz
          <router-link to="/regulamin">politykę prywatności</router-link></label
        >
      </div>
      <div>
        <input
          type="checkbox"
          required
          name="rule-two"
          id="rule-two"
          v-model="enteredCheckboxTwo"
        />
        <label for="rule-two"
          >Oświadczam, że podane przeze mnie dane są prawdziwe oraz wyrażam zgodę na
          wykorzystywanie i przetwarzanie swoich danych osobowych w celach założenia i
          zarządzania kontem użytkownika oraz realizacji i pełnej obsługi zamówień przez
          7more7.com zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
          2016/679 z dnia 27 kwietnia 2016 r. (RODO) oraz ustawą z dnia 10 maja 2018 r. o
          ochronie danych osobowych (tj. Dz.U.2019 poz. 1781).</label
        >
      </div>
      <div>
        <input
          type="checkbox"
          required
          name="rule-three"
          id="rule-three"
          v-model="enteredCheckboxThree"
        />
        <label for="rule-three"
          >Oświadczam, że zostałem/am/ poinformowany/a/, iż administratorem ww. danych
          osobowych jest 7MORE7 Sergiusz Górski z siedzibą w Bielsku-Białej, ul. Podcienie
          2, 43-300 Bielsko-Biała, oraz że posiadam prawo dostępu do treści swoich danych
          oraz ich poprawiania lub usunięcia, a także że podanie przeze mnie powyższych
          danych osobowych jest dobrowolne.</label
        >
      </div>
      <div>
        <input
          type="checkbox"
          required
          name="rule-four"
          id="rule-four"
          v-model="enteredCheckboxFour"
        />
        <label for="rule-four"
          >Działając na podstawie Rozporządzenia Ministra Finansów z dnia 20.12.2012 r. w
          sprawie przesyłania faktur w formie elektronicznej, zasad ich przechowywania
          oraz trybu udostępniania organowi podatkowemu lub organowi kontroli skarbowej,
          wyrażam zgodę na przesyłanie faktur, duplikatów tych faktur oraz ich korekt, w
          formie elektronicznej przez Sergiusz Górski adresem e-mail właściwym do
          przesyłania faktur elektronicznych jest adres używany w systemie sklepu
          internetowego.</label
        >
      </div>
    </div>
    <p v-if="invalidInput">
      Jeden albo więcej inputów zostały źle uzupełnione. Proszę sprawdź ponownie.
    </p>
    <button type="submit">Złóż zamówienie z obowiązkiem zapłaty</button>
  </form>
</template>

<script>
import { ref, computed } from "vue";
import useValidInput from "../../hooks/validateInput";
import useValidPostInput from "../../hooks/validatePostInput";
import useValidPhoneInput from "../../hooks/validatePhoneInput";
import useValidEmailInput from "../../hooks/validateEmailInput";

export default {
  data() {
    return {
      // enteredPrice: 100,
      chosenShipRadio: null,
      enteredCheckboxOne: false,
      enteredCheckboxTwo: false,
      enteredCheckboxThree: false,
      enteredCheckboxFour: false,
      enteredCheckboxes: false,
      invalidInput: false,
      border: 'border',
    };
  },

  methods: {
    submitForm() {
      if (
        this.enteredPrice < 100 ||
        !this.chosenShipRadio ||
        // this.enteredName === "" ||
        this.enteredStreet === "" ||
        this.enteredPost === 0 ||
        this.enteredPost.length >= 6 ||
        this.enteredPost !== Number ||
        // this.enteredCity === "" ||
        this.enteredPhone === "" ||
        this.enteredEmail === ""
      ) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
      // this.enteredName = '';
    },

    checkNum() {
      return this.enteredPrice < 100 ? 'border' : ''
    }
  },

  setup() {

    const enteredPrice = ref(100);

    const validatePrice = computed(() => ({
      border: enteredPrice.value < 100,
      red: enteredPrice.value < 100,
    }))

    // String v-models
    const enteredName = ref("");
    const enteredNameValidity = ref("pending");
    const enteredStreet = ref("");
    const enteredStreetValidity = ref("pending");
    const enteredCity = ref("");
    const enteredCityValidity = ref("pending");
    const [validateInputName, validName] = useValidInput(
      enteredName,
      enteredNameValidity
    );
    const [validateInputStreet, validStreet] = useValidInput(
      enteredStreet,
      enteredStreetValidity
    );
    const [validateInputCity, validCity] = useValidInput(
      enteredCity,
      enteredCityValidity
    );

    // Number v-models
    const enteredPost = ref(null);
    const enteredPostValidity = ref("pending");

    const [validateInputPost, validPost] = useValidPostInput(
      enteredPost,
      enteredPostValidity
    );

    const enteredPhone = ref(null);
    const enteredPhoneValidity = ref("pending");

    const [validateInputPhone, validPhone] = useValidPhoneInput(
      enteredPhone,
      enteredPhoneValidity
    );

    // Email v-model
    const enteredEmail = ref(null);
    const enteredEmailValidity = ref("pending");

    const [validateInputEmail, validEmail] = useValidEmailInput(
      enteredEmail,
      enteredEmailValidity
    );

    return {
      validatePrice,
      enteredPrice,
      enteredName,
      enteredNameValidity,
      enteredStreet,
      enteredStreetValidity,
      enteredCity,
      enteredCityValidity,
      enteredPost,
      enteredPostValidity,
      enteredPhone,
      enteredPhoneValidity,
      enteredEmail,
      enteredEmailValidity,
      validateInputName: validateInputName,
      validName: validName,
      validateInputStreet: validateInputStreet,
      validStreet: validStreet,
      validateInputPost: validateInputPost,
      validPost: validPost,
      validateInputCity: validateInputCity,
      validCity: validCity,
      validateInputPhone: validateInputPhone,
      validPhone: validPhone,
      validateInputEmail: validateInputEmail,
      validEmail: validEmail,
    };
  },
};
</script>

<style scoped lang="scss">
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

.ship-info > div,
.checkboxes > div {
  margin: 1rem auto;
}

button {
  width: 100%;
  height: 42px;
  border-radius: 30px;
  border: none;
  font-size: 1rem;
}

input {
  margin-right: 0.5rem;
}

// .form-control {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// }

.border {
  border: 2px solid red;
}

.red {
  color: red;
}
</style>

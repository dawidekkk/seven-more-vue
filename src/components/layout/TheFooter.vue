<template>
  <footer class="home-footer">
    <div class="footer-logo-wrapper">
      <img :src="pic" alt="zdjecie 77" class="footer-logo" />
      <div class="social-links">
        <a :href="'https://www.facebook.com/7more7official/'">
          <svg viewBox="0 0 320 512">
            <path
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            />
          </svg>
        </a>
        <a :href="'https://www.instagram.com/7more7_/'">
          <svg viewBox="0 0 448 512">
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="menu">
      <nav>
        <h3>MENU</h3>
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/voucher">Voucher</router-link></li>
          <li><router-link to="/sklep">Sklep</router-link></li>
          <li><router-link to="/sklep">Kolekcje</router-link></li>
          <li><router-link to="/kontakt">Kontakt</router-link></li>
        </ul>
      </nav>
      <nav>
        <h3>Informacje</h3>
        <ul>
          <li><router-link to="/regulamin">Regulamin</router-link></li>
          <li><router-link to="/polityka">Polityka prywatności</router-link></li>
          <li><router-link to="/pliki">Odstąpienie od umowy</router-link></li>
          <li><router-link to="/pliki">Reklamacja</router-link></li>
          <li><router-link to="/platnosc">Płatność i wysyłka</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="copy">
      <h4>Copyright &copy; 2018-2022 All rights reserved.</h4>
    </div>
  </footer>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const pic = ref(require("../../assets/images/77c.png"));

    return {
      pic,
    };
  },
};
</script>

<style scoped lang="scss">
.home-footer {
  width: 100vw;
  height: 100%;
  background-color: rgb(244, 244, 244);
  padding: 4rem 1rem;

  .footer-logo {
    width: auto;
    height: 180px;
  }

  .social-links {
    margin: 2rem auto;

    a {
      background-color: white;
      border-radius: 50%;
      border: none;
      margin: 0 0.5rem;
    }
  }

  svg {
    width: 50px;
    height: 50px;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: center;

    nav {
      margin: 1rem 2rem;

      li {
        margin: 0.5rem auto;
        list-style: none;

        a {
          text-decoration: none;
        }
      }
    }
  }

  .copy {
    width: 100%;
    font-weight: 400;
    text-align: center;
  }
}

@media only screen and(min-width: 768px) {
  .home-footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "footer-logo-wrapper menu";
  }
  .menu {
    grid-area: menu;
  }
  .footer-logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    grid-area: footer-logo-wrapper;
  }

  nav {
    li {
      font-size: 1.25rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
}
</style>

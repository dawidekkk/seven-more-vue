<template>
  <header>
    <div class="logo-wrapper">
      <router-link to="/sevenmorevue" class="center"
        ><img src="../../assets/images/logo.png" alt="logo strony" class="logo"
      /></router-link>
    </div>
    <div class="wrapper">
      <div class="basket">
        <li>
          <router-link class="size" to="/koszyk"
            ><font-awesome-icon icon="shopping-basket" />Koszyk[{{
              cartQty
            }}]</router-link
          >
        </li>
      </div>
      <div class="ham-wrapper">
        <font-awesome-icon :icon="toggleIcon" class="icon" @click="toggleHidden" />
      </div>
    </div>
    <Transition name="ham">
      <nav v-if="!hidden">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/sklep">sklep</router-link></li>
          <li><router-link to="/voucher">Voucher</router-link></li>
          <li><router-link to="/kontakt">kontakt</router-link></li>
          <li><router-link to="/regulamin">Regulamin</router-link></li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<script>
import store from "@/store";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
export default {

  // mounted() {
  //   console.log(this.$route.path)
  // },

  setup() {
    const hidden = ref(true);

    const toggleHidden = () => {
      hidden.value = !hidden.value;
    };

    const toggleIcon = computed(() => {
      return hidden.value ? "bars" : "xmark";
    });

    const cartQty = computed(() => {
      return store.getters.cartQty;
    })

    const route = useRoute();

    onMounted(() => {
      console.log(route.path)
      if(!hidden.value && route.path === '/sklep') {
        console.log('elo');
      }

      if(!hidden.value) {
        console.log('nfuesn');
      }
    })

    return {
      hidden,
      toggleHidden,
      toggleIcon,
      cartQty,
    };
  },
};
</script>

<style scoped lang="scss">
.ham-enter-from,
.ham-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

.ham-enter-active {
  transition: all 0.25s ease-in;
}

.ham-leave-active {
  transition: all 0.25s ease-out;
}

.ham-leave-from,
.ham-enter-to {
  opacity: 1;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  background-color: hsl(0, 0%, 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  height: 100px;
}

.center {
  display: flex;
}

.logo {
  width: 10rem;
}

.size {
  font-size: 1.25rem;
}

nav {
  position: absolute;
  top: 100px;
  right: 0;
  width: 51%;
  height: 300px;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 150;
  text-align: right;
}

ul {
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-direction: column;
}

li {
  text-transform: uppercase;
  list-style: none;

  a {
    &:hover {
    border-bottom: 4px solid green;
  }
  }
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.basket {
  margin-right: 2rem;
}

.ham-wrapper {
  width: 50px;
  height: auto;
  display: flex;
  align-items: center;
}

.hidden {
  display: none;
}

.icon {
  height: 1.75rem;
}

.close {
  height: 3rem;
}

@media screen and (min-width: 1200px) {
  nav a {
    font-size: 26px;
  }
}
</style>

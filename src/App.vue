<template>
  <TheHeader />
  <main>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </main>
  <HomeInstagram />
  <HomeSocial />
  <HomeSubscribe />
  <TheFooter />
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import HomeInstagram from "./components/layout/HomeInstagram";
import HomeSubscribe from "./components/layout/HomeSubscribe.vue";
import HomeSocial from "./components/layout/HomeSocial.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    HomeInstagram,
    HomeSubscribe,
    HomeSocial,
  },

  // methods: {
  //   beforeEnter(el) {
  //     console.log('Before enter');
  //     console.log(el);

  //     // 1. Initial
  //     el.style.opacity = 0;
  //   },

  //   enter(el, done) {
  //     // done parametr -> 2b
  //     // done parametr wtedy, gdy chcemy "powiedziec" owej funkcji, zeby zakonczyla setInterval. Poniewaz w innym przypadku after-enter wywoluje sie za szybko.
  //     console.log('enter');
  //     // 2a. Controlling animations in JavaScript.
  //     let round = 1;
  //     this.enterInterval = setInterval(() => {
  //       // 7a
  //       el.style.opacity = round * 0.01;
  //       round++;
  //       if (round > 100) {
  //         clearInterval(this.enterInterval);
  //         done(); // 2c. dzieki temu, after-enter wywola sie PO UKONCZENIU FUNKCJI "enter". Dlatego, after-enter poniekad nie wywoluej sie asynchronicznie, tylko synchronicznie po funkcji enter.
  //       }
  //     }, 20);
  //   },

  //   after() {
  //     console.log('after-enter');
  //   },

  //   beforeLeave(el) {
  //     console.log('Before leave');
  //     console.log(el);
  //     el.style.opacity = 1;
  //   },

  //   leave(el, done) {
  //     console.log('leave');

  //     // 3. oposite of 2.
  //     let round = 1;
  //     this.leaveInterval = setInterval(() => {
  //       // 7b.
  //       el.style.opacity = 1 - round * 0.01;
  //       round++;
  //       if (round > 100) {
  //         clearInterval(this.leaveInterval);
  //         done();
  //       }
  //     }, 20);
  //   },
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto Condensed", sans-serif;
}

body {
  height: 100vh;
  width: 100vw;
  line-height: 1.5;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 1;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>

<template>
  <section class="base-pages">
    <div class="img">
      <router-link class="title" :to="homePage">{{ pageName }}</router-link>
      <div>
        <router-link to="/sevenmorevue">Home</router-link>
        <!-- <router-link to="/sklep">Sklep/{{ paramsId }}</router-link> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pageName: String,
  },

  computed: {
    path() {
      return this.$route.path;
    },

    homePage() {
      return this.$route.matched[0];
    }
  },
};
</script>

<style scoped lang="scss">
.img {
  background-image: url("../../assets/images/bg_6.jpg");
  background-position: center center;
  background-size: cover;
  width: 100vw;
  height: 250px;
  top: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    font-family: "Lato", sans-serif;
    font-weight: 100;
    font-size: 40px;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: black;
    text-align: center;
  }
}

a {
  text-decoration: none;
}

</style>

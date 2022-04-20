<template>
  <section>
    <BasePages :page-name="title"></BasePages>
    <div class="not-found">
      <h2>Hej!</h2>
      <p>Strona nie została odnaleziona :(</p>
      <p>Z powrotem do home plz: <router-link to="/">HOME</router-link></p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Strona nie odnaleziona :(",
    };
  },
};
</script>

<style scoped lang="scss">
.not-found {
  width: 100%;
  background-color: hsl(210, 17%, 98%);
  min-height: auto;
  position: relative;
  top: 100px;
  left: 0;
  color: grey;
  padding: 2rem 3rem;
  text-align: center;
}

</style>

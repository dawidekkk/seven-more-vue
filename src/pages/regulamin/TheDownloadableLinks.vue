<template>
  <section>
    <BasePages :page-name="title"></BasePages>
    <div class="downloadable-links">
      <ul>
        <li>
          <a href="'../../assets/images/document.pdf'" download>Plik PDF - reklamacja produktu</a>
        </li>
        <li>
          <a href="../../assets/images/document.pdf" download>Plik PDF - wzór odstąpienia od umowy</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Pliki do pobrania",
    };
  },
};
</script>

<style scoped lang="scss">
.downloadable-links {
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

@media screen and (min-width: 992px) {
  ul {
    width: 50%;
    margin: 0 auto;
  }
}
</style>

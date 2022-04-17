<template>
  <section class="home-social">
    <BaseTitle>BĄDŹ NA BIEŻĄCO Z NOWOŚCIAMI!</BaseTitle>
    <div class="social-wrapper">
      <div>
        <h3>10,816</h3>
        <p>Facebook</p>
      </div>
      <div>
        <h3>61,300</h3>
        <p>Instagram</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.home-social {
  width: 100vw;
  height: 80vh;
  background-color: rgb(161, 161, 161);
  padding: 4rem 0rem;
  background-image: url("../../assets/images/bg_4.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.social-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h3 {
  font-size: 28px;
}
</style>

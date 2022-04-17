<template>
  <section class="home-social">
    <h2>BĄDŹ NA BIEŻĄCO Z NOWOŚCIAMI!</h2>
    <div class="social-wrapper">
      <div class="social-info">
        <h3>10,816</h3>
        <p>Facebook</p>
      </div>
      <div class="social-info">
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
  height: 400px;
  background-color: rgb(161, 161, 161);
  padding: 4rem 0rem;
  background-image: url("../../assets/images/bg_4.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

h2 {
  color: white;
  font-size: 36px;
  text-align: center;
  margin: 2rem auto;
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

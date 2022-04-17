<template>
  <section class="home-info">
    <div class="girl-photo"></div>
    <div class="specify">
      <h2>ODZIEŻ PRODUKOWANA W 100% W POLSCE</h2>
      <p class="test">Jako 7more7 stawiamy przede wszystkim na zadowolenie klienta.</p>
      <p>Nasza odzież szyta jest od postaw w Polsce.</p>
      <p>Do produkcji wykorzystujemy materiały najwyższej jakości.</p>
      <p>Sprawdź naszą ofertę i wybierz coś dopasowanego do Ciebie.</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.home-info {
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  margin: 2rem auto 0rem auto;

  .girl-photo {
    background-image: url(../../assets/images/girl.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    position: relative;
    top: 0;
    left: 0;
  }

  .specify {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.75rem;
    text-align: left;
    width: 100vw;
    padding: 2rem;
  }

  h2 {
    margin-bottom: 2rem;
  }

  
  p {
    font-size: 1rem;
    text-align: left;
  }

  @media only screen and (min-width: 600px) {

    h2 {
      font-size: 3.5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
}
</style>

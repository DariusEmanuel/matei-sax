<template>
  <div class="container">
    <img class="msx-logo" src="../assets/msx-logo.png" />

    <h1>Matei Sax Official</h1>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  color: var(--color);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/hero/hero.jpg");
  /* background-size: cover; */
  /* Scale the background to be 110% of the container's height */
  /* background-size: auto 110%; */
  background-size: auto 110%;
  background-position: top center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.msx-logo {
  width: 240px;
  margin: 0 auto;
}
</style>

<template>
  <div id="root-container">
    <div id="buttons-container">
      <SignupWithGoogle class="btn" />
      <SignupWithFacebook class="btn" />
    </div>

    <p>or</p>
  </div>
</template>

<style lang="scss" scoped>
#root-container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  #buttons-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 1vw 0;

    .btn {
      margin: 0.25vw 0.3vw;
    }
  }
}
</style>

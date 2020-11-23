<template>
  <header class="header">
    <nav class="header__content">
      <router-link class="header__link" to="/">Главная</router-link>
      <router-link class="header__link" to="/history">История</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style scoped lang="scss">
  .header {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    margin: 0 10px;
    border: 1px solid var(--color-grey);

    &__content {
      width: 100%;
    }

    &__link {
      text-decoration: none;
      font-size: 18px;
      color: var(--color-grey);
      &:not(:first-of-type) {
        margin-left: 30px;
      }

      @include for-tablet {
        font-size: 22px;
      }

      @include for-desktop {
        &:hover {
          color: var(--color-black);
          font-weight: bold;
        }
      }

      &.router-link-exact-active {
        color: var(--color-black);
        font-weight: bold;
      }
    }
  }
</style>

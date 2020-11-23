<template>
  <div>
    <p>Страница не найдена</p>
    <router-link to="/">Вернуться на главную</router-link>
  </div>
</template>

<script>
  export default {
    name: 'PageNotFound'
  }
</script>

<style lang="scss" scoped>
  p {
    font-size: 18px;

    @include for-tablet {
      font-size: 22px;
      color: var(--color-grey);
      font-weight: bold;
    }
  }
</style>
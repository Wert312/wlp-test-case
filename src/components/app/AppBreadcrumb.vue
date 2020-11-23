<template>
  <div class="breadcrumb">
    <router-link
      v-if="
        this.$route.meta.breadcrumb !== 'Главная' &&
        this.$route.meta.breadcrumb !== 'Ошибка 404'
      "
      class="breadcrumb__btn-back"
      to="/"
      ><arrow-back
    /></router-link>
    <span class="breadcrumb__current-page">{{ currentPage }}</span>
  </div>
</template>

<script>
import ArrowBack from '@/components/ui/ArrowBack.vue';

  export default {
    name: 'AppBreadcrumb',
    components: {
      ArrowBack
    },
    data() {
      return {
        currentPage: 'Главная',
      }
    },
    watch: {
      '$route' () {
        this.currentPage = this.$route.meta.breadcrumb;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .breadcrumb {
    padding-left: 30px;
    padding-bottom: 30px;
    font-size: 18px;
    margin-top: 0;
    color: var(--color-grey);
    display: flex;
    align-items: center;
    height: max-content;

    @include for-tablet {
      padding-bottom: 0;
      font-size: 22px;
      position: relative;
      top: -15px;
    }

    &__btn-back {
      text-decoration: none;
      color: currentColor;
    }
  }
</style>
<template>
  <div class="layout">
    <div class="layout__container">
      <app-header />
      <div class="layout__content">
        <app-breadcrumb />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/app/AppHeader.vue';
import AppBreadcrumb from '@/components/app/AppBreadcrumb.vue';

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppBreadcrumb
  },
};
</script>

<style lang="scss" scoped>
  .layout {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__container {
      width: 100%;
      margin-top: 15px;
      max-width: 886px;
      display: grid;
      grid-auto-rows: auto;
      grid-row-gap: 40px;

      @include for-tablet {
        margin-top: 15px;
      }
    }

    &__content {
      border: 1px solid var(--color-grey);
      min-height: 400px;
      padding-top: 30px;
      padding-bottom: 30px;
      margin: 0 10px;
      display: flex;
      flex-direction: column;

      @include for-tablet {
        padding-top: 79px;
        display: grid;
        grid-auto-rows: auto;
        grid-template-columns: 150px auto;
        grid-column-gap: 56px;
      }
    }
  }
</style>

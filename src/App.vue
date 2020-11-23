<template>
  <div id="app">
    <app-layout />
  </div>
</template>

<script>
import '@/assets/css/normalize.css';
import '@/assets/css/variables.css';
import AppLayout from '@/components/app/AppLayout.vue';

export default {
  components: {
    AppLayout,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
  #app {
    font-family: var(--font-main);
    display: flex;
    flex: 1;
  }
</style>

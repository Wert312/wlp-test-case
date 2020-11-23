<template>
  <div class="page-history">
    <div
      v-if="imagesHistory.length === 0"
      class="page-history page-history--empty"
    >
      Нет загруженных изображений
    </div>
    <image-card
      v-else
      :images="imagesHistory"
      @deleteImageFromHistory="deleteImageFromHistory"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ImageCard from '@/components/image/ImageCard.vue';

export default {
  name: 'PageHistory',
  components: { ImageCard},
  computed: {
    ...mapState({
      imagesHistory: state => state.imagesHistory
    }),
  },
  methods: {
    ...mapActions(['DELETE_IMAGE_FROM_HISTORY']),

    deleteImageFromHistory(index) {
      this.DELETE_IMAGE_FROM_HISTORY(index);
    },
  }
}
</script>

<style lang="scss" scoped>
  .page-history {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 550px;

    &--empty {
      width: 100%;
      height: 100%;
      align-items: center;
      font-size: 16px;

      @include for-tablet {
        font-size: 20px;
      }
    }
  }
</style>

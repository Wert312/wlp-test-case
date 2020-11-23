<template>
  <div class="page-main">
    <div class="page-main__content">
      <div class="page-main__image-wrapper">
        <div
          v-if="!currentImage"
          class="page-main__image page-main__image--default"
        >
          <p class="page-main__image-description">Динамическая картинка</p>
        </div>
        <img
          v-if="!pending && currentImage"
          :src="currentImage"
          class="page-main__image"
        />
      </div>
      <button class="page-main__get-image-btn" @click="getImageFromApi">
        <span v-if="!pending">Загрузить</span>
        <span v-else>Загружаю...</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'PageMain',
  data() {
    return {
      error: false,
      pending: false
    }
  },

  computed: {
    ...mapState({
      currentImage: state => state.currentImage.image_original_url
    }),
  },

  watch: {
    currentImage: function() {
      this.pending = false;
    }
  },

  methods: {
    ...mapActions(['GET_IMAGE_FROM_API']),

    getImageFromApi() {
      this.pending = true;
      try {
        this.GET_IMAGE_FROM_API();
      }
      catch(error) {
        this.error = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .page-main {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__content {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      max-width: 453px;

      @include for-tablet {
        margin-right: auto;
      }
    }

    &__image-wrapper {
      width: 100%;
      height: 100%;
      height: 200px;

      @include for-tablet {
        height: 252px;
      }
    }

    &__image {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      object-fit: contain;

      &--default {
        background: transparent linear-gradient(180deg, #d29ef8 0%, #00ced6 100%)
          0% 0% no-repeat padding-box;
      }
    }

    &__image-description {
      font-size: 21px;
      color: var(--color-white);

      @include for-tablet {
        font-size: 30px;
      }
    }

    &__get-image-btn {
      width: 168px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 31px;
      align-self: center;
      background-color: var(--color-blue);
      border: none;
      cursor: pointer;
      color: var(--color-white);
      outline: none;

      &:active {
        color: var(--color-blue);
        background-color: var(--color-white);
        border: 1px solid var(--color-blue);
      }

      @include for-desktop {
        &:hover {
          color: var(--color-blue);
          background-color: var(--color-white);
          border: 1px solid var(--color-blue);
          transition: all 0.2s;
        }

        &:not(:hover) {
          transition: all 0.2s;
        }
      }
    }
  }
</style>

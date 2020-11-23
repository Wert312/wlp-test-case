<template>
  <div>
    <div v-for="(item, index) of images" :key="index" class="card">
      <div class="card__image-wrapper">
        <img class="card__image" :src="item.image_original_url" />
      </div>
      <div class="card__info-wrapper">
        <p class="card__title">{{ item.title || 'Нет названия' }}</p>
        <p class="card__timestamp">{{ item.import_datetime }}</p>
        <button class="card__delete-btn" @click="deleteImageFromHistory(index)">
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ImageCard',
    props: {
      images: {
        type: Array,
        required: true
      }
    },
    methods: {
      deleteImageFromHistory(index) {
        this.$emit('deleteImageFromHistory', index);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    align-items: flex-start;
    padding: 0 5px;
    &:not(:last-of-type) {
      margin-bottom: 20px;

      @include for-tablet {
        margin-bottom: 30px;
      }
    }

    &__image-wrapper {
      display: flex;
      max-width: 140px;
      max-height: 88px;
      margin-right: 10px;

      @include for-tablet {
        max-width: 169px;
        margin-right: 27px;
      }
    }

    &__image {
      width: 100%;
      height: auto;
      object-fit: contain;
    }

    &__title {
      margin: 0;
      color: var(--color-grey);
      font-weight: bold;
      font-size: 16px;

      @include for-tablet {
        font-size: 22px;
      }
    }

    &__timestamp {
      font-size: 14px;
      color: var(--color-grey);
      margin-top: 5px;

      @include for-tablet {
        font-size: 22px;
      }
    }

    &__delete-btn {
      font-size: 14px;
      height: 35px;
      width: 100%;
      color: red;
      background-color: var(--color-white);
      font-weight: bold;
      border: none;
      outline: none;
      border: 1px solid red;
      border-radius: 2px;

      @include for-tablet {
        max-width: 150px;
      }

      @include for-desktop {
        &:hover {
          background-color: red;
          color: var(--color-white);
          cursor: pointer;
        }
      }

      &:active {
        background-color: red;
        color: var(--color-white);
      }
    }
  }
</style>
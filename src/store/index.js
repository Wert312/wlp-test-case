import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentImage: {},
    imagesHistory: []
  },
  mutations: {
    SAVE_IMAGE_TO_HISTORY: (state, payload) => state.imagesHistory.unshift(payload),
    DELETE_IMAGE_FROM_HISTORY: (state, index) => state.imagesHistory.splice(index, 1)
  },
  actions: {
    GET_IMAGE_FROM_API({ commit }) {
      return axios(
        'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA',
        {
          method: 'GET'
        }
      )
        .then(image => {
          const { title, import_datetime, image_original_url } = image.data.data;
          this.state.currentImage = { title, import_datetime, image_original_url };
          commit('SAVE_IMAGE_TO_HISTORY', this.state.currentImage);
          return image;
        })
        .catch(error => {
          console.log(error);
          return error;
        });
    },

    DELETE_IMAGE_FROM_HISTORY({ commit }, index) {
      commit('DELETE_IMAGE_FROM_HISTORY', index);
    }
  }
});

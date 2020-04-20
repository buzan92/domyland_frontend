export const state = () => ({
  news: [],
  detail: {},
});

export const mutations = {
  SET_NEWS: (state, news) => { state.news = news || [] },
  ADD_NEWS: (state, newsItem) => { state.news.push(newsItem) },
  SET_DETAIL: (state, newsItem) => { state.detail = newsItem },
};

export const actions = {
  async getNews({ commit, dispatch }) {
    try {
      const res = await this.$axios.get('/feeds');
      commit('SET_NEWS', res?.data?.feeds);
    } catch (err) {
      const error = err?.response?.data?.error || 'Что-то пошло не так';
      dispatch('sendErrorNotification', error, { root: true });
    }
  },
  async addNews({ commit, dispatch }, newsItem) {
    try {
      const res = await this.$axios.post('/feeds', newsItem);
      commit('ADD_NEWS', res?.data?.feed);
      dispatch('sendSuccessNotification', 'Новость добавлена', { root: true });
    } catch (err) {
      const error = err?.response?.data?.error || 'Что-то пошло не так';
      dispatch('sendErrorNotification', error, { root: true });
    }
  },
  async getDetail({ commit }, id) {
    try {
      const { data } = await this.$axios.get(`/feeds/${id}`);
      commit('SET_DETAIL', data?.feed || {});
      return true;
    } catch (err) {
      return false;
    }
  },
  async editDetail({ dispatch }, form) {
    try {
      const { _id } = form;
      await this.$axios.put(`/feeds/${_id}`, form);
      dispatch('sendSuccessNotification', 'Новость изменена', { root: true });
    } catch (err) {
      const error = err?.response?.data?.error || 'Что-то пошло не так';
      dispatch('sendErrorNotification', error, { root: true });
    }
  },
};

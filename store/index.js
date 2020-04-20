export const state = () => ({
  loading: false,
  alert: {
    color: null,
    message: null,
    icon: null,
    show: false,
  },
});

export const mutations = {
  runLoading: state => (state.loading = true),
  stopLoading: state => (state.loading = false),
  setAlert: (state, alert) => {
    state.alert = Object.assign(state.alert, alert);
  },
};

export const actions = {
  sendSuccessNotification({ commit }, message) {
    commit('setAlert', { color: 'success', message, icon: 'checkbox-marked-circle', show: true });
  },
  sendErrorNotification({ commit }, message) {
    commit('setAlert', { color: 'error', message, icon: 'alert-circle', show: true });
  },
};

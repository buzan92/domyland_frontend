export const state = () => ({
});

export const mutations = {
};

export const actions = {
  async signIn({ dispatch }, form) {
    try {
      const { status } = await this.$auth.loginWith('local', { data: form });
      if (status === 200) return true;
    } catch (err) {
      const error = err?.response?.data?.error || 'Что-то пошло не так';
      dispatch('sendErrorNotification', error, { root: true });
    }
  },

  async signUp({ dispatch }, form) {
    try {
      await this.$axios.post('/users', form);
      const { status } = await this.$auth.loginWith('local', { data: form });
      if (status === 200) return true;
    } catch (err) {
      const error = err?.response?.data?.error || 'Что-то пошло не так';
      dispatch('sendErrorNotification', error, { root: true });
    }
  },

  async signOut() {
    await this.$auth.logout();
  },
};

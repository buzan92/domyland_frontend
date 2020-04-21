export default function({ $axios, app, redirect }) {
  $axios.setBaseURL(`${process.env.BASE_URL}/api/v1`);

  $axios.onError((error) => {
    const code = parseInt(error?.response?.status);

    if (code === 401) {
      app.store.dispatch('sendErrorNotification', 'Чтобы продолжнить необходимо авторизоваться', { root: true });
      redirect('/');
    }
  });
}

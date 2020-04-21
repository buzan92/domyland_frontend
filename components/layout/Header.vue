<template>
    <v-app-bar fixed app>
        <v-container class="d-flex align-center">
            <n-link to="/news">
                <v-toolbar-title v-text="'Новости'" />
            </n-link>
            <v-spacer />
            <template v-if="loggedIn">
                {{ user.displayName || '' }}
                <span class="px-2">|</span>
                <a href="#" @click.prevent="signOut">
                    Выйти
                </a>
            </template>
            <template v-else>
                <a href="#" @click.prevent="signInDialog = true">
                    Войти
                </a>
                <span class="px-2">|</span>
                <a href="#" @click.prevent="signUpDialog = true">
                    Регистрация
                </a>
                <v-dialog v-model="signInDialog" max-width="400px">
                    <SignIn @signIn="signInHandler($event)" />
                </v-dialog>
                <v-dialog v-model="signUpDialog" max-width="400px">
                    <SignUp @signUp="signUpHandler($event)" />
                </v-dialog>
            </template>
        </v-container>
    </v-app-bar>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SignIn from './HeaderSignIn';
import SignUp from './HeaderSignUp';

export default {
  name: 'Header',
  components: {
    SignIn,
    SignUp,
  },
  data() {
    return {
      signInDialog: false,
      signUpDialog: false,
    };
  },
  computed: {
    ...mapState('auth', [
      'loggedIn',
      'user',
    ]),
  },
  methods: {
    ...mapActions('user', [
      'signIn',
      'signUp',
      'signOut',
    ]),
    async signInHandler(form) {
      const res = await this.signIn(form);
      if (res) this.signInDialog = false;
    },
    async signUpHandler(form) {
      const res = await this.signUp(form);
      if (res) this.signUpDialog = false;
    },
  },
};
</script>

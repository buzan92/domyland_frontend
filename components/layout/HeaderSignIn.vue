<template>
    <v-card>
        <v-card-title class="justify-center mb-4">
            <span class="headline">Войти</span>
        </v-card-title>
        <v-card-text>
            <v-form v-model="signInValid">
                <v-text-field v-model="signInForm.username" label="Логин*" required />
                <v-text-field
                    v-model="signInForm.password"
                    :rules="[ v => (!!v && v.length >= 6) || 'Пароль должен содержать минимум 6 символов' ]"
                    label="Пароль*"
                    type="password"
                    class="mb-4"
                    required
                />
            </v-form>
        </v-card-text>
        <v-card-actions class="justify-center pb-4">
            <v-btn
                :disabled="!signInValid"
                color="primary"
                :loading="loading"
                @click="$emit('signIn', signInForm)"
            >
                Продолжить
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HeaderSignIn',
  data() {
    return {
      signInValid: false,
      signInForm: {
        username: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapState(['loading']),
  },
};
</script>

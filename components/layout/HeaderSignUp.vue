<template>
    <v-card>
        <v-card-title class="justify-center mb-4">
            <span class="headline">Регистрация</span>
        </v-card-title>
        <v-card-text>
            <v-form v-model="signUpValid">
                <v-text-field v-model="signUpForm.username" label="Логин*" required />
                <v-text-field
                    v-model="signUpForm.password"
                    :rules="[ v => (!!v && v.length >= 6) || 'Пароль должен содержать минимум 6 символов' ]"
                    label="Пароль*"
                    type="password"
                    class="mb-4"
                    required
                />
                <vue-recaptcha
                    :sitekey="recaptchaSiteKey"
                    load-recaptcha-script
                    @verify="signUpForm['g-recaptcha-response'] = $event"
                    @expired="signUpForm['g-recaptcha-response'] = ''"
                />
            </v-form>
        </v-card-text>
        <v-card-actions class="justify-center pb-4">
            <v-btn
                :disabled="!signUpValid || !signUpForm['g-recaptcha-response']"
                color="primary"
                :loading="loading"
                @click="$emit('signUp', signUpForm)"
            >
                Продолжить
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapState } from 'vuex';
import VueRecaptcha from 'vue-recaptcha';

export default {
  name: 'HeaderSignUp',
  components: {
    VueRecaptcha,
  },
  data() {
    return {
      recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
      signUpValid: false,
      signUpForm: {
        username: '',
        password: '',
        'g-recaptcha-response': '',
      },
    };
  },
  computed: {
    ...mapState(['loading']),
  },
};
</script>

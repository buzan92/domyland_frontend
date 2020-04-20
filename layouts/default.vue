<template>
    <v-app>
        <Header />
        <v-content>
            <v-container>
                <nuxt />
                <v-snackbar
                    v-model="alertShow"
                    :color="alert.color"
                    :timeout="2000"
                    bottom
                    multi-line
                    right
                >
                    <v-icon
                        v-if="alert.icon ? 'mdi-' + alert.icon : false"
                        dark
                    >
                        {{ 'mdi-' + alert.icon }}
                    </v-icon>
                    {{ alert.message }}
                </v-snackbar>
            </v-container>
        </v-content>
        <v-footer app>
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Header from '@/components/layout/Header';

export default {
  name: 'DefaultLayout',
  components: {
    Header,
  },
  computed: {
    ...mapState(['alert']),
    alertShow: {
      get() { return this.alert.show },
      set(val) { this.setAlert({ show: val }) },
    },
  },
  methods: {
    ...mapMutations(['setAlert']),
  },
};
</script>

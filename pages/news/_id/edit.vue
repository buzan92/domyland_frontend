<template>
    <v-card class="pa-3">
        <h2 class="mb-3">
            Редактирование
        </h2>
        <NewsForm
            v-bind="{ newsItem: detail }"
            @save="editDetail($event)"
        />
    </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NewsForm from '@/components/news/NewsForm';

export default {
  name: 'NewsEdit',
  components: {
    NewsForm,
  },
  middleware: 'auth',
  async fetch({ route: { params: { id } }, store }) {
    await store.dispatch('news/getDetail', id);
  },
  computed: {
    ...mapState('news', [
      'detail',
    ]),
  },
  methods: {
    ...mapActions('news', [
      'editDetail',
    ]),
  },
};
</script>

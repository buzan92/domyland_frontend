<template>
    <v-card class="pa-3">
        <h2 class="mb-3">
            Добавить новость
        </h2>
        <NewsForm
            v-bind="{ newsItem }"
            @save="addNews($event)"
        />
    </v-card>
</template>

<script>
import { mapActions } from 'vuex';
import NewsForm from '@/components/news/NewsForm';

export default {
  name: 'NewsAdd',
  components: {
    NewsForm,
  },
  middleware: 'auth',
  data() {
    return {
      newsItem: {
        title: '',
        content: '',
        image: '',
      },
    };
  },
  methods: {
    ...mapActions('news', [
      'addNews',
    ]),
  },
};
</script>

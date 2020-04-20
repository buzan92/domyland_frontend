<template>
    <div class="py-3">
        <div v-if="loggedIn" class="mb-3 text-right">
            <v-btn color="primary" to="/news/add">
                Добавить
            </v-btn>
        </div>
        <div>
            <NewsCard
                v-for="item of news"
                :key="item._id"
                v-bind="item"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import NewsCard from '@/components/news/NewsCard';

export default {
  name: 'News',
  components: {
    NewsCard,
  },
  async fetch({ store }) {
    await store.dispatch('news/getNews');
  },
  computed: {
    ...mapState('news', [
      'news',
    ]),
    ...mapState('auth', [
      'loggedIn',
    ]),
  },
};
</script>

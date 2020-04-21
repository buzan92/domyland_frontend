<template>
    <v-card class="mb-3">
        <div class="d-flex flex-column justify-start">
            <v-card-title class="headline" v-text="detail.title" />
            <v-card-subtitle class="pt-0" v-text="subtitle" />
            <v-avatar class="ma-3" size="400" tile>
                <v-img :lazy-src="require('~/assets/noimage.png')" :src="detail.image" />
            </v-avatar>
            <v-card-text v-html="detail.content" />
            <div v-if="loggedIn" class="pa-3 text-right">
                <v-btn :to="{ name: 'news-id-edit', params: { id: detail._id } }" color="primary">
                    Редактировать
                </v-btn>
            </div>
        </div>
    </v-card>
</template>

<script>
import { mapState } from 'vuex';
import { formatDate } from '@/helpers/date';

export default {
  name: 'NewsId',
  async fetch({ route: { params: { id } }, store, redirect }) {
    const res = await store.dispatch('news/getDetail', id);
    if (!res) redirect('/404');
  },
  computed: {
    ...mapState('news', [
      'detail',
    ]),
    ...mapState('auth', [
      'loggedIn',
    ]),
    subtitle() {
      const { createDate, creator } = this.detail;
      return `${formatDate(createDate)}, ${creator?.displayName}`;
    },
  },
};
</script>

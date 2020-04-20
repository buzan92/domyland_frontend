<template>
    <v-card class="mb-3">
        <div class="d-flex flex-no-wrap justify-start">
            <v-avatar class="ma-3" size="200" tile>
                <!-- https://cdn.vuetifyjs.com/images/cards/store.jpg -->
                <v-img :lazy-src="require('~/assets/noimage.png')" :src="image" />
            </v-avatar>
            <div>
                <n-link :to="{ name: 'news-id', params: { id: _id } }">
                    <v-card-title class="headline" v-text="title" />
                </n-link>
                <v-card-subtitle class="pt-0" v-text="subtitle" />
                <v-card-text v-text="content" />
            </div>
        </div>
    </v-card>
</template>

<script>
import { formatDate } from '@/helpers/date';

export default {
  name: 'NewsCard',
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    _id: String,
    creator: Object,
    title: String,
    content: String,
    createDate: String,
    image: String,
  },
  computed: {
    subtitle() {
      return `${formatDate(this.createDate)}, ${this.creator?.displayName}`;
    },
  },
};
</script>

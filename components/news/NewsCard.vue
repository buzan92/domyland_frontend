<template>
    <v-card class="mb-3">
        <div class="d-flex flex-no-wrap justify-start">
            <v-avatar class="ma-3" size="200" tile>
                <v-img :lazy-src="require('~/assets/noimage.png')" :src="image" />
            </v-avatar>
            <div>
                <n-link :to="{ name: 'news-id', params: { id: _id } }">
                    <v-card-title class="headline" v-text="title" />
                </n-link>
                <v-card-subtitle class="pt-0" v-text="subtitle" />
                <v-card-text v-dompurify-html="content" class="card-text" />
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

<style lang="scss" scoped>
.card-text {
  max-height: 200px;
  overflow: hidden;
  margin-bottom: 16px;
}
</style>

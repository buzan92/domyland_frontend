<template>
    <v-form v-model="isValid">
        <v-text-field
            v-model="form.title"
            :rules="[v => !!v || 'Укажите заголовок новости']"
            label="Заголовок*"
            outlined
        />
        <Editor v-model="form.content" class="mb-4" />
        <div class="d-flex align-center">
            <v-avatar class="mr-3" size="100" tile>
                <v-img :lazy-src="require('~/assets/noimage.png')" :src="form.image" />
            </v-avatar>
            <v-text-field
                v-model="form.image"
                label="URL изображения"
                hide-details
                outlined
            />
        </div>
        <div class="text-right">
            <v-btn :disabled="!isValid || !form.content" color="primary" @click="$emit('save', form)">
                Сохранить
            </v-btn>
        </div>
    </v-form>
</template>

<script>
export default {
  name: 'NewsForm',
  components: {
    Editor: () => process.client
      ? import('~/components/ui/Editor')
      : Promise.resolve({ render: h => h('div', 'Загрузка...') }),
  },
  props: {
    newsItem: Object,
  },
  data() {
    return {
      isValid: false,
      form: {
        _id: '',
        title: '',
        content: '',
        image: '',
      },
    };
  },
  created() {
    this.form._id = this.newsItem?._id || '';
    this.form.title = this.newsItem?.title || '';
    this.form.content = this.newsItem?.content || '';
    this.form.image = this.newsItem?.image || '';
  },
};
</script>

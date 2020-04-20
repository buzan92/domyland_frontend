<template>
    <v-form v-model="isValid">
        <v-text-field v-model="form.title" label="Заголовок*" required outlined />
        <v-textarea v-model="form.content" label="Teкст*" outlined />
        <v-text-field v-model="form.image" label="URL изображения" outlined />
        <div class="text-right">
            <v-btn :disabled="!isValid" color="primary" @click="$emit('save', form)">
                Сохранить
            </v-btn>
        </div>
    </v-form>
</template>

<script>
export default {
  name: 'NewsForm',
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

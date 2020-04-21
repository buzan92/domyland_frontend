<template>
    <ClientOnly>
        <tiptap-vuetify
            v-model="model"
            :extensions="extensions"
            :card-props="{ flat: true, outlined: true }"
        />
        <template #placeholder>
            Загрузка...
        </template>
    </ClientOnly>
</template>

<script>
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
} from 'tiptap-vuetify';

export default {
  components: {
    TiptapVuetify,
  },
  props: {
    value: String,
  },
  data: () => ({
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3],
          },
        },
      ],
      Bold,
      Link,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak,
    ],
  }),
  computed: {
    model: {
      get() { return this.value },
      set(val) { this.$emit('input', val) },
    },
  },
};
</script>

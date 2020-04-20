<template>
    <v-layout
        column
        justify-center
        align-center
    >
        <v-flex
            xs12
            sm8
            md6
        >
            <div class="text-center pt-4">
                Тестовое задание для domyland.ru<br>
                <n-link to="/news">
                    Перейти к новостям
                </n-link>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: 'Index',
};
</script>

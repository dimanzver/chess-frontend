<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <span>Chess</span>

      <v-spacer></v-spacer>
      <v-btn depressed>Войти</v-btn>
    </v-app-bar>

    <v-main>
      <Main/>
    </v-main>
  </v-app>
</template>

<script>
import Main from '@/components/pages/Main'

export default {
  name: 'App',

  components: {
    Main,
  },

  data: () => ({
    //
  }),
};
</script>

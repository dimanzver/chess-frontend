<template>
  <v-app>
    <template v-if="!loading">
      <v-app-bar
          app
          color="primary"
          dark
      >
        <span>Chess</span>

        <v-spacer></v-spacer>
        <v-btn depressed @click="openLoginModal">Войти</v-btn>
      </v-app-bar>

      <v-main>
        <Main/>
      </v-main>
    </template>
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
    loading: true,
  }),

  created() {
    this.$store.dispatch('auth/loadUser').finally(() => {
      this.loading = false;
    });
  },
};
</script>

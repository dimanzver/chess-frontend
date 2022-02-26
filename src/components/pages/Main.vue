<template>
  <v-container class="spacing-playground pa-6" fluid>
    <div v-if="user">
      <v-row>
        <v-col class="d-flex justify-center">
          <v-btn color="success" large depressed>Начать игру</v-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Main',

  computed: {
    ...mapState('auth', ['user']),
  },
}
</script>

<style scoped>

</style>
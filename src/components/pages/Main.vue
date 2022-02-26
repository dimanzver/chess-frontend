<template>
  <v-container class="spacing-playground pa-6" fluid>
    <div v-if="user">
      <GameCreate/>
    </div>
  </v-container>
</template>

<script>
import {mapState} from 'vuex';
import GameCreate from "@/components/template/GameCreate";

export default {
  name: 'Main',

  components: {GameCreate},

  computed: {
    ...mapState('auth', ['user']),
  },
}
</script>

<style scoped>

</style>
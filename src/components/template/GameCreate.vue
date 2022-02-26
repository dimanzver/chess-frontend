<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-btn color="success" large depressed @click="startDialog = true">Начать игру</v-btn>
      </v-col>
    </v-row>

    <v-dialog
        v-model="startDialog"
        persistent
        max-width="350"
    >
      <v-card>
        <v-card-title>Создать игру</v-card-title>

        <v-card-text>
          <v-radio-group v-model="gameData.joinedColor">
            <v-radio value="RANDOM" label="Случайный"/>
            <v-radio value="BLACK" label="Белый"/>
            <v-radio value="WHITE" label="Чёрный"/>
          </v-radio-group>

          <div>
            <v-text-field label="Время, с" type="number" v-model="gameData.gameTime"></v-text-field>
          </div>
        </v-card-text>


        <v-card-actions>
          <v-spacer/>
          <v-btn
              color="red darken-1"
              text
              @click="startDialog = false"
          >
            Отмена
          </v-btn>
          <v-btn
              color="green darken-1"
              text
              @click="create"
          >
            Создать
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import apiAxios from "@/utils/apiAxios";

export default {
  name: "GameCreate",

  data() {
    return {
      startDialog: true,
      gameData: {
        joinedColor: 'RANDOM',
        gameTime: 300,
      }
    };
  },

  methods: {
    create() {
      apiAxios.post('/offer', this.gameData)
          .then(({data}) => {
            this.$store.commit('game/SET_GAME_OFFER', data);
            this.$store.commit('game/SET_STATUS', 'WAITING');
            this.startDialog = false;
          });
    },
  },
}
</script>

<style scoped>

</style>
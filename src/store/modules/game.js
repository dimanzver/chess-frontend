export default {
    namespaced: true,

    state: {
        status: 'NO',
        gameOffer: null,
    },

    mutations: {
        SET_STATUS(state, status) {
            state.status = status;
        },

        SET_GAME_OFFER(state, gameOffer) {
            state.gameOffer = gameOffer;
        },
    },
};
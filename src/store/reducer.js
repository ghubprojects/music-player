import { TOGGLE_THEME, SHOW_MODAL, PLAY_MUSIC, PREV_MUSIC, NEXT_MUSIC } from './constants';
import { songsData } from '~/data';

const lastSongId = songsData.length - 1;

const initState = {
    nightTheme: new Date().getHours() < 18 ? false : true,
    showModal: false,
    playMusic: false,
    songId: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                nightTheme: !state.nightTheme,
            };
        case SHOW_MODAL:
            return {
                ...state,
                showModal: action.payload,
            };
        case PLAY_MUSIC:
            return {
                ...state,
                playMusic: action.payload,
            };
        case PREV_MUSIC:
            let prevId = state.songId === 0 ? lastSongId : state.songId - 1;
            return {
                ...state,
                songId: prevId,
            };
        case NEXT_MUSIC:
            let nextId = state.songId === lastSongId ? 0 : state.songId + 1;
            return {
                ...state,
                songId: nextId,
            };
        default:
            throw new Error('Invalid action!');
    }
}

export { initState };
export default reducer;

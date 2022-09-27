import { TOGGLE_THEME, SHOW_MODAL, PLAY_MUSIC, PREV_MUSIC, NEXT_MUSIC } from './constants';

export const toggleTheme = () => ({ type: TOGGLE_THEME });
export const showModal = (payload) => ({ type: SHOW_MODAL, payload });

export const playMusic = (payload) => ({ type: PLAY_MUSIC, payload });
export const prevMusic = () => ({ type: PREV_MUSIC });
export const nextMusic = () => ({ type: NEXT_MUSIC });

// export const someAction = (payload) => ({
//     type: actionType,
//     payload,
// });

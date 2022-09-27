import { useState, useEffect, useRef } from 'react';
import { useStore } from '~/hooks';
import audios from '~/assets/audios';

function Audio({ className, ...restProps }) {
    const [state, dispatch] = useStore();
    const audioRef = useRef();

    const songsList = Object.values(audios);
    const [songUrl, setSongUrl] = useState(songsList[0]);

    useEffect(() => {
        state.playMusic ? audioRef.current.play() : audioRef.current.pause();
    }, [state.playMusic]);

    useEffect(() => {
        setSongUrl(songsList[state.songId]);
        audioRef.current.autoplay = state.playMusic;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.songId]);

    return (
        <audio
            src={songUrl}
            ref={audioRef}
            className={className}
            {...restProps}
            onError={() => {
                throw new Error('Audio loading failed!');
            }}
        ></audio>
    );
}

export default Audio;

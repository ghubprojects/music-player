import { useState, useEffect, useRef } from 'react';
import { useStore } from '~/hooks';
import { songsData } from '~/data';

function Audio({ className, ...restProps }) {
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useStore();
    const audioRef = useRef();
    const [songUrl, setSongUrl] = useState(songsData[state.songId].src);

    useEffect(() => {
        state.playMusic ? audioRef.current.play() : audioRef.current.pause();
    }, [state.playMusic]);

    useEffect(() => {
        setSongUrl(songsData[state.songId].src);
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

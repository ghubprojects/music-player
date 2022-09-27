import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { useStore } from '~/hooks';
import { actions } from '~/store';
import { songsData } from '~/data';
import { NextIcon, PlayIcon, PrevIcon, StopIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Footer() {
    const [state, dispatch] = useStore();

    const handlePlayMusic = () =>
        state.playMusic ? dispatch(actions.playMusic(false)) : dispatch(actions.playMusic(true));

    const handlePrevSong = () => dispatch(actions.prevMusic());
    const handleNextSong = () => dispatch(actions.nextMusic());

    return (
        <footer className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('song-title')}>Song name: {songsData[state.songId].name}</div>
                <div className={cx('music-player')}>
                    <div className={cx('prev-btn')} onClick={handlePrevSong}>
                        <PrevIcon />
                    </div>
                    <div className={cx('play-btn')} onClick={handlePlayMusic}>
                        {state.playMusic ? <PlayIcon /> : <StopIcon />}
                    </div>
                    <div className={cx('next-btn')} onClick={handleNextSong}>
                        <NextIcon />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

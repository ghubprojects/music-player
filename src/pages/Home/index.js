import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useStore } from '~/hooks';

import videos from '~/assets/videos';
import Video from '~/components/Video';
import Audio from '~/components/Audio';

const cx = classNames.bind(styles);

function Home() {
    const [state, dispatch] = useStore();

    return (
        <div className={cx('wrapper')}>
            <Video
                src={videos.clearNight}
                className={cx('background', state.nightTheme ? 'show' : 'hide')}
                autoPlay
                loop
                muted
            />
            <Video
                src={videos.sunnyDay}
                className={cx('background', state.nightTheme ? 'hide' : 'show')}
                autoPlay
                loop
                muted
            />
            <Audio />
        </div>
    );
}

export default Home;

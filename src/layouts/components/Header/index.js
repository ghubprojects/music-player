import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { useStore } from '~/hooks';
import { actions } from '~/store';

import images from '~/assets/images';
import Image from '~/components/Image';
import Clock from '~/components/Clock';
import { DayIcon, FullscreenIcon, MenuIcon, NightIcon, ShareIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Header() {
    const [state, dispatch] = useStore();
    const [fullscreen, setFullscreen] = useState(false);

    const handleChangeTheme = () => dispatch(actions.toggleTheme());

    const handleFullscreen = () => {
        if (!fullscreen) {
            document.documentElement.requestFullscreen();
            setFullscreen(true);
        } else {
            document.exitFullscreen();
            setFullscreen(false);
        }
    };

    const handleShowModal = () => dispatch(actions.showModal(true));

    return (
        <header className={cx('container', state.nightTheme ? undefined : 'cover-container')}>
            <div className={cx('wrapper')}>
                <Link to='/'>
                    <Image src={images.logo} className={cx('logo')} alt='logo' />
                </Link>
                <div className={cx('actions')}>
                    <Clock />

                    <button
                        className={cx('switch-btn', state.nightTheme ? 'night-btn' : 'day-btn')}
                        onClick={handleChangeTheme}
                    >
                        {state.nightTheme && <div className={cx('switch-handler')}></div>}
                        <div className={cx('switch-inner')}>
                            {state.nightTheme ? <NightIcon /> : <DayIcon />}
                        </div>
                        {state.nightTheme || <div className={cx('switch-handler')}></div>}
                    </button>

                    <Link to='/signin' className={cx('login-btn')}>
                        Sign up
                    </Link>

                    <span className={cx('share-icon')} onClick={handleShowModal}>
                        <ShareIcon />
                    </span>

                    <span className={cx('fullscreen-icon')} onClick={handleFullscreen}>
                        <FullscreenIcon />
                    </span>

                    <span className={cx('menu-icon')} onClick={() => alert('menu-btn is clicked!')}>
                        <MenuIcon />
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Header;

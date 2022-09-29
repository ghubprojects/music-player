import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { useStore } from '~/hooks';
import { actions } from '~/store';

import images from '~/assets/images';
import Image from '~/components/Image';
import Clock from '~/components/Clock';
import DayNightSwitch from '~/components/DayNightSwitch';
import Menu from '~/components/Menu';
import {
    FullscreenIcon,
    InfoIcon,
    MenuIcon,
    MessageIcon,
    PlaylistIcon,
    ProfileIcon,
    SettingIcon,
    ShareIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const menuOptions = [
    { icon: <ProfileIcon />, title: 'Login' },
    { icon: <SettingIcon />, title: 'Settings' },
    { icon: <MessageIcon />, title: 'Contact' },
    { icon: <PlaylistIcon />, title: 'How it works' },
    { icon: <InfoIcon />, title: 'About us' },
];

function Header() {
    const [state, dispatch] = useStore();
    const [fullscreen, setFullscreen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleShowModal = () => dispatch(actions.showModal(true));
    const handleFullscreen = () => {
        if (!fullscreen) {
            document.documentElement.requestFullscreen();
            setFullscreen(true);
        } else {
            document.exitFullscreen();
            setFullscreen(false);
        }
    };

    return (
        <header className={cx('container', state.nightTheme || 'cover-container')}>
            <div className={cx('wrapper')}>
                <Link to='/'>
                    <Image src={images.logo} className={cx('logo')} alt='logo' />
                </Link>
                <div className={cx('actions')}>
                    <Clock />
                    <DayNightSwitch />

                    <Link to='/signin' className={cx('login-btn')}>
                        Sign up
                    </Link>

                    <span className={cx('share-icon')} onClick={handleShowModal}>
                        <ShareIcon />
                    </span>

                    <span className={cx('fullscreen-icon')} onClick={handleFullscreen}>
                        <FullscreenIcon />
                    </span>

                    <div className={cx('menu')}>
                        <span className={cx('menu-icon')} onClick={() => setShowMenu(!showMenu)}>
                            <MenuIcon />
                        </span>
                        {showMenu && <Menu list={menuOptions} />}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

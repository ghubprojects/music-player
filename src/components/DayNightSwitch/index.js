import classNames from 'classnames/bind';
import styles from './DayNightSwitch.module.scss';
import { useStore } from '~/hooks';
import { actions } from '~/store';
import { DayIcon, NightIcon } from '~/components/Icons';
const cx = classNames.bind(styles);

function DayNightSwitch() {
    const [state, dispatch] = useStore();
    const handleChangeTheme = () => dispatch(actions.toggleTheme());

    return (
        <button
            className={cx('switch-btn', state.nightTheme ? 'night-btn' : 'day-btn')}
            onClick={handleChangeTheme}
        >
            {state.nightTheme || <div className={cx('switch-handler')}></div>}
            <div className={cx('switch-inner')}>
                {state.nightTheme ? <NightIcon /> : <DayIcon />}
            </div>
            {state.nightTheme && <div className={cx('switch-handler')}></div>}
        </button>
    );
}

export default DayNightSwitch;

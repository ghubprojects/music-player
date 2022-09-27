import classNames from 'classnames/bind';
import styles from './Clock.module.scss';

const cx = classNames.bind(styles);

function Clock() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const period = hour < 12 ? 'AM' : 'PM';

    const formatHour = (h) => {
        h = h === 0 ? (h = 12) : h;
        h = h > 12 ? (h -= 12) : h;
        return h < 10 ? '0' + h : h;
    };

    const formatMinute = (m) => (m < 10 ? '0' + m : m);

    return (
        <div className={cx('wrapper')}>
            <p>
                {formatHour(hour)}:{formatMinute(minute)} {period}
            </p>
        </div>
    );
}

export default Clock;

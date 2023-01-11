import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Clock.module.scss';

const cx = classNames.bind(styles);

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            if (new Date().getMinutes() !== time.getMinutes()) setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, [time]);

    const formatHour = (hour) => {
        hour = hour === 0 ? (hour = 12) : hour;
        hour = hour > 12 ? (hour -= 12) : hour;
        return hour < 10 ? '0' + hour : hour;
    };

    const formatMinute = (minute) => (minute < 10 ? '0' + minute : minute);
    const period = (hour) => (hour < 12 ? 'AM' : 'PM');

    return (
        <div className={cx('wrapper')}>
            {formatHour(time.getHours())}:{formatMinute(time.getMinutes())}
            {period(time.getHours())}
        </div>
    );
}

export default Clock;

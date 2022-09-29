import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Option({ data }) {
    return (
        <button className={cx('option')}>
            <span className={cx('option-icon')}>{data.icon}</span>
            <p className={cx('option-title')}>{data.title}</p>
        </button>
    );
}

export default Option;

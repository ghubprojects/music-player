import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Option from './Option';

const cx = classNames.bind(styles);

function Menu({ list = [] }) {
    return (
        <div className={cx('wrapper')}>
            {list.map((option, index) => (
                <Option key={index} data={option} />
            ))}
        </div>
    );
}

export default Menu;

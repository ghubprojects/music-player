import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ShareModal.module.scss';

import { useStore } from '~/hooks';
import { actions } from '~/store';
import { CloseIcon, TickIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function ShareModal() {
    const [state, dispatch] = useStore();
    const [copied, setCopied] = useState(false);

    const handleHideModal = () => dispatch(actions.showModal(false));

    const url = 'https://app.lofi.co?s=aG9ub2x1bHUmMCYwMDA1MCY=';
    const handleCopyUrl = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
    };

    return (
        <div className={cx('container')} onClick={handleHideModal}>
            <div className={cx('wrapper')} onClick={(e) => e.stopPropagation()}>
                <span className={cx('close-icon')} onClick={handleHideModal}>
                    <CloseIcon />
                </span>

                <h3 className={cx('modal-title')}>Share</h3>

                <p className={cx('modal-description')}>
                    Copy the link to share your combination of music, scenery and sounds with your
                    friends!
                </p>

                <div className={cx('share-link', copied ? 'copy-link-success' : undefined)}>
                    <input value={url} className={cx('link')} readOnly />
                    {copied ? (
                        <span className={cx('tick-icon')}>
                            <TickIcon />
                        </span>
                    ) : undefined}
                </div>

                <button className={cx('copy-btn')} onClick={handleCopyUrl}>
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    );
}

export default ShareModal;

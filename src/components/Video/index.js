import { forwardRef } from 'react';

const Video = forwardRef(({ src, className, ...restProps }, ref) => {
    return (
        <video
            ref={ref}
            className={className}
            {...restProps}
            onError={() => {
                throw new Error('Video loading failed!');
            }}
        >
            <source src={src} />
        </video>
    );
});

export default Video;

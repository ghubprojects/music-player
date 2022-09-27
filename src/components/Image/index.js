import { forwardRef } from 'react';

const Image = forwardRef(({ src, alt, className, ...restProps }, ref) => {
    return (
        <img
            ref={ref}
            src={src}
            className={className}
            alt={alt}
            {...restProps}
            onError={(e) => {
                throw new Error('Image loading failed!');
            }}
        />
    );
});

export default Image;

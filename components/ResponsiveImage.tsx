import React from 'react';

type ResponsiveImageProps = {
    name: string;
    alt: string;
    className: string;
};

function ResponsiveImage({
    name,
    alt,
    className,
}: ResponsiveImageProps): JSX.Element {
    const sizes = '(max-width: 768px) 284px, (max-width: 1024px) 582px, 800px';
    return (
        <picture>
            <source
                type="image/webp"
                sizes={sizes}
                srcSet={`/${name}-284.webp 284w, /${name}-582.webp 582w, /${name}-800.webp 800w`}
            />
            <img
                className={className}
                sizes={sizes}
                alt={alt}
                srcSet={`/${name}-284.jpg 284w, /${name}-582.jpg 582w, /${name}-800.jpg 800w`}
                src={`/${name}-800.jpg`}
            />
        </picture>
    );
}

export default ResponsiveImage;

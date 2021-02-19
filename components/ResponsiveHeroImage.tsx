import React from 'react';

type ResponsiveHeroImageProps = {
    name: string;
    alt: string;
    className?: string;
};

function ResponsiveHeroImage({
    name,
    alt,
    className,
}: ResponsiveHeroImageProps): JSX.Element {
    const sizes =
        '(max-width: 480px) 375px, (max-width: 1280px) 768px, (max-width: 1536px) 1280px, 1536px';
    return (
        <picture>
            <source
                type="image/webp"
                sizes={sizes}
                srcSet={`/${name}-375.webp 375w, /${name}-768.webp 768w, /${name}-1280.webp 1280w, /${name}-1536.webp 1536w`}
            />
            <img
                className={className}
                sizes={sizes}
                alt={alt}
                srcSet={`/${name}-375.jpg 375w, /${name}-768.jpg 768w, /${name}-1280.jpg 1280w, /${name}-1536.jpg 1536w`}
                src={`/${name}-1280.jpg`}
            />
        </picture>
    );
}

export default ResponsiveHeroImage;

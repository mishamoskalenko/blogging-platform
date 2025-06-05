import {
    ImgHTMLAttributes, memo, ReactElement, useEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallBack?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className, src, alt = 'image', fallback, errorFallBack, ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallBack) {
        return errorFallBack;
    }

    return (
        <img className={className} src={src} alt={alt} {...otherProps} />
    );
});

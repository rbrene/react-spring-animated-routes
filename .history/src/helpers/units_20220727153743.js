export const px = u => `${u * 16}px`;
export const em = u => `${u / 16}em`;
export const rem = u => `${u / 16}rem`;


export const breakpoint = mode => {
    const deviceSizes = {
        desktop: 1080,
        mobile: 720
    }

    switch (mode) {
        case 'desktop':
            return `@media (min-width: ${em(deviceSizes.desktop)})`;
        case 'tablet':
            return `@media (min-width: ${em(deviceSizes.mobile)})`;
        case 'mobile':
            return `@media (max-width: ${em(deviceSizes.mobile - 0.2)})`;
        default:
            return console.error('No breakpoint mode specified.')
    }
}
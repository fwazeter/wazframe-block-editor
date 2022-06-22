/**
 * WordPress dependencies
 */
import { Path, SVG, Rect } from '@wordpress/components';

export const verticalAlignBottom = (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <Path d="M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z" />
    </SVG>
);

export const verticalAlignCenter = (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <Path d="M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z" />
    </SVG>
);

export const verticalAlignTop = (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <Path d="M9 20h6V9H9v11zM4 4v1.5h16V4H4z" />
    </SVG>
);

export const panoramicRatio = (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <Rect width="16" height="9" fill="currentColor" />
    </SVG>
);

export const squareRatio = (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <Rect width="12" height="12" fill="currentColor" />
    </SVG>
);

export const landscapeRatio = (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <Rect width="12" height="8" fill="currentColor" />
    </SVG>
);

export const verticalRatio = (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <Rect width="9" height="16" fill="currentColor" />
    </SVG>
);

export const portraitRatio = (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <Rect width="12" height="15" fill="currentColor" />
    </SVG>
);
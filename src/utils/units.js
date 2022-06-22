/**
 * WordPress Dependencies
 */
import { __, _x } from "@wordpress/i18n";

export const spaceUnits = [
    { value: 'rem', label: 'REM', step: 0.001, a11yLabel: _x( 'rems', 'Relative to root font size (rem)' ), },
    { value: 'em', label: 'EM', step: 0.001, a11yLabel: _x( 'ems', 'Relative to parent font size (em)' ), },
    { value: '%', label: '%', step: 0.1, a11yLabel: __( 'Percent (%)' ), },
    { value: 'px', label: 'PX', step: 1, a11yLabel: __( 'Pixels (px)' ), },
];

export const heightUnits = [
    { value: 'vh', label: 'VH', step: 0.1, a11yLabel: __( 'Viewport height (vh)' ), },
    { value: 'em', label: 'EM', step: 0.001, a11yLabel: _x( 'ems', 'Relative to parent font size (em)' ), },
    { value: 'rem', label: 'REM', step: 0.001, a11yLabel: _x( 'rems', 'Relative to root font size (rem)' ),},
    { value: 'px', label: 'PX', step: 1, a11yLabel: __( 'Pixels (px)' ), },
];

export const widthUnits = [
    { value: 'rem', label: 'REM', step: 0.001, a11yLabel: _x( 'rems', 'Relative to root font size (rem)' ),},
    { value: 'em', label: 'EM', step: 0.001, a11yLabel: _x( 'ems', 'Relative to parent font size (em)' ), },
    { value: 'vw', label: 'VW', step: 0.1, a11yLabel: __( 'Viewport width (vw)' ), },
    { value: '%', label: '%', step: 0.1, a11yLabel: __( 'Percent (%)' ), },
    { value: 'ch', label: 'CH', step: 1, a11yLabel: _x( 'ch', 'Measure based on character length of font' ), },
    { value: 'px', label: 'PX', step: 1, a11yLabel: __( 'Pixels (px)' ), },
];
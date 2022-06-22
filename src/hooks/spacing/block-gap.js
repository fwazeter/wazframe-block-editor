/**
 * Internal dependencies
 */
import {
    spaceUnits,
    getSize,
    getSizeObjectByValue
} from "../../utils";
import { BlockOptionsPicker } from "../../components";
import { blockGapOptions } from "./constants";


function BlockGapPanel( props) {
    const {
        attributes,
        setAttributes
    } = props

    const onChange = ( value ) => {
        const sizeSlug = getSizeObjectByValue( blockGapOptions, value ).slug;

        if ( ! sizeSlug ) {
            setAttributes( {
                blockGap: sizeSlug ? undefined : value
            } )
        }
        setAttributes( {
            blockGap: sizeSlug ? sizeSlug : value

        } );
    };

    const sizeObject = getSize(
        blockGapOptions,
        attributes.blockGap,
        attributes?.blockGap
    );

    const sizeValue = sizeObject?.size || attributes?.blockGap || attributes.blockGap

    return (
        <BlockOptionsPicker
            sizeOptions={ blockGapOptions }
            panelName='Block Gap'
            units={ spaceUnits }
            onChange={ onChange }
            value={ sizeValue }
        />
    );
}

export default BlockGapPanel;
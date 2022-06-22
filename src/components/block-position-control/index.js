/**
 * Internal dependencies
 */
import BlockPositionUI from "./ui";

const BlockPositionControl = ( props ) => {
    return <BlockPositionUI { ...props } isToolbar={ false } />;
}

const BlockPositionToolbar = ( props ) => {
    return <BlockPositionUI { ...props } isToolbar />;
};

export { BlockPositionToolbar, BlockPositionControl };
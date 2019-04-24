import React from 'react';
import Constants from '../../global_constants/Constants';
import './SideBySideStyle.css'

/**
 * @returns {React.Component}
 */

// accepts React components for the left child and right child as well as the percentage width of left component
// exports a React component displaying the left child with given left width and the right child in the remaining space.
// left width percentage values should be less than 100 and will be defaulted to 50% if not specified
const SideBySideContent = (props) => {
    return <>
        <div className='sbsContainer'>
            <div style={{ width: props.leftWidth ? props.leftWidth + "%" : '50%' }}>
                {props.LeftChild}
            </div>
            <div> {props.RightChild} </div>
        </div>
    </>
}


export default SideBySideContent
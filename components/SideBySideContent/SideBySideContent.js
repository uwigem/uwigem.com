import React from 'react';
import Constants from '../../global_constants/Constants';
import './SideBySideStyle.css'

/**
 * @returns {React.Component}
 */

const SideBySideContent = (props) => {
    return <>
        <div class='sbsContent'>
            <div className='sbsChild' style={{ width: props.leftWidth, backgroundColor: "lightBlue" }}>
                {props.LeftChild}
            </div>
            <div className='sbsChild'> {props.RightChild} </div>
        </div>
    </>
}


export default SideBySideContent
import React from 'react';
import Constants from '../../global_constants/Constants';
import './SideBySideStyle.css'

/**
 * @returns {React.Component}
 */

const SideBySideContent = (props) => {
    return <>
        <div className='sbsContent'>
            <div className='sbsChild' style={{ width: props.leftWidth ? props.leftWidth + "%" : '50%', backgroundColor: "lightBlue" }}>
                {props.LeftChild}
            </div>
            <div className='sbsChild'> {props.RightChild} </div>
        </div>
    </>
}


export default SideBySideContent

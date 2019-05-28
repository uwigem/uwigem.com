import React from 'react';

type SideBySideProps = {
    leftChild: React.FunctionComponent,
    rightChild: React.FunctionComponent,
    leftWidth?: number
}

const SideBySideComponent: React.FunctionComponent<SideBySideProps> = ({ leftChild,
    rightChild, leftWidth }) => {
    return <>
        <div className="sbs-container">
            <div style={{
                width: leftWidth ? leftWidth + "%" : "50%"
            }}>
                {leftChild}
            </div>
            <div>
                {rightChild}
            </div>
        </div>
    </>
}

export default SideBySideComponent;
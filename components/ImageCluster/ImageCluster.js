import React, {useState, useEffect} from 'react';
import Constants from '../../global_constants/Constants';
import './ImageCluster/ImageCluster.css';

/**
 * @returns {React.Component}
 */

export const ImageCluster = (props) => {

    // let numImage = props.images.length;
    // let imageOrder = [];
    // for (let i = 1; i <= numImage; i++) {
    //     imageOrder.push(i);
    // }

    const [imageOrdering, setImageOrdering] = useState([1, 2, 3]);

    const changeImageOrdering = (event) => {
        let ordering = event.target.className;
        if (ordering.contains("order-1")) {
            setImageOrdering([3, 1, 2]);
        } else if (ordering.contains("order-3")) {
            setImageOrdering([2, 3, 1]);
        } else { // ordering.contains("order-2")
            setImageOrdering([1, 2, 3]);
        }
    }

    let orderIndex = 0;
    let imageElements = props.images.map((image) => {
        let imageElement = <img 
                    key={imageOrder[orderIndex]} 
                    onClick={changeImageOrdering}
                    className={'image priority-' + image.priority + ' cluster-design-1 order-' + imageOrdering[orderIndex]} 
                    src={image.image} 
                    alt={image.image} />
        return imageElement;
    });

    return (
        <div className='img-container'>
            {imageElements}
        </div>
    );

}
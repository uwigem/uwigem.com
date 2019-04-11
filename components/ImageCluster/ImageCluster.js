import './ImageCluster.css';
import React, { useState, useEffect } from 'react';
import Constants from '../../global_constants/Constants';


/**
 * @returns {React.Component}
 */

const ImageCluster = (props) => {

    // let numImage = props.images.length;
    // let imageOrder = [];
    // for (let i = 1; i <= numImage; i++) {
    //     imageOrder.push(i);
    // }

    let sampleProps3 = [
        { image: './img/sample-images/gudetama-1.png', priority: 0 },
        { image: './img/sample-images/gudetama-2.jpg', priority: 1 },
        { image: './img/sample-images/gudetama-3.png', priority: 2 },
    ];

    const [imageOrdering, setImageOrdering] = useState(sampleProps3);

    const changeImageOrdering = (event) => {

        let clickedImageLocation = findItem("./img/" + event.target.src.substring(event.target.src.indexOf("sample-images")));
        console.log(clickedImageLocation)
        // console.log (event.target.src.substring(event.target.src.indexOf("sample-images")))

        let newImageOrder = [...imageOrdering];
        if (clickedImageLocation == 0) {

            let saveValue = newImageOrder[0];
            newImageOrder[0] = newImageOrder[2];
            newImageOrder[2] = newImageOrder[1];
            newImageOrder[1] = saveValue;


        } else if (clickedImageLocation == 2) {

            let saveValue = newImageOrder[2];
            newImageOrder[2] = newImageOrder[0];
            newImageOrder[0] = newImageOrder[1];
            newImageOrder[1] = saveValue;

        }
        console.log(newImageOrder);
        console.log(imageOrdering)
        setImageOrdering(newImageOrder);
        // setImageOrdering(newImageOrder);
    }

    let findItem = (imgSRC) => {
        console.log(imgSRC)
        let index = 0;
        let location = -1;
        imageOrdering.forEach((image) => {
            console.log(image.image)
            if (image.image === imgSRC) {
                console.log("match")
                location = index;
            }
            index++;
        });
        return location;
    }

    let orderIndex = 1;
    let imageElements = imageOrdering.map((image) => {
        let imageElement = <img
            key={image.image}
            onClick={changeImageOrdering}
            className={'image priority-' + image.priority + ' cluster-design-1 order-' + orderIndex}
            src={image.image}
            alt={image.image} />;
        orderIndex++;
        return imageElement;
    });

    return (
        <div className='img-container'>
            {imageElements}
        </div>
    );

}

export default ImageCluster
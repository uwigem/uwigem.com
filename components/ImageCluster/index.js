import React from 'react';
import ImageCluster from './ImageCluster.js';

let sampleProps1 = [
    { image: './sample-images/gudetama-1.png', priority: 0 }
];

let sampleProps2 = [
    { image: './sample-images/gudetama-1.png', priority: 0 },
    { image: './sample-images/gudetama-2.png', priority: 1 },
];

let sampleProps3 = [
    { image: './sample-images/gudetama-1.png', priority: 0 },
    { image: './sample-images/gudetama-2.png', priority: 1 },
    { image: './sample-images/gudetama-3.png', priority: 2 },
];

let sampleProps4 = [
    { image: './sample-images/gudetama-1.png', priority: 0 },
    { image: './sample-images/gudetama-2.png', priority: 1 },
    { image: './sample-images/gudetama-3.png', priority: 2 },
    { image: './sample-images/gudetama-4.png', priority: 2 }
];

ReactDOM.render(<ImageCluster images={sampleProps3} />, document.getElementById('root'));
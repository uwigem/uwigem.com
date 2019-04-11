import Link from 'next/link';
import ImageCluster from '../components/ImageCluster';

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

export default () => <>

    <div>Next js about page</div>
    <Link href="/index">Go to index page</Link>
    <ImageCluster images={sampleProps3} />
</>
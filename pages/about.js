import Link from 'next/link';
import TestDiv from '../components/TestDiv';
import ImageCluster from '../components/ImageCluster/ImageCluster.js';

export default () => <>

    <div>Next js about page</div>
    <Link href="/index">Go to index page</Link>
    <TestDiv />
    <ImageCluster images={[
    { image: './sample-images/gudetama-1.png', priority: 0 },
    { image: './sample-images/gudetama-2.png', priority: 1 },
    { image: './sample-images/gudetama-3.png', priority: 2 },
]} />
</>
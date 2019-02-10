import Link from 'next/link';
import TestDiv from '../components/TestDiv';

export default () => <>
    <div>Next js about page</div>
    <Link href="/index">Go to index page</Link>
    <TestDiv />
</>
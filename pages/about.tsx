import Link from 'next/link';
import TestDiv from '../components/TestDiv';

const AboutPage: React.FunctionComponent = () => <>
    <div>Next js about page</div>
    <Link href="/index"><a>Go to index page</a></Link>
    <TestDiv />
</>

export default AboutPage;
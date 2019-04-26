import Link from 'next/link';
import '../global_constants/Global_Styles.css';

const IndexPage: React.FunctionComponent = () => <>
    <div>Next js home page</div>
    <Link href="/about"><a>Go to about page</a></Link>
</>

export default IndexPage;
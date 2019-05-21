import Link from 'next/link';
import '../global_constants/Global_Styles.css';
import { Page } from '../components/Page/Page';

const IndexPage: React.FunctionComponent = () => <>
    <div>Next js home page</div>
    <Link href="/about"><a>Go to about page</a></Link>

    <Page dataRoute={"test"}>
        {(data: any) => {
            return <>
                {data.abc}
            </>
        }}
    </Page>
</>

export default IndexPage;
import Link from 'next/link';
import '../global_constants/Global_Styles.css';
import { Page } from '../components/Page/Page';
import Constants from '../global_constants/Constants';

const IndexPage: React.FunctionComponent = () => <>
    <div>Next js home page</div>
    <Link href="/about"><a>Go to about page</a></Link>

    <Page dataRoute={Constants.dataRoutes.INDEX}>
        {(data: any) => {
            return <>
                {data.abc}
            </>
        }}
    </Page>
</>

export default IndexPage;
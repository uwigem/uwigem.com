import Link from 'next/link';
import '../global_constants/Global_Styles.css';
import { Page } from '../components/Page/Page';
import Constants from '../global_constants/Constants';
import SideBySideComponent from '../components/SideBySideContent/SideBySideContent';
import { Blurb } from '../components/Blurb/Blurb';

const IndexPage: React.FunctionComponent = () => <>
    <div>Next js home page</div>
    <Link href="/about"><a>Go to about page</a></Link>

    <Page dataRoute={Constants.dataRoutes.INDEX}>
        {(data: any) => {
            return <>
                <SideBySideComponent
                    leftChild={<Blurb blurbTitleArray={[{
                        color: "#420dab", align: "center",
                        text: "Washington iGEM"
                    }]}
                        blurbBody={{ align: "center", text: "Test" }}
                        blurbSubtitle={{ align: "center", text: "subtitle test" }}
                    />}

                    rightChild={<div></div>}
                />
                {data.abc}
            </>
        }}
    </Page>
</>

export default IndexPage;
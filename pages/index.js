import SideBySideContent from '../components/SideBySideContent/SideBySideContent';
import '../global_constants/Global_Styles.css';
//import Dubs from "../static/dubs.jpeg";

class LeftChild extends React.Component {
    render() {
        return <h1 style={{backgroundColor: "blue"}}>LeftChild</h1>;
    }
};

class RightChild extends React.Component {
    render() {
        return <h1>RightChild</h1>;
    }
};

export default () => <>
    <SideBySideContent LeftChild={<LeftChild />} RightChild={<RightChild />} />
</>

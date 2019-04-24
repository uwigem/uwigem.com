import SideBySideContent from '../components/SideBySideContent/SideBySideContent';
const leftWidth = 50;
// import dubs from "../static/dubs.jpg";

class LeftChild extends React.Component {
    render() {
        return <h1>Left Child</h1>;
    }
};

class RightChild extends React.Component {
    render() {
        return <h1>Right Child</h1>;
    }
};

export default () => <>
    <SideBySideContent LeftChild={<LeftChild />} RightChild={<RightChild />} />
</>

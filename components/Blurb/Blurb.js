import React from "react";
import { Component } from "react";
import "Blurb.css";

//Defines a component representing a message in a list
class BlurbTitle extends Component {
  render() {
    const divStyle = {
      color: this.props.color,
      textAlign: this.props.align
    };
    return <h1 style={divStyle}>{this.props.text}</h1>;
  }
}

//A component that renders a trio of messages
class BlurbComponent extends Component {
  render() {
    let blurbBody = this.props.blurbBody;
    let blurbSubtitle = this.props.blurbSubtitle;

    let titles = this.props.blurbTitleArray.map(array => {
      let component = (
        <BlurbTitle color={array.color} align={array.align} text={array.text} />
      ); //pass prop down!
      return component; //add this new component to resulting array
    });

    return (
      <div className="blurb">
        <div className="blurb-title">{titles}</div>
        <div className="blurb-body">
          <p style={{ textAlign: blurbBody.align }}>{blurbBody.text}</p>
        </div>
        <div className="blurb-subtitle">
          <h4 style={{ textAlign: blurbSubtitle.align }}>
            {blurbSubtitle.text}
          </h4>
        </div>
      </div>
    );
  }
}

{
  /*
let blurbTitleArray = [
  { color: "purple", align: "left", text: "Hello world" },
  { color: "black", align: "center", text: "No borders" },
  { color: "purple", align: "right", text: "Go huskies!" }
];
let blurbBody = {
  align: "left",
  text: "Lorem ipsum stuff blah blah blah blah blah blah blah blah blah blah"
};
let blurbSubtitle = { align: "left", text: "Blurb subtitle" };
ReactDOM.render(
  <div>
    <BlurbComponent
      blurbTitleArray={blurbTitleArray}
      blurbBody={blurbBody}
      blurbSubtitle={blurbSubtitle}
    />
  </div>,
  document.getElementById("root")
);
*/
}

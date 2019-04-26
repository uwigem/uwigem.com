import React from "react";
import "./Blurb.css";

const BlurbTitle = ({ color, align, text }) => {
  const divStyle = {
    color,
    textAlign: align
  };
  return <h1 style={divStyle}>{text}</h1>;
};

const BlurbComponent = ({ blurbTitleArray, blurbBody, blurbSubtitle }) => {
  const titles = blurbTitleArray.map(blurbTitile => {
    return (
      <BlurbTitle
        color={blurbTitile.color}
        align={blurbTitile.align}
        text={blurbTitile.text}
      />
    );
  });

  return (
    <div className="blurb">
      <div className="blurb-title">{titles}</div>
      <div className="blurb-body">
        <p style={{ textAlign: blurbBody.align }}>{blurbBody.text}</p>
      </div>
      <div className="blurb-subtitle">
        <h4 style={{ textAlign: blurbSubtitle.align }}>{blurbSubtitle.text}</h4>
      </div>
    </div>
  );
};

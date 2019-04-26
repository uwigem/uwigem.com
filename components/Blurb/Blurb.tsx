import React from "react";
import { BlurbTitle, BlurbTitleStyles } from './BlurbTitle';
import "./Blurb.css";
import { TextAlign } from "../../global_constants/CSSTypes";

type BlurbProps = {
  blurbTitleArray: BlurbTitleStyles[],
  blurbBody: BlurbBody,
  blurbSubtitle: BlurbSubtitle
}

type BlurbBody = {
  align: TextAlign,
  text: string
}

type BlurbSubtitle = {
  align: TextAlign,
  text: string
}

/**
 * Blurb is a single blurb on the webpage 
 */
export const Blurb: React.FunctionComponent<BlurbProps> = ({ blurbTitleArray,
  blurbBody,
  blurbSubtitle }) => {
  const titles = blurbTitleArray.map((blurbTitle: BlurbTitleStyles) => {
    return (
      <BlurbTitle
        color={blurbTitle.color}
        align={blurbTitle.align}
        text={blurbTitle.text}
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

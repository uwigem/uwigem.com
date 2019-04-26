import React, { Component } from "react";
import "./Blurb.css";
import { TextAlign } from "../../global_constants/CSSTypes";

export type BlurbTitleStyles = {
    color: string,
    align: TextAlign,
    text: string
}

/**
 * BlurbTitle is the title for the blurb component
 */
export const BlurbTitle: React.FunctionComponent<BlurbTitleStyles> = ({ color, align, text }) => {
    const divStyle: React.CSSProperties = {
        color,
        textAlign: align
    };
    return <h1 style={divStyle}>{text}</h1>;
};
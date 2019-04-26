import React, { Component } from "react";
import "./Blurb.css";

/**
 * BlurbTitle is the title for the blurb component
 *  
 * @param {{color: string, align: string, text: string}} 
 */
export const BlurbTitle = ({ color, align, text }) => {
    const divStyle = {
        color,
        textAlign: align
    };
    return <h1 style={divStyle}>{text}</h1>;
};

/**
 * @typedef {{color: string}} BlurbTitleParams
 * @description BlurbTitle expected parameters
 */
const BlurbTitleParams
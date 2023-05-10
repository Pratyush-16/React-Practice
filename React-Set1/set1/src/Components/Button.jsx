/**
 *  Build a React component to display a button with custom styles and      button text as ‘Start’. The styles should be passed as props.
 */

import React from 'react';

export const Button =(props) => {
    const {buttonStyles} = props

    return(
        <div>
            <button style={buttonStyles}>Start</button>
        </div>
    )
}
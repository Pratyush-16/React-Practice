/**
 * Build a React component called "ColorPicker" that displays a list of colors as buttons. On click of each button show the HEX code for that color, just below each button.
 */

import { useState } from "react";

export const Color= ({colors})=>{

    const[showColor, setShowColor] = useState();

    const colorHandle =(color) => {
        setShowColor(color);
    }

    return(
        <div>
           <h1>Color Picker</h1>
           {
            colors.map((color) =>{
                <button style={{ backgroundColor: color, padding: '10px' }} onClick={()=>colorHandle()}>{color}</button>
                showColor === color &&  (
                    <p>HEX code: {color}</p>
                  )}
            )
           }
        </div>
    )
}
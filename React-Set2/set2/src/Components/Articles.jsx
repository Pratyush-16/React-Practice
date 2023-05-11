/**
 * Build a React component called Article that accepts two props: title and content. Inside the component, render a <h1> tag with the title prop and a button below that which says “Know More”. On the click of the button, show the content in a <p> tag just below the button.
 */

import { useState } from "react";

export const Articles = (prop) => {

    const {title, content} = prop;

    const [showContent, setShowContent] = useState(false)

    const clickHandle = ()=> {
        setShowContent(true)
    }

    return(
        <div>
            <h1>{title}</h1>
            <button onClick={()=> clickHandle()}>Show More</button>
            {showContent && <p>{content}</p>}
        </div>
    )
}
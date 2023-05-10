/**
 * Build a Product component that receives product name and price as props and displays them on DOM.

The name should be in bold and blue in color
Price should be in italics and green in color
 */

export const Product =(prop) => {

    const{productName , price} = prop;

    return (
        <div>
            <h1 style={{color:"blue"}}><b>Product Name: {productName}</b></h1>
            <h2 style={{color:"green"}}><i>Price: {price}</i></h2>

        </div>
    )
}
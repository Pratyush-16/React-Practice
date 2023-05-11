/**
 * Build a React component called Gadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Add a border around the product details which has price above 50000.
 */



export const Gadgets =({products}) => {

  

    return(
        <div>
            <h1>Products</h1>

            <ol>
                {
                    products.map(({name, description, price})=> {
                        return(
                            <li style={{border: price>50000? "3px solid black" :"1px solid red", margin:"0.5rem"}}>
                                <p>{name}</p>
                                <p>{description}</p>
                                <p>{price}</p>
                            </li>
                        )
                    })
                }
            </ol>
           
               


        </div>
    )
}
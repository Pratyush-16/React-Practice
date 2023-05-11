/**
 * Build a React component called Phones that receives an array of products as a prop. Display only the mobile phones as an unordered list. Display their name, description, and price on the DOM.
 */

export const Phones =(prop) =>{

    const{productsOne} = prop;
    
    const filtered = productsOne.filter((prod) => prod.name === "mobile");

    return(
        <div>
            <h1>Phones</h1>
            
                <ul>
                    {
                        filtered.map((phone) =>
                        <li style={{listStyle:"none"}}>
                            <p>Name:{phone.name}</p>
                            <p>Description: {phone.description}</p>
                            <p>Price: ${phone.price}</p>
                        </li>)
                    }
                </ul>
            
        </div>
    )

    
    

}
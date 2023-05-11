/**
 * Build a React component called MyGadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Create a button below all the listings which says “Highlight Expensive Gadget” and on click of the button add a lightgreen backgroundColor to the items which has a price more than 50000.
 */

export const MyGadgets = (prop) => {

    const{gadgets } = prop;

    const clickHandle =()=>{
        gadgets.map((item)=>{
            if(item.price > 50000){
               item.backgroundColor = "lightgreen";
            }
        })
    }


    return(
        <div>
            <h1>My Gadgets</h1>
            <ol>
                {
                    gadgets.map(gadget => {
                        return(
                            <li>
                                <h2>{gadget.name}</h2>
                                <p>{gadget.description}</p>
                                <p>Price: ${gadget.price}</p>
                                <button onClick={()=> clickHandle()}>Highlight Expensive Gadget</button>
                                
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}
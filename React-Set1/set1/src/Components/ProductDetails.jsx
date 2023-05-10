/**
 * Consider the products data from previous question and display all the product details as unordered list for which the number of sales is more than the quantity.
 */
import React from "react"

const products = [
    { name: 'Perk', quantity: 10, sales: 7 },
    { name: 'Pepsi', quantity: 10, sales: 20 },
    { name: 'Coke', quantity: 18, sales: 50 },
    { name: 'Maggi', quantity: 41, sales: 22 },
    { name: '5Star', quantity: 7, sales: 9 },
  ]
export const ProductDetails = () => {

    const filteredProducts = products.filter((product)=>
    product.sales > product.quantity)

    return(
        <div>
             <h1>Product Details</h1>

             {
                filteredProducts.map((product) => 
                <ul key={product.name}>
                                    <li>Name: {product.name}</li>
                                    <li>Quantity: {product.quantity}</li>
                                    <li>Sales: {product.sales}</li>
                                </ul>
             )}
                </div>
    )
}
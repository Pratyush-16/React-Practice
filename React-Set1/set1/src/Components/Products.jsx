/**
 * Given the products data. Build a React component to display the name of all products as an unordered list on the DOM. Order of items display can vary from the image shown below.
 */

import React from "react";

const products = [
    { name: 'Perk', quantity: 10, sales: 7 },
    { name: 'Pepsi', quantity: 10, sales: 20 },
    { name: 'Coke', quantity: 18, sales: 50 },
    { name: 'Maggi', quantity: 41, sales: 22 },
    { name: '5Star', quantity: 7, sales: 9 },
  ]

export const Products =() => {

    return (
            <div>
                <h1>Products</h1>
                {
                    products.map(product => {
                                            return (
                                                <ul key={product.name}>
                                                    <p>{product.name}</p>
                                                    
                                                </ul>
                                            )
                                        })
                }
            </div>
        )
}
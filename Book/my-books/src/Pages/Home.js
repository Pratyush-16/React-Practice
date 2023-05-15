import React, { useContext } from 'react'
import { BookContext } from '../Context/BookContext'

export const Home=()=> {

    const {x} = useContext(BookContext)
    console.log(x)

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import {getAllProducts} from '../services/ProductService';


export default function ProductLists() {

    const [product, setProducts] = useState([]);

    useEffect(()=>{

        getAllProducts().then(response=>{
            setProducts(response.data)
        });
    },[])

  return (
    <div>
      <h2>Product Lists</h2>
      <ul>
        {
            product.map(product=>(
                <li key={product.id}>{product.name}-{product.price}</li>
            ))
        }
      </ul>


    </div>
  )
}

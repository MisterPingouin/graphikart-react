import React from 'react';
import ProductCategoryRow from './products/ProductCategoryRow';
import ProductRow from './products/ProductRow';


const ProductTable = ({ products }) => {

    const rows =[]
    let lastCategory = null

    for ( let product of products) {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow key ={product.category} name={product.category} />)
        }
        lastCategory = product.category
        rows.push(<ProductRow  key={product.name} product={product}/>)
    }


  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
{rows}
      </tbody>
    </table>
  );
}

export default ProductTable;

import React, { useEffect, useState } from 'react'

const Top = () => {
  const [products, setProducts]=useState(null)
    const fetchMe = () => {
        fetch('http://localhost:4000/products')
        .then((reply) => reply.json() )
        .then((data) => setProducts(data))
        .catch((missing) => console.log(missing))
    }
    useEffect(()  =>{
      fetchMe()
    },{})
  return (
    <div>
        <h1>how is it going?</h1>
      {/* <button onClick={fetchMe}>touchy</button> */}
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Products</th>
      <th scope="col">Bags</th>
      <th scope="col">Shoes</th>
      <th scope="col">Dresses</th>
    </tr>
  </thead>
  <thead>
    <tr>
      <th scope="col">Price</th>
      <th scope="col">25000</th>
      <th scope="col">4689</th>
      <th scope="col">56789</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">items Descripions</th>
      <td>classy affordable <br />black bag</td>
      <td>red covered shoe <br />avalavle sizes 38 to 42</td>
      <td>green color office <br />dress</td>
    </tr>
   
   
  </tbody>
</table>

{
    products && products.map((products) => (
        <tr>
                <th scope="row">{products.id}</th>
                <td>{products.name}</td>
                <td>{products.email}</td>
                <td>{products.phone}</td>
                <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger ms-3">Delete</button>
                </td>
      </tr>
    ))
   }
    </div>
  )
}

export default Top

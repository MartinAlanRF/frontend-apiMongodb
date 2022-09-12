import React from 'react'
import ProductList from '../components/ProductList'
import Title from '../components/Title'

const ProductsPage = () => {
  return (
    <>
        <Title titulo={"Productos"}/>
        <main className="container">
            <div className="row">
                <article className="col-md-6">
                    <ProductList/>
                </article>
            </div>
        </main>
    </>
  )
}

export default ProductsPage
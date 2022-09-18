import React from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import Title from '../components/Title'

const ProductsPage = () => {
  return (
    <>
        <Title titulo={"Productos"}/>
        <main className="container">
            <div className="row">
                <article className="col-md-4">
                  <ProductList/>
                </article>
                <article className="col-md-8">
                  <ProductForm/>
                </article>
            </div>
        </main>
    </>
  )
}

export default ProductsPage
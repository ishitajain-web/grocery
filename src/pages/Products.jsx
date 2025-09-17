import React from 'react'
import ProductCard from '../components/ProductCard'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Products = () => {
  return (
    <>
        <NavBar/>
      <section className='p-[42px] m-auto' >
        <h3 className='text-2xl font-semibold mb-[30px]' >Dairy Products</h3>
        <div className='grid grid-cols-5 justify-between gap-[32px]' >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

        </div>
        <div className='text-2xl font-semibold my-[30px]' >Recomendations</div>
          <div className='grid grid-cols-5 justify-between gap-[32px]' >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
            <ProductCard />
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Products

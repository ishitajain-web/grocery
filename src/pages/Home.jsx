import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bgHeader = [
  {img : "https://www.shutterstock.com/image-photo/shopping-delivery-healthy-food-background-260nw-1689766759.jpg"},
  {img : "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2024-07/grocery-list-1024x536.jpg"},
  {img: "	https://hopkinsdiabetesinfo.org/wp-content/uploads/2022/02/Food-Grocery-Vegetables-1140771380.jpg"},
]
const home = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <NavBar />
      <div className='relative'  >
         <Slider {...settings}>
        {bgHeader.map((item)=>(
        <img src={item.img}
        alt=''
        className='h-120 w-full object-cover' />
        ))}
        </Slider>
        {/* <img
          src="https://www.shutterstock.com/image-photo/shopping-delivery-healthy-food-background-260nw-1689766759.jpg"
          className='h-120 w-full object-cover'
        /> */}
        <p className='absolute top-1/2 left-20 -translate-y-1/2 text-white lg:text-[54px] md:text-[2rem] text-[24px] font-black w-1/2 ' >
          Fresh groceries delivered fast.
          Right to your doorstep, every time.
        </p></div>
      <section className='px-[3rem] py-[2remx] m-auto'>
        <h3 className='mb-[28px] text-xl' >
          Explore our Menu
        </h3>
        <div className='lg:flex justify-between md:grid md:grid-cols-4 gap-4 grid-cols-3 gap-2 grid' >
          <div className='grid items-center justify-items-center bg-slate-100 p-[8px] rounded-md cursor-pointer' >
            <img src='https://img.freepik.com/premium-vector/whole-milk-…h_1080480-137652.jpg?semt=ais_incoming&w=740&q=80'
              className='w-[160px] h-auto mix-blend-multiply ' />
              <p>dairy Productss</p>
          </div>
          <div className='grid items-center justify-items-center bg-slate-100 p-[8px] rounded-md cursor-pointer' >
            <img src='https://img.freepik.com/premium-vector/whole-milk-…h_1080480-137652.jpg?semt=ais_incoming&w=740&q=80'
              className='w-[160px] h-auto mix-blend-multiply ' />
              <p>dairy Productss</p>
          </div><div className='grid items-center justify-items-center bg-slate-100 p-[8px] rounded-md cursor-pointer' >
            <img src='https://img.freepik.com/premium-vector/whole-milk-…h_1080480-137652.jpg?semt=ais_incoming&w=740&q=80'
              className='w-[160px] h-auto mix-blend-multiply ' />
              <p>dairy Productss</p>
          </div><div className='grid items-center justify-items-center bg-slate-100 p-[8px] rounded-md cursor-pointer' >
            <img src='https://img.freepik.com/premium-vector/whole-milk-…h_1080480-137652.jpg?semt=ais_incoming&w=740&q=80'
              className='w-[160px] h-auto mix-blend-multiply ' />
              <p>dairy Productss</p>
          </div><div className='grid items-center justify-items-center bg-slate-100 p-[8px] rounded-md cursor-pointer' >
            <img src='https://img.freepik.com/premium-vector/whole-milk-…h_1080480-137652.jpg?semt=ais_incoming&w=740&q=80'
              className='w-[160px] h-auto mix-blend-multiply ' />
              <p>dairy Productss</p>
          </div><div className='grid items-center justify-items-center bg-slate-100 p-[8px] rounded-md cursor-pointer' >
            <img src='https://img.freepik.com/premium-vector/whole-milk-…h_1080480-137652.jpg?semt=ais_incoming&w=740&q=80'
              className='w-[160px] h-auto mix-blend-multiply ' />
              <p>dairy Productss</p>
          </div>
        </div>
      </section>
      <section className='px-[3rem] py-[2rem] m-auto' >
        <h3 className='mb-[28px] text-xl' >
          Best Seller
        </h3>
        <div className='grid lg:flex justify-between md:grid md:grid-cols-4 gap-4 grid-cols-2 gap-4'  >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

      </section>
      <section className='px-[3rem] py-[2rem] m-auto' >
        <h3 className='mb-[28px] text-xl' >
          Fruits
        </h3>
        <div className='grid lg:flex justify-between md:grid md:grid-cols-4 gap-4 grid-cols-2 gap-4' >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      <section className='px-[3rem] py-[2rem] m-auto' >
        <h3 className='mb-[28px] text-xl' >
          Vegetables
        </h3>
        <div className='grid lg:flex justify-between md:grid md:grid-cols-4 gap-4 grid-cols-2 gap-4' >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default home
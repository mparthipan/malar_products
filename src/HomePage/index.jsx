import React from 'react'
import Header from "./header"
import Footer from "./footer"
import ProductSection from "./product"
import ProductCarouselPage from "./benefits"
import FAQSection from "./customerView"

const HomePage = () => {
  return (
    <div>
        <Header/>
        <ProductSection/>
        <ProductCarouselPage/>
        <FAQSection/>
        <Footer />
    </div>
  )
}

export default HomePage

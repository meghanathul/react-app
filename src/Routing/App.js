import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'
import Header from './Routing/Header.js'
import Footer from './Routing/Footer'
import Home from './Routing/Home.js'
// import About from './Routing/About.js'
// import Contactus from './Routing/Contactus.js'
// import PagenotFound from './Routing/PagenotFound.js'
import Product from './Routing/Product.js'
import MobileList from './Routing/MobileList.js'
import LaptopList from './Routing/LaptopList.js'
import ProductDesc from './Routing/ProductDesc'
import Detail from './Routing/Detail.js'

const App = () => {
    return (

        <Router>
            <Header />
            <Routes>
            {/* <Route path='/' element={<Navigate to='/home'/>} />  --to redirect the path */}
                <Route path='/' element={<Home/>} />
                <Route path='/product' element={<Product/>} >
                    
                <Route path='mobile' element={<MobileList/>} >
                <Route path=':myMobileParam' element={<ProductDesc/>}/>
                </Route>
                <Route path='laptop' element={<LaptopList/>} /> 
                </Route> 
                <Route path='/detail' element={<Detail/>}/>
                <Route path='/product' element={<Product/>}/>
                {/* Before Nesting */}

                {/* <Route path='/product/laptop' element={<LaptopList/>} />   */}
                {/* <Route path='/home' element={<Home />} /> */}
                {/* <Route path='/' element={<Navigate to='/anything'/>} /> */}
                {/* <Route path='/about' element={<About />} />
                <Route path='/contactus' element={<Contactus />} />
                <Route path='*' element={<PagenotFound/>} /> --Default page     */} 
            </Routes>
            <Footer />
            {/* <div>
            <Header />
            <Home />
            <About />
            <Contactus />
            <Footer />
        </div> */}
        </Router>
    )
}

export default App

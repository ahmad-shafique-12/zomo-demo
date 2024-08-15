import React from 'react'
import Header from '../Component/Header'
import Categories from '../Component/Categoris'
import Deal from '../Component/Deal'
import Brand from '../Component/Brand'
import PopluarItem from '../Component/PopluarItem'
import Detail from '../Component/Detail'
import EmailPage from '../Component/EmailPage'
import Footer from '../Component/Footer'



export const Home = () => {
    return (
        <div>
             <Header/>
             <Categories/>
             <Deal/>
             <Brand/>
             <PopluarItem/>
             <Detail/>
             <EmailPage/>
             <Footer/>
                  
        </div>
    )
}

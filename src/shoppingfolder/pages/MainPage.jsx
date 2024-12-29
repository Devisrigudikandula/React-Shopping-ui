import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import { Gents, Ladies } from '../data'
import WomanCollection from '../components/WomanCollection'
const MainPage = () => {
  const [gentsFashion] =useState(Gents)
  const [LadiesFashion] =useState(Ladies)
  console.log(Gents)

  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsFashion= {gentsFashion}/>
        <WomanCollection LadiesFashion= {LadiesFashion}/>
        <Footer />
      
    </div>
  )
}

export default MainPage

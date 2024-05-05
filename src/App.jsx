import { useState } from 'react'
import './App.css'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import MovieList from './components/sidebar/movieList/MovieList'

import { MovieContext } from './context'

function App() {
  const [cartData, setCartData]=useState([])
  

  return (
    <>
    <MovieContext.Provider value={{cartData, setCartData}}>
     <Header />
     <MovieList />
     <Footer />

     </MovieContext.Provider>
    </>
  )
}

export default App

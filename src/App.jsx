
import './App.css'
import FilterBar from './components/FilterBar/FilterBar'
import Header from './components/Header/Header'
import ProductCard from './components/ProductCard/ProductCard'


function App() {


  return (

    <>

      <Header />
      <FilterBar />
      <div className='home-body'>
        <div className="cards-area">
          <ProductCard img="../src/assets/cloth_29.jpg" name="Vestido blabla" price="43" />
          <ProductCard img="../src/assets/cloth_3.jpg" name="Blusa e calças" price="29" />
          <ProductCard img="../src/assets/cloth_16.jpg" name="T-shirts" price="32.8" />
          <ProductCard img="../src/assets/cloth_21.jpg" name="Casaco de napa" price="24" />
          <ProductCard img="../src/assets/cloth_24.jpg" name="Vestido + blusa" price="29" />
          <ProductCard img="../src/assets/cloth_10.jpg" name="Casacos" price="32.8" />
          <ProductCard img="../src/assets/cloth_26.jpg" name="Camisas" price="24" />
          <ProductCard img="../src/assets/cloth_33.jpg" name="Fato feminino co bermuda" price="64" />
          <ProductCard img="../src/assets/cloth_12.jpg" name="Blusas diversas" price="35.8" />
          <ProductCard img="../src/assets/cloth_19.jpg" name="Casaco de napa castanho escuro" price="54" />


        </div>

        <div className='whatsapp-btn'>
          <img src="../src/assets/whatsapp.png" alt="" />
          Fale connosco
        </div>
        <div className='footer-body'>
          teste
        </div>
      </div>

    </>

  )
}

export default App

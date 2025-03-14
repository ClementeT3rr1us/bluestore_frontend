
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
          <ProductCard img="../src/assets/cloth_29.jpg" name="Teste" price="43" />
          <ProductCard img="../src/assets/cloth_3.jpg" name="Teste1" price="29" />
          <ProductCard img="../src/assets/cloth_16.jpg" name="Teste2" price="32.8" />
          <ProductCard img="../src/assets/cloth_21.jpg" name="Teste3" price="24" />
          <ProductCard img="../src/assets/cloth_24.jpg" name="Teste4" price="29" />
          <ProductCard img="../src/assets/cloth_10.jpg" name="Teste5" price="32.8" />
          <ProductCard img="../src/assets/cloth_26.jpg" name="Teste6" price="24" />
          <ProductCard img="../src/assets/cloth_33.jpg" name="Teste7" price="24" />
          <ProductCard img="../src/assets/cloth_12.jpg" name="Teste8" price="24" />
          <ProductCard img="../src/assets/cloth_19.jpg" name="Teste9" price="24" />


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

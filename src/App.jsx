
import './App.css'
import FilterBar from './components/FilterBar/FilterBar'
import Header from './components/Header/Header'


//Reaproveitando componentes

function App() {


  return (

    <>
      
    <Header/>
    <FilterBar/>
    <div className='home-body'>
      
      <div className='whatsapp-btn'>
        <img src="../src/assets/whatsapp.png" alt="" />
        Fale connosco
      </div>
    </div>
    </>

  )
}

export default App

import Header from './components/Header';
import './app.css';
import { useContext } from 'react';
import Main from './components/Main';
import WeatherContext from './context/setcontext'

function App() {
  
  return (
      <section style={{ backgroundColor: '#121114' }}>

        <Header/>
        <Main />
      </section>



  )
}

export default App

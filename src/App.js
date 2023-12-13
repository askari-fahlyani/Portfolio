import { useContext } from 'react';
import './Style/Style.css'
import Header from './Components/Headear/Header';
import Switcher from './Components/Headear/LabelAndSwitch/Switcher';
import HeaderContext from './Context/HeaderContext';


function App() {
  const {darkMode} = useContext(HeaderContext)
  return (
    <div className={darkMode?"flex justify-center bg-darkMode ":"flex justify-center bg-mountain " }>
    <h1 className='h-[100vh] w-[95%] justify-center align-center'>
      <Header/>
    </h1>
    </div>
  );
}

export default App;

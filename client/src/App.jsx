import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar'
import Form from './components/Form'
import DeleteForm from './components/DeleteForm';
import ViewForm from './components/ViewForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar />
      <Routes>
          <Route path='/' element={<Form/>} />
          <Route path='/Delete' element={<DeleteForm/>} />
          <Route path='/View' element={<ViewForm/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App

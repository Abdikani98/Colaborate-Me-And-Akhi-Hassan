
import { Route, Routes } from 'react-router-dom'

import Header from './components/header'
import Nav from './components/nav'
import Next from './pages/event'



function App() {
  return <div>
    <Header />
    <Nav />
 
   <Routes>
    <Route path='events' element={<Next/>}/>
   </Routes>
   
  </div>

 
}

export default App

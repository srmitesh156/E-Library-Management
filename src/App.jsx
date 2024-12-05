import {Route,BrowserRouter as Router,Routes } from 'react-router-dom';

import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Addbook from './components/pages/Addbook';
import Booklist from './components/pages/BookList';
// import Bookdetails from './components/pages/Bookdetails';


function App() {
  

  return (
    <>
  
     <Router>
     <Header/>
      <Routes>
        <Route path="/" element={<Addbook />}/>
        <Route path="/booklist" element={<Booklist />}/>
        {/* <Route path="/bookdetails" element={<Bookdetails />}/> */}
      </Routes>
      <Footer/>
     </Router>
    </>
  )
}

export default App

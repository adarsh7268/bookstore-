import React from 'react';
import './App.css';
import Books from './components/Book/Books';
import Header from './components/Header';
import { Routes,Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Addbook from './components/Addbook';
import Bookdetail from './components/Book/Bookdetail';

function App() {
  return (

    <React.Fragment >
      <header>
    <Header/>
    </header>
      <main>
<Routes>
  <Route path= "/" element={<Home/>} exact/>
  <Route path= "/add" element={<Addbook/>} exact/>
  <Route path= "/books" element={<Books/>} exact/>
  <Route path= "/about" element={<About/>} exact/>
  <Route path= "/books/:id" element={<Bookdetail/>} exact/>
  
  
</Routes>
      </main>
  
    </React.Fragment>
  );
}

export default App;

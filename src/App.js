import {  BrowserRouter, Routes, Route }  from 'react-router-dom'

import Home from './pages/home';
import PageNotFound from './pages/missing';


import './style/App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

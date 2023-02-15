import React from 'react'
import ReactDOM from 'react-dom '
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './components/Home'
import CreateNew from './components/CreateNew'



ReactDOM.render(
  <> 
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/create" element={<CreateNew/>}/>
        </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </>
  ,
  document.getElementById('root')
)

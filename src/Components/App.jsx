import { Route, Routes } from "react-router-dom"
import { News } from "./News"
import { Gallery } from "./Gallery"
import { Logo } from "./Logo"
import { Link } from 'react-router-dom';
import './StyleForComponents/App.css';
import './StyleForComponents/News.css';
import './StyleForComponents/Logo.css';
import './StyleForComponents/Gallery.css';
import Logo1 from './Photo/Logo1.png'
import React from "react";



function App() {
  return (

            <>
              <nav>
                  <div className="BackForHeader">

                      <ul>
                          <li>
                              <Link to="/">Новини</Link>
                          </li>

                          <li>
                              <div className="logo">
                                  <Link to="/Logo"><img src={Logo1} /></Link>
                              </div>
                          </li>

                          <li>
                              <Link to="/Gallery">Галерея</Link>
                          </li>

                      </ul>
              </div>
              </nav>


          <Routes>
              <Route path="/" element={<News />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Logo" element={<Logo />} />
          </Routes>
      </>
  )
}

export default App
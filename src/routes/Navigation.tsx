import { BrowserRouter, Navigate } from "react-router-dom"
import { Routes, Route, NavLink } from "react-router-dom"
import logo from "../logo.svg"

import { LazyPages1, LazyPages2, LazyPages3 } from "../01-lazyload/pages/"

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="React Logo" />
            
            <ul>
                <li>
                    <NavLink to="/lazy1" className={({isActive})=> isActive? 'nav-active': '' }>Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="/lazy2" className={({isActive})=> isActive? 'nav-active': '' }>Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="/lazy3" className={({isActive})=> isActive? 'nav-active': '' }>Lazy 3</NavLink>
                </li>
            </ul>
            </nav>

            <Routes>
                <Route path="/lazy1" element={<LazyPages1/>} />
                <Route path="/lazy2" element={<LazyPages2/>} />
                <Route path="/lazy3" element={<LazyPages3/>} />
                
                <Route path="/lazy1" element={< Navigate to="/home" replace/>} />
            </Routes>
        </div>

    </BrowserRouter>
  )
}

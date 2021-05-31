import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Works } from './Works'
export const Navbar = () => {

    return(

        <nav className='nav__block'>
            <div className="nav__container">
                <ul className='nav__list'>
                    <li className='nav__item'><HashLink to='/#skill' className='nav__link'>Skills</HashLink></li>
                    <li className='nav__item'><Link to='/works' className='nav__link'>Works</Link></li>
                    <li className='nav__item'><HashLink to='/#contactform' className='nav__link'>Contact</HashLink></li>

                </ul>
                <div className="nav__socials">
                    <a href="#" className="nav__social telegram"></a>
                    <a href="#" className="nav__social github"></a>
                    <a href="#" className="nav__social facebook"></a>
                </div>
            </div>
        </nav>

    )

}
import React from 'react'

export const Navbar = () => {

    return(

        <nav className='nav__block'>
            <div className="nav__container">
                <ul className='nav__list'>
                    <li className='nav__item'><a href="#skill" className='nav__link'>Skills</a></li>
                    <li className='nav__item'><a href="#" className='nav__link'>Works</a></li>
                    <li className='nav__item'><a href="#contactform" className='nav__link'>Contact</a></li>
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
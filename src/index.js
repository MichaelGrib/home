import React from 'react'
import ReactDOM from 'react-dom'
import { Skill } from './components/Skill'
import { Navbar } from './components/Navbar'
import './styles/index.scss'
import { Cover } from './components/Cover'
import { Contactform } from './components/Contactform'

const el = document.getElementById('root')
const App = () => {
    return(
        <div>
            <Navbar/>
            <Cover/>
            <Skill/>
            <Contactform/>
        </div>
    )
}
ReactDOM.render(<App/>, el) 
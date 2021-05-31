import React from 'react'
import ReactDOM from 'react-dom'
import { Skill } from './components/Skill'
import { Navbar } from './components/Navbar'
import './styles/index.scss'
import { Cover } from './components/Cover'
import { Contactform } from './components/Contactform'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import { Works } from './components/Works'

const el = document.getElementById('root')
const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Navbar/>

                <Switch>
                    <Route path="/home/works">
                        <Works/>
                    </Route>
                    <Route path="/home/">
                            <Cover/>
                            <Skill/>
                            <Contactform/>
                    </Route>
                    
                </Switch>
            </BrowserRouter>
        </div>
    )
}
ReactDOM.render(<App/>, el) 
import './App.css'
import React from 'react'
import {HashRouter} from 'react-router-dom'
import Logo from '../template/Logo'
import Nav from '../template/Nav'

import Footer from '../template/Footer'
import Header from '../template/Header'
import Routes from './Routes'

export default props =>
    <HashRouter>
    <div className="app">
        <Logo />
        <Nav />
        <Header/>
        <Routes/>          
        <Footer/>

    </div>
    </HashRouter>
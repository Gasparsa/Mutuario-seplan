import './App.css'
import React from 'react'
import {HashRouter} from 'react-router-dom'
import Logo from '../templates/logo/Logo'
import Nav from '../templates/nav/Nav'

import Footer from '../templates/footer/Footer'
import Header from '../templates/header/Header'
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
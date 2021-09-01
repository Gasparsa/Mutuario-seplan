import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className = "nav ">
        <nav className="menu">
            
            <Link to="/">
                <i className='home'></i> Início
            </Link>
            <Link to="/search">
                <i className='search'></i> Buscar por CPF
            </Link>
            <Link to="/login" className="login">
                <i className='logar'></i> logar
            </Link>
            <Link to="/register" className="register">
                <i className='register'></i> Cadastro de Usuário
            </Link>
            <Link to="/audit" className="audit">
                <i className='audit'></i> Auditar
            </Link>
            
            
            </nav>      
    </aside>
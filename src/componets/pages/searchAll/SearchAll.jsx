import './SearchAll.css'
import React, { Fragment } from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'

export default props =>
    <React.Fragment>
        
        <main className = "main container-fluid">
            <div className="p-3 mt-3">
            <SearchBar pesquisa="CONSULTAR CPF"/>
            <p></p>
            <SearchBar pesquisa="CONSULTAR SORTEIO UFCF - BUSCA POR CPF"/>
            </div>
        </main>
    </React.Fragment>
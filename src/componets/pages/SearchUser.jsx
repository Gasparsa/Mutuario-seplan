import './SearchUser.css'
import React, { Fragment } from 'react'
import SearchBar from '../pages/SearchBar/SearchBar'

export default props =>
    <React.Fragment>
        
        <main className = "main container-fluid">
            <div className="p-3 mt-3">
            <SearchBar pesquisa="CONSULTAR SORTEIO UFCG - BUSCA POR CPF"/>
            <p></p>
            <SearchBar pesquisa="CONSULTAR CPF PARA REALIZAR EDIÇÃO"/>
            <p></p>
            <SearchBar pesquisa="CONSULTAR CADASTRO GERAL BUSCA POR CPF"/>
            </div>
            
        </main>
    </React.Fragment>
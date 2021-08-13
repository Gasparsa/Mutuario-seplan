import './searchBar.css'
import React from 'react'


export default props =>
    
    
    <aside className = "searchBar">
        <h5>{props.pesquisa}</h5> 
        <a>Realize consulta pelo CPF</a> 
        <input type="text" className="text"></input>
        <input type="button" value= "Buscar" className="button"></input>          
    </aside>
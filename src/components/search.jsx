import React from 'react'
import './search.css'

export default function SearchBox(props){
    return(
        <input className= "search__input" type="text" placeholder="Enter a Location" onKeyPress={props.onKeyPress} onChange={props.onChange} />
    )
}
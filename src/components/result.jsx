import React,{Fragment}from 'react'
import './result.css'

export default function Result(props){
    return(
    <Fragment>
        <section className="loc__box">
            <h1 className="loc__box__country">{props.city}, {props.country}</h1>
            <h3 className="loc__box__date">{new Date().toUTCString()}</h3>
        </section>
        <section className="weather__box__info">
            <p className="weather__box__temp">{Math.floor(props.temp)} °c </p>
            <p className="weather__box__description">{props.description}</p>
        </section>
    </Fragment>
    )
}
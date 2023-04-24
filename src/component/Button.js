import React from 'react'

export function Name(props){
    return(
        <>
        <h1>Hello I am {props.name}</h1>
        <button onClick={props.key2}>click me</button>
        <button onClick={props.key3}>click me</button>
        </>
    )
}
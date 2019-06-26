import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove all</button>

        {(props.options.length === 0 ) ? <p>Please add one option to get started!!!</p>: <h3>All your options: {props.options.length}</h3>}
        <div>
            { props.options.map((option) => (<Option handleDeleteOneOption={props.handleDeleteOneOption} props key={option} option={option}/>)) }
        </div>
    </div>
)

export default Options
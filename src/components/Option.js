import React from 'react'

const Option = (props) => (
    <div>
        <span>{ props.option }</span>
        <button onClick={(e) => props.handleDeleteOneOption(props.option)}>Remove</button>
    </div>
)

export default Option
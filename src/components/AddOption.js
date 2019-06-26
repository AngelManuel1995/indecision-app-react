import React from 'react'

export default class AddOption extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            error: undefined
        }
        this.handleAddOption = this.handleAddOption.bind(this)
    }

    handleAddOption(e) {
        e.preventDefault()
        let option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        if(!error){
            e.target.elements.option.value = ''
        }
        this.setState(() => {
            return {
                error: error
            }
        })
    }

    render(){
        return (
            <div>
                { this.state.error }
                <form onSubmit={this.handleAddOption}>
                    <label htmlFor="addOption">Add new option</label>
                    <input id="addOption" name="option" type="text"/>
                    <button>ADD</button>
                </form>
            </div> 
        )
    }
}
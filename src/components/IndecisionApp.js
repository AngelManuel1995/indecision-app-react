import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'

class IndecisionApp extends React.Component {

    constructor(props){
        super(props)
        this.state  = {
            options : []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOneOption = this.handleDeleteOneOption.bind(this)
    }

    componentDidMount(){
        try {
            const options = JSON.parse(localStorage.getItem('options'))
            if(options){
                this.setState(() => ({ options }))
            }

        } catch (e) {
            this.state.options = []
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const optionsJson = JSON.stringify(this.state.options)
            localStorage.setItem('options', optionsJson)
        }
    }

    componentWillUnmount(){
        return true
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options:[]  
            }
        })
    }
    handleDeleteOneOption(optionToRemove){
        this.setState((prevState) => ({ options: prevState.options.filter(((option) => option !== optionToRemove))}))
    }

    handlePick(){
        const decision = Math.floor((Math.random() * this.state.options.length))
        const todo = this.state.options[decision]
        alert(todo)
    }

    handleAddOption(option){
        if(!option){
            return 'Enter a valid option to add into the list'
        }else if(this.state.options.indexOf(option) > -1){
            return 'The option is already in the list'
        }

        this.setState((prevState) => {
            return {
                options: [ ...prevState.options, option ]
            } 
        })

    }

    render(){
        return (
            <div>
                <Header />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}    
                />
                <Options
                    handleDeleteOneOption={this.handleDeleteOneOption} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    options={this.state.options} 
                />
                <AddOption 
                    handleAddOption={this.handleAddOption} 
                />
            </div>
        ) 
    }
}

export default IndecisionApp
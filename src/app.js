class IndecisionApp extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            options: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options:[]  
            }
        })
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

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>INDECISION APP</h1>
                <p>put your life in the hands of a computer</p>
            </div>
        )
    }
}

const Action = (props) =>{

    return (
        <div>
            <button onClick={props.handlePick}
                disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    )

}

class AddOption extends React.Component {

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

class Option extends React.Component {
    render(){
        return (
            <div>
                { this.props.option }
            </div>
        )
    }
}

class Options extends React.Component {
    render(){
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
                <h3>All your options: {this.props.options.length}</h3>
                <div>
                    { this.props.options.map((option) => (<Option key={option} option={option}/>)) }
                </div>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
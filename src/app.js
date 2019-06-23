class IndecisionApp extends React.Component {

    render(){
        const options = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
        return (
            <div>
                <Header />
                <Action />
                <Options options={options} />
                <AddOption />
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

class Action extends React.Component {
    render(){
        return (
            <button>What should I do?</button>
        )
    }
}

class AddOption extends React.Component {
    render(){
        return (
            <div>
                <form>
                    <label htmlFor="addOption">Add new option</label>
                    <input id="addOption" type="text"/>
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
                { this.props.options.map((option) => (<p key={ option }>{option}</p>)) }
            </div>
        )
    }
}

class Options extends React.Component {
    render(){
        return (
            <div>
                <h3>All your options: {this.props.options.length}</h3>
                <Option {...this.props}/>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
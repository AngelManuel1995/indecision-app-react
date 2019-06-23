const app = {
    options:['item1', 'item2']
}

const getLocation = ({location}) => {
    if(!location){
        return 'Unknown'
    }
    return <p>My location is: {location}</p>
}

let style = {
    border:'2px solid #eee',
    color:'black',
    boxShadow:'0px 2px #ccc',
    padding:'10px',
    backgroundColor:'#fff',
    display: 'inline-block',
    margin:'0px auto',
}

const onFormSubmit = (e) => {
    e.preventDefault()
    let option = e.target.elements.option.value
    if(option){
        app.options.push(option)
        e.target.elements.option.value = ''
        render()
    }
}

const onMakeDecision = () => {
    let decision = Math.floor((Math.random() * app.options.length))
    let todo = app.options[decision]
    console.log(todo)
}

const removeAllItems = () => {
    app.options = []
    render()
}

const render = () => { 

    const template = (
        <div style={style}>
            <h1>Indecision app</h1>
            <p>Hi I am basic template, and I changed</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>WHAT SHOULD I DO?</button>
            <button onClick={removeAllItems}>REMOVE ALL</button>
            {(app.options.length > 0 ) ? <p>Here are your options: {app.options.length}</p> : <p>No options to show</p> }
            <ol>
                { app.options.map(option => (<li key={option}>{ option }</li>)) }
            </ol>
            <div>
                <form onSubmit={onFormSubmit}>
                    <label htmlFor="itemForm">Add new item</label>
                    <input id="itemForm" name="option" type="text"/>
                    <button>ADD</button>
                </form>
            </div>
        </div>
    )

    ReactDOM.render(template, document.getElementById('app'))
}

render()
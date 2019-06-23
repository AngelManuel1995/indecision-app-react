const user = {
    name:'Angel Manuel Góez Giraldo',
    age:24,
    location:'Medellín - Colombia'
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
    margin:'0px',
}
let buttonStyleAdd= {
    backgroundColor:'green',
    color:'#fff',
    padding:'5px',
    fontSize:'20px',
    boxShadow:'1px 2px #ccc',
    margin:'2px',
}
let buttonStyleMinus = {
    backgroundColor:'crimson',
    color:'#fff',
    padding:'5px',
    fontSize:'20px',
    boxShadow:'1px 2px #ccc',
    margin:'2px',
}
let buttonStyleRestart = {
    backgroundColor:'blue',
    color:'#fff',
    padding:'5px',
    fontSize:'20px',
    boxShadow:'1px 2px #ccc',
    margin:'2px',
}

let counter = 0

const addOne = () => {
    counter++
    render()
}
const minusOne = () => {
    counter--
    render()
}
const reset = () => {
    counter = 0
    render()
}

const render = () => { 

    const template = (
        <div>
            <div style={style}>
                <h1>Indecision app</h1>
                <p>Hi I am basic template, and I changed</p>
                <ol>
                    <li>Item one</li>
                    <li>Item two</li>
                </ol>
                { getLocation(user) }
            </div>

            <div style={style}>
                <h1>Counter mini-app</h1>
                <p>Events and Attributes</p>
                <p>Counter: { counter }</p>
                <button style={buttonStyleAdd} onClick={addOne}>Add 1</button>
                <button style={buttonStyleMinus} onClick={minusOne}>Minus 1</button>
                <button style={buttonStyleRestart} onClick={reset}>Reset</button>
            </div>
        </div>
    )

    ReactDOM.render(template, document.getElementById('app'))
}

render()
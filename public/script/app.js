'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var p = _react2.default.createElement(
   'p',
   null,
   'Babel webpack'
);

_reactDom2.default.render(p, document.getElementById('app'));

// class IndecisionApp extends React.Component {

//     constructor(props){
//         super(props)
//         this.state  = {
//             options : []
//         }
//         this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
//         this.handlePick = this.handlePick.bind(this)
//         this.handleAddOption = this.handleAddOption.bind(this)
//         this.handleDeleteOneOption = this.handleDeleteOneOption.bind(this)
//     }

//     componentDidMount(){
//         try {
//             const options = JSON.parse(localStorage.getItem('options'))
//             if(options){
//                 this.setState(() => ({ options }))
//             }

//         } catch (e) {
//             this.state.options = []
//         }
//     }

//     componentDidUpdate(prevProps, prevState){
//         if(prevState.options.length !== this.state.options.length){
//             const optionsJson = JSON.stringify(this.state.options)
//             localStorage.setItem('options', optionsJson)
//         }
//         console.log('Component did update')
//     }

//     componentWillUnmount(){
//         console.log('Component will Unmount')
//         return true
//     }

//     handleDeleteOptions(){
//         this.setState(() => {
//             return {
//                 options:[]  
//             }
//         })
//     }
//     handleDeleteOneOption(optionToRemove){
//         this.setState((prevState) => ({ options: prevState.options.filter(((option) => option !== optionToRemove))}))
//     }

//     handlePick(){
//         const decision = Math.floor((Math.random() * this.state.options.length))
//         const todo = this.state.options[decision]
//         alert(todo)
//     }

//     handleAddOption(option){
//         if(!option){
//             return 'Enter a valid option to add into the list'
//         }else if(this.state.options.indexOf(option) > -1){
//             return 'The option is already in the list'
//         }

//         this.setState((prevState) => {
//             return {
//                 options: [ ...prevState.options, option ]
//             } 
//         })

//     }

//     render(){
//         return (
//             <div>
//                 <Header />
//                 <Action 
//                     hasOptions={this.state.options.length > 0}
//                     handlePick={this.handlePick}    
//                 />
//                 <Options
//                     handleDeleteOneOption={this.handleDeleteOneOption} 
//                     handleDeleteOptions={this.handleDeleteOptions}
//                     options={this.state.options} 
//                 />
//                 <AddOption 
//                     handleAddOption={this.handleAddOption} 
//                 />
//             </div>
//         ) 
//     }
// }

// const Header = () => (
//     <div>
//         <h1>INDECISION APP</h1>
//         <p>put your life in the hands of a computer</p>
//     </div>
// )


// const Action = (props) =>{

//     return (
//         <div>
//             <button onClick={props.handlePick}
//                 disabled={!props.hasOptions}>
//                 What should I do?
//             </button>
//         </div>
//     )

// }

// class AddOption extends React.Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             error: undefined
//         }
//         this.handleAddOption = this.handleAddOption.bind(this)
//     }

//     handleAddOption(e) {
//         e.preventDefault()
//         let option = e.target.elements.option.value.trim()
//         const error = this.props.handleAddOption(option)
//         if(!error){
//             e.target.elements.option.value = ''
//         }
//         this.setState(() => {
//             return {
//                 error: error
//             }
//         })
//     }

//     render(){
//         return (
//             <div>
//                 { this.state.error }
//                 <form onSubmit={this.handleAddOption}>
//                     <label htmlFor="addOption">Add new option</label>
//                     <input id="addOption" name="option" type="text"/>
//                     <button>ADD</button>
//                 </form>
//             </div> 
//         )
//     }
// }

// const Option = (props) => (
//     <div>
//         <span>{ props.option }</span>
//         <button onClick={(e) => props.handleDeleteOneOption(props.option)}>Remove</button>
//     </div>
// )


// const Options = (props) => (
//     <div>
//         <button onClick={props.handleDeleteOptions}>Remove all</button>

//         {(props.options.length === 0 ) ? <p>Please add one option to get started!!!</p>: <h3>All your options: {props.options.length}</h3>}
//         <div>
//             { props.options.map((option) => (<Option handleDeleteOneOption={props.handleDeleteOneOption} props key={option} option={option}/>)) }
//         </div>
//     </div>
// )


// /*IndecisionApp.defaultProps = {
//     options: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
// }*/

// ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import Navigation from './Navigation'


class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          notes:'First note'
        },
        {
          id: 2,
          notes:'Second note'
        }
      ],
      todoInputValue : ""
    }


  }
  

  handleTodoInputChange = (e) => {
    var value = e.target.value; //e.target은 <input/>이고 e.target.value는 <input/> 의 value
    this.setState({
      todoInputValue : e.target.value
    })
    console.log(this);
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.setState({
      notes : [ ...this.state.notes, {notes:this.state.todoInputValue}],
      todoInputValue : ""
    })
  }

  handleDelete = (i) => {
    this.setState({
      notes: this.state.notes.filter((val,index,arr) =>{
        return index !== i;
      })
    })
  }

  render() {
    return (
       <div className="wrap">

         <h1>My Notes</h1>

         <ul>
           {this.state.notes.map((n,i) => {
             return <li>{n.notes} <span onClick={() =>this.handleDelete(i)}>X</span></li>
           })}
         </ul>

         <form onSubmit={this.handleSubmit}>
           <input onChange={this.handleTodoInputChange} value={this.state.todoInputValue} />
           <input type="submit" value="Add"/>
         </form>

       </div>
     )
  }

};



export default TodoApp;
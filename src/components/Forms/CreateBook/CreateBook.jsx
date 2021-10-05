import React, { Component } from 'react';
// import './CreateBook.css'

class CreateBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: ''
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createBook(this.state)
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label>Book Name</label>
                <input name="title" onChange={this.handleChange} value={this.state.title}/>
                <label>Author</label>
                <input name="author" onChange={this.handleChange} value={this.state.author}/>
                <button type="submit">Add Book</button>
            </form>
         );
    }
}
 
export default CreateBook;

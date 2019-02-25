import React, { Component } from 'react';
import 'whatwg-fetch';
import moment from 'moment';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      new_todo: ''
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(response => {
        if (response.status) {
          this.setState({
            todos: response.todos
          });
        }
      });
  }

  handleChange(event) {
    this.setState({new_todo: event.target.value});
  }

  addTodo(event) {
    event.preventDefault();
    if (this.state.new_todo != '') {
      const new_todo = this.state.new_todo;
      this.setState({new_todo: ''});

      fetch('/api/todos', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          new_todo: new_todo
        })
      }).then(res => res.json())
      .then(response => {
        let data = this.state.todos;
        data.push(response.todo);

        this.setState({
          todos: data
        });
      });
    }
  }

  deleteTodo(event, index) {
    event.preventDefault();
    const id = this.state.todos[index]._id;

    fetch(`/api/todos/${id}`, { method: 'DELETE' })
      .then(_ => {
        let data = this.state.todos;
        data.splice(index, 1);
        this.setState({
          todos: data
        });
      });
  }

  render() {
    return (
      <>

        <div class="row mb-4">
          <div class="col-md-8 offset-md-2">
              <form class="form-inline">
                <div class="form-group mx-4" style={{ width: '50%'}}>
                  <input type="text" class="form-control" id="todotext" placeholder="Cook Dinner ..." value={this.state.new_todo} style={{ width: '100%'}} onChange={this.handleChange} ref={this.inputTodo} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={this.addTodo}>Add Todo</button>
              </form>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8 offset-md-2">
            <table class="table table-bordered table-hover">
              <thead class="thead-light">
                <tr>
                  <th style={{ width: '5%'}}>#</th>
                  <th style={{ width: '70%'}}>Todo</th>
                  <th style={{ width: '15%'}}>Created At</th>
                  <th style={{ width: '10%'}}>Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.state.todos.map((todo, i) => (
                  <tr>
                    <td>{ i + 1 }</td>
                    <td>{ todo.text }</td>
                    <td>{ moment(todo.created_at).fromNow() }</td>
                    <td>
                      <button class="btn btn-sm btn-danger" onClick={(e) => this.deleteTodo(e, i)}>Delete</button>
                    </td>
                  </tr>
                )) }
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Todo;

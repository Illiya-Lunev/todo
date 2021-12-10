import './Sass/main.scss';
import 'modern-normalize/modern-normalize.css';
import { Component } from 'react';
import TodoList from './components/Todos/TodoList/TodoList';
import TodoFilter from './components/Todos/TodoFilter/TodoFilter';
import TodoEditor from './components/Todos/TodoEditor/TodoEditor';
import Clock from './components/Clock/Clock';
import shortid from 'shortid';

// import ApiServise from './Api/Apiservise';

export default class App extends Component {
  state = {
    todos: [],
    filter: '',
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const todosParse = JSON.parse(todos);
    if (todosParse) {
      this.setState({ todos: todosParse });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [...todos, todo],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizeFilter),
    );
  };

  render() {
    const { filter } = this.state;

    const visibleTodos = this.getVisibleTodos();
    return (
      <div className={'container'}>
        <Clock />

        <TodoEditor onSubmit={this.addTodo} />
        <TodoFilter value={filter} onChange={this.changeFilter} />

        <TodoList todos={visibleTodos} onDeleteTodos={this.deleteTodo} />
      </div>
    );
  }
}

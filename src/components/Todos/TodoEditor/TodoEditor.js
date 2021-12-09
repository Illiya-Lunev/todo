import { Component } from 'react';
import shortid from 'shortid';

export default class TodoForm extends Component {
  state = { message: '' };

  inputId = shortid.generate();

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);
    this.reset();
  };

  handleChange = e => {
    this.setState({ message: e.target.value });
  };

  reset = () => {
    this.setState({ message: '' });
  };

  render() {
    const { message } = this.state;
    return (
      <form className={'todo-editor__form'} onSubmit={this.handleSubmit}>
        <label htmlFor={this.inputId}>
          Добавить
          <input
            id={this.inputId}
            type="text"
            value={message}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Сохранить</button>
      </form>
    );
  }
}

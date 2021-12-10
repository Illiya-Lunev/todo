import { Component } from 'react';
import shortid from 'shortid';
import Notiflix from 'notiflix';

export default class TodoForm extends Component {
  state = { message: '' };

  inputId = shortid.generate();

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.message.trim() === '') {
      return Notiflix.Notify.warning('Пожалуйста введите Ваш текст!');
    }
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
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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

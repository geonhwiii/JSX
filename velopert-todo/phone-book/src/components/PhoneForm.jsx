import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: '',
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({ name: '', phone: '' })
  }

  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="name" name="name" value={name} onChange={this.handleChange}/>
        <input placeholder="phone number" name="phone" value={phone} onChange={this.handleChange}/>
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;
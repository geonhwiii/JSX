import React, { Component } from 'react'

export default class NameList extends Component {
  static defaultProps = {
    names: [],
  }
  renderList() {
    const { names } = this.props;
    const nameList = names.map(
      (name, i) => (<li key={i}>{name}</li>)
    );
    return nameList;
  }

  render() {
    return (
      <ul>
        { this.renderList() }
      </ul>
    )
  }
}

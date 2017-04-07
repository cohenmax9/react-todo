import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      description: props.description,
      date: props.date
    };
  }

  render() {
    return (
      <li>
        {this.state.title} --- {this.state.description} --- {this.state.date.toDateString()}
      </li>
    );
  }
}

export default Todo;

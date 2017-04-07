import React from 'react';
import Todo from './Todo.jsx';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      items: []
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  render() {
    return (
          <div>
            <input ref="title" type="text" placeholder="Enter Title" onChange={this.updateTitle} />
            <input ref="description" type="text" placeholder="Description" onChange={this.updateDescription} />
            <input type="button" value="Add" onClick={this.addItem} />
            <ul>
              {
                this.state.items.map((item, key) => {
                  return (
                    <Todo
                      key={item.title}
                      title={item.title}
                      description={item.description}
                      date={item.date}
                    />
                  );
                })
              }
            </ul>
          </div>
    );
  }

  updateTitle(e) {
    this.setState({ title : e.target.value });
  }

  updateDescription(e) {
    this.setState({ description : e.target.value });
  }

  addItem(e) {
    var cur_items = this.state.items;

    var newItem = {
        title: this.state.title,
        description: this.state.description,
        date: new Date()
    };

    cur_items.push(newItem);

    this.setState({
      title: "",
      description: "",
      items: cur_items
    });

    this.refs.title.value = "";
    this.refs.description.value = "";
  }
}

export default TodoList;

import React from 'react';
import {render} from 'react-dom';
import TodoList from './TodoList.jsx';

class App extends React.Component {
  render() {
    return <TodoList />;
  }
}

render(<App />, document.getElementById('app'));

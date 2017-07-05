import React from 'react';
import ReactDOM from 'react-dom';

import todos from './todos';
import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    nextId() {
        this._nextId = this._nextId || 4;
        return this._nextId++;
    }

    handleAdd(title) {
        const todo = {
            id: this.nextId(),
            title,
            completed: false
        };

        const todos = [...this.state.todos, todo];

        this.setState({ todos });
    } 

    handleDelete(id) {
        const todos = this.state.todos.filter(todo => todo.id !== id);

        this.setState({ todos });
    }

    handleToggle(id) {
        const todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.setState({ todos });
    }

    handleEdit(id, title) {
        const todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }

            return todo;
        });

        this.setState({ todos });
    }

    render() {
        return (
            <main>
                <Header todos={this.state.todos} />

                <section className="todo-list">
                    {this.state.todos.map(todo => 
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onDelete={this.handleDelete}
                            onToggle={this.handleToggle}
                            onEdit={this.handleEdit}
                        />)
                    }
                </section>

                <Form onAdd={this.handleAdd} />
            </main>
        );
    }
}

App.propTypes = {
    initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    })).isRequired
};

ReactDOM.render(<App initialData={todos} />, document.getElementById('root'));
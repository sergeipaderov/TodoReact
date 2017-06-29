import React from 'react';

function Stats(props) {

    let total = props.todos.length;
    let completed = props.todos.filter(todo => todo.completed).length;
    let notCompleted = total - completed;

    return(
        <table>
            <tbody>
                <tr>
                    <th>All :</th>
                    <tb>{total}</tb>
                </tr>
                <tr>
                    <th>Done :</th>
                    <tb>{completed}</tb>
                </tr>
                <tr>
                    <th>Left :</th>
                    <tb>{notCompleted}</tb>
                </tr>
            </tbody>
        </table>
    );
}

Stats.propTypes = {
    todos: React.PropTypes.array.isRequired
}

export default Stats;
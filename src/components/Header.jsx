import React from 'react';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

function Header(props) {
    return (
        <header>
            <Stats todos={props.todos} />
            <h1>React Todo</h1>
            <Stopwatch />
        </header>
    );
}

Header.propTypes = {
    todos: React.PropTypes.array.isRequired
};

export default Header;
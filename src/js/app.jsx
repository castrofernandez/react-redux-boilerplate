import React from 'react';
import styled from 'styled-components';
import Example from './components/example';
import ExampleContext from './context/example';

const DecoratedSpan = styled.span`
    font-style: italic;
    font-weight: normal;
    color: #666666;
`;

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ExampleContext.Provider value={'Hello World'}>
                <h1 className="title">
                    React+Redux boilerplate <DecoratedSpan>(with styled components)</DecoratedSpan>
                </h1>
                <Example />
            </ExampleContext.Provider>
        );
    }
}

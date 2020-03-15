import React from 'react';
import styled from 'styled-components';

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
            <React.Fragment>
                <h1 className="title">
                React+Redux boilerplate <DecoratedSpan>(with styled components)</DecoratedSpan>
                </h1>
            </React.Fragment>
        );
    }
}

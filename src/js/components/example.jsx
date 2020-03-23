import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import exampleContainer from '../containers/example.container';
import ExampleContext from '../context/example';

const Example = ({ example }) => {
    const context = useContext(ExampleContext);

    return (
        <React.Fragment>
            <p>store: {example}</p>
            <p>context: {context}</p>
        </React.Fragment>
    );
};

Example.propTypes = {
    example: PropTypes.string.isRequired
};

export default exampleContainer(Example);

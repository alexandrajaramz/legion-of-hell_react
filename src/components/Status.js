import React from 'react';
import PropTypes from 'prop-types';


class Status extends React.Component {
    render() {
        return (
            <p>{this.props.filteredUsersNumber === 1 ? 'Mostrando 1 registro':`Mostrando ${this.props.filteredUsersNumber} registros`} </p>
        );
    }
}

Status.propTypes = {
    filteredUsersNumber: PropTypes.number.isRequired
}

export default Status;
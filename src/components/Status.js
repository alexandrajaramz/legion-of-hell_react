import React from 'react';

class Status extends React.Component {
    render() {
        return (
            <p>{this.props.filteredUsersNumber === 1 ? 'Mostrando 1 registro':`Mostrando ${this.props.filteredUsersNumber} registros`} </p>
        );
    }
}

export default Status;
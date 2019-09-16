import React from 'react';
import DataCard from './DataCard';

class DataList extends React.Component {
    render() {
        return (
            <ul className="user__list">
                {this.props.filteredData.map((user, index) => {
                    return (
                        <li className="user" key={index}>
                            <DataCard 
                                name={user.name} 
                                email={user.email}
                                passwords={user.passwords}
                                bank={user.bank} 
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default DataList;